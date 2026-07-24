// Module ID: 10540
// Function ID: 82273
// Name: NativeModules
// Dependencies: [27, 477, 10541, 4110, 621, 682, 2]

// Module 10540 (NativeModules)
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import keys from "keys";
import set from "enforcing";

let NativeEventEmitter;
let NativeModules;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
if (set.isAndroid()) {
  let DCDDeviceThermalStateManager = require("enforcing");
} else {
  DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
}
const nativeEventEmitter = new NativeEventEmitter(DCDDeviceThermalStateManager);
let closure_5 = keys.create((arg0) => {
  const _require = arg0;
  function updateThermalState(state) {
    const callback = state;
    callback(outer1_2[5]).batchUpdates(() => state((rawThermalState) => {
      let tmp = rawThermalState;
      if (rawThermalState.rawThermalState !== outer1_0) {
        const obj = { rawThermalState: outer1_0 };
        tmp = obj;
      }
      return tmp;
    }));
  }
  let obj = _require(477);
  if (obj.isAndroid()) {
    if (obj2.getSystemVersionMajor() >= 29) {
      let resolved = Promise.resolve(updateThermalState(10541).getThermalState());
      const obj3 = updateThermalState(10541);
    } else {
      resolved = Promise.resolve(undefined);
    }
    obj2 = _require(4110);
  } else {
    const DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
    const thermalState = DCDDeviceThermalStateManager.getThermalState();
    thermalState.then(updateThermalState);
    nativeEventEmitter.addListener("DeviceThermalStateDidChange", (state) => {
      updateThermalState(state.state);
    });
    obj = { rawThermalState: undefined };
    return obj;
  }
});
const result = set.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

export default {
  getRawThermalState() {
    return lib.getState().rawThermalState;
  },
  useRawThermalState() {
    return lib((rawThermalState) => rawThermalState.rawThermalState);
  },
  addListener(arg0) {
    return { remove: lib.subscribe(arg0) };
  }
};
