// Module ID: 5516
// Function ID: 5517
// Name: processCallbacks
// Dependencies: [5517, 5168, 709, 2]
// Exports: addPostConnectionCallback

// Module 5516 (processCallbacks)
import closure_0 from "initialize" /* 5517 */;
import closure_1 from "_handleConnectionOpen" /* 5168 */;
import importDefaultResult from "dispatcher" /* 709 */;

function processCallbacks() {
  if (null == store.getType()) {
    const item = arr.forEach((arg0) => {
      closure_0 = arg0;
      setImmediate(() => callback());
    });
    arr = [];
  }
}
let closure_2 = [];
const subscription = importDefaultResult.subscribe("CONNECTION_OPEN", processCallbacks);
const subscription1 = importDefaultResult.subscribe("CONNECTION_RESUMED", processCallbacks);
const importDefaultResult1 = importDefaultResult;
const subscription2 = importDefaultResult.subscribe("NUF_COMPLETE", processCallbacks);
const importDefaultResult2 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (connectedOrOverlay.isConnectedOrOverlay()) {
    if (null == store.getType()) {
      store = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => callback());
    }
  }
};
