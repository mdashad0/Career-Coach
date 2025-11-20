"use client";
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HeroSection = () => {

const imageRef= useRef(null);

useEffect(() => {
    const imageElement = imageRef.current;
    
    const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if(scrollPosition > scrollThreshold){
        imageElement.classList.add("scrolled");
    };
    };

    window.addEventListener("scroll",handleScroll);
},[]);

    return( 
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>
                    Your AI Career Coach for
                    <br />
                    Professional Success
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Advance Your Career With Personalized guidance, interview Prep, And
                    AI-Powered tools for job Success.
                </p>
            </div>
            <div className='flex justify-center space-x-4'>
                <Link href='/dashboard'>
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
                <Link href='https://chatgpt.com/c/68f794e3-ee14-8321-8b5f-af2aaa92df73'>
                    <Button size="lg" className="px-8" variant="outline">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div className='hero-image-wrapper mt-5 md:mt-0'>
                <div ref={imageRef} className='hero-image'>
                    <Image 
                    src={"/banner.jpeg"}
                    width={1280}
                    height={720}
                    alt='banner sensai'
                    className='rounded-lg shadow-2xl border mx-auto'
                    priority
                    />
                </div>
            </div>
        </div>
    </section>
    );
};
export default HeroSection;
