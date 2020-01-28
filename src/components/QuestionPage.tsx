import React from 'react';
import {
    useHistory,
    useParams
} from "react-router-dom";
import Question from './Question';
import { Question as QuestionType } from '../types';

type Props = {
    questions: QuestionType[];
    url: string;
}

const QuestionPage: React.FC<Props> = ({ questions, url }) => {
    let history = useHistory();
    const { questionId } = useParams();
    const question = questions.find(q => q.id === questionId);
    
    return question ? (
        <Question 
            question={question}
            onSubmit={(isCorrect: boolean) => {
                console.log(isCorrect);
                const questionIndex = questions.indexOf(question);
                const nextQuestionId = questions[questionIndex + 1]?.id ?? 'complete';
                history.push(`${url}/${nextQuestionId}`);
            }}
        />
    ) : null
}


export default QuestionPage;