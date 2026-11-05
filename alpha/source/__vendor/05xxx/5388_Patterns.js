// Module ID: 5388
// Function ID: 5389
// Name: Patterns
// Dependencies: [5389, 5390, 5392, 5394, 5395, 5393, 5396]

// Module 5388 (Patterns)
import _modDef5389 from "module_5389" /* 5389 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5390 */;
import _mod5392 from "module_5392" /* 5392 */;
import playHaptic from "playHaptic" /* 5393 */;
import _mod5394 from "module_5394" /* 5394 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5395 */;
import TouchableHaptic from "TouchableHaptic" /* 5396 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5389;
export const useHaptics = _mod5392.useHaptics;
export const Patterns = _mod5394.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5389.trigger;
export const stop = _modDef5389.stop;
export const isSupported = _modDef5389.isSupported;
export const triggerPattern = _modDef5389.triggerPattern;
export const getSystemHapticStatus = _modDef5389.getSystemHapticStatus;
export const setEnabled = _modDef5389.setEnabled;
export const isEnabled = _modDef5389.isEnabled;
export const impact = _modDef5389.impact;
export const playAHAP = _modDef5389.playAHAP;
