// Module ID: 6637
// Function ID: 58761
// Name: shouldWaitForBlockingModals
// Dependencies: [6638, 4809, 686, 2]
// Exports: addPostConnectionCallback

// Module 6637 (shouldWaitForBlockingModals)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import importDefaultResult from "dispatcher";
import importDefaultResult1 from "dispatcher";
import importDefaultResult2 from "dispatcher";

function shouldWaitForBlockingModals() {
  return null != type.getType();
}
function processCallbacks() {
  if (!shouldWaitForBlockingModals()) {
    const item = arr.forEach((arg0) => {
      outer1_4(arg0);
    });
    arr = [];
  }
}
function handleCallback(arg0) {
  let _isNativeReflectConstruct = arg0;
  setImmediate(() => callback());
}
let closure_2 = [];
const subscription = require("dispatcher").subscribe("CONNECTION_OPEN", processCallbacks);
const subscription1 = require("dispatcher").subscribe("CONNECTION_RESUMED", processCallbacks);
const subscription2 = require("dispatcher").subscribe("NUF_COMPLETE", processCallbacks);
const result = require("dispatcher").fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (connectedOrOverlay.isConnectedOrOverlay()) {
    if (!shouldWaitForBlockingModals()) {
      handleCallback(arg0);
    }
  }
};
