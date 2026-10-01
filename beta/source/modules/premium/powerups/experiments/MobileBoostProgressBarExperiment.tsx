// Module ID: 15789
// Function ID: 15790
// Name: MobileBoostProgressBarExperiment
// Dependencies: [1435, 2]
// Exports: getMobileBoostProgressBarEnabled, useMobileBoostProgressBarEnabled

// Module 15789 (MobileBoostProgressBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-04-mobile-boost-progress-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx");

export const MobileBoostProgressBarExperiment = apexExperiment;
export const useMobileBoostProgressBarEnabled = function useMobileBoostProgressBarEnabled(GuildHeaderCoachmarks) {
  const obj = { location: GuildHeaderCoachmarks };
  return apexExperiment.useConfig(obj).enabled;
};
export const getMobileBoostProgressBarEnabled = function getMobileBoostProgressBarEnabled(GuildSettingsModalOverview) {
  const obj = { location: GuildSettingsModalOverview };
  return apexExperiment.getConfig(obj).enabled;
};
