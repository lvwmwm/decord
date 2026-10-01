// Module ID: 7516
// Function ID: 7517
// Name: VoiceUserAffinityExperiment
// Dependencies: [1435, 2]
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 7516 (VoiceUserAffinityExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-08-voice-user-affinity", defaultConfig: { enabled: false }, variations: { 0: { enabled: false, sortType: "r" }, 1: { enabled: true, sortType: "vc_probability" }, 2: { enabled: true, sortType: "communication_probability" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).sortType;
};
export const useVoiceUserAffinitySortType = function useVoiceUserAffinitySortType(useVoiceChannelUsers) {
  const obj = { location: useVoiceChannelUsers };
  return apexExperiment.useConfig(obj).sortType;
};
