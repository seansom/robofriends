// destructure ("{}") imports from non-default exporting files
// i.e. only the variable Component is imported
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        // update certain parameteres of App's state
        this.setState({searchfield: event.target.value});
    }

    render() {
        // filter robot list to what is in the search bar
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                {/* connect the onSearchChange function to the SearchBox Component */}
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>          
            </div>
        );
    }
}

export default App