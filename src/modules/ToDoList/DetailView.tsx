import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import actions from '../../store/actions';
import { AppState } from '../../store/interfaces';
import { ReactComponent as PlusSVG } from '../../shared/icons/plus.svg';
import ToDo from './ToDo';
import Styled from './ToDoList.styles';
import { IToDo } from '../../shared/types';

type DetailViewProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const DetailView: React.FC<DetailViewProps> = ({
  todos,
  addToDoItem,
  updateToDoItem,
  deleteToDoItem,
}) => {
  return (
    <Styled.DetailViewWrapper>
      <Styled.DetailViewHeader>
        <h1>Team To-Do List</h1>
        <h4>{moment().format('ddd DD MMMM')}</h4>
      </Styled.DetailViewHeader>

      <Styled.DetailViewContent>
        {todos && !!todos.length && (
          <Styled.List>
            {todos.map((todo: IToDo) => (
              <ToDo
                key={todo.id}
                {...todo}
                updateToDoItem={updateToDoItem}
                deleteToDoItem={deleteToDoItem}
              />
            ))}
          </Styled.List>
        )}
        <Styled.AddToDo onClick={addToDoItem}>
          <a>
            <PlusSVG />
          </a>
          <span>Add a to-do</span>
        </Styled.AddToDo>
      </Styled.DetailViewContent>
    </Styled.DetailViewWrapper>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  addToDoItem: actions.addToDoItem,
  updateToDoItem: actions.updateToDoItem,
  deleteToDoItem: actions.deleteToDoItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
