import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="h-screen grid place-items-center relative bg-no-repeat bg-center bg-cover bg-[url(https://dif1tzfqclj9f.cloudfront.net/000_clients/924097/page/924097fHAqsxO0pb4.jpg)]">
            <div className="absolute inset-0 bg-raisin-black/70"></div>
            <TypeAnimation
                sequence={[
                    'Hi, I am Khoa \n', // Types 'One'
                    1000, // Waits 1s
                    'Hi, I am Khoa \n\nI code beautifully simple things, and I love what I do.',
                ]}
                wrapper="h1"
                cursor={true}
                repeat={0}
                speed={20}
                className="realtive z-10 max-w-3xl mx-auto whitespace-pre-wrap leading-loose container"
            />
        </section>
    )
}

export default Hero