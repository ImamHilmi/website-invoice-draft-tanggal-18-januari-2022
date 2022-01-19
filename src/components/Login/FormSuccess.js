import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Dashboard/Main/Main'

const FormSuccess = () => {
    return (
        <>
            <div>
                <Routes>
                     <Route exact path="/" element={<Main />} />
                </Routes>
            </div>
        </>
    )
}

export default FormSuccess
