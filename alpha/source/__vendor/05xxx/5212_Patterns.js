// Module ID: 5212
// Function ID: 5213
// Name: Patterns
// Dependencies: [5213, 5214, 5216, 5218, 5219, 5217, 5220]

// Module 5212 (Patterns)
import _modDef5213 from "module_5213" /* 5213 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5214 */;
import _mod5216 from "module_5216" /* 5216 */;
import playHaptic from "playHaptic" /* 5217 */;
import _mod5218 from "module_5218" /* 5218 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5219 */;
import TouchableHaptic from "TouchableHaptic" /* 5220 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5213;
export const useHaptics = _mod5216.useHaptics;
export const Patterns = _mod5218.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5213.trigger;
export const stop = _modDef5213.stop;
export const isSupported = _modDef5213.isSupported;
export const triggerPattern = _modDef5213.triggerPattern;
export const getSystemHapticStatus = _modDef5213.getSystemHapticStatus;
export const setEnabled = _modDef5213.setEnabled;
export const isEnabled = _modDef5213.isEnabled;
export const impact = _modDef5213.impact;
export const playAHAP = _modDef5213.playAHAP;
