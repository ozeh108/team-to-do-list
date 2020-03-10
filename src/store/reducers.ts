import {
  ADD_TO_DO_ITEM,
  DELETE_TO_DO_ITEM,
  UPDATE_TO_DO_ITEM,
} from './actions';
import { IToDo } from '../shared/types';

const initialState = {
  context: {
    activeProfile: {
      id: 0,
      name: 'Rafal Orzechowski',
      pic:
        'https://media-exp1.licdn.com/dms/image/C5603AQGVHdnUR_Rq0A/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=g8JBu7YYjV_qSV-ugUZRZl0j1vTQtkVSxn7gH3Fckpc',
    },
  },
  lists: [
    {
      id: 0,
      name: 'Team To-Do List',
    },
  ],
  todos: [
    {
      id: 0,
      description: 'Shortlist features for MVP',
      completed: false,
    },
    {
      id: 1,
      description: 'Lounch PPC Campaing for new creative',
      completed: false,
    },
    {
      id: 2,
      description: 'Define audience breakdown with new data',
      completed: false,
    },
    {
      id: 3,
      description: 'Launch demo page for SEO analysis',
      completed: true,
    },
  ],
};

const getNextToDoId = (currentState: any) => {
  const state = { ...currentState };
  const ids = state.todos.map((todo: any) => todo.id);
  const currentId = ids.length ? Math.max(...ids) : null;

  return currentId === null ? 0 : currentId + 1;
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_DO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: getNextToDoId(state),
            description: '',
            completed: false,
          },
        ],
      };
    case UPDATE_TO_DO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo: IToDo) => {
            return todo.id === action.payload.id
              ? {
                  ...todo,
                  completed: action.payload.completed,
                  description: action.payload.description,
                }
              : todo;
          }),
        ],
      };
    case DELETE_TO_DO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo: IToDo) => todo.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
