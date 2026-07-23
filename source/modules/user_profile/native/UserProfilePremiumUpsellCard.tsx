// Module ID: 13610
// Function ID: 104563
// Name: UserProfilePremiumUpsellCard
// Dependencies: [31, 653, 33, 4130, 1557, 1456, 6685, 5464, 5484, 7375, 8139, 7999, 13611, 1212, 4126, 2]
// Exports: UserProfilePremiumUpsellCard

// Module 13610 (UserProfilePremiumUpsellCard)
import result from "result";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ AnalyticsObjects: closure_4, AnalyticsPages: closure_5, AnalyticsSections: closure_6, UserSettingsSections: closure_7 } = ME);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((bottom) => {
  const container = { position: "absolute", bottom, start: 0, end: 0 };
  return { container };
});
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const tmp = callback(analyticsLocations(1557)().bottom);
  let nitroTrialCtaOverride = navigation(6685).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const obj2 = navigation(6685);
  const tmp5 = analyticsLocations(5484);
  const items = [isTryItOut ? tmp5.USER_SETTINGS_TRY_OUT_PREMIUM : tmp5.USER_SETTINGS_USER_PROFILE];
  analyticsLocations = analyticsLocations(5464)(items).analyticsLocations;
  const items1 = [navigation];
  callback = React.useCallback(() => {
    analyticsLocations(outer1_2[9]).setSection(outer1_7.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(outer1_7.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items1);
  const items2 = [analyticsLocations];
  const callback1 = React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { page: outer1_5.USER_SETTINGS, section: outer1_6.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: outer1_4.BUTTON_CTA, premiumFeatureCardOrder: navigation(outer1_2[11]).PremiumFeatureCardOrder.TIER_2_LEADING };
    analyticsLocations(outer1_2[10])(obj);
  }, items2);
  obj = { style: tmp.container };
  const tmp4 = analyticsLocations(5464);
  const tmp8 = jsx;
  if (isTryItOut) {
    if (null == nitroTrialCtaOverride) {
      const intl2 = navigation(1212).intl;
      nitroTrialCtaOverride = intl2.string(navigation(1212).t.pj0XBN);
    }
    let stringResult = nitroTrialCtaOverride;
  } else {
    const intl = navigation(1212).intl;
    stringResult = intl.string(navigation(1212).t.PxUx8e);
  }
  obj.ctaText = stringResult;
  obj.showLinearGradient = true;
  if (isTryItOut) {
    callback = callback1;
  }
  obj.onPress = callback;
  obj = { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5 };
  const intl3 = navigation(1212).intl;
  const string = intl3.string;
  const t = navigation(1212).t;
  if (isTryItOut) {
    let stringResult1 = string(t.ZFR9LF);
  } else {
    stringResult1 = string(t.Tii53U);
  }
  obj.children = stringResult1;
  obj.children = jsx(navigation(4126).Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5 });
  return tmp8(analyticsLocations(13611), obj);
};
