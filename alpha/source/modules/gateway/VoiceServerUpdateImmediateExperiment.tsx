// Module ID: 14851
// Function ID: 14852
// Name: VoiceServerUpdateImmediateExperiment
// Dependencies: [1455, 2]
// Exports: isVoiceServerUpdateImmediateEnabled

// Module 14851 (VoiceServerUpdateImmediateExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-voice-server-update-immediate-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/VoiceServerUpdateImmediateExperiment.tsx");

export const isVoiceServerUpdateImmediateEnabled = function isVoiceServerUpdateImmediateEnabled(GatewaySocketDispatcher) {
  let flag;
  const obj = closure_0;
  if (closure_0 != null) {
    const obj2 = { location: GatewaySocketDispatcher };
    flag = obj.getConfig(obj2).enabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
