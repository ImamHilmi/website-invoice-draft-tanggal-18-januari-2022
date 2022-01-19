import React from 'react'
import "./Sidebar.css"
import { Dashboard, Receipt } from "@mui/icons-material"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Dashboard
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <Dashboard className="sidebarIcon"/>
                                Home
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Invoice
                        </h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <Receipt className="sidebarIcon"/>
                                Invoice Page
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
