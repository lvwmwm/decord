// Module ID: 9565
// Function ID: 9566
// Name: ThermalUtils
// Dependencies: [17, 9566, 1368, 4737, 562, 1252, 2]

// Module 9565 (ThermalUtils)
import _mod17 from "module_17" /* 17 */;
import NativeDeviceThermalStateModuleDefault from "NativeDeviceThermalStateModule" /* 9566 */;
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeDeviceThermalStateModuleDefault);
let closure_4 = module_562.create((arg0) => {
  _require = arg0;
  nativeEventEmitter.addListener("DeviceThermalStateDidChange", (state) => {
    state = state.state;
    state(dependencyMap[5]).batchUpdates(() => state((rawThermalState) => {
      let tmp = rawThermalState;
      if (rawThermalState.rawThermalState !== state) {
        const obj = { rawThermalState: tmp2 };
        tmp = obj;
      }
      return tmp;
    }));
  });
  if (!obj.isAndroid()) {
    const thermalState = NativeDeviceThermalStateModuleDefault.getThermalState();
    const rawThermalState = thermalState;
  } else {
    const tmp2Result = require("DeviceUtils");
  }
  return { rawThermalState };
});
const result = size.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

export default {
  getRawThermalState() {
    return closure_4.getState().rawThermalState;
  },
  useRawThermalState() {
    return closure_4((rawThermalState) => rawThermalState.rawThermalState);
  },
  addListener(arg0) {
    return { remove: closure_4.subscribe(arg0) };
  }
};
