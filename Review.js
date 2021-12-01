import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const [person, setPerson] = useState(people[0])

    //Note: if you want some function to be executed everytime a component render use useEffect
    /*
    if (index < 0) {
        setIndex(people.length - 1);
    } else if (index >= people.length) {
        setIndex(0);
    }
    */


    //Note: didn't instead use setPerson(people[index]) after setIndex... because index will be changed only in the next render
    const prevPerson = () => {
        if (index > 0) {
            setPerson(people[index - 1]);
            setIndex(index - 1)
        }
        else {
            setPerson(people[people.length - 1]);
            setIndex(people.length - 1)
        }
        /*
        setIndex((index) => {
          return index - 1;
        });
        */
    }

    const nextPerson = () => {
        if (index === people.length - 1) {
            setPerson(people[0])
            setIndex(0)
        }
        else {
            setPerson(people[index + 1])
            setIndex(index + 1)
        }
        /*setIndex((index) => {
          return index + 1;
        });
        */
    };

    return (
        <article className="review">
            <div className="img-container">
                {/* <img src={image} alt={name} className="person-img" /> */}
                <img src={person.image} alt={person.name} className="person-img" />
                <span className="quote-icon">
                    <FaChevronRight />
                </span>
            </div>
            {/* <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p> */}
            
            <h4 className="author">{person.name}</h4>
            <p className="job">{person.job}</p>
            <p className="info">{person.text}</p> 
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn">suprise me</button>
        </article>
    );
};

export default Review;