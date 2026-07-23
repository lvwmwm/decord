// Module ID: 10452
// Function ID: 80639
// Name: useLaunchPadType
// Dependencies: [10451, 3803, 1282, 2]
// Exports: default

// Module 10452 (useLaunchPadType)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("_callSuper").fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};
