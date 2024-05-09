import React, { useState } from 'react'
import { useTodo } from '../Context/Context'

const ThemeBtn = () => {
    const [themeMode, setThemeMode] = useState('dark')
    const { darkTheme, lightTheme } = useTodo()

    const themebtnClick = () => {
        if (themeMode == 'light') {
            setThemeMode('dark')
            darkTheme()
        }
        else if (themeMode == 'dark') {
            setThemeMode('light')
            lightTheme()
        }
    }

    return (
        <div className='text-right pr-6'>
            <button onClick={themebtnClick} className='p-0.5 rounded-md border-2 border-gray-500 dark:border-gray-300'>
                <img src={themeMode == 'dark' ? "/image.png" : "/download.png"} alt="Theme Mode" className='w-10 h-10' />
            </button>
        </div>
    )
}

export default ThemeBtn