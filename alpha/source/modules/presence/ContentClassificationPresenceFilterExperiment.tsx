// Module ID: 13882
// Function ID: 13883
// Name: ContentClassificationPresenceFilterExperiment
// Dependencies: [1452, 2]

// Module 13882 (ContentClassificationPresenceFilterExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-02-content-classification-presence-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/presence/ContentClassificationPresenceFilterExperiment.tsx");

export const ContentClassificationPresenceFilterExperiment = apexExperiment;
