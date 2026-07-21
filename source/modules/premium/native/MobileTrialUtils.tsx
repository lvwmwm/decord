// Module ID: 6680
// Function ID: 51393
// Name: useShouldShowPremiumTrialUserSettingsAvatarBadge
// Dependencies: []
// Exports: useNitroTrialCtaOverride, usePremiumTrialOfferPremiumType, useShouldShowPremiumTrialUserSettingsAvatarBadge

// Module 6680 (useShouldShowPremiumTrialUserSettingsAvatarBadge)
let closure_2 = require(dependencyMap[0]).PremiumSubscriptionSKUToPremiumType;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  let expires_at;
  const premiumTrialOffer = require(dependencyMap[1]).usePremiumTrialOffer();
  const obj = require(dependencyMap[1]);
  const result = require(dependencyMap[2]).useIsDismissibleContentDismissed_UNSAFE(require(dependencyMap[3]).DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (null != premiumTrialOffer) {
    expires_at = premiumTrialOffer.expires_at;
  }
  return null != premiumTrialOffer && null == expires_at && !result;
};
export const usePremiumTrialOfferPremiumType = function usePremiumTrialOfferPremiumType() {
  const premiumTrialOffer = require(dependencyMap[1]).usePremiumTrialOffer();
  let sku_id;
  if (null != premiumTrialOffer) {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
  }
  return closure_2[sku_id];
};
export const useNitroTrialCtaOverride = function useNitroTrialCtaOverride(user_profile_premium_upsell_card) {
  let obj = require(dependencyMap[1]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let subscription_trial;
  if (null != premiumTrialOffer) {
    subscription_trial = premiumTrialOffer.subscription_trial;
  }
  if (null == subscription_trial) {
    return null;
  } else {
    obj = { location: user_profile_premium_upsell_card };
    if (obj5.isAndroidTwoWeekTrialsTrialCTAEnabled(obj)) {
      let obj1 = require(dependencyMap[5]);
      obj = {};
      ({ interval: obj3.intervalType, interval_count: obj3.intervalCount } = subscription_trial);
      const result = obj1.formatIntervalDuration(obj);
      const intl = require(dependencyMap[6]).intl;
      obj1 = { duration: result };
      return intl.formatToPlainString(require(dependencyMap[6]).t.6xpY54, obj1);
    } else {
      return null;
    }
    const obj5 = require(dependencyMap[4]);
  }
};
