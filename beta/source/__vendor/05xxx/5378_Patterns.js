// Module ID: 5378
// Function ID: 5379
// Name: Patterns
// Dependencies: [5379, 5380, 5382, 5384, 5385, 5383, 5386]

// Module 5378 (Patterns)
import _modDef5379 from "module_5379" /* 5379 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5380 */;
import _mod5382 from "module_5382" /* 5382 */;
import playHaptic from "playHaptic" /* 5383 */;
import _mod5384 from "module_5384" /* 5384 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5385 */;
import TouchableHaptic from "TouchableHaptic" /* 5386 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5379;
export const useHaptics = _mod5382.useHaptics;
export const Patterns = _mod5384.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5379.trigger;
export const stop = _modDef5379.stop;
export const isSupported = _modDef5379.isSupported;
export const triggerPattern = _modDef5379.triggerPattern;
export const getSystemHapticStatus = _modDef5379.getSystemHapticStatus;
export const setEnabled = _modDef5379.setEnabled;
export const isEnabled = _modDef5379.isEnabled;
export const impact = _modDef5379.impact;
export const playAHAP = _modDef5379.playAHAP;
