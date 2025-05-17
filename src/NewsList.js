import React from 'react';
import NewsItem from './NewsItem'

function NewsList({ news }) {
    return (
        <div className="News">
        {news.map(item => (
            <NewsItem key={item.id} title={item.title} text={item.text} image={item.image}/>
        ))}
        </div>
    );
}


export default NewsList;