// Module ID: 5546
// Function ID: 5547
// Name: Patterns
// Dependencies: [5547, 5548, 5550, 5552, 5553, 5551, 5554]

// Module 5546 (Patterns)
import _modDef5547 from "module_5547" /* 5547 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5548 */;
import _mod5550 from "module_5550" /* 5550 */;
import playHaptic from "playHaptic" /* 5551 */;
import _mod5552 from "module_5552" /* 5552 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5553 */;
import TouchableHaptic from "TouchableHaptic" /* 5554 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5547;
export const useHaptics = _mod5550.useHaptics;
export const Patterns = _mod5552.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5547.trigger;
export const stop = _modDef5547.stop;
export const isSupported = _modDef5547.isSupported;
export const triggerPattern = _modDef5547.triggerPattern;
export const getSystemHapticStatus = _modDef5547.getSystemHapticStatus;
export const setEnabled = _modDef5547.setEnabled;
export const isEnabled = _modDef5547.isEnabled;
export const impact = _modDef5547.impact;
export const playAHAP = _modDef5547.playAHAP;
