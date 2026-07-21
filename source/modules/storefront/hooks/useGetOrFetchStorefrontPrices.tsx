// Module ID: 8676
// Function ID: 68724
// Name: useGetOrFetchStorefrontPricesForApplicationId
// Dependencies: []
// Exports: useGetOrFetchStorefrontPricesForApplicationId, useGetOrFetchStorefrontPricesForSkuIds

// Module 8676 (useGetOrFetchStorefrontPricesForApplicationId)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const items = [applicationId];
  const effect = React.useEffect(() => {
    if (null != applicationId) {
      let obj = applicationId(closure_1[1]);
      obj = { applicationId };
      const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj);
    }
  }, items);
};
export const useGetOrFetchStorefrontPricesForSkuIds = function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  const arg1 = skuIds;
  const items = [skuIds];
  const effect = React.useEffect(() => {
    if (0 !== skuIds.length) {
      let obj = skuIds(closure_1[1]);
      obj = { skuIds };
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj);
    }
  }, items);
};
