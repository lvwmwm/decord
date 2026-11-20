// Module ID: 13700
// Function ID: 13701
// Name: getConsoleIcon
// Dependencies: [1071, 5444, 6962, 10967, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 13700 (getConsoleIcon)
import Constants from "Constants" /* 1071 */;
import CallConstants from "CallConstants" /* 5444 */;
import AssetRegistryDefault from "AssetRegistry" /* 6962 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10967 */;
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
export function getConsoleIconForVoicePlatform(voicePlatform) {
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
}
