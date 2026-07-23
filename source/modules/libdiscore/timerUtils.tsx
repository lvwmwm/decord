// Module ID: 16614
// Function ID: 129562
// Name: flushDelayLogs
// Dependencies: [653, 3, 675, 574, 1848, 2]
// Exports: setupLibdiscoreTimersMonitor

// Module 16614 (flushDelayLogs)
import { AnalyticEvents } from "ME";
import importDefaultResult from "debounce";

function flushDelayLogs() {
  if (0 !== arr.length) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.warn("[libdiscore.timers] Flushing " + arr.length + " delay logs", arr);
    let obj = importDefault(675);
    obj = {};
    const _JSON = JSON;
    obj.delay_reports = JSON.stringify(arr);
    obj.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
    arr = [];
  }
}
function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  arr = arr.push({ timerId, expectedDelay, actualDelay, executionTime });
  if (arr.length >= 10) {
    flushDelayLogs();
  } else {
    callback();
  }
}
importDefaultResult = new importDefaultResult("libdiscore.timers");
let closure_5 = [];
let closure_6 = require("debounce")(flushDelayLogs, 5000);
let result = require("expandLocation").fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const result = importAll(1848).setTimersMonitorCallback(onTimersDelayCallback);
};
