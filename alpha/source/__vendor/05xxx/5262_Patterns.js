// Module ID: 5262
// Function ID: 5263
// Name: Patterns
// Dependencies: [5263, 5264, 5266, 5268, 5269, 5267, 5270]

// Module 5262 (Patterns)
import _modDef5263 from "module_5263" /* 5263 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5264 */;
import _mod5266 from "module_5266" /* 5266 */;
import playHaptic from "playHaptic" /* 5267 */;
import _mod5268 from "module_5268" /* 5268 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5269 */;
import TouchableHaptic from "TouchableHaptic" /* 5270 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5263;
export const useHaptics = _mod5266.useHaptics;
export const Patterns = _mod5268.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5263.trigger;
export const stop = _modDef5263.stop;
export const isSupported = _modDef5263.isSupported;
export const triggerPattern = _modDef5263.triggerPattern;
export const getSystemHapticStatus = _modDef5263.getSystemHapticStatus;
export const setEnabled = _modDef5263.setEnabled;
export const isEnabled = _modDef5263.isEnabled;
export const impact = _modDef5263.impact;
export const playAHAP = _modDef5263.playAHAP;
