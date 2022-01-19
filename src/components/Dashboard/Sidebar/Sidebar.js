import React from 'react'
import "./Sidebar.css"
import { Dashboard, Receipt } from "@mui/icons-material"
import { NavLink } from 'react-router-dom'

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
                            <li>
                                <NavLink to="/dashboard" className={(navData) => navData.isActive ? "sidebarListItem active" : "sidebarListItem"}>
                                   <Dashboard className="sidebarIcon"/>
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Invoice
                        </h3>
                        <ul className="sidebarList">
                            <li>
                                <NavLink to="/invoice" className={(navData) => navData.isActive ? "sidebarListItem active" : "sidebarListItem"}>
                                    <Receipt className="sidebarIcon"/>
                                    Invoice Page
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
