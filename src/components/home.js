import { Fragment, useState } from 'react'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './card';


export default function Home() {
    const cardData = [
    { img: "/images/electricalProjects.jpg", title: 'Electrical Projects', text: 'To find out more click here', link:'https://www.youtube.com/' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    { img: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg", title: 'Card 2', text: 'Card 2 description.' },
    // Add more card data as needed...
    ];
    
    return(
        <div id='home' className="">
            
            <Carousel autoPlay="true" infiniteLoop="true" showThumbs={false}>
                <div className="h-100">
                    <img className="object-cover w-full" src="/images/electricalProjects.jpg" />
                   
                </div>
                <div className="h-100">
                    <img className="object-contain h-64 w-full" src="https://www.whizkidsrobotics.com/wp-content/uploads/2015/09/zoomer-dino-robot-dinosaur-toy-roar-1024x575.jpg" />
                    
                </div>
                <div className="h-64">
                    <img className="object-contain h-64 w-full" src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/04/Ferrari-F40-2.jpg" />
                    
                </div>
                <div className="h-64">
                    <img className="object-contain h-64 w-full" src="https://3.bp.blogspot.com/-aibsl4wFDAg/U230Od4qkeI/AAAAAAAAAKc/9z0UReBblUc/s1600/336490-1680x1050.jpg" />
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