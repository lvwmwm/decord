// Module ID: 7417
// Function ID: 7418
// Name: useShouldShowPremiumTrialUserSettingsAvatarBadge
// Dependencies: [1924, 7418, 4196, 1377, 7612, 4039, 1236, 2]
// Exports: useNitroTrialCtaOverride, usePremiumTrialOfferPremiumType, useShouldShowPremiumTrialUserSettingsAvatarBadge

// Module 7417 (useShouldShowPremiumTrialUserSettingsAvatarBadge)
import { PremiumSubscriptionSKUToPremiumType as closure_2 } from "GuildFeatures";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  const premiumTrialOffer = require(7418) /* usePremiumTrialOffer */.usePremiumTrialOffer();
  const obj = require(7418) /* usePremiumTrialOffer */;
  let tmp3 = null != premiumTrialOffer;
  const result = require(4196) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1377) /* DismissibleContent */.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (tmp3) {
    let expiresAt;
    if (premiumTrialOffer != null) {
      expiresAt = premiumTrialOffer.expiresAt;
    }
    tmp3 = null == expiresAt;
  }
  if (tmp3) {
    tmp3 = !result;
  }
  return tmp3;
};
export const usePremiumTrialOfferPremiumType = function usePremiumTrialOfferPremiumType() {
  const premiumTrialOffer = require(7418) /* usePremiumTrialOffer */.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  return table[skuId];
};
export const useNitroTrialCtaOverride = function useNitroTrialCtaOverride(user_profile_premium_upsell_card) {
  let obj = require(7418) /* usePremiumTrialOffer */;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    let tmpResult = tmp(7612);
    obj = { location: null };
    obj[0] = user_profile_premium_upsell_card;
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj)) {
      tmpResult = tmp(4039);
      obj = { intervalType: null, intervalCount: null };
      ({ interval: obj3[0], intervalCount: obj3[1] } = subscriptionTrial);
      const result = tmpResult.formatIntervalDuration(obj);
      const intl = tmp(1236).intl;
      const obj1 = { duration: null };
      obj1[0] = result;
      return intl.formatToPlainString(tmp(1236).t["6xpY54"], obj1);
    } else {
      return null;
    }
  }
};
