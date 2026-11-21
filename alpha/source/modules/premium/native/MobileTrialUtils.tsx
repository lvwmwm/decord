// Module ID: 9126
// Function ID: 9127
// Name: MobileTrialUtils
// Dependencies: [1388, 8859, 4945, 4746, 2173, 1112, 2]
// Exports: useNitroTrialCtaOverride, usePremiumTrialOfferPremiumType, useShouldShowPremiumTrialUserSettingsAvatarBadge

// Module 9126 (MobileTrialUtils)
import intl2 from "intl" /* 1112 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumUtils from "PremiumUtils" /* 2173 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4945 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 8859 */;
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
export function useNitroTrialCtaOverride() {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    const obj2 = { intervalType: null, intervalCount: null };
    ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
    const tmpResult = PremiumUtils;
    const result = tmpResult.formatIntervalDuration(obj2);
    const intl = tmp(1112).intl;
    const obj4 = { duration: result };
    return intl.formatToPlainString(intl2.t["6xpY54"], obj4);
  }
}
