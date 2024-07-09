import React from 'react'
import Image from 'next/image'
import { FaChevronDown } from "react-icons/fa6";
import { HiSearch,HiBell,HiChat } from "react-icons/hi";


function Header() {
  return (
    <div className='flex justify-between gap-3 md:gap-2 items-center p-6 '>
        <Image src='/logo.png' alt="logo" width={50} height={50}
         className='hover:bg-gray-300 p-3 rounded-full curser-pointer'/>
        <button className='text-white bg-black p-3 px-4 rounded-full hidden md:block '>
             Home
        </button>
        <button className='p-3 px-4 rounded-full hidden md:block font-semibold'>
        Create
        </button>

        <div className=' bg-[#e9e9e9] p-3 gap-3 item-center rounded-full w-full hidden md:flex  hover:bg-gray-300'>
            <HiSearch className='text-[25px] text-gray-500' />
            <input type="text" placeholder='Search' className='bg-transparent outline-none'/>
        </div>
        <HiSearch className="text-[25px] text-gray-500 md:hidden"/>
        <HiBell  className=" text-[50px] text-gray-500 hover:bg-gray-200 rounded-full" />
        <HiChat className="text-[50px] text-gray-500 hover:bg-gray-200 rounded-full " />
        <Image src='/man.png' width={50} height={50} alt='user-img' 
         className='hover:bg-gray-300 p-2 rounded-full curser-pointer'/>

    </div>
  )
}

export default Header
