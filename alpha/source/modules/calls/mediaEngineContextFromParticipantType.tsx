// Module ID: 10729
// Function ID: 10730
// Name: mediaEngineContextFromParticipantType
// Dependencies: [5113, 5115, 2]
// Exports: default

// Module 10729 (mediaEngineContextFromParticipantType)
import CallConstants from "CallConstants" /* 5113 */;
import Constants from "Constants" /* 5115 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const obj = { [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT };
let closure_0 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};
