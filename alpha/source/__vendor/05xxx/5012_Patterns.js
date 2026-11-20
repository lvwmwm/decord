// Module ID: 5012
// Function ID: 5013
// Name: Patterns
// Dependencies: [5013, 5014, 5016, 5018, 5019, 5017, 5020]

// Module 5012 (Patterns)
import _modDef5013 from "module_5013" /* 5013 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5014 */;
import _mod5016 from "module_5016" /* 5016 */;
import playHaptic from "playHaptic" /* 5017 */;
import _mod5018 from "module_5018" /* 5018 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5019 */;
import TouchableHaptic from "TouchableHaptic" /* 5020 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5013;
export const useHaptics = _mod5016.useHaptics;
export const Patterns = _mod5018.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5013.trigger;
export const stop = _modDef5013.stop;
export const isSupported = _modDef5013.isSupported;
export const triggerPattern = _modDef5013.triggerPattern;
export const getSystemHapticStatus = _modDef5013.getSystemHapticStatus;
export const setEnabled = _modDef5013.setEnabled;
export const isEnabled = _modDef5013.isEnabled;
export const impact = _modDef5013.impact;
export const playAHAP = _modDef5013.playAHAP;
