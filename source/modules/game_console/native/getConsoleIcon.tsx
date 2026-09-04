// Module ID: 9392
// Function ID: 9393
// Name: getConsoleIcon
// Dependencies: [673, 4502, 9371, 9393, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9392 (getConsoleIcon)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ParticipantTypes from "ParticipantTypes" /* 4502 */;
import registerAssetDefault from "registerAsset" /* 9371 */;
import registerAssetDefault2 from "registerAsset" /* 9393 */;

const VoicePlatforms = ParticipantTypes.VoicePlatforms;
const obj = { [XBOX]: registerAssetDefault, [PLAYSTATION]: registerAssetDefault2, [PLAYSTATION_STAGING]: registerAssetDefault2 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = set.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = registerAssetDefault;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = registerAssetDefault2;
    }
  }
  return tmp2;
};
