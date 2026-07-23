// Module ID: 6993
// Function ID: 55933
// Name: _getDeviceState
// Dependencies: [5, 27, 3, 6994, 2]
// Exports: getDeviceState

// Module 6993 (_getDeviceState)
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "ThermalState";

const require = arg1;
async function _getDeviceState() {
  let iter = (function*() {
    let tmp = arg0;
    if (tmp === undefined) {
      const obj = { fallback: true };
      tmp = obj;
    }
    yield undefined;
    const MediaManager = outer2_3.MediaManager;
    return yield MediaManager.getDeviceStateInfo();
  })();
  iter.next();
  return iter;
}
importDefaultResult = new importDefaultResult("native/DeviceState.tsx");
const result = require("timestamp").fileFinishedImporting("modules/device/native/DeviceState.tsx");

export const logger = importDefaultResult;
export const getDeviceState = function getDeviceState(arg0) {
  return _getDeviceState(...arguments);
};
