// Module ID: 7626
// Function ID: 7627
// Name: MobileTrialUtils
// Dependencies: [1385, 7627, 5044, 4847, 15220, 2047, 1113, 2]
// Exports: useNitroTrialCtaOverride, usePremiumTrialOfferPremiumType, useShouldShowPremiumTrialUserSettingsAvatarBadge

// Module 7626 (MobileTrialUtils)
import intl2 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7627 */;
import AndroidTwoWeekTrialsExperiment from "AndroidTwoWeekTrialsExperiment" /* 15220 */;
import size from "module_2" /* 2 */;

let closure_2 = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
let result = size.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let tmp3 = null != premiumTrialOffer;
  const obj2 = DismissibleContentUnsafeUtils;
  const result = obj2.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
  if (tmp3) {
    let hasAcknowledged;
    if (premiumTrialOffer != null) {
      hasAcknowledged = premiumTrialOffer.hasAcknowledged;
    }
    tmp3 = true !== hasAcknowledged;
  }
  if (tmp3) {
    tmp3 = !result;
  }
  return tmp3;
}
export function usePremiumTrialOfferPremiumType() {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  return closure_2[skuId];
}
export function useNitroTrialCtaOverride(user_profile_premium_upsell_card) {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    const obj2 = { location: user_profile_premium_upsell_card };
    const tmpResult = AndroidTwoWeekTrialsExperiment;
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj2)) {
      const obj4 = { intervalType: null, intervalCount: null };
      ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
      const tmpResult2 = PremiumUtils;
      const result = tmpResult2.formatIntervalDuration(obj4);
      const intl = tmp(1113).intl;
      const obj5 = { duration: result };
      return intl.formatToPlainString(intl2.t["6xpY54"], obj5);
    } else {
      return null;
    }
  }
}
