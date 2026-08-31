// Module ID: 9559
// Function ID: 9560
// Name: mediaEngineContextFromParticipantType
// Dependencies: [4469, 4512, 2]
// Exports: default

// Module 9559 (mediaEngineContextFromParticipantType)
import set from "set" /* 2 */;
import ParticipantTypes2 from "ParticipantTypes" /* 4469 */;
import DesktopSources from "DesktopSources" /* 4512 */;

const ParticipantTypes = ParticipantTypes2.ParticipantTypes;
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = set.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return table[arg0];
};
