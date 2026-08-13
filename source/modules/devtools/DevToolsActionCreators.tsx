// Module ID: 13907
// Function ID: 13908
// Name: updateDevToolsSettings
// Dependencies: [7224, 709, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 13907 (updateDevToolsSettings)
import initialize from "initialize";

const result = require("set").fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  let obj = importDefault(709);
  obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  importDefault(709).dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !displayTools.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  importDefault(709).dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  importDefault(709).dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
