"use client";

import TransitionWrapper from "@/app/TransitionWrapper";

export default function LearnMore() {
    return (
            <div
                className="relative h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden custom-bg"
                style={{ backgroundImage: 'url(/BACKGROUND.png)' }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent"></div>

                {/* White Line */}
                <div className="absolute top-[50%] left-[-29%] w-[100vw] h-[200px] bg-white rotate-[55deg]"></div>

                {/* Left Deadpool Image */}
                <div className="absolute left-0 bottom-0 h-[80vh] w-fit flex items-center justify-center transform transition-all duration-500 ease-in-out slide-in-left">
                    <img src="/png-left.png" alt="Deadpool Standing" className="h-full object-contain" />
                </div>

                {/* Right Deadpool Image */}
                <div className="absolute right-0 bottom-0 h-[50vh] w-fit flex items-center justify-center transform transition-all duration-500 ease-in-out slide-in-right">
                    <img src="/png-right.png" alt="Deadpool Sleeping" className="h-full object-contain" />
                </div>

                {/* Text Section with Card */}
                <div className="absolute top-[20%] left-[45%] z-10 flex flex-col items-start space-y-4 max-w-lg zoom-in">
                    <div className="bg-red-600 bg-opacity-60 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-800 text-yellow-500 font-bold px-2 py-1 rounded">
                                8.6
                            </div>
                            <span className="text-white text-base font-bold">IMDb</span>
                            <span className="text-white text-base font-bold">| USA | Action/Comedy | 108 min</span>
                        </div>
                        <h1 className="text-5xl font-bold leading-tight text-white">
                            DEADPOOL 2
                        </h1>
                        <p className="text-white text-base leading-relaxed">
                            Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary.
                            His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures, and
                            transforms him into Deadpool.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-1 items-center text-yellow-400">
                                <span>★★★★☆</span>
                                <span className="text-gray-300">(IMDb)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
