// Module ID: 4764
// Function ID: 4765
// Dependencies: [19, 4761, 4765]
// Exports: useHaptics

// Module 4764
import _mod19 from "module_19" /* 19 */;
import _modDef4761 from "module_4761" /* 4761 */;

const useMemo = _mod19.useMemo;

export const useHaptics = function useHaptics(enableVibrateFallback) {
  closure_0 = enableVibrateFallback;
  let prop;
  if (enableVibrateFallback != null) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (enableVibrateFallback != null) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  const items = [prop, prop1];
  return useMemo(() => ({
    trigger(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4761.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4761.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4761).stop();
    },
    isSupported() {
      return closure_1_1(4761).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4765).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4761.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4761.setEnabled,
    isEnabled: _modDef4761.isEnabled,
    getSystemHapticStatus: _modDef4761.getSystemHapticStatus,
    playAHAP: _modDef4761.playAHAP
  }), items);
};
