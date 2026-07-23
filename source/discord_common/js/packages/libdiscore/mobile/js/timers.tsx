// Module ID: 1848
// Function ID: 20267
// Name: setTimeout
// Dependencies: [1846, 2]
// Exports: keepAliveWorkaround, registerTimerPolyfills, setTimersMonitorCallback

// Module 1848 (setTimeout)
function setTimeout(arg0, arg1) {
  let num = 0;
  if (null != arg1) {
    num = arg1;
  }
  const registerTimeoutResult = closure_3.registerTimeout(Math.max(num, 4));
  const result = map.set(registerTimeoutResult, arg0);
  return registerTimeoutResult;
}
function setInterval(arg0, arg1) {
  let num = 0;
  if (null != arg1) {
    num = arg1;
  }
  const registerIntervalResult = closure_3.registerInterval(Math.max(num, 4));
  const result = map.set(registerIntervalResult, arg0);
  return registerIntervalResult;
}
function clearTimeout(arg0) {
  let deleteResult = null != arg0;
  if (deleteResult) {
    deleteResult = map.delete(arg0);
  }
  if (deleteResult) {
    closure_3.clear(arg0);
  }
}
const LIBDISCORE_JSI = require("typedGlobal").typedGlobal.LIBDISCORE_JSI;
let c1 = null;
const obj = {
  slowExecutionThresholdMillis: 500,
  delayedExecutionThresholdMillis: 5000,
  onSlowTimer(arg0, arg1, arg2, arg3) {
    if (null != _null) {
      _null(arg0, arg1, arg2, arg3);
    }
  }
};
const map = new Map();
let closure_3 = LIBDISCORE_JSI.makeTimerManager(function expirationCallback(arg0, arg1) {
  const value = map.get(arg0);
  if (value) {
    if (arg1) {
      map.delete(arg0);
    }
    value();
  }
}, obj);
let result = require("set").fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/timers.tsx");

export function setTimersMonitorCallback(onTimersDelayCallback) {
  let closure_1 = onTimersDelayCallback;
}
export { setTimeout };
export { setInterval };
export { clearTimeout };
export const clearInterval = clearTimeout;
export const registerTimerPolyfills = function registerTimerPolyfills() {
  window.setTimeout = setTimeout;
  window.setInterval = setInterval;
  window.clearTimeout = clearTimeout;
  window.clearInterval = clearTimeout;
};
export const keepAliveWorkaround = function keepAliveWorkaround() {
  LIBDISCORE_JSI.runtimeExecutorDemo(5000);
};
