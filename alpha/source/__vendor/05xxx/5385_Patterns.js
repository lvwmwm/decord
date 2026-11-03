// Module ID: 5385
// Function ID: 5386
// Name: Patterns
// Dependencies: [5386, 5387, 5389, 5391, 5392, 5390, 5393]

// Module 5385 (Patterns)
import _modDef5386 from "module_5386" /* 5386 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5387 */;
import _mod5389 from "module_5389" /* 5389 */;
import playHaptic from "playHaptic" /* 5390 */;
import _mod5391 from "module_5391" /* 5391 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5392 */;
import TouchableHaptic from "TouchableHaptic" /* 5393 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5386;
export const useHaptics = _mod5389.useHaptics;
export const Patterns = _mod5391.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5386.trigger;
export const stop = _modDef5386.stop;
export const isSupported = _modDef5386.isSupported;
export const triggerPattern = _modDef5386.triggerPattern;
export const getSystemHapticStatus = _modDef5386.getSystemHapticStatus;
export const setEnabled = _modDef5386.setEnabled;
export const isEnabled = _modDef5386.isEnabled;
export const impact = _modDef5386.impact;
export const playAHAP = _modDef5386.playAHAP;
