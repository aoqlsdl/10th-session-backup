import React from "react";
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import { useState, useEffect } from "react";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sample = {
//     title: 'title',
//     desc: 'story',
//     url: 'https://google.com',
//     urlToImg: 'https://via.placeholder.com/160',
// }

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        // const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=838d21ec33504cf3b37412459147ae94`
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=838d21ec33504cf3b37412459147ae94`);
    }, [category]);


    // const [articles, setArticles] = useState(null); 
    // const [loading, setLoading] = useState(false); 
    // const query = category === 'all' ? '' : `&category=${category}`;

    // useEffect(() => { 
    //     const fetchData = async() => {
    //         setLoading(true); 
    //         try {
    //             const response = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=838d21ec33504cf3b37412459147ae94`
    //             );
    //             setArticles(response.data.articles)
    //         }
    //         catch(err) {
    //             console.log(err)
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
        // const query = category === 'all' ? '' : `&category=${category}`; 
        // const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=838d21ec33504cf3b37412459147ae94`; 
        // axios.get(url) 
        // .then(res => { 
        //     console.log(res.data.articles); 
        //     setArticles(res.data.articles) 
        //     }) 
        //     .catch(err => console.log(err)) 
        //     setLoading(false);
        //     }, [category]);
    

    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>
    }
    if (!response) {
        return null;
    }
    // return (
    //     <NewsListBlock>
    //         {articles.map((article) => (
    //             <NewsItem key={article.url} article={article} />
    //         ))}
    //     </NewsListBlock>
    // )
    if (error) {
        return <NewsListBlock>error!</NewsListBlock>
    }

    const { articles } = response.data;

    return (
        // <div>
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>

        //     {articles ? <NewsListBlock>
        //         {articles.map(item => <NewsItem article={item}/>)}
        //     </NewsListBlock> : null}
        // </div>
    );
}

export default NewsList;