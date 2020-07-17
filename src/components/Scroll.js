import React from 'react';


const Scroll = (props) => {
    // a parent can always access its children
    // in this case, the relationship can be seen in App.js
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            { props.children }
        </div>
    )
}

export default Scroll;