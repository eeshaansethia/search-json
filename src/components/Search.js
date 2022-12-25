import React, { useState } from 'react'
import SearchList from './SearchList'
import '../css/search.css'

function Search({ link_details }) {

    const [searchField, setSearchField] = useState("")

    const filteredLinks = link_details.filter(
        link => {
            return (
                link.includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    return (
        <section className='search-container'>
            <div>
                <h2 className='search-heading'>Search a Link</h2>
            </div>
            <div>
                <input
                    className='search-box'
                    type="search"
                    placeholder="Search Links"
                    onChange={handleChange}
                />
            </div>
            <SearchList filteredLinks={filteredLinks} />
        </section>
    )
}

export default Search
