// Module ID: 14337
// Function ID: 14338
// Name: isOnPlayStation
// Dependencies: [6954, 2]
// Exports: default

// Module 14337 (isOnPlayStation)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 6954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

export default function isOnPlayStation(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  let tmp4 = platform === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4;
  if (!tmp4) {
    let platform1;
    if (platform != null) {
      platform1 = platform.platform;
    }
    tmp4 = platform1 === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5;
  }
  return tmp4;
};
