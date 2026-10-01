// Module ID: 4807
// Function ID: 4808
// Dependencies: [19, 4804, 4808]
// Exports: useHaptics

// Module 4807
import react from "react" /* 19 */;
import _modDef4804 from "module_4804" /* 4804 */;

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
        const trigger = _modDef4804.trigger;
        const obj = {};
        _modDef4804;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        trigger(arg0, obj);
      },
      triggerPattern(arg0, arg1) {
        const triggerPattern = _modDef4804.triggerPattern;
        const obj = {};
        _modDef4804;
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
        const impact = _modDef4804.impact;
        const obj = {};
        _modDef4804;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        impact(arg0, arg1, obj);
      },
      setEnabled: _modDef4804.setEnabled,
      isEnabled: _modDef4804.isEnabled,
      getSystemHapticStatus: _modDef4804.getSystemHapticStatus,
      playAHAP: _modDef4804.playAHAP
    };
    return obj;
  }, items);
};
