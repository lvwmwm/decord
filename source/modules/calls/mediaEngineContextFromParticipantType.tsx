// Module ID: 10585
// Function ID: 82612
// Name: mediaEngineContextFromParticipantType
// Dependencies: []
// Exports: default

// Module 10585 (mediaEngineContextFromParticipantType)
const ParticipantTypes = require(dependencyMap[0]).ParticipantTypes;
const MediaEngineContextTypes = require(dependencyMap[1]).MediaEngineContextTypes;
let closure_0 = Object.freeze({ [ParticipantTypes.STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.HIDDEN_STREAM]: MediaEngineContextTypes.STREAM, [ParticipantTypes.USER]: MediaEngineContextTypes.DEFAULT, [ParticipantTypes.ACTIVITY]: MediaEngineContextTypes.DEFAULT });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/calls/mediaEngineContextFromParticipantType.tsx");

export default function mediaEngineContextFromParticipantType(arg0) {
  return closure_0[arg0];
};
