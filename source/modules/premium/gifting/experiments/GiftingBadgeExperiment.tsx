// Module ID: 10743
// Function ID: 10744
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 10743 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-gifting-badge", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeExperiment = apexExperiment;
