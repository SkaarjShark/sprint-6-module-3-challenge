import React from 'react'

export default function Photo(props) {

    return (
        <div className='photo'>
            <div className='photo-info'>
                <h1>{props.photo.title}</h1>
                <div>Date of photo: {props.photo.date}</div>
                <div>About: {props.photo.explanation}</div>
            </div>
            <img src={props.photo.url}></img>
            <div>Copyright: {props.photo.copyright}</div>
        </div>
    )
}