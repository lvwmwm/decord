// Module ID: 9624
// Function ID: 9625
// Name: YouBannerDecorations
// Dependencies: [19, 17, 2063, 1383, 4860, 1385, 21, 1376, 575, 5014, 9625, 7629, 5044, 4847, 1113, 504, 8757, 8800, 8811, 5021, 671, 2047, 9670, 9671, 9673, 9674, 9677, 9678, 6784, 14696, 14702, 14714, 14716, 9528, 7561, 14704, 5587, 2]
// Exports: getFloatingNavBottomMargin, useHasSettingsBadge

// Module 9624 (YouBannerDecorations)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2063 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import useTrialOffer from "useTrialOffer" /* 7629 */;
import PromotionsHooks from "PromotionsHooks" /* 9625 */;
import tracking_Tracking from "tracking/Tracking" /* 9677 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const useIntlLoaderStore = IntlLoaderStore.useIntlLoaderStore;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  let PX_24;
  let obj2;
  let obj3;
  let obj5;
  const obj = { containerFloatingWrap: obj2, containerFloatingGradient: obj3, containerFloating: obj5, containerFloatingContent: { maxWidth: "100%", flexDirection: "row" }, endcap: { width: nativeDefault.space.PX_16, flexShrink: 1 }, buttonsFloating: { flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 } };
  obj2 = { top: undefined, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3 = { color };
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  const obj4 = utils_PlatformUtils;
  const isIOSResult = obj4.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg0;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj5 = { marginBottom: PX_24, maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.lg, backgroundColor: BACKGROUND_SURFACE_HIGH, flexDirection: "row", borderColor, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp2(575).colors.BACKGROUND_SURFACE_HIGH;
  }
  const merged2 = Object.assign(tmp2(575).shadows.SHADOW_HIGH);
  ({ width: nativeDefault.space.PX_16, flexShrink: 1 });
  ({ flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 });
  return obj;
});
const memoResult = react.memo(function YouBannerDecorations(navigateToSettings) {
  let c3;
  let containerBorderColor;
  let found;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items7;
  let items8;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let theme;
  let tmp11;
  let tmp33Result;
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  let num = navigateToSettings.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToSettings);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  react = undefined;
  let isBadged;
  let showBadge;
  let dismissBadge;
  let currentUser;
  let color;
  let tmp = dismissBadge((isLoading) => {
    let currentLocale;
    if (!isLoading.isLoading) {
      currentLocale = navigateToSettings(gradientSecondaryBackground[14]).intl.currentLocale;
    }
    return currentLocale;
  });
  let obj = navigateToSettings(gradientSecondaryBackground[15]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = navigateToPremium;
  let id;
  const tmp6 = navigateToPremium(gradientSecondaryBackground[16]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = tmp6(id);
  ({ theme, primaryColor, secondaryColor } = tmp5(gradientSecondaryBackground[17])({ user: stateFromStores, displayProfile: tmp6Result }));
  const tmp9 = tmp5(gradientSecondaryBackground[17])({ user: stateFromStores, displayProfile: tmp6Result });
  const tmp2Result = navigateToSettings(gradientSecondaryBackground[18]);
  const userProfileColors = tmp2Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const containerBackground = userProfileColors.containerBackground;
  const tmp2Result9 = navigateToSettings(gradientSecondaryBackground[19]);
  if (!tmp2Result9.isThemeLight(theme)) {
    tmp11 = containerBackground;
  } else {
    tmp11 = null;
    if (null != primaryColor) {
      tmp11 = null;
    }
  }
  react = tmp11;
  let obj4 = react;
  const items1 = [gradientSecondaryBackground, tmp11];
  const tmp12 = closure_12(num, react.useMemo(() => {
    let hexResult1 = null;
    if (null != c3) {
      const mix = _modDef671.mix;
      const obj = _modDef671(c3);
      const hexResult = obj.hex("rgb");
      const obj2 = _modDef671(c3);
      const mixResult = mix(gradientSecondaryBackground, hexResult, obj2.alpha(), "rgb");
      hexResult1 = mixResult.hex("rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  const tmp2Result10 = navigateToSettings(gradientSecondaryBackground[21]);
  const hasPremiumSubscriptionToDisplay = tmp2Result10.useHasPremiumSubscriptionToDisplay();
  const tmp2Result11 = navigateToSettings(gradientSecondaryBackground[22]);
  const mapleSyrup3Enabled = tmp2Result11.useMapleSyrup3Enabled("YouBannerDecorations");
  const tmp2Result12 = navigateToSettings(gradientSecondaryBackground[10]);
  let tmp15 = tmp2Result12.useUnseenOutboundPromotions().length > 0;
  const tmp2Result13 = navigateToSettings(gradientSecondaryBackground[11]);
  const tmp17 = null != tmp2Result13.useTrialOffer(closure_9);
  const tmp2Result14 = navigateToSettings(gradientSecondaryBackground[12]);
  let result = tmp2Result14.useIsDismissibleContentDismissed_UNSAFE(tmp2(tmp3[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  const tmp16 = closure_9;
  const tmp19 = !result && tmp17;
  if (!tmp15) {
    tmp15 = tmp19;
  }
  isBadged = tmp15;
  const tmp20 = tmp5(gradientSecondaryBackground[23])();
  showBadge = tmp20.showBadge;
  dismissBadge = tmp20.dismissBadge;
  const tmp2Result15 = navigateToSettings(gradientSecondaryBackground[24]);
  const isEligibleForQuests = tmp2Result15.getIsEligibleForQuests();
  const tmp22 = tmp5(gradientSecondaryBackground[25])("YouBannerDecorations");
  let placement;
  if (tmp22 != null) {
    placement = tmp22.placement;
  }
  const tmp2Result16 = navigateToSettings(gradientSecondaryBackground[11]);
  const tmp24 = null != tmp2Result16.useTrialOffer(tmp16);
  currentUser = tmp24;
  const items2 = [tmp15, navigateToSettings, tmp24];
  const items3 = [navigateToPremium];
  const callback = obj4.useCallback(() => {
    const obj = tracking_Tracking;
    const obj2 = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj2);
    navigateToSettings();
    let tmp5 = currentUser;
    if (tmp5) {
      const tmpResult = DismissibleContentUnsafeUtils;
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4847).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      const tmpResult2 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(4847).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const items4 = [showBadge, dismissBadge];
  const callback1 = obj4.useCallback(() => {
    const obj = tracking_Tracking;
    const result = obj.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  let tmp28 = null;
  const callback2 = obj4.useCallback(() => {
    const tmp = showBadge;
    if (tmp) {
      dismissBadge(ContentDismissActionType.TAKE_ACTION);
    }
    const obj = QuestUtils;
    const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
    obj.openQuestHome(obj2);
  }, items4);
  if ("you_screen" === placement) {
    tmp28 = closure_10(tmp5(tmp3[29]), {}, "conjure");
  }
  const items5 = [tmp28, , , , ];
  let tmp30 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp2(tmp3[31]).QuestsIcon, accessibilityLabel: intl.string(tmp2(tmp3[14]).t.JALI2K), onPress: callback2, showRedDot: showBadge };
    const tmp5Result = tmp5(gradientSecondaryBackground[30]);
    intl = tmp2(tmp3[14]).intl;
    tmp30 = closure_10(tmp5Result, obj2, "quests");
  }
  items5[1] = tmp30;
  items5[2] = closure_10(tmp5(gradientSecondaryBackground[32]), { shopButtonRef, navigateToShop }, "shop");
  if (!hasPremiumSubscriptionToDisplay) {
    const obj3 = { IconComponent: navigateToSettings(gradientSecondaryBackground[33]).NitroWheelIcon, accessibilityLabel: intl2.string(navigateToSettings(gradientSecondaryBackground[14]).t.Ipxkog), label: intl3.string(navigateToSettings(gradientSecondaryBackground[14]).t.Ipxkog), onPress: callback1 };
    const tmp5Result4 = tmp5(gradientSecondaryBackground[30]);
    intl2 = tmp2(tmp3[14]).intl;
    intl3 = tmp2(tmp3[14]).intl;
    tmp33Result = tmp33(tmp5Result4, obj3, "nitro");
  } else {
    tmp33Result = null;
  }
  items5[3] = tmp33Result;
  const obj5 = { ref: settingsButtonRef, IconComponent: navigateToSettings(gradientSecondaryBackground[34]).SettingsIcon, accessibilityLabel: intl4.string(navigateToSettings(gradientSecondaryBackground[14]).t["3D5yo/"]), onPress: callback, showRedDot: tmp15, testID: "you_tab_settings_button" };
  const tmp5Result5 = tmp5(gradientSecondaryBackground[30]);
  intl4 = tmp2(tmp3[14]).intl;
  items5[4] = closure_10(tmp5Result5, obj5, "settings");
  const obj6 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: closure_10(navigateToSettings(gradientSecondaryBackground[35]).YouScreenNavIconMeasurer, { children: found }, tmp) };
  found = items5.filter((item) => null != item);
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const obj7 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: items7 };
  const tmp33Result2 = closure_10(isBadged, obj6);
  const memo = obj4.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef671(color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef671(color);
    const alphaResult1 = obj4.alpha(1);
    items[1] = alphaResult1.hex();
    return obj;
  }, items6);
  const obj8 = { style: tmp12.containerFloatingGradient, pointerEvents: "none" };
  const tmp5Result6 = tmp5(gradientSecondaryBackground[36]);
  const merged = Object.assign(memo);
  items7 = [closure_10(tmp5Result6, obj8), ];
  const obj9 = { style: tmp12.containerFloating, children: items8 };
  items8 = [, , ];
  const obj10 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[0] = closure_10(isBadged, obj10);
  const obj11 = { style: tmp12.containerFloatingContent, children: tmp33Result2 };
  items8[1] = closure_10(isBadged, obj11);
  const obj12 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[2] = closure_10(isBadged, obj12);
  items7[1] = closure_11(isBadged, obj9);
  return closure_11(isBadged, obj7);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export function getFloatingNavBottomMargin(bottom) {
  let PX_24;
  const obj = utils_PlatformUtils;
  const isIOSResult = obj.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + bottom;
  }
  return PX_24;
}
export function useHasSettingsBadge() {
  const obj = PromotionsHooks;
  let tmp = obj.useUnseenOutboundPromotions().length > 0;
  const obj2 = useTrialOffer;
  const tmp2 = null != obj2.useTrialOffer(closure_9);
  const obj3 = DismissibleContentUnsafeUtils;
  const result = obj3.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  const tmp4 = !result && tmp2;
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
}
