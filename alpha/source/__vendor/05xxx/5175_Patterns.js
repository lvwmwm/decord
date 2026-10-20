// Module ID: 5175
// Function ID: 5176
// Name: Patterns
// Dependencies: [5176, 5177, 5179, 5181, 5182, 5180, 5183]

// Module 5175 (Patterns)
import _modDef5176 from "module_5176" /* 5176 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5177 */;
import _mod5179 from "module_5179" /* 5179 */;
import playHaptic from "playHaptic" /* 5180 */;
import _mod5181 from "module_5181" /* 5181 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5182 */;
import TouchableHaptic from "TouchableHaptic" /* 5183 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5176;
export const useHaptics = _mod5179.useHaptics;
export const Patterns = _mod5181.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5176.trigger;
export const stop = _modDef5176.stop;
export const isSupported = _modDef5176.isSupported;
export const triggerPattern = _modDef5176.triggerPattern;
export const getSystemHapticStatus = _modDef5176.getSystemHapticStatus;
export const setEnabled = _modDef5176.setEnabled;
export const isEnabled = _modDef5176.isEnabled;
export const impact = _modDef5176.impact;
export const playAHAP = _modDef5176.playAHAP;
