// Module ID: 10381
// Function ID: 80057
// Name: apexExperiment
// Dependencies: []
// Exports: isAnimatedAndroidKeyboard

// Module 10381 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const tmp = !require(dependencyMap[1]).isAndroid();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = enabled;
  }
  return tmp2;
};
