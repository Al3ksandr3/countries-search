export function appThemeReducer(currentState = "Light", action) {
  switch (action.type) {
    case "CHANGE_APP_THEME":
      return currentState === "Light" ? "Dark" : "Light";
    default:
      return currentState;
  }
}
