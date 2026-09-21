// Module ID: 14909
// Function ID: 14910
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 1078, 21, 4758, 558, 568, 1616, 1488, 7693, 7429, 7409, 7236, 9502, 9474, 1119, 4754, 14887, 2]

// Module 14909 (UserProfilePremiumUpsellCard)
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7236 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9474 */;
import openPremiumModalDefault from "openPremiumModal" /* 9502 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1078);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_9 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = ReactCompilerGating.isReactCompilerEnabled() ? ((isTryItOut) => {
  const cResult = navigation(568).c(18);
  isTryItOut = isTryItOut.isTryItOut;
  closure_9(analyticsLocations(1616)().bottom);
  let obj = navigation(568);
  const tmp4 = analyticsLocations;
  navigation = navigation(1488).useNavigation();
  const obj2 = navigation(1488);
  const nitroTrialCtaOverride = navigation(7693).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const tmp8 = analyticsLocations(7429);
  const tmp9 = isTryItOut ? tmp8.USER_SETTINGS_TRY_OUT_PREMIUM : tmp8.USER_SETTINGS_USER_PROFILE;
  if (cResult[0] !== tmp9) {
    const items = [tmp9];
    cResult[0] = tmp9;
    cResult[1] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
  }
  analyticsLocations = tmp4(7409)(tmp10).analyticsLocations;
  if (cResult[2] !== navigation) {
    const fn = function p() {
      UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
      navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    };
    cResult[2] = navigation;
    cResult[3] = fn;
  }
  if (cResult[4] !== analyticsLocations) {
    class P {
      constructor() {
        obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
        obj1 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: AnalyticsObjects.BUTTON_CTA };
        obj.analyticsLocation = obj1;
        tmp = closure_1(closure_2[12]);
        obj.premiumFeatureCardOrder = closure_0(closure_2[13]).PremiumFeatureCardOrder.TIER_2_LEADING;
        tmpResult = tmp(obj);
        return;
      }
    }
    cResult[4] = analyticsLocations;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
        obj1 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: AnalyticsObjects.BUTTON_CTA };
        obj.analyticsLocation = obj1;
        tmp = closure_1(closure_2[12]);
        obj.premiumFeatureCardOrder = closure_0(closure_2[13]).PremiumFeatureCardOrder.TIER_2_LEADING;
        tmpResult = tmp(obj);
        return;
      }
    }
  }
  if (cResult[6] === isTryItOut) {
    class P {
      constructor() {
        obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
        obj1 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: AnalyticsObjects.BUTTON_CTA };
        obj.analyticsLocation = obj1;
        tmp = closure_1(closure_2[12]);
        obj.premiumFeatureCardOrder = closure_0(closure_2[13]).PremiumFeatureCardOrder.TIER_2_LEADING;
        tmpResult = tmp(obj);
        return;
      }
    }
  }
  if (isTryItOut) {
    class P {
      constructor() {
        obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
        obj1 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: AnalyticsObjects.BUTTON_CTA };
        obj.analyticsLocation = obj1;
        tmp = closure_1(closure_2[12]);
        obj.premiumFeatureCardOrder = closure_0(closure_2[13]).PremiumFeatureCardOrder.TIER_2_LEADING;
        tmpResult = tmp(obj);
        return;
      }
    }
    let stringResult = nitroTrialCtaOverride;
    if (nitroTrialCtaOverride == null) {
      class P {
        constructor() {
          obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
          obj1 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: AnalyticsObjects.BUTTON_CTA };
          obj.analyticsLocation = obj1;
          tmp = closure_1(closure_2[12]);
          obj.premiumFeatureCardOrder = closure_0(closure_2[13]).PremiumFeatureCardOrder.TIER_2_LEADING;
          tmpResult = tmp(obj);
          return;
        }
      }
      stringResult = obj5.string(tmp(1119).t.pj0XBN);
    }
    let stringResult1 = stringResult;
  } else {
    class P {
      constructor() {
        obj = { analyticsLocation: null, analyticsLocations, premiumFeatureCardOrder: null };
        obj1 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: AnalyticsObjects.BUTTON_CTA };
        obj.analyticsLocation = obj1;
        tmp = closure_1(closure_2[12]);
        obj.premiumFeatureCardOrder = closure_0(closure_2[13]).PremiumFeatureCardOrder.TIER_2_LEADING;
        tmpResult = tmp(obj);
        return;
      }
    }
    stringResult1 = obj4.string(tmp(1119).t.PxUx8e);
  }
  cResult[6] = isTryItOut;
  cResult[7] = nitroTrialCtaOverride;
  cResult[8] = stringResult1;
}) : ((isTryItOut) => {
  isTryItOut = isTryItOut.isTryItOut;
  let navigation;
  let analyticsLocations;
  const tmp = analyticsLocations;
  const tmp3 = closure_9(analyticsLocations(1616)().bottom);
  navigation = navigation(1488).useNavigation();
  let obj = navigation(1488);
  let nitroTrialCtaOverride = navigation(7693).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const obj2 = navigation(7693);
  const tmp8 = analyticsLocations(7429);
  const items = [isTryItOut ? tmp8.USER_SETTINGS_TRY_OUT_PREMIUM : tmp8.USER_SETTINGS_USER_PROFILE];
  analyticsLocations = analyticsLocations(7409)(items).analyticsLocations;
  const items1 = [navigation];
  let callback = noop.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items1);
  const items2 = [analyticsLocations];
  const callback1 = noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items2);
  const obj3 = { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null };
  const tmp7 = analyticsLocations(7409);
  if (isTryItOut) {
    if (nitroTrialCtaOverride == null) {
      const intl2 = tmp4(1119).intl;
      nitroTrialCtaOverride = intl2.string(tmp4(1119).t.pj0XBN);
    }
    let stringResult = nitroTrialCtaOverride;
  } else {
    const intl = tmp4(1119).intl;
    stringResult = intl.string(tmp4(1119).t.PxUx8e);
  }
  obj3.ctaText = stringResult;
  if (isTryItOut) {
    callback = callback1;
  }
  obj3.onPress = callback;
  const intl3 = tmp4(1119).intl;
  const string = intl3.string;
  const t = tmp4(1119).t;
  if (isTryItOut) {
    let stringResult1 = string(t.ZFR9LF);
  } else {
    stringResult1 = string(t.Tii53U);
  }
  obj3.children = jsx(navigation(4754).Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: stringResult1 });
  return jsx(tmp(14887), { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null });
});
