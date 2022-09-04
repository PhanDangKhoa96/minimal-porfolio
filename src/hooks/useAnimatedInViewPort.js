import React, { useEffect } from 'react'
import { useSpring, config } from 'react-spring';

const useAnimatedInViewPort = (reference) => {
    const [animation, api] = useSpring(() => ({
        from: {
            transform: 'translateY(20px)',
            opacity: 0
        }
    }))

    useEffect(() => {
        const entry = reference

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

    return animation
}

export default useAnimatedInViewPort