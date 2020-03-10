import React from 'react';
import ToDoList from '../modules/ToDoList/ToDoList';
import Styled from './App.styles';

const App = () => {
  return (
    <Styled.Wrapper>
      <ToDoList />
    </Styled.Wrapper>
  );
};

export default App;
