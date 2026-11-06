// Module ID: 15278
// Function ID: 15279
// Name: MobileNitroUpsellInShopPdpExperiment
// Dependencies: [1449, 2]

// Module 15278 (MobileNitroUpsellInShopPdpExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-mobile-nitro-upsell-in-shop-pdp", kind: "user", defaultConfig: { enabled: false, showActionSheet: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, showActionSheet: false } };
obj2[2] = { enabled: true, showActionSheet: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopPdpExperiment.tsx");

export default apexExperiment;
export const MOBILE_NITRO_UPSELL_IN_SHOP_PDP_EXPERIMENT = "2026-09-mobile-nitro-upsell-in-shop-pdp";
