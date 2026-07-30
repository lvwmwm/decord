// Module ID: 9049
// Function ID: 9050
// Name: getConsoleIcon
// Dependencies: [676, 4207, 9029, 9050, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9049 (getConsoleIcon)
import { VoicePlatforms } from "ParticipantTypes";

let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const obj = { [XBOX]: require("registerAsset"), [PLAYSTATION]: require("registerAsset"), [PLAYSTATION_STAGING]: require("registerAsset") };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = require("ME").PlatformTypes);
const result = require("registerAsset").fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = importDefault(9029);
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = importDefault(9050);
    }
  }
  return tmp2;
};
