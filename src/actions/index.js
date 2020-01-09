// action type
import { CHANGE_NAME } from './../actions/actionsType';

// function to change name as action
export const changeName = name => ({
    type: CHANGE_NAME,
    name: name,
});
