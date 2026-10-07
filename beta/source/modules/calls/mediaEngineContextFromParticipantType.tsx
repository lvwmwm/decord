// Module ID: 9128
// Function ID: 9129
// Name: mediaEngineContextFromParticipantType
// Dependencies: [4911, 4915, 2]
// Exports: default

// Module 9128 (mediaEngineContextFromParticipantType)
import CallConstants from "CallConstants" /* 4911 */;
import Constants from "Constants" /* 4915 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const obj = { [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT };
let closure_0 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};
