// Module ID: 11677
// Function ID: 90593
// Name: _fetchWelcomeScreen
// Dependencies: []
// Exports: clearWelcomeScreenSettings, fetchWelcomeScreen, resetWelcomeScreen, saveWelcomeScreen, updateSettings, welcomeScreenViewed

// Module 11677 (_fetchWelcomeScreen)
function _fetchWelcomeScreen() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchWelcomeScreen = obj;
  return obj(...arguments);
}
function _saveWelcomeScreen() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveWelcomeScreen = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/welcome_screen/WelcomeScreenActionCreators.tsx");

export const welcomeScreenViewed = function welcomeScreenViewed(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "WELCOME_SCREEN_VIEW", guildId: closure_0, isLurking: flag };
  obj.dispatch(obj);
};
export const fetchWelcomeScreen = function fetchWelcomeScreen(closure_0) {
  return _fetchWelcomeScreen(...arguments);
};
export const resetWelcomeScreen = function resetWelcomeScreen() {
  importDefault(dependencyMap[2]).dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
};
export const clearWelcomeScreenSettings = function clearWelcomeScreenSettings() {
  importDefault(dependencyMap[2]).dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
};
export const updateSettings = function updateSettings(settings) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const saveWelcomeScreen = function saveWelcomeScreen() {
  return _saveWelcomeScreen(...arguments);
};
