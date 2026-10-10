// Module ID: 5059
// Function ID: 5060
// Name: Patterns
// Dependencies: [5060, 5061, 5063, 5065, 5066, 5064, 5067]

// Module 5059 (Patterns)
import _modDef5060 from "module_5060" /* 5060 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5061 */;
import _mod5063 from "module_5063" /* 5063 */;
import playHaptic from "playHaptic" /* 5064 */;
import _mod5065 from "module_5065" /* 5065 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5066 */;
import TouchableHaptic from "TouchableHaptic" /* 5067 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5060;
export const useHaptics = _mod5063.useHaptics;
export const Patterns = _mod5065.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5060.trigger;
export const stop = _modDef5060.stop;
export const isSupported = _modDef5060.isSupported;
export const triggerPattern = _modDef5060.triggerPattern;
export const getSystemHapticStatus = _modDef5060.getSystemHapticStatus;
export const setEnabled = _modDef5060.setEnabled;
export const isEnabled = _modDef5060.isEnabled;
export const impact = _modDef5060.impact;
export const playAHAP = _modDef5060.playAHAP;
