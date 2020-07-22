// destructure ("{}") imports from non-default exporting files
// i.e. only the variable Component is imported
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // initializes the props to have searchField
    return {
        // see reducers.js for the value
        //  state has 2 properties, searchRobots and requestRobots
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} 

const mapDispatchToProps = (dispatch) => {
    // initializes the props to have onSearchChange
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: (event) => dispatch(requestRobots())
    }
}



class App extends Component {

    // note that React executes some lifecycle functions in a particular order.
    // see https://reactjs.org/docs/react-component.html
    componentDidMount() {
        this.props.onRequestRobots();
    }

    
    render() {
        // filter robot list to what is in the search bar

        const { robots, isPending, searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        
        if (isPending)  {
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