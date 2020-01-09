import { createStore } from 'redux';
import Reducers from './../reducers';

// creating the store with my reducers
const Store = createStore(Reducers);

export default Store;
