// Module ID: 5402
// Function ID: 46075
// Name: getWindowId
// Dependencies: []
// Exports: getMainWindowId, setupWindowId

// Module 5402 (getWindowId)
function getWindowId(closure_1) {
  return closure_1.__DISCORD_WINDOW_ID;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/web/WindowIdUtils.tsx");

export { getWindowId };
export const setupWindowId = function setupWindowId(arg0) {
  const uniqueIdResult = require(dependencyMap[0]).uniqueId("window-");
  arg0.__DISCORD_WINDOW_ID = uniqueIdResult;
  return uniqueIdResult;
};
export const getMainWindowId = function getMainWindowId() {
  return getWindowId(window);
};
