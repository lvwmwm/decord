// Module ID: 6681
// Function ID: 51397
// Name: useGetTrialOffer
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: usePremiumTrialOffer

// Module 6681 (useGetTrialOffer)
import closure_2 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function useGetTrialOffer(closure_3, offerIds) {
  const trialOffer = offerIds(dependencyMap[2]).useTrialOffer(closure_3);
  const values = Object.values(offerIds(dependencyMap[3]).TrialIdToProductOfferId[closure_3]);
  let tmp2 = null;
  if (values.every((arg0) => arg1.has(arg0))) {
    tmp2 = trialOffer;
  }
  return tmp2;
}
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: closure_3, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_4, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: closure_5, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_6, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_7, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: closure_8 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.native.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer() {
  const items = [closure_2];
  const offerIds = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ isFetchingProducts: closure_2.isFetchingProducts(), offerIds: closure_2.getOfferIds() })).offerIds;
  const obj = arg1(dependencyMap[4]);
  const tmp = useGetTrialOffer(closure_6, offerIds);
  const tmp2 = useGetTrialOffer(closure_3, offerIds);
  const tmp3 = useGetTrialOffer(closure_4, offerIds);
  const items1 = [useGetTrialOffer(closure_7, offerIds), tmp, tmp2, tmp3, useGetTrialOffer(closure_8, offerIds), useGetTrialOffer(closure_5, offerIds)];
  return items1.find((arg0) => null != arg0);
};
