// Module ID: 15035
// Function ID: 114526
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getMobileBoostProgressBarEnabled, useMobileBoostProgressBarEnabled

// Module 15035 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-mobile-boost-progress-bar", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx");

export const MobileBoostProgressBarExperiment = apexExperiment;
export const useMobileBoostProgressBarEnabled = function useMobileBoostProgressBarEnabled(GuildHeaderCoachmarks) {
  return apexExperiment.useConfig({ location: GuildHeaderCoachmarks }).enabled;
};
export const getMobileBoostProgressBarEnabled = function getMobileBoostProgressBarEnabled(GuildSettingsModalOverview) {
  return apexExperiment.getConfig({ location: GuildSettingsModalOverview }).enabled;
};
