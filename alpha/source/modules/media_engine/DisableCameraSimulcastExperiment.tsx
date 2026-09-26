// Module ID: 13621
// Function ID: 13622
// Name: DisableCameraSimulcastExperiment
// Dependencies: [1435, 2]

// Module 13621 (DisableCameraSimulcastExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-05-disable-camera-simulcast", kind: "user", defaultConfig: { enableSimulcast: true }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableSimulcast: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/DisableCameraSimulcastExperiment.tsx");

export const DisableCameraSimulcastExperiment = apexExperiment;
