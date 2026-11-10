// Module ID: 9479
// Function ID: 9480
// Name: useGetOrFetchStorefrontPrices
// Dependencies: [19, 9480, 2]
// Exports: useGetOrFetchStorefrontPricesForApplicationId, useGetOrFetchStorefrontPricesForSkuIds

// Module 9479 (useGetOrFetchStorefrontPrices)
import StorefrontActionCreators from "StorefrontActionCreators" /* 9480 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = react.useEffect(() => {
    if (null != applicationId) {
      const obj2 = { applicationId: tmp };
      const obj = StorefrontActionCreators;
      const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj2);
    }
  }, items);
}
export function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  const items = [skuIds];
  const effect = react.useEffect(() => {
    if (0 !== skuIds.length) {
      const obj2 = { skuIds: tmp };
      const obj = StorefrontActionCreators;
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj2);
    }
  }, items);
}
