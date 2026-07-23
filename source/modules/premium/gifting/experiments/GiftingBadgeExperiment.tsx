// Module ID: 8776
// Function ID: 69356
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8776 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-gifting-badge", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeExperiment = apexExperiment;
