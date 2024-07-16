import {React} from 'react'
import {useSearchContext} from '../hooks/useSearchContext'
import { HiSearch} from "react-icons/hi";


function Input() {
  const {search,setSearch} = useSearchContext();
  console.log(search);
  return (
    
    <div className=' bg-[#e9e9e9] p-3 gap-3 item-center rounded-full w-full hidden md:flex  hover:bg-gray-300'>
      <HiSearch className='text-[25px] text-gray-500' />
    <input type="text" placeholder='Search' className='bg-transparent outline-none' value={search} onChange={(e)=>setSearch(e.target.value)}/>
   </div>
  )
}

export default Input


