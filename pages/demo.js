import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import nature from '../download.jpeg';
import Head from 'next/head';
import Loader from 'react-loader-spinner'
// import a from '../node_modules/react-owl-carousel2/lib/styles.css'
// require('react-owl-carousel2/lib/style.css'); //Allows for server-side rendering.
import 'react-owl-carousel2/lib/styles.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



export default class componentName extends Component {
  render() {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
    return (
      <>
        <Head>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        </Head>
        <div>
            hello
            <img src={nature} />
            {/* <OwlCarousel ref="car" options={options}  >
                <div><img src={nature} alt="The Last of us"/></div>
                <div><img src={nature} alt="GTA V"/></div>
                <div><img src={nature} alt="Mirror Edge"/></div>
            </OwlCarousel> */}
            <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
      </>
    )
  }
}
