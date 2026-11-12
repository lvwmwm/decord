// Module ID: 15323
// Function ID: 15324
// Name: CollectiblesPromotionsEndpointMobileExperiment
// Dependencies: [1449, 2]
// Exports: useCollectiblesPromotionEndpointReferenceMobile

// Module 15323 (CollectiblesPromotionsEndpointMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-collectibles-promotion-endpoint-reference-mobile", kind: "user", defaultConfig: { useEndpoint: false }, variations: { 0: { useEndpoint: false }, 1: { useEndpoint: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesPromotionsEndpointMobileExperiment.tsx");

export default apexExperiment;
export function useCollectiblesPromotionEndpointReferenceMobile(CollectiblesShopV2) {
  const obj = { location: CollectiblesShopV2 };
  return apexExperiment.useConfig(obj).useEndpoint;
}
