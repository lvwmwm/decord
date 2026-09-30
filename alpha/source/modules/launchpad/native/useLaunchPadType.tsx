// Module ID: 11208
// Function ID: 11209
// Name: useLaunchPadType
// Dependencies: [11207, 2021, 1186, 2]
// Exports: default

// Module 11208 (useLaunchPadType)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2021 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11207 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadType.tsx");

export default function useLaunchPadType() {
  const LaunchPadModeSetting = UserSettings.LaunchPadModeSetting;
  const setting = LaunchPadModeSetting.useSetting();
  if (preloaded_user_settings.LaunchPadMode.LAUNCH_PAD_DISABLED === setting) {
    return LaunchPadTypes.DISABLED;
  } else if (tmp(1186).LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN === setting) {
    return LaunchPadTypes.GESTURE_FULL;
  } else if (tmp(1186).LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE === setting) {
    return LaunchPadTypes.GESTURE_EDGE;
  } else if (tmp(1186).LaunchPadMode.LAUNCH_PAD_PULL_TAB === setting) {
    return LaunchPadTypes.PULL_TAB;
  }
};
