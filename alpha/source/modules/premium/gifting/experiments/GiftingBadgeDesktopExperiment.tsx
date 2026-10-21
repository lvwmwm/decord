// Module ID: 10461
// Function ID: 10462
// Name: GiftingBadgeDesktopExperiment
// Dependencies: [1455, 2]

// Module 10461 (GiftingBadgeDesktopExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-06-gifting-badge-desktop", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeDesktopExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeDesktopExperiment = apexExperiment;
