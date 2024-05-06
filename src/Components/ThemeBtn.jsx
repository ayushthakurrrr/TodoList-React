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
            <button onClick={themebtnClick}>
                <img src={themeMode == 'dark' ? "/image.png" : "https://img.icons8.com/?size=156&id=SyBDr18WdUcD&format=png"} alt="Theme Mode" className='w-10 h-10' />
            </button>
        </div>
    )
}

export default ThemeBtn