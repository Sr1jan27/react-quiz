import { useState } from "react";
import Question from "./Question";

const Quiz = () =>{
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    // let questionIndex = 0;

    const testClick = () =>{
        console.log("Test click");
        setCurrentQuestionIndex(currentQuestionIndex+1);
        // questionIndex++;
        console.log(currentQuestionIndex);
        
    }
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8 </div>
                <Question />
                <div className="next-button" onClick={testClick}>
                    Next question {currentQuestionIndex} </div>
            </div>
        </div>
    );
};

export default Quiz;