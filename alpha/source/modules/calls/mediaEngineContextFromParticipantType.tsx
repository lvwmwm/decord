// Module ID: 11747
// Function ID: 11748
// Name: mediaEngineContextFromParticipantType
// Dependencies: [5676, 5763, 2]
// Exports: default

// Module 11747 (mediaEngineContextFromParticipantType)
import CallConstants from "CallConstants" /* 5676 */;
import Constants from "Constants" /* 5763 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const obj = { [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT };
let closure_0 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};
