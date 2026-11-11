// Module ID: 5493
// Function ID: 5494
// Name: Patterns
// Dependencies: [5494, 5495, 5497, 5499, 5500, 5498, 5501]

// Module 5493 (Patterns)
import _modDef5494 from "module_5494" /* 5494 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5495 */;
import _mod5497 from "module_5497" /* 5497 */;
import playHaptic from "playHaptic" /* 5498 */;
import _mod5499 from "module_5499" /* 5499 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5500 */;
import TouchableHaptic from "TouchableHaptic" /* 5501 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5494;
export const useHaptics = _mod5497.useHaptics;
export const Patterns = _mod5499.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5494.trigger;
export const stop = _modDef5494.stop;
export const isSupported = _modDef5494.isSupported;
export const triggerPattern = _modDef5494.triggerPattern;
export const getSystemHapticStatus = _modDef5494.getSystemHapticStatus;
export const setEnabled = _modDef5494.setEnabled;
export const isEnabled = _modDef5494.isEnabled;
export const impact = _modDef5494.impact;
export const playAHAP = _modDef5494.playAHAP;
