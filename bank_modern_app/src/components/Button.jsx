import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className='rounded-[10px] font-poppins text-primary outline-none ${styles} font-medium text-[18px] py-4 px-6 bg-blue-gradient'>
      Get Started
    </button>
  )
}

export default Button