import React from 'react'

function Card(props) {
    return (
        <div>
           <h1>{props.everything.volumeInfo.title}</h1>
           <p>{props.everything.volumeInfo.authors[0]}</p>
        </div>
    )
}

export default Card
