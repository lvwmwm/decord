// Module ID: 5063
// Function ID: 5064
// Name: Patterns
// Dependencies: [5064, 5065, 5067, 5069, 5070, 5068, 5071]

// Module 5063 (Patterns)
import _modDef5064 from "module_5064" /* 5064 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5065 */;
import _mod5067 from "module_5067" /* 5067 */;
import playHaptic from "playHaptic" /* 5068 */;
import _mod5069 from "module_5069" /* 5069 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5070 */;
import TouchableHaptic from "TouchableHaptic" /* 5071 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5064;
export const useHaptics = _mod5067.useHaptics;
export const Patterns = _mod5069.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5064.trigger;
export const stop = _modDef5064.stop;
export const isSupported = _modDef5064.isSupported;
export const triggerPattern = _modDef5064.triggerPattern;
export const getSystemHapticStatus = _modDef5064.getSystemHapticStatus;
export const setEnabled = _modDef5064.setEnabled;
export const isEnabled = _modDef5064.isEnabled;
export const impact = _modDef5064.impact;
export const playAHAP = _modDef5064.playAHAP;
