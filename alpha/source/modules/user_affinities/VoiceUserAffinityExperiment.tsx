// Module ID: 8532
// Function ID: 8533
// Name: VoiceUserAffinityExperiment
// Dependencies: [1448, 2]
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 8532 (VoiceUserAffinityExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-08-voice-user-affinity", defaultConfig: { enabled: false }, variations: { 0: { enabled: false, sortType: "Array" }, 1: { enabled: true, sortType: "vc_probability" }, 2: { enabled: true, sortType: "communication_probability" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export function getVoiceUserAffinitySortType(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).sortType;
}
export function useVoiceUserAffinitySortType(useVoiceChannelUsers) {
  const obj = { location: useVoiceChannelUsers };
  return apexExperiment.useConfig(obj).sortType;
}
