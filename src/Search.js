import { React, useState } from 'react';
import { useHistory } from 'react-router';
import './Search.css';
import { Button } from '@material-ui/core';
import { Mic, SearchOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search() {

    const [{}, dispatch ] = useStateValue("");
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push("/search");
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchOutlined />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <Mic />
            </div>
            <div className="search_buttons">
                <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search;
