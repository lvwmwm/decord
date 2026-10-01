// Module ID: 16604
// Function ID: 16605
// Name: YouBannerDecorations
// Dependencies: [19, 17, 1372, 2042, 1374, 21, 1365, 576, 4836, 13096, 6869, 4654, 2029, 504, 7631, 7673, 7684, 4685, 672, 4488, 16605, 10682, 16606, 16607, 10678, 5759, 16608, 14531, 1115, 16609, 16611, 8122, 6798, 5293, 2]
// Exports: getFloatingNavBottomMargin, useHasSettingsBadge

// Module 16604 (YouBannerDecorations)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import useTrialOffer from "useTrialOffer" /* 6869 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import PromotionsHooks from "PromotionsHooks" /* 13096 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16607 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigateToPremium;

let c10;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  let PX_24;
  let obj2;
  let obj3;
  let obj5;
  let tmp7;
  const obj = { containerFloatingWrap: obj2, containerFloatingGradient: obj3, containerFloating: obj5, buttonsFloating: { flexDirection: "row", alignItems: "center", gap: tmp7(576).space.PX_16 }, loading: { height: "100%", alignItems: "center", justifyContent: "center" } };
  obj2 = { top: undefined, alignItems: "center" };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  obj3 = { color };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  const obj4 = utils_PlatformUtils;
  const isIOSResult = obj4.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
    tmp7 = tmp5;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp7 = tmp5;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj5 = { marginBottom: PX_24, paddingVertical: tmp7(576).space.PX_8, paddingHorizontal: tmp7(576).space.PX_24, borderRadius: tmp7(576).radii.lg, backgroundColor: BACKGROUND_SURFACE_HIGH, flexDirection: "row", borderColor, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp7(576).colors.BACKGROUND_SURFACE_HIGH;
  }
  const merged2 = Object.assign(tmp7(576).shadows.SHADOW_HIGH);
  ({ flexDirection: "row", alignItems: "center", gap: tmp7(576).space.PX_16 });
  return obj;
});
const memoResult = react.memo((navigateToPremium) => {
  let c3;
  let containerBorderColor;
  let enabled;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isLoading;
  let items6;
  let items8;
  let navigateToSettings;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let showReferralNotificationDot;
  let theme;
  let tmp10;
  let tmp28Result2;
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
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
  let tmp = navigateToSettings;
  let obj = navigateToSettings(gradientSecondaryBackground[13]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  let tmp5 = navigateToPremium(gradientSecondaryBackground[14]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5Result = tmp5(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[15])({ user: stateFromStores, displayProfile: tmp5Result }));
  const tmp8 = navigateToPremium(gradientSecondaryBackground[15])({ user: stateFromStores, displayProfile: tmp5Result });
  let tmpResult = tmp(tmp2[16]);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const containerBackground = userProfileColors.containerBackground;
  const tmpResult9 = tmp(gradientSecondaryBackground[17]);
  if (!tmpResult9.isThemeLight(theme)) {
    tmp10 = containerBackground;
  } else {
    tmp10 = null;
    if (null != primaryColor) {
      tmp10 = null;
    }
  }
  react = tmp10;
  let obj4 = react;
  const items1 = [gradientSecondaryBackground, tmp10];
  const tmp11 = closure_13(num, react.useMemo(() => {
    let hexResult1 = null;
    if (null != c3) {
      const mix = _modDef672.mix;
      const obj = _modDef672(c3);
      const hexResult = obj.hex("rgb");
      const obj2 = _modDef672(c3);
      const mixResult = mix(gradientSecondaryBackground, hexResult, obj2.alpha(), "rgb");
      hexResult1 = mixResult.hex("rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  const tmpResult10 = tmp(gradientSecondaryBackground[19]);
  const hasPremiumSubscriptionToDisplay = tmpResult10.useHasPremiumSubscriptionToDisplay();
  const tmpResult11 = tmp(gradientSecondaryBackground[9]);
  let tmp13 = tmpResult11.useUnseenOutboundPromotions().length > 0;
  const tmpResult12 = tmp(gradientSecondaryBackground[10]);
  const tmp15 = null != tmpResult12.useTrialOffer(closure_9);
  const tmpResult13 = tmp(gradientSecondaryBackground[11]);
  let result = tmpResult13.useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[12]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  const tmp14 = closure_9;
  const tmp17 = !result && tmp15;
  if (!tmp13) {
    tmp13 = tmp17;
  }
  isBadged = tmp13;
  const tmp18 = navigateToPremium(gradientSecondaryBackground[20])();
  showBadge = tmp18.showBadge;
  dismissBadge = tmp18.dismissBadge;
  const tmpResult14 = tmp(gradientSecondaryBackground[21]);
  const isEligibleForQuests = tmpResult14.getIsEligibleForQuests();
  const tmpResult15 = tmp(gradientSecondaryBackground[22]);
  const mobileReferralSubscriberProfileEntrypointButtonConfig = tmpResult15.useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
  ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
  const tmpResult16 = tmp(gradientSecondaryBackground[10]);
  const tmp21 = null != tmpResult16.useTrialOffer(tmp14);
  currentUser = tmp21;
  const items2 = [tmp13, navigateToSettings, tmp21];
  const items3 = [navigateToPremium];
  const callback = obj4.useCallback(() => {
    const obj = you_tracking_Tracking;
    const obj2 = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj2);
    navigateToSettings();
    let tmp5 = currentUser;
    if (tmp5) {
      const tmpResult = DismissibleContentUnsafeUtils;
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(2029).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      const tmpResult2 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(tmp(2029).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const callback1 = obj4.useCallback(() => {
    const obj = you_tracking_Tracking;
    const result = obj.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const items4 = [showBadge, dismissBadge];
  let tmp25 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp(tmp2[27]).QuestsIcon, accessibilityLabel: intl.string(tmp(tmp2[28]).t.JALI2K), onPress: tmp24, showRedDot: showBadge };
    const tmp4Result = navigateToPremium(gradientSecondaryBackground[26]);
    intl = tmp(tmp2[28]).intl;
    tmp25 = closure_10(tmp4Result, obj2, "quests");
  }
  const items5 = [tmp25, closure_10(tmp4(tmp2[29]), { shopButtonRef, navigateToShop }, "shop"), , ];
  if (hasPremiumSubscriptionToDisplay) {
    let tmp28Result = null;
    if (enabled) {
      const obj3 = { onPress: callback1, showReferralNotificationDot };
      tmp28Result = tmp28(tmp4(tmp2[30]), obj3, "nitro-subscriber");
    }
    tmp28Result2 = tmp28Result;
  } else {
    const obj5 = { IconComponent: tmp(gradientSecondaryBackground[31]).NitroWheelIcon, accessibilityLabel: intl2.string(tmp(gradientSecondaryBackground[28]).t.Ipxkog), label: intl3.string(tmp(gradientSecondaryBackground[28]).t.Ipxkog), onPress: callback1 };
    const tmp4Result4 = navigateToPremium(gradientSecondaryBackground[26]);
    intl2 = tmp(tmp2[28]).intl;
    intl3 = tmp(tmp2[28]).intl;
    tmp28Result2 = tmp28(tmp4Result4, obj5, "nitro");
  }
  items5[2] = tmp28Result2;
  const obj6 = { ref: settingsButtonRef, IconComponent: tmp(gradientSecondaryBackground[32]).SettingsIcon, accessibilityLabel: intl4.string(tmp(gradientSecondaryBackground[28]).t["3D5yo/"]), onPress: callback, showRedDot: tmp13 };
  const tmp4Result5 = navigateToPremium(gradientSecondaryBackground[26]);
  intl4 = tmp(tmp2[28]).intl;
  items5[3] = closure_10(tmp4Result5, obj6, "settings");
  const found = items5.filter((item) => null != item);
  const tmp35 = closure_11;
  if (isLoading) {
    const obj7 = { style: tmp11.loading, children: closure_10(showBadge, { size: "small" }) };
    isLoading = tmp28(isBadged, obj7);
  }
  const obj8 = { children: items6 };
  items6 = [isLoading, ];
  const obj9 = { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found };
  items6[1] = closure_10(isBadged, obj9);
  color = tmp11.containerFloatingGradient.color;
  const items7 = [color];
  const obj10 = { style: tmp11.containerFloatingWrap, pointerEvents: "box-none", children: items8 };
  const tmp34Result = closure_12(tmp35, obj8);
  const memo = obj4.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [, ];
    const obj2 = _modDef672(color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef672(color);
    const alphaResult1 = obj4.alpha(1);
    items[1] = alphaResult1.hex();
    return obj;
  }, items7);
  const obj11 = { style: tmp11.containerFloatingGradient, pointerEvents: "none" };
  const tmp4Result6 = navigateToPremium(gradientSecondaryBackground[33]);
  const merged = Object.assign(memo);
  items8 = [closure_10(tmp4Result6, obj11), ];
  const obj12 = { style: tmp11.containerFloating, children: tmp34Result };
  items8[1] = closure_10(isBadged, obj12);
  return closure_12(isBadged, obj10);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export const getFloatingNavBottomMargin = function getFloatingNavBottomMargin(bottom) {
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
};
export const useHasSettingsBadge = function useHasSettingsBadge() {
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
};
