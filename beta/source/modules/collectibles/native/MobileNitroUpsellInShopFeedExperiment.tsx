// Module ID: 16131
// Function ID: 16132
// Name: MobileNitroUpsellInShopFeedExperiment
// Dependencies: [1439, 2]

// Module 16131 (MobileNitroUpsellInShopFeedExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/MobileNitroUpsellInShopFeedExperiment.tsx");

export default apex_ApexExperimentDefault({ kind: "user", name: "2026-09-mobile-nitro-upsell-in-shop-feed", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
