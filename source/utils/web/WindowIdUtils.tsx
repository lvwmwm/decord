// Module ID: 6913
// Function ID: 6914
// Name: getWindowId
// Dependencies: [12, 2]
// Exports: getMainWindowId, getWindowId, setupWindowId

// Module 6913 (getWindowId)
const result = require("set").fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export const getWindowId = function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
};
export const setupWindowId = function setupWindowId(arg0) {
  const uniqueIdResult = require(12) /* apply */.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
};
export const getMainWindowId = function getMainWindowId() {
  return window.__DISCORD_WINDOW_ID;
};
