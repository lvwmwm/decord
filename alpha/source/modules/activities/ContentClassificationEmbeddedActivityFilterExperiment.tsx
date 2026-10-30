// Module ID: 5653
// Function ID: 5654
// Name: ContentClassificationEmbeddedActivityFilterExperiment
// Dependencies: [1448, 2]

// Module 5653 (ContentClassificationEmbeddedActivityFilterExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-06-content-classification-embedded-activity-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
