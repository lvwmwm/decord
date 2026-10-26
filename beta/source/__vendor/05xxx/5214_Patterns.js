// Module ID: 5214
// Function ID: 5215
// Name: Patterns
// Dependencies: [5215, 5216, 5218, 5220, 5221, 5219, 5222]

// Module 5214 (Patterns)
import _modDef5215 from "module_5215" /* 5215 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5216 */;
import _mod5218 from "module_5218" /* 5218 */;
import playHaptic from "playHaptic" /* 5219 */;
import _mod5220 from "module_5220" /* 5220 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5221 */;
import TouchableHaptic from "TouchableHaptic" /* 5222 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5215;
export const useHaptics = _mod5218.useHaptics;
export const Patterns = _mod5220.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5215.trigger;
export const stop = _modDef5215.stop;
export const isSupported = _modDef5215.isSupported;
export const triggerPattern = _modDef5215.triggerPattern;
export const getSystemHapticStatus = _modDef5215.getSystemHapticStatus;
export const setEnabled = _modDef5215.setEnabled;
export const isEnabled = _modDef5215.isEnabled;
export const impact = _modDef5215.impact;
export const playAHAP = _modDef5215.playAHAP;
