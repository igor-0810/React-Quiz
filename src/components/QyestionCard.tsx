import React from "react";
import { AnswerObject } from '../App'

import { Wraper, ButtonWraper } from './QuestionCart.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => (
  <Wraper>
    <p className="number">
      Question: {questionNr} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
        {answers.map((answer, index) => (
            <ButtonWraper 
            key={index}
            correct={userAnswer?.correctAnswer == answer}
            userClicked={userAnswer?.answer === answer}
            >
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
            </ButtonWraper>
        ))}
    </div>
  </Wraper>
);

export default QuestionCard;
