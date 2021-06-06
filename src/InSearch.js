import React from 'react';
import './InSearch.css';
import { BookOutlined, ImageOutlined, LocalOfferOutlined, MoreVertOutlined, ReceiptOutlined, SearchOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Search from './Search';

function InSearch() {

    return (
        <div className="insearch">

            <div className="insearch_search">
                <Search hideButtons/>
            </div>

            <div className="insearch_options">

                <div className="insearch_optionleft">
                    <div className="insearch_option">
                        <SearchOutlined fontSize="small"/>
                        <Link to="/All">All</Link>
                    </div>
                    <div className="insearch_option">
                        <BookOutlined fontSize="small"/>
                        <Link to="Book">Books</Link>
                    </div>
                    <div className="insearch_option">
                        <LocalOfferOutlined fontSize="small"/>
                        <Link to="/Shopping">Shopping</Link>
                    </div>
                    <div className="insearch_option">
                        <ImageOutlined fontSize="small"/>
                        <Link to="/Images">Images</Link>
                    </div>
                    <div className="insearch_option">
                        <ReceiptOutlined fontSize="small"/>
                        <Link to="/News">News</Link>
                    </div>
                    <div className="insearch_option">
                        <MoreVertOutlined fontSize="small"/>
                        <Link to="/More">More</Link>
                    </div>
                </div>

                <div className="insearch_optionright">
                    <Link to="/Settings">Settings</Link>
                    <Link to="/Tools">Tools</Link>
                </div>

            </div>

        </div>
    )
}

export default InSearch;