import React from 'react'
import { Link } from 'react-router-dom'
import {
    BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
}
    from 'react-icons/bs'
import { FaComments } from "react-icons/fa"
import { IoMdAnalytics } from "react-icons/io"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    < FaComments className='icon_header' /> SocialMedia
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Profiles">
                        <BsFillArchiveFill className='icon' /> Profiles
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Posts">
                        <BsFillGrid3X3GapFill className='icon' /> Posts
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Analytics">
                        < IoMdAnalytics className='icon' /> Analytics
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Settings">
                        <BsFillGearFill className='icon' /> Settings
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
