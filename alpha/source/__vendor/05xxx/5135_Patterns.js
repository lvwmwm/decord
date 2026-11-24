// Module ID: 5135
// Function ID: 5136
// Name: Patterns
// Dependencies: [5136, 5137, 5139, 5141, 5142, 5140, 5143]

// Module 5135 (Patterns)
import _modDef5136 from "module_5136" /* 5136 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5137 */;
import _mod5139 from "module_5139" /* 5139 */;
import playHaptic from "playHaptic" /* 5140 */;
import _mod5141 from "module_5141" /* 5141 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5142 */;
import TouchableHaptic from "TouchableHaptic" /* 5143 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5136;
export const useHaptics = _mod5139.useHaptics;
export const Patterns = _mod5141.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5136.trigger;
export const stop = _modDef5136.stop;
export const isSupported = _modDef5136.isSupported;
export const triggerPattern = _modDef5136.triggerPattern;
export const getSystemHapticStatus = _modDef5136.getSystemHapticStatus;
export const setEnabled = _modDef5136.setEnabled;
export const isEnabled = _modDef5136.isEnabled;
export const impact = _modDef5136.impact;
export const playAHAP = _modDef5136.playAHAP;
