// Module ID: 5386
// Function ID: 5387
// Name: Patterns
// Dependencies: [5387, 5388, 5390, 5392, 5393, 5391, 5394]

// Module 5386 (Patterns)
import _modDef5387 from "module_5387" /* 5387 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5388 */;
import _mod5390 from "module_5390" /* 5390 */;
import playHaptic from "playHaptic" /* 5391 */;
import _mod5392 from "module_5392" /* 5392 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5393 */;
import TouchableHaptic from "TouchableHaptic" /* 5394 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5387;
export const useHaptics = _mod5390.useHaptics;
export const Patterns = _mod5392.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5387.trigger;
export const stop = _modDef5387.stop;
export const isSupported = _modDef5387.isSupported;
export const triggerPattern = _modDef5387.triggerPattern;
export const getSystemHapticStatus = _modDef5387.getSystemHapticStatus;
export const setEnabled = _modDef5387.setEnabled;
export const isEnabled = _modDef5387.isEnabled;
export const impact = _modDef5387.impact;
export const playAHAP = _modDef5387.playAHAP;
