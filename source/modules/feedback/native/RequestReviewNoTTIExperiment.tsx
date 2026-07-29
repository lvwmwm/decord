// Module ID: 12750
// Function ID: 12751
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 12750 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-request-review-no-tti", kind: "user", defaultConfig: { skipTTICheck: false }, variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } } });
const result = require("set").fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
