// Module ID: 9247
// Function ID: 9248
// Name: usePremiumDiscountOffer
// Dependencies: [9236, 1387, 9248, 8514, 563, 2]
// Exports: usePremiumDiscountOffer

// Module 9247 (usePremiumDiscountOffer)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ProductIds from "ProductIds" /* 8514 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 9248 */;
import IAPStore from "IAPStore" /* 9236 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: hasOwnProperty } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export function usePremiumDiscountOffer() {
  const f96803 = (item) => offerIds.has(item);
  let obj = useStateFromStores;
  const items = [IAPStore];
  const offerIds = obj.useStateFromStoresObject(items, () => {
    const obj = { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
    return obj;
  }).offerIds;
  const tmp4 = useDiscountOfferDefault(React3);
  const values = Object.values(ProductIds.DiscountIdToProductOfferId[React3]);
  let tmp5 = null;
  if (0 !== values.length) {
    let tmp6 = null;
    if (values.every(f96803)) {
      tmp6 = tmp4;
    }
    tmp5 = tmp6;
  }
  const tmp7 = useDiscountOfferDefault(hasOwnProperty);
  const values2 = Object.values(ProductIds.DiscountIdToProductOfferId[hasOwnProperty]);
  let tmp8 = null;
  if (0 !== values2.length) {
    let tmp9 = null;
    if (values2.every(f96803)) {
      tmp9 = tmp7;
    }
    tmp8 = tmp9;
  }
  if (tmp5 == null) {
    tmp5 = tmp8;
  }
  return tmp5;
}
