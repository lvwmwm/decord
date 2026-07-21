// Module ID: 7743
// Function ID: 61514
// Name: apexExperiment
// Dependencies: []
// Exports: getVoiceUserAffinitySortType, useVoiceUserAffinitySortType

// Module 7743 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: null, name: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false, sortType: undefined }, [1]: {}, [2]: { NIO: 2, chatInputHandleSendText: "name" } } };
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
