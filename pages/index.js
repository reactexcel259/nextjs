import React, { Component, useEffect } from 'react';
import Hello from './hello';
// import { useRouter } from 'next/router';


export default class Index extends Component {
   static getInitialProps({query}){
        return {query}
    }

componentDidMount(){
    // this.props.push('/demo')

}
    render(){
    console.log(this.props,'routerrouter');
    return (
      <>
        <Hello id="crater"/> with index
      </>
    )
    }
}

