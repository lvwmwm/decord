// Module ID: 17968
// Function ID: 17969
// Name: ProfileCustomizationTryItOutSettingScreen
// Dependencies: [19, 17, 1385, 1072, 1387, 21, 5141, 575, 7446, 7471, 504, 10735, 8854, 8882, 7856, 17472, 17473, 8862, 1402, 1252, 16586, 2]
// Exports: default

// Module 17968 (ProfileCustomizationTryItOutSettingScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1402 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7856 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8862 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8882 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet } = react_native);
({ AnalyticEvents: metroImportDefault, AnalyticsPages: metroImportAll } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, activityIndicator: { height: "100%", alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default function ProfileCustomizationTryItOutSettingScreen() {
  let analyticsLocations;
  let categories;
  let sourceAnalyticsLocations;
  let stateFromStores;
  let visibleEffectOrder;
  const tmp = closure_11();
  let tmp3 = categories;
  const tmp4 = stateFromStores(categories[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp4(stateFromStores(categories[9]).USER_SETTINGS_TRY_OUT_PREMIUM));
  tmp4(stateFromStores(categories[9]).USER_SETTINGS_TRY_OUT_PREMIUM);
  let obj = sourceAnalyticsLocations(categories[10]);
  const items = [visibleEffectOrder];
  stateFromStores = obj.useStateFromStores(items, () => visibleEffectOrder.getCurrentUser());
  const tmp8 = stateFromStores(categories[11])();
  categories = tmp8.categories;
  const isFetching = tmp8.isFetching;
  const tmp9 = stateFromStores(categories[12])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp9.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp9.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = pendingAvatarDecoration.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items1);
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  const effect1 = pendingAvatarDecoration.useEffect(() => {
    if (undefined === pendingAvatarDecoration) {
      const obj = CollectiblesUtils;
      const avatarDecorationsFromCategories = obj.getAvatarDecorationsFromCategories(categories);
      const _Math = Math;
      const _Math2 = Math;
      setPendingAvatarDecoration(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
    }
  }, items2);
  let obj2 = sourceAnalyticsLocations(categories[15]);
  const visibleFontOrder = obj2.useVisibleFontOrder();
  let obj3 = sourceAnalyticsLocations(categories[16]);
  visibleEffectOrder = obj3.useVisibleEffectOrder();
  const items3 = [visibleFontOrder, visibleEffectOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const setTryItOutDisplayNameStyles = UserProfileActionCreators.setTryItOutDisplayNameStyles;
    UserProfileActionCreators;
    const obj = DisplayNameStylesUtils;
    const result = setTryItOutDisplayNameStyles(obj.generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
    obj3 = { page: metroImportAll.USER_SETTINGS };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.PREMIUM_UPSELL_VIEWED, obj2);
  }, items4);
  let tmp16 = null;
  const tmp6 = sourceAnalyticsLocations;
  if (null != stateFromStores) {
    let tmp19;
    if (isFetching) {
      tmp19 = <setPendingAvatarDecoration style={tmp.activityIndicator}><visibleFontOrder animating size="large" /></setPendingAvatarDecoration>;
    } else {
      const AnalyticsLocationProvider = tmp6(tmp3[8]).AnalyticsLocationProvider;
      tmp19 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
    }
    tmp16 = tmp19;
  }
  return tmp16;
};
