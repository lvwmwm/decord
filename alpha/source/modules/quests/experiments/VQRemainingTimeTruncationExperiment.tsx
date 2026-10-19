// Module ID: 13904
// Function ID: 13905
// Name: VQRemainingTimeTruncationExperiment
// Dependencies: [1455, 2]

// Module 13904 (VQRemainingTimeTruncationExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-vq-remaining-time-truncation", kind: "user", defaultConfig: { truncateMoreThanSeconds: null }, variations: obj2 };
obj2 = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj2[2] = { truncateMoreThanSeconds: 60 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;
