// Module ID: 15857
// Function ID: 15858
// Name: DevToolsActionCreators
// Dependencies: [7987, 573, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 15857 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7987 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings });
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !DevToolsSettingsStore.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  DispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
