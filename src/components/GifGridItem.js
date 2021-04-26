import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    // console.log([id, title, url])
    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}


//<div class="animate__animated animate__bounce animate__delay-2s">Example</div>

