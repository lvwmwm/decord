// Module ID: 15874
// Function ID: 121601
// Name: experiment
// Dependencies: []
// Exports: useVoiceChannelHoistingExperiment

// Module 15874 (experiment)
const _module = require(dependencyMap[1]);
let obj = { commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: {}, treatments: items };
const items = [{ config: { store: null, center: null } }, ];
obj = { "Bool(false)": 49.5, "Bool(false)": 10, config: { store: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, center: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 } };
items[1] = obj;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};
