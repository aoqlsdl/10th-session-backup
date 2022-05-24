import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

// const NewsPage = ({ match }) => {
//     const category = match.params.category || 'all';

//     return (
//         <div>
//             <Categories />
//             <NewsList category={category} />
//         </div>
//     );
// };

function NewsPage() {
    const params = useParams();
    const category = params.category || 'all';
    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    )
}
export default NewsPage