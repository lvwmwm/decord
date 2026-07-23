// Module ID: 7127
// Function ID: 57274
// Name: useGetDiscountOffer
// Dependencies: [5621, 1851, 7128, 5624, 624, 2]
// Exports: usePremiumDiscountOffer, usePremiumGroupDiscountOffer

// Module 7127 (useGetDiscountOffer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_4;
let closure_5;
const require = arg1;
function useGetDiscountOffer(closure_4, offerIds) {
  const _require = offerIds;
  const values = Object.values(_require(5624).DiscountIdToProductOfferId[closure_4]);
  let tmp2 = null;
  if (0 !== values.length) {
    let tmp3 = null;
    if (values.every((arg0) => offerIds.has(arg0))) {
      tmp3 = tmp;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_5 } = GuildFeatures);
const result = require("useDiscountOffer").fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = function usePremiumDiscountOffer() {
  const items = [_isNativeReflectConstruct];
  const offerIds = require(624) /* defaultAreStatesEqual */.useStateFromStoresObject(items, () => ({ isFetchingProducts: outer1_3.isFetchingProducts(), offerIds: outer1_3.getOfferIds() })).offerIds;
  const tmp = useGetDiscountOffer(closure_4, offerIds);
  let tmp2 = useGetDiscountOffer(closure_5, offerIds);
  if (null != tmp) {
    tmp2 = tmp;
  }
  return tmp2;
};
export function usePremiumGroupDiscountOffer() {
  return null;
}
