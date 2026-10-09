// Module ID: 10875
// Function ID: 10876
// Name: mediaEngineContextFromParticipantType
// Dependencies: [5114, 5116, 2]
// Exports: default

// Module 10875 (mediaEngineContextFromParticipantType)
import CallConstants from "CallConstants" /* 5114 */;
import Constants from "Constants" /* 5116 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const obj = { [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT };
let closure_0 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};
