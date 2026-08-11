// Module ID: 15297
// Function ID: 15298
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: getMobileBoostProgressBarEnabled, useMobileBoostProgressBarEnabled

// Module 15297 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-mobile-boost-progress-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx");

export const MobileBoostProgressBarExperiment = apexExperiment;
export const useMobileBoostProgressBarEnabled = function useMobileBoostProgressBarEnabled(GuildHeaderCoachmarks) {
  return apexExperiment.useConfig({ location: GuildHeaderCoachmarks }).enabled;
};
export const getMobileBoostProgressBarEnabled = function getMobileBoostProgressBarEnabled(GuildSettingsModalOverview) {
  return apexExperiment.getConfig({ location: GuildSettingsModalOverview }).enabled;
};
