import {NestAction, NestModel} from '../actions/nestAction';

type NestState = {
  initialNest: object
}
const initialState = {
  initialNest: {},
}
const NestReducer = (state: NestState = initialState, action: NestAction) => {

  switch(action.type){
    case "ON_SET_NEST":
      return {
        ...state, initialNest: action.payload
      }
        default:
          return state
  }
}

export {NestReducer}
