import React from "react"
import { deleteQuestion } from "../../api/question"

const ShowQuestions = ({ showQuestions, quizId, user }) => {
    const onDeleteQuestion = (e, questionId) => {
        e.preventDefault()
        const destroy = async () => {
            try {
                const res = await deleteQuestion(user, quizId, questionId)
                console.log(res + "delete success")
            } catch (error) {
                console.log(error)
            }
        }
        destroy()
    }

    return (
        <div>
            {showQuestions.map(item => (
                <div className="quiz__container" key={item._id}>
                    <h4 className="quiz__heading">{item.question}</h4>
                    <ul>
                        <li className="quiz__list-item">{item.rightAnswer}</li>
                        <li className="quiz__list-item">{item.wrongAnswerOne}</li>
                        <li className="quiz__list-item">{item.wrongAnswerTwo}</li>
                    </ul>
                    <button className="quiz__button" onClick={e => onDeleteQuestion(e, item._id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ShowQuestions