// Module ID: 5410
// Function ID: 5411
// Name: Patterns
// Dependencies: [5411, 5412, 5414, 5416, 5417, 5415, 5418]

// Module 5410 (Patterns)
import _modDef5411 from "module_5411" /* 5411 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5412 */;
import _mod5414 from "module_5414" /* 5414 */;
import playHaptic from "playHaptic" /* 5415 */;
import _mod5416 from "module_5416" /* 5416 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5417 */;
import TouchableHaptic from "TouchableHaptic" /* 5418 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5411;
export const useHaptics = _mod5414.useHaptics;
export const Patterns = _mod5416.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5411.trigger;
export const stop = _modDef5411.stop;
export const isSupported = _modDef5411.isSupported;
export const triggerPattern = _modDef5411.triggerPattern;
export const getSystemHapticStatus = _modDef5411.getSystemHapticStatus;
export const setEnabled = _modDef5411.setEnabled;
export const isEnabled = _modDef5411.isEnabled;
export const impact = _modDef5411.impact;
export const playAHAP = _modDef5411.playAHAP;
