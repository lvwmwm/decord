// Module ID: 4350
// Function ID: 4351
// Name: useHaptics
// Dependencies: [4351, 4352, 4354, 4356, 4357, 4355, 4358]

// Module 4350 (useHaptics)
import setEnabledDefault from "setEnabled" /* 4351 */;

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
