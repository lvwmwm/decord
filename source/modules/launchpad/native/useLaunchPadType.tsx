// Module ID: 10441
// Function ID: 80565
// Name: useLaunchPadType
// Dependencies: []
// Exports: default

// Module 10441 (useLaunchPadType)
const LaunchPadTypes = require(dependencyMap[0]).LaunchPadTypes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = require(dependencyMap[1]).LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (require(dependencyMap[2]).LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (require(dependencyMap[2]).LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (require(dependencyMap[2]).LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (require(dependencyMap[2]).LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};
