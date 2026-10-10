// Module ID: 16186
// Function ID: 16187
// Name: MobileNitroUpsellInShopFeedExperiment
// Dependencies: [1454, 2]

// Module 16186 (MobileNitroUpsellInShopFeedExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;
import size from "module_2" /* 2 */;

let obj3;
const obj = { GET_NITRO: "getNitro", LEARN_MORE: "learnMore" };
const obj2 = { kind: "user", name: "2026-09-mobile-nitro-upsell-in-shop-feed", defaultConfig: { enabled: false, buttonVariant: obj.GET_NITRO }, variations: obj3 };
obj3 = { 0: { enabled: false, buttonVariant: obj.GET_NITRO }, 1: { enabled: true, buttonVariant: obj.GET_NITRO }, 2: { enabled: true, buttonVariant: obj.LEARN_MORE } };
const tmp2 = apex_ApexExperimentDefault(obj2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx");

export default tmp2;
export const NitroUpsellBannerButtonVariant = obj;
