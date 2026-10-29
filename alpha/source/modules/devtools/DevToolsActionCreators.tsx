// Module ID: 17448
// Function ID: 17449
// Name: DevToolsActionCreators
// Dependencies: [7851, 584, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 17448 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7851 */;
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
