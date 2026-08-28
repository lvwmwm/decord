// Module ID: 9432
// Function ID: 9433
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 9432 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-content-classification-embedded-activity-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
