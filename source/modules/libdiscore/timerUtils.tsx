// Module ID: 16481
// Function ID: 127285
// Name: flushDelayLogs
// Dependencies: []
// Exports: setupLibdiscoreTimersMonitor

// Module 16481 (flushDelayLogs)
function flushDelayLogs() {
  if (0 !== arr.length) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.warn("[libdiscore.timers] Flushing " + arr.length + " delay logs", arr);
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const _JSON = JSON;
    obj.delay_reports = JSON.stringify(arr);
    obj.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
    const arr = [];
  }
}
function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  const arr = arr.push({ timerId, expectedDelay, actualDelay, executionTime });
  if (arr.length >= 10) {
    flushDelayLogs();
  } else {
    callback();
  }
}
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("libdiscore.timers");
let closure_5 = [];
let closure_6 = importDefault(dependencyMap[3])(flushDelayLogs, 5000);
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const result = importAll(dependencyMap[4]).setTimersMonitorCallback(onTimersDelayCallback);
};
