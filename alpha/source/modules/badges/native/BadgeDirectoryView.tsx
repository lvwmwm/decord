// Module ID: 11600
// Function ID: 11601
// Name: BadgeDirectoryView
// Dependencies: [19, 17, 11601, 1385, 8834, 1072, 21, 5140, 575, 1493, 5751, 9072, 1113, 11591, 11593, 1627, 504, 8839, 11602, 11596, 11603, 11598, 7635, 11605, 5758, 7015, 2]
// Exports: default

// Module 11600 (BadgeDirectoryView)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5751 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8839 */;
import native from "native" /* 9072 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11591 */;
import BadgeUtils from "BadgeUtils" /* 11602 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 11605 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11601 */;
import UserStore from "UserStore" /* 1385 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8834 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let currentUser, dependencyMap, set;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let unpackModuleId;
function BadgeSection(title) {
  let badges;
  let emptyText;
  let items;
  let tmp3Result;
  ({ badges, tileSize: require, emptyText, onPressBadge: importDefault, badgeIndicatorIds: dependencyMap } = title);
  title = title.title;
  const tmp = closure_12();
  const tile = tmp;
  if (0 !== badges.length) {
    let tmp5Result;
    const tmp4 = closure_5;
    let obj = { style: tmp.section, children: items };
    let tmp5 = closure_10;
    const tmp3 = closure_11;
    let obj2 = { variant: "body-md/medium", color: "text-strong", children: title };
    items = [closure_10(Text_Text.Heading, obj2), ];
    const tmp6 = require;
    if (badges.length > 0) {
      let obj3 = {
        style: tmp.grid,
        children: badges.map((badge) => {
              let combined;
              let items;
              let items1;
              const height = badge;
              let hasItem = dependencyMap.has(badge.badge_id);
              const obj = {
                style: items,
                accessibilityLabel: combined,
                onPress() {
                  return importDefault(badge);
                },
                children: items1
              };
              items = [tile.tile, ];
              size = { width: height, height };
              items[1] = size;
              const name = badge.name;
              const PressableScale = native.PressableScale;
              const tmp2 = closure_1_11;
              const tmp5 = tile;
              if (hasItem) {
                const intl = tmp3(tmp4[12]).intl;
                const _HermesInternal = HermesInternal;
                combined = "" + name + ", " + intl.string(tmp3(tmp4[12]).t.y2b7CA);
              } else {
                combined = name;
              }
              items1 = [, ];
              const obj2 = { badge, size: 44 };
              items1[0] = closure_1_10(BadgeCatalogIconDefault, obj2);
              const tmp8 = closure_1_10;
              if (hasItem) {
                const obj3 = { style: tmp5.badgeIndicator, "aria-hidden": true };
                hasItem = tmp8(closure_1_5, obj3);
              }
              items1[1] = hasItem;
              return tmp2(PressableScale, obj, badge.badge_id);
            })
      };
      tmp5Result = tmp5(tmp4, obj3);
    } else {
      const obj4 = { variant: "body-md/medium", color: "text-muted", children: emptyText };
      tmp5Result = tmp5(tmp6(5751).Text, obj4);
    }
    items[1] = tmp5Result;
    tmp3Result = tmp3(tmp4, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, centered: obj4, section: obj5, grid: obj6, tile: obj7, badgeIndicator: size, footer: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
obj4 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj7 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
obj8 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default function BadgeDirectoryView(arg0) {
  let Button2;
  let Button3;
  let earnable;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let isViewingOtherUser;
  let items14;
  let items15;
  let items16;
  let obj15;
  let obj17;
  let owned;
  let stringResult;
  let targetUserId;
  let targetUsername;
  ({ targetUserId, targetUsername } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  targetUserId = undefined;
  let stateFromStoresArray;
  let isBadgeUnreadStateEnabled;
  let badgeIndicatorIds;
  let tmp = targetUsername;
  let tmp2 = dependencyMap;
  let obj = targetUsername(11593);
  let isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "BadgeDirectoryView" });
  const tmp4 = closure_12();
  const diff = stateFromStores(1493)().width - 2 * stateFromStores(575).space.PX_16;
  let result = 3 * stateFromStores(575).space.PX_12;
  let items = [tmp4.footer, ];
  let obj2 = { paddingBottom: stateFromStores(1627)().bottom + stateFromStores(575).space.PX_16 };
  items[1] = obj2;
  let obj3 = targetUsername(504);
  const items1 = [UserStore];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  dependencyMap = tmp8;
  let tmp9 = stateFromStores;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    tmp9 = targetUserId;
  }
  targetUserId = tmp9;
  const items2 = [BadgeDirectoryStore];
  const items3 = [tmp9];
  const tmpResult = tmp(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(items2, () => {
    let badges;
    if (null != targetUserId) {
      badges = BadgeDirectoryStore.getBadges(tmp);
    } else {
      badges = [];
    }
    return badges;
  }, items3);
  const items4 = [BadgeDirectoryStore];
  const items5 = [tmp9];
  const tmpResult5 = tmp(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(items4, () => {
    const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
    return hasCatalogForResult;
  }, items5);
  const items6 = [BadgeDirectoryStore];
  const items7 = [tmp9];
  const items8 = [tmp9];
  const tmpResult6 = tmp(504);
  const stateFromStores2 = tmpResult6.useStateFromStores(items6, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items7);
  const effect = targetUserId.useEffect(() => {
    if (null != targetUserId) {
      const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
      if (!tmp2) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp);
      }
    }
  }, items8);
  const items9 = [stateFromStores, tmp8];
  const effect1 = targetUserId.useEffect(() => {
    const tmp = isViewingOtherUser && null != stateFromStores;
    if (tmp) {
      const tmp5 = stateFromStores;
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp5);
      }
    }
  }, items9);
  const items10 = [stateFromStoresArray];
  const memo = targetUserId.useMemo(() => {
    const obj = BadgeUtils;
    return obj.getDirectoryBadges(stateFromStoresArray);
  }, items10);
  ({ owned, earnable } = memo);
  let tmp36Result = !tmp8;
  let someResult = tmp36Result;
  const useIsBadgeUnreadStateEnabled = tmp(11596).useIsBadgeUnreadStateEnabled;
  tmp(11596);
  if (!(null != targetUserId && targetUserId !== stateFromStores)) {
    someResult = stateFromStoresArray.some((has_updates) => true === has_updates.has_updates);
  }
  isBadgeUnreadStateEnabled = useIsBadgeUnreadStateEnabled({ location: "BadgeDirectoryView", hasUnread: someResult });
  const tmpResult8 = tmp(11603);
  badgeIndicatorIds = tmpResult8.useBadgeDirectoryBadgeIndicators({ badges: stateFromStoresArray, enabled: tmp36Result }).badgeIndicatorIds;
  const items11 = [stateFromStoresArray, isBadgeUnreadStateEnabled, tmp8, badgeIndicatorIds];
  const memo1 = obj8.useMemo(function() {
    const tmp2 = isViewingOtherUser;
    if (!tmp2) {
      const tmp3 = isBadgeUnreadStateEnabled;
      if (tmp3) {
        const found = stateFromStoresArray.filter((has_updates) => true === has_updates.has_updates);
        const mapped = found.map((badge_id) => badge_id.badge_id);
        const _Set = Set;
        const items = [];
        HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, badgeIndicatorIds, 0));
        const self = this;
        const self2 = this;
        set = new Set(items);
        return set;
      }
    }
    return badgeIndicatorIds;
  }, items11);
  if (null != targetUserId && targetUserId !== stateFromStores) {
    let formatToPlainStringResult;
    let tmp33Result;
    if (null != targetUsername) {
      const intl2 = tmp(1113).intl;
      const obj4 = { username: targetUsername };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t.EIcwoe, obj4);
    }
    const items12 = [tmp9];
    const callback = obj8.useCallback(() => {
      if (null != targetUserId) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items12);
    const items13 = [tmp9, tmp8, targetUsername];
    const callback1 = obj8.useCallback(() => {
      const obj = targetUsername(isViewingOtherUser[21]);
      const result = obj.closeBadgeDirectoryScreen();
      badgeIndicatorIds.setState({ pendingCustomizeBadgesSheet: true });
      const obj2 = targetUsername(isViewingOtherUser[22]);
      const obj3 = { screen: constants.PROFILE_CUSTOMIZATION };
      obj2.openUserSettings(obj3);
    }, []);
    const callback2 = obj8.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername, source: "directory" };
        const obj = openBadgeDetailsSheet;
        const result = obj.openBadgeDetailsSheet(obj2);
      }
    }, items13);
    const callback3 = obj8.useCallback(() => {
      const obj = targetUsername(isViewingOtherUser[21]);
      const result = obj.closeBadgeDirectoryScreen();
      const obj2 = targetUsername(isViewingOtherUser[21]);
      const result1 = obj2.openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores1) {
      let tmp28;
      if (stateFromStores2) {
        const obj5 = { style: tmp4.centered, children: items14 };
        const obj6 = { variant: "body-md/semibold", children: intl3.string(tmp(1113).t.iufib1) };
        const Text = tmp(5751).Text;
        intl3 = tmp(1113).intl;
        items14 = [closure_10(Text, obj6), , ];
        const obj7 = { variant: "body-md/normal", color: "text-subtle", children: intl4.string(tmp(1113).t.eAn6z2) };
        const Text2 = tmp(5751).Text;
        intl4 = tmp(1113).intl;
        items14[1] = closure_10(Text2, obj7);
        const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: intl5.string(tmp(1113).t["7NqTJn"]) };
        const Button = tmp(5758).Button;
        intl5 = tmp(1113).intl;
        items14[2] = closure_10(Button, obj9);
        tmp28 = closure_11(isBadgeUnreadStateEnabled, obj5);
      }
      return tmp28;
    }
    if (stateFromStores1) {
      let result1 = (diff - result) / 4;
      const obj12 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: stringResult, onPressBadge: callback2, badgeIndicatorIds: memo1 };
      stringResult = undefined;
      const obj10 = { style: tmp4.container, children: items16 };
      const obj11 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.content, children: items15 };
      const tmp35 = stateFromStoresArray;
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        const intl6 = tmp(1113).intl;
        stringResult = intl6.string(tmp(1113).t.Qno0jg);
      }
      items15 = [closure_10(BadgeSection, obj12), ];
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        const obj13 = { title: intl7.string(tmp(1113).t["0YzU//"]), badges: earnable, tileSize: result1, onPressBadge: callback2, badgeIndicatorIds: memo1 };
        intl7 = tmp(1113).intl;
        tmp36Result = tmp36(tmp37, obj13);
      }
      items15[1] = tmp36Result;
      items16 = [closure_11(tmp35, obj11), ];
      if (null != targetUserId && targetUserId !== stateFromStores) {
        const obj14 = { style: items, children: closure_10(Button3, obj15) };
        obj15 = { variant: "secondary", onPress: callback3, text: intl9.string(tmp(1113).t.msyp90) };
        Button3 = tmp(5758).Button;
        intl9 = tmp(1113).intl;
        isBadgeManagementEnabled = tmp36(tmp34, obj14);
      } else {
        if (isBadgeManagementEnabled) {
          isBadgeManagementEnabled = owned.length > 0;
        }
        if (isBadgeManagementEnabled) {
          const obj16 = { style: items, children: closure_10(Button2, obj17) };
          obj17 = { variant: "secondary", onPress: callback1, text: intl8.string(tmp(1113).t["6CLLyH"]) };
          Button2 = tmp(5758).Button;
          intl8 = tmp(1113).intl;
          isBadgeManagementEnabled = tmp36(tmp34, obj16);
        }
      }
      items16[1] = isBadgeManagementEnabled;
      tmp33Result = tmp33(tmp34, obj10);
    } else {
      const obj18 = { style: tmp4.centered, children: closure_10(tmp(7015).ActivityIndicator, {}) };
      tmp33Result = closure_10(isBadgeUnreadStateEnabled, obj18);
    }
    tmp28 = tmp33Result;
  }
  const intl = tmp(1113).intl;
  formatToPlainStringResult = intl.string(tmp(1113).t.UqnlQF);
};
