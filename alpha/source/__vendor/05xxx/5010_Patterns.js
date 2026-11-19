// Module ID: 5010
// Function ID: 5011
// Name: Patterns
// Dependencies: [5011, 5012, 5014, 5016, 5017, 5015, 5018]

// Module 5010 (Patterns)
import _modDef5011 from "module_5011" /* 5011 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5012 */;
import _mod5014 from "module_5014" /* 5014 */;
import playHaptic from "playHaptic" /* 5015 */;
import _mod5016 from "module_5016" /* 5016 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5017 */;
import TouchableHaptic from "TouchableHaptic" /* 5018 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5011;
export const useHaptics = _mod5014.useHaptics;
export const Patterns = _mod5016.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5011.trigger;
export const stop = _modDef5011.stop;
export const isSupported = _modDef5011.isSupported;
export const triggerPattern = _modDef5011.triggerPattern;
export const getSystemHapticStatus = _modDef5011.getSystemHapticStatus;
export const setEnabled = _modDef5011.setEnabled;
export const isEnabled = _modDef5011.isEnabled;
export const impact = _modDef5011.impact;
export const playAHAP = _modDef5011.playAHAP;
