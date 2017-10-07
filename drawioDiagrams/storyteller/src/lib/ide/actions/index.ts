import { IAction } from '../../framework/actions/IAction';
import { createAction } from 'redux-actions';
import { assign } from 'lodash';
import * as ActionTypes from './actionTypes';
import { IProject } from '../appData/IProject';
import { IPayloadCreateProject } from './payloads/IPayloadCreateProject';

export const projectCreate = (payload: IPayloadCreateProject) => {
  return {
    type: ActionTypes.PROJECT_CREATE,
    payload: payload
  }
};

export const projectLoad = createAction<IProject, IProject>(
  ActionTypes.PROJECT_LOAD,
  (project: IProject) => (project)
);

export const projectUnload = createAction<void>(
  ActionTypes.PROJECT_UNLOAD,
  () => { 
    // none 
  }
);

export const projectChangeName = (newName: string) => {
  return {
    type: ActionTypes.PROJECT_CHANGE_NAME,
    payload: newName
  }
};

export const noOperation = (): IAction => {
  return {
    type: ActionTypes.NO_OPERATION
  }
}

export const projectSelectItem = (itemId: string): IAction => {
  return {
    type: ActionTypes.PROJECT_SELECT_ITEM,
    payload: itemId
  }
}