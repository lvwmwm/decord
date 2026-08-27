// Module ID: 5068
// Function ID: 5069
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 5068 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-heic-upload-conversion", kind: "user", defaultConfig: { enabled: false, quality: 60 }, variations: { 0: { enabled: false, quality: 60 }, 1: { enabled: true, quality: 60, maxFileSizeBytes: 20971520 }, 2: { enabled: true, quality: 80, maxFileSizeBytes: 20971520 } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx");

export const HeicUploadConversionExperiment = apexExperiment;
