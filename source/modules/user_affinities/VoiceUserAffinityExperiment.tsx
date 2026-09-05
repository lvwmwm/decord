// Module ID: 8073
// Function ID: 8074
// Name: apexExperiment
// Dependencies: [1433, 2]
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 8073 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-08-voice-user-affinity", defaultConfig: { enabled: false }, variations: { 0: { enabled: false, sortType: "PX_16" }, 1: { enabled: true, sortType: "vc_probability" }, 2: { enabled: true, sortType: "communication_probability" } } });
const result = set.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  return apexExperiment.getConfig({ location }).sortType;
};
export const useVoiceUserAffinitySortType = function useVoiceUserAffinitySortType(useVoiceChannelUsers) {
  return apexExperiment.useConfig({ location: useVoiceChannelUsers }).sortType;
};
