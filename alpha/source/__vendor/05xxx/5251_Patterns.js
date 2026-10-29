// Module ID: 5251
// Function ID: 5252
// Name: Patterns
// Dependencies: [5252, 5253, 5255, 5257, 5258, 5256, 5259]

// Module 5251 (Patterns)
import _modDef5252 from "module_5252" /* 5252 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5253 */;
import _mod5255 from "module_5255" /* 5255 */;
import playHaptic from "playHaptic" /* 5256 */;
import _mod5257 from "module_5257" /* 5257 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5258 */;
import TouchableHaptic from "TouchableHaptic" /* 5259 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5252;
export const useHaptics = _mod5255.useHaptics;
export const Patterns = _mod5257.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5252.trigger;
export const stop = _modDef5252.stop;
export const isSupported = _modDef5252.isSupported;
export const triggerPattern = _modDef5252.triggerPattern;
export const getSystemHapticStatus = _modDef5252.getSystemHapticStatus;
export const setEnabled = _modDef5252.setEnabled;
export const isEnabled = _modDef5252.isEnabled;
export const impact = _modDef5252.impact;
export const playAHAP = _modDef5252.playAHAP;
