// Module ID: 5250
// Function ID: 5251
// Name: Patterns
// Dependencies: [5251, 5252, 5254, 5256, 5257, 5255, 5258]

// Module 5250 (Patterns)
import _modDef5251 from "module_5251" /* 5251 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5252 */;
import _mod5254 from "module_5254" /* 5254 */;
import playHaptic from "playHaptic" /* 5255 */;
import _mod5256 from "module_5256" /* 5256 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5257 */;
import TouchableHaptic from "TouchableHaptic" /* 5258 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5251;
export const useHaptics = _mod5254.useHaptics;
export const Patterns = _mod5256.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5251.trigger;
export const stop = _modDef5251.stop;
export const isSupported = _modDef5251.isSupported;
export const triggerPattern = _modDef5251.triggerPattern;
export const getSystemHapticStatus = _modDef5251.getSystemHapticStatus;
export const setEnabled = _modDef5251.setEnabled;
export const isEnabled = _modDef5251.isEnabled;
export const impact = _modDef5251.impact;
export const playAHAP = _modDef5251.playAHAP;
