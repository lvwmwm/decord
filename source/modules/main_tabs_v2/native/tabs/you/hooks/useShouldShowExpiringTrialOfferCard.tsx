// Module ID: 15537
// Function ID: 119567
// Name: useShouldShowExpiringTrialOfferCard
// Dependencies: [12697, 653, 1851, 664, 624, 6686, 6678, 2]
// Exports: useShouldShowExpiringTrialOfferCard

// Module 15537 (useShouldShowExpiringTrialOfferCard)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NoticeTypes } from "ME";
import { PremiumSubscriptionSKUs } from "GuildFeatures";

const require = arg1;
let closure_6 = 10 * require("set").Millis.SECOND;
const result = require("GuildFeatures").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx");

export const useShouldShowExpiringTrialOfferCard = function useShouldShowExpiringTrialOfferCard() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_3.getNoticeType());
  const obj = require(624) /* defaultAreStatesEqual */;
  const premiumTrialOffer = require(6686) /* useGetTrialOffer */.usePremiumTrialOffer();
  let num = 0;
  const obj2 = require(6686) /* useGetTrialOffer */;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expires_at) {
      const _Date = Date;
      num = Date.parse(premiumTrialOffer.expires_at);
    }
  }
  let tmp6 = null != premiumTrialOffer;
  const tmp3 = importDefault(6678);
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
