// Module ID: 11236
// Function ID: 11237
// Name: AnimatedKeyboardExperiment
// Dependencies: [1447, 1375, 2]
// Exports: isAnimatedAndroidKeyboard

// Module 11236 (AnimatedKeyboardExperiment)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-08-animated-keyboard-android", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export function isAnimatedAndroidKeyboard() {
  const obj = PlatformUtils;
  const tmp = obj.isAndroid() && enabled;
  return tmp;
}
