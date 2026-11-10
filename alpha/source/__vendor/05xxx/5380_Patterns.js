// Module ID: 5380
// Function ID: 5381
// Name: Patterns
// Dependencies: [5381, 5382, 5384, 5386, 5387, 5385, 5388]

// Module 5380 (Patterns)
import _modDef5381 from "module_5381" /* 5381 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5382 */;
import _mod5384 from "module_5384" /* 5384 */;
import playHaptic from "playHaptic" /* 5385 */;
import _mod5386 from "module_5386" /* 5386 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5387 */;
import TouchableHaptic from "TouchableHaptic" /* 5388 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5381;
export const useHaptics = _mod5384.useHaptics;
export const Patterns = _mod5386.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5381.trigger;
export const stop = _modDef5381.stop;
export const isSupported = _modDef5381.isSupported;
export const triggerPattern = _modDef5381.triggerPattern;
export const getSystemHapticStatus = _modDef5381.getSystemHapticStatus;
export const setEnabled = _modDef5381.setEnabled;
export const isEnabled = _modDef5381.isEnabled;
export const impact = _modDef5381.impact;
export const playAHAP = _modDef5381.playAHAP;
