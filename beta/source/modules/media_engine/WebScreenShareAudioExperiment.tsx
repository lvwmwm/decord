// Module ID: 6016
// Function ID: 6017
// Name: WebScreenShareAudioExperiment
// Dependencies: [1449, 2]

// Module 6016 (WebScreenShareAudioExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-web-screen-share-audio", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WebScreenShareAudioExperiment.tsx");

export const WebScreenShareAudioExperiment = apexExperiment;
