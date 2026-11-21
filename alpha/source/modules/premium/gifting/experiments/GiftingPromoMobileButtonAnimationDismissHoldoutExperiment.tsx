// Module ID: 13111
// Function ID: 13112
// Name: GiftingPromoMobileButtonAnimationDismissHoldoutExperiment
// Dependencies: [1450, 2]

// Module 13111 (GiftingPromoMobileButtonAnimationDismissHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-gifting-promo-mobile-button-animation-dismiss", kind: "user", defaultConfig: { inHoldout: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { inHoldout: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.tsx");

export default apexExperiment;
export const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = apexExperiment;
