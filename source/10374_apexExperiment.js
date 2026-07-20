// Module ID: 10374
// Function ID: 80010
// Name: apexExperiment
// Dependencies: [0, 0, 0]
// Exports: isAnimatedAndroidKeyboard

// Module 10374 (apexExperiment)
import result from "result";
import result from "result";

const apexExperiment = result.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
result = result.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const tmp = !require(dependencyMap[1]).isAndroid();
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = enabled;
  }
  return tmp2;
};
