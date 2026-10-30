// Module ID: 16511
// Function ID: 16512
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 1072, 21, 7345, 5009, 16438, 5619, 1498, 7155, 1114, 7619, 7320, 9884, 9885, 1626, 2]
// Exports: UserProfilePremiumUpsellCard

// Module 16511 (UserProfilePremiumUpsellCard)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7155 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9885 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16438 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function UpsellCardLayout(arg0) {
  let ctaText;
  let description;
  let onPress;
  let style;
  ({ style, ctaText, description, onPress } = arg0);
  UserProfileUpsellCardDefault;
  return <tmp style={style} ctaText={ctaText} showLinearGradient onPress={onPress}>{null}</tmp>;
}
function PreviewNitroCard(style) {
  navigation = undefined;
  style = style.style;
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  items = [navigation];
  const callback = react.useCallback(() => {
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1114).intl;
  const intl2 = navigation(1114).intl;
  return <UpsellCardLayout style={style} ctaText={intl.string(navigation(1114).t.PxUx8e)} description={intl2.string(navigation(1114).t.Tii53U)} onPress={callback} />;
}
function GetNitroCard(style) {
  let callback;
  let intl2;
  let analyticsLocations;
  let tmp = analyticsLocations;
  style = style.style;
  let obj = analyticsLocations(7619);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let obj2 = { style, ctaText: nitroTrialCtaOverride, description: intl2.string(tmp(1114).t.ZFR9LF), onPress: callback };
  callback = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: hasOwnProperty.USER_SETTINGS, section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  const tmp5 = jsx;
  const tmp6 = UpsellCardLayout;
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1114).intl;
    nitroTrialCtaOverride = intl.string(tmp(1114).t.pj0XBN);
  }
  intl2 = tmp(1114).intl;
  return tmp5(tmp6, obj2);
}
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: obj2 };
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  return jsx(isTryItOut ? GetNitroCard : PreviewNitroCard, { style: closure_10(useSafeAreaInsetsDefault().bottom).container });
}
