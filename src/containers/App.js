// destructure ("{}") imports from non-default exporting files
// i.e. only the variable Component is imported
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        // see reducers.js for the value
        searchField: state.searchField
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
        }
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

        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        
        if (!robots.length)  {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 id='title'>RoboFriends</h1>
                    {/* connect the onSearchChange function to the SearchBox Component */}
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry> 
                    </Scroll>       
                </div>
            );
        }    
    }
}

// export redux connect(), which is a higher order func
export default connect(mapStateToProps, mapDispatchToProps)(App);