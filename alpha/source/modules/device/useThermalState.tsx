// Module ID: 16212
// Function ID: 16213
// Name: useThermalState
// Dependencies: [16213, 1381, 5942, 558, 576, 2]
// Exports: getThermalState

// Module 16212 (useThermalState)
import react from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5942 */;
import ThermalStates from "ThermalStates" /* 16213 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThermalState() {
  let tmp3;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = ThermalUtilsDefault;
  const rawThermalState = obj2.useRawThermalState();
  if (cResult[0] !== rawThermalState) {
    const tmp5 = _getThermalState(rawThermalState);
    cResult[0] = rawThermalState;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useThermalState() {
  const obj = ThermalUtilsDefault;
  return _getThermalState(obj.useRawThermalState());
});
const result = size.fileFinishedImporting("modules/device/useThermalState.tsx");
const ThermalStates_export = ThermalStates.ThermalStates;

export default tmp2;
export { ThermalStates_export as ThermalStates };
export { AndroidThermalStates };
export function getThermalState() {
  const obj = ThermalUtilsDefault;
  return _getThermalState(obj.getRawThermalState());
}
