// Module ID: 13604
// Function ID: 13605
// Name: AndroidTwoWeekTrialsExperiment
// Dependencies: [1453, 2]
// Exports: isAndroidTwoWeekTrialsExperimentEnabled, isAndroidTwoWeekTrialsTrialCTAEnabled

// Module 13604 (AndroidTwoWeekTrialsExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-android-two-week-trials", kind: "user", defaultConfig: { enabled: false, trialCTAEnabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, trialCTAEnabled: true } };
obj2[2] = { enabled: true, trialCTAEnabled: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/AndroidTwoWeekTrialsExperiment.tsx");

export const AndroidTwoWeekTrialsExperiment = apexExperiment;
export const isAndroidTwoWeekTrialsExperimentEnabled = function isAndroidTwoWeekTrialsExperimentEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj).enabled;
};
export const isAndroidTwoWeekTrialsTrialCTAEnabled = function isAndroidTwoWeekTrialsTrialCTAEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj).trialCTAEnabled;
};
