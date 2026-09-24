// Module ID: 11674
// Function ID: 11675
// Name: VQRemainingTimeTruncationExperiment
// Dependencies: [1438, 2]

// Module 11674 (VQRemainingTimeTruncationExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-vq-remaining-time-truncation", kind: "user", defaultConfig: { truncateMoreThanSeconds: null }, variations: null };
const obj2 = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj2[2] = { truncateMoreThanSeconds: 60 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;
