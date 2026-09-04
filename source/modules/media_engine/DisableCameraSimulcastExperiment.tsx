// Module ID: 13837
// Function ID: 13838
// Name: apexExperiment
// Dependencies: [1468, 2]

// Module 13837 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
