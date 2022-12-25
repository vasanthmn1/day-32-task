import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import Admin from './page/Dasbord/Admin'
import Booklist from './page/Dasbord/Booklist'
import Bookview from './page/Dasbord/Bookview'
import Creatbooks from './page/Dasbord/Creatbooks'
import Editbooks from './page/Dasbord/Editbooks'
import Home from './page/Home'
import Topbar from './page/Topbar'

const Portal = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path='booklist' element={<Booklist />}></Route>
                        <Route path='admin' element={<Admin />} />
                        <Route path='bookview/:id' element={<Bookview />} />
                        <Route path='createbooks' element={<Creatbooks />} />
                        <Route path='editbook/:id' element={<Editbooks />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Portal
