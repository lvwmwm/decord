// Module ID: 15625
// Function ID: 15626
// Name: FindCodedLinksExperiment
// Dependencies: [1448, 2]
// Exports: isFindCodedLinksRegexEnabled

// Module 15625 (FindCodedLinksExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-find-coded-links-regex", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/coded_links/FindCodedLinksExperiment.tsx");

export function isFindCodedLinksRegexEnabled() {
  return config.getConfig({ location: "findCodedLinks" }).enabled;
}
