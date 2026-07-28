// Module ID: 12728
// Function ID: 98630
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12728 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-mobile-request-review-no-tti", kind: "user", defaultConfig: { skipTTICheck: false }, variations: { [0]: { skipTTICheck: false }, [1]: { skipTTICheck: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
