// Module ID: 5486
// Function ID: 5487
// Name: HeicUploadConversionExperiment
// Dependencies: [1441, 2]

// Module 5486 (HeicUploadConversionExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-heic-upload-conversion", kind: "user", defaultConfig: { enabled: false, quality: 60 }, variations: { 0: { enabled: false, quality: 60 }, 1: { enabled: true, quality: 60, maxFileSizeBytes: 20971520 }, 2: { enabled: true, quality: 80, maxFileSizeBytes: 20971520 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx");

export const HeicUploadConversionExperiment = apexExperiment;
