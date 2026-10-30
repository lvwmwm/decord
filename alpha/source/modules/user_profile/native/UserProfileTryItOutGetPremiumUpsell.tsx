// Module ID: 16501
// Function ID: 16502
// Name: UserProfileTryItOutGetPremiumUpsell
// Dependencies: [19, 1072, 21, 7619, 7320, 9884, 9885, 16498, 1114, 2]
// Exports: default

// Module 16501 (UserProfileTryItOutGetPremiumUpsell)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9885 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16498 */;
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
  let obj = analyticsLocations(7619);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [analyticsLocations];
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  let obj2 = { text: intl.format(analyticsLocations(1114).t.TmfgI2, { onClick: callback }), buttonText: nitroTrialCtaOverride, buttonVariant: "experimental_premium-primary", onButtonPress: callback, onLayout };
  const tmp6 = UserProfileFloatingUpsellDefault;
  intl = analyticsLocations(1114).intl;
  const tmp5 = jsx;
  if (nitroTrialCtaOverride == null) {
    const intl2 = tmp(1114).intl;
    nitroTrialCtaOverride = intl2.string(tmp(1114).t.pj0XBN);
  }
  return tmp5(tmp6, obj2);
};
