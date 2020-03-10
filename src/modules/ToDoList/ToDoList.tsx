import React from 'react';
import Styled from './ToDoList.styles';
import DetailView from './DetailView';
import Sidebar from './Sidebar';

const ToDoList = () => {
  return (
    <Styled.ToDoListWrapper>
      <Sidebar />
      <DetailView />
    </Styled.ToDoListWrapper>
  );
};

export default ToDoList;
