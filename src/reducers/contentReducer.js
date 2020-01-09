// importing the action type for this reducer
import { CHANGE_NAME } from './../actions/actionsType';

// setting up the inital state
const initialState = {
	name: '...'
}

// function to check the action type and return new value case the action type is CHANGE_NAME
export default function contentReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.name }
		default:
			return state
	}
}
