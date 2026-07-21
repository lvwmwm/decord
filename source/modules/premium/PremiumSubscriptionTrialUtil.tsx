// Module ID: 7421
// Function ID: 59638
// Name: useHasActiveTrial
// Dependencies: []
// Exports: getPremiumTrialOffer, hasActiveTrial, isEligibleTrialSub, useCurrentPremiumTrialTier, useHasActiveTrial

// Module 7421 (useHasActiveTrial)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: closure_5, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_6, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: closure_7, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_8, PREMIUM_TRIAL_IDS_ALL: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = function useHasActiveTrial() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  return !(null == stateFromStores || !stateFromStores.hasActiveTrial);
};
export const hasActiveTrial = function hasActiveTrial() {
  const premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
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
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_2];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => currentUser.getCurrentUser());
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
  const mapped = closure_9.map((arg0) => userTrialOffer.getUserTrialOffer(arg0));
  const found = mapped.filter((stateFromStores) => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = !callback(closure_1[5]).hasUserTrialOfferExpired(stateFromStores);
      const obj = callback(closure_1[5]);
    }
    return tmp;
  });
  return found.shift();
};
