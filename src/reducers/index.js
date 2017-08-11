import { combineReducers } from "redux";
import tools from "./tools";
import strokes from "./strokes";
import clear from "./clear";

const rootReducer = combineReducers({
	tools,
	strokes,
	clear
});

export default rootReducer;
