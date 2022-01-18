import React, { useState } from 'react'
import FormLogin from './FormLogin'
import FormSuccess from './FormSuccess'
import './Form.css' 

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='spaceship' />
                </div>
                { !isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess /> }
            </div>
        </>
    )
}

export default Form