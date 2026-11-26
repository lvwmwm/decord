// Module ID: 13826
// Function ID: 13827
// Name: getConsoleIcon
// Dependencies: [1071, 5563, 7082, 11092, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 13826 (getConsoleIcon)
import Constants from "Constants" /* 1071 */;
import CallConstants from "CallConstants" /* 5563 */;
import AssetRegistryDefault from "AssetRegistry" /* 7082 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11092 */;
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
