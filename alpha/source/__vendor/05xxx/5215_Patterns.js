// Module ID: 5215
// Function ID: 5216
// Name: Patterns
// Dependencies: [5216, 5217, 5219, 5221, 5222, 5220, 5223]

// Module 5215 (Patterns)
import _modDef5216 from "module_5216" /* 5216 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5217 */;
import _mod5219 from "module_5219" /* 5219 */;
import playHaptic from "playHaptic" /* 5220 */;
import _mod5221 from "module_5221" /* 5221 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5222 */;
import TouchableHaptic from "TouchableHaptic" /* 5223 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5216;
export const useHaptics = _mod5219.useHaptics;
export const Patterns = _mod5221.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5216.trigger;
export const stop = _modDef5216.stop;
export const isSupported = _modDef5216.isSupported;
export const triggerPattern = _modDef5216.triggerPattern;
export const getSystemHapticStatus = _modDef5216.getSystemHapticStatus;
export const setEnabled = _modDef5216.setEnabled;
export const isEnabled = _modDef5216.isEnabled;
export const impact = _modDef5216.impact;
export const playAHAP = _modDef5216.playAHAP;
