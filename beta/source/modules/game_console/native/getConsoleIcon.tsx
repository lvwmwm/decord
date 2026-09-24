// Module ID: 10077
// Function ID: 10078
// Name: getConsoleIcon
// Dependencies: [1078, 4811, 9393, 10078, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 10077 (getConsoleIcon)
import Constants from "Constants" /* 1078 */;
import CallConstants from "CallConstants" /* 4811 */;
import _modDef9393 from "module_9393" /* 9393 */;
import _modDef10078 from "module_10078" /* 10078 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9393, [PLAYSTATION]: _modDef10078, [PLAYSTATION_STAGING]: _modDef10078 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9393;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10078;
    }
  }
  return tmp2;
};
