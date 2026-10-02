// Module ID: 15404
// Function ID: 15405
// Name: ProfileCustomizationTryItOutSettingScreen
// Dependencies: [19, 17, 1378, 1086, 1380, 21, 4837, 588, 558, 576, 6584, 6604, 504, 10237, 7608, 7636, 6978, 14872, 14873, 7616, 1395, 1253, 14134, 2]

// Module 15404 (ProfileCustomizationTryItOutSettingScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1395 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6978 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7616 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7636 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1378 */;
import Constants from "Constants" /* 1086 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let analyticsLocations;
  let categories;
  let currentUser;
  let sourceAnalyticsLocations;
  let stateFromStores;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp8;
  let tmp9;
  const tmp = sourceAnalyticsLocations;
  let obj = sourceAnalyticsLocations(categories[9]);
  const cResult = obj.c(30);
  closure_11();
  const tmp6 = stateFromStores(categories[10]);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp6(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM));
  tmp6(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(categories[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  categories = tmp5(tmp2[13])().categories;
  stateFromStores(categories[13])();
  if (cResult[2] !== analyticsLocations) {
    let obj2 = { isTryItOut: true, analyticsLocations };
    cResult[2] = analyticsLocations;
    cResult[3] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[3];
  }
  const tmp14 = stateFromStores(categories[14])(tmp13);
  const pendingAvatarDecoration = tmp14.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp14.setPendingAvatarDecoration;
  if (cResult[4] !== stateFromStores) {
    class A {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
    const items1 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = A;
    cResult[6] = items1;
    tmp16 = items1;
    tmp15 = A;
  } else {
    class A {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
    tmp16 = cResult[6];
  }
  const effect = pendingAvatarDecoration.useEffect(tmp15, tmp16);
  if (cResult[7] === categories) {
    class A {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
  }
  class M {
    constructor() {
      if (undefined === pendingAvatarDecoration) {
        const obj = CollectiblesUtils;
        const avatarDecorationsFromCategories = obj.getAvatarDecorationsFromCategories(categories);
        const _Math = Math;
        const _Math2 = Math;
        setPendingAvatarDecoration(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
      }
    }
  }
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  cResult[7] = categories;
  cResult[8] = pendingAvatarDecoration;
  cResult[9] = setPendingAvatarDecoration;
  cResult[10] = M;
  cResult[11] = items2;
}) : (() => {
  let analyticsLocations;
  let categories;
  let sourceAnalyticsLocations;
  let stateFromStores;
  let visibleEffectOrder;
  const tmp = closure_11();
  let tmp3 = categories;
  const tmp4 = stateFromStores(categories[10]);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp4(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM));
  tmp4(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM);
  let obj = sourceAnalyticsLocations(categories[12]);
  const items = [visibleEffectOrder];
  stateFromStores = obj.useStateFromStores(items, () => visibleEffectOrder.getCurrentUser());
  const tmp8 = stateFromStores(categories[13])();
  categories = tmp8.categories;
  const isFetching = tmp8.isFetching;
  const tmp9 = stateFromStores(categories[14])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp9.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp9.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = pendingAvatarDecoration.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
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
  let obj2 = sourceAnalyticsLocations(categories[17]);
  const visibleFontOrder = obj2.useVisibleFontOrder();
  let obj3 = sourceAnalyticsLocations(categories[18]);
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
      const AnalyticsLocationProvider = tmp6(tmp3[10]).AnalyticsLocationProvider;
      tmp19 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
    }
    tmp16 = tmp19;
  }
  return tmp16;
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default tmp6;
