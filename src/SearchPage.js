import React from 'react';
import GoogleSearch from './GoogleSearch';
import { useStateValue } from './StateProvider';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = GoogleSearch(term);

    console.log(data);
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