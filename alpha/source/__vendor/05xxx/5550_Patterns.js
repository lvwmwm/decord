// Module ID: 5550
// Function ID: 5551
// Name: Patterns
// Dependencies: [5551, 5552, 5554, 5556, 5557, 5555, 5558]

// Module 5550 (Patterns)
import _modDef5551 from "module_5551" /* 5551 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 5552 */;
import _mod5554 from "module_5554" /* 5554 */;
import playHaptic from "playHaptic" /* 5555 */;
import _mod5556 from "module_5556" /* 5556 */;
import PATTERN_CHARS from "PATTERN_CHARS" /* 5557 */;
import TouchableHaptic from "TouchableHaptic" /* 5558 */;

for (const key10016 in HapticFeedbackTypes) {
  exports[key10016] = HapticFeedbackTypes[key10016];
  continue;
}
const PATTERN_CHARS_export = PATTERN_CHARS.PATTERN_CHARS;
const playHaptic_export = playHaptic.playHaptic;
const TouchableHaptic_export = TouchableHaptic.TouchableHaptic;

export default _modDef5551;
export const useHaptics = _mod5554.useHaptics;
export const Patterns = _mod5556.Patterns;
export const pattern = PATTERN_CHARS.pattern;
export { PATTERN_CHARS_export as PATTERN_CHARS };
export { playHaptic_export as playHaptic };
export { TouchableHaptic_export as TouchableHaptic };
export const trigger = _modDef5551.trigger;
export const stop = _modDef5551.stop;
export const isSupported = _modDef5551.isSupported;
export const triggerPattern = _modDef5551.triggerPattern;
export const getSystemHapticStatus = _modDef5551.getSystemHapticStatus;
export const setEnabled = _modDef5551.setEnabled;
export const isEnabled = _modDef5551.isEnabled;
export const impact = _modDef5551.impact;
export const playAHAP = _modDef5551.playAHAP;
