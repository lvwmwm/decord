// Module ID: 10490
// Function ID: 81203
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10490 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-06-content-classification-embedded-activity-filter", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
