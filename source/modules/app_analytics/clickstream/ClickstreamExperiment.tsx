// Module ID: 5707
// Function ID: 49086
// Name: clickstreamExperimentEnabled
// Dependencies: [1428, 2]
// Exports: clickstreamExperimentEnabled

// Module 5707 (clickstreamExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-clickstream-analytics", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamExperiment.tsx");

export const clickstreamExperimentEnabled = function clickstreamExperimentEnabled() {
  return config.getConfig({ location: "clickstream" }).enabled;
};
