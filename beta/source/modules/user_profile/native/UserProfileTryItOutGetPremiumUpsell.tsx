// Module ID: 17177
// Function ID: 17178
// Name: UserProfileTryItOutGetPremiumUpsell
// Dependencies: [19, 1072, 21, 9606, 7918, 9579, 10954, 17174, 1113, 2]
// Exports: default

// Module 17177 (UserProfileTryItOutGetPremiumUpsell)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 17174 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default function UserProfileTryItOutGetPremiumUpsell(onLayout) {
  let intl;
  let analyticsLocations;
  let tmp = analyticsLocations;
  onLayout = onLayout.onLayout;
  let obj = analyticsLocations(9606);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [analyticsLocations];
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  let obj2 = { text: intl.format(analyticsLocations(1113).t.TmfgI2, { onClick: callback }), buttonText: nitroTrialCtaOverride, buttonVariant: "experimental_premium-primary", onButtonPress: callback, onLayout };
  const tmp6 = UserProfileFloatingUpsellDefault;
  intl = analyticsLocations(1113).intl;
  const tmp5 = jsx;
  if (nitroTrialCtaOverride == null) {
    const intl2 = tmp(1113).intl;
    nitroTrialCtaOverride = intl2.string(tmp(1113).t.pj0XBN);
  }
  return tmp5(tmp6, obj2);
};
