// Module ID: 5556
// Function ID: 5557
// Name: Patterns
// Dependencies: [5557, 5558, 5560, 5562, 5563, 5561, 5564]

// Module 5556 (Patterns)
import _modDef5557 from "module_5557" /* 5557 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5558 */;
import _mod5560 from "module_5560" /* 5560 */;
import playHaptic from "playHaptic" /* 5561 */;
import _mod5562 from "module_5562" /* 5562 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5563 */;
import TouchableHaptic from "TouchableHaptic" /* 5564 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5557;
export const useHaptics = _mod5560.useHaptics;
export const Patterns = _mod5562.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5557.trigger;
export const stop = _modDef5557.stop;
export const isSupported = _modDef5557.isSupported;
export const triggerPattern = _modDef5557.triggerPattern;
export const getSystemHapticStatus = _modDef5557.getSystemHapticStatus;
export const setEnabled = _modDef5557.setEnabled;
export const isEnabled = _modDef5557.isEnabled;
export const impact = _modDef5557.impact;
export const playAHAP = _modDef5557.playAHAP;
