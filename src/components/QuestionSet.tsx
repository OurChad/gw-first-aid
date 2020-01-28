import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
  } from "react-router-dom";
import QuestionPage from './QuestionPage';

type Props = {
    questionSet: any;
}

const QuestionSet: React.FC<Props> = ({ questionSet }) => {
    let match = useRouteMatch();

    return (
        <>
            <div>
                <h2>{questionSet.name}</h2>
                <Redirect to={`${match.url}/${questionSet.questions[0].id}`} />
            </div>
            <Switch>
                <Route path={`${match.url}/complete`}>
                    <h3>complete</h3>
                </Route>
                <Route path={`${match.url}/:questionId`}>
                    <QuestionPage 
                        questions={questionSet.questions}
                        url={match.url}
                    />
                </Route>
            </Switch>
        </>
    )
}


export default QuestionSet;