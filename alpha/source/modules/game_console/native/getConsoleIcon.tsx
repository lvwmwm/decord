// Module ID: 14209
// Function ID: 14210
// Name: getConsoleIcon
// Dependencies: [1084, 5633, 11721, 11722, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 14209 (getConsoleIcon)
import Constants from "Constants" /* 1084 */;
import CallConstants from "CallConstants" /* 5633 */;
import AssetRegistryDefault from "AssetRegistry" /* 11721 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11722 */;
import size from "module_2" /* 2 */;

let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const PlatformTypes = Constants.PlatformTypes;
const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: AssetRegistryDefault, [PLAYSTATION]: AssetRegistryDefault2, [PLAYSTATION_STAGING]: AssetRegistryDefault2 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  let tmp2;
  if (voicePlatform === VoicePlatforms.XBOX) {
    tmp2 = AssetRegistryDefault;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = AssetRegistryDefault2;
    }
  }
  return tmp2;
};
