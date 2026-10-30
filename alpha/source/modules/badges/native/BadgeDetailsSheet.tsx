// Module ID: 11427
// Function ID: 11428
// Name: BadgeDetailsSheet
// Dependencies: [32, 19, 17, 5010, 1384, 8755, 1072, 5268, 21, 5009, 575, 5730, 5619, 504, 11428, 11429, 11430, 11423, 11431, 2028, 1388, 11432, 11441, 11442, 5253, 11426, 11419, 7557, 1114, 11415, 11443, 5629, 11444, 8971, 11445, 1626, 1492, 11418, 8760, 11424, 5267, 5270, 2]
// Exports: default

// Module 11427 (BadgeDetailsSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 5730 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8760 */;
import BadgeUtils from "BadgeUtils" /* 11423 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 11426 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 11442 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserStore from "UserStore" /* 1384 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5268 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, currentUser, dependencyMap;

let Platform;
let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  let tmp = closure_15();
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
      const tmp = map1;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = authStore2(hasOwnProperty, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return tmp(Fragment, obj2, key);
    })
  };
  return closure_12(closure_5, obj);
}
function InfoNotice(children) {
  let items;
  children = children.children;
  const tmp = closure_15();
  const obj = { style: tmp.notice, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp.noticeIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [authStore2(CircleInformationIcon, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.noticeText, children };
  items[1] = authStore2(Text_Text.Text, obj3);
  return map1(hasOwnProperty, obj);
}
function BadgeDetailsSheetContent(badge) {
  let Text;
  let Text2;
  let animatedUrl;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let formatToPlainStringResult;
  let imageUrl;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let isNitro;
  let isViewerOwnershipKnown;
  let items10;
  let items11;
  let items12;
  let items13;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let num2;
  let obj10;
  let obj13;
  let obj16;
  let obj23;
  let obj34;
  let obj35;
  let obj6;
  let obj8;
  let pagePosition;
  let stringResult;
  let tmp2Result13;
  let tmp2Result20;
  let useReducedMotion;
  let viewerBadge;
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ isViewerOwnershipKnown, pagePosition } = badge);
  let badgeDetailsCta;
  const targetUsername = badge.targetUsername;
  const tmp = closure_15();
  let obj = badge(isViewingOtherUser[13]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = badge(isViewingOtherUser[13]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const tmp7 = displayedUserId(isViewingOtherUser[14])(badge.badge_id);
  const tmp8 = displayedUserId(isViewingOtherUser[15])({ badge, viewerBadge, isViewingOtherUser });
  let tmp18Result9 = displayedUserId(isViewingOtherUser[16])({ badge, isViewingOtherUser });
  let obj3 = badge(isViewingOtherUser[17]);
  const displayTier = obj3.getDisplayTier(badge);
  let obj4 = badge(isViewingOtherUser[18]);
  const badgeArtUrls = obj4.getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result = badge(isViewingOtherUser[18]);
  const badgeTitle = tmp2Result.getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tiers = badge.tiers;
  let num;
  const tmp2Result11 = badge(isViewingOtherUser[18]);
  const isLegacyDisplayBadgeResult = tmp2Result11.isLegacyDisplayBadge(badge);
  if (tiers != null) {
    num = tiers.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp34Result5 = num > 0;
  let flag;
  if (viewerBadge != null) {
    flag = viewerBadge.owned;
  }
  if (flag == null) {
    flag = false;
  }
  const items2 = [];
  const tmp2Result12 = badge(isViewingOtherUser[19]);
  if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
    const push = items2.push;
    const obj5 = { key: "info", node: closure_12(badge(isViewingOtherUser[12]).Text, obj6) };
    obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
    push(obj5);
  }
  const push2 = items2.push;
  const obj7 = { key: "status", node: closure_12(Text, obj8) };
  obj8 = { variant: "text-md/medium", color: "text-subtle", children: tmp2Result13.getBadgeStatusText(badge, tmp7) };
  Text = tmp2(tmp3[12]).Text;
  tmp2Result13 = badge(isViewingOtherUser[18]);
  push2(obj7);
  const tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[20]).BadgeRarity.COMMON;
  if (tmp20) {
    const push3 = items2.push;
    const obj9 = { key: "rarity", node: closure_12(displayedUserId(isViewingOtherUser[21]), obj10) };
    obj10 = { rarity };
    push3(obj9);
  }
  const tmp2Result14 = badge(isViewingOtherUser[18]);
  let result = tmp2Result14.isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result15 = badge(isViewingOtherUser[18]);
  const badgeDescriptionText = tmp2Result15.getBadgeDescriptionText({ badge, viewerBadge, isViewerOnUpgradeableNitro: result });
  const tmp2Result16 = badge(isViewingOtherUser[19]);
  const isNullOrEmptyResult = tmp2Result16.isNullOrEmpty(badgeDescriptionText);
  const tmp2Result17 = badge(isViewingOtherUser[22]);
  badgeDetailsCta = tmp2Result17.getBadgeDetailsCta(badge.badge_id);
  const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = react.useCallback(() => {
    const obj = badgeDetailsCta;
    if (null != badgeDetailsCta) {
      const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      obj.ctaAction();
    }
  }, items3);
  const callback1 = react.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[24]);
    obj.hideActionSheet(badge(isViewingOtherUser[25]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[26]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[27]);
    const obj4 = { screen: constants.DATA_AND_PRIVACY };
    obj3.openUserSettings(obj4);
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = react.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[24]);
    obj.hideActionSheet(badge(isViewingOtherUser[25]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[26]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[26]);
    const result1 = obj3.openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    const tmp2Result18 = badge(isViewingOtherUser[18]);
    result1 = tmp2Result18.shouldShowLegacyUnavailableNotice(obj11);
  }
  let tmp30 = badge;
  if (!isViewingOtherUser) {
    let tmp31 = viewerBadge;
    if (viewerBadge == null) {
      tmp31 = badge;
    }
    tmp30 = tmp31;
  }
  let tmp18Result = null;
  if (result1) {
    const obj12 = { children: intl.format(badge(isViewingOtherUser[28]).t.vFekBs, obj13) };
    intl = tmp2(tmp3[28]).intl;
    obj13 = { onViewBadges: callback2 };
    tmp18Result = tmp18(InfoNotice, obj12);
  }
  const obj14 = { style: tmp.header, children: items4 };
  const tmp2Result19 = badge(isViewingOtherUser[17]);
  let isBetaBadgeIdResult = tmp2Result19.isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj15 = { style: tmp.betaPill, children: closure_12(Text2, obj16) };
    obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: intl2.string(badge(isViewingOtherUser[28]).t.oW0eUd) };
    Text2 = tmp2(tmp3[12]).Text;
    intl2 = tmp2(tmp3[28]).intl;
    isBetaBadgeIdResult = tmp18(tmp36, obj15);
  }
  items4 = [isBetaBadgeIdResult, , ];
  let tmp18Result7 = null != imageUrl;
  if (tmp18Result7) {
    const obj17 = { url: imageUrl, height: num2, animated: null != animatedUrl, style: items5 };
    num2 = 120;
    const tmp6Result = displayedUserId(isViewingOtherUser[29]);
    if (null != animatedUrl) {
      num2 = 180;
    }
    items5 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
    tmp18Result7 = tmp18(tmp6Result, obj17);
  }
  items4[1] = tmp18Result7;
  let tmp18Result8 = null != eyebrow;
  const obj18 = { style: tmp.identity, children: items7 };
  if (tmp18Result8) {
    const obj19 = { variant: "text-md/medium", color: "text-subtle", style: items6, children: eyebrow };
    items6 = [, ];
    ({ centeredText: arr8[0], eyebrow: arr8[1] } = tmp);
    tmp18Result8 = tmp18(tmp2(tmp3[12]).Text, obj19);
  }
  items7 = [tmp18Result8, , ];
  let str = "display-sm";
  const Heading = tmp2(tmp3[12]).Heading;
  if (isNitro) {
    str = "nitro-sm";
  }
  const obj20 = { variant: str, color: "text-strong", style: items8, accessibilityLabel: formatToPlainStringResult, accessibilityHint: stringResult, children: displayName };
  items8 = [tmp.centeredText, isNitro && tmp.uppercase];
  formatToPlainStringResult = undefined;
  if (null != pagePosition) {
    const intl3 = tmp2(tmp3[28]).intl;
    const obj21 = { badgeName: displayName, position: null, total: null };
    ({ position: obj32.position, total: obj32.total } = pagePosition);
    formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[28]).t.q7PYXq, obj21);
  }
  stringResult = undefined;
  if (null != pagePosition) {
    const intl4 = tmp2(tmp3[28]).intl;
    stringResult = intl4.string(tmp2(tmp3[28]).t.jK2oto);
  }
  items7[1] = closure_12(Heading, obj20);
  items7[2] = closure_12(BadgeAccessoryLine, { segments: items2 });
  items4[2] = closure_13(closure_5, obj18);
  const items9 = [closure_13(closure_5, obj14), , ];
  if (tmp18Result9) {
    const obj22 = { children: intl5.format(badge(isViewingOtherUser[28]).t.Zh44ni, obj23) };
    intl5 = tmp2(tmp3[28]).intl;
    obj23 = { onGoToSettings: callback1 };
    tmp18Result9 = tmp18(InfoNotice, obj22);
  }
  items9[1] = tmp18Result9;
  if (!tmp8) {
    let tmp34Result6;
    if (isNullOrEmptyResult) {
      tmp34Result6 = tmp18Result;
    }
    const obj24 = { children: items9 };
    items9[2] = tmp34Result6;
    return closure_13(closure_14, obj24);
  }
  let tmp34Result = tmp8;
  const obj25 = { style: tmp.card, children: items11 };
  if (tmp34Result) {
    const obj26 = { children: items10 };
    const obj27 = { badge, viewerBadge };
    items10 = [closure_12(tmp6(tmp3[30]), obj27), ];
    const obj28 = { style: tmp.divider };
    items10[1] = closure_12(closure_5, obj28);
    tmp34Result = tmp34(tmp35, obj26);
  }
  items11 = [tmp34Result, , , , ];
  let tmp34Result4 = tmp25;
  if (!isNullOrEmptyResult) {
    let tmp18Result10 = isLegacyDisplayBadgeResult;
    const obj29 = { style: tmp.descriptionGroup, children: items12 };
    if (tmp18Result10) {
      const obj30 = { variant: "text-sm/medium", color: "text-subtle", children: intl6.string(badge(isViewingOtherUser[28]).t["/Gmn3f"]) };
      const Text3 = tmp2(tmp3[12]).Text;
      intl6 = tmp2(tmp3[28]).intl;
      tmp18Result10 = tmp18(Text3, obj30);
    }
    items12 = [tmp18Result10, ];
    const obj31 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
    items12[1] = closure_12(badge(isViewingOtherUser[12]).Text, obj31);
    tmp34Result4 = tmp34(tmp36, obj29);
  }
  items11[1] = tmp34Result4;
  let tmp18Result11 = tmp25;
  if (!isNullOrEmptyResult) {
    tmp18Result11 = null != badgeDetailsCta;
  }
  if (tmp18Result11) {
    tmp18Result11 = isViewerOwnershipKnown;
  }
  if (tmp18Result11) {
    const obj33 = { variant: tmp2Result20.getBadgeCtaVariant(obj34), size: "md", onPress: callback, text: badgeDetailsCta.ctaLabel(obj35) };
    const Button = tmp2(tmp3[31]).Button;
    obj34 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj35 = { owned: flag, isViewerOnUpgradeableNitro: result };
    tmp2Result20 = badge(isViewingOtherUser[18]);
    tmp18Result11 = tmp18(Button, obj33);
  }
  items11[2] = tmp18Result11;
  if (tmp34Result5) {
    let tmp18Result12 = !tmp8 && tmp25;
    if (tmp18Result12) {
      const obj36 = { style: tmp.divider };
      tmp18Result12 = tmp18(tmp36, obj36);
    }
    const obj37 = { children: items13 };
    items13 = [tmp18Result12, ];
    const obj38 = { badge: tmp30, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items13[1] = closure_12(displayedUserId(isViewingOtherUser[32]), obj38);
    tmp34Result5 = tmp34(tmp35, obj37);
  }
  items11[3] = tmp34Result5;
  items11[4] = tmp18Result;
  tmp34Result6 = tmp34(tmp36, obj25);
}
function BadgeDetailsPage(badgeId) {
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let obj4;
  let pagePosition;
  let targetUsername;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const currentUserId = badgeId.currentUserId;
  const swipePageMinHeight = badgeId.swipePageMinHeight;
  ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition } = badgeId);
  const tmp = closure_15();
  const items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const obj = badgeId(currentUserId[13]);
  const stateFromStores = obj.useStateFromStores(items, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items1);
  badgeId(currentUserId[13]);
  [][0] = BadgeDirectoryStore;
  const items2 = [badgeId, currentUserId];
  let tmp6Result = null;
  if (null != stateFromStores) {
    let page;
    const tmp7 = closure_5;
    if (null != swipePageMinHeight) {
      const items3 = [tmp.swipePage, ];
      const obj2 = { minHeight: swipePageMinHeight };
      items3[1] = obj2;
      page = items3;
    } else {
      page = tmp.page;
    }
    const obj3 = { style: page, children: closure_12(BadgeDetailsSheetContent, obj4) };
    obj4 = { badge: stateFromStores, viewerBadge: tmp4, displayedUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition };
    tmp6Result = tmp6(tmp7, obj3);
  }
  return tmp6Result;
}
function BadgeDetailsPages(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const targetUsername = badgeId.targetUsername;
  const currentUserId = badgeId.currentUserId;
  const isViewerOwnershipKnown = badgeId.isViewerOwnershipKnown;
  const swipePageMinHeight = badgeId.swipePageMinHeight;
  const onBadgeChange = badgeId.onBadgeChange;
  const pageWidth = badgeId.pageWidth;
  const first = targetUsername(currentUserId.useState(() => {
    let items1;
    let mapped;
    let closure_0 = badgeId;
    const obj = BadgeUtils;
    const directoryBadges = obj.getDirectoryBadges(BadgeDirectoryStore.getBadges(displayedUserId));
    const owned = directoryBadges.owned;
    const tmp = badgeId;
    if (isViewingOtherUser) {
      const items = [owned];
      items1 = items;
    } else {
      items1 = [owned, tmp3];
    }
    const found = items1.find((arr) => arr.some((badge_id) => badge_id.badge_id === closure_1_0));
    if (null != found) {
      mapped = found.map((badge_id) => badge_id.badge_id);
    } else {
      mapped = [tmp];
    }
    return mapped;
  }), 1)[0];
  let items = [first, currentUserId, displayedUserId, isViewerOwnershipKnown, isViewingOtherUser, swipePageMinHeight, targetUsername];
  let items1 = [first, onBadgeChange];
  const memo = currentUserId.useMemo(() => {
    let length;
    return first.map((badgeId, index) => {
      let obj2;
      let tmp;
      let tmp2;
      let tmp3;
      const obj = { id: "" + badgeId, label: "" + badgeId, page: tmp(tmp2, obj2) };
      obj2 = { badgeId, displayedUserId, currentUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition: tmp3, swipePageMinHeight };
      tmp3 = undefined;
      tmp = closure_2_12;
      tmp2 = BadgeDetailsPage;
      if (length.length > 1) {
        tmp3 = { position: index + 1, total: arr.length };
        const obj3 = { position: index + 1, total: arr.length };
      }
      return obj;
    });
  }, items);
  const callback = currentUserId.useCallback((arg0) => {
    if (null != first[arg0]) {
      onBadgeChange(first[arg0]);
    }
  }, items1);
  let tmp3 = badgeId(isViewingOtherUser[33]);
  let obj = { items: memo, pageWidth, defaultIndex: Math.max(first.indexOf(badgeId), 0), onPageChange: callback };
  const useSegmentedControlState = tmp3.useSegmentedControlState;
  const state = useSegmentedControlState(obj);
  return closure_12(badgeId(isViewingOtherUser[34]).SegmentedControlPages, { state });
}
({ Platform, View: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ ACTION_SHEET_MAX_WIDTH: c10, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: unpackModuleId } = ActionSheetConstants);
let Fragment = Fragment_mod;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { flexGrow: 1 }, page: obj2, swipePage: obj3, header: obj4, betaPill: obj5, graphic: obj6, graphicAnimated: obj7, identity: { alignItems: "center" }, centeredText: { textAlign: "center" }, eyebrow: obj8, uppercase: { textTransform: "uppercase" }, accessoryLine: obj9, accessoryDot: size, card: obj10, descriptionGroup: obj11, divider: obj12, notice: obj13, noticeIcon: { marginTop: 2 }, noticeText: { flex: 1 } };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "flex-start", paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj7 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj8 = { marginBottom: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
size = { width: 3, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj10 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj11 = { gap: nativeDefault.space.PX_4 };
obj12 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj13 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(isViewingOtherUser) {
  let BottomSheetScrollView;
  let _undefined;
  let badgeId;
  let c2;
  let displayedUserId;
  let intl2;
  let items13;
  let items14;
  let name;
  let obj11;
  let tmp26Result1;
  let tmp29;
  let tmp6;
  ({ badgeId, displayedUserId } = isViewingOtherUser);
  isViewingOtherUser = isViewingOtherUser.isViewingOtherUser;
  const targetUsername = isViewingOtherUser.targetUsername;
  dependencyMap = undefined;
  let stateFromStores;
  badgeId = undefined;
  let tmp = closure_15();
  let tmp2 = dependencyMap;
  const sum = Math.max(isViewingOtherUser(1626)().bottom, closure_11) + 4;
  const bound = Math.min(isViewingOtherUser(1492)().width, closure_10);
  let tmp5 = stateFromStores(badgeId.useState(0), 2);
  [tmp6, c2] = tmp5;
  const callback = badgeId.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const bound1 = Math.max(tmp6 - sum, 0);
  let obj = displayedUserId(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = displayedUserId(504);
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
  const obj3 = displayedUserId(11418);
  const isBadgeDetailsSwipeEnabled = obj3.useIsBadgeDetailsSwipeEnabled({ location: "BadgeDetailsSheet" });
  const obj4 = displayedUserId(11418);
  const isBadgeDirectoryUpdatesEnabled = obj4.useIsBadgeDirectoryUpdatesEnabled({ location: "BadgeDetailsSheet" });
  const items3 = [BadgeDirectoryStore];
  const items4 = [displayedUserId];
  const obj5 = displayedUserId(504);
  const stateFromStores2 = obj5.useStateFromStores(items3, () => BadgeDirectoryStore.hasCatalogFor(displayedUserId), items4);
  const tmp15 = stateFromStores(badgeId.useState(badgeId), 2);
  badgeId = tmp15[0];
  const items5 = [BadgeDirectoryStore];
  const items6 = [badgeId, displayedUserId];
  const tmp17 = tmp15[1];
  const obj6 = displayedUserId(504);
  const stateFromStores3 = obj6.useStateFromStores(items5, () => BadgeDirectoryStore.getBadgeById(first, displayedUserId), items6);
  const items7 = [BadgeDirectoryStore];
  const items8 = [displayedUserId];
  const obj7 = displayedUserId(504);
  const stateFromStores4 = obj7.useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(displayedUserId), items8);
  const items9 = [displayedUserId];
  const effect = badgeId.useEffect(() => {
    const tmp2 = BadgeDirectoryStore.hasCatalogFor(displayedUserId) && !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId);
    if (!tmp2) {
      const obj2 = BadgeDirectoryActionCreators;
      const badgeDirectory = obj2.fetchBadgeDirectory(tmp);
    }
  }, items9);
  const items10 = [displayedUserId];
  const items11 = [stateFromStores, isViewingOtherUser];
  const callback1 = badgeId.useCallback(() => {
    const obj = BadgeDirectoryActionCreators;
    const badgeDirectory = obj.fetchBadgeDirectory(displayedUserId, { isRetry: true });
  }, items10);
  const effect1 = badgeId.useEffect(() => {
    const tmp = isViewingOtherUser && null != stateFromStores;
    if (tmp) {
      const tmp5 = stateFromStores;
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp5);
      }
    }
  }, items11);
  const items12 = [badgeId, displayedUserId, isViewingOtherUser];
  const effect2 = badgeId.useEffect(() => {
    const badgeById = BadgeDirectoryStore.getBadgeById(first, displayedUserId);
    const tmp = displayedUserId;
    if (null != badgeById) {
      const obj = { actionName: "badge_detail_viewed", badge: badgeById, displayedUserId: tmp, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj);
    }
  }, items12);
  const obj8 = displayedUserId(11424);
  const obj9 = { badgeId, enabled: !isViewingOtherUser };
  const dismissBadgeDirectoryBadgeIndicator = obj8.useDismissBadgeDirectoryBadgeIndicator(obj9);
  let tmp26Result = stateFromStores4 || stateFromStores2;
  let tmp27 = isBadgeDirectoryUpdatesEnabled;
  BottomSheet = tmp9(5267).BottomSheet;
  if (isBadgeDirectoryUpdatesEnabled) {
    tmp27 = !isBadgeDetailsSwipeEnabled;
  }
  const obj10 = { startExpanded: !tmp27, scrollable: true, dismissAccessibilityLabel: name, children: closure_12(BottomSheetScrollView, obj11) };
  name = undefined;
  if (stateFromStores3 != null) {
    name = stateFromStores3.name;
  }
  obj11 = { contentContainerStyle: items13, onLayout: tmp29, children: tmp26Result1 };
  items13 = [tmp.content, { paddingBottom: sum }];
  tmp29 = undefined;
  BottomSheetScrollView = tmp9(5270).BottomSheetScrollView;
  if (isBadgeDetailsSwipeEnabled) {
    tmp29 = callback;
  }
  if (null == stateFromStores3) {
    const obj12 = { style: tmp.page, children: items14 };
    const Text = tmp9(5619).Text;
    const intl = tmp9(1114).intl;
    const string = intl.string;
    const t = tmp9(1114).t;
    const obj13 = { variant: "text-md/medium", color: "text-default", children: string(tmp26Result ? t.eAn6z2 : t.ZTNur7) };
    items14 = [closure_12(Text, obj13), ];
    const tmp33 = closure_13;
    const tmp34 = closure_5;
    if (tmp26Result) {
      const obj14 = { variant: "secondary", size: "sm", onPress: callback1, text: intl2.string(displayedUserId(1114).t["7NqTJn"]) };
      const Button = tmp9(5629).Button;
      intl2 = tmp9(1114).intl;
      tmp26Result = tmp26(Button, obj14);
    }
    items14[1] = tmp26Result;
    tmp26Result1 = tmp33(tmp34, obj12);
  } else {
    if (isBadgeDetailsSwipeEnabled) {
      if (stateFromStores2) {
        const obj15 = { badgeId, displayedUserId, isViewingOtherUser, targetUsername, currentUserId: stateFromStores, isViewerOwnershipKnown: stateFromStores1, pageWidth: bound, swipePageMinHeight: bound1, onBadgeChange: tmp17 };
        tmp26Result1 = tmp26(BadgeDetailsPages, obj15);
      }
    }
    const obj16 = { badgeId, displayedUserId, currentUserId: stateFromStores, isViewingOtherUser, targetUsername, isViewerOwnershipKnown: stateFromStores1 };
    tmp26Result1 = tmp26(BadgeDetailsPage, obj16);
  }
  return closure_12(BottomSheet, obj10);
};
