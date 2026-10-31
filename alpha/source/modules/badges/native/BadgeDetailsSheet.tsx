// Module ID: 11463
// Function ID: 11464
// Name: BadgeDetailsSheet
// Dependencies: [19, 17, 5015, 1383, 8763, 1072, 5273, 21, 5014, 575, 5735, 5624, 504, 11464, 11465, 11466, 11459, 11467, 2026, 1387, 11468, 11477, 11478, 5258, 11462, 11455, 7563, 1113, 11451, 11479, 5634, 11480, 1625, 11454, 8768, 11460, 5272, 5275, 2]
// Exports: default

// Module 11463 (BadgeDetailsSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5273 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 5735 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8768 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 11462 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 11478 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import UserStore from "UserStore" /* 1383 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8763 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, currentUser;

let Platform;
let c10;
let closure_12;
let closure_4;
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
let size;
let unpackModuleId;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  let tmp = closure_13();
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
      const tmp = unpackModuleId;
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = authStore(React3, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, node];
      return tmp(Fragment, obj2, key);
    })
  };
  return closure_10(closure_4, obj);
}
function InfoNotice(children) {
  let items;
  children = children.children;
  const tmp = closure_13();
  const obj = { style: tmp.notice, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp.noticeIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [authStore(CircleInformationIcon, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.noticeText, children };
  items[1] = authStore(Text_Text.Text, obj3);
  return unpackModuleId(React3, obj);
}
function BadgeDetailsSheetContent(badge) {
  let Text;
  let Text2;
  let animatedUrl;
  let displayName;
  let displayedUserId;
  let eyebrow;
  let imageUrl;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isNitro;
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
  let obj22;
  let obj32;
  let obj33;
  let obj6;
  let obj8;
  let tmp2Result13;
  let tmp2Result20;
  let useReducedMotion;
  let viewerBadge;
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  const isViewerOwnershipKnown = badge.isViewerOwnershipKnown;
  let badgeDetailsCta;
  const targetUsername = badge.targetUsername;
  const tmp = closure_13();
  let obj = badge(isViewingOtherUser[12]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = badge(isViewingOtherUser[12]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const tmp7 = displayedUserId(isViewingOtherUser[13])(badge.badge_id);
  const tmp8 = displayedUserId(isViewingOtherUser[14])({ badge, viewerBadge, isViewingOtherUser });
  let tmp18Result9 = displayedUserId(isViewingOtherUser[15])({ badge, isViewingOtherUser });
  let obj3 = badge(isViewingOtherUser[16]);
  const displayTier = obj3.getDisplayTier(badge);
  let obj4 = badge(isViewingOtherUser[17]);
  const badgeArtUrls = obj4.getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result = badge(isViewingOtherUser[17]);
  const badgeTitle = tmp2Result.getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tiers = badge.tiers;
  let num;
  const tmp2Result11 = badge(isViewingOtherUser[17]);
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
  const tmp2Result12 = badge(isViewingOtherUser[18]);
  if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
    const push = items2.push;
    const obj5 = { key: "info", node: closure_10(badge(isViewingOtherUser[11]).Text, obj6) };
    obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
    push(obj5);
  }
  const push2 = items2.push;
  const obj7 = { key: "status", node: closure_10(Text, obj8) };
  obj8 = { variant: "text-md/medium", color: "text-subtle", children: tmp2Result13.getBadgeStatusText(badge, tmp7) };
  Text = tmp2(tmp3[11]).Text;
  tmp2Result13 = badge(isViewingOtherUser[17]);
  push2(obj7);
  const tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[19]).BadgeRarity.COMMON;
  if (tmp20) {
    const push3 = items2.push;
    const obj9 = { key: "rarity", node: closure_10(displayedUserId(isViewingOtherUser[20]), obj10) };
    obj10 = { rarity };
    push3(obj9);
  }
  const tmp2Result14 = badge(isViewingOtherUser[17]);
  let result = tmp2Result14.isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result15 = badge(isViewingOtherUser[17]);
  const badgeDescriptionText = tmp2Result15.getBadgeDescriptionText({ badge, viewerBadge, isViewerOnUpgradeableNitro: result });
  const tmp2Result16 = badge(isViewingOtherUser[18]);
  const isNullOrEmptyResult = tmp2Result16.isNullOrEmpty(badgeDescriptionText);
  const tmp2Result17 = badge(isViewingOtherUser[21]);
  badgeDetailsCta = tmp2Result17.getBadgeDetailsCta(badge.badge_id);
  const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = badgeDetailsCta.useCallback(() => {
    const obj = badgeDetailsCta;
    if (null != badgeDetailsCta) {
      const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      obj.ctaAction();
    }
  }, items3);
  const callback1 = badgeDetailsCta.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[23]);
    obj.hideActionSheet(badge(isViewingOtherUser[24]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[25]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[26]);
    const obj4 = { screen: constants.DATA_AND_PRIVACY };
    obj3.openUserSettings(obj4);
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = badgeDetailsCta.useCallback(() => {
    const obj = displayedUserId(isViewingOtherUser[23]);
    obj.hideActionSheet(badge(isViewingOtherUser[24]).BADGE_DETAILS_SHEET_KEY);
    const obj2 = badge(isViewingOtherUser[25]);
    const result = obj2.closeBadgeDirectoryScreen();
    const obj3 = badge(isViewingOtherUser[25]);
    const result1 = obj3.openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    const tmp2Result18 = badge(isViewingOtherUser[17]);
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
    const obj12 = { children: intl.format(badge(isViewingOtherUser[27]).t.vFekBs, obj13) };
    intl = tmp2(tmp3[27]).intl;
    obj13 = { onViewBadges: callback2 };
    tmp18Result = tmp18(InfoNotice, obj12);
  }
  const obj14 = { style: tmp.header, children: items4 };
  const tmp2Result19 = badge(isViewingOtherUser[16]);
  let isBetaBadgeIdResult = tmp2Result19.isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj15 = { style: tmp.betaPill, children: closure_10(Text2, obj16) };
    obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: intl2.string(badge(isViewingOtherUser[27]).t.oW0eUd) };
    Text2 = tmp2(tmp3[11]).Text;
    intl2 = tmp2(tmp3[27]).intl;
    isBetaBadgeIdResult = tmp18(tmp36, obj15);
  }
  items4 = [isBetaBadgeIdResult, , ];
  let tmp18Result7 = null != imageUrl;
  if (tmp18Result7) {
    const obj17 = { url: imageUrl, height: num2, animated: null != animatedUrl, style: items5 };
    num2 = 120;
    const tmp6Result = displayedUserId(isViewingOtherUser[28]);
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
    tmp18Result8 = tmp18(tmp2(tmp3[11]).Text, obj19);
  }
  items7 = [tmp18Result8, , ];
  let str = "display-sm";
  const Heading = tmp2(tmp3[11]).Heading;
  if (isNitro) {
    str = "nitro-sm";
  }
  const obj20 = { variant: str, color: "text-strong", style: items8, children: displayName };
  items8 = [tmp.centeredText, isNitro && tmp.uppercase];
  items7[1] = closure_10(Heading, obj20);
  items7[2] = closure_10(BadgeAccessoryLine, { segments: items2 });
  items4[2] = closure_11(closure_4, obj18);
  const items9 = [closure_11(closure_4, obj14), , ];
  if (tmp18Result9) {
    const obj21 = { children: intl3.format(badge(isViewingOtherUser[27]).t.Zh44ni, obj22) };
    intl3 = tmp2(tmp3[27]).intl;
    obj22 = { onGoToSettings: callback1 };
    tmp18Result9 = tmp18(InfoNotice, obj21);
  }
  items9[1] = tmp18Result9;
  if (!tmp8) {
    let tmp34Result6;
    if (isNullOrEmptyResult) {
      tmp34Result6 = tmp18Result;
    }
    const obj23 = { children: items9 };
    items9[2] = tmp34Result6;
    return closure_11(closure_12, obj23);
  }
  let tmp34Result = tmp8;
  const obj24 = { style: tmp.card, children: items11 };
  if (tmp34Result) {
    const obj25 = { children: items10 };
    const obj26 = { badge, viewerBadge };
    items10 = [closure_10(tmp6(tmp3[29]), obj26), ];
    const obj27 = { style: tmp.divider };
    items10[1] = closure_10(closure_4, obj27);
    tmp34Result = tmp34(tmp35, obj25);
  }
  items11 = [tmp34Result, , , , ];
  let tmp34Result4 = tmp25;
  if (!isNullOrEmptyResult) {
    let tmp18Result10 = isLegacyDisplayBadgeResult;
    const obj28 = { style: tmp.descriptionGroup, children: items12 };
    if (tmp18Result10) {
      const obj29 = { variant: "text-sm/medium", color: "text-subtle", children: intl4.string(badge(isViewingOtherUser[27]).t["/Gmn3f"]) };
      const Text3 = tmp2(tmp3[11]).Text;
      intl4 = tmp2(tmp3[27]).intl;
      tmp18Result10 = tmp18(Text3, obj29);
    }
    items12 = [tmp18Result10, ];
    const obj30 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
    items12[1] = closure_10(badge(isViewingOtherUser[11]).Text, obj30);
    tmp34Result4 = tmp34(tmp36, obj28);
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
    const obj31 = { variant: tmp2Result20.getBadgeCtaVariant(obj32), size: "md", onPress: callback, text: badgeDetailsCta.ctaLabel(obj33) };
    const Button = tmp2(tmp3[30]).Button;
    obj32 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj33 = { owned: flag, isViewerOnUpgradeableNitro: result };
    tmp2Result20 = badge(isViewingOtherUser[17]);
    tmp18Result11 = tmp18(Button, obj31);
  }
  items11[2] = tmp18Result11;
  if (tmp34Result5) {
    let tmp18Result12 = !tmp8 && tmp25;
    if (tmp18Result12) {
      const obj34 = { style: tmp.divider };
      tmp18Result12 = tmp18(tmp36, obj34);
    }
    const obj35 = { children: items13 };
    items13 = [tmp18Result12, ];
    const obj36 = { badge: tmp30, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items13[1] = closure_10(displayedUserId(isViewingOtherUser[31]), obj36);
    tmp34Result5 = tmp34(tmp35, obj35);
  }
  items11[3] = tmp34Result5;
  items11[4] = tmp18Result;
  tmp34Result6 = tmp34(tmp36, obj24);
}
function BadgeDetailsPage(badgeId) {
  let isViewerOwnershipKnown;
  let isViewingOtherUser;
  let obj3;
  let targetUsername;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const currentUserId = badgeId.currentUserId;
  ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown } = badgeId);
  const tmp = closure_13();
  const items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const obj = badgeId(currentUserId[12]);
  const stateFromStores = obj.useStateFromStores(items, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items1);
  badgeId(currentUserId[12]);
  [][0] = BadgeDirectoryStore;
  const items2 = [badgeId, currentUserId];
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.page, children: closure_10(BadgeDetailsSheetContent, obj3) };
    obj3 = { badge: stateFromStores, viewerBadge: tmp4, displayedUserId, isViewingOtherUser, targetUsername, isViewerOwnershipKnown };
    tmp5 = closure_10(closure_4, obj2);
  }
  return tmp5;
}
({ Platform, View: closure_4 } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_9 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
let Fragment = Fragment_mod;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { flexGrow: 1 }, page: obj2, header: obj3, betaPill: obj4, graphic: obj5, graphicAnimated: obj6, identity: { alignItems: "center" }, centeredText: { textAlign: "center" }, eyebrow: obj7, uppercase: { textTransform: "uppercase" }, accessoryLine: obj8, accessoryDot: size, card: obj9, descriptionGroup: obj10, divider: obj11, notice: obj12, noticeIcon: { marginTop: 2 }, noticeText: { flex: 1 } };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj4 = { alignSelf: "flex-start", paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
size = { width: 3, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj9 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj10 = { gap: nativeDefault.space.PX_4 };
obj11 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_13 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  let BottomSheetScrollView;
  let intl2;
  let items13;
  let items14;
  let name;
  let obj10;
  let tmp17Result1;
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const targetUsername = badgeId.targetUsername;
  let tmp = closure_13();
  let tmp2 = isViewingOtherUser;
  const sum = Math.max(displayedUserId(isViewingOtherUser[32])().bottom, closure_9) + 4;
  let obj = badgeId(isViewingOtherUser[12]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = badgeId(isViewingOtherUser[12]);
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
  const obj3 = badgeId(isViewingOtherUser[33]);
  const isBadgeDirectoryUpdatesEnabled = obj3.useIsBadgeDirectoryUpdatesEnabled({ location: "BadgeDetailsSheet" });
  const items3 = [BadgeDirectoryStore];
  const items4 = [displayedUserId];
  const obj4 = badgeId(isViewingOtherUser[12]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => BadgeDirectoryStore.hasCatalogFor(displayedUserId), items4);
  const items5 = [BadgeDirectoryStore];
  const items6 = [badgeId, displayedUserId];
  const obj5 = badgeId(isViewingOtherUser[12]);
  const stateFromStores3 = obj5.useStateFromStores(items5, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items6);
  const items7 = [BadgeDirectoryStore];
  const items8 = [displayedUserId];
  const obj6 = badgeId(isViewingOtherUser[12]);
  const stateFromStores4 = obj6.useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(displayedUserId), items8);
  const items9 = [displayedUserId];
  const effect = stateFromStores.useEffect(() => {
    const tmp2 = BadgeDirectoryStore.hasCatalogFor(displayedUserId) && !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId);
    if (!tmp2) {
      const obj2 = BadgeDirectoryActionCreators;
      const badgeDirectory = obj2.fetchBadgeDirectory(tmp);
    }
  }, items9);
  const items10 = [displayedUserId];
  const items11 = [stateFromStores, isViewingOtherUser];
  const callback = stateFromStores.useCallback(() => {
    const obj = BadgeDirectoryActionCreators;
    const badgeDirectory = obj.fetchBadgeDirectory(displayedUserId, { isRetry: true });
  }, items10);
  const effect1 = stateFromStores.useEffect(() => {
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
  const effect2 = stateFromStores.useEffect(() => {
    const badgeById = BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
    const tmp = displayedUserId;
    if (null != badgeById) {
      const obj = { actionName: "badge_detail_viewed", badge: badgeById, displayedUserId: tmp, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj);
    }
  }, items12);
  const obj7 = badgeId(isViewingOtherUser[35]);
  const obj8 = { badgeId, enabled: !isViewingOtherUser };
  const dismissBadgeDirectoryBadgeIndicator = obj7.useDismissBadgeDirectoryBadgeIndicator(obj8);
  let tmp17Result = stateFromStores4 || stateFromStores2;
  const obj9 = { startExpanded: !isBadgeDirectoryUpdatesEnabled, scrollable: true, dismissAccessibilityLabel: name, children: closure_10(BottomSheetScrollView, obj10) };
  name = undefined;
  BottomSheet = tmp4(tmp2[36]).BottomSheet;
  if (stateFromStores3 != null) {
    name = stateFromStores3.name;
  }
  obj10 = { contentContainerStyle: items13, children: tmp17Result1 };
  items13 = [tmp.content, { paddingBottom: sum }];
  BottomSheetScrollView = tmp4(tmp2[37]).BottomSheetScrollView;
  if (null == stateFromStores3) {
    const obj11 = { style: tmp.page, children: items14 };
    const Text = tmp4(tmp2[11]).Text;
    const intl = tmp4(tmp2[27]).intl;
    const string = intl.string;
    const t = tmp4(tmp2[27]).t;
    const obj12 = { variant: "text-md/medium", color: "text-default", children: string(tmp17Result ? t.eAn6z2 : t.ZTNur7) };
    items14 = [closure_10(Text, obj12), ];
    const tmp21 = closure_11;
    const tmp22 = closure_4;
    if (tmp17Result) {
      const obj13 = { variant: "secondary", size: "sm", onPress: callback, text: intl2.string(badgeId(tmp2[27]).t["7NqTJn"]) };
      const Button = tmp4(tmp2[30]).Button;
      intl2 = tmp4(tmp2[27]).intl;
      tmp17Result = tmp17(Button, obj13);
    }
    items14[1] = tmp17Result;
    tmp17Result1 = tmp21(tmp22, obj11);
  } else {
    const obj14 = { badgeId, displayedUserId, currentUserId: stateFromStores, isViewingOtherUser, targetUsername, isViewerOwnershipKnown: stateFromStores1 };
    tmp17Result1 = tmp17(BadgeDetailsPage, obj14);
  }
  return closure_10(BottomSheet, obj9);
};
