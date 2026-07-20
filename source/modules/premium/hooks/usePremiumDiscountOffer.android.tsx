// Module ID: 7117
// Function ID: 57206
// Name: useGetDiscountOffer
// Dependencies: []
// Exports: usePremiumDiscountOffer, usePremiumGroupDiscountOffer

// Module 7117 (useGetDiscountOffer)
function useGetDiscountOffer(closure_4, offerIds) {
  const values = Object.values(offerIds(dependencyMap[3]).DiscountIdToProductOfferId[closure_4]);
  let tmp2 = null;
  if (0 !== values.length) {
    let tmp3 = null;
    if (values.every((arg0) => arg1.has(arg0))) {
      tmp3 = tmp;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = function usePremiumDiscountOffer() {
  const items = [closure_3];
  const offerIds = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ isFetchingProducts: closure_3.isFetchingProducts(), offerIds: closure_3.getOfferIds() })).offerIds;
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
