import { StateType } from 'typesafe-actions';
import reducer from './reducers';

export type AppState = StateType<typeof reducer>;
