// Module ID: 13508
// Function ID: 103993
// Name: updateDevToolsSettings
// Dependencies: [6960, 686, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools

// Module 13508 (updateDevToolsSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function updateDevToolsSettings(settings) {
  let obj = importDefault(686);
  obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export { updateDevToolsSettings };
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  updateDevToolsSettings({ displayTools: !displayTools.displayTools });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  updateDevToolsSettings({ displayTools: true, lastOpenTabId, lastOpenSubTabId });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  importDefault(686).dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
