// Module ID: 16121
// Function ID: 16122
// Name: MobileNitroUpsellInShopFeedExperiment
// Dependencies: [1439, 2]

// Module 16121 (MobileNitroUpsellInShopFeedExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx");

export default apex_ApexExperimentDefault({ kind: "user", name: "2026-09-mobile-nitro-upsell-in-shop-feed", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
