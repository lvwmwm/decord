// Module ID: 7503
// Function ID: 7504
// Name: PremiumSubscriptionTrialUtil
// Dependencies: [1372, 4494, 6870, 1374, 504, 2]
// Exports: getPremiumTrialOffer, hasActiveTrial, isEligibleTrialSub, useCurrentPremiumTrialTier, useHasActiveTrial

// Module 7503 (PremiumSubscriptionTrialUtil)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import UserOfferStore from "UserOfferStore" /* 6870 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: hasOwnProperty, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: metroRequire, PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID: metroImportDefault, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: metroImportAll, PREMIUM_TRIAL_IDS_ALL: c9 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionTrialUtil.tsx");

export const useHasActiveTrial = function useHasActiveTrial() {
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  return hasActiveTrial;
};
export const hasActiveTrial = function hasActiveTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  let trialId;
  if (premiumTypeSubscription != null) {
    trialId = premiumTypeSubscription.trialId;
  }
  return null != trialId;
};
export const isEligibleTrialSub = function isEligibleTrialSub(trialId) {
  trialId = undefined;
  if (trialId != null) {
    trialId = trialId.trialId;
  }
  let tmp2 = null != trialId;
  if (tmp2) {
    tmp2 = trialId.trialId === hasOwnProperty || trialId.trialId === metroRequire || trialId.trialId === metroImportDefault || trialId.trialId === metroImportAll;
    const tmp4 = trialId.trialId === hasOwnProperty || trialId.trialId === metroRequire || trialId.trialId === metroImportDefault || trialId.trialId === metroImportAll;
  }
  return tmp2;
};
export const useCurrentPremiumTrialTier = function useCurrentPremiumTrialTier() {
  let currentUser;
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items1 = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let hasActiveTrial;
  if (stateFromStores != null) {
    hasActiveTrial = stateFromStores.hasActiveTrial;
  }
  let tmp4 = null;
  if (hasActiveTrial) {
    let premiumType;
    if (stateFromStores1 != null) {
      premiumType = stateFromStores1.premiumType;
    }
    tmp4 = premiumType;
  }
  return tmp4;
};
export const getPremiumTrialOffer = function getPremiumTrialOffer() {
  let userTrialOffer;
  const mapped = React4.map((item) => userTrialOffer.getUserTrialOffer(item));
  const found = mapped.filter((hasExpired) => null != hasExpired && !hasExpired.hasExpired);
  return found.shift();
};
