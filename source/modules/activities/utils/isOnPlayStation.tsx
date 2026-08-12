// Module ID: 12344
// Function ID: 12345
// Name: isOnPlayStation
// Dependencies: [676, 2]
// Exports: default

// Module 12344 (isOnPlayStation)
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

export default function isOnPlayStation(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  let tmp3 = platform === ActivityGamePlatforms.PS4;
  if (!tmp3) {
    let platform1;
    if (platform != null) {
      platform1 = platform.platform;
    }
    tmp3 = platform1 === tmp2.PS5;
  }
  return tmp3;
};
