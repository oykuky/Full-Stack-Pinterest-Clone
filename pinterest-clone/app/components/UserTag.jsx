'use client'
import React from 'react'
import Image from 'next/image';

function UserTag({user}) {
    console.log(user);
    return (
      <div>
        {user? 
        <div className='flex gap-3 items-center'>
            <Image src={user.image} alt='user.img' width={50} height={50}
            className='rounded-full '/>
            <div>
            <h2 className='text-[15px] font-medium'>{user.name}</h2>
            <h2 className='text-[15px]'>{user.email}</h2>
            </div>
        </div> 
        : null 
        }
      </div>
    )
}

export default UserTag
