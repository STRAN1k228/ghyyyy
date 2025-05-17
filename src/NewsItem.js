import React from 'react';

function NewsItem({ title, text, image }) {
    return (
    <article className="news-item">
        <h2>{title}</h2>
        <p>{text}</p>
        <img src={image} alt='соре'></img>
    </article>
    );
}


export default NewsItem;
