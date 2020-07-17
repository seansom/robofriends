// destructure ("{}") imports from non-default exporting files
// i.e. only the variable Component is imported
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        // update certain parameteres of App's state
        this.setState({searchfield: event.target.value});
    }

    // note that React executes some lifecycle functions in a particular order.
    // see https://reactjs.org/docs/react-component.html
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }

    render() {
        // filter robot list to what is in the search bar

        const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        
        if (!robots.length)  {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 id='title'>RoboFriends</h1>
                    {/* connect the onSearchChange function to the SearchBox Component */}
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/>   
                    </Scroll>       
                </div>
            );
        }    
    }
}

export default App