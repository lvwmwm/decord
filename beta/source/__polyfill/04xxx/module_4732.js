// Module ID: 4732
// Function ID: 4733
// Dependencies: [19, 4729, 4733]
// Exports: useHaptics

// Module 4732
import _mod19 from "module_19" /* 19 */;
import _modDef4729 from "module_4729" /* 4729 */;

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
      _modDef4729.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4729.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4729).stop();
    },
    isSupported() {
      return closure_1_1(4729).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4733).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4729.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4729.setEnabled,
    isEnabled: _modDef4729.isEnabled,
    getSystemHapticStatus: _modDef4729.getSystemHapticStatus,
    playAHAP: _modDef4729.playAHAP
  }), items);
};
