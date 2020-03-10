import React from 'react';
import { IToDo } from '../../shared/types';
import { ReactComponent as CheckedSVG } from '../../shared/icons/checked.svg';
import { ReactComponent as TrashBinSVG } from '../../shared/icons/trash-bin.svg';
import Styled from './ToDoList.styles';

interface ToDoProps extends IToDo {
  updateToDoItem: Function;
  deleteToDoItem: Function;
}

const ToDo: React.FC<ToDoProps> = props => {
  const { id, completed, description, updateToDoItem, deleteToDoItem } = props;

  return (
    <Styled.ToDoWrapper>
      <Styled.Checkbox
        completed={completed}
        onClick={() => updateToDoItem({ ...props, completed: !completed })}
      >
        <CheckedSVG />
      </Styled.Checkbox>
      <Styled.Description
        name="description"
        type="text"
        placeholder="Add your to-do..."
        value={description}
        onChange={(event: any) =>
          updateToDoItem({ ...props, description: event.target.value })
        }
        completed={completed}
        disabled={!!completed}
      />
      <Styled.ButtonDelete onClick={() => deleteToDoItem(id)}>
        <TrashBinSVG />
      </Styled.ButtonDelete>
    </Styled.ToDoWrapper>
  );
};

export default ToDo;
