// Module ID: 7426
// Function ID: 59683
// Name: useHasActiveTrial
// Dependencies: [1849, 3782, 6688, 1851, 566, 6687, 2]
// Exports: getPremiumTrialOffer, hasActiveTrial, isEligibleTrialSub, useCurrentPremiumTrialTier, useHasActiveTrial

// Module 7426 (useHasActiveTrial)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GuildFeatures from "GuildFeatures";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: closure_5, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_6, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: closure_7, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_8, PREMIUM_TRIAL_IDS_ALL: closure_9 } = GuildFeatures);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = function useHasActiveTrial() {
  const items = [closure_3];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getPremiumTypeSubscription());
  return !(null == stateFromStores || !stateFromStores.hasActiveTrial);
};
export const hasActiveTrial = function hasActiveTrial() {
  premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
  let trialId;
  if (null != premiumTypeSubscription) {
    trialId = premiumTypeSubscription.trialId;
  }
  return null != trialId;
};
export const isEligibleTrialSub = function isEligibleTrialSub(trialId) {
  trialId = undefined;
  if (null != trialId) {
    trialId = trialId.trialId;
  }
  let tmp2 = null != trialId;
  if (tmp2) {
    let tmp4 = trialId.trialId === closure_5;
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_6;
    }
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_7;
    }
    if (!tmp4) {
      tmp4 = trialId.trialId === closure_8;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const useCurrentPremiumTrialTier = function useCurrentPremiumTrialTier() {
  const items = [closure_3];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getPremiumTypeSubscription());
  const obj = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_2.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (stateFromStores.hasActiveTrial) {
      let premiumType;
      if (null != stateFromStores1) {
        premiumType = stateFromStores1.premiumType;
      }
      tmp3 = premiumType;
    }
  }
  return tmp3;
};
export const getPremiumTrialOffer = function getPremiumTrialOffer() {
  const mapped = closure_9.map((arg0) => outer1_4.getUserTrialOffer(arg0));
  const found = mapped.filter((stateFromStores) => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = !outer1_0(outer1_1[5]).hasUserTrialOfferExpired(stateFromStores);
      const obj = outer1_0(outer1_1[5]);
    }
    return tmp;
  });
  return found.shift();
};
