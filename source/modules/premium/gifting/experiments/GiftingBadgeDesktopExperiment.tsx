// Module ID: 12505
// Function ID: 96877
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12505 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-gifting-badge-desktop", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeDesktopExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeDesktopExperiment = apexExperiment;
