import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>Dragon News Home</h2>
            {
                categoryNews.map(news => <NewsCard key={news._id} news = {news}></NewsCard>)
            }
        </div>
    );
};

export default Category;