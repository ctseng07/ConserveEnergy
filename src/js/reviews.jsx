import { useState } from 'react';
import Image from "astro:assets";
import { rightBlack, rightOrange } from '../assets/icons';

export default function Carousel({ slides }) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div className={`flex transition ease-out duration-40 gap-3`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s) => {
                    return <img src={s} />
                })}
            </div>

            <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl border-4 border-red-600'>
                <button onClick={previousSlide}>
                    <Image src={rightBlack} alt="" />
                </button>
                <button onClick={nextSlide}>
                    <Image src={rightOrange} alt="" />
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                {slides.map((s, i) => {
                    return (
                        <div onClick={() => {
                            setCurrent(i);
                        }}
                            key={'circle' + i}
                            className={`rounded-full w-5 h-5 cursor-pointer ${i == current ? "bg-white" : "bg-gray-500"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>

    );
}