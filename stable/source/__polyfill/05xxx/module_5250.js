// Module ID: 5250
// Function ID: 5251
// Dependencies: [19, 5247, 5251]
// Exports: useHaptics

// Module 5250
import react from "react" /* 19 */;
import _modDef5247 from "module_5247" /* 5247 */;

const useMemo = react.useMemo;

export const useHaptics = function useHaptics(enableVibrateFallback) {
  let closure_0 = enableVibrateFallback;
  let prop;
  if (enableVibrateFallback != null) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (enableVibrateFallback != null) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  const items = [prop, prop1];
  return useMemo(() => {
    let obj = {
      trigger(arg0, arg1) {
        const trigger = _modDef5247.trigger;
        const obj = {};
        _modDef5247;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        trigger(arg0, obj);
      },
      triggerPattern(arg0, arg1) {
        const triggerPattern = _modDef5247.triggerPattern;
        const obj = {};
        _modDef5247;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        triggerPattern(arg0, obj);
      },
      stop() {
        const obj = closure_1_1(closure_1_2[1]);
        obj.stop();
      },
      isSupported() {
        const obj = closure_1_1(closure_1_2[1]);
        return obj.isSupported();
      },
      playHaptic(arg0, arg1, arg2) {
        const playHaptic = closure_0(dependencyMap[2]).playHaptic;
        const obj = {};
        closure_0(dependencyMap[2]);
        const merged = Object.assign(closure_1_0);
        const merged1 = Object.assign(arg2);
        return playHaptic(arg0, arg1, obj);
      },
      impact(arg0, arg1, arg2) {
        const impact = _modDef5247.impact;
        const obj = {};
        _modDef5247;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        impact(arg0, arg1, obj);
      },
      setEnabled: _modDef5247.setEnabled,
      isEnabled: _modDef5247.isEnabled,
      getSystemHapticStatus: _modDef5247.getSystemHapticStatus,
      playAHAP: _modDef5247.playAHAP
    };
    return obj;
  }, items);
};
