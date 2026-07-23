// Module ID: 9054
// Function ID: 71100
// Name: PlatformTypes
// Dependencies: [653, 4148, 9034, 9055, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9054 (PlatformTypes)
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
    let tmp2 = importDefault(9034);
  } else {
    tmp2 = null;
    if (voicePlatform === VoicePlatforms.PLAYSTATION) {
      tmp2 = importDefault(9055);
    }
  }
  return tmp2;
};
