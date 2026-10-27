// Module ID: 14839
// Function ID: 14840
// Name: ContentClassificationPresenceFilterExperiment
// Dependencies: [1455, 2]

// Module 14839 (ContentClassificationPresenceFilterExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-02-content-classification-presence-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/presence/ContentClassificationPresenceFilterExperiment.tsx");

export const ContentClassificationPresenceFilterExperiment = apexExperiment;
