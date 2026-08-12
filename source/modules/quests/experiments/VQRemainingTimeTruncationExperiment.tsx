// Module ID: 10646
// Function ID: 10647
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 10646 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj[2] = { truncateMoreThanSeconds: 60 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-vq-remaining-time-truncation", kind: "user", defaultConfig: { truncateMoreThanSeconds: null }, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;
