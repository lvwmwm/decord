// Module ID: 13499
// Function ID: 13500
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 13499 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
