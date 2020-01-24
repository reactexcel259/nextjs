import React, { Component } from 'react';
// import Link from 'next/link';
// import Router from 'next/router';
import { Link, Router } from '../routes';

export default class Hello extends Component {
    hanldeClikc=()=>{
        Router.pushRoute('/details/cdvsd/vdvs/v')
    }
    handleGotoDemo=()=>{
      console.log('sdvsdvsdv');
      
      Router.pushRoute('/demo/cdvsd/vdvs/v')
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
                <Link route={`/post/crater/programming/lean/${item.name}/${item.id}`}>
                    <a className="link" > {item.name}</a>
                </Link>
                )
            })
        }
        <Link route={`/demo/dvsdv/dsvsdv/dvsdvdvs`}>
                    <a className="link" > {"item.name"}</a>
                </Link>
        <div className="click-here" onClick={this.handleGotoDemo}>
        go to demo
      </div>
        <div className="click-here" onClick={this.hanldeClikc} >click here</div>
        <style jsx>{`
            .link{
                margin-right:${a}px
            }
            .click-here{
              cursor:pointer
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