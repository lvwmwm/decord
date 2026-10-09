// Module ID: 5058
// Function ID: 5059
// Name: Patterns
// Dependencies: [5059, 5060, 5062, 5064, 5065, 5063, 5066]

// Module 5058 (Patterns)
import _modDef5059 from "module_5059" /* 5059 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5060 */;
import _mod5062 from "module_5062" /* 5062 */;
import playHaptic from "playHaptic" /* 5063 */;
import _mod5064 from "module_5064" /* 5064 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5065 */;
import TouchableHaptic from "TouchableHaptic" /* 5066 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5059;
export const useHaptics = _mod5062.useHaptics;
export const Patterns = _mod5064.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5059.trigger;
export const stop = _modDef5059.stop;
export const isSupported = _modDef5059.isSupported;
export const triggerPattern = _modDef5059.triggerPattern;
export const getSystemHapticStatus = _modDef5059.getSystemHapticStatus;
export const setEnabled = _modDef5059.setEnabled;
export const isEnabled = _modDef5059.isEnabled;
export const impact = _modDef5059.impact;
export const playAHAP = _modDef5059.playAHAP;
