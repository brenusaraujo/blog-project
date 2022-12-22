import React from 'react';

function Header() {
  return (
    <div className='mt-[60px]'>
      <div className='flex flex-col items-center text-gray-600'>
        <span className='absolute top-[18%] text-[20px]'>React & node</span>
        <span className='absolute top-[20%] text-[100px]'>blog</span>
      </div>
      <img
        className='w-full h-[450px] mt-20 object-cover'
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="header image"
      />
    </div>
  );
}

export default Header
