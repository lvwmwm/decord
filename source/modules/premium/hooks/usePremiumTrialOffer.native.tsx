// Module ID: 6686
// Function ID: 51448
// Name: useGetTrialOffer
// Dependencies: [5621, 1851, 6687, 5624, 624, 2]
// Exports: usePremiumTrialOffer

// Module 6686 (useGetTrialOffer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function useGetTrialOffer(closure_3, offerIds) {
  const _require = offerIds;
  const trialOffer = _require(6687).useTrialOffer(closure_3);
  const values = Object.values(_require(5624).TrialIdToProductOfferId[closure_3]);
  let tmp2 = null;
  if (values.every((arg0) => offerIds.has(arg0))) {
    tmp2 = trialOffer;
  }
  return tmp2;
}
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: closure_3, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_4, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: closure_5, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_6, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_7, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: closure_8 } = GuildFeatures);
const result = require("hasUserTrialOfferExpired").fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.native.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer() {
  const items = [_isNativeReflectConstruct];
  const offerIds = require(624) /* defaultAreStatesEqual */.useStateFromStoresObject(items, () => ({ isFetchingProducts: outer1_2.isFetchingProducts(), offerIds: outer1_2.getOfferIds() })).offerIds;
  const obj = require(624) /* defaultAreStatesEqual */;
  const tmp = useGetTrialOffer(closure_6, offerIds);
  const tmp2 = useGetTrialOffer(closure_3, offerIds);
  const tmp3 = useGetTrialOffer(closure_4, offerIds);
  const items1 = [useGetTrialOffer(closure_7, offerIds), tmp, tmp2, tmp3, useGetTrialOffer(closure_8, offerIds), useGetTrialOffer(closure_5, offerIds)];
  return items1.find((arg0) => null != arg0);
};
