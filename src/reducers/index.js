import { combineReducers } from "redux";
import tools from "./tools";
import strokes from "./strokes";
import upload from './upload'

const rootReducer = combineReducers({
	tools,
	strokes,
    upload
});

export default rootReducer;
