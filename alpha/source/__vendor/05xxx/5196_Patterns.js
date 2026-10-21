// Module ID: 5196
// Function ID: 5197
// Name: Patterns
// Dependencies: [5197, 5198, 5200, 5202, 5203, 5201, 5204]

// Module 5196 (Patterns)
import _modDef5197 from "module_5197" /* 5197 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5198 */;
import _mod5200 from "module_5200" /* 5200 */;
import playHaptic from "playHaptic" /* 5201 */;
import _mod5202 from "module_5202" /* 5202 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5203 */;
import TouchableHaptic from "TouchableHaptic" /* 5204 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5197;
export const useHaptics = _mod5200.useHaptics;
export const Patterns = _mod5202.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5197.trigger;
export const stop = _modDef5197.stop;
export const isSupported = _modDef5197.isSupported;
export const triggerPattern = _modDef5197.triggerPattern;
export const getSystemHapticStatus = _modDef5197.getSystemHapticStatus;
export const setEnabled = _modDef5197.setEnabled;
export const isEnabled = _modDef5197.isEnabled;
export const impact = _modDef5197.impact;
export const playAHAP = _modDef5197.playAHAP;
