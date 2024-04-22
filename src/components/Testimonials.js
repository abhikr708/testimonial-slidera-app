import React from "react";
import Card from "./Card";
import { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const Testimonials = (props) =>{
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);
    function leftShiftHandeler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
        
    }

    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
        
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col rounded-md
         mx-auto mt-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review = {reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold align-center justify-center">
                <button onClick={leftShiftHandeler}
                className="cursor-pointer hover:text-violet-500">
                    <MdOutlineArrowBackIosNew />

                </button>
                <button onClick={rightShiftHandler} 
                className="cursor-pointer hover:text-violet-500">
                    <MdOutlineArrowForwardIos />
                </button>
            </div>

            <div className="mt-7">
                <button onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white">
                    Suprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials;