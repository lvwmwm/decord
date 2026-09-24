// Module ID: 14155
// Function ID: 14156
// Name: FindCodedLinksExperiment
// Dependencies: [1438, 2]
// Exports: isFindCodedLinksRegexEnabled

// Module 14155 (FindCodedLinksExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-find-coded-links-regex", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/coded_links/FindCodedLinksExperiment.tsx");

export const isFindCodedLinksRegexEnabled = function isFindCodedLinksRegexEnabled() {
  return config.getConfig({ location: "findCodedLinks" }).enabled;
};
