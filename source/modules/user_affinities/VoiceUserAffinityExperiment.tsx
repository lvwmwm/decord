// Module ID: 7743
// Function ID: 61524
// Name: apexExperiment
// Dependencies: []
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 7743 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": "<string:3847753826>", "Bool(false)": "<string:1305670207>", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false, sortType: undefined }, [1]: { accessibilityRole: "2a4178fd61be5173c63df5a107198d76", join: "InstagramNeutralIcon" }, [2]: { accessibilityRole: true, join: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  return apexExperiment.getConfig({ location }).sortType;
};
export const useVoiceUserAffinitySortType = function useVoiceUserAffinitySortType(useVoiceChannelUsers) {
  return apexExperiment.useConfig({ location: useVoiceChannelUsers }).sortType;
};
