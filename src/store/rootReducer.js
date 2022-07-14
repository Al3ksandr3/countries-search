import { combineReducers } from "redux";
import { appThemeReducer } from "./appTheme/appThemeReducer";
import { searchQueryReducer } from "./searchQuery/searchQueryReducer";
import { filterReducer } from "./filter/filterReducer";

export const rootReducer = combineReducers({
  appTheme: appThemeReducer,
  searchQuery: searchQueryReducer,
  filter: filterReducer
});
