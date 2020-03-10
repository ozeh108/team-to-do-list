import { IToDo } from '../shared/types';

export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const UPDATE_TO_DO_ITEM = 'UPDATE_TO_DO_ITEM';
export const DELETE_TO_DO_ITEM = 'DELETE_TO_DO_ITEM';

const addToDoItem = () => {
  return { type: ADD_TO_DO_ITEM };
};

const updateToDoItem = (payload: IToDo) => {
  return { type: UPDATE_TO_DO_ITEM, payload };
};

const deleteToDoItem = (id: number) => {
  return { type: DELETE_TO_DO_ITEM, payload: id };
};

export default {
  addToDoItem,
  updateToDoItem,
  deleteToDoItem,
};
