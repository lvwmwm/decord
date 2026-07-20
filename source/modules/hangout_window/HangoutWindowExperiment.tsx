// Module ID: 15381
// Function ID: 117364
// Name: experiment
// Dependencies: []
// Exports: getHangoutWindowExperiment, useHangoutWindowExperiment

// Module 15381 (experiment)
const _module = require(dependencyMap[1]);
const items = [{ config: { enableHangoutWindow: true } }];
const experiment = _module.createExperiment({ defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, treatments: items });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
