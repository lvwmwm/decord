// Module ID: 15355
// Function ID: 116965
// Name: useShouldShowExpiringTrialOfferCard
// Dependencies: []
// Exports: useShouldShowExpiringTrialOfferCard

// Module 15355 (useShouldShowExpiringTrialOfferCard)
let closure_3 = importDefault(dependencyMap[0]);
const NoticeTypes = arg1(dependencyMap[1]).NoticeTypes;
const PremiumSubscriptionSKUs = arg1(dependencyMap[2]).PremiumSubscriptionSKUs;
let closure_6 = 10 * importDefault(dependencyMap[3]).Millis.SECOND;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => noticeType.getNoticeType());
  const obj = arg1(dependencyMap[4]);
  const premiumTrialOffer = arg1(dependencyMap[5]).usePremiumTrialOffer();
  let num = 0;
  const obj2 = arg1(dependencyMap[5]);
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expires_at) {
      const _Date = Date;
      num = Date.parse(premiumTrialOffer.expires_at);
    }
  }
  let tmp6 = null != premiumTrialOffer;
  const tmp3 = importDefault(dependencyMap[6]);
  if (tmp6) {
    tmp6 = null != stateFromStores;
  }
  if (tmp6) {
    let tmp8 = stateFromStores === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING;
    if (!tmp8) {
      tmp8 = stateFromStores === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING;
    }
    tmp6 = tmp8;
  }
  if (!tmp6) {
    if (tmp6) {
      tmp6 = null != premiumTrialOffer.expires_at;
    }
    if (tmp6) {
      const _Object = Object;
      const values = Object.values(tmp3Result);
      tmp6 = !values.every((arg0) => 0 === arg0);
    }
    return tmp6;
  } else {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    let sku_id;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
    if (null == stateFromStores) {
      let TIER_0 = PremiumSubscriptionSKUs.NONE;
    } else {
      if (NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.TIER_2;
      } else if (NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING !== stateFromStores) {
        TIER_0 = PremiumSubscriptionSKUs.NONE;
      }
      TIER_0 = PremiumSubscriptionSKUs.TIER_0;
    }
  }
};
