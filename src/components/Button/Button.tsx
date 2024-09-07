
import './Button.css'
import React from 'react'


type Button = {
    onclick: () => void;
}
export const Button = ({onclick}: Button) => {
    return (
        <button onClick={onclick} className='button'>teste</button>
    )
}