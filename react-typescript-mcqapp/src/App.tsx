// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import QuestionInterface from './components/QuestionInterface';
import TimeUpScreen from './components/TimeUpScreen';
import QuizCompletedScreen from './components/QuizCompletedScreen';
import EditQuestionsScreen from './components/EditQuestionScreen';
import { fetchQuestions } from './components/api';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchQuestions().then((data) => setQuestions(data));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loading ? <LoadingScreen /> : <QuestionInterface questions={questions} />}
        </Route>
        <Route path="/timesup">
          <TimeUpScreen />
        </Route>
        <Route path="/quiz-completed">
          <QuizCompletedScreen />
        </Route>
        <Route path="/edit-questions">
          <EditQuestionsScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
