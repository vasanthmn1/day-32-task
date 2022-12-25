import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Bookview = () => {

    const data = useParams()

    const [books, setbooks] = useState([])
    const [islodind, setislodind] = useState(true)

    useEffect(() => {
        getuser()
    }, [])

    const getuser = async () => {
        try {
            const book = await axios.get(`https://638dc11aaefc455fb2aaf125.mockapi.io/library/${data.id}`)
            setbooks(book.data)
            setislodind(false)
        } catch (error) {
            console.log(error);
        }

    }
    console.log(books)

    return (
        <>
            {
                islodind ? <img src="https://media.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif" /> :
                    <div>
                        <h1>{books.name}</h1>
                        <h5>{books.author}</h5>

                        <div className='border border-primary p-4'>

                            <p>{books.viewbook}</p>
                        </div>
                        <div>
                            <Link to={`/booklist`} >
                                <button className='btn btn-primary'>Back</button>

                            </Link>
                        </div>
                    </div>
            }

        </>
    )
}

export default Bookview
