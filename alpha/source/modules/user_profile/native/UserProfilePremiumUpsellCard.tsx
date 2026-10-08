// Module ID: 14752
// Function ID: 14753
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 1085, 21, 6865, 5090, 558, 576, 5086, 14694, 1502, 6671, 1126, 7157, 6841, 9328, 9329, 9451, 14753, 1630, 2]

// Module 14752 (UserProfilePremiumUpsellCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6671 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9329 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9451 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14694 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const Text_Text = tmp(5086);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: obj2 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function UpsellCardLayout(arg0) {
  let ctaText;
  let description;
  let disabled;
  let onPress;
  let style;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(8);
  ({ style, ctaText, description, disabled, onPress } = arg0);
  if (cResult[0] !== description) {
    const tmp6 = jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description });
    cResult[0] = description;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === ctaText) {
    if (cResult[3] === disabled) {
      if (cResult[4] === onPress) {
        if (cResult[5] === style) {
          let tmp7;
          if (cResult[6] === tmp4) {
            tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
    }
  }
  const tmp8 = jsx(UserProfileUpsellCardDefault, { style, ctaText, showLinearGradient: true, disabled, onPress, children: tmp4 });
  cResult[2] = ctaText;
  cResult[3] = disabled;
  cResult[4] = onPress;
  cResult[5] = style;
  cResult[6] = tmp4;
  cResult[7] = tmp8;
  tmp7 = tmp8;
}) : (function UpsellCardLayout(arg0) {
  let ctaText;
  let description;
  let disabled;
  let onPress;
  let style;
  ({ style, ctaText, description, disabled, onPress } = arg0);
  UserProfileUpsellCardDefault;
  return <tmp style={style} ctaText={ctaText} showLinearGradient disabled={disabled} onPress={onPress}>{null}</tmp>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewNitroCard(style) {
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = navigation(576);
  const cResult = obj.c(7);
  style = style.style;
  const obj2 = navigation(1502);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function n() {
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
      navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(navigation(1126).t.PxUx8e);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(navigation(1126).t.Tii53U);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    tmp7 = stringResult1;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp10;
    if (cResult[5] === style) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = <closure_11 style={style} ctaText={tmp6} description={tmp7} onPress={tmp5} />;
  cResult[4] = tmp5;
  cResult[5] = style;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function PreviewNitroCard(style) {
  navigation = undefined;
  style = style.style;
  let obj = navigation(1502);
  navigation = obj.useNavigation();
  items = [navigation];
  const callback = react.useCallback(() => {
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  return <closure_11 style={style} ctaText={intl.string(navigation(1126).t.PxUx8e)} description={intl2.string(navigation(1126).t.Tii53U)} onPress={callback} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GetNitroCard(style) {
  let analyticsLocations;
  let loading;
  let onPress;
  let tmp10;
  let tmp13;
  let tmp7;
  let tmp = analyticsLocations;
  let obj = analyticsLocations(576);
  const cResult = obj.c(10);
  style = style.style;
  let obj2 = analyticsLocations(7157);
  const nitroTrialCtaOverride = obj2.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    const fn = function n() {
      let obj2;
      const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
      const tmp = openPremiumModalDefault;
      tmp(obj);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items));
  usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items);
  const tmpResult = tmp(14753);
  const mobileNitroPreviewDirectCheckoutEnabled = tmpResult.useMobileNitroPreviewDirectCheckoutEnabled();
  if (cResult[2] !== nitroTrialCtaOverride) {
    let stringResult = nitroTrialCtaOverride;
    if (nitroTrialCtaOverride == null) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.pj0XBN);
    }
    cResult[2] = nitroTrialCtaOverride;
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.ZFR9LF);
    cResult[4] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[4];
  }
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    tmp7 = onPress;
  }
  if (cResult[5] === style) {
    if (cResult[6] === tmp10) {
      if (cResult[7] === (mobileNitroPreviewDirectCheckoutEnabled && loading)) {
        let tmp16;
        if (cResult[8] === tmp7) {
          tmp16 = cResult[9];
        }
        return tmp16;
      }
    }
  }
  const tmp17 = <closure_11 style={style} ctaText={tmp10} description={tmp13} disabled={mobileNitroPreviewDirectCheckoutEnabled && loading} onPress={tmp7} />;
  cResult[5] = style;
  cResult[6] = tmp10;
  cResult[7] = mobileNitroPreviewDirectCheckoutEnabled && loading;
  cResult[8] = tmp7;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (function GetNitroCard(style) {
  let intl2;
  let loading;
  let onPress;
  let analyticsLocations;
  let tmp = analyticsLocations;
  style = style.style;
  let obj = analyticsLocations(7157);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let callback = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items));
  usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
  let obj2 = analyticsLocations(14753);
  const mobileNitroPreviewDirectCheckoutEnabled = obj2.useMobileNitroPreviewDirectCheckoutEnabled();
  const obj3 = { style, ctaText: nitroTrialCtaOverride, description: intl2.string(tmp(1126).t.ZFR9LF), disabled: mobileNitroPreviewDirectCheckoutEnabled && loading, onPress: callback };
  const tmp7 = jsx;
  const tmp8 = closure_11;
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1126).intl;
    nitroTrialCtaOverride = intl.string(tmp(1126).t.pj0XBN);
  }
  intl2 = tmp(1126).intl;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    callback = onPress;
  }
  return tmp7(tmp8, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePremiumUpsellCard(isTryItOut) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(4);
  isTryItOut = isTryItOut.isTryItOut;
  const tmp2 = closure_10(useSafeAreaInsetsDefault().bottom);
  if (isTryItOut) {
    let tmp7;
    if (cResult[0] !== tmp2.container) {
      const tmp10 = <closure_13 style={tmp2.container} />;
      cResult[0] = tmp2.container;
      cResult[1] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[1];
    }
    tmp3 = tmp7;
  } else if (cResult[2] !== tmp2.container) {
    const tmp6 = <closure_12 style={tmp2.container} />;
    cResult[2] = tmp2.container;
    cResult[3] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[3];
  }
  return tmp3;
}) : (function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  return jsx(isTryItOut ? closure_13 : closure_12, { style: closure_10(useSafeAreaInsetsDefault().bottom).container });
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = tmp3;
