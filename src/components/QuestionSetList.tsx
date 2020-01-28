import React from 'react';
import { Link } from "react-router-dom";

type Props = {
    questionSets: any
}

const QuestionSetList: React.FC<Props> = ({ questionSets }) => {
    return (
        <div>
        <h2>Question Sets</h2>
        {
            questionSets.map((questionSet: any) => {
                return (
                <Link key={questionSet.id} to={`/${questionSet.id}`}>
                    <h4>{questionSet.name}</h4>
                </Link>
                )
            })
        }
        </div>
    )
}


export default QuestionSetList;