'use client'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import Input from '../components/Input'

const Login = () => {
  // const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  // const socialAction = (action: string) => {
  //   setLoading(true)
  // }
  return (
    <div className="mx-auto lg:p-24 p-6 gap-2 bg-none">
      <h1 className="font-bold mx-auto text-3xl max-w-2xl text-center text-sky-600">
        Log in to Porfolio
      </h1>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 max-w-md"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            label="Email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            type="password"
            placeholder="Your password"
            label="Password"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-1 filter-none accent-sky-600"
              id="remember"
              name="remember"
            />
            <label htmlFor="remember" className="text-neutral-500">
              Remember me
            </label>
          </div>
          <a href="/forgot-password" className="text-sky-600 font-semibold">
            Forgot password?
          </a>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full border border-sky-700 rounded-md hover:border hover:border-sky-700 bg-sky-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
