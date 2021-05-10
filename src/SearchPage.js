import React from 'react';
import GoogleSearch from './GoogleSearch';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import { Apps } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import InSearch from './InSearch';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = GoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <div className="searchPage_main">
                    <Link to="/">
                        <img className="logo" src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" alt="logo" />
                    </Link>

                    <div className="searchPage_searchbar">
                        <InSearch />
                    </div>
                </div>

                <div className="searchPage_apps">
                    <Apps />
                    <Avatar />
                </div>

            </div>
            { true && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCounts">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.link}>
                                {item.displayLink}
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <h3>{item.title}</h3>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}

export default SearchPage;