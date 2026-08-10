// Module ID: 10326
// Function ID: 10327
// Name: apexExperiment
// Dependencies: [1452, 500, 2]
// Exports: isAnimatedAndroidKeyboard

// Module 10326 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-animated-keyboard-android", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = require("set").fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const obj = require(500) /* set */;
  return require(500) /* set */.isAndroid() && enabled;
};
