import React, { Fragment, useEffect } from 'react';
import './AllNews.scss';
import { fetchNews } from '../../util/functions';
import { ALLNEWSENDPOINT } from '../../util/API';
import DisplayNews from '../DisplayNews/DisplayNews';
import store from '../../store/store';

export default function AllNews () {

    useEffect(() => {
            fetchNews(ALLNEWSENDPOINT, (newsItem) => {
                const RESULT = newsItem.data.articles;
                store.dispatch({ type: "ADD_NEWS", value: RESULT });
            });
    }, []);

    return (
        <Fragment>
            <h1 className="all_news_title">All news</h1>
            <DisplayNews page="all_news" />
        </Fragment>
    )
}