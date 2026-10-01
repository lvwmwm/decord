// Module ID: 4803
// Function ID: 4804
// Name: Patterns
// Dependencies: [4804, 4805, 4807, 4809, 4810, 4808, 4811]

// Module 4803 (Patterns)
import _modDef4804 from "module_4804" /* 4804 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4805 */;
import _mod4807 from "module_4807" /* 4807 */;
import playHaptic from "playHaptic" /* 4808 */;
import _mod4809 from "module_4809" /* 4809 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 4810 */;
import TouchableHaptic from "TouchableHaptic" /* 4811 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef4804;
export const useHaptics = _mod4807.useHaptics;
export const Patterns = _mod4809.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef4804.trigger;
export const stop = _modDef4804.stop;
export const isSupported = _modDef4804.isSupported;
export const triggerPattern = _modDef4804.triggerPattern;
export const getSystemHapticStatus = _modDef4804.getSystemHapticStatus;
export const setEnabled = _modDef4804.setEnabled;
export const isEnabled = _modDef4804.isEnabled;
export const impact = _modDef4804.impact;
export const playAHAP = _modDef4804.playAHAP;
