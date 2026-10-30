// Module ID: 17502
// Function ID: 17503
// Name: DevToolsActionCreators
// Dependencies: [7856, 572, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 17502 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7856 */;
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
