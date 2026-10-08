// Module ID: 14213
// Function ID: 14214
// Name: DisableCameraSimulcastExperiment
// Dependencies: [1452, 2]

// Module 14213 (DisableCameraSimulcastExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableSimulcast: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
