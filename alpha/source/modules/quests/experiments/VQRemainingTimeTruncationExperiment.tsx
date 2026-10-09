// Module ID: 12918
// Function ID: 12919
// Name: VQRemainingTimeTruncationExperiment
// Dependencies: [1453, 2]

// Module 12918 (VQRemainingTimeTruncationExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-vq-remaining-time-truncation", kind: "user", defaultConfig: { truncateMoreThanSeconds: null }, variations: obj2 };
obj2 = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj2[2] = { truncateMoreThanSeconds: 60 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;
