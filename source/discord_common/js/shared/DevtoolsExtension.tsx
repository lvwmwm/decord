// Module ID: 1208
// Function ID: 13873
// Name: reportEvent
// Dependencies: [284214097]
// Exports: logFluxAction, notifyStoreChange, notifyStoreCreated

// Module 1208 (reportEvent)
function reportEvent(arg0) {
  const obj = getDevtools();
  if (!tmp) {
    obj.reportEvent(arg0);
  }
}
function getDevtools() {
  let __DISCORD_DEVTOOLS = null;
  if ("undefined" !== typeof window) {
    const _window = window;
    __DISCORD_DEVTOOLS = window.__DISCORD_DEVTOOLS;
  }
  return __DISCORD_DEVTOOLS;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/DevtoolsExtension.tsx");

export const logFluxAction = function logFluxAction(description, durationMs) {
  reportEvent({ type: "Flux-Dispatch", description: description.type, data: description, durationMs });
};
export { reportEvent };
export const notifyStoreCreated = function notifyStoreCreated(storeName) {
  let obj = getDevtools();
  if (!tmp) {
    obj = { storeName };
    obj.notifyStoreCreated(obj);
  }
};
export const notifyStoreChange = function notifyStoreChange(storeName) {
  let obj = getDevtools();
  if (!tmp) {
    obj = { storeName };
    obj.notifyStoreChange(obj);
  }
};
