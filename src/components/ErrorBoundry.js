import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    // this lifecycle hook will run if errors are detected
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. An error occured.</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;