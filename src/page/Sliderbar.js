import React from 'react'
import { Link } from 'react-router-dom'

const Sliderbar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Library</div>
            </a>


            <hr className="sidebar-divider my-0" />
            {/* admin */}
            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link className="nav-link" to="/admin">

                    <span>Admin Library</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link className="nav-link" to="/booklist">

                    <span>Book List</span></Link>
            </li>
            <hr className="sidebar-divider" />











        </ul>
    )
}

export default Sliderbar
