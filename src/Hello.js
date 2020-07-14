import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        // what is inside the return will be the html
        return (
            //  tc means tachyons, a npm library to center text
            <div className='f1 tc'>
                <h1>Hello World</h1>
                {/* the properties of Hello can be seen in index.js */}
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}

// to be able to import to another file, you need to export
export default Hello