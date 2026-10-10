// Module ID: 16171
// Function ID: 16172
// Name: UserProfileTryItOutGetPremiumUpsell
// Dependencies: [19, 1085, 21, 558, 576, 7168, 6851, 9393, 9394, 9518, 14920, 1126, 14928, 2]

// Module 16171 (UserProfileTryItOutGetPremiumUpsell)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import openPremiumModalDefault from "openPremiumModal" /* 9393 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9394 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9518 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 14928 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutGetPremiumUpsell(onLayout) {
  let analyticsLocations;
  let loading;
  let onPress;
  let tmp11;
  let tmp6;
  let tmp9;
  let tmp = analyticsLocations;
  let obj = analyticsLocations(576);
  const cResult = obj.c(12);
  onLayout = onLayout.onLayout;
  let obj2 = analyticsLocations(7168);
  const nitroTrialCtaOverride = obj2.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    const fn = function o() {
      let obj2;
      const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
      const tmp = openPremiumModalDefault;
      tmp(obj);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, tmp6, constants2.USER_SETTINGS));
  usePremiumFeatureUpsellGetNitroDefault(false, tmp6, constants2.USER_SETTINGS);
  const tmpResult = tmp(14920);
  const mobileNitroPreviewDirectCheckoutEnabled = tmpResult.useMobileNitroPreviewDirectCheckoutEnabled();
  if (cResult[2] !== tmp6) {
    const intl = tmp(1126).intl;
    const obj3 = { onClick: tmp6 };
    const formatResult = intl.format(tmp(1126).t.TmfgI2, obj3);
    cResult[2] = tmp6;
    cResult[3] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== nitroTrialCtaOverride) {
    let stringResult = nitroTrialCtaOverride;
    if (nitroTrialCtaOverride == null) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t.pj0XBN);
    }
    cResult[4] = nitroTrialCtaOverride;
    cResult[5] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[5];
  }
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    tmp6 = onPress;
  }
  if (cResult[6] === onLayout) {
    if (cResult[7] === tmp9) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === (mobileNitroPreviewDirectCheckoutEnabled && loading)) {
          let tmp15;
          if (cResult[10] === tmp6) {
            tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
    }
  }
  const tmp16 = jsx(UserProfileFloatingUpsellDefault, { text: tmp9, buttonText: tmp11, buttonVariant: "experimental_premium-primary", loading: mobileNitroPreviewDirectCheckoutEnabled && loading, onButtonPress: tmp6, onLayout });
  cResult[6] = onLayout;
  cResult[7] = tmp9;
  cResult[8] = tmp11;
  cResult[9] = mobileNitroPreviewDirectCheckoutEnabled && loading;
  cResult[10] = tmp6;
  cResult[11] = tmp16;
  tmp15 = tmp16;
}) : (function UserProfileTryItOutGetPremiumUpsell(onLayout) {
  let intl;
  let loading;
  let onPress;
  let analyticsLocations;
  let tmp = analyticsLocations;
  onLayout = onLayout.onLayout;
  let obj = analyticsLocations(7168);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [analyticsLocations];
  let callback = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS));
  usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS);
  let obj2 = analyticsLocations(14920);
  const mobileNitroPreviewDirectCheckoutEnabled = obj2.useMobileNitroPreviewDirectCheckoutEnabled();
  const obj3 = { text: intl.format(analyticsLocations(1126).t.TmfgI2, { onClick: callback }), buttonText: nitroTrialCtaOverride, buttonVariant: "experimental_premium-primary", loading: mobileNitroPreviewDirectCheckoutEnabled && loading, onButtonPress: callback, onLayout };
  const tmp8 = UserProfileFloatingUpsellDefault;
  intl = analyticsLocations(1126).intl;
  const tmp7 = jsx;
  if (nitroTrialCtaOverride == null) {
    const intl2 = tmp(1126).intl;
    nitroTrialCtaOverride = intl2.string(tmp(1126).t.pj0XBN);
  }
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    callback = onPress;
  }
  return tmp7(tmp8, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutGetPremiumUpsell.tsx");

export default tmp3;
