import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: string
  placeholder?: string
  label: string
  id: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
}

const Input = ({
  type,
  placeholder,
  label,
  id,
  disabled,
  register,
  required,
  errors,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="font-semibold leading-6 text-neutral-500">
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={`w-full focus:border-sky-700 focus-visible:outline-none px-3 py-2 placeholder:text-neutral-500 text-gray-300 rounded-md bg-transparent border-neutral-600 border
          ${errors[id] && 'focus:ring-rose-500'}
          ${disabled && 'opacity-50 cursor-default'}`}
        />
      </div>
    </div>
  )
}

export default Input
