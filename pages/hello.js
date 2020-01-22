import React, { Component } from 'react';
// import Link from 'next/link';
// import Router from 'next/router';
import Router from '../routes';

export default class Hello extends Component {
    hanldeClikc=()=>{
        Router.pushRoute('/demo','/demo/helllo' )
    }
  render() {
      const {id} = this.props;
      console.log(this.props);
      let  a = 40
      
    return (
      <>
        its hello page of next js
        {
            courses.map((item,i)=>{
                return(
                <Router.Link route={`/post/crater/${item.name}/${item.id}`}>
                    <a className="link" > {item.name}</a>
                </Router.Link>
                )
            })
        }
        <div onClick={this.hanldeClikc} >click here</div>
        <style jsx>{`
            .link{
                margin-right:${a}px
            }
        `}</style>
      </>
    )
  }
}

const courses = [
    {name:'java', id:1},
    {name:'c++', id:2},
    {name:'js', id:3},
    {name:'react', id:4},
    {name:'reacr-native', id:5},
    {name:'javascript', id:6},
    {name:'testing', id:7},
    {name:'angular', id:8}
]