// Module ID: 4103
// Function ID: 33963
// Name: useHaptics
// Dependencies: []
// Exports: useHaptics

// Module 4103 (useHaptics)
const useMemo = require(dependencyMap[0]).useMemo;

export const useHaptics = function useHaptics(enableVibrateFallback) {
  const require = enableVibrateFallback;
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
      callback2(closure_2[1]).trigger(arg0, Object.assign({}, closure_0, arg1));
    },
    triggerPattern(arg0, arg1) {
      callback2(closure_2[1]).triggerPattern(arg0, Object.assign({}, closure_0, arg1));
    },
    stop() {
      callback2(closure_2[1]).stop();
    },
    isSupported() {
      return callback2(closure_2[1]).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      return callback(closure_2[2]).playHaptic(arg0, arg1, Object.assign({}, callback, arg2));
    },
    impact(arg0, arg1, arg2) {
      callback2(closure_2[1]).impact(arg0, arg1, Object.assign({}, closure_0, arg2));
    },
    setEnabled: callback(closure_2[1]).setEnabled,
    isEnabled: callback(closure_2[1]).isEnabled,
    getSystemHapticStatus: callback(closure_2[1]).getSystemHapticStatus,
    playAHAP: callback(closure_2[1]).playAHAP
  }), items);
};
