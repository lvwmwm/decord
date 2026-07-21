// Module ID: 4056
// Function ID: 33814
// Name: items
// Dependencies: []
// Exports: getFileUpload250MbPowerupEnabled, getFileUpload250MbPowerupRollbackEnabled, useFileUpload250MbPowerupEnabled, useFileUpload250MbPowerupRollbackEnabled

// Module 4056 (items)
const _module = require(dependencyMap[0]);
let obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, defaultConfig: { "Null": null, "Null": null } };
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: true, 炖锅: true, config: { "Null": null, "Null": null } };
const items = [obj, ];
const obj1 = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: "accessibilityLabel", 炖锅: "r", config: { "Null": null, "Null": null } };
items[1] = obj1;
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
