// Module ID: 7742
// Function ID: 61502
// Name: apexExperiment
// Dependencies: []
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 7742 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: null, paddingHorizontal: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false, sortType: undefined }, [1]: {}, [2]: { 0: 2, 0: "name" } } };
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
