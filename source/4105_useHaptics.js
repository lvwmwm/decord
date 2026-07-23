// Module ID: 4105
// Function ID: 33974
// Name: useHaptics
// Dependencies: [31, 4102, 4106]
// Exports: useHaptics

// Module 4105 (useHaptics)
import { useMemo } from "result";


export const useHaptics = function useHaptics(enableVibrateFallback) {
  let closure_0 = enableVibrateFallback;
  let prop;
  if (null != enableVibrateFallback) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (null != enableVibrateFallback) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  const items = [prop, prop1];
  return useMemo(() => ({
    trigger(arg0, arg1) {
      outer2_1(outer2_2[1]).trigger(arg0, Object.assign({}, outer1_0, arg1));
    },
    triggerPattern(arg0, arg1) {
      outer2_1(outer2_2[1]).triggerPattern(arg0, Object.assign({}, outer1_0, arg1));
    },
    stop() {
      outer2_1(outer2_2[1]).stop();
    },
    isSupported() {
      return outer2_1(outer2_2[1]).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      return callback(outer2_2[2]).playHaptic(arg0, arg1, Object.assign({}, outer1_0, arg2));
    },
    impact(arg0, arg1, arg2) {
      outer2_1(outer2_2[1]).impact(arg0, arg1, Object.assign({}, outer1_0, arg2));
    },
    setEnabled: outer1_1(outer1_2[1]).setEnabled,
    isEnabled: outer1_1(outer1_2[1]).isEnabled,
    getSystemHapticStatus: outer1_1(outer1_2[1]).getSystemHapticStatus,
    playAHAP: outer1_1(outer1_2[1]).playAHAP
  }), items);
};
