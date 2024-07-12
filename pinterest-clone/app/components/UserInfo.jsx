import React from 'react'
import Image from 'next/image'
import { signOut, useSession } from "next-auth/react"


function UserInfo({userInfo}) {
 
    const { data: session } = useSession();

    const Logout = () => {
      signOut({
        callbackUrl: '/',
      });
    }

    return (
      <div className='flex flex-col items-center'>
        <Image 
          src={userInfo.userImage} 
          width={105} 
          height={105} 
          alt='profile_img'
          className='rounded-full mt-5'
        />
        <h2 className='text-[30px] font-semibold mt-3'>{userInfo.userName}</h2>
        <h2 className='text-gray-400 mt-3'>{userInfo.email}</h2>

        <div className='flex flex-row p-2'>
          <button className='bg-gray-200 p-2 px-4 font-semibold mt-5 rounded-full'>Share</button>
          <button className='bg-gray-200 p-2 px-4 ml-3 font-semibold mt-5 rounded-full'>Edit Profile</button>
        </div>

        {session?.user.email == userInfo.email ? 
          <button className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'
            onClick={Logout}>Logout</button> : null}
      </div>
    )
}

export default UserInfo
