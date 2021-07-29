import React from 'react'
import './Post.css'


function Post({author, content, image, date}){
    return(
        <div className='post'>
        <header>
            <div className='avatar'>
                <img src={author.photo} alt={author.photo} />
            </div>
            <h1>{author.name}</h1>
            <span>{author.nickname}</span>
            <span>{date}</span>
        </header>
        <main>
            <p>{content}</p>
            <div className='contentImg'>
                <img src={image} alt={author.name} />
            </div>
        </main>
        <footer></footer>
        </div>
    )        
}

export default Post