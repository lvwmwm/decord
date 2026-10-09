// Module ID: 7765
// Function ID: 7766
// Name: AttachmentQualityMetricsExperiment
// Dependencies: [1453, 2]

// Module 7765 (AttachmentQualityMetricsExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-04-attachment-quality-metrics", kind: "user", defaultConfig: { enableQualityMetrics: false, enableOriginDetection: false }, variations: { 0: { enableQualityMetrics: false, enableOriginDetection: false }, 1: { enableQualityMetrics: true, enableOriginDetection: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx");

export const AttachmentQualityMetricsExperiment = apexExperiment;
