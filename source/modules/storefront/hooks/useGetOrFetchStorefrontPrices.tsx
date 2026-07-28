// Module ID: 8657
// Function ID: 68617
// Name: useGetOrFetchStorefrontPricesForApplicationId
// Dependencies: [31, 8658, 2]
// Exports: useGetOrFetchStorefrontPricesForApplicationId, useGetOrFetchStorefrontPricesForSkuIds

// Module 8657 (useGetOrFetchStorefrontPricesForApplicationId)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = React.useEffect(() => {
    if (null != applicationId) {
      let obj = applicationId(outer1_1[1]);
      obj = { applicationId };
      const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj);
    }
  }, items);
};
export const useGetOrFetchStorefrontPricesForSkuIds = function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  const items = [skuIds];
  const effect = React.useEffect(() => {
    if (0 !== skuIds.length) {
      let obj = skuIds(outer1_1[1]);
      obj = { skuIds };
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj);
    }
  }, items);
};
