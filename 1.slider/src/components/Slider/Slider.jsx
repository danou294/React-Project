import React from 'react'
import { useState } from 'react'
import leftChevron from '../../assets/left-arrow.svg'
import rightChevron from '../../assets/right-arrow.svg'
import './Slider.css'
import sliderData from "../../data/sliderData.js";
import SliderData from "../../data/sliderData.js";


export default function Slider() {

    const [sliderIndex, setSliderIndex] = useState(1)

    return (
        <>
            <p className="index-info">{sliderIndex} / {SliderData.length}</p>
            <div className="slider">
                <p className="image-info">
                    {SliderData.find(obj => obj.id === sliderIndex).description}
                </p>
                <img src={`/images/img-${sliderIndex}.jpg`} alt="estate's room" className="slider-img"/>

                <button
                    onClick={() => setSliderIndex(sliderIndex === 1 ? SliderData.length : sliderIndex - 1)}
                    className="navigation-button prev-button">
                    <img src={leftChevron} alt=""/>
                </button>
                <button
                    onClick={() => setSliderIndex(sliderIndex === SliderData.length ? 1 : sliderIndex + 1)}
                    className="navigation-button next-button">
                    <img src={rightChevron} alt=""/>
                </button>

            </div>
        </>

    )
}
