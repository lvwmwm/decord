// Module ID: 10111
// Function ID: 10112
// Name: BadgeDetailsSheet
// Dependencies: [5, 32, 19, 17, 5307, 1388, 10112, 8547, 1072, 5567, 21, 5306, 575, 6037, 5929, 1655, 10113, 504, 10114, 10115, 10116, 1708, 10117, 2153, 1392, 10118, 10127, 15272, 5552, 10110, 15273, 8604, 1113, 7459, 15279, 15277, 15284, 5936, 15285, 8552, 5548, 1630, 10076, 15278, 11819, 8559, 5897, 5566, 5570, 5901, 2]
// Exports: default

// Module 10111 (BadgeDetailsSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5567 */;
import Text_Text from "Text/Text" /* 5929 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 6037 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8552 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10110 */;
import BadgeUtils from "BadgeUtils" /* 10113 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 15272 */;
import useBadgeDirectoryBadgeIndicators from "useBadgeDirectoryBadgeIndicators" /* 15278 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import UserStore from "UserStore" /* 1388 */;
import BadgeDirectorySeenStore from "BadgeDirectorySeenStore" /* 10112 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8547 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let c2, set;

let Platform;
let closure_14;
let closure_15;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  let tmp = closure_16();
  const accessoryDot = tmp;
  let obj = {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let items;
      let key;
      let node;
      let tmp2 = index > 0;
      ({ key, node } = item);
      const Fragment = react.Fragment;
      const tmp = gesture;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = map1(metroRequire, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return tmp(Fragment, obj2, key);
    })
  };
  return closure_13(closure_6, obj);
}
function InfoNotice(children) {
  let items;
  children = children.children;
  const tmp = closure_16();
  const obj = { style: tmp.notice, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp.noticeIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [map1(CircleInformationIcon, obj2), ];
  const obj3 = { variant: "body-xs/medium", color: "text-default", style: tmp.noticeText, children };
  items[1] = map1(Text_Text.Text, obj3);
  return gesture(metroRequire, obj);
}
function BadgeUnlockLabel(unlock) {
  let Text;
  let items2;
  let obj3;
  let tmp2Result;
  let tmp4;
  let tmp5;
  unlock = unlock.unlock;
  const opacity = unlock.opacity;
  const tmp = closure_16();
  let obj = _mod1655;
  const items = [closure_19, opacity];
  let c0;
  [tmp4, tmp5] = items;
  class BadgeDetailsSheetTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp5];
  BadgeDetailsSheetTsx1.__closure = items1;
  BadgeDetailsSheetTsx1.__workletHash = 3063648354188;
  BadgeDetailsSheetTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(BadgeDetailsSheetTsx1);
  const obj2 = { style: items2, pointerEvents: "none", "aria-hidden": true, children: map1(Text, obj3) };
  items2 = [tmp.unlockLabel, animatedStyle];
  const View = _modDef1655.View;
  obj3 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp.centeredText, children: tmp2Result.getBadgeUnlockLabel(unlock.badge, unlock.previousTierKey) };
  Text = tmp2(5929).Text;
  tmp2Result = BadgeUtils;
  return map1(View, obj2);
}
function BadgeDetailsSheetContent(badge) {
  let Heading;
  let Text;
  let View7;
  let animatedUrl;
  let contentOpacity;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let imageUrl;
  let intl;
  let intl2;
  let intl3;
  let isNitro;
  let isViewerOwnershipKnown;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let num2;
  let obj11;
  let obj14;
  let obj18;
  let obj20;
  let obj25;
  let obj28;
  let obj29;
  let obj33;
  let obj41;
  let obj42;
  let obj7;
  let obj9;
  let sheetIndex;
  let showNewTag;
  let startsHidden;
  let targetUsername;
  let titleScale;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp2Result20;
  let tmp2Result26;
  let tmp34Result9;
  let tmp6Result;
  let tmp6Result2;
  let unlock;
  let unlockLabelOpacity;
  let useReducedMotion;
  let viewerBadge;
  badge = badge.badge;
  ({ unlock, contentOpacity, titleScale, unlockLabelOpacity, viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ isViewerOwnershipKnown, showNewTag } = badge);
  let badgeDetailsCta;
  ({ sheetIndex, startsHidden, targetUsername } = badge);
  const tmp = closure_16();
  let obj = badge(isViewingOtherUser[17]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = badge(isViewingOtherUser[17]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const tmp7 = displayedUserId(isViewingOtherUser[18])(badge.badge_id);
  const tmp8 = displayedUserId(isViewingOtherUser[19])({ badge, viewerBadge, isViewingOtherUser });
  let tmp34Result12 = displayedUserId(isViewingOtherUser[20])({ badge, isViewingOtherUser });
  let obj3 = badge(isViewingOtherUser[15]);
  const items2 = [closure_21, contentOpacity];
  let c0;
  [tmp10, tmp11] = items2;
  class BadgeDetailsSheetTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp11];
  BadgeDetailsSheetTsx2.__closure = items3;
  BadgeDetailsSheetTsx2.__workletHash = 4967119618479;
  BadgeDetailsSheetTsx2.__initData = tmp10;
  const animatedStyle = obj3.useAnimatedStyle(BadgeDetailsSheetTsx2);
  const items4 = [closure_22, titleScale];
  c0 = undefined;
  [tmp13, tmp14] = items4;
  const tmp2Result = badge(isViewingOtherUser[15]);
  class BadgeDetailsSheetTsx3 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items5 = [tmp14];
  BadgeDetailsSheetTsx3.__closure = items5;
  BadgeDetailsSheetTsx3.__workletHash = 10150135716089;
  BadgeDetailsSheetTsx3.__initData = tmp13;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(BadgeDetailsSheetTsx3);
  [tmp17, tmp18] = react.useState(!startsHidden);
  _slicedToArray(react.useState(!startsHidden), 2);
  const items6 = [closure_23, contentOpacity];
  c0 = undefined;
  [tmp20, tmp21] = items6;
  const tmp2Result14 = badge(isViewingOtherUser[15]);
  class BadgeDetailsSheetTsx4 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items7 = [tmp21];
  BadgeDetailsSheetTsx4.__closure = items7;
  BadgeDetailsSheetTsx4.__workletHash = 4791037630466;
  BadgeDetailsSheetTsx4.__initData = tmp20;
  const items8 = [closure_24, , ];
  const useAnimatedReaction = tmp2Result14.useAnimatedReaction;
  items8[1] = badge(isViewingOtherUser[21]).scheduleOnRN;
  items8[2] = tmp18;
  c0 = undefined;
  let c1;
  [tmp22, tmp23, tmp24] = items8;
  class BadgeDetailsSheetTsx5 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items9 = [tmp23, tmp24];
  BadgeDetailsSheetTsx5.__closure = items9;
  BadgeDetailsSheetTsx5.__workletHash = 2925858299866;
  BadgeDetailsSheetTsx5.__initData = tmp22;
  const animatedReaction = useAnimatedReaction(BadgeDetailsSheetTsx4, BadgeDetailsSheetTsx5);
  let obj4 = null;
  if (!tmp17) {
    obj4 = { pointerEvents: "none", "aria-hidden": true };
  }
  const tmp2Result15 = badge(isViewingOtherUser[16]);
  const displayTier = tmp2Result15.getDisplayTier(badge);
  const tmp2Result16 = badge(isViewingOtherUser[22]);
  const badgeArtUrls = tmp2Result16.getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result17 = badge(isViewingOtherUser[22]);
  const badgeTitle = tmp2Result17.getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tiers = badge.tiers;
  let num;
  const tmp2Result18 = badge(isViewingOtherUser[22]);
  const isLegacyDisplayBadgeResult = tmp2Result18.isLegacyDisplayBadge(badge);
  if (tiers != null) {
    num = tiers.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp50Result4 = num > 0;
  let flag;
  if (viewerBadge != null) {
    flag = viewerBadge.owned;
  }
  if (flag == null) {
    flag = false;
  }
  const items10 = [];
  const tmp2Result19 = badge(isViewingOtherUser[23]);
  if (!tmp2Result19.isNullOrEmpty(badge.info_label)) {
    const push = items10.push;
    const obj6 = { key: "info", node: closure_13(badge(isViewingOtherUser[14]).Text, obj7) };
    obj7 = { variant: "body-md/medium", color: "text-subtle", children: badge.info_label };
    push(obj6);
  }
  const push2 = items10.push;
  const obj8 = { key: "status", node: closure_13(Text, obj9) };
  obj9 = { variant: "body-md/medium", color: "text-subtle", children: tmp2Result20.getBadgeStatusText(badge, tmp7) };
  Text = tmp2(tmp3[14]).Text;
  tmp2Result20 = badge(isViewingOtherUser[22]);
  push2(obj8);
  const tmp36 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[24]).BadgeRarity.COMMON;
  if (tmp36) {
    const push3 = items10.push;
    const obj10 = { key: "rarity", node: closure_13(displayedUserId(isViewingOtherUser[25]), obj11) };
    obj11 = { rarity };
    push3(obj10);
  }
  const tmp2Result21 = badge(isViewingOtherUser[22]);
  let result = tmp2Result21.isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result22 = badge(isViewingOtherUser[22]);
  const badgeDescriptionText = tmp2Result22.getBadgeDescriptionText({ badge, viewerBadge, isViewerOnUpgradeableNitro: result });
  const tmp2Result23 = badge(isViewingOtherUser[23]);
  const isNullOrEmptyResult = tmp2Result23.isNullOrEmpty(badgeDescriptionText);
  const tmp2Result24 = badge(isViewingOtherUser[26]);
  badgeDetailsCta = tmp2Result24.getBadgeDetailsCta(badge.badge_id);
  const items11 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = obj5.useCallback(() => {
    const obj = badgeDetailsCta;
    if (null != badgeDetailsCta) {
      const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      obj.ctaAction();
    }
  }, items11);
  const callback1 = obj5.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[28]);
    obj.hideActionSheet(badge(isViewingOtherUser[29]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[30]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[31]);
    const obj4 = { screen: constants.DATA_AND_PRIVACY };
    obj3.openUserSettings(obj4);
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = obj5.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[28]);
    obj.hideActionSheet(badge(isViewingOtherUser[29]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[30]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[30]);
    const result1 = obj3.openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj12 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    const tmp2Result25 = badge(isViewingOtherUser[22]);
    result1 = tmp2Result25.shouldShowLegacyUnavailableNotice(obj12);
  }
  let tmp46 = badge;
  if (!isViewingOtherUser) {
    let tmp47 = viewerBadge;
    if (viewerBadge == null) {
      tmp47 = badge;
    }
    tmp46 = tmp47;
  }
  let tmp34Result = null;
  if (result1) {
    const obj13 = { children: intl.format(badge(isViewingOtherUser[32]).t.vFekBs, obj14) };
    intl = tmp2(tmp3[32]).intl;
    obj14 = { onViewBadges: callback2 };
    tmp34Result = tmp34(InfoNotice, obj13);
  }
  const obj15 = { style: tmp.header, children: items13 };
  if (showNewTag) {
    const obj16 = { style: items12, children: closure_13(badge(isViewingOtherUser[33]).Badge, { type: "new", variant: "primary" }) };
    items12 = [tmp.newTag, animatedStyle];
    const View = tmp6(tmp3[15]).View;
    const merged = Object.assign(obj4);
    showNewTag = tmp34(View, obj16);
  }
  items13 = [showNewTag, , ];
  if (null != unlock) {
    const obj17 = { style: tmp.graphic, children: closure_13(tmp6Result, obj18, "" + unlock.badge.badge_id + ":" + unlock.badge.current_tier) };
    obj18 = { userId: displayedUserId, sheetIndex, contentOpacity, titleScale, unlockLabelOpacity };
    tmp6Result = displayedUserId(isViewingOtherUser[34]);
    const merged1 = Object.assign(unlock);
    const _HermesInternal = HermesInternal;
    tmp34Result9 = tmp34(tmp52, obj17);
  } else {
    tmp34Result9 = null != imageUrl;
    if (tmp34Result9) {
      const obj19 = { style: animatedStyle, children: closure_13(tmp6Result2, obj20) };
      const View2 = tmp6(tmp3[15]).View;
      const merged2 = Object.assign(obj4);
      obj20 = { url: imageUrl, height: num2, animated: null != animatedUrl, style: items14 };
      num2 = 120;
      tmp6Result2 = displayedUserId(isViewingOtherUser[35]);
      if (null != animatedUrl) {
        num2 = 180;
      }
      items14 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
      tmp34Result9 = tmp34(View2, obj19);
    }
  }
  items13[1] = tmp34Result9;
  const obj22 = { style: items15, children: items17 };
  items15 = [tmp.identity, animatedStyle];
  const obj21 = { style: tmp.identityArea, children: items20 };
  const View3 = tmp6(tmp3[15]).View;
  const merged3 = Object.assign(obj4);
  let tmp34Result10 = null != eyebrow;
  if (tmp34Result10) {
    const obj23 = { variant: "body-md/medium", color: "text-subtle", style: items16, children: eyebrow };
    items16 = [, ];
    ({ centeredText: arr18[0], eyebrow: arr18[1] } = tmp);
    tmp34Result10 = tmp34(tmp2(tmp3[14]).Text, obj23);
  }
  items17 = [tmp34Result10, , ];
  const obj24 = { style: items18, children: closure_13(Heading, obj25) };
  items18 = [tmp.title, animatedStyle1];
  const View4 = tmp6(tmp3[15]).View;
  let str3 = "display-sm";
  Heading = tmp2(tmp3[14]).Heading;
  if (isNitro) {
    str3 = "nitro-sm";
  }
  obj25 = { variant: str3, color: "text-strong", style: items19, children: displayName };
  items19 = [tmp.centeredText, isNitro && tmp.uppercase];
  items17[1] = closure_13(View4, obj24);
  items17[2] = closure_13(BadgeAccessoryLine, { segments: items10 });
  items20 = [closure_14(View3, obj22), ];
  let tmp34Result11 = null != unlock;
  if (tmp34Result11) {
    const obj26 = { unlock, opacity: unlockLabelOpacity };
    tmp34Result11 = tmp34(BadgeUnlockLabel, obj26);
  }
  items20[1] = tmp34Result11;
  items13[2] = closure_14(closure_6, obj21);
  const items21 = [closure_14(closure_6, obj15), , ];
  if (tmp34Result12) {
    const obj27 = { style: animatedStyle, children: closure_13(InfoNotice, obj28) };
    const View5 = tmp6(tmp3[15]).View;
    const merged4 = Object.assign(obj4);
    obj28 = { children: intl2.format(badge(isViewingOtherUser[32]).t.Zh44ni, obj29) };
    intl2 = tmp2(tmp3[32]).intl;
    obj29 = { onGoToSettings: callback1 };
    tmp34Result12 = tmp34(View5, obj27);
  }
  items21[1] = tmp34Result12;
  if (!tmp8) {
    if (isNullOrEmptyResult) {
      let tmp34Result13;
      if (!tmp50Result4) {
        tmp34Result13 = null != tmp34Result;
        if (tmp34Result13) {
          const obj30 = { style: animatedStyle, children: tmp34Result };
          const View6 = tmp6(tmp3[15]).View;
          const merged5 = Object.assign(obj4);
          tmp34Result13 = tmp34(View6, obj30);
        }
      }
      const obj31 = { children: items21 };
      items21[2] = tmp34Result13;
      return closure_14(closure_15, obj31);
    }
  }
  const obj32 = { style: tmp.card, children: closure_14(View7, obj33) };
  obj33 = { style: items22, children: items24 };
  items22 = [tmp.cardContent, animatedStyle];
  View7 = tmp6(tmp3[15]).View;
  const merged6 = Object.assign(obj4);
  let tmp50Result = tmp8;
  if (tmp50Result) {
    const obj34 = { children: items23 };
    const obj35 = { badge, viewerBadge };
    items23 = [closure_13(tmp6(tmp3[36]), obj35), ];
    const obj36 = { style: tmp.divider };
    items23[1] = closure_13(closure_6, obj36);
    tmp50Result = tmp50(tmp51, obj34);
  }
  items24 = [tmp50Result, , , , ];
  let tmp50Result3 = tmp41;
  if (!isNullOrEmptyResult) {
    let tmp34Result14 = isLegacyDisplayBadgeResult;
    const obj37 = { style: tmp.descriptionGroup, children: items25 };
    if (tmp34Result14) {
      const obj38 = { variant: "body-sm/medium", color: "text-subtle", children: intl3.string(badge(isViewingOtherUser[32]).t["/Gmn3f"]) };
      const Text2 = tmp2(tmp3[14]).Text;
      intl3 = tmp2(tmp3[32]).intl;
      tmp34Result14 = tmp34(Text2, obj38);
    }
    items25 = [tmp34Result14, ];
    const obj39 = { variant: "body-md/medium", color: "text-default", children: badgeDescriptionText };
    items25[1] = closure_13(badge(isViewingOtherUser[14]).Text, obj39);
    tmp50Result3 = tmp50(tmp52, obj37);
  }
  items24[1] = tmp50Result3;
  let tmp34Result15 = tmp41;
  if (!isNullOrEmptyResult) {
    tmp34Result15 = null != badgeDetailsCta;
  }
  if (tmp34Result15) {
    tmp34Result15 = isViewerOwnershipKnown;
  }
  if (tmp34Result15) {
    const obj40 = { variant: tmp2Result26.getBadgeCtaVariant(obj41), size: "md", onPress: callback, text: badgeDetailsCta.ctaLabel(obj42) };
    const Button = tmp2(tmp3[37]).Button;
    obj41 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj42 = { owned: flag, isViewerOnUpgradeableNitro: result };
    tmp2Result26 = badge(isViewingOtherUser[22]);
    tmp34Result15 = tmp34(Button, obj40);
  }
  items24[2] = tmp34Result15;
  if (tmp50Result4) {
    let tmp34Result16 = !tmp8 && tmp41;
    if (tmp34Result16) {
      const obj43 = { style: tmp.divider };
      tmp34Result16 = tmp34(tmp52, obj43);
    }
    const obj44 = { children: items26 };
    items26 = [tmp34Result16, ];
    const obj45 = { badge: tmp46, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items26[1] = closure_13(displayedUserId(isViewingOtherUser[38]), obj45);
    tmp50Result4 = tmp50(tmp51, obj44);
  }
  items24[3] = tmp50Result4;
  items24[4] = tmp34Result;
  tmp34Result13 = tmp34(tmp52, obj32);
}
function BadgeDetailsPage(badgeId) {
  let badge1;
  let displayedUserId;
  let hasUpdates;
  let isUnlockReady;
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let obj7;
  let sheetIndex;
  let showNewTag;
  let source;
  let targetUsername;
  let tmp24;
  badgeId = badgeId.badgeId;
  ({ hasUpdates, displayedUserId } = badgeId);
  const currentUserId = badgeId.currentUserId;
  const onUnlock = badgeId.onUnlock;
  let unlock;
  hasUpdates = undefined;
  let sharedValue;
  let sharedValue2;
  ({ isUnlockReady, sheetIndex, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, source, showNewTag } = badgeId);
  let tmp = closure_16();
  let obj = badgeId(currentUserId[17]);
  const items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const stateFromStores = obj.useStateFromStores(items, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items1);
  const obj2 = badgeId(currentUserId[17]);
  const items2 = [BadgeDirectoryStore];
  const items3 = [badgeId, currentUserId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let badgeById;
    if (null != currentUserId) {
      badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
    }
    return badgeById;
  }, items3);
  const items4 = [sharedValue];
  const obj3 = badgeId(currentUserId[17]);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => sharedValue.useReducedMotion);
  const tmp7 = stateFromStores2(unlock.useState(null), 2);
  unlock = tmp7[0];
  let tmp10 = null == unlock;
  const tmp9 = tmp7[1];
  if (tmp10) {
    tmp10 = hasUpdates;
  }
  if (tmp10) {
    tmp10 = isUnlockReady;
  }
  if (tmp10) {
    tmp10 = null != stateFromStores;
  }
  if (tmp10) {
    const obj5 = { badge: stateFromStores, previousTierKey: stateFromStores.previous_acked_tier, source };
    tmp9(obj5);
  }
  const items5 = [unlock];
  const effect = obj4.useEffect(() => {
    if (null != first) {
      const obj = BadgeDirectoryActionCreators;
      obj.ackBadge(tmp.badge.badge_id);
    }
  }, items5);
  const items6 = [onUnlock, unlock];
  const effect1 = obj4.useEffect(() => {
    if (null != first) {
      onUnlock();
    }
  }, items6);
  if (hasUpdates) {
    hasUpdates = !stateFromStores2;
  }
  let num = 1;
  let num2 = 1;
  const useSharedValue = tmp2(tmp3[15]).useSharedValue;
  badgeId(currentUserId[15]);
  if (hasUpdates) {
    num2 = 0;
  }
  sharedValue = useSharedValue(num2);
  const useSharedValue2 = tmp2(tmp3[15]).useSharedValue;
  badgeId(currentUserId[15]);
  if (hasUpdates) {
    num = 1.2;
  }
  sharedValue2 = useSharedValue2(num);
  const items7 = [sharedValue, hasUpdates, sharedValue2, unlock];
  const tmp2Result4 = badgeId(currentUserId[15]);
  const sharedValue1 = tmp2Result4.useSharedValue(0);
  const effect2 = obj4.useEffect(() => {
    if (null == first) {
      if (hasUpdates) {
        const result = obj2.set(0);
        const result1 = sharedValue2.set(1.2);
      } else if (sharedValue.get() < 1) {
        set = sharedValue.set;
        const obj = timing_timing;
        const result2 = set(obj.withTiming(1, { duration: 250 }, "animate-always"));
        const result3 = sharedValue2.set(1);
      }
    }
  }, items7);
  const items8 = [unlock];
  const effect3 = obj4.useEffect(() => {
    const tmp = null == first || stateFromStores2;
    if (!tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue2.set(1.2);
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    let badge;
    if (unlock != null) {
      badge = unlock.badge;
    }
    if (badge == null) {
      badge = stateFromStores;
    }
    const obj6 = { style: tmp.page, children: closure_13(tmp24, obj7) };
    obj7 = { badge, unlock, sheetIndex, contentOpacity: sharedValue, titleScale: sharedValue2, unlockLabelOpacity: sharedValue1, startsHidden: hasUpdates, viewerBadge: badge1, displayedUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, showNewTag };
    badge1 = undefined;
    const tmp23 = hasUpdates;
    tmp24 = BadgeDetailsSheetContent;
    if (unlock != null) {
      badge1 = unlock.badge;
    }
    if (badge1 == null) {
      badge1 = stateFromStores1;
    }
    return closure_13(tmp23, obj6);
  }
}
({ Platform, View: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_12 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
let Fragment = Fragment_mod;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { flexGrow: 1 }, page: obj2, header: obj3, newTag: { alignSelf: "flex-start" }, graphic: obj4, graphicAnimated: obj5, identity: { alignItems: "center" }, centeredText: { textAlign: "center" }, eyebrow: obj6, title: { transformOrigin: "bottom" }, identityArea: { alignSelf: "stretch" }, unlockLabel: rect, uppercase: { textTransform: "uppercase" }, accessoryLine: obj7, accessoryDot: size, card: obj8, cardContent: obj9, descriptionGroup: obj10, divider: obj11, notice: obj12, noticeIcon: { marginTop: 2 }, noticeText: { flex: 1 } };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_12 };
obj5 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
rect = { position: "absolute", top: -nativeDefault.space.PX_12, bottom: -nativeDefault.space.PX_24, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj7 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
size = { width: 3, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj8 = { padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj9 = { gap: nativeDefault.space.PX_16 };
obj10 = { gap: nativeDefault.space.PX_4 };
obj11 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO };
let closure_16 = createStyles(obj);
let closure_19 = { code: "(function BadgeDetailsSheetTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let closure_21 = { code: "(function BadgeDetailsSheetTsx2(){let[contentOpacity]=this.__closure;return{opacity:contentOpacity.get()};})" };
let closure_22 = { code: "(function BadgeDetailsSheetTsx3(){let[titleScale]=this.__closure;return{transform:[{scale:titleScale.get()}]};})" };
let closure_23 = { code: "(function BadgeDetailsSheetTsx4(){let[contentOpacity]=this.__closure;return contentOpacity.get()>0;})" };
let closure_24 = { code: "(function BadgeDetailsSheetTsx5(isShown,wasShown){let[scheduleOnRN,setIsContentShown]=this.__closure;if(wasShown!=null)scheduleOnRN(setIsContentShown,isShown);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  let BottomSheetScrollView;
  let _undefined;
  let bottomSheetClose;
  let bottomSheetRef;
  let intl2;
  let items18;
  let items19;
  let items20;
  let name;
  let obj10;
  let tmp42;
  let tmp43;
  let tmp50Result3;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const source = badgeId.source;
  let combined;
  let closure_6;
  let hasUnreadIndicator;
  let ref;
  let c9;
  const targetUsername = badgeId.targetUsername;
  let tmp = closure_16();
  let tmp3 = isViewingOtherUser;
  let tmp2 = displayedUserId;
  let tmp5 = badgeId;
  const sum = Math.max(displayedUserId(isViewingOtherUser[41])().bottom, closure_12) + 4;
  let obj = badgeId(isViewingOtherUser[17]);
  const items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = ref.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = badgeId(isViewingOtherUser[17]);
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores, isViewingOtherUser];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let tmp = !isViewingOtherUser;
    if (isViewingOtherUser) {
      tmp = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp2);
      const hasCatalogForResult = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp2);
    }
    return tmp;
  }, items2);
  let obj3 = badgeId(isViewingOtherUser[42]);
  const isBadgeDirectoryUpdatesEnabled = obj3.useIsBadgeDirectoryUpdatesEnabled({ location: "BadgeDetailsSheet" });
  let obj4 = badgeId(isViewingOtherUser[17]);
  const items3 = [BadgeDirectoryStore];
  const items4 = [displayedUserId];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => BadgeDirectoryStore.hasCatalogFor(displayedUserId), items4);
  let obj5 = badgeId(isViewingOtherUser[17]);
  const items5 = [BadgeDirectoryStore];
  const items6 = [badgeId, displayedUserId];
  const stateFromStores3 = obj5.useStateFromStores(items5, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items6);
  let tmp12 = !isViewingOtherUser;
  if (tmp12) {
    let has_updates;
    if (stateFromStores3 != null) {
      has_updates = stateFromStores3.has_updates;
    }
    tmp12 = true === has_updates;
  }
  const items7 = [c9];
  const items8 = [badgeId, isViewingOtherUser];
  const tmp5Result = tmp5(tmp3[17]);
  const stateFromStores4 = tmp5Result.useStateFromStores(items7, () => {
    let result = !isViewingOtherUser;
    if (result) {
      const obj = useBadgeDirectoryBadgeIndicators;
      result = obj.isNewIndicatorBadgeId(badgeId);
    }
    if (result) {
      const seenBadgeIndicators = BadgeDirectorySeenStore.getSeenBadgeIndicators();
      result = !seenBadgeIndicators.has(badgeId);
    }
    return result;
  }, items8);
  combined = "" + displayedUserId + ":" + badgeId;
  const tmp18 = stateFromStores(combined.useState(null), 2);
  const first = tmp18[0];
  let pageKey;
  const tmp20 = tmp18[1];
  if (first != null) {
    pageKey = first.pageKey;
  }
  if (pageKey !== combined) {
    const obj6 = { pageKey: combined, hadNewIndicator: stateFromStores4 };
    tmp20(obj6);
  }
  let pageKey1;
  if (first != null) {
    pageKey1 = first.pageKey;
  }
  let tmp26 = tmp12;
  const useIsBadgeUnreadStateEnabled = tmp5(tmp3[44]).useIsBadgeUnreadStateEnabled;
  tmp5(tmp3[44]);
  if (!tmp12) {
    tmp26 = tmp24;
  }
  let isBadgeUnreadStateEnabled = useIsBadgeUnreadStateEnabled({ location: "BadgeDetailsSheet", hasUnread: tmp26 });
  const items9 = [tmp7];
  const items10 = [displayedUserId];
  const tmp5Result8 = tmp5(tmp3[17]);
  const stateFromStores5 = tmp5Result8.useStateFromStores(items9, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(displayedUserId), items10);
  const items11 = [tmp7];
  const items12 = [displayedUserId];
  const tmp5Result9 = tmp5(tmp3[17]);
  let stateFromStores6 = tmp5Result9.useStateFromStores(items11, () => !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId), items12);
  const tmp17Result = stateFromStores(combined.useState(false), 2);
  closure_6 = tmp17Result[1];
  const items13 = [displayedUserId];
  const first1 = tmp17Result[0];
  const effect = obj7.useEffect(() => {
    function refetch() {
      return obj(...arguments);
    }
    let obj = function _refetch() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_0 = tmp3;
                c1 = 1;
                c2 = 1;
                const obj5 = { value: obj2.fetchBadgeDirectory(c1), done: false };
                obj2 = closure_2_0(isViewingOtherUser[39]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1_6(true);
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp10) {
            c2 = 3;
            throw tmp10;
          }
        }
      });
      return obj(...arguments);
    };
    obj = BadgeDirectoryStore;
    const tmp2 = BadgeDirectoryStore.hasCatalogFor(displayedUserId) && !obj.isCatalogStaleFor(displayedUserId);
    if (!tmp2) {
      const tmp3 = refetch();
    }
  }, items13);
  const items14 = [displayedUserId];
  const items15 = [stateFromStores, isViewingOtherUser];
  const callback = obj7.useCallback(() => {
    const obj = BadgeDirectoryActionCreators;
    const badgeDirectory = obj.fetchBadgeDirectory(displayedUserId, { isRetry: true });
  }, items14);
  const effect1 = obj7.useEffect(() => {
    const tmp = isViewingOtherUser && null != stateFromStores;
    if (tmp) {
      const tmp5 = stateFromStores;
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp5);
      }
    }
  }, items15);
  hasUnreadIndicator = tmp35;
  ref = obj7.useRef(null);
  const items16 = [badgeId, displayedUserId, "directory" === source && isBadgeUnreadStateEnabled && tmp12, isViewingOtherUser, source];
  const effect2 = obj7.useEffect(() => {
    combined = "" + displayedUserId + ":" + badgeId;
    const tmp2 = badgeId;
    if (ref.current !== combined) {
      const badgeById = BadgeDirectoryStore.getBadgeById(tmp2, tmp);
      if (null != badgeById) {
        tmp4.current = combined;
        const obj = { actionName: "badge_detail_viewed", badge: badgeById, displayedUserId, isSociallyNavigated: isViewingOtherUser, hasUnreadIndicator, source };
        trackBadgeDirectoryActionDefault(obj);
      }
    }
  }, items16);
  const obj8 = { badgeId, enabled: !isViewingOtherUser };
  const tmp5Result10 = tmp5(tmp3[43]);
  const dismissBadgeDirectoryBadgeIndicator = tmp5Result10.useDismissBadgeDirectoryBadgeIndicator(obj8);
  let tmp50Result2 = stateFromStores5 || stateFromStores2;
  const tmp5Result11 = tmp5(tmp3[15]);
  const sharedValue = tmp5Result11.useSharedValue(-1);
  [tmp42, tmp43] = stateFromStores(combined.useState(null), 2);
  c9 = tmp43;
  stateFromStores(combined.useState(null), 2);
  const tmp44 = null != tmp42 && tmp42 !== combined;
  if (tmp44) {
    tmp43(null);
  }
  const items17 = [combined];
  let tmp50Result = tmp39;
  const callback1 = obj7.useCallback(() => _undefined(combined), items17);
  if (!(isBadgeUnreadStateEnabled && tmp12)) {
    tmp50Result = tmp42 === combined;
  }
  const tmp5Result12 = tmp5(tmp3[45]);
  const bottomSheetRef1 = tmp5Result12.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const context = obj7.useContext(tmp2(tmp3[46]));
  let str;
  if (context != null) {
    str = context.transitionState;
  }
  if (str == null) {
    str = "visible";
  }
  const obj9 = { startExpanded: !isBadgeDirectoryUpdatesEnabled, scrollable: true, dismissAccessibilityLabel: name, ref: bottomSheetRef, handleDisabled: tmp50Result, animatedIndex: sharedValue, children: closure_14(BottomSheetScrollView, obj10) };
  name = undefined;
  const BottomSheet = tmp5(tmp3[47]).BottomSheet;
  if (stateFromStores3 != null) {
    name = stateFromStores3.name;
  }
  obj10 = { contentContainerStyle: items18, children: items19 };
  items18 = [tmp.content, { paddingBottom: sum }];
  BottomSheetScrollView = tmp5(tmp3[48]).BottomSheetScrollView;
  if (tmp50Result) {
    let name1;
    const ActionSheetHeaderBar = tmp5(tmp3[49]).ActionSheetHeaderBar;
    if (stateFromStores3 != null) {
      name1 = stateFromStores3.name;
    }
    const obj11 = { accessibilityLabel: name1, onPress: bottomSheetClose };
    tmp50Result = tmp50(ActionSheetHeaderBar, obj11);
  }
  items19 = [tmp50Result, ];
  if (null == stateFromStores3) {
    const obj12 = { style: tmp.page, children: items20 };
    const Text = tmp5(tmp3[14]).Text;
    const intl = tmp5(tmp3[32]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[32]).t;
    const obj13 = { variant: "body-md/medium", color: "text-default", children: string(tmp50Result2 ? t.eAn6z2 : t.ZTNur7) };
    items20 = [closure_13(Text, obj13), ];
    const tmp56 = closure_6;
    if (tmp50Result2) {
      const obj14 = { variant: "secondary", size: "sm", onPress: callback, text: intl2.string(tmp5(tmp3[32]).t["7NqTJn"]) };
      const Button = tmp5(tmp3[37]).Button;
      intl2 = tmp5(tmp3[32]).intl;
      tmp50Result2 = tmp50(Button, obj14);
    }
    items20[1] = tmp50Result2;
    tmp50Result3 = tmp52(tmp56, obj12);
  } else {
    const obj15 = { badgeId, hasUpdates: isBadgeUnreadStateEnabled && tmp12, isUnlockReady: stateFromStores6, sheetIndex: sharedValue, displayedUserId, currentUserId: stateFromStores, isViewingOtherUser, targetUsername, isViewerOwnershipKnown: stateFromStores1, onUnlock: callback1, source, showNewTag: isBadgeUnreadStateEnabled };
    const tmp54 = BadgeDetailsPage;
    if (!stateFromStores6) {
      stateFromStores6 = first1;
    }
    if (stateFromStores6) {
      stateFromStores6 = "visible" === str;
    }
    if (isBadgeUnreadStateEnabled) {
      isBadgeUnreadStateEnabled = tmp24;
    }
    tmp50Result3 = tmp50(tmp54, obj15, combined);
  }
  items19[1] = tmp50Result3;
  return closure_13(BottomSheet, obj9);
};
