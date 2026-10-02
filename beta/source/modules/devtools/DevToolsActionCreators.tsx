// Module ID: 15118
// Function ID: 15119
// Name: DevToolsActionCreators
// Dependencies: [7136, 585, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 15118 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7136 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj2);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  const obj = { displayTools: !DevToolsSettingsStore.displayTools };
  const obj2 = DispatcherDefault;
  obj2.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: obj });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  const obj = { displayTools: true, lastOpenTabId, lastOpenSubTabId };
  const obj2 = DispatcherDefault;
  obj2.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: obj });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
