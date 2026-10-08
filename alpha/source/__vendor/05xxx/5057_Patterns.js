// Module ID: 5057
// Function ID: 5058
// Name: Patterns
// Dependencies: [5058, 5059, 5061, 5063, 5064, 5062, 5065]

// Module 5057 (Patterns)
import _modDef5058 from "module_5058" /* 5058 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5059 */;
import _mod5061 from "module_5061" /* 5061 */;
import playHaptic from "playHaptic" /* 5062 */;
import _mod5063 from "module_5063" /* 5063 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5064 */;
import TouchableHaptic from "TouchableHaptic" /* 5065 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5058;
export const useHaptics = _mod5061.useHaptics;
export const Patterns = _mod5063.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5058.trigger;
export const stop = _modDef5058.stop;
export const isSupported = _modDef5058.isSupported;
export const triggerPattern = _modDef5058.triggerPattern;
export const getSystemHapticStatus = _modDef5058.getSystemHapticStatus;
export const setEnabled = _modDef5058.setEnabled;
export const isEnabled = _modDef5058.isEnabled;
export const impact = _modDef5058.impact;
export const playAHAP = _modDef5058.playAHAP;
