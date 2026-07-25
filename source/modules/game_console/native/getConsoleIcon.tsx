// Module ID: 8985
// Function ID: 70800
// Name: PlatformTypes
// Dependencies: [653, 4149, 8965, 8986, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 8985 (PlatformTypes)
import { PlatformTypes } from "ME";
import { VoicePlatforms } from "ParticipantTypes";

let PLAYSTATION;
let PLAYSTATION_STAGING;
const obj = { [PlatformTypes.XBOX]: require("registerAsset"), [PLAYSTATION]: require("registerAsset"), [PLAYSTATION_STAGING]: require("registerAsset") };
({ PLAYSTATION, PLAYSTATION_STAGING } = PlatformTypes);
const result = require("registerAsset").fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = importDefault(8965);
  } else {
    tmp2 = null;
    if (voicePlatform === VoicePlatforms.PLAYSTATION) {
      tmp2 = importDefault(8986);
    }
  }
  return tmp2;
};
