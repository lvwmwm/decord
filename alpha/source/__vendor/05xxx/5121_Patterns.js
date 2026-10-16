// Module ID: 5121
// Function ID: 5122
// Name: Patterns
// Dependencies: [5122, 5123, 5125, 5127, 5128, 5126, 5129]

// Module 5121 (Patterns)
import _modDef5122 from "module_5122" /* 5122 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5123 */;
import _mod5125 from "module_5125" /* 5125 */;
import playHaptic from "playHaptic" /* 5126 */;
import _mod5127 from "module_5127" /* 5127 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5128 */;
import TouchableHaptic from "TouchableHaptic" /* 5129 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5122;
export const useHaptics = _mod5125.useHaptics;
export const Patterns = _mod5127.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5122.trigger;
export const stop = _modDef5122.stop;
export const isSupported = _modDef5122.isSupported;
export const triggerPattern = _modDef5122.triggerPattern;
export const getSystemHapticStatus = _modDef5122.getSystemHapticStatus;
export const setEnabled = _modDef5122.setEnabled;
export const isEnabled = _modDef5122.isEnabled;
export const impact = _modDef5122.impact;
export const playAHAP = _modDef5122.playAHAP;
