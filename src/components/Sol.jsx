import React from "react"
import Data from "../data";
export default function Sol(){
    return(
        <div>
            <h1>Correct Answers</h1>
            {Data.map((item,i) => {
                let ind=item.correct-1;
                i++;
                return <h2>{i}. {item.answers[ind]}</h2>
            })}
        </div>
    )
}