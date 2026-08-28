// Module ID: 11047
// Function ID: 11048
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 11047 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj[2] = { truncateMoreThanSeconds: 60 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-vq-remaining-time-truncation", kind: "user", defaultConfig: { truncateMoreThanSeconds: null }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;
