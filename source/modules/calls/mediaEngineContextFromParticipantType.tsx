// Module ID: 12516
// Function ID: 12517
// Name: mediaEngineContextFromParticipantType
// Dependencies: [4549, 4534, 2]
// Exports: default

// Module 12516 (mediaEngineContextFromParticipantType)
import set from "set" /* 2 */;
import DesktopSources from "DesktopSources" /* 4534 */;
import ParticipantTypes2 from "ParticipantTypes" /* 4549 */;

const ParticipantTypes = ParticipantTypes2.ParticipantTypes;
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const result = set.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return table[arg0];
};
