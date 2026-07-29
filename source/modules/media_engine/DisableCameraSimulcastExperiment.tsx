// Module ID: 12968
// Function ID: 12969
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 12968 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
