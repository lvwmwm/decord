// Module ID: 5261
// Function ID: 5262
// Name: Patterns
// Dependencies: [5262, 5263, 5265, 5267, 5268, 5266, 5269]

// Module 5261 (Patterns)
import _modDef5262 from "module_5262" /* 5262 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5263 */;
import _mod5265 from "module_5265" /* 5265 */;
import playHaptic from "playHaptic" /* 5266 */;
import _mod5267 from "module_5267" /* 5267 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5268 */;
import TouchableHaptic from "TouchableHaptic" /* 5269 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5262;
export const useHaptics = _mod5265.useHaptics;
export const Patterns = _mod5267.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5262.trigger;
export const stop = _modDef5262.stop;
export const isSupported = _modDef5262.isSupported;
export const triggerPattern = _modDef5262.triggerPattern;
export const getSystemHapticStatus = _modDef5262.getSystemHapticStatus;
export const setEnabled = _modDef5262.setEnabled;
export const isEnabled = _modDef5262.isEnabled;
export const impact = _modDef5262.impact;
export const playAHAP = _modDef5262.playAHAP;
