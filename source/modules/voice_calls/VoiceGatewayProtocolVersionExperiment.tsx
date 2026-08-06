// Module ID: 12990
// Function ID: 12991
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getVoiceGatewayProtocolVersion

// Module 12990 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-voice-gateway-protocol-version", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/voice_calls/VoiceGatewayProtocolVersionExperiment.tsx");

export default apexExperiment;
export const getVoiceGatewayProtocolVersion = function getVoiceGatewayProtocolVersion(supportsSfuUpdate) {
  let num = 9;
  if (supportsSfuUpdate.supportsSfuUpdate) {
    const obj = { location: null };
    obj[0] = tmp;
    num = 9;
    if (apexExperiment.getConfig(obj).enabled) {
      num = 10;
    }
  }
  return num;
};
