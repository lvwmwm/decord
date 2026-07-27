// Module ID: 12806
// Function ID: 99703
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12806 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-server-ladder", kind: "user", defaultConfig: { bitrate: 9000000, enabled: false }, variations: { [1]: { bitrate: 3500000, enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;
