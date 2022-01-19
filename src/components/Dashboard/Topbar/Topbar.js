import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language ,Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">
                            Admin Invoice
                        </span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone />
                            <span className="topbarIconBag">
                                2
                            </span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language />
                        </div>
                        <div className="topbarIconContainer">
                            <Settings />
                        </div>
                        <img src="img/pic1.png" alt="ProfilePic" className="topAvatar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
