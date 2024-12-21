"use client";

import { useEffect, useState } from "react";

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isEntering, setIsEntering] = useState(false);

    useEffect(() => {
        setIsEntering(true);
        const timer = setTimeout(() => {
            setIsEntering(false);
        }, 500); // Match this duration with your CSS animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`transition-wrapper ${isEntering ? 'slide-in-left' : ''}`}>
            {children}
        </div>
    );
};

export default TransitionWrapper; 