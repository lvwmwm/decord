// Module ID: 7451
// Function ID: 59857
// Name: shouldWaitForBlockingModals
// Dependencies: []
// Exports: addPostConnectionCallback

// Module 7451 (shouldWaitForBlockingModals)
function shouldWaitForBlockingModals() {
  return null != type.getType();
}
function processCallbacks() {
  if (!shouldWaitForBlockingModals()) {
    const item = arr.forEach((arg0) => {
      callback(arg0);
    });
    const arr = [];
  }
}
function handleCallback(arg0) {
  let closure_0 = arg0;
  setImmediate(() => arg0());
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = [];
const subscription = importDefault(dependencyMap[2]).subscribe("CONNECTION_OPEN", processCallbacks);
const importDefaultResult = importDefault(dependencyMap[2]);
const subscription1 = importDefault(dependencyMap[2]).subscribe("CONNECTION_RESUMED", processCallbacks);
const importDefaultResult1 = importDefault(dependencyMap[2]);
const subscription2 = importDefault(dependencyMap[2]).subscribe("NUF_COMPLETE", processCallbacks);
const importDefaultResult2 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (connectedOrOverlay.isConnectedOrOverlay()) {
    if (!shouldWaitForBlockingModals()) {
      handleCallback(arg0);
    }
  }
};
