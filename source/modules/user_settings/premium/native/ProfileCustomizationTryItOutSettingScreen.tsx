// Module ID: 14519
// Function ID: 110861
// Name: ProfileCustomizationTryItOutSettingScreen
// Dependencies: [31, 27, 1849, 653, 1851, 33, 4130, 689, 5462, 5482, 566, 7949, 7929, 7975, 6786, 14275, 14276, 7936, 1860, 675, 13612, 2]
// Exports: default

// Module 14519 (ProfileCustomizationTryItOutSettingScreen)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, ActivityIndicator: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.activityIndicator = { height: "100%", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default function ProfileCustomizationTryItOutSettingScreen() {
  let analyticsLocations;
  let sourceAnalyticsLocations;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = stateFromStores(categories[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(categories[8])(stateFromStores(categories[9]).USER_SETTINGS_TRY_OUT_PREMIUM));
  let obj = sourceAnalyticsLocations(categories[10]);
  const items = [visibleEffectOrder];
  stateFromStores = obj.useStateFromStores(items, () => visibleEffectOrder.getCurrentUser());
  const tmp5 = stateFromStores(categories[11])();
  categories = tmp5.categories;
  const tmp6 = stateFromStores(categories[12])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp6.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp6.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = pendingAvatarDecoration.useEffect(() => {
    if (null != stateFromStores) {
      const obj = { dispatchWait: true };
      stateFromStores(categories[13])(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), obj);
      const tmp3 = stateFromStores(categories[13]);
    }
  }, items1);
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  const effect1 = pendingAvatarDecoration.useEffect(() => {
    if (undefined === pendingAvatarDecoration) {
      const avatarDecorationsFromCategories = sourceAnalyticsLocations(categories[14]).getAvatarDecorationsFromCategories(categories);
      const _Math = Math;
      const _Math2 = Math;
      setPendingAvatarDecoration(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
      const obj = sourceAnalyticsLocations(categories[14]);
    }
  }, items2);
  let obj1 = sourceAnalyticsLocations(categories[15]);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = sourceAnalyticsLocations(categories[16]);
  visibleEffectOrder = obj2.useVisibleEffectOrder();
  const items3 = [visibleFontOrder, visibleEffectOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const obj = sourceAnalyticsLocations(categories[17]);
    const result = obj.setTryItOutDisplayNameStyles(sourceAnalyticsLocations(categories[18]).generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    let obj = stateFromStores(categories[19]);
    obj = { type: outer1_9.PREMIUM_PROFILE_TRY_IT_OUT, location: obj, location_stack: sourceAnalyticsLocations };
    obj = { page: outer1_8.USER_SETTINGS };
    obj.track(outer1_7.PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else if (tmp5.isFetching) {
    obj = { style: tmp.activityIndicator };
    tmp = visibleFontOrder;
    obj.children = <visibleFontOrder animating size="large" />;
    let tmp18 = <setPendingAvatarDecoration style={tmp.activityIndicator} />;
  } else if (undefined !== pendingAvatarDecoration) {
    obj = { value: analyticsLocations };
    obj1 = { style: tmp.container };
    obj2 = { currentUser: stateFromStores, isTryItOut: true };
    obj1.children = jsx(stateFromStores(categories[20]), { currentUser: stateFromStores, isTryItOut: true });
    obj.children = <setPendingAvatarDecoration style={tmp.container} />;
    tmp18 = jsx(sourceAnalyticsLocations(categories[8]).AnalyticsLocationProvider, { value: analyticsLocations });
  }
};
