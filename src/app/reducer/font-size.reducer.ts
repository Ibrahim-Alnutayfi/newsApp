import { Action, createReducer, on } from '@ngrx/store';
import { FontSizeState } from '../action/fontSizeState.action';


export interface State {
  home: number;
  away: number;
}