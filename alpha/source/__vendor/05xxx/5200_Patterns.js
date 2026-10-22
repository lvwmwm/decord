// Module ID: 5200
// Function ID: 5201
// Name: Patterns
// Dependencies: [5201, 5202, 5204, 5206, 5207, 5205, 5208]

// Module 5200 (Patterns)
import _modDef5201 from "module_5201" /* 5201 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5202 */;
import _mod5204 from "module_5204" /* 5204 */;
import playHaptic from "playHaptic" /* 5205 */;
import _mod5206 from "module_5206" /* 5206 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5207 */;
import TouchableHaptic from "TouchableHaptic" /* 5208 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5201;
export const useHaptics = _mod5204.useHaptics;
export const Patterns = _mod5206.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5201.trigger;
export const stop = _modDef5201.stop;
export const isSupported = _modDef5201.isSupported;
export const triggerPattern = _modDef5201.triggerPattern;
export const getSystemHapticStatus = _modDef5201.getSystemHapticStatus;
export const setEnabled = _modDef5201.setEnabled;
export const isEnabled = _modDef5201.isEnabled;
export const impact = _modDef5201.impact;
export const playAHAP = _modDef5201.playAHAP;
