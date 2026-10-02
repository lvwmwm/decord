// Module ID: 5487
// Function ID: 5488
// Name: JxrUploadConversionExperiment
// Dependencies: [1441, 2]

// Module 5487 (JxrUploadConversionExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-jxr-upload-conversion", kind: "user", defaultConfig: { enabled: false, quality: 85 }, variations: { 0: { enabled: false, quality: 85 }, 1: { enabled: true, quality: 85, maxFileSizeBytes: 52428800 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/JxrUploadConversionExperiment.tsx");

export const JxrUploadConversionExperiment = apexExperiment;
