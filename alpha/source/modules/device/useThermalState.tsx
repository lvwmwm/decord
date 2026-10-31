// Module ID: 16294
// Function ID: 16295
// Name: useThermalState
// Dependencies: [16295, 1375, 5954, 2]
// Exports: default, getThermalState

// Module 16294 (useThermalState)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5954 */;
import ThermalStates from "ThermalStates" /* 16295 */;
import size from "module_2" /* 2 */;

function _getThermalState(rawThermalState) {
  if (null == rawThermalState) {
    return ThermalStates.ThermalStates.UNHANDLED;
  } else {
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      return rawThermalState;
    } else {
      const tmp4Result = PlatformUtils;
      if (tmp4Result.isAndroid()) {
        if (obj.NONE === rawThermalState) {
          return ThermalStates.ThermalStates.NOMINAL;
        } else {
          if (obj.LIGHT !== rawThermalState) {
            if (obj.MODERATE !== rawThermalState) {
              if (obj.SEVERE === rawThermalState) {
                return ThermalStates.ThermalStates.SERIOUS;
              } else {
                if (obj.CRITICAL !== rawThermalState) {
                  if (obj.EMERGENCY !== rawThermalState) {
                    if (obj.SHUTDOWN !== rawThermalState) {
                      return ThermalStates.ThermalStates.UNHANDLED;
                    }
                  }
                }
                return ThermalStates.ThermalStates.CRITICAL;
              }
            }
          }
          return ThermalStates.ThermalStates.FAIR;
        }
      } else {
        return ThermalStates.ThermalStates.UNHANDLED;
      }
    }
  }
}
const AndroidThermalStates = { NONE: 0, [0]: "NONE", LIGHT: 1, [1]: "LIGHT", MODERATE: 2, [2]: "MODERATE", SEVERE: 3, [3]: "SEVERE", CRITICAL: 4, [4]: "CRITICAL", EMERGENCY: 5, [5]: "EMERGENCY", SHUTDOWN: 6, [6]: "SHUTDOWN" };
const result = size.fileFinishedImporting("modules/device/useThermalState.tsx");

export default function useThermalState() {
  const obj = ThermalUtilsDefault;
  return _getThermalState(obj.useRawThermalState());
};
export { AndroidThermalStates };
export function getThermalState() {
  const obj = ThermalUtilsDefault;
  return _getThermalState(obj.getRawThermalState());
}
