// Module ID: 9093
// Function ID: 71315
// Name: PlatformTypes
// Dependencies: [653, 4148, 9073, 9094, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9093 (PlatformTypes)
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
    let tmp2 = importDefault(9073);
  } else {
    tmp2 = null;
    if (voicePlatform === VoicePlatforms.PLAYSTATION) {
      tmp2 = importDefault(9094);
    }
  }
  return tmp2;
};
