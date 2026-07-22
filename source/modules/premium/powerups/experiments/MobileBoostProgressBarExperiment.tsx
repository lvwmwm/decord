// Module ID: 14872
// Function ID: 112037
// Name: apexExperiment
// Dependencies: []
// Exports: getMobileBoostProgressBarEnabled, useMobileBoostProgressBarEnabled

// Module 14872 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: false, DateToSystemTimezoneSetter: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx");

export const MobileBoostProgressBarExperiment = apexExperiment;
export const useMobileBoostProgressBarEnabled = function useMobileBoostProgressBarEnabled(GuildHeaderCoachmarks) {
  return apexExperiment.useConfig({ location: GuildHeaderCoachmarks }).enabled;
};
export const getMobileBoostProgressBarEnabled = function getMobileBoostProgressBarEnabled(GuildSettingsModalOverview) {
  return apexExperiment.getConfig({ location: GuildSettingsModalOverview }).enabled;
};
