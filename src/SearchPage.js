import React from 'react';
import { useStatevalue } from './StateProvider';

function SearchPage() {

    const [{term}, dispatch ] = useStatevalue();

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage_results">

            </div>
        </div>
    )
}

export default SearchPage;
