import React, {useEffect, useState} from "react"
import API from "../utils/API"

function Saved() {
    const [books, setbooks]= useState({books:[]})
    useEffect(()=>{
        API.getBooks().then(res=>{
            console.log(res)
            setbooks({books: res.data})
        }
            )
    },[])


    return (
        <div>
           API
           {books.books.map((book,i)=>{
               return <h1>{book.title}</h1>
           })}
        </div>
    )
}

export default Saved

