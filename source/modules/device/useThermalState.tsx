// Module ID: 10515
// Function ID: 82095
// Name: _getThermalState
// Dependencies: []
// Exports: default, getThermalState

// Module 10515 (_getThermalState)
function _getThermalState(rawThermalState) {
  if (null == rawThermalState) {
    return obj.UNHANDLED;
  } else {
    if (obj2.isIOS()) {
      return rawThermalState;
    } else {
      const obj = require(dependencyMap[0]);
      if (obj.isAndroid()) {
        if (obj.NONE === rawThermalState) {
          return obj.NOMINAL;
        } else {
          if (obj.LIGHT !== rawThermalState) {
            if (obj.MODERATE !== rawThermalState) {
              if (obj.SEVERE === rawThermalState) {
                return obj.SERIOUS;
              } else {
                if (obj.CRITICAL !== rawThermalState) {
                  if (obj.EMERGENCY !== rawThermalState) {
                    if (obj.SHUTDOWN !== rawThermalState) {
                      return obj.UNHANDLED;
                    }
                  }
                }
                return obj.CRITICAL;
              }
            }
          }
          return obj.FAIR;
        }
      } else {
        return obj.UNHANDLED;
      }
    }
    const obj2 = require(dependencyMap[0]);
  }
}
let obj = { UNHANDLED: -1, [-1]: "UNHANDLED", NOMINAL: 0, [0]: "NOMINAL", FAIR: 1, [1]: "FAIR", SERIOUS: 2, [2]: "SERIOUS", CRITICAL: 3, [3]: "CRITICAL" };
obj = { NONE: 0, [0]: "NONE", LIGHT: 1, [1]: "LIGHT", MODERATE: 2, [2]: "MODERATE", SEVERE: 3, [3]: "SEVERE", CRITICAL: 4, [4]: "CRITICAL", EMERGENCY: 5, [5]: "EMERGENCY", SHUTDOWN: 6, [6]: "SHUTDOWN" };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/device/useThermalState.tsx");

export default function useThermalState() {
  return _getThermalState(importDefault(dependencyMap[1]).useRawThermalState());
};
export const ThermalStates = obj;
export const AndroidThermalStates = obj;
export const getThermalState = function getThermalState() {
  return _getThermalState(importDefault(dependencyMap[1]).getRawThermalState());
};
