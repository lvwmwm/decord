// Module ID: 9047
// Function ID: 71059
// Name: PlatformTypes
// Dependencies: [2013265955, 1761607715, 33554467, 1962934272, 0]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9047 (PlatformTypes)
let PLAYSTATION;
let PLAYSTATION_STAGING;
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const VoicePlatforms = require(dependencyMap[1]).VoicePlatforms;
const obj = { [PlatformTypes.XBOX]: importDefault(dependencyMap[2]), [PLAYSTATION]: importDefault(dependencyMap[3]), [PLAYSTATION_STAGING]: importDefault(dependencyMap[3]) };
({ PLAYSTATION, PLAYSTATION_STAGING } = PlatformTypes);
const result = require("__exportStarResult1").fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = importDefault(dependencyMap[2]);
  } else {
    tmp2 = null;
    if (voicePlatform === VoicePlatforms.PLAYSTATION) {
      tmp2 = importDefault(dependencyMap[3]);
    }
  }
  return tmp2;
};
