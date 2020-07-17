import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                type='search' 
                placeholder='Search Robot' 
                className='pa3 ba b--green bg-lightest-blue'
                // run the searchChange function when onChange
                onChange={searchChange}
            /> 
        </div>
    );
}

export default SearchBox;