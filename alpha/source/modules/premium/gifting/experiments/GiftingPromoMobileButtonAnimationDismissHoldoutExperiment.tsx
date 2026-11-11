// Module ID: 14546
// Function ID: 14547
// Name: GiftingPromoMobileButtonAnimationDismissHoldoutExperiment
// Dependencies: [1449, 2]

// Module 14546 (GiftingPromoMobileButtonAnimationDismissHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-gifting-promo-mobile-button-animation-dismiss", kind: "user", defaultConfig: { inHoldout: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { inHoldout: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.tsx");

export default apexExperiment;
export const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = apexExperiment;
