// Module ID: 11421
// Function ID: 11422
// Name: BadgeDirectoryView
// Dependencies: [19, 17, 11422, 1384, 8755, 1072, 21, 5009, 575, 1492, 5619, 8983, 1114, 11414, 11416, 1626, 504, 8760, 11423, 11424, 11419, 7557, 11426, 5629, 6947, 2]
// Exports: default

// Module 11421 (BadgeDirectoryView)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5619 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8760 */;
import native from "native" /* 8983 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11414 */;
import BadgeUtils from "BadgeUtils" /* 11423 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 11426 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11422 */;
import UserStore from "UserStore" /* 1384 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let currentUser, dependencyMap;

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
    let obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
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
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
      tmp5Result = tmp5(tmp6(5619).Text, obj4);
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
  let items13;
  let items14;
  let items15;
  let obj16;
  let obj18;
  let owned;
  let state;
  let stringResult;
  let targetUserId;
  let targetUsername;
  let tmp33Result;
  ({ targetUserId, targetUsername } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  targetUserId = undefined;
  let stateFromStoresArray;
  let tmp = targetUsername;
  let tmp2 = dependencyMap;
  let obj = targetUsername(11416);
  let isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "BadgeDirectoryView" });
  const tmp4 = closure_12();
  const diff = stateFromStores(1492)().width - 2 * stateFromStores(575).space.PX_16;
  let result = 3 * stateFromStores(575).space.PX_12;
  const items = [tmp4.footer, ];
  let obj2 = { paddingBottom: stateFromStores(1626)().bottom + stateFromStores(575).space.PX_16 };
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
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(items4, () => {
    const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
    return hasCatalogForResult;
  }, items5);
  const items6 = [BadgeDirectoryStore];
  const items7 = [tmp9];
  const items8 = [tmp9];
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(items6, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items7);
  const effect = targetUserId.useEffect(() => {
    if (null != targetUserId) {
      const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
      if (!tmp2) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp);
      }
    }
  }, items8);
  const items9 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
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
  const obj4 = { badges: stateFromStoresArray, enabled: tmp33Result };
  tmp33Result = !tmp8;
  const tmpResult6 = tmp(11424);
  const badgeIndicatorIds = tmpResult6.useBadgeDirectoryBadgeIndicators(obj4).badgeIndicatorIds;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    let formatToPlainStringResult;
    let tmp30Result;
    if (null != targetUsername) {
      const intl2 = tmp(1114).intl;
      const obj5 = { username: targetUsername };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t.EIcwoe, obj5);
    }
    const items11 = [tmp9];
    const callback = obj7.useCallback(() => {
      if (null != targetUserId) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items11);
    const items12 = [tmp9, null != targetUserId && targetUserId !== stateFromStores, targetUsername];
    const callback1 = obj7.useCallback(() => {
      const obj = targetUsername(isViewingOtherUser[20]);
      const result = obj.closeBadgeDirectoryScreen();
      state.setState({ pendingCustomizeBadgesSheet: true });
      const obj2 = targetUsername(isViewingOtherUser[21]);
      const obj3 = { screen: constants.PROFILE_CUSTOMIZATION };
      obj2.openUserSettings(obj3);
    }, []);
    const callback2 = obj7.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername };
        const obj = openBadgeDetailsSheet;
        const result = obj.openBadgeDetailsSheet(obj2);
      }
    }, items12);
    const callback3 = obj7.useCallback(() => {
      const obj = targetUsername(isViewingOtherUser[20]);
      const result = obj.closeBadgeDirectoryScreen();
      const obj2 = targetUsername(isViewingOtherUser[20]);
      const result1 = obj2.openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores1) {
      let tmp25;
      if (stateFromStores2) {
        const obj6 = { style: tmp4.centered, children: items13 };
        const obj8 = { variant: "text-md/semibold", children: intl3.string(tmp(1114).t.iufib1) };
        const Text = tmp(5619).Text;
        intl3 = tmp(1114).intl;
        items13 = [closure_10(Text, obj8), , ];
        const obj9 = { variant: "text-md/normal", color: "text-subtle", children: intl4.string(tmp(1114).t.eAn6z2) };
        const Text2 = tmp(5619).Text;
        intl4 = tmp(1114).intl;
        items13[1] = closure_10(Text2, obj9);
        const obj10 = { variant: "secondary", size: "sm", onPress: callback, text: intl5.string(tmp(1114).t["7NqTJn"]) };
        const Button = tmp(5629).Button;
        intl5 = tmp(1114).intl;
        items13[2] = closure_10(Button, obj10);
        tmp25 = closure_11(closure_5, obj6);
      }
      return tmp25;
    }
    if (stateFromStores1) {
      let result1 = (diff - result) / 4;
      const obj13 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: stringResult, onPressBadge: callback2, badgeIndicatorIds };
      stringResult = undefined;
      const obj11 = { style: tmp4.container, children: items15 };
      const obj12 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.content, children: items14 };
      const tmp32 = stateFromStoresArray;
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        const intl6 = tmp(1114).intl;
        stringResult = intl6.string(tmp(1114).t.Qno0jg);
      }
      items14 = [closure_10(BadgeSection, obj13), ];
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        const obj14 = { title: intl7.string(tmp(1114).t["0YzU//"]), badges: earnable, tileSize: result1, onPressBadge: callback2, badgeIndicatorIds };
        intl7 = tmp(1114).intl;
        tmp33Result = tmp33(tmp34, obj14);
      }
      items14[1] = tmp33Result;
      items15 = [closure_11(tmp32, obj12), ];
      if (null != targetUserId && targetUserId !== stateFromStores) {
        const obj15 = { style: items, children: closure_10(Button3, obj16) };
        obj16 = { variant: "secondary", onPress: callback3, text: intl9.string(tmp(1114).t.msyp90) };
        Button3 = tmp(5629).Button;
        intl9 = tmp(1114).intl;
        isBadgeManagementEnabled = tmp33(tmp31, obj15);
      } else {
        if (isBadgeManagementEnabled) {
          isBadgeManagementEnabled = owned.length > 0;
        }
        if (isBadgeManagementEnabled) {
          const obj17 = { style: items, children: closure_10(Button2, obj18) };
          obj18 = { variant: "secondary", onPress: callback1, text: intl8.string(tmp(1114).t["6CLLyH"]) };
          Button2 = tmp(5629).Button;
          intl8 = tmp(1114).intl;
          isBadgeManagementEnabled = tmp33(tmp31, obj17);
        }
      }
      items15[1] = isBadgeManagementEnabled;
      tmp30Result = tmp30(tmp31, obj11);
    } else {
      const obj19 = { style: tmp4.centered, children: closure_10(tmp(6947).ActivityIndicator, {}) };
      tmp30Result = closure_10(closure_5, obj19);
    }
    tmp25 = tmp30Result;
  }
  const intl = tmp(1114).intl;
  formatToPlainStringResult = intl.string(tmp(1114).t.UqnlQF);
};
