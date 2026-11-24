// Module ID: 15999
// Function ID: 16000
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 1071, 21, 6254, 4917, 15925, 5508, 1500, 7221, 1112, 8994, 6253, 8960, 9554, 1628, 2]
// Exports: UserProfilePremiumUpsellCard

// Module 15999 (UserProfilePremiumUpsellCard)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6254 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7221 */;
import openPremiumModalDefault from "openPremiumModal" /* 8960 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9554 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 15925 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 4917 */;
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
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  items = [navigation];
  const callback = react.useCallback(() => {
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  return <UpsellCardLayout style={style} ctaText={intl.string(navigation(1112).t.PxUx8e)} description={intl2.string(navigation(1112).t.Tii53U)} onPress={callback} />;
}
function GetNitroCard(style) {
  let callback;
  let intl2;
  let analyticsLocations;
  let tmp = analyticsLocations;
  style = style.style;
  let obj = analyticsLocations(8994);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride();
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let obj2 = { style, ctaText: nitroTrialCtaOverride, description: intl2.string(tmp(1112).t.ZFR9LF), onPress: callback };
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
    const intl = tmp(1112).intl;
    nitroTrialCtaOverride = intl.string(tmp(1112).t.pj0XBN);
  }
  intl2 = tmp(1112).intl;
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
