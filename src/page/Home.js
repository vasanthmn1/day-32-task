import React from 'react'
import { Outlet } from 'react-router-dom'
import Sliderbar from './Sliderbar'
import Topbar from './Topbar'

const Home = () => {
    return (
        <div>
            <div className="warpeer d-flex">
                <Sliderbar />
                <div id="content-wrapper" className="d-flex flex-column w-100">
                    <div id="content">
                        <Topbar />
                        <div className='container-fluid'>
                            <Outlet />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
