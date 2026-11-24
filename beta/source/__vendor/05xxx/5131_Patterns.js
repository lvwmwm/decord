// Module ID: 5131
// Function ID: 5132
// Name: Patterns
// Dependencies: [5132, 5133, 5135, 5137, 5138, 5136, 5139]

// Module 5131 (Patterns)
import _modDef5132 from "module_5132" /* 5132 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5133 */;
import _mod5135 from "module_5135" /* 5135 */;
import playHaptic from "playHaptic" /* 5136 */;
import _mod5137 from "module_5137" /* 5137 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5138 */;
import TouchableHaptic from "TouchableHaptic" /* 5139 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5132;
export const useHaptics = _mod5135.useHaptics;
export const Patterns = _mod5137.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5132.trigger;
export const stop = _modDef5132.stop;
export const isSupported = _modDef5132.isSupported;
export const triggerPattern = _modDef5132.triggerPattern;
export const getSystemHapticStatus = _modDef5132.getSystemHapticStatus;
export const setEnabled = _modDef5132.setEnabled;
export const isEnabled = _modDef5132.isEnabled;
export const impact = _modDef5132.impact;
export const playAHAP = _modDef5132.playAHAP;
