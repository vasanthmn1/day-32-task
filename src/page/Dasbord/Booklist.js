import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Booklist = () => {

    const [users, setusers] = useState([])
    const [searchApi, setsearchApi] = useState([])
    const [filterval, setfilterval] = useState('')
    const [chancel, setChancel] = useState(false)
    const [ISloding, setISloding] = useState(true)
    const getUsers = async () => {
        try {
            const userList = await axios.get(`https://638dc11aaefc455fb2aaf125.mockapi.io/library`)
            setusers(userList.data)
            setsearchApi(userList.data)
            setISloding(false)
        } catch (error) {
            console.log(error);
        }
    }


    const searchHandel = (event) => {
        if (event.target.value === " ") {
            users(searchApi)
        } else {
            const search = searchApi.filter((val) => val.name.toLowerCase().includes(event.target.value.toLowerCase()))
            setusers(search)
            setChancel(true)

        }
        setfilterval(event.target.value)
        console.log(filterval);
    }


    useEffect(() => {
        getUsers()
    }, [])




    return (
        <div>
            <div className='col-lg-5 d-flex'>
                <div className='search-input'>
                    <input className='form-control '
                        value={filterval}
                        onChange={(e) => { searchHandel(e) }}
                    />
                    {
                        chancel ?
                            <button className=' chancex' onClick={() => {
                                getUsers()
                                setChancel(false)
                                setfilterval('')
                            }}>X</button>
                            :
                            ""
                    }

                </div>
                <button className='btn btn-success ml-3 seacrc'
                // onClick={(() =>)}

                >Search</button>


            </div>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Books Name</th>
                        <th scope="col">Auther</th>
                        <th scope="col">Book publish Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ISloding ? <img src="https://media.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif" /> :

                            users.map((val, idx) => {
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
                                    </tr>
                                )
                            })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Booklist
