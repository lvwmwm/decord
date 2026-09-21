// Module ID: 10038
// Function ID: 10039
// Name: getConsoleIcon
// Dependencies: [1078, 4779, 9361, 10039, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 10038 (getConsoleIcon)
import Constants from "Constants" /* 1078 */;
import CallConstants from "CallConstants" /* 4779 */;
import _modDef9361 from "module_9361" /* 9361 */;
import _modDef10039 from "module_10039" /* 10039 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9361, [PLAYSTATION]: _modDef10039, [PLAYSTATION_STAGING]: _modDef10039 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9361;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef10039;
    }
  }
  return tmp2;
};
