import React , {useEffect, useState} from 'react'
import axios from 'axios'
import Card from "../components/Card"


 
function Search() {
    const [getSearch,setSearch]= useState("")
    const [getresult,setresult]= useState([])
    useEffect(() => {
        if(!getSearch){
            return
        }
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+getSearch
        ).then(response =>{
            setresult(response.data.items)
            console.log(response.data.items)
        })
        }       , 
            [getSearch]);

    return (
        <div> 
            <input type="text" 
                value={getSearch} 
                onChange={e => setSearch(e.target.value)}
                
                />
                <button />
            This is search: {getSearch}
            {getresult?getresult.map(
                (result,index)=>{
                return  <Card key={index} everything={result}/>
            }): "no results"}
        </div>
    )
}

export default Search
