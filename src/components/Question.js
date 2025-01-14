import Answer from "./Answer"
const Question = () =>{
    return (
        <div>
            <div className="question"> Test of our Question</div>
            <div className="answers">
                <Answer/>
                <Answer/>
                <Answer/>
                <Answer/>
            </div>
        </div>

    )
}

export default Question;