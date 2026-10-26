// Module ID: 13142
// Function ID: 13143
// Name: GiftingPromoMobileButtonAnimationDismissHoldoutExperiment
// Dependencies: [1455, 2]

// Module 13142 (GiftingPromoMobileButtonAnimationDismissHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-gifting-promo-mobile-button-animation-dismiss", kind: "user", defaultConfig: { inHoldout: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { inHoldout: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.tsx");

export default apexExperiment;
export const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = apexExperiment;
