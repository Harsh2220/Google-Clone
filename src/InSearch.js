import React from 'react';
import './InSearch.css';
import { BookOutlined, ImageOutlined, LocalOfferOutlined, Mic, MoreVertOutlined, ReceiptOutlined, SearchOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function InSearch({ value }) {
    return (
        <div className="insearch">

            <div className="insearch_search">
                <input type="text" defaultValue={value}/>
                <Mic />
                <SearchOutlined />
            </div>

            <div className="insearch_options">

                <div className="insearch_optionleft">
                    <div className="insearch_option">
                        <SearchOutlined />
                        <Link to="/All">All</Link>
                    </div>
                    <div className="insearch_option">
                        <BookOutlined />
                        <Link to="Book">Books</Link>
                    </div>
                    <div className="insearch_option">
                        <LocalOfferOutlined />
                        <Link to="/Shopping">Shopping</Link>
                    </div>
                    <div className="insearch_option">
                        <ImageOutlined />
                        <Link to="/Images">Images</Link>
                    </div>
                    <div className="insearch_option">
                        <ReceiptOutlined />
                        <Link to="/News">News</Link>
                    </div>
                    <div className="insearch_option">
                        <MoreVertOutlined />
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