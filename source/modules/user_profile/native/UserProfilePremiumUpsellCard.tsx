// Module ID: 14569
// Function ID: 14570
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 673, 21, 4481, 1627, 1498, 7380, 7102, 7122, 6930, 9321, 9291, 14547, 1233, 4477, 2]
// Exports: UserProfilePremiumUpsellCard

// Module 14569 (UserProfilePremiumUpsellCard)
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ AnalyticsObjects: c4, AnalyticsPages: c5, AnalyticsSections: closure_6, UserSettingsSections: error } = ME);
let closure_9 = createCacheKey.createStyles((bottom) => {
  const container = { position: "absolute", bottom, start: 0, end: 0 };
  return { container };
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let navigation;
  let analyticsLocations;
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const tmp = analyticsLocations;
  const tmp3 = callback(analyticsLocations(1627)().bottom);
  let nitroTrialCtaOverride = navigation(7380).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const obj2 = navigation(7380);
  const tmp8 = analyticsLocations(7122);
  const items = [isTryItOut ? tmp8.USER_SETTINGS_TRY_OUT_PREMIUM : tmp8.USER_SETTINGS_USER_PROFILE];
  analyticsLocations = analyticsLocations(7102)(items).analyticsLocations;
  const items1 = [navigation];
  callback = React.useCallback(() => {
    analyticsLocations(closure_1_2[9]).setSection(closure_1_7.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(closure_1_7.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items1);
  const items2 = [analyticsLocations];
  const callback1 = React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: null };
    obj = { page: closure_1_5.USER_SETTINGS, section: closure_1_6.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: closure_1_4.BUTTON_CTA };
    obj[2] = navigation(closure_1_2[11]).PremiumFeatureCardOrder.TIER_2_LEADING;
    analyticsLocations(closure_1_2[10])(obj);
  }, items2);
  obj = { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null };
  const tmp7 = analyticsLocations(7102);
  if (isTryItOut) {
    if (nitroTrialCtaOverride == null) {
      const intl2 = tmp4(1233).intl;
      nitroTrialCtaOverride = intl2.string(tmp4(1233).t.pj0XBN);
    }
    let stringResult = nitroTrialCtaOverride;
  } else {
    const intl = tmp4(1233).intl;
    stringResult = intl.string(tmp4(1233).t.PxUx8e);
  }
  obj[1] = stringResult;
  if (isTryItOut) {
    callback = callback1;
  }
  obj[3] = callback;
  const intl3 = tmp4(1233).intl;
  const string = intl3.string;
  const t = tmp4(1233).t;
  if (isTryItOut) {
    let stringResult1 = string(t.ZFR9LF);
  } else {
    stringResult1 = string(t.Tii53U);
  }
  obj[4] = jsx(navigation(4477).Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: stringResult1 });
  return jsx(tmp(14547), { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null });
};
