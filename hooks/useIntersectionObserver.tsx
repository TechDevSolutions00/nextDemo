"use client";

import { useState, useEffect, RefObject } from "react";

const useIntersectionObserver = (
    ref: RefObject<HTMLDivElement>,
    options?: IntersectionObserverInit,
    repeatAnimation = false
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);

            if (entry.isIntersecting && !repeatAnimation) {
                observer.disconnect();
            }
        }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, options, repeatAnimation]);

    return isIntersecting;
};

export default useIntersectionObserver;
