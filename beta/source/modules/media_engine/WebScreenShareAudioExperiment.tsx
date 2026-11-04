// Module ID: 5885
// Function ID: 5886
// Name: WebScreenShareAudioExperiment
// Dependencies: [1447, 2]

// Module 5885 (WebScreenShareAudioExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-web-screen-share-audio", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WebScreenShareAudioExperiment.tsx");

export const WebScreenShareAudioExperiment = apexExperiment;
