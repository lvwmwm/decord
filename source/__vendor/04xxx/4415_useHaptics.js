// Module ID: 4415
// Function ID: 4416
// Name: useHaptics
// Dependencies: [4416, 4417, 4419, 4421, 4422, 4420, 4423]

// Module 4415 (useHaptics)
import setEnabledDefault from "setEnabled" /* 4416 */;

for (const key10016 in require("isRingerSilent")) {
  let tmp2 = key10016;
  arg5[key10016] = require("isRingerSilent")[key10016];
  continue;
}

export default setEnabledDefault;
export const useHaptics = require("useHaptics").useHaptics;
export const Patterns = require("Patterns").Patterns;
export const pattern = require("set").pattern;
export const PATTERN_CHARS = require("set").PATTERN_CHARS;
export const playHaptic = require("_playHaptic").playHaptic;
export const TouchableHaptic = require("TouchableHaptic").TouchableHaptic;
export const trigger = setEnabledDefault.trigger;
export const stop = setEnabledDefault.stop;
export const isSupported = setEnabledDefault.isSupported;
export const triggerPattern = setEnabledDefault.triggerPattern;
export const getSystemHapticStatus = setEnabledDefault.getSystemHapticStatus;
export const setEnabled = setEnabledDefault.setEnabled;
export const isEnabled = setEnabledDefault.isEnabled;
export const impact = setEnabledDefault.impact;
export const playAHAP = setEnabledDefault.playAHAP;
