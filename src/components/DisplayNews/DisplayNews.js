import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayNews.scss';
import Spinner from '../Spinner/Spinner';
import store from '../../store/store';

export default function (props) {
    let [ newsToShow, setNews ] = useState([]);
    let [ selectedNewsID, setSelectedNewsID ] = useState(0);

    store.subscribe(() => {
        setNews(props.page === 'all_news' ? store.getState().allNews : store.getState().topNews);
    });

    function handleActiveNews (id) {
        setSelectedNewsID(id);
    }
    
    return (
        <Fragment>
            { 
                newsToShow.length ?
                <main className="news_container">
                    <article className="single_news">
                        <div className="author_container"><span className="author">{ newsToShow[selectedNewsID].author }</span></div>
                        <div className="news_title"><h2>{ newsToShow[selectedNewsID].title }</h2></div>
                        <div className="news_image_container"><img src={ newsToShow[selectedNewsID].urlToImage } alt={ newsToShow[selectedNewsID].title } /></div>
                        <div className="news_description"><p>{ newsToShow[selectedNewsID].description }</p></div>                        
                        <div className="read_moreBtn"><Link to={{ pathname: `/article/${newsToShow[selectedNewsID].title.toLowerCase()}`, selectedNews: newsToShow[selectedNewsID] }}><button>Read more</button></Link></div>
                    </article>
                    <div className="all_news">
                        {newsToShow.map((news, i) => {
                            return (
                                <div key={i} className="news_item" onClick={() => handleActiveNews(i)}>
                                    <span className="news_item_author">{ news.author ? news.author : "No Author found 😔" }</span>
                                    <h2 className="news_item_title">{ news.title }</h2>
                                </div>
                            )
                        })}
                    </div>
                </main>
                :
                <Spinner />
            }
        </Fragment>
    )
}