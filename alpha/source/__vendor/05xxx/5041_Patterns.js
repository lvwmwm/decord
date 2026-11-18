// Module ID: 5041
// Function ID: 5042
// Name: Patterns
// Dependencies: [5042, 5043, 5045, 5047, 5048, 5046, 5049]

// Module 5041 (Patterns)
import _modDef5042 from "module_5042" /* 5042 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5043 */;
import _mod5045 from "module_5045" /* 5045 */;
import playHaptic from "playHaptic" /* 5046 */;
import _mod5047 from "module_5047" /* 5047 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5048 */;
import TouchableHaptic from "TouchableHaptic" /* 5049 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5042;
export const useHaptics = _mod5045.useHaptics;
export const Patterns = _mod5047.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5042.trigger;
export const stop = _modDef5042.stop;
export const isSupported = _modDef5042.isSupported;
export const triggerPattern = _modDef5042.triggerPattern;
export const getSystemHapticStatus = _modDef5042.getSystemHapticStatus;
export const setEnabled = _modDef5042.setEnabled;
export const isEnabled = _modDef5042.isEnabled;
export const impact = _modDef5042.impact;
export const playAHAP = _modDef5042.playAHAP;
