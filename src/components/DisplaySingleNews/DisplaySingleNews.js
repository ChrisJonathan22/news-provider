import React from 'react';
import './DisplaySingleNews.scss';

export default function DisplaySingleNews (props) {
    let news = props.location.selectedNews;
    let date = new Date(Date.parse(news.publishedAt)).toDateString();

    return (
        <div className="single_news_container">
            <span className="single_news_author">{ news.author }</span>
            <h2 className="single_news_title">{ news.title }</h2>
            <span className="single_news_time_published">{ date }</span>
            <img className="single_news_image" src={ news.urlToImage } alt={ news.title } />
            <p className="single_news_content">{ news.content }</p>
        </div>
    )
}