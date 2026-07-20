// Module ID: 14337
// Function ID: 108287
// Name: ProfileCustomizationTryItOutSettingScreen
// Dependencies: []
// Exports: default

// Module 14337 (ProfileCustomizationTryItOutSettingScreen)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ View: closure_4, ActivityIndicator: closure_5 } = tmp2);
let closure_6 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8 } = arg1(dependencyMap[3]));
const PremiumUpsellTypes = arg1(dependencyMap[4]).PremiumUpsellTypes;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.container = obj;
obj.activityIndicator = { 9223372036854775807: null, -9223372036854775808: null, 9223372036854775807: null };
let closure_11 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default function ProfileCustomizationTryItOutSettingScreen() {
  let analyticsLocations;
  let sourceAnalyticsLocations;
  let tmp = callback();
  const tmp2 = importDefault(dependencyMap[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = importDefault(dependencyMap[8])(importDefault(dependencyMap[9]).USER_SETTINGS_TRY_OUT_PREMIUM));
  const arg1 = sourceAnalyticsLocations;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => visibleEffectOrder.getCurrentUser());
  const importDefault = stateFromStores;
  const tmp5 = importDefault(dependencyMap[11])();
  const categories = tmp5.categories;
  const dependencyMap = categories;
  const tmp6 = importDefault(dependencyMap[12])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp6.pendingAvatarDecoration;
  const React = pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp6.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      const obj = { dispatchWait: true };
      stateFromStores(categories[13])(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), obj);
      const tmp3 = stateFromStores(categories[13]);
    }
  }, items1);
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  const effect1 = React.useEffect(() => {
    if (undefined === pendingAvatarDecoration) {
      const avatarDecorationsFromCategories = sourceAnalyticsLocations(categories[14]).getAvatarDecorationsFromCategories(categories);
      const _Math = Math;
      const _Math2 = Math;
      setPendingAvatarDecoration(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
      const obj = sourceAnalyticsLocations(categories[14]);
    }
  }, items2);
  let obj1 = arg1(dependencyMap[15]);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = arg1(dependencyMap[16]);
  const visibleEffectOrder = obj2.useVisibleEffectOrder();
  closure_6 = visibleEffectOrder;
  const items3 = [visibleFontOrder, visibleEffectOrder];
  const effect2 = React.useEffect(() => {
    const obj = sourceAnalyticsLocations(categories[17]);
    const result = obj.setTryItOutDisplayNameStyles(sourceAnalyticsLocations(categories[18]).generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = React.useEffect(() => {
    let obj = stateFromStores(categories[19]);
    obj = { type: constants3.PREMIUM_PROFILE_TRY_IT_OUT, location: obj, location_stack: sourceAnalyticsLocations };
    obj = { page: constants2.USER_SETTINGS };
    obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else if (tmp5.isFetching) {
    obj = { style: tmp.activityIndicator };
    tmp = visibleFontOrder;
    obj.children = <visibleFontOrder />;
    let tmp18 = <setPendingAvatarDecoration {...obj} />;
  } else if (undefined !== pendingAvatarDecoration) {
    obj = { value: analyticsLocations };
    obj1 = { style: tmp.container };
    obj2 = { currentUser: stateFromStores, isTryItOut: true };
    obj1.children = jsx(importDefault(dependencyMap[20]), obj2);
    obj.children = <setPendingAvatarDecoration {...obj1} />;
    tmp18 = jsx(arg1(dependencyMap[8]).AnalyticsLocationProvider, obj);
  }
};
