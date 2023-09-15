import React from 'react'

const Button = ({styles}) => {
  return (
   <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-[16px] ${styles} font-poppins text-[18px] outline-none rounded-[10px]`}>
    Get Started
   </button>
  )
}

export default Button
