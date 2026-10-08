// Module ID: 6045
// Function ID: 6046
// Name: ContentClassificationEmbeddedActivityFilterExperiment
// Dependencies: [1452, 2]

// Module 6045 (ContentClassificationEmbeddedActivityFilterExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-06-content-classification-embedded-activity-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
