// Module ID: 7725
// Function ID: 7726
// Name: MobileTrialUtils
// Dependencies: [1378, 558, 7726, 4611, 2031, 568, 13646, 4450, 1119, 2]

// Module 7725 (MobileTrialUtils)
import c from "c" /* 568 */;
import PremiumConstants from "PremiumConstants" /* 1378 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4611 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7726 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const dependencyMap = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let tmp3 = null != premiumTrialOffer;
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
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
}) : (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let tmp3 = null != premiumTrialOffer;
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE);
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
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  return dependencyMap[skuId];
}) : (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  return dependencyMap[skuId];
});
let result = size.fileFinishedImporting("modules/premium/native/MobileTrialUtils.tsx");

export const useShouldShowPremiumTrialUserSettingsAvatarBadge = tmp2;
export const usePremiumTrialOfferPremiumType = tmp3;
export const useNitroTrialCtaOverride = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(3);
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    const obj3 = { location };
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj3)) {
      if (cResult[0] === subscriptionTrial.interval) {
        if (cResult[1] === subscriptionTrial.intervalCount) {
          let tmp6 = cResult[2];
        }
        return tmp6;
      }
      ({ interval: obj4.intervalType, intervalCount: obj4.intervalCount } = subscriptionTrial);
      const result = tmp(4450).formatIntervalDuration({ intervalType: null, intervalCount: null });
      const intl = tmp(1119).intl;
      const obj6 = { duration: result };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t["6xpY54"], obj6);
      cResult[0] = subscriptionTrial.interval;
      cResult[1] = subscriptionTrial.intervalCount;
      cResult[2] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
      const obj5 = { intervalType: null, intervalCount: null };
      const tmpResult2 = tmp(4450);
    } else {
      return null;
    }
    tmpResult = tmp(13646);
  }
}) : ((location) => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let subscriptionTrial;
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  if (null == subscriptionTrial) {
    return null;
  } else {
    const obj2 = { location };
    if (tmpResult.isAndroidTwoWeekTrialsTrialCTAEnabled(obj2)) {
      ({ interval: obj3.intervalType, intervalCount: obj3.intervalCount } = subscriptionTrial);
      const result = tmp(4450).formatIntervalDuration({ intervalType: null, intervalCount: null });
      const intl = tmp(1119).intl;
      const obj5 = { duration: result };
      return intl.formatToPlainString(tmp(1119).t["6xpY54"], obj5);
    } else {
      return null;
    }
    tmpResult = tmp(13646);
  }
});
