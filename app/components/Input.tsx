import React from 'react'

interface IInput {
  type: string;
  placeholder?: string;
  label: string;
  htmlFor?: string
}

const Input = ({ type, placeholder, label, htmlFor }: IInput) => {
  return (
    <div>
      <label htmlFor={htmlFor} className='font-semibold leading-6 text-neutral-500'>{label}</label>
      <div className='mt-2.5'>
        <input type={type} placeholder={placeholder} name={htmlFor} className='w-full focus:border-sky-700 focus-visible:outline-none px-3 py-2 placeholder:text-neutral-500 text-gray-300 rounded-md bg-transparent border-neutral-600 border' />
      </div>
    </div>
  )
}

export default Input