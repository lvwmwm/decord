// Module ID: 13621
// Function ID: 13622
// Name: VoiceGatewayProtocolVersionExperiment
// Dependencies: [1435, 2]
// Exports: getVoiceGatewayProtocolVersion

// Module 13621 (VoiceGatewayProtocolVersionExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-04-voice-gateway-protocol-version", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceGatewayProtocolVersionExperiment.tsx");

export default apexExperiment;
export const getVoiceGatewayProtocolVersion = function getVoiceGatewayProtocolVersion(supportsSfuUpdate) {
  let num = 9;
  if (supportsSfuUpdate.supportsSfuUpdate) {
    num = 9;
    const obj = { location: tmp };
    if (apexExperiment.getConfig(obj).enabled) {
      num = 10;
    }
  }
  return num;
};
