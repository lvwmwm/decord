// Module ID: 10420
// Function ID: 80299
// Name: apexExperiment
// Dependencies: [1428, 477, 2]
// Exports: isAnimatedAndroidKeyboard

// Module 10420 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-08-animated-keyboard-android", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = require("set").fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const tmp = !require(477) /* set */.isAndroid();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = enabled;
  }
  return tmp2;
};
