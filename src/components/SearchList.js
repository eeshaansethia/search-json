import React from 'react';
import Card from './Card';
import '../css/searchList.css'

function SearchList({ filteredLinks }) {
  return (
    <div className='search-list'>
      {
        filteredLinks.map((link, key) => (
          <Card link_data={link} key={key} />
        ))
      }
    </div>
  );
}

export default SearchList;