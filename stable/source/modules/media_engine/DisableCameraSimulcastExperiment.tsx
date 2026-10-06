// Module ID: 13622
// Function ID: 13623
// Name: DisableCameraSimulcastExperiment
// Dependencies: [1441, 2]

// Module 13622 (DisableCameraSimulcastExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
