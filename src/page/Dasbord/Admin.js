import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import '../../App.css'
const Admin = () => {

    const [userdata, setUserdata] = useState([])
    const [filterval, setfilterval] = useState('')
    const [searachApi, setsearachApi] = useState([])
    const [chancel, setChancel] = useState(false)
    const [isloding, setisloding] = useState(true)


    useEffect(() => {
        getusers()


    }, [])

    const getusers = async () => {
        try {
            const booksdata = await axios.get("https://638dc11aaefc455fb2aaf125.mockapi.io/library")
            setUserdata(booksdata.data)
            setsearachApi(booksdata.data)
            setisloding(false)
        } catch (error) {
            console.log(error);
        }
    }

    // ! delet user

    const deletUser = async (id) => {
        try {
            let confirmdel = window.confirm("ary you sure...")
            if (confirmdel) {
                await axios.delete(`https://638dc11aaefc455fb2aaf125.mockapi.io/library/${id}`)
            }
            getusers()
        } catch (error) {
            console.log(error);
        }
    }
    const handelfilter = (event) => {
        setfilterval(event.target.value)

        if (event.target.value === " ") {
            return
        } else {
            const searchFilter = searachApi.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
            setUserdata(searchFilter)
        }
    }

    return (
        <div>
            <div className='createbooks'>
                <div >
                    <h3>Table</h3>
                </div>
                <div>
                    <Link to={"/createbooks"}>
                        <button className='btn btn-success'>Create Books</button>
                    </Link>
                </div>
            </div>
            <div className='col-lg-5 d-flex'>
                <div className='search-input'>
                    <input className='form-control ' value={filterval} onChange={(e) => handelfilter(e)} onClick={(() => { setChancel(true) })} />
                    {
                        chancel ? <button className=' chancex' onClick={() => {
                            setfilterval('')
                            setChancel(false)
                            getusers()
                        }}>X</button> : ""
                    }
                </div>
                <button className='btn btn-success ml-3 seacrc'>Search</button>


            </div>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Books Name</th>
                        <th scope="col">Auther</th>
                        <th scope="col">Book publish Year</th>
                        <th colSpan={3} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        isloding ? <img src="https://media.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif" /> :
                            userdata.map((val, idx) => {
                                return (
                                    <tr key={idx}  >
                                        <td>{val.name}</td>
                                        <td>{val.author}</td>
                                        <td className="year" ><b>{val.Year}</b></td>
                                        <Link to={`/bookview/${val.id}`}>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>View</button>
                                            </td>
                                        </Link>
                                        <Link to={`/editbook/${val.id}`}>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>
                                                    Edit
                                                </button>
                                            </td>
                                        </Link>
                                        <td>
                                            <button className='btn btn-danger btn-sm' onClick={() => {
                                                deletUser(val.id)
                                            }}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            })
                    }



                </tbody>
            </table>
        </div>
    )
}

export default Admin
