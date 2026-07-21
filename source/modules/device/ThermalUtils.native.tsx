// Module ID: 10500
// Function ID: 82007
// Name: NativeModules
// Dependencies: []

// Module 10500 (NativeModules)
let NativeEventEmitter;
let NativeModules;
const _module = require(dependencyMap[0]);
({ NativeEventEmitter, NativeModules } = _module);
const _module1 = require(dependencyMap[1]);
if (_module1.isAndroid()) {
  let DCDDeviceThermalStateManager = importDefault(dependencyMap[2]);
} else {
  DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
}
const nativeEventEmitter = new NativeEventEmitter(DCDDeviceThermalStateManager);
const _module2 = require(dependencyMap[4]);
let closure_5 = _module2.create((arg0) => {
  const require = arg0;
  function updateThermalState(state) {
    state(closure_2[5]).batchUpdates(() => arg0((rawThermalState) => {
      let tmp = rawThermalState;
      if (rawThermalState.rawThermalState !== closure_0) {
        const obj = { rawThermalState: closure_0 };
        tmp = obj;
      }
      return tmp;
    }));
  }
  const importDefault = updateThermalState;
  let obj = require(dependencyMap[1]);
  if (obj.isAndroid()) {
    if (obj2.getSystemVersionMajor() >= 29) {
      let resolved = Promise.resolve(importDefault(dependencyMap[2]).getThermalState());
      const obj3 = importDefault(dependencyMap[2]);
    } else {
      resolved = Promise.resolve(undefined);
    }
    const obj2 = require(dependencyMap[3]);
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
const _module3 = require(dependencyMap[6]);
const result = _module3.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

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
