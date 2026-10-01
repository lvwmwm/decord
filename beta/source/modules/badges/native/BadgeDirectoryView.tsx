// Module ID: 10657
// Function ID: 10658
// Name: BadgeDirectoryView
// Dependencies: [19, 17, 1372, 7637, 1074, 10658, 21, 4836, 576, 1479, 4832, 1115, 10652, 1613, 504, 7642, 10659, 10660, 10655, 6800, 10662, 5281, 5889, 2]
// Exports: default

// Module 10657 (BadgeDirectoryView)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl10 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10652 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 10658 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10662 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let currentUser;

let closure_12;
let closure_4;
let hasOwnProperty;
let metroRequire;
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
  const tmp = closure_13();
  const tile = tmp;
  if (0 !== badges.length) {
    let tmp5Result;
    let tmp4 = closure_6;
    let obj = { style: tmp.section, children: items };
    let tmp3 = closure_12;
    let obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
    items = [closure_11(Text_Text.Text, obj2), ];
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
                accessibilityRole: "button",
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
              const tmp2 = closure_1_12;
              const tmp3 = closure_1_4;
              const tmp4 = tile;
              if (hasItem) {
                const intl = intl10.intl;
                const _HermesInternal = HermesInternal;
                combined = "" + name + ", " + intl.string(intl10.t.y2b7CA);
              } else {
                combined = name;
              }
              items1 = [, ];
              const obj2 = { badge, size: 44 };
              items1[0] = closure_1_11(BadgeCatalogIconDefault, obj2);
              const tmp9 = closure_1_11;
              if (hasItem) {
                const obj3 = { style: tmp4.badgeIndicator, "aria-hidden": true };
                hasItem = tmp9(closure_1_6, obj3);
              }
              items1[1] = hasItem;
              return tmp2(tmp3, obj, badge.badge_id);
            })
      };
      tmp5Result = tmp5(tmp4, obj3);
    } else {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
      tmp5Result = tmp5(tmp6(4832).Text, obj4);
    }
    items[1] = tmp5Result;
    tmp3Result = tmp3(tmp4, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
let react = react_mod;
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_10 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, centered: obj4, section: obj5, grid: obj6, tile: obj7, badgeIndicator: size, footer: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
obj4 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj7 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj8 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default function BadgeDirectoryView(targetUserId) {
  let Button2;
  let Button3;
  let constants2;
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
  let obj16;
  let obj18;
  let owned;
  let stringResult;
  let tmp33Result;
  let stateFromStores;
  let stateFromStores1;
  targetUserId = undefined;
  let stateFromStoresArray;
  let tmp = closure_13();
  let tmp2 = stateFromStores1;
  const diff = stateFromStores(stateFromStores1[9])().width - 2 * stateFromStores(stateFromStores1[8]).space.PX_16;
  let result = 3 * stateFromStores(stateFromStores1[8]).space.PX_12;
  const items = [tmp.footer, ];
  let obj = { paddingBottom: stateFromStores(stateFromStores1[13])().bottom + stateFromStores(stateFromStores1[8]).space.PX_16 };
  items[1] = obj;
  let tmp5 = targetUserId;
  let obj2 = targetUserId(stateFromStores1[14]);
  const items1 = [UserStore];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = targetUserId(stateFromStores1[14]);
  const items2 = [UserStore];
  stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let tmp2;
    if (null != targetUserId) {
      const user = UserStore.getUser(tmp);
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  react = tmp8;
  let tmp9 = stateFromStores;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    tmp9 = targetUserId;
  }
  targetUserId = tmp9;
  const items3 = [BadgeDirectoryStore];
  const items4 = [tmp9];
  const tmp5Result = tmp5(tmp2[14]);
  stateFromStoresArray = tmp5Result.useStateFromStoresArray(items3, () => {
    let badges;
    if (null != targetUserId) {
      badges = BadgeDirectoryStore.getBadges(tmp);
    } else {
      badges = [];
    }
    return badges;
  }, items4);
  const items5 = [BadgeDirectoryStore];
  const items6 = [tmp9];
  const tmp5Result4 = tmp5(tmp2[14]);
  const stateFromStores2 = tmp5Result4.useStateFromStores(items5, () => {
    const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
    return hasCatalogForResult;
  }, items6);
  const items7 = [BadgeDirectoryStore];
  const items8 = [tmp9];
  const items9 = [tmp9];
  const tmp5Result5 = tmp5(tmp2[14]);
  const stateFromStores3 = tmp5Result5.useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items8);
  const effect = react.useEffect(() => {
    if (null != targetUserId) {
      const tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
      if (!tmp2) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp);
      }
    }
  }, items9);
  const items10 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
  const effect1 = react.useEffect(() => {
    const tmp = isViewingOtherUser && null != stateFromStores;
    if (tmp) {
      const tmp5 = stateFromStores;
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp5);
      }
    }
  }, items10);
  const items11 = [stateFromStoresArray];
  const memo = react.useMemo(() => {
    const obj = BadgeUtils;
    return obj.getDirectoryBadges(stateFromStoresArray);
  }, items11);
  ({ owned, earnable } = memo);
  let obj4 = { badges: stateFromStoresArray, enabled: tmp33Result };
  tmp33Result = !tmp8;
  const tmp5Result6 = tmp5(tmp2[17]);
  const badgeIndicatorIds = tmp5Result6.useBadgeDirectoryBadgeIndicators(obj4).badgeIndicatorIds;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    let formatToPlainStringResult;
    let tmp30Result;
    if (null != stateFromStores1) {
      const intl2 = tmp5(tmp2[11]).intl;
      const obj5 = { username: stateFromStores1 };
      formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp2[11]).t.EIcwoe, obj5);
    }
    const items12 = [tmp9];
    const callback = obj7.useCallback(() => {
      if (null != targetUserId) {
        const obj = BadgeDirectoryActionCreators;
        const badgeDirectory = obj.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items12);
    const items13 = [tmp9, null != targetUserId && targetUserId !== stateFromStores, stateFromStores1];
    const callback1 = obj7.useCallback(() => {
      let obj4;
      const obj = targetUserId(stateFromStores1[18]);
      const result = obj.closeBadgeDirectoryScreen();
      const obj3 = { screen: constants.PROFILE_CUSTOMIZATION, params: obj4 };
      obj4 = { autoFocusElement: constants2.BADGES };
      const obj2 = targetUserId(stateFromStores1[19]);
      obj2.openUserSettings(obj3);
    }, []);
    const callback2 = obj7.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername: stateFromStores1 };
        const obj = openBadgeDetailsSheet;
        const result = obj.openBadgeDetailsSheet(obj2);
      }
    }, items13);
    const callback3 = obj7.useCallback(() => {
      const obj = targetUserId(stateFromStores1[18]);
      const result = obj.closeBadgeDirectoryScreen();
      const obj2 = targetUserId(stateFromStores1[18]);
      const result1 = obj2.openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores2) {
      let tmp25;
      if (stateFromStores3) {
        const obj6 = { style: tmp.centered, children: items14 };
        const obj8 = { variant: "text-md/semibold", children: intl3.string(tmp5(tmp2[11]).t.iufib1) };
        const Text = tmp5(tmp2[10]).Text;
        intl3 = tmp5(tmp2[11]).intl;
        items14 = [closure_11(Text, obj8), , ];
        const obj9 = { variant: "text-md/normal", color: "text-subtle", children: intl4.string(tmp5(tmp2[11]).t.eAn6z2) };
        const Text2 = tmp5(tmp2[10]).Text;
        intl4 = tmp5(tmp2[11]).intl;
        items14[1] = closure_11(Text2, obj9);
        const obj10 = { variant: "secondary", size: "sm", onPress: callback, text: intl5.string(tmp5(tmp2[11]).t["7NqTJn"]) };
        const Button = tmp5(tmp2[21]).Button;
        intl5 = tmp5(tmp2[11]).intl;
        items14[2] = closure_11(Button, obj10);
        tmp25 = closure_12(closure_6, obj6);
      }
      return tmp25;
    }
    if (stateFromStores2) {
      let tmp33Result2;
      let result1 = (diff - result) / 4;
      const obj13 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: stringResult, onPressBadge: callback2, badgeIndicatorIds };
      stringResult = undefined;
      const obj11 = { style: tmp.container, children: items16 };
      const obj12 = { contentContainerStyle: tmp.content, children: items15 };
      const tmp32 = stateFromStoresArray;
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        const intl6 = tmp5(tmp2[11]).intl;
        stringResult = intl6.string(tmp5(tmp2[11]).t.Qno0jg);
      }
      items15 = [closure_11(BadgeSection, obj13), ];
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        const obj14 = { title: intl7.string(tmp5(tmp2[11]).t["0YzU//"]), badges: earnable, tileSize: result1, onPressBadge: callback2, badgeIndicatorIds };
        intl7 = tmp5(tmp2[11]).intl;
        tmp33Result = tmp33(tmp34, obj14);
      }
      items15[1] = tmp33Result;
      items16 = [closure_12(tmp32, obj12), ];
      if (null != targetUserId && targetUserId !== stateFromStores) {
        const obj15 = { style: items, children: closure_11(Button3, obj16) };
        obj16 = { variant: "secondary", onPress: callback3, text: intl9.string(tmp5(tmp2[11]).t.msyp90) };
        Button3 = tmp5(tmp2[21]).Button;
        intl9 = tmp5(tmp2[11]).intl;
        tmp33Result2 = tmp33(tmp31, obj15);
      } else {
        tmp33Result2 = owned.length > 0;
        if (tmp33Result2) {
          const obj17 = { style: items, children: closure_11(Button2, obj18) };
          obj18 = { variant: "secondary", onPress: callback1, text: intl8.string(tmp5(tmp2[11]).t["6CLLyH"]) };
          Button2 = tmp5(tmp2[21]).Button;
          intl8 = tmp5(tmp2[11]).intl;
          tmp33Result2 = tmp33(tmp31, obj17);
        }
      }
      items16[1] = tmp33Result2;
      tmp30Result = tmp30(tmp31, obj11);
    } else {
      const obj19 = { style: tmp.centered, children: closure_11(tmp5(tmp2[22]).ActivityIndicator, {}) };
      tmp30Result = closure_11(closure_6, obj19);
    }
    tmp25 = tmp30Result;
  }
  const intl = tmp5(tmp2[11]).intl;
  formatToPlainStringResult = intl.string(tmp5(tmp2[11]).t.UqnlQF);
};
