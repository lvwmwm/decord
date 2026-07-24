// Module ID: 12477
// Function ID: 96798
// Name: useOpenPremiumMarketingPayment
// Dependencies: [31, 653, 1851, 5462, 6686, 6685, 6661, 1212, 3776, 2]
// Exports: default

// Module 12477 (useOpenPremiumMarketingPayment)
import result from "result";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_4;
let closure_5;
const require = arg1;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = ME);
({ SubscriptionIntervalTypes: closure_4, PremiumTypes: closure_5 } = GuildFeatures);
let closure_6 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const result = require("GuildFeatures").fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default function useOpenPremiumMarketingPayment(arg0) {
  const analyticsLocations = premiumTrialOffer(premiumTrialOfferPremiumType[3])(arg0).analyticsLocations;
  let obj = analyticsLocations(premiumTrialOfferPremiumType[4]);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  premiumTrialOfferPremiumType = analyticsLocations(premiumTrialOfferPremiumType[5]).usePremiumTrialOfferPremiumType();
  obj = {
    openPayment: React.useCallback(() => {
      const obj = { analyticsLocation: outer1_6, analyticsLocations };
      let fn;
      if (null == premiumTrialOfferPremiumType) {
        fn = (additionalPlans) => {
          let interval;
          let numPremiumGuild;
          let premiumTier;
          let tmp = 0 === additionalPlans.additionalPlans.length;
          ({ numPremiumGuild, interval, premiumTier } = additionalPlans);
          if (tmp) {
            tmp = !additionalPlans.isDeprecated;
          }
          if (tmp) {
            tmp = 0 === numPremiumGuild;
          }
          if (tmp) {
            tmp = interval === outer2_4.MONTH;
          }
          if (tmp) {
            tmp = premiumTier !== outer2_5.TIER_1;
          }
          return tmp;
        };
      }
      obj.predicate = fn;
      let fn2;
      if (null == premiumTrialOfferPremiumType) {
        fn2 = (premiumTier) => premiumTier.premiumTier === outer2_5.TIER_2;
      }
      obj.initialSelectedCriteria = fn2;
      obj.premiumType = premiumTrialOfferPremiumType;
      obj.showFormTitle = false;
      premiumTrialOffer(premiumTrialOfferPremiumType[6])(obj);
    }, items)
  };
  items = [analyticsLocations, premiumTrialOfferPremiumType];
  let interval;
  if (null != premiumTrialOffer) {
    let subscription_trial = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      interval = subscription_trial.interval;
    }
  }
  const items1 = [interval, , ];
  let interval_count;
  if (null != premiumTrialOffer) {
    let subscription_trial2 = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial2) {
      interval_count = subscription_trial2.interval_count;
    }
  }
  items1[1] = interval_count;
  items1[2] = premiumTrialOfferPremiumType;
  obj.buttonText = React.useMemo(() => {
    if (null == premiumTrialOfferPremiumType) {
      const intl = analyticsLocations(premiumTrialOfferPremiumType[7]).intl;
      let stringResult = intl.string(analyticsLocations(premiumTrialOfferPremiumType[7]).t["8x0jKT"]);
    } else {
      let obj = analyticsLocations(premiumTrialOfferPremiumType[8]);
      obj = {};
      let interval;
      if (null != premiumTrialOffer) {
        const subscription_trial = premiumTrialOffer.subscription_trial;
        if (null != subscription_trial) {
          interval = subscription_trial.interval;
        }
      }
      obj.intervalType = interval;
      let interval_count;
      if (null != premiumTrialOffer) {
        const subscription_trial2 = premiumTrialOffer.subscription_trial;
        if (null != subscription_trial2) {
          interval_count = subscription_trial2.interval_count;
        }
      }
      obj.intervalCount = interval_count;
      stringResult = obj.formatTrialCtaIntervalDuration(obj);
    }
    return stringResult;
  }, items1);
  return obj;
};
