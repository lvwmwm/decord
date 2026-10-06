// Module ID: 4804
// Function ID: 4805
// Name: Patterns
// Dependencies: [4805, 4806, 4808, 4810, 4811, 4809, 4812]

// Module 4804 (Patterns)
import _modDef4805 from "module_4805" /* 4805 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4806 */;
import _mod4808 from "module_4808" /* 4808 */;
import playHaptic from "playHaptic" /* 4809 */;
import _mod4810 from "module_4810" /* 4810 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 4811 */;
import TouchableHaptic from "TouchableHaptic" /* 4812 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef4805;
export const useHaptics = _mod4808.useHaptics;
export const Patterns = _mod4810.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef4805.trigger;
export const stop = _modDef4805.stop;
export const isSupported = _modDef4805.isSupported;
export const triggerPattern = _modDef4805.triggerPattern;
export const getSystemHapticStatus = _modDef4805.getSystemHapticStatus;
export const setEnabled = _modDef4805.setEnabled;
export const isEnabled = _modDef4805.isEnabled;
export const impact = _modDef4805.impact;
export const playAHAP = _modDef4805.playAHAP;
