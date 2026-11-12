// Module ID: 16645
// Function ID: 16646
// Name: useThermalState
// Dependencies: [16646, 1377, 6118, 2]
// Exports: default, getThermalState

// Module 16645 (useThermalState)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ThermalUtilsDefault from "ThermalUtils" /* 6118 */;
import ThermalStates from "ThermalStates" /* 16646 */;
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
