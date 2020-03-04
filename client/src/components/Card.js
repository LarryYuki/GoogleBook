import React from 'react'
import API from "../utils/API"

function Card(props) {
    return (
        <div>
           <h1><a href={props.everything.volumeInfo.previewLink}>{props.everything.volumeInfo.title}</a></h1>
           <p>{props.everything.volumeInfo.authors}</p>
           <p>{props.everything.volumeInfo.description}</p>
           <a>{props.everything.selfLink}</a>
           {props.everything.volumeInfo.imageLinks ? (<img style={{height:'100px', width: "100px"}}
           src={props.everything.volumeInfo.imageLinks.thumbnail}></img> ) :"no image"}
          <button onClick={
              ()=>{
                    API.saveBook({
                        title: props.everything.volumeInfo.title,
                        authors: props.everything.volumeInfo.authors,
                        description: props.everything.volumeInfo.description,
                        image: props.everything.volumeInfo.imageLinks.thumbnail,
                        link: props.everything.volumeInfo.previewLink
                    }).then(res => console.log(res)
                    )
              }
          }></button>
        </div>
    )
    
}


export default Card
