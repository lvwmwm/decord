// Module ID: 652
// Function ID: 7394
// Name: addToken
// Dependencies: []
// Exports: describeConnectionReasons, recordStartHeadlessTask, startBridgeTo, withRequest

// Module 652 (addToken)
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
  return map.size > 0 || closure_6;
}
function setRequestedBy(arg0) {
  const arg1 = arg0;
  withStateTransitions(() => {
    callback(arg0);
    callback2(callback3(arg0));
  });
}
function stopRequest(closure_0) {
  const arg1 = closure_0;
  withStateTransitions(() => {
    callback(arg0);
  });
}
async function _withRequest(arg0, arg1, arg2) {
  callback(arg0);
  callback2(arg0);
  return yield arg1();
}
function withStateTransitions(arg0) {
  isRequested();
  let closure_6 = false;
  arg0();
  isRequested();
}
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
let closure_5 = [];
let closure_6 = true;
const map = new Map();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/gateway/RequestGatewaySocket.tsx");

export { isRequested };
export function recordStartHeadlessTask() {
  let closure_6 = false;
}
export const describeConnectionReasons = function describeConnectionReasons() {
  const items = [...closure_6 ? closure_5 : [], ...closure_7.keys()];
  const sorted = items.sort();
  let str = "NO_REASONS";
  if (sorted.length > 0) {
    str = sorted.join(",");
  }
  return str;
};
export { setRequestedBy };
export const startBridgeTo = function startBridgeTo(arg0) {
  const callback = makeBridgeToken(arg0);
  let closure_1 = performance.now();
  withStateTransitions(() => {
    callback2(closure_0);
  });
  callback(dependencyMap[2]).requestSafeIdleCallback(() => {
    if (set.has(closure_0)) {
      let obj = callback(closure_2[3]);
      obj = { bridge_token: closure_0 };
      const _performance = performance;
      obj.cleared_after = performance.now() - callback;
      obj.track(constants.GATEWAY_BRIDGE_TIMEOUT, obj);
    }
    callback3(closure_0);
  }, { timeout: 5000 });
};
export { stopRequest };
export const withRequest = function withRequest(combined, arg1) {
  return _withRequest(...arguments);
};
