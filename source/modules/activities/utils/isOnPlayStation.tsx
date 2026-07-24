// Module ID: 11950
// Function ID: 92514
// Name: isOnPlayStation
// Dependencies: [653, 2]
// Exports: default

// Module 11950 (isOnPlayStation)
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

export default function isOnPlayStation(platform) {
  platform = undefined;
  if (null != platform) {
    platform = platform.platform;
  }
  let tmp2 = platform === ActivityGamePlatforms.PS4;
  if (!tmp2) {
    let platform1;
    if (null != platform) {
      platform1 = platform.platform;
    }
    tmp2 = platform1 === ActivityGamePlatforms.PS5;
  }
  return tmp2;
};
