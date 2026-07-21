// Module ID: 15353
// Function ID: 116942
// Name: useHasSettingsBadge
// Dependencies: []

// Module 15353 (useHasSettingsBadge)
function useHasSettingsBadge() {
  let tmp = arg1(dependencyMap[10]).useUnseenOutboundPromotions().length > 0;
  const obj = arg1(dependencyMap[10]);
  const obj2 = arg1(dependencyMap[11]);
  const tmp2 = null != arg1(dependencyMap[11]).useTrialOffer(closure_9);
  const obj3 = arg1(dependencyMap[12]);
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, ActivityIndicator: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
let closure_9 = arg1(dependencyMap[4]).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_13 = arg1(dependencyMap[6]).createStyles((paddingTop, arg1, arg2, arg3, borderColor) => {
  let BACKGROUND_SURFACE_HIGH = arg2;
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj["zIndex"] = 10;
  obj["paddingTop"] = paddingTop;
  obj.container = obj;
  obj = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj["top"] = undefined;
  obj["alignItems"] = "center";
  obj.containerFloatingWrap = obj;
  const obj1 = {};
  const merged2 = Object.assign(closure_6.absoluteFillObject);
  obj1["color"] = arg3;
  obj.containerFloatingGradient = obj1;
  const obj2 = {};
  const obj6 = arg1(dependencyMap[7]);
  const space = importDefault(dependencyMap[8]).space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg1;
  }
  obj2.marginBottom = PX_24;
  obj2.paddingVertical = importDefault(dependencyMap[8]).space.PX_8;
  obj2.paddingHorizontal = importDefault(dependencyMap[8]).space.PX_24;
  const isIOSResult = arg1(dependencyMap[7]).isIOS();
  const result = arg1(dependencyMap[9]).isMobileVisualRefreshEnabled("YouBannerDecorations");
  const radii = importDefault(dependencyMap[8]).radii;
  obj2.borderRadius = result ? radii.lg : radii.round;
  if (null == BACKGROUND_SURFACE_HIGH) {
    BACKGROUND_SURFACE_HIGH = importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj2.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj2.flexDirection = "row";
  obj2.borderColor = borderColor;
  obj2.borderWidth = 1;
  const merged3 = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_HIGH);
  obj.containerFloating = obj2;
  const obj7 = arg1(dependencyMap[9]);
  obj.buttons = { top: importDefault(dependencyMap[8]).space.PX_4, right: importDefault(dependencyMap[8]).space.PX_12, paddingTop };
  const obj4 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[8]).space.PX_16 };
  obj.buttonsFloating = obj4;
  obj.loading = { "Bool(true)": null, "Bool(true)": null, 266603034: null };
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((navigateToPremium) => {
  let containerBorderColor;
  let enabled;
  let gradientSecondaryBackground;
  let isLoading;
  let navigateToSettings;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let showReferralNotificationDot;
  let theme;
  ({ isLoading, navigateToSettings } = navigateToPremium);
  const arg1 = navigateToSettings;
  navigateToPremium = navigateToPremium.navigateToPremium;
  const importDefault = navigateToPremium;
  let num = navigateToPremium.paddingTop;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
  if (num === undefined) {
    num = 0;
  }
  let num2 = navigateToPremium.paddingBottom;
  if (num2 === undefined) {
    num2 = 0;
  }
  let dependencyMap;
  let importAllResult;
  let tmp21;
  let showBadge;
  let dismissBadge;
  let closure_7;
  let ContentDismissActionType;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => tmp27.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp2 = importDefault(dependencyMap[15]);
  const tmp2Result = importDefault(dependencyMap[15])(id);
  ({ theme, primaryColor, secondaryColor } = importDefault(dependencyMap[16])({ user: stateFromStores, displayProfile: importDefault(dependencyMap[15])(id) }));
  let obj1 = arg1(dependencyMap[17]);
  const userProfileColors = obj1.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  dependencyMap = gradientSecondaryBackground;
  let obj2 = arg1(dependencyMap[9]);
  if (obj2.isMobileVisualRefreshEnabled("YouBannerDecorations")) {
    let obj3 = arg1(dependencyMap[18]);
    if (obj3.isThemeLight(theme)) {
      let containerBackground = null;
      if (null != primaryColor) {
        containerBackground = null;
      }
    }
    importAllResult = containerBackground;
    const items1 = [gradientSecondaryBackground, containerBackground];
    const tmp16 = callback2(num, num2, importAllResult.useMemo(() => {
      let hexResult1 = null;
      if (null != containerBackground) {
        const obj = navigateToPremium(gradientSecondaryBackground[19]);
        const obj2 = navigateToPremium(gradientSecondaryBackground[19])(containerBackground);
        const hexResult = navigateToPremium(gradientSecondaryBackground[19])(containerBackground).hex("rgb");
        const obj3 = navigateToPremium(gradientSecondaryBackground[19])(containerBackground);
        hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, navigateToPremium(gradientSecondaryBackground[19])(containerBackground).alpha(), "rgb").hex("rgb");
        const mixResult = obj.mix(gradientSecondaryBackground, hexResult, navigateToPremium(gradientSecondaryBackground[19])(containerBackground).alpha(), "rgb");
      }
      return hexResult1;
    }, items1), gradientSecondaryBackground, containerBorderColor);
    let obj4 = arg1(dependencyMap[20]);
    const hasPremiumSubscriptionToDisplay = obj4.useHasPremiumSubscriptionToDisplay();
    tmp21 = useHasSettingsBadge();
    const tmp23 = importDefault(dependencyMap[21])();
    showBadge = tmp23.showBadge;
    dismissBadge = tmp23.dismissBadge;
    let obj5 = arg1(dependencyMap[22]);
    const isEligibleForQuests = obj5.getIsEligibleForQuests();
    let obj6 = arg1(dependencyMap[23]);
    const mobileReferralSubscriberProfileEntrypointButtonConfig = obj6.useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
    ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
    let obj7 = arg1(dependencyMap[11]);
    const tmp27 = null != obj7.useTrialOffer(closure_9);
    closure_7 = tmp27;
    const items2 = [tmp21, navigateToSettings, tmp27];
    const items3 = [navigateToPremium];
    const callback = importAllResult.useCallback(() => {
      let obj = navigateToSettings(gradientSecondaryBackground[24]);
      obj = { isBadged: tmp21 };
      const result = obj.trackYouTabSettingsIconPress(obj);
      navigateToSettings();
      let tmp3 = tmp27;
      if (tmp27) {
        tmp3 = !navigateToSettings(gradientSecondaryBackground[12]).UNSAFE_isDismissibleContentDismissed(navigateToSettings(gradientSecondaryBackground[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
        const obj3 = navigateToSettings(gradientSecondaryBackground[12]);
      }
      if (tmp3) {
        const result1 = navigateToSettings(gradientSecondaryBackground[12]).UNSAFE_markDismissibleContentAsDismissed(navigateToSettings(gradientSecondaryBackground[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
        const obj4 = navigateToSettings(gradientSecondaryBackground[12]);
      }
    }, items2);
    const callback1 = importAllResult.useCallback(() => {
      const result = navigateToSettings(gradientSecondaryBackground[24]).trackYouTabNitroIconPress();
      navigateToPremium();
    }, items3);
    const items4 = [showBadge, dismissBadge];
    let tmp31 = null;
    if (isEligibleForQuests) {
      obj = { IconComponent: arg1(dependencyMap[28]).QuestsIcon };
      const intl = arg1(dependencyMap[29]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[29]).t.JALI2K);
      obj.onPress = tmp30;
      obj.showRedDot = showBadge;
      tmp31 = callback(importDefault(dependencyMap[27]), obj, "quests");
      const tmp35 = importDefault(dependencyMap[27]);
    }
    const items5 = [tmp31, , , ];
    obj = { shopButtonRef, navigateToShop };
    items5[1] = callback(importDefault(dependencyMap[30]), obj, "shop");
    if (hasPremiumSubscriptionToDisplay) {
      let tmp46 = null;
      if (enabled) {
        obj1 = { onPress: callback1, showReferralNotificationDot };
        tmp46 = callback(importDefault(dependencyMap[31]), obj1, "nitro-subscriber");
      }
      let tmp45 = tmp46;
    } else {
      obj2 = { IconComponent: arg1(dependencyMap[32]).NitroWheelIcon };
      const intl2 = arg1(dependencyMap[29]).intl;
      obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[29]).t.Ipxkog);
      const intl3 = arg1(dependencyMap[29]).intl;
      obj2.label = intl3.string(arg1(dependencyMap[29]).t.Ipxkog);
      obj2.onPress = callback1;
      obj2.showNitroSlant = true;
      tmp45 = callback(importDefault(dependencyMap[27]), obj2, "nitro");
      const tmp43 = importDefault(dependencyMap[27]);
    }
    items5[2] = tmp45;
    obj3 = { ref: settingsButtonRef, IconComponent: arg1(dependencyMap[33]).SettingsIcon };
    const intl4 = arg1(dependencyMap[29]).intl;
    obj3.accessibilityLabel = intl4.string(arg1(dependencyMap[29]).t.3D5yo/);
    obj3.onPress = callback;
    obj3.showRedDot = tmp21;
    items5[3] = callback(importDefault(dependencyMap[27]), obj3, "settings");
    obj4 = {};
    const found = items5.filter((arg0) => null != arg0);
    if (isLoading) {
      obj5 = { style: tmp16.loading };
      obj6 = {};
      let str6 = "large";
      if (obj17.isYouNavFloating()) {
        str6 = "small";
      }
      obj6.size = str6;
      obj5.children = callback(showBadge, obj6);
      isLoading = tmp58(tmp21, obj5);
      const obj17 = arg1(dependencyMap[34]);
      const tmp59 = tmp21;
      const tmp60 = showBadge;
    }
    const items6 = [isLoading, ];
    obj7 = {};
    const tmp53 = importDefault(dependencyMap[27]);
    const tmp56 = closure_12;
    const tmp57 = closure_11;
    const tmp63 = callback;
    const tmp64 = tmp21;
    obj7.style = arg1(dependencyMap[34]).isYouNavFloating() ? tmp16.buttonsFloating : tmp16.buttons;
    obj7.pointerEvents = "box-none";
    obj7.children = found;
    items6[1] = tmp63(tmp64, obj7);
    obj4.children = items6;
    const tmp56Result = tmp56(tmp57, obj4);
    const color = tmp16.containerFloatingGradient.color;
    ContentDismissActionType = color;
    const items7 = [color];
    const memo = importAllResult.useMemo(() => {
      const obj = { start: {}, end: {} };
      const obj2 = navigateToPremium(gradientSecondaryBackground[19])(color);
      const items = [navigateToPremium(gradientSecondaryBackground[19])(color).alpha(0).hex(), ];
      const alphaResult = navigateToPremium(gradientSecondaryBackground[19])(color).alpha(0);
      const obj4 = navigateToPremium(gradientSecondaryBackground[19])(color);
      items[1] = navigateToPremium(gradientSecondaryBackground[19])(color).alpha(1).hex();
      obj.colors = items;
      return obj;
    }, items7);
    const obj19 = arg1(dependencyMap[34]);
    const obj8 = {};
    if (obj20.isYouNavFloating()) {
      obj8.style = tmp16.containerFloatingWrap;
      obj8.pointerEvents = "box-none";
      const obj9 = { style: tmp16.containerFloatingGradient };
      const merged = Object.assign(memo);
      obj9["pointerEvents"] = "none";
      const items8 = [callback(importDefault(dependencyMap[35]), obj9), ];
      const obj10 = { style: tmp16.containerFloating, children: tmp56Result };
      items8[1] = callback(tmp73, obj10);
      obj8.children = items8;
      let tmp72Result = tmp72(tmp73, obj8);
      const tmp78 = importDefault(dependencyMap[35]);
    } else {
      obj8.style = tmp16.container;
      obj8.pointerEvents = "box-none";
      const items9 = [navigateToPremium.backButton, tmp56Result];
      obj8.children = items9;
      tmp72Result = tmp72(tmp73, obj8);
    }
    return tmp72Result;
  }
  containerBackground = userProfileColors.containerBackground;
});
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export { useHasSettingsBadge };
