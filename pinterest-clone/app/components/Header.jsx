"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch,HiBell,HiChat } from "react-icons/hi";
import app from './../Shared/firebaseConfig'
import { useRouter } from 'next/navigation';


function Header() {
  const {data : session} = useSession();
  // console.log(session);
  const db = getFirestore(app);
  useEffect(()=>{
    saveUserInfo();
  },[session])

  const saveUserInfo = async () => {
    if (session?.user) {
         console.error("Email is undefined");
      const email = session.user.email;
      if (email) {
        try {
          await setDoc(doc(db, "user", email), {
            userName: session.user.name || "Unknown",
            email: email,
            userImage: session.user.image || ""
          });
          console.log("User info saved to Firestore");
        } catch (error) {
          console.error("Error writing document: ", error);
        }
      } else {
        console.error("Email is undefined");
      }
    } else {
      console.error("No user session found");
    }
  };
   
  const router = useRouter();

  return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-6 '>
        <Image src='/logo.png' alt="logo" width={50} height={50}
         className='hover:bg-gray-300 p-3 rounded-full curser-pointer'/>
        <button  onClick={()=>router.push('/')} className='text-white bg-black p-3 px-4 rounded-full hidden md:block '>
             Home
        </button>
        <button onClick={()=>router.push('/pin-builder')} className='p-3 px-4 rounded-full hidden md:block font-semibold'>
        Create
        </button>

        <div className=' bg-[#e9e9e9] p-3 gap-3 item-center rounded-full w-full hidden md:flex  hover:bg-gray-300'>
            <HiSearch className='text-[25px] text-gray-500' />
            <input type="text" placeholder='Search' className='bg-transparent outline-none'/>
        </div>
        <HiSearch className="text-[25px] text-gray-500 md:hidden"/>
        <HiBell  className=" text-[50px] text-gray-500 hover:bg-gray-200 rounded-full" />
        <HiChat className="text-[50px] text-gray-500 hover:bg-gray-200 rounded-full " />
        
        { session?.user? 
        <Image src={session.user.image || '/default-user.png'} 
         onClick={()=>router.push('/'+ session?.user?.email)}
         width={50} height={50} alt='user-img' 
         className='hover:bg-gray-300 p-2 rounded-full curser-pointer'/>  
          :
        <button className='p-3 px-4 rounded-full cursor-pointer hidden md:block font-semibold' onClick={ ()=> signIn() }>
          Login
        </button>}

    </div>
  )
}

export default Header


// HATA ÇÖZÜMLERİ
// Image src için default değer ekleme:
//  session?.user?.image || '/default-user.png' ifadesi ile session.user.image değeri null veya undefined ise varsayılan bir resim yolu kullanılır.

// setDoc için email kontrolü: 
// const email = session.user.email; if (email) { ... } ifadesi ile email değeri kesin olarak string türünde olduğundan emin olunur ve bu değer doc fonksiyonuna geçilir.