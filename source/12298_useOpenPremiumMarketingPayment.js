// Module ID: 12298
// Function ID: 94261
// Name: useOpenPremiumMarketingPayment
// Dependencies: []
// Exports: default

// Module 12298 (useOpenPremiumMarketingPayment)
let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_3 = importAll(dependencyMap[0]);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ SubscriptionIntervalTypes: closure_4, PremiumTypes: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default function useOpenPremiumMarketingPayment(arg0) {
  const analyticsLocations = importDefault(dependencyMap[3])(arg0).analyticsLocations;
  const arg1 = analyticsLocations;
  let obj = arg1(dependencyMap[4]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const importDefault = premiumTrialOffer;
  const premiumTrialOfferPremiumType = arg1(dependencyMap[5]).usePremiumTrialOfferPremiumType();
  const dependencyMap = premiumTrialOfferPremiumType;
  obj = {
    openPayment: React.useCallback(() => {
      const obj = { analyticsLocation: closure_6, analyticsLocations };
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
            tmp = interval === constants.MONTH;
          }
          if (tmp) {
            tmp = premiumTier !== closure_5.TIER_1;
          }
          return tmp;
        };
      }
      obj.predicate = fn;
      let fn2;
      if (null == premiumTrialOfferPremiumType) {
        fn2 = (premiumTier) => premiumTier.premiumTier === closure_5.TIER_2;
      }
      obj.initialSelectedCriteria = fn2;
      obj.premiumType = premiumTrialOfferPremiumType;
      obj.showFormTitle = false;
      premiumTrialOffer(premiumTrialOfferPremiumType[6])(obj);
    }, items)
  };
  const items = [analyticsLocations, premiumTrialOfferPremiumType];
  let interval;
  if (null != premiumTrialOffer) {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      interval = subscription_trial.interval;
    }
  }
  const items1 = [interval, , ];
  let interval_count;
  if (null != premiumTrialOffer) {
    const subscription_trial2 = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial2) {
      interval_count = subscription_trial2.interval_count;
    }
  }
  items1[1] = interval_count;
  items1[2] = premiumTrialOfferPremiumType;
  obj.buttonText = React.useMemo(() => {
    if (null == premiumTrialOfferPremiumType) {
      const intl = analyticsLocations(premiumTrialOfferPremiumType[7]).intl;
      let stringResult = intl.string(analyticsLocations(premiumTrialOfferPremiumType[7]).t.8x0jKT);
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
