// Module ID: 15399
// Function ID: 117470
// Name: items
// Dependencies: []
// Exports: getHangoutWindowExperiment, useHangoutWindowExperiment

// Module 15399 (items)
const _module = require(dependencyMap[1]);
const obj = { shapes: "flex-start", flex: "100%", sk: true, defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL };
const items = [{ config: { enableHangoutWindow: true } }];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
