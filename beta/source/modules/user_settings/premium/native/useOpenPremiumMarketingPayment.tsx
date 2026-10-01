// Module ID: 13033
// Function ID: 13034
// Name: useOpenPremiumMarketingPayment
// Dependencies: [19, 1074, 1374, 6583, 6867, 6866, 6842, 1115, 4488, 2]
// Exports: default

// Module 13033 (useOpenPremiumMarketingPayment)
import intl2 from "intl" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6842 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_4;
let hasOwnProperty;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
({ SubscriptionIntervalTypes: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
let closure_6 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx");

export default function useOpenPremiumMarketingPayment(arg0) {
  let analyticsLocation;
  let items;
  let items1;
  let premiumTrialOffer;
  let premiumTrialOfferPremiumType;
  let useMemo;
  const analyticsLocations = premiumTrialOffer(premiumTrialOfferPremiumType[3])(arg0).analyticsLocations;
  let obj = analyticsLocations(premiumTrialOfferPremiumType[4]);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = analyticsLocations(premiumTrialOfferPremiumType[5]);
  premiumTrialOfferPremiumType = obj2.usePremiumTrialOfferPremiumType();
  const obj3 = {
    openPayment: react.useCallback(() => {
      let fn;
      let fn2;
      const obj = { analyticsLocation, analyticsLocations, predicate: fn, initialSelectedCriteria: fn2, premiumType: tmp2, showFormTitle: false };
      fn = undefined;
      let tmp = openPremiumPlanSelectionActionSheetDefault;
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
            tmp = premiumTier !== closure_1_5.TIER_1;
          }
          return tmp;
        };
      }
      fn2 = undefined;
      if (null == premiumTrialOfferPremiumType) {
        fn2 = (premiumTier) => premiumTier.premiumTier === closure_1_5.TIER_2;
      }
      tmp(obj);
    }, items),
    buttonText: useMemo(() => {
      let intervalCount;
      let stringResult;
      if (null == premiumTrialOfferPremiumType) {
        const intl = intl2.intl;
        stringResult = intl.string(intl2.t["8x0jKT"]);
      } else {
        let interval;
        const formatTrialCtaIntervalDuration = PremiumUtils.formatTrialCtaIntervalDuration;
        PremiumUtils;
        if (premiumTrialOffer != null) {
          const subscriptionTrial = tmp4.subscriptionTrial;
          if (subscriptionTrial != null) {
            interval = subscriptionTrial.interval;
          }
        }
        const obj = { intervalType: interval, intervalCount };
        intervalCount = undefined;
        if (premiumTrialOffer != null) {
          const subscriptionTrial2 = tmp4.subscriptionTrial;
          if (subscriptionTrial2 != null) {
            intervalCount = subscriptionTrial2.intervalCount;
          }
        }
        stringResult = formatTrialCtaIntervalDuration(obj);
      }
      return stringResult;
    }, items1)
  };
  items = [analyticsLocations, premiumTrialOfferPremiumType];
  let interval;
  useMemo = react.useMemo;
  if (premiumTrialOffer != null) {
    let subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      interval = subscriptionTrial.interval;
    }
  }
  items1 = [interval, , ];
  let intervalCount;
  if (premiumTrialOffer != null) {
    let subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial2 != null) {
      intervalCount = subscriptionTrial2.intervalCount;
    }
  }
  items1[1] = intervalCount;
  items1[2] = premiumTrialOfferPremiumType;
  return obj3;
};
