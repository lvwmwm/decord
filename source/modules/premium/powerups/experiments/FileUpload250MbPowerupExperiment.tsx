// Module ID: 4056
// Function ID: 33816
// Name: items
// Dependencies: []
// Exports: getFileUpload250MbPowerupEnabled, getFileUpload250MbPowerupRollbackEnabled, useFileUpload250MbPowerupEnabled, useFileUpload250MbPowerupRollbackEnabled

// Module 4056 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: true, flex: true, sk: true, defaultConfig: {} };
const items = [{ config: {} }, ];
obj = { displayNameStylesEnabled: true, submitButtonEnabled: true, config: {} };
items[1] = obj;
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/FileUpload250MbPowerupExperiment.tsx");

export const FileUpload250MbPowerupExperiment = experiment;
export const getFileUpload250MbPowerupEnabled = function getFileUpload250MbPowerupEnabled(guildId, GuildPowerupsConstants) {
  return experiment.getCurrentConfig({ guildId, location: GuildPowerupsConstants }, { autoTrackExposure: false }).enabled;
};
export const useFileUpload250MbPowerupEnabled = function useFileUpload250MbPowerupEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
export const useFileUpload250MbPowerupRollbackEnabled = function useFileUpload250MbPowerupRollbackEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).rollbackEnabled;
};
export const getFileUpload250MbPowerupRollbackEnabled = function getFileUpload250MbPowerupRollbackEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).rollbackEnabled;
};
