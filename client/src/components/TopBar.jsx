import React from 'react';
import { SiFacebook, SiTwitter, SiPinterest, SiInstagram } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

export default function TopBar() {
  return (
    <div className='w-full h-12 bg-orange-600 sticky top-0 flex items-center justify-around'>
      <div className="topleft flex ">
        <SiFacebook size={30} className='mr-2 cursor-pointer text-gray-700 ml-3' />
        <SiTwitter size={30} className='mr-2 cursor-pointer text-gray-700 ml-3' />
        <SiPinterest size={30} className='mr-2 cursor-pointer text-gray-700 ml-3' />
        <SiInstagram size={30} className='mr-2 cursor-pointer text-gray-700 ml-3' />
      </div>
      <div className="topCenter flex">
        <ul className='flex justify-center m-0 p-0 list-none'>
          <li className='mr-5 text-lg font-light cursor-pointer' >HOME</li>
          <li className='mr-5 text-lg font-light cursor-pointer' >ABOUT</li>
          <li className='mr-5 text-lg font-light cursor-pointer' >CONTACT</li>
          <li className='mr-5 text-lg font-light cursor-pointer' >WRITE</li>
          <li className='mr-5 text-lg font-light cursor-pointer' >LOGOUT</li>
        </ul>
      </div>
      <div className="topRight flex  justify-center items-center">
        <CgProfile className='flex w-10 h-10 ml-4 mr-1' />
        <BsSearch className='flex w-10 h-10 ml-4 mr-4' />
      </div>
    </div>
  );
}
