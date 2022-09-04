import React, { useEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';

const Project = () => {
    const reference = useRef(null)

    const [animation, api] = useSpring(() => ({
        from: {
            transform: 'translateY(-20px)',
            opacity: 0
        }
    }))

    useEffect(() => {
        const entry = reference.current

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                api.start({
                    to: { transform: 'translateY(0)', opacity: 1 },
                    delay: 1000,
                    config: { ...config.molasses, duration: 1000 }
                })

                observer.unobserve(entry)
            }
        })
        observer.observe(entry)
        return () => observer.unobserve(entry)


    }, [])
    return (
        <section className="container">
            <h2 className="text-center mb-20">My personal work</h2>
            <animated.div ref={reference} style={{ transform: animation.transform, opacity: animation.opacity }} className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 xl:gap-x-[10%] xl:gap-y-24">
                <a href='https://phandangkhoa96.github.io/HalloweenPage/' target="_blank" className="w-full max-w-full opacity-50 aspect-square bg-raisin-black shadow-[0_0.1em_1em_0] shadow-black/40 grid place-items-center bg-[url('/halloween.png')] bg-cover bg-no-repeat bg-center hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 md:w-[calc(50%-40px)] lg:w-[calc(50%-80px)] xl:w-[23%] group">
                    <h3 className="relative z-10 text-white px-14 text-center leading-loose group-hover:hidden">Haloween Landing page</h3>
                </a>

                <a href='https://phandangkhoa96.github.io/HeadphoneLP/' target="_blank" className="w-full max-w-full opacity-50 aspect-square bg-raisin-black shadow-[0_0.1em_1em_0] shadow-black/40 grid place-items-center bg-[url('/headphone.jpg')] bg-cover bg-no-repeat bg-center hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 md:w-[calc(50%-40px)] lg:w-[calc(50%-80px)] xl:w-[23%] group">
                    <h3 className="relative z-10 text-white px-14 text-center leading-loose group-hover:hidden">Headphone Landing page</h3>
                </a>

                <a href='https://cocktails-menu-pi.vercel.app/' target="_blank" className="w-full max-w-full opacity-50 aspect-square bg-raisin-black shadow-[0_0.1em_1em_0] shadow-black/40 grid place-items-center bg-[url('/cocktail.jpg')] bg-cover bg-no-repeat bg-center hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 md:w-[calc(50%-40px)] lg:w-[calc(50%-80px)] xl:w-[23%] group">
                    <h3 className="relative z-10 text-white px-14 text-center leading-loose group-hover:hidden">Cocktail List</h3>
                </a>

                <a href='https://travel-landing-page-bay.vercel.app/' target="_blank" className="w-full max-w-full opacity-50 aspect-square bg-raisin-black shadow-[0_0.1em_1em_0] shadow-black/40 grid place-items-center bg-[url('/travel.jpg')] bg-cover bg-no-repeat bg-center hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 md:w-[calc(50%-40px)] lg:w-[calc(50%-80px)] xl:w-[23%] group">
                    <h3 className="relative z-10 text-white px-14 text-center leading-loose group-hover:hidden">Travel Landing page</h3>
                </a>

                <a href='https://delivery-landing-page-ten.vercel.app/' target="_blank" className="w-full max-w-full opacity-50 aspect-square bg-raisin-black shadow-[0_0.1em_1em_0] shadow-black/40 grid place-items-center bg-[url('/delivery.jpg')] bg-cover bg-no-repeat bg-center hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 md:w-[calc(50%-40px)] lg:w-[calc(50%-80px)] xl:w-[23%] group">
                    <h3 className="relative z-10 text-white px-14 text-center leading-loose group-hover:hidden">Delivery Landing page</h3>
                </a>
            </animated.div>
        </section>
    )
}

export default Project