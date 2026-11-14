// Module ID: 17186
// Function ID: 17187
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 1072, 21, 7937, 5306, 17114, 5929, 1502, 7809, 1113, 9606, 7918, 9579, 10954, 1630, 2]
// Exports: UserProfilePremiumUpsellCard

// Module 17186 (UserProfilePremiumUpsellCard)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7809 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 17114 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5306 */;
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
  let obj = navigation(1502);
  navigation = obj.useNavigation();
  items = [navigation];
  const callback = react.useCallback(() => {
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <UpsellCardLayout style={style} ctaText={intl.string(navigation(1113).t.PxUx8e)} description={intl2.string(navigation(1113).t.Tii53U)} onPress={callback} />;
}
function GetNitroCard(style) {
  let callback;
  let intl2;
  let analyticsLocations;
  let tmp = analyticsLocations;
  style = style.style;
  let obj = analyticsLocations(9606);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride();
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let obj2 = { style, ctaText: nitroTrialCtaOverride, description: intl2.string(tmp(1113).t.ZFR9LF), onPress: callback };
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
    const intl = tmp(1113).intl;
    nitroTrialCtaOverride = intl.string(tmp(1113).t.pj0XBN);
  }
  intl2 = tmp(1113).intl;
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
