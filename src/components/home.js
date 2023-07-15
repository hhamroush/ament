import { Fragment, useState } from 'react'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './card';


export default function Home() {
    const cardData = [
    { img: "/images/electricalProjects.jpg", title: 'Electrical Projects', text: 'To find out more click here', link:'https://www.youtube.com/' },
    { img: "/images/mechanicalProjects.jpeg", title: 'Mechanincal Projects' },
    // Add more card data as needed...
    ];
    
    return(
        <div id='home' className="">
            
            <Carousel autoPlay="true" infiniteLoop="true" showThumbs={false}>
                <div>
                    <img className="h-screen" src="/images/electricalProjects.jpg" />
                </div>
                <div>
                    <img className="h-screen" src="images/mechanicalProjects.jpeg" />    
                </div>
            </Carousel>
            

            <div id='missionStatement' className="h-50 w-50">

            </div>
            <div id='projects' className="flex overflow-x-auto mx-32 mb-5">
                {cardData.map((card, index) => 
                <Card key={index} img={card.img} title={card.title} text={card.text} link={card.link} />
                )}
            </div>
        </div>
    );
}