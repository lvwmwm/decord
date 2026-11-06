// Module ID: 5408
// Function ID: 5409
// Name: Patterns
// Dependencies: [5409, 5410, 5412, 5414, 5415, 5413, 5416]

// Module 5408 (Patterns)
import _modDef5409 from "module_5409" /* 5409 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5410 */;
import _mod5412 from "module_5412" /* 5412 */;
import playHaptic from "playHaptic" /* 5413 */;
import _mod5414 from "module_5414" /* 5414 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5415 */;
import TouchableHaptic from "TouchableHaptic" /* 5416 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5409;
export const useHaptics = _mod5412.useHaptics;
export const Patterns = _mod5414.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5409.trigger;
export const stop = _modDef5409.stop;
export const isSupported = _modDef5409.isSupported;
export const triggerPattern = _modDef5409.triggerPattern;
export const getSystemHapticStatus = _modDef5409.getSystemHapticStatus;
export const setEnabled = _modDef5409.setEnabled;
export const isEnabled = _modDef5409.isEnabled;
export const impact = _modDef5409.impact;
export const playAHAP = _modDef5409.playAHAP;
