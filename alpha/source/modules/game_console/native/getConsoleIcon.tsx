// Module ID: 12975
// Function ID: 12976
// Name: getConsoleIcon
// Dependencies: [1085, 5114, 11137, 11138, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 12975 (getConsoleIcon)
import Constants from "Constants" /* 1085 */;
import CallConstants from "CallConstants" /* 5114 */;
import AssetRegistryDefault from "AssetRegistry" /* 11137 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11138 */;
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
