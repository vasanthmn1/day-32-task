import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editbooks = () => {

    // useState
    let navigate = useNavigate()
    const [isLoding, setisLoding] = useState(false)
    const props = useParams()


    useEffect(() => {
        getuser()
    }, [])

    const getuser = async () => {
        let data = await axios.get(`https://638dc11aaefc455fb2aaf125.mockapi.io/library/${props.id}`)
        myFormik.setValues((data.data))

    }

    const myFormik = useFormik({
        initialValues: {
            name: "",
            author: "",
            Year: "",
            viewbook: ""
        },
        validate: (value) => {
            let err = {}
            if (!value.name) {
                err.name = "enter Book Name"
            }
            if (!value.author) {
                err.author = "enter author Name"
            }
            if (!value.Year) {
                err.Year = "enter Year"
            }
            // else if (value.Year.length < 4) {
            //     err.Year = "maximam number 4"
            // }
            // else if (value.Year.length > 4) {
            //     err.Year = "maximam number 4"
            // }
            if (!value.viewbook) {
                err.viewbook = "enter Year"
            }
            return err
        },
        onSubmit: async (val) => {
            try {
                setisLoding(true)
                await axios.put(`https://638dc11aaefc455fb2aaf125.mockapi.io/library/${props.id}`, val)
                navigate('/admin')
            } catch (error) {
                console.log(error)
            }

        }
    })

    return (
        <div className='container'>
            <form onSubmit={myFormik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-5'>
                        <label className='form-lable'>book</label>
                        <input value={myFormik.values.name}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                            name="name"
                            className="form-control" />
                        <span className='text-danger' >{myFormik.errors.name}</span>
                    </div>
                    <div className='col-lg-5'>
                        <label className='form-lable'>Author</label>
                        <input
                            onChange={myFormik.handleChange}
                            name="author"
                            value={myFormik.values.author} className="form-control" />
                        <span className='text-danger' >{myFormik.errors.author}</span>

                    </div>

                    <div className='col-lg-5'>
                        <label className='form-lable'>Year</label>
                        <input type="number"
                            name="Year"
                            className="form-control"
                            onChange={myFormik.handleChange}
                            value={myFormik.values.Year}
                        />
                        <span className='text-danger' >{myFormik.errors.Year}</span>

                    </div>

                    <div className='col-lg-12'>
                        <label className='form-lable h4 '>Books Pages</label>
                        <textarea className="form-control"
                            name='viewbook'
                            value={myFormik.values.viewbook}
                            onChange={myFormik.handleChange}

                        />
                        <span className='text-danger' >{myFormik.errors.viewbook}</span>

                    </div>
                </div>
                <button disabled={isLoding} type='sumit' className={isLoding ? "btn btn-success  " : "btn btn-primary"}>{isLoding ? "Success" : "Edit"}</button>

            </form>
        </div>
    )
}

export default Editbooks
