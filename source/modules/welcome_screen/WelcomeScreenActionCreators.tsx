// Module ID: 11688
// Function ID: 90655
// Name: _fetchWelcomeScreen
// Dependencies: [5, 653, 686, 507, 2]
// Exports: clearWelcomeScreenSettings, fetchWelcomeScreen, resetWelcomeScreen, saveWelcomeScreen, updateSettings, welcomeScreenViewed

// Module 11688 (_fetchWelcomeScreen)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchWelcomeScreen() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _saveWelcomeScreen() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("dispatcher").fileFinishedImporting("modules/welcome_screen/WelcomeScreenActionCreators.tsx");

export const welcomeScreenViewed = function welcomeScreenViewed(outer1_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(686);
  obj = { type: "WELCOME_SCREEN_VIEW", guildId: outer1_0, isLurking: flag };
  obj.dispatch(obj);
};
export const fetchWelcomeScreen = function fetchWelcomeScreen(outer1_0) {
  return _fetchWelcomeScreen(...arguments);
};
export const resetWelcomeScreen = function resetWelcomeScreen() {
  importDefault(686).dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
};
export const clearWelcomeScreenSettings = function clearWelcomeScreenSettings() {
  importDefault(686).dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
};
export const updateSettings = function updateSettings(settings) {
  let obj = importDefault(686);
  obj = { type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const saveWelcomeScreen = function saveWelcomeScreen() {
  return _saveWelcomeScreen(...arguments);
};
