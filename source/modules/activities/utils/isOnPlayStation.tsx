// Module ID: 11910
// Function ID: 92209
// Name: isOnPlayStation
// Dependencies: []
// Exports: default

// Module 11910 (isOnPlayStation)
const ActivityGamePlatforms = require(dependencyMap[0]).ActivityGamePlatforms;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

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
