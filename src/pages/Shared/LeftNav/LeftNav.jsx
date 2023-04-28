import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-sakib963.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>All Categories</h2>
            <ListGroup>
            {
                categories.map(category => <ListGroup.Item className="p-3 text-secondary fw-bold" key={category.id}><Link className='text-decoration-none text-secondary' to={`/category/category/${category.id}`}>{category.name}</Link></ListGroup.Item>)
            }
            </ListGroup>
        </div>
    );
};

export default LeftNav;