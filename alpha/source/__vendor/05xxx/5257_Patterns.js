// Module ID: 5257
// Function ID: 5258
// Name: Patterns
// Dependencies: [5258, 5259, 5261, 5263, 5264, 5262, 5265]

// Module 5257 (Patterns)
import _modDef5258 from "module_5258" /* 5258 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5259 */;
import _mod5261 from "module_5261" /* 5261 */;
import playHaptic from "playHaptic" /* 5262 */;
import _mod5263 from "module_5263" /* 5263 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5264 */;
import TouchableHaptic from "TouchableHaptic" /* 5265 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5258;
export const useHaptics = _mod5261.useHaptics;
export const Patterns = _mod5263.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5258.trigger;
export const stop = _modDef5258.stop;
export const isSupported = _modDef5258.isSupported;
export const triggerPattern = _modDef5258.triggerPattern;
export const getSystemHapticStatus = _modDef5258.getSystemHapticStatus;
export const setEnabled = _modDef5258.setEnabled;
export const isEnabled = _modDef5258.isEnabled;
export const impact = _modDef5258.impact;
export const playAHAP = _modDef5258.playAHAP;
