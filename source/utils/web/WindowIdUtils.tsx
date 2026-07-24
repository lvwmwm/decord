// Module ID: 5135
// Function ID: 44520
// Name: getWindowId
// Dependencies: [22, 2]
// Exports: getMainWindowId, setupWindowId

// Module 5135 (getWindowId)
function getWindowId(defaultView) {
  return defaultView.__DISCORD_WINDOW_ID;
}
const result = require("set").fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export { getWindowId };
export const setupWindowId = function setupWindowId(arg0) {
  const uniqueIdResult = require(22) /* apply */.uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
};
export const getMainWindowId = function getMainWindowId() {
  return getWindowId(window);
};
