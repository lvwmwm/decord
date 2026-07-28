// Module ID: 15582
// Function ID: 119795
// Name: isYouNavFloating
// Dependencies: [1428, 2]
// Exports: isYouNavFloating

// Module 15582 (isYouNavFloating)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-you-nav-floating", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "you-nav-floating" }).enabled;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouNavFloatingExperiment.tsx");

export function isYouNavFloating() {
  return enabled;
}
