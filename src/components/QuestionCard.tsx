import React from 'react'

import { AnswerObject } from '../App';

import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions
}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        {/* something new to my eyes */}
        <p dangerouslySetInnerHTML={{ __html: question }} />

        <div>
            {answers.map((answer, index) => (
                <ButtonWrapper 
                key={index} 
                correct={userAnswer?.correctAnswer === answer}
                userClicked = {userAnswer?.answer === answer}>
                    <button disabled={userAnswer ? true : false } value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>

                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)

export default QuestionCard;
