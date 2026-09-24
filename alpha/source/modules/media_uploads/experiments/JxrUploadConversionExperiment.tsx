// Module ID: 5478
// Function ID: 5479
// Name: JxrUploadConversionExperiment
// Dependencies: [1434, 2]

// Module 5478 (JxrUploadConversionExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-jxr-upload-conversion", kind: "user", defaultConfig: { enabled: false, quality: 85 }, variations: { 0: { enabled: false, quality: 85 }, 1: { enabled: true, quality: 85, maxFileSizeBytes: 52428800 } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/JxrUploadConversionExperiment.tsx");

export const JxrUploadConversionExperiment = apexExperiment;
