// Module ID: 4057
// Function ID: 33825
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4057 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-03-file-upload-powerup-holdout", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx");

export const FileUploadPowerupHoldoutExperiment = apexExperiment;
