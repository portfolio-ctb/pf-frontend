"use client"
import React, { useEffect, useState } from 'react'
import { Mode } from '../constants/SwitchMode'
import { useTheme } from 'next-themes'

const ButtonMode = ({ mode, theme, changeMode }: { mode: Mode, theme: string | undefined, changeMode: any }) => {
  return (<button className={`text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300 w-7 rounded-full p-1 ${theme === mode && 'bg-neutral-300 dark:bg-neutral-500 text-neutral-600 dark:text-neutral-200'}`} onClick={() => changeMode(mode)}>
    {mode === Mode.DARK ?
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
      : mode === Mode.LIGHT ? <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
        : <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
    }
  </button>)
}

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const changeMode = (mode: Mode) => {
    setTheme(mode)
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='border border-neutral-300 dark:border-neutral-700 flex items-center justify-center w-fit px-0.5 py-0.5 gap-0.5 rounded-full'>
      <ButtonMode mode={Mode.DARK} theme={theme} changeMode={changeMode} />
      <ButtonMode mode={Mode.LIGHT} theme={theme} changeMode={changeMode} />
      <ButtonMode mode={Mode.SYSTEM} theme={theme} changeMode={changeMode} />
    </div>
  )
}

export default SwitchMode