import React, { useEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';

const Introduction = () => {
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
                    delay: 500,
                    config: { ...config.molasses, duration: 800 }
                })

                observer.unobserve(entry)
            }
        })
        observer.observe(entry)
        return () => observer.unobserve(entry)


    }, [])



    return (
        <section className="bg-[url(https://dif1tzfqclj9f.cloudfront.net/000_clients/924097/page/r21182visCLM7xVa.jpg)] overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen grid place-items-center md:bg-fixed">
            <div className="container ">
                <div className="px-6 text-center max-w-[650px] mx-auto lg:max-w-3xl">
                    <h2 className="mb-8">
                        Introduction
                    </h2>
                    <animated.p ref={reference} style={{ transform: animation.transform, opacity: animation.opacity }} className="mb-20 leading-relaxed">
                        I am current a Frontend Developer
                        <br />
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        I've done remote work for agencies, and collaborated with my team to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my profession at a time.
                        <br />
                        <br />
                        Languages I speak are HTML, CSS, JavaScript. <br />
                        And some frameworks like ReactJS, VueJS, NuxtJS and GatsbyJS.
                    </animated.p>
                </div>

            </div>

        </section>
    )
}

export default Introduction