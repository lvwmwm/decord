// Module ID: 5118
// Function ID: 5119
// Name: Patterns
// Dependencies: [5119, 5120, 5122, 5124, 5125, 5123, 5126]

// Module 5118 (Patterns)
import _modDef5119 from "module_5119" /* 5119 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5120 */;
import _mod5122 from "module_5122" /* 5122 */;
import playHaptic from "playHaptic" /* 5123 */;
import _mod5124 from "module_5124" /* 5124 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5125 */;
import TouchableHaptic from "TouchableHaptic" /* 5126 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5119;
export const useHaptics = _mod5122.useHaptics;
export const Patterns = _mod5124.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5119.trigger;
export const stop = _modDef5119.stop;
export const isSupported = _modDef5119.isSupported;
export const triggerPattern = _modDef5119.triggerPattern;
export const getSystemHapticStatus = _modDef5119.getSystemHapticStatus;
export const setEnabled = _modDef5119.setEnabled;
export const isEnabled = _modDef5119.isEnabled;
export const impact = _modDef5119.impact;
export const playAHAP = _modDef5119.playAHAP;
