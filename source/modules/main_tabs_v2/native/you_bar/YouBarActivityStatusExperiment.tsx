// Module ID: 16291
// Function ID: 16292
// Name: YouBarActivityStatusExperiment
// Dependencies: [1469, 2]
// Exports: useYouBarActivityStatusEnabled

// Module 16291 (YouBarActivityStatusExperiment)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const tmp2 = getUnitIdDefault({ name: "2026-05-you-bar-activity-status", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarActivityStatusExperiment.tsx");

export const YouBarActivityStatusExperiment = tmp2;
export const useYouBarActivityStatusEnabled = function useYouBarActivityStatusEnabled(YouBar) {
  return closure_0.useConfig({ location: YouBar }).enabled;
};
