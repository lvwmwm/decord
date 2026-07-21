// Module ID: 15391
// Function ID: 117427
// Name: items
// Dependencies: []
// Exports: getHangoutWindowExperiment, useHangoutWindowExperiment

// Module 15391 (items)
const _module = require(dependencyMap[1]);
const obj = { "Bool(false)": "flex-start", "Bool(false)": "100%", "Bool(false)": true, defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL };
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
