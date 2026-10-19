// Module ID: 5158
// Function ID: 5159
// Name: Patterns
// Dependencies: [5159, 5160, 5162, 5164, 5165, 5163, 5166]

// Module 5158 (Patterns)
import _modDef5159 from "module_5159" /* 5159 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5160 */;
import _mod5162 from "module_5162" /* 5162 */;
import playHaptic from "playHaptic" /* 5163 */;
import _mod5164 from "module_5164" /* 5164 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5165 */;
import TouchableHaptic from "TouchableHaptic" /* 5166 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5159;
export const useHaptics = _mod5162.useHaptics;
export const Patterns = _mod5164.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5159.trigger;
export const stop = _modDef5159.stop;
export const isSupported = _modDef5159.isSupported;
export const triggerPattern = _modDef5159.triggerPattern;
export const getSystemHapticStatus = _modDef5159.getSystemHapticStatus;
export const setEnabled = _modDef5159.setEnabled;
export const isEnabled = _modDef5159.isEnabled;
export const impact = _modDef5159.impact;
export const playAHAP = _modDef5159.playAHAP;
