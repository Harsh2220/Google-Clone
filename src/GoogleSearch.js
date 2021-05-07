import { React, useState, useEffect } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = "bf0b5a54681a7eab1";

const GoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData();
    }, [term])

    return { data }
}

export default GoogleSearch;
