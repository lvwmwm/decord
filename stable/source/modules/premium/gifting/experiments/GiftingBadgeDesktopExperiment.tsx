// Module ID: 10877
// Function ID: 10878
// Name: GiftingBadgeDesktopExperiment
// Dependencies: [1433, 2]

// Module 10877 (GiftingBadgeDesktopExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-gifting-badge-desktop", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeDesktopExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeDesktopExperiment = apexExperiment;
