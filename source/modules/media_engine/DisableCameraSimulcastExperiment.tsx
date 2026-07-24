// Module ID: 12889
// Function ID: 100120
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12889 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: { [1]: { enableSimulcast: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
