// Module ID: 13489
// Function ID: 102374
// Name: UserProfilePremiumUpsellCard
// Dependencies: []
// Exports: UserProfilePremiumUpsellCard

// Module 13489 (UserProfilePremiumUpsellCard)
let closure_3 = importAll(dependencyMap[0]);
({ AnalyticsObjects: closure_4, AnalyticsPages: closure_5, AnalyticsSections: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_9 = arg1(dependencyMap[3]).createStyles((bottom) => {
  const container = { bottom };
  return { container };
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let importDefault;
  let obj = arg1(dependencyMap[5]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp = callback(importDefault(dependencyMap[4])().bottom);
  let nitroTrialCtaOverride = arg1(dependencyMap[6]).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const obj2 = arg1(dependencyMap[6]);
  const tmp5 = importDefault(dependencyMap[8]);
  const items = [isTryItOut ? tmp5.USER_SETTINGS_TRY_OUT_PREMIUM : tmp5.USER_SETTINGS_USER_PROFILE];
  const analyticsLocations = importDefault(dependencyMap[7])(items).analyticsLocations;
  importDefault = analyticsLocations;
  const items1 = [navigation];
  let callback = React.useCallback(() => {
    analyticsLocations(closure_2[9]).setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items1);
  const items2 = [analyticsLocations];
  const callback1 = React.useCallback(() => {
    let obj = analyticsLocations(paths[10]);
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA, premiumFeatureCardOrder: navigation(paths[13]).PremiumFeatureCardOrder.TIER_2_LEADING };
    obj.pushLazy(navigation(paths[12])(paths[11], paths.paths), obj);
  }, items2);
  obj = { style: tmp.container };
  const tmp4 = importDefault(dependencyMap[7]);
  const tmp8 = jsx;
  if (isTryItOut) {
    if (null == nitroTrialCtaOverride) {
      const intl2 = arg1(dependencyMap[15]).intl;
      nitroTrialCtaOverride = intl2.string(arg1(dependencyMap[15]).t.pj0XBN);
    }
    let stringResult = nitroTrialCtaOverride;
  } else {
    const intl = arg1(dependencyMap[15]).intl;
    stringResult = intl.string(arg1(dependencyMap[15]).t.PxUx8e);
  }
  obj.ctaText = stringResult;
  obj.showLinearGradient = true;
  if (isTryItOut) {
    callback = callback1;
  }
  obj.onPress = callback;
  obj = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  const string = intl3.string;
  const t = arg1(dependencyMap[15]).t;
  if (isTryItOut) {
    let stringResult1 = string(t.ZFR9LF);
  } else {
    stringResult1 = string(t.Tii53U);
  }
  obj.children = stringResult1;
  obj.children = jsx(arg1(dependencyMap[16]).Text, obj);
  return tmp8(importDefault(dependencyMap[14]), obj);
};
