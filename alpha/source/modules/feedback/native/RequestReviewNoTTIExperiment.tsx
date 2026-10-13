// Module ID: 14328
// Function ID: 14329
// Name: RequestReviewNoTTIExperiment
// Dependencies: [1453, 2]

// Module 14328 (RequestReviewNoTTIExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-05-mobile-request-review-no-tti", kind: "user", defaultConfig: { skipTTICheck: false }, variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
