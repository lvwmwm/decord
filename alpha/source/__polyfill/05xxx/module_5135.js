// Module ID: 5135
// Function ID: 5136
// Dependencies: [19, 5132, 5136]
// Exports: useHaptics

// Module 5135
import react from "react" /* 19 */;
import _modDef5132 from "module_5132" /* 5132 */;

const useMemo = react.useMemo;

export function useHaptics(enableVibrateFallback) {
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
        const trigger = _modDef5132.trigger;
        const obj = {};
        _modDef5132;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        trigger(arg0, obj);
      },
      triggerPattern(arg0, arg1) {
        const triggerPattern = _modDef5132.triggerPattern;
        const obj = {};
        _modDef5132;
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
        const impact = _modDef5132.impact;
        const obj = {};
        _modDef5132;
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        impact(arg0, arg1, obj);
      },
      setEnabled: _modDef5132.setEnabled,
      isEnabled: _modDef5132.isEnabled,
      getSystemHapticStatus: _modDef5132.getSystemHapticStatus,
      playAHAP: _modDef5132.playAHAP
    };
    return obj;
  }, items);
}
