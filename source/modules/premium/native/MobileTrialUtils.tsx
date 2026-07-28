// Module ID: 6221
// Function ID: 55649
// Name: useShouldShowPremiumTrialUserSettingsAvatarBadge
// Dependencies: [1852, 6222, 3981, 1334, 6225, 3811, 1212, 2]
// Exports: useNitroTrialCtaOverride, usePremiumTrialOfferPremiumType, useShouldShowPremiumTrialUserSettingsAvatarBadge

// Module 6221 (useShouldShowPremiumTrialUserSettingsAvatarBadge)
import { PremiumSubscriptionSKUToPremiumType as closure_2 } from "GuildFeatures";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  let expires_at;
  const premiumTrialOffer = require(6222) /* usePremiumTrialOffer */.usePremiumTrialOffer();
  const obj = require(6222) /* usePremiumTrialOffer */;
  const result = require(3981) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1334) /* DismissibleContent */.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (null != premiumTrialOffer) {
    expires_at = premiumTrialOffer.expires_at;
  }
  return null != premiumTrialOffer && null == expires_at && !result;
};
export const usePremiumTrialOfferPremiumType = function usePremiumTrialOfferPremiumType() {
  const premiumTrialOffer = require(6222) /* usePremiumTrialOffer */.usePremiumTrialOffer();
  let sku_id;
  if (null != premiumTrialOffer) {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
  }
  return table[sku_id];
};
export const useNitroTrialCtaOverride = function useNitroTrialCtaOverride(user_profile_premium_upsell_card) {
  let obj = require(6222) /* usePremiumTrialOffer */;
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
      let obj1 = require(3811) /* _createForOfIteratorHelperLoose */;
      obj = {};
      ({ interval: obj3.intervalType, interval_count: obj3.intervalCount } = subscription_trial);
      const result = obj1.formatIntervalDuration(obj);
      const intl = require(1212) /* getSystemLocale */.intl;
      obj1 = { duration: result };
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["6xpY54"], obj1);
    } else {
      return null;
    }
    obj5 = require(6225) /* apexExperiment */;
  }
};
