// Module ID: 17575
// Function ID: 17576
// Name: DevToolsActionCreators
// Dependencies: [7863, 572, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 17575 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7863 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export function updateDevToolsSettings(settings) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj2);
}
export function toggleDisplayDevTools() {
  const obj = { displayTools: !DevToolsSettingsStore.displayTools };
  const obj2 = DispatcherDefault;
  obj2.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: obj });
}
export function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  const obj = { displayTools: true, lastOpenTabId, lastOpenSubTabId };
  const obj2 = DispatcherDefault;
  obj2.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: obj });
}
export function clearAnalyticsLog() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}
