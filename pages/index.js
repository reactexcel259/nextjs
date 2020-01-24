import React, {Component} from "react";
import {connect} from "react-redux";

class Page extends Component {
    render() {
      console.log(this.props,'lll');
      
        return (
            <div>
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
            </div>
        )
    }
}

export default Page;