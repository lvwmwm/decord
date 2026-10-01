// Module ID: 14201
// Function ID: 14202
// Name: UserProfilePremiumUpsellCard
// Dependencies: [19, 1074, 21, 6603, 4836, 14179, 4832, 1485, 6411, 1115, 6866, 6583, 8695, 8663, 9422, 14202, 1613, 2]
// Exports: UserProfilePremiumUpsellCard

// Module 14201 (UserProfilePremiumUpsellCard)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9422 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14179 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function UpsellCardLayout(arg0) {
  let ctaText;
  let description;
  let disabled;
  let onPress;
  let style;
  ({ style, ctaText, description, disabled, onPress } = arg0);
  UserProfileUpsellCardDefault;
  return <tmp style={style} ctaText={ctaText} showLinearGradient disabled={disabled} onPress={onPress}>{null}</tmp>;
}
function PreviewNitroCard(style) {
  navigation = undefined;
  style = style.style;
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  items = [navigation];
  const callback = react.useCallback(() => {
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1115).intl;
  const intl2 = navigation(1115).intl;
  return <UpsellCardLayout style={style} ctaText={intl.string(navigation(1115).t.PxUx8e)} description={intl2.string(navigation(1115).t.Tii53U)} onPress={callback} />;
}
function GetNitroCard(style) {
  let intl2;
  let loading;
  let onPress;
  let analyticsLocations;
  let tmp = analyticsLocations;
  style = style.style;
  let obj = analyticsLocations(6866);
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
  let obj2 = analyticsLocations(14202);
  const mobileNitroPreviewDirectCheckoutEnabled = obj2.useMobileNitroPreviewDirectCheckoutEnabled();
  const obj3 = { style, ctaText: nitroTrialCtaOverride, description: intl2.string(tmp(1115).t.ZFR9LF), disabled: mobileNitroPreviewDirectCheckoutEnabled && loading, onPress: callback };
  const tmp7 = jsx;
  const tmp8 = UpsellCardLayout;
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1115).intl;
    nitroTrialCtaOverride = intl.string(tmp(1115).t.pj0XBN);
  }
  intl2 = tmp(1115).intl;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    callback = onPress;
  }
  return tmp7(tmp8, obj3);
}
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: obj2 };
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  return jsx(isTryItOut ? GetNitroCard : PreviewNitroCard, { style: closure_10(useSafeAreaInsetsDefault().bottom).container });
};
