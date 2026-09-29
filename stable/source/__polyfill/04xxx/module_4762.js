// Module ID: 4762
// Function ID: 4763
// Dependencies: [19, 4759, 4763]
// Exports: useHaptics

// Module 4762
import _mod19 from "module_19" /* 19 */;
import _modDef4759 from "module_4759" /* 4759 */;

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
      _modDef4759.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4759.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4759).stop();
    },
    isSupported() {
      return closure_1_1(4759).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4763).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4759.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4759.setEnabled,
    isEnabled: _modDef4759.isEnabled,
    getSystemHapticStatus: _modDef4759.getSystemHapticStatus,
    playAHAP: _modDef4759.playAHAP
  }), items);
};
