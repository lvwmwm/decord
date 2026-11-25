// Module ID: 5230
// Function ID: 5231
// Name: Patterns
// Dependencies: [5231, 5232, 5234, 5236, 5237, 5235, 5238]

// Module 5230 (Patterns)
import _modDef5231 from "module_5231" /* 5231 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5232 */;
import _mod5234 from "module_5234" /* 5234 */;
import playHaptic from "playHaptic" /* 5235 */;
import _mod5236 from "module_5236" /* 5236 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5237 */;
import TouchableHaptic from "TouchableHaptic" /* 5238 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5231;
export const useHaptics = _mod5234.useHaptics;
export const Patterns = _mod5236.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5231.trigger;
export const stop = _modDef5231.stop;
export const isSupported = _modDef5231.isSupported;
export const triggerPattern = _modDef5231.triggerPattern;
export const getSystemHapticStatus = _modDef5231.getSystemHapticStatus;
export const setEnabled = _modDef5231.setEnabled;
export const isEnabled = _modDef5231.isEnabled;
export const impact = _modDef5231.impact;
export const playAHAP = _modDef5231.playAHAP;
