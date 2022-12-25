import React, { useState } from 'react';
import Card from './Card';
import '../css/searchList.css'
import ReactPaginate from 'react-paginate';
// import { useRef } from 'react';

function SearchList({ filteredLinks }) {
  const [pageNum, setPageNum] = useState(0);
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const linksPerPage = 7
  const pageVisited = linksPerPage * pageNum
  const displayLinks = filteredLinks
    .slice(pageVisited, pageVisited + linksPerPage)
    .map((link, key) => (
      <Card link_data={link} key={key} />
    ))
  const page_count = Math.ceil(filteredLinks.length / linksPerPage)
  const changePage = ({ selected }) => {
    setPageNum(selected)
  };

  if (filteredLinks.length !== 0) {
    return (
      <div className='search-list'>
        {displayLinks}
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={page_count}
          onPageChange={changePage}
          containerClassName="pagination"
          previousClassName='pagination-previous'
          nextClassName='pagination-next'
          activeClassName='pagination-active'
          pageClassName='pagination-page'
          breakClassName='pagination-break'
          pageLinkClassName='pagination-links'
        />
      </div>
    );
  }
  else {
    return (
      <div className='search-list'>
        <h3 className="no_result">Result not found! Search for something else.</h3>
      </div>
    );

  }

}

export default SearchList;