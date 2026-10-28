// Module ID: 5246
// Function ID: 5247
// Name: Patterns
// Dependencies: [5247, 5248, 5250, 5252, 5253, 5251, 5254]

// Module 5246 (Patterns)
import _modDef5247 from "module_5247" /* 5247 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5248 */;
import _mod5250 from "module_5250" /* 5250 */;
import playHaptic from "playHaptic" /* 5251 */;
import _mod5252 from "module_5252" /* 5252 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5253 */;
import TouchableHaptic from "TouchableHaptic" /* 5254 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5247;
export const useHaptics = _mod5250.useHaptics;
export const Patterns = _mod5252.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5247.trigger;
export const stop = _modDef5247.stop;
export const isSupported = _modDef5247.isSupported;
export const triggerPattern = _modDef5247.triggerPattern;
export const getSystemHapticStatus = _modDef5247.getSystemHapticStatus;
export const setEnabled = _modDef5247.setEnabled;
export const isEnabled = _modDef5247.isEnabled;
export const impact = _modDef5247.impact;
export const playAHAP = _modDef5247.playAHAP;
