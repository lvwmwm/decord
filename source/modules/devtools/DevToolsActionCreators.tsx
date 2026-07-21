// Module ID: 13385
// Function ID: 101782
// Name: updateDevToolsSettings
// Dependencies: [989855765, 469762074, 33554448]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools

// Module 13385 (updateDevToolsSettings)
function updateDevToolsSettings(settings) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export { updateDevToolsSettings };
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  updateDevToolsSettings({ displayTools: !displayTools.displayTools });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  updateDevToolsSettings({ displayTools: true, lastOpenTabId, lastOpenSubTabId });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  importDefault(dependencyMap[1]).dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
