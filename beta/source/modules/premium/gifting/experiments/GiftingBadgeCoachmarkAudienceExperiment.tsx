// Module ID: 10211
// Function ID: 10212
// Name: GiftingBadgeCoachmarkAudienceExperiment
// Dependencies: [1435, 2]

// Module 10211 (GiftingBadgeCoachmarkAudienceExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-gifting-badge-coachmark-audience", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeCoachmarkAudienceExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeCoachmarkAudienceExperiment = apexExperiment;
