import React, { useEffect } from 'react';
import './TopNews.scss';
import { fetchNews } from '../../util/functions';
import { TOPNEWSENDPOINT } from '../../util/API';
import DisplayNews from '../DisplayNews/DisplayNews';
import store from '../../store/store';

export default function TopNews () {

    useEffect(() => {
        fetchNews(TOPNEWSENDPOINT, (newsItem) => {
            const RESULT = newsItem.data.articles;
            store.dispatch({ type: "ADD_TOP_NEWS", value: RESULT });
        });
    }, []);

    return (
        <div>
            <h1 className="top_news_title">Top news</h1>
            <DisplayNews page="top_news" />
        </div>
    )
}