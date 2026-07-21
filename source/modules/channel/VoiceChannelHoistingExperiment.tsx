// Module ID: 15881
// Function ID: 121625
// Name: items
// Dependencies: []
// Exports: useVoiceChannelHoistingExperiment

// Module 15881 (items)
const _module = require(dependencyMap[1]);
let obj = { y: "setInputHandlers", createBackgroundHighlight: "snapDirection", y: "snapDirection", commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { 9223372036854775807: null, -9223372036854775808: null } };
const items = [{ config: { 9223372036854775807: null, -9223372036854775808: null } }, ];
obj = { -1174339580: "<string:1509949440>", -1169096700: "<string:1912602624>", config: { 9223372036854775807: true, -9223372036854775808: true } };
items[1] = obj;
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};
