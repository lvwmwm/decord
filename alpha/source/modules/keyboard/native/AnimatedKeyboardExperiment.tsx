// Module ID: 10334
// Function ID: 10335
// Name: AnimatedKeyboardExperiment
// Dependencies: [1453, 1382, 2]
// Exports: isAnimatedAndroidKeyboard

// Module 10334 (AnimatedKeyboardExperiment)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-08-animated-keyboard-android", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const obj = PlatformUtils;
  const tmp = obj.isAndroid() && enabled;
  return tmp;
};
