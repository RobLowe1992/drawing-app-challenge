import { combineReducers } from "redux";
import tools from "./tools";
import strokes from "./strokes";

const rootReducer = combineReducers({
	tools,
	strokes,
});

export default rootReducer;
