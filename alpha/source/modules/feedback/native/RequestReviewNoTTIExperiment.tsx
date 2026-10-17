// Module ID: 14772
// Function ID: 14773
// Name: RequestReviewNoTTIExperiment
// Dependencies: [1455, 2]

// Module 14772 (RequestReviewNoTTIExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-05-mobile-request-review-no-tti", kind: "user", defaultConfig: { skipTTICheck: false }, variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
