import React from "react";

export default class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render(){
        if (this.state.hasError) { 
            return <p>"An Error has occurred"</p>
        }
        else{
            return this.props.children;
        }
    }
}