// Module ID: 14080
// Function ID: 14081
// Name: MobileRoadblockCtaUtils
// Dependencies: [1394, 1128, 2053, 9833, 14081, 2]
// Exports: formatMobileRoadblockOfferText, getMobileRoadblockButtonText

// Module 14080 (MobileRoadblockCtaUtils)
import intl3 from "intl" /* 1128 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumUtils from "PremiumUtils" /* 2053 */;
import getTrialCtaOverride from "getTrialCtaOverride" /* 9833 */;
import MobileRoadblockOfferCtaExperiment from "MobileRoadblockOfferCtaExperiment" /* 14081 */;
import size from "module_2" /* 2 */;

const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/MobileRoadblockCtaUtils.tsx");

export const formatMobileRoadblockOfferText = function formatMobileRoadblockOfferText(arg0) {
  let discountOffer;
  let subscriptionTier;
  let trialOffer;
  ({ subscriptionTier, trialOffer, discountOffer } = arg0);
  if (subscriptionTier !== PremiumSubscriptionSKUs.TIER_2) {
    return null;
  } else if (null != discountOffer) {
    const intl = intl3.intl;
    const obj3 = { percent: discountOffer.discount.amount };
    return intl.formatToPlainString(intl3.t.bkQ4bH, obj3);
  } else {
    let subscriptionTrial;
    if (trialOffer != null) {
      subscriptionTrial = trialOffer.subscriptionTrial;
    }
    let result = null;
    if (null != trialOffer) {
      result = null;
      if (null != subscriptionTrial) {
        result = null;
        if (subscriptionTrial.skuId === subscriptionTier) {
          result = null;
          if (!trialOffer.isReferralTrial) {
            const obj5 = { intervalType: null, intervalCount: null };
            ({ interval: obj2.intervalType, intervalCount: obj2.intervalCount } = subscriptionTrial);
            const obj = PremiumUtils;
            result = obj.formatTrialCtaIntervalDuration(obj5);
          }
        }
      }
    }
    return result;
  }
};
export const getMobileRoadblockButtonText = function getMobileRoadblockButtonText(arg0) {
  let discountOffer;
  let subscriptionTier;
  let trialOffer;
  ({ subscriptionTier, trialOffer, discountOffer } = arg0);
  let isReferralTrial;
  if (trialOffer != null) {
    isReferralTrial = trialOffer.isReferralTrial;
  }
  if (true === isReferralTrial) {
    const obj5 = getTrialCtaOverride;
    return obj5.getTrialCtaOverride(trialOffer, subscriptionTier);
  } else {
    let formatToPlainStringResult = null;
    if (subscriptionTier === PremiumSubscriptionSKUs.TIER_2) {
      if (null != discountOffer) {
        const intl = intl3.intl;
        const obj3 = { percent: discountOffer.discount.amount };
        formatToPlainStringResult = intl.formatToPlainString(intl3.t.bkQ4bH, obj3);
      } else {
        let subscriptionTrial;
        if (trialOffer != null) {
          subscriptionTrial = trialOffer.subscriptionTrial;
        }
        let result = null;
        if (null != trialOffer) {
          result = null;
          if (null != subscriptionTrial) {
            result = null;
            if (subscriptionTrial.skuId === subscriptionTier) {
              result = null;
              if (!trialOffer.isReferralTrial) {
                const obj7 = { intervalType: null, intervalCount: null };
                ({ interval: obj2.intervalType, intervalCount: obj2.intervalCount } = subscriptionTrial);
                const obj = PremiumUtils;
                result = obj.formatTrialCtaIntervalDuration(obj7);
              }
            }
          }
        }
        formatToPlainStringResult = result;
      }
    }
    let tmp8 = null;
    if (null != formatToPlainStringResult) {
      const obj4 = MobileRoadblockOfferCtaExperiment;
      if (!obj4.getMobileRoadblockOfferCtaEnabled()) {
        const intl2 = tmp9(1128).intl;
        formatToPlainStringResult = intl2.string(tmp9(1128).t["8x0jKT"]);
      }
      tmp8 = formatToPlainStringResult;
    }
    return tmp8;
  }
};
