import { Fragment, useState } from 'react'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
    return(
        <div id='home' className="flex justify-center">
            <div id='bannerCarousel' className="container ">
            <Carousel autoPlay="true" infiniteLoop="true">
                <div className="h-64">
                    <img className="object-contain h-64 w-full" src="https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg" />
                   
                </div>
                <div className="h-64">
                    <img className="object-contain h-64 w-full" src="https://www.whizkidsrobotics.com/wp-content/uploads/2015/09/zoomer-dino-robot-dinosaur-toy-roar-1024x575.jpg" />
                    
                </div>
                <div className="h-64">
                    <img className="object-contain h-64 w-full" src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/04/Ferrari-F40-2.jpg" />
                    
                </div>
                <div className="h-64">
                    <img className="object-contain h-64 w-full" src="https://3.bp.blogspot.com/-aibsl4wFDAg/U230Od4qkeI/AAAAAAAAAKc/9z0UReBblUc/s1600/336490-1680x1050.jpg" />
                </div>
            </Carousel>
            </div>

            <div id='missionStatement' className="">

            </div>
            <div id='projects' className="">

            </div>
        </div>
    );
}