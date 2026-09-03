// Module ID: 5118
// Function ID: 5119
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 5118 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-attachment-quality-metrics", kind: "user", defaultConfig: { enableQualityMetrics: false, enableOriginDetection: false }, variations: { 0: { enableQualityMetrics: false, enableOriginDetection: false }, 1: { enableQualityMetrics: true, enableOriginDetection: true } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx");

export const AttachmentQualityMetricsExperiment = apexExperiment;
