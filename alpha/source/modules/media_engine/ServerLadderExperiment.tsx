// Module ID: 5301
// Function ID: 5302
// Name: ServerLadderExperiment
// Dependencies: [1455, 2]

// Module 5301 (ServerLadderExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-06-server-ladder", kind: "user", defaultConfig: { bitrate: 9000000, enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { bitrate: 3500000, enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;
