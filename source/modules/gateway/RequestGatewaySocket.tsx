// Module ID: 652
// Function ID: 7394
// Name: addToken
// Dependencies: [5, 653, 673, 675, 2]
// Exports: describeConnectionReasons, recordStartHeadlessTask, startBridgeTo, withRequest

// Module 652 (addToken)
import asyncGeneratorStep from "asyncGeneratorStep";
import { AnalyticEvents } from "ME";

const require = arg1;
function addToken(arg0) {
  const value = map.get(arg0);
  let num = 0;
  if (null != value) {
    num = value;
  }
  const result = map.set(arg0, num + 1);
}
function deleteToken(arg0) {
  const value = map.get(arg0);
  let num = 0;
  if (null != value) {
    num = value;
  }
  const diff = num - 1;
  if (diff <= 0) {
    map.delete(arg0);
  } else {
    const result = map.set(arg0, diff);
  }
}
function makeBridgeToken(arg0) {
  return "BRIDGE:" + arg0;
}
function isRequested() {
  return map.size > 0 || c6;
}
function setRequestedBy(closure_0) {
  withStateTransitions(() => {
    outer1_8(closure_0);
    outer1_9(outer1_10(closure_0));
  });
}
function stopRequest(outer1_0) {
  let closure_0 = outer1_0;
  withStateTransitions(() => {
    outer1_9(closure_0);
  });
}
async function _withRequest(arg0, arg1, arg2) {
  outer2_12(arg0);
  outer2_13(arg0);
  return yield arg1();
}
function withStateTransitions(arg0) {
  isRequested();
  let c6 = false;
  arg0();
  isRequested();
}
let closure_5 = ["COLD_START"];
let c6 = true;
const map = new Map();
let result = require("setOriginWindow").fileFinishedImporting("modules/gateway/RequestGatewaySocket.tsx");

export { isRequested };
export function recordStartHeadlessTask() {
  let c6 = false;
}
export const describeConnectionReasons = function describeConnectionReasons() {
  const items = [...c6 ? closure_5 : [], ...map.keys()];
  const sorted = items.sort();
  let str = "NO_REASONS";
  if (sorted.length > 0) {
    str = sorted.join(",");
  }
  return str;
};
export { setRequestedBy };
export const startBridgeTo = function startBridgeTo(arg0) {
  const _require = makeBridgeToken(arg0);
  let closure_1 = performance.now();
  withStateTransitions(() => {
    outer1_8(closure_0);
  });
  _require(673).requestSafeIdleCallback(() => {
    if (outer1_7.has(closure_0)) {
      let obj = callback(outer1_2[3]);
      obj = { bridge_token: closure_0 };
      const _performance = performance;
      obj.cleared_after = performance.now() - callback;
      obj.track(outer1_4.GATEWAY_BRIDGE_TIMEOUT, obj);
    }
    outer1_13(closure_0);
  }, { timeout: 5000 });
};
export { stopRequest };
export const withRequest = function withRequest(combined, arg1) {
  return _withRequest(...arguments);
};
