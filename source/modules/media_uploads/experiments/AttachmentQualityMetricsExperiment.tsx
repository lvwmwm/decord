// Module ID: 4701
// Function ID: 40939
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4701 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-attachment-quality-metrics", kind: "user", defaultConfig: { enableQualityMetrics: false, enableOriginDetection: false }, variations: { [0]: { enableQualityMetrics: false, enableOriginDetection: false }, [1]: { enableQualityMetrics: true, enableOriginDetection: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx");

export const AttachmentQualityMetricsExperiment = apexExperiment;
