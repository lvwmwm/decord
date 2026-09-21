// Module ID: 14084
// Function ID: 14085
// Name: ServerLadderExperiment
// Dependencies: [1438, 2]

// Module 14084 (ServerLadderExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-server-ladder", kind: "user", defaultConfig: { bitrate: 9000000, enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { bitrate: 3500000, enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;
