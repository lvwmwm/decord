// Module ID: 15478
// Function ID: 119159
// Name: useHasSettingsBadge
// Dependencies: [31, 27, 1849, 1345, 1851, 33, 4130, 478, 689, 1324, 12393, 6687, 3946, 1334, 566, 7887, 8236, 8240, 3976, 666, 3776, 15479, 10465, 15480, 15481, 10919, 4979, 15482, 13897, 1212, 15483, 15485, 7871, 5791, 15473, 4554, 2]

// Module 15478 (useHasSettingsBadge)
import importAllResult from "module_15485";
import get_ActivityIndicator from "str2";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_9 } from "GuildFeatures";
import jsxProd from "SettingsIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function useHasSettingsBadge() {
  let tmp = require(12393) /* useEligibleActiveOutboundPromotions */.useUnseenOutboundPromotions().length > 0;
  const obj = require(12393) /* useEligibleActiveOutboundPromotions */;
  const obj2 = require(6687) /* hasUserTrialOfferExpired */;
  const tmp2 = null != require(6687) /* hasUserTrialOfferExpired */.useTrialOffer(closure_9);
  const obj3 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
}
({ View: closure_4, ActivityIndicator: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles((paddingTop, arg1, arg2, arg3, borderColor) => {
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
  const obj6 = require(478) /* isWindows */;
  const space = importDefault(689).space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg1;
  }
  obj2.marginBottom = PX_24;
  obj2.paddingVertical = importDefault(689).space.PX_8;
  obj2.paddingHorizontal = importDefault(689).space.PX_24;
  isIOSResult = require(478) /* isWindows */.isIOS();
  const result = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("YouBannerDecorations");
  const radii = importDefault(689).radii;
  obj2.borderRadius = result ? radii.lg : radii.round;
  if (null == BACKGROUND_SURFACE_HIGH) {
    BACKGROUND_SURFACE_HIGH = importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj2.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj2.flexDirection = "row";
  obj2.borderColor = borderColor;
  obj2.borderWidth = 1;
  const merged3 = Object.assign(importDefault(689).shadows.SHADOW_HIGH);
  obj.containerFloating = obj2;
  const obj3 = { position: "absolute", flexDirection: "row", alignItems: "center", top: importDefault(689).space.PX_4, right: importDefault(689).space.PX_12, paddingTop };
  obj.buttons = obj3;
  const obj4 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_16 };
  obj.buttonsFloating = obj4;
  obj.loading = { height: "100%", alignItems: "center", justifyContent: "center" };
  return obj;
});
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
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingTop;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
  if (num === undefined) {
    num = 0;
  }
  let num2 = navigateToPremium.paddingBottom;
  if (num2 === undefined) {
    num2 = 0;
  }
  gradientSecondaryBackground = undefined;
  let containerBackground;
  let c4;
  let showBadge;
  let dismissBadge;
  let c7;
  let color;
  let obj = navigateToSettings(gradientSecondaryBackground[14]);
  let items = [c7];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp2 = navigateToPremium(gradientSecondaryBackground[15]);
  const tmp2Result = navigateToPremium(gradientSecondaryBackground[15])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[16])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[15])(id) }));
  let obj1 = navigateToSettings(gradientSecondaryBackground[17]);
  const userProfileColors = obj1.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  let obj2 = navigateToSettings(gradientSecondaryBackground[9]);
  if (obj2.isMobileVisualRefreshEnabled("YouBannerDecorations")) {
    let obj3 = navigateToSettings(gradientSecondaryBackground[18]);
    if (obj3.isThemeLight(theme)) {
      containerBackground = null;
      if (null != primaryColor) {
        containerBackground = null;
      }
    }
    const items1 = [gradientSecondaryBackground, containerBackground];
    const tmp16 = callback2(num, num2, containerBackground.useMemo(() => {
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
    let obj4 = navigateToSettings(gradientSecondaryBackground[20]);
    const hasPremiumSubscriptionToDisplay = obj4.useHasPremiumSubscriptionToDisplay();
    const tmp21 = useHasSettingsBadge();
    c4 = tmp21;
    const tmp23 = navigateToPremium(gradientSecondaryBackground[21])();
    showBadge = tmp23.showBadge;
    dismissBadge = tmp23.dismissBadge;
    let obj5 = navigateToSettings(gradientSecondaryBackground[22]);
    const isEligibleForQuests = obj5.getIsEligibleForQuests();
    let obj6 = navigateToSettings(gradientSecondaryBackground[23]);
    const mobileReferralSubscriberProfileEntrypointButtonConfig = obj6.useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
    ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
    let obj7 = navigateToSettings(gradientSecondaryBackground[11]);
    const tmp27 = null != obj7.useTrialOffer(closure_9);
    c7 = tmp27;
    const items2 = [tmp21, navigateToSettings, tmp27];
    const items3 = [navigateToPremium];
    const callback = containerBackground.useCallback(() => {
      let obj = navigateToSettings(gradientSecondaryBackground[24]);
      obj = { isBadged: c4 };
      const result = obj.trackYouTabSettingsIconPress(obj);
      navigateToSettings();
      let tmp3 = c7;
      if (c7) {
        tmp3 = !navigateToSettings(gradientSecondaryBackground[12]).UNSAFE_isDismissibleContentDismissed(navigateToSettings(gradientSecondaryBackground[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
        const obj3 = navigateToSettings(gradientSecondaryBackground[12]);
      }
      if (tmp3) {
        const result1 = navigateToSettings(gradientSecondaryBackground[12]).UNSAFE_markDismissibleContentAsDismissed(navigateToSettings(gradientSecondaryBackground[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
        const obj4 = navigateToSettings(gradientSecondaryBackground[12]);
      }
    }, items2);
    const callback1 = containerBackground.useCallback(() => {
      const result = navigateToSettings(gradientSecondaryBackground[24]).trackYouTabNitroIconPress();
      navigateToPremium();
    }, items3);
    const items4 = [showBadge, dismissBadge];
    let tmp31 = null;
    if (isEligibleForQuests) {
      obj = { IconComponent: navigateToSettings(gradientSecondaryBackground[28]).QuestsIcon };
      const intl = navigateToSettings(gradientSecondaryBackground[29]).intl;
      obj.accessibilityLabel = intl.string(navigateToSettings(gradientSecondaryBackground[29]).t.JALI2K);
      obj.onPress = tmp30;
      obj.showRedDot = showBadge;
      tmp31 = callback(navigateToPremium(gradientSecondaryBackground[27]), obj, "quests");
      const tmp35 = navigateToPremium(gradientSecondaryBackground[27]);
    }
    const items5 = [tmp31, , , ];
    obj = { shopButtonRef, navigateToShop };
    items5[1] = callback(navigateToPremium(gradientSecondaryBackground[30]), obj, "shop");
    if (hasPremiumSubscriptionToDisplay) {
      let tmp46 = null;
      if (enabled) {
        obj1 = { onPress: callback1, showReferralNotificationDot };
        tmp46 = callback(navigateToPremium(gradientSecondaryBackground[31]), obj1, "nitro-subscriber");
      }
      let tmp45 = tmp46;
    } else {
      obj2 = { IconComponent: navigateToSettings(gradientSecondaryBackground[32]).NitroWheelIcon };
      const intl2 = navigateToSettings(gradientSecondaryBackground[29]).intl;
      obj2.accessibilityLabel = intl2.string(navigateToSettings(gradientSecondaryBackground[29]).t.Ipxkog);
      const intl3 = navigateToSettings(gradientSecondaryBackground[29]).intl;
      obj2.label = intl3.string(navigateToSettings(gradientSecondaryBackground[29]).t.Ipxkog);
      obj2.onPress = callback1;
      obj2.showNitroSlant = true;
      tmp45 = callback(navigateToPremium(gradientSecondaryBackground[27]), obj2, "nitro");
      const tmp43 = navigateToPremium(gradientSecondaryBackground[27]);
    }
    items5[2] = tmp45;
    obj3 = { ref: settingsButtonRef, IconComponent: navigateToSettings(gradientSecondaryBackground[33]).SettingsIcon };
    const intl4 = navigateToSettings(gradientSecondaryBackground[29]).intl;
    obj3.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[29]).t["3D5yo/"]);
    obj3.onPress = callback;
    obj3.showRedDot = tmp21;
    items5[3] = callback(navigateToPremium(gradientSecondaryBackground[27]), obj3, "settings");
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
      isLoading = tmp58(c4, obj5);
      obj17 = navigateToSettings(gradientSecondaryBackground[34]);
      const tmp59 = c4;
      const tmp60 = showBadge;
    }
    const items6 = [isLoading, ];
    obj7 = {};
    const tmp53 = navigateToPremium(gradientSecondaryBackground[27]);
    const tmp56 = closure_12;
    const tmp57 = closure_11;
    const tmp63 = callback;
    const tmp64 = c4;
    obj7.style = navigateToSettings(gradientSecondaryBackground[34]).isYouNavFloating() ? tmp16.buttonsFloating : tmp16.buttons;
    obj7.pointerEvents = "box-none";
    obj7.children = found;
    items6[1] = tmp63(tmp64, obj7);
    obj4.children = items6;
    const tmp56Result = tmp56(tmp57, obj4);
    color = tmp16.containerFloatingGradient.color;
    const items7 = [color];
    const memo = containerBackground.useMemo(() => {
      const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
      const obj2 = navigateToPremium(gradientSecondaryBackground[19])(color);
      const items = [navigateToPremium(gradientSecondaryBackground[19])(color).alpha(0).hex(), ];
      const alphaResult = navigateToPremium(gradientSecondaryBackground[19])(color).alpha(0);
      const obj4 = navigateToPremium(gradientSecondaryBackground[19])(color);
      items[1] = navigateToPremium(gradientSecondaryBackground[19])(color).alpha(1).hex();
      obj.colors = items;
      return obj;
    }, items7);
    const obj19 = navigateToSettings(gradientSecondaryBackground[34]);
    const obj8 = {};
    if (obj20.isYouNavFloating()) {
      obj8.style = tmp16.containerFloatingWrap;
      obj8.pointerEvents = "box-none";
      const obj9 = { style: tmp16.containerFloatingGradient };
      const merged = Object.assign(memo);
      obj9["pointerEvents"] = "none";
      const items8 = [callback(navigateToPremium(gradientSecondaryBackground[35]), obj9), ];
      const obj10 = { style: tmp16.containerFloating, children: tmp56Result };
      items8[1] = callback(tmp73, obj10);
      obj8.children = items8;
      let tmp72Result = tmp72(tmp73, obj8);
      const tmp78 = navigateToPremium(gradientSecondaryBackground[35]);
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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export { useHasSettingsBadge };
