// Module ID: 10098
// Function ID: 10099
// Name: getConsoleIcon
// Dependencies: [1074, 4809, 9395, 10099, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 10098 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4809 */;
import _modDef9395 from "module_9395" /* 9395 */;
import _modDef10099 from "module_10099" /* 10099 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9395, [PLAYSTATION]: _modDef10099, [PLAYSTATION_STAGING]: _modDef10099 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9395;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10099;
    }
  }
  return tmp2;
};
