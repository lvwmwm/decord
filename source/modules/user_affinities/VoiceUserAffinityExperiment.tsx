// Module ID: 7749
// Function ID: 61561
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 7749 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-08-voice-user-affinity", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false, sortType: undefined }, [1]: { enabled: true, sortType: "vc_probability" }, [2]: { enabled: true, sortType: "communication_probability" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  return apexExperiment.getConfig({ location }).sortType;
};
export const useVoiceUserAffinitySortType = function useVoiceUserAffinitySortType(useVoiceChannelUsers) {
  return apexExperiment.useConfig({ location: useVoiceChannelUsers }).sortType;
};
