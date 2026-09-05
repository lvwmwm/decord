// Module ID: 4486
// Function ID: 4487
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 4486 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-file-upload-powerup-holdout", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx");

export const FileUploadPowerupHoldoutExperiment = apexExperiment;
