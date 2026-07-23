// Module ID: 10595
// Function ID: 82662
// Name: mediaEngineContextFromParticipantType
// Dependencies: [4148, 4191, 2]
// Exports: default

// Module 10595 (mediaEngineContextFromParticipantType)
import { ParticipantTypes } from "ParticipantTypes";
import { MediaEngineContextTypes } from "DesktopSources";

let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = require("set").fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return table[arg0];
};
