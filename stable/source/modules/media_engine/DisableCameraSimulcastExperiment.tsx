// Module ID: 14392
// Function ID: 14393
// Name: DisableCameraSimulcastExperiment
// Dependencies: [1453, 2]

// Module 14392 (DisableCameraSimulcastExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
