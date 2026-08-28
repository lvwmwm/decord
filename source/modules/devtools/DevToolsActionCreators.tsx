// Module ID: 15107
// Function ID: 15108
// Name: updateDevToolsSettings
// Dependencies: [7411, 709, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 15107 (updateDevToolsSettings)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "initialize" /* 7411 */;

const result = require("set").fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  let obj = dispatcherDefault;
  obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  dispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !displayTools.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  dispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  dispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
