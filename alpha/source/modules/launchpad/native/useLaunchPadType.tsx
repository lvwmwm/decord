// Module ID: 11734
// Function ID: 11735
// Name: useLaunchPadType
// Dependencies: [11733, 4968, 1196, 2]
// Exports: default

// Module 11734 (useLaunchPadType)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettings from "UserSettings" /* 4968 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11733 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = UserSettings.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};
