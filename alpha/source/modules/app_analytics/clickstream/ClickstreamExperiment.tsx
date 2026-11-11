// Module ID: 8603
// Function ID: 8604
// Name: ClickstreamExperiment
// Dependencies: [1449, 2]
// Exports: clickstreamExperimentEnabled

// Module 8603 (ClickstreamExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-06-clickstream-analytics", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamExperiment.tsx");

export function clickstreamExperimentEnabled() {
  return config.getConfig({ location: "clickstream" }).enabled;
}
