// Module ID: 16625
// Function ID: 16626
// Name: useShouldShowExpiringTrialOfferCard
// Dependencies: [13266, 1074, 1374, 1091, 563, 6867, 6859, 2]
// Exports: useShouldShowExpiringTrialOfferCard

// Module 16625 (useShouldShowExpiringTrialOfferCard)
import useStateFromStores from "useStateFromStores" /* 563 */;
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import useCountdownDefault from "useCountdown" /* 6859 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6867 */;
import NoticeStore from "NoticeStore" /* 13266 */;
import size from "module_2" /* 2 */;

const NoticeTypes = Constants.NoticeTypes;
const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
let closure_6 = 10 * DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  let noticeType;
  const items = [NoticeStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => noticeType.getNoticeType());
  const obj2 = usePremiumTrialOffer;
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  let num = 0;
  const tmp3 = useCountdownDefault;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  let tmp5 = null != premiumTrialOffer;
  const tmp3Result = tmp3(num, closure_6);
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING || stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
  }
  if (tmp5) {
    let NONE;
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    if (null == stateFromStores) {
      NONE = PremiumSubscriptionSKUs.NONE;
    } else if (NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
      NONE = PremiumSubscriptionSKUs.TIER_2;
    } else if (tmp8.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
      NONE = PremiumSubscriptionSKUs.TIER_0;
    } else {
      NONE = PremiumSubscriptionSKUs.NONE;
    }
    tmp5 = skuId === NONE;
  }
  if (tmp5) {
    tmp5 = null != premiumTrialOffer.expiresAt;
  }
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(tmp3Result);
    tmp5 = !values.every((item) => 0 === item);
  }
  return tmp5;
};
