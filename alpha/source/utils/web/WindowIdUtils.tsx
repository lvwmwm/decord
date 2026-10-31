// Module ID: 6868
// Function ID: 6869
// Name: WindowIdUtils
// Dependencies: [12, 2]
// Exports: getMainWindowId, getWindowId, setupWindowId

// Module 6868 (WindowIdUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
}
export function setupWindowId(arg0) {
  const obj = _mod12;
  const uniqueIdResult = obj.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
}
export function getMainWindowId() {
  return window.__DISCORD_WINDOW_ID;
}
