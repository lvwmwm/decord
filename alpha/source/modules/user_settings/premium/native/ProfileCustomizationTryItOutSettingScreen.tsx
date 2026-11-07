// Module ID: 18139
// Function ID: 18140
// Name: ProfileCustomizationTryItOutSettingScreen
// Dependencies: [19, 17, 1385, 1072, 1394, 1387, 21, 5140, 575, 7387, 7412, 504, 10726, 8801, 8829, 7808, 17639, 8809, 1393, 1252, 16747, 2]
// Exports: default

// Module 18139 (ProfileCustomizationTryItOutSettingScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1393 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1394 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7808 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8809 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8829 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet } = react_native);
({ AnalyticEvents: metroImportDefault, AnalyticsPages: metroImportAll } = Constants);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, activityIndicator: { height: "100%", alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default function ProfileCustomizationTryItOutSettingScreen() {
  let analyticsLocations;
  let categories;
  let currentUser;
  let sourceAnalyticsLocations;
  let stateFromStores;
  const tmp = closure_12();
  let tmp3 = categories;
  const tmp4 = stateFromStores(categories[9]);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp4(stateFromStores(categories[10]).USER_SETTINGS_TRY_OUT_PREMIUM));
  tmp4(stateFromStores(categories[10]).USER_SETTINGS_TRY_OUT_PREMIUM);
  let obj = sourceAnalyticsLocations(categories[11]);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp8 = stateFromStores(categories[12])();
  categories = tmp8.categories;
  const isFetching = tmp8.isFetching;
  const tmp9 = stateFromStores(categories[13])({ isTryItOut: true, analyticsLocations });
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
  let obj2 = sourceAnalyticsLocations(categories[16]);
  const visibleFontOrder = obj2.useVisibleFontOrder();
  const items3 = [visibleFontOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const setTryItOutDisplayNameStyles = UserProfileActionCreators.setTryItOutDisplayNameStyles;
    UserProfileActionCreators;
    const obj = DisplayNameStylesUtils;
    const result = setTryItOutDisplayNameStyles(obj.generateRandomDisplayNameStyles(visibleFontOrder, EFFECT_ORDER));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
    obj3 = { page: metroImportAll.USER_SETTINGS };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.PREMIUM_UPSELL_VIEWED, obj2);
  }, items4);
  let tmp15 = null;
  const tmp6 = sourceAnalyticsLocations;
  if (null != stateFromStores) {
    let tmp18;
    if (isFetching) {
      tmp18 = <setPendingAvatarDecoration style={tmp.activityIndicator}><visibleFontOrder animating size="large" /></setPendingAvatarDecoration>;
    } else {
      const AnalyticsLocationProvider = tmp6(tmp3[9]).AnalyticsLocationProvider;
      tmp18 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
    }
    tmp15 = tmp18;
  }
  return tmp15;
};
