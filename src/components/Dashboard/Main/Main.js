import React from 'react'
import Home from '../../../pages/Home/Home'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import "./Main.css"

const Main = () => {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </>
    )
}

export default Main
