import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import QuestionSetList from './components/QuestionSetList';
import QuestionSet from './components/QuestionSet';
import questionSets from './questions';

const StyledMain = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
`;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header siteTitle="First Aid Quiz" />
        <StyledMain>
            <Switch>
              <Route path="/" exact>
                <QuestionSetList questionSets={questionSets} />
              </Route>
            {
              questionSets.map((questionSet) => {
                return (
                  <Route key={questionSet.id} path={`/${questionSet.id}`}>
                    <QuestionSet questionSet={questionSet} />
                  </Route>
                )
              })
            }
            </Switch>
        </StyledMain>
      </Router>
    </>
  );
}

export default App;
