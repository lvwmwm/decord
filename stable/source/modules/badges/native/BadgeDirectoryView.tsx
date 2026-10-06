// Module ID: 10646
// Function ID: 10647
// Name: BadgeDirectoryView
// Dependencies: [19, 17, 1378, 7641, 1086, 10647, 21, 4837, 588, 558, 1485, 576, 4833, 1127, 10641, 1619, 504, 7646, 10648, 10649, 10644, 6801, 10651, 5282, 5890, 2]

// Module 10646 (BadgeDirectoryView)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import Text_Text from "Text/Text" /* 4833 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7646 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10641 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 10647 */;
import BadgeUtils from "BadgeUtils" /* 10648 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10651 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1378 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7641 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser, targetUserId, tmp7;

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
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const f55548 = () => {

};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeIndicatorIds) => {
  let badges;
  let emptyText;
  let items;
  let onPressBadge;
  let tileSize;
  let title;
  let tmp5;
  let tmp2 = badgeIndicatorIds;
  let obj = tileSize(badgeIndicatorIds[11]);
  const cResult = obj.c(15);
  ({ title, badges, tileSize } = badgeIndicatorIds);
  ({ emptyText, onPressBadge } = badgeIndicatorIds);
  badgeIndicatorIds = badgeIndicatorIds.badgeIndicatorIds;
  let tmp4 = closure_13();
  const tile = tmp4;
  if (0 !== badges.length) {
    let tmp6;
    let tmp11;
    if (cResult[0] !== title) {
      let obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
      const tmp8 = closure_11(tmp(tmp2[12]).Text, obj2);
      cResult[0] = title;
      cResult[1] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === badgeIndicatorIds) {
      if (cResult[3] === badges) {
        if (cResult[4] === emptyText) {
          if (cResult[5] === onPressBadge) {
            if (cResult[6] === tmp4.badgeIndicator) {
              if (cResult[7] === tmp4.grid) {
                if (cResult[8] === tmp4.tile) {
                  let tmp9;
                  if (cResult[9] === tileSize) {
                    tmp9 = cResult[10];
                  }
                  if (cResult[11] === tmp4.section) {
                    if (cResult[12] === tmp6) {
                      let tmp14;
                      if (cResult[13] === tmp9) {
                        tmp14 = cResult[14];
                      }
                      tmp5 = tmp14;
                    }
                  }
                  let obj3 = { style: tmp4.section, children: items };
                  items = [tmp6, tmp9];
                  const tmp17 = closure_12(closure_6, obj3);
                  cResult[11] = tmp4.section;
                  cResult[12] = tmp6;
                  cResult[13] = tmp9;
                  cResult[14] = tmp17;
                  tmp14 = tmp17;
                }
              }
            }
          }
        }
      }
    }
    if (badges.length > 0) {
      const obj4 = {
        style: tmp4.grid,
        children: badges.map((badge) => {
              let combined;
              let items;
              let items1;
              tileSize = badge;
              let hasItem = badgeIndicatorIds.has(badge.badge_id);
              const obj = {
                style: items,
                accessibilityRole: "button",
                accessibilityLabel: combined,
                onPress() {
                  return onPressBadge(badge);
                },
                children: items1
              };
              items = [tile.tile, ];
              size = { width: tileSize, height: tileSize };
              items[1] = size;
              const name = badge.name;
              const tmp2 = closure_1_12;
              const tmp3 = closure_1_4;
              const tmp4 = tile;
              if (hasItem) {
                const intl = tileSize(badgeIndicatorIds[13]).intl;
                const _HermesInternal = HermesInternal;
                combined = "" + name + ", " + intl.string(tileSize(badgeIndicatorIds[13]).t.y2b7CA);
              } else {
                combined = name;
              }
              items1 = [, ];
              const obj2 = { badge, size: 44 };
              items1[0] = closure_1_11(onPressBadge(badgeIndicatorIds[14]), obj2);
              const tmp9 = closure_1_11;
              if (hasItem) {
                const obj3 = { style: tmp4.badgeIndicator, "aria-hidden": true };
                hasItem = tmp9(closure_1_6, obj3);
              }
              items1[1] = hasItem;
              return tmp2(tmp3, obj, badge.badge_id);
            })
      };
      tmp11 = closure_11(closure_6, obj4);
    } else {
      const obj5 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
      tmp11 = closure_11(tmp(tmp2[12]).Text, obj5);
    }
    cResult[2] = badgeIndicatorIds;
    cResult[3] = badges;
    cResult[4] = emptyText;
    cResult[5] = onPressBadge;
    cResult[6] = tmp4.badgeIndicator;
    cResult[7] = tmp4.grid;
    cResult[8] = tmp4.tile;
    cResult[9] = tileSize;
    cResult[10] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp5 = null;
  }
  return tmp5;
}) : ((title) => {
  let badges;
  let emptyText;
  let items;
  let require;
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
                const intl = require("intl").intl;
                const _HermesInternal = HermesInternal;
                combined = "" + name + ", " + intl.string(require("intl").t.y2b7CA);
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
      tmp5Result = tmp5(tmp6(4833).Text, obj4);
    }
    items[1] = tmp5Result;
    tmp3Result = tmp3(tmp4, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  let constants2;
  let isViewingOtherUser;
  let stateFromStores;
  let stateFromStores1;
  let stringResult;
  let tmp39;
  let tmp40;
  let tmp45;
  let tmp = targetUserId;
  let tmp2 = stateFromStores1;
  let obj = targetUserId(stateFromStores1[11]);
  const cResult = obj.c(83);
  targetUserId = targetUserId.targetUserId;
  const tmp4 = closure_13();
  if (typeof f55548 === "function") {
    let tmp9;
    let tmp5 = stateFromStores;
    const diff = stateFromStores(tmp2[10])().width - 2 * stateFromStores(tmp2[8]).space.PX_16;
    let result = 3 * stateFromStores(tmp2[8]).space.PX_12;
    const sum = stateFromStores(tmp2[15])().bottom + stateFromStores(tmp2[8]).space.PX_16;
    if (cResult[0] !== sum) {
      let obj2 = { paddingBottom: sum };
      cResult[0] = sum;
      cResult[1] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] === tmp4.footer) {
      let tmp13;
      let tmp12;
      let tmp16;
      let tmp18;
      let tmp23;
      let tmp25;
      let tmp24;
      let tmp27;
      let tmp29;
      let tmp28;
      let tmp32;
      let tmp34;
      let tmp33;
      let tmp37;
      let tmp36;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[5] = items;
        cResult[6] = D;
        tmp13 = D;
        tmp12 = items;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult = tmp(tmp2[16]);
      stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[7] = items1;
        tmp16 = items1;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== targetUserId) {
        class T {
          constructor() {
            tmp2 = undefined;
            if (null != targetUserId) {
              tmp3 = closure_7;
              user = closure_7.getUser(tmp);
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
        cResult[8] = targetUserId;
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[9] = T;
        tmp18 = T;
      } else {
        class T {
          constructor() {
            tmp2 = undefined;
            if (null != targetUserId) {
              tmp3 = closure_7;
              user = closure_7.getUser(tmp);
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
      }
      const tmpResult6 = tmp(tmp2[16]);
      stateFromStores1 = tmpResult6.useStateFromStores(tmp16, tmp18);
      react = tmp21;
      if (null != targetUserId && targetUserId !== stateFromStores) {
        class T {
          constructor() {
            tmp2 = undefined;
            if (null != targetUserId) {
              tmp3 = closure_7;
              user = closure_7.getUser(tmp);
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
      }
      stateFromStores = tmp22;
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            tmp2 = undefined;
            if (null != targetUserId) {
              tmp3 = closure_7;
              user = closure_7.getUser(tmp);
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
        const items2 = [BadgeDirectoryStore];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[10] = items2;
        tmp23 = items2;
      } else {
        class T {
          constructor() {
            tmp2 = undefined;
            if (null != targetUserId) {
              tmp3 = closure_7;
              user = closure_7.getUser(tmp);
              username = undefined;
              if (user != null) {
                username = user.username;
              }
              tmp2 = username;
            }
            return tmp2;
          }
        }
      }
      if (cResult[11] !== stateFromStores) {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
        const items3 = [stateFromStores];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[11] = stateFromStores;
        cResult[12] = items3;
        cResult[13] = X;
        tmp25 = X;
        tmp24 = items3;
      } else {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
        tmp25 = cResult[13];
      }
      const tmpResult7 = tmp(tmp2[16]);
      const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp23, tmp25, tmp24);
      const _Symbol4 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
        const items4 = [BadgeDirectoryStore];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[14] = items4;
        tmp27 = items4;
      } else {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
      }
      if (cResult[15] !== stateFromStores) {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
        const items5 = [stateFromStores];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[15] = stateFromStores;
        cResult[16] = tmp30;
        cResult[17] = items5;
        tmp29 = items5;
        tmp28 = tmp30;
      } else {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
        tmp29 = cResult[17];
      }
      const tmpResult8 = tmp(tmp2[16]);
      const stateFromStores2 = tmpResult8.useStateFromStores(tmp27, tmp28, tmp29);
      const _Symbol5 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
        const items6 = [BadgeDirectoryStore];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[18] = items6;
        tmp32 = items6;
      } else {
        class X {
          constructor() {
            if (null != targetUserId) {
              tmp2 = closure_8;
              badges = closure_8.getBadges(tmp);
            } else {
              badges = [];
            }
            return badges;
          }
        }
      }
      if (cResult[19] !== stateFromStores) {
        class V {
          constructor() {
            return closure_8.hasCatalogFetchErrorFor(targetUserId);
          }
        }
        const items7 = [stateFromStores];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[19] = stateFromStores;
        cResult[20] = V;
        cResult[21] = items7;
        tmp34 = items7;
        tmp33 = V;
      } else {
        class V {
          constructor() {
            return closure_8.hasCatalogFetchErrorFor(targetUserId);
          }
        }
        tmp34 = cResult[21];
      }
      const tmpResult9 = tmp(tmp2[16]);
      const stateFromStores3 = tmpResult9.useStateFromStores(tmp32, tmp33, tmp34);
      if (cResult[22] !== stateFromStores) {
        class Q {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_8;
              tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[17]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        const items8 = [stateFromStores];
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[22] = stateFromStores;
        cResult[23] = Q;
        cResult[24] = items8;
        tmp37 = items8;
        tmp36 = Q;
      } else {
        class Q {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_8;
              tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[17]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        tmp37 = cResult[24];
      }
      const effect = react.useEffect(tmp36, tmp37);
      const obj8 = react;
      if (cResult[25] === stateFromStores) {
        let tmp42;
        class Q {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_8;
              tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[17]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        const effect1 = obj8.useEffect(tmp39, tmp40);
        if (cResult[29] !== stateFromStoresArray) {
          class Q {
            constructor() {
              tmp = targetUserId;
              if (null != targetUserId) {
                obj = closure_8;
                tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                if (!tmp2) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj2 = closure_0(closure_2[17]);
                  badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                }
              }
              return;
            }
          }
          const directoryBadges = obj9.getDirectoryBadges(stateFromStoresArray);
          class D {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
          cResult[30] = directoryBadges;
          tmp42 = directoryBadges;
        } else {
          class Q {
            constructor() {
              tmp = targetUserId;
              if (null != targetUserId) {
                obj = closure_8;
                tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                if (!tmp2) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj2 = closure_0(closure_2[17]);
                  badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                }
              }
              return;
            }
          }
        }
        class D {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        const owned = tmp42.owned;
        if (cResult[31] === stateFromStoresArray) {
          class Q {
            constructor() {
              tmp = targetUserId;
              if (null != targetUserId) {
                obj = closure_8;
                tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                if (!tmp2) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj2 = closure_0(closure_2[17]);
                  badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                }
              }
              return;
            }
          }
          const tmpResult10 = tmp(tmp2[19]);
          const badgeIndicatorIds = tmpResult10.useBadgeDirectoryBadgeIndicators(tmp45).badgeIndicatorIds;
          class D {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              return id;
            }
          }
          if (null != targetUserId && targetUserId !== stateFromStores) {
            class Q {
              constructor() {
                tmp = targetUserId;
                if (null != targetUserId) {
                  obj = closure_8;
                  tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
                  if (!tmp2) {
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj2 = closure_0(closure_2[17]);
                    badgeDirectory = obj2.fetchBadgeDirectory(tmp);
                  }
                }
                return;
              }
            }
            cResult[34] = null != targetUserId && targetUserId !== stateFromStores;
            class D {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                return id;
              }
            }
            cResult[35] = stateFromStores1;
            cResult[36] = stringResult;
          }
          const intl = tmp(tmp2[13]).intl;
          stringResult = intl.string(tmp(tmp2[13]).t.UqnlQF);
        }
        let obj3 = { badges: stateFromStoresArray, enabled: !(null != targetUserId && targetUserId !== stateFromStores) };
        cResult[31] = stateFromStoresArray;
        cResult[32] = !(null != targetUserId && targetUserId !== stateFromStores);
        cResult[33] = obj3;
        tmp45 = obj3;
      }
      class K {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            tmp = null != closure_1;
          }
          if (tmp) {
            tmp4 = closure_8;
            tmp5 = closure_1;
            if (!closure_8.hasCatalogFor(closure_1)) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj = closure_0(closure_2[17]);
              badgeDirectory = obj.fetchBadgeDirectory(tmp5);
            }
          }
          return;
        }
      }
      const items9 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
      cResult[25] = stateFromStores;
      cResult[26] = null != targetUserId && targetUserId !== stateFromStores;
      cResult[27] = K;
      cResult[28] = items9;
      tmp39 = K;
      tmp40 = items9;
    }
    const items10 = [tmp4.footer, tmp9];
    cResult[2] = tmp4.footer;
    cResult[3] = tmp9;
    cResult[4] = items10;
  } else {
    class Q {
      constructor() {
        tmp = targetUserId;
        if (null != targetUserId) {
          obj = closure_8;
          tmp2 = closure_8.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[17]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp);
          }
        }
        return;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
}) : ((targetUserId) => {
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
  let tmp37Result;
  let stateFromStores;
  let stateFromStores1;
  react = undefined;
  targetUserId = undefined;
  let stateFromStoresArray;
  let tmp = closure_13();
  if (typeof f55548 === "function") {
    let tmp2 = stateFromStores;
    const diff = stateFromStores(stateFromStores1[10])().width - 2 * stateFromStores(stateFromStores1[8]).space.PX_16;
    let result = 3 * stateFromStores(stateFromStores1[8]).space.PX_12;
    const items = [tmp.footer, ];
    let obj = { paddingBottom: stateFromStores(stateFromStores1[15])().bottom + stateFromStores(stateFromStores1[8]).space.PX_16 };
    items[1] = obj;
    let obj2 = targetUserId(stateFromStores1[16]);
    const items1 = [UserStore];
    stateFromStores = obj2.useStateFromStores(items1, () => {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    });
    let obj3 = targetUserId(stateFromStores1[16]);
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
    react = tmp11;
    let tmp12 = stateFromStores;
    if (null != targetUserId && targetUserId !== stateFromStores) {
      tmp12 = targetUserId;
    }
    targetUserId = tmp12;
    const items3 = [BadgeDirectoryStore];
    const items4 = [tmp12];
    const tmp6Result = targetUserId(stateFromStores1[16]);
    stateFromStoresArray = tmp6Result.useStateFromStoresArray(items3, () => {
      let badges;
      if (null != targetUserId) {
        badges = BadgeDirectoryStore.getBadges(tmp);
      } else {
        badges = [];
      }
      return badges;
    }, items4);
    const items5 = [BadgeDirectoryStore];
    const items6 = [tmp12];
    const tmp6Result4 = targetUserId(stateFromStores1[16]);
    const stateFromStores2 = tmp6Result4.useStateFromStores(items5, () => {
      const hasCatalogForResult = null != targetUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
      return hasCatalogForResult;
    }, items6);
    const items7 = [BadgeDirectoryStore];
    const items8 = [tmp12];
    const items9 = [tmp12];
    const tmp6Result5 = targetUserId(stateFromStores1[16]);
    const stateFromStores3 = tmp6Result5.useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items8);
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
    let obj4 = { badges: stateFromStoresArray, enabled: tmp37Result };
    tmp37Result = !tmp11;
    const tmp6Result6 = targetUserId(stateFromStores1[19]);
    const badgeIndicatorIds = tmp6Result6.useBadgeDirectoryBadgeIndicators(obj4).badgeIndicatorIds;
    if (null != targetUserId && targetUserId !== stateFromStores) {
      let formatToPlainStringResult;
      let tmp34Result;
      if (null != stateFromStores1) {
        const intl2 = tmp6(tmp3[13]).intl;
        const obj5 = { username: stateFromStores1 };
        formatToPlainStringResult = intl2.formatToPlainString(tmp6(tmp3[13]).t.EIcwoe, obj5);
      }
      const items12 = [tmp12];
      const callback = obj7.useCallback(() => {
        if (null != targetUserId) {
          const obj = BadgeDirectoryActionCreators;
          const badgeDirectory = obj.fetchBadgeDirectory(tmp, { isRetry: true });
        }
      }, items12);
      const items13 = [tmp12, null != targetUserId && targetUserId !== stateFromStores, stateFromStores1];
      const callback1 = obj7.useCallback(() => {
        let obj4;
        const obj = targetUserId(stateFromStores1[20]);
        const result = obj.closeBadgeDirectoryScreen();
        const obj3 = { screen: constants.PROFILE_CUSTOMIZATION, params: obj4 };
        obj4 = { autoFocusElement: constants2.BADGES };
        const obj2 = targetUserId(stateFromStores1[21]);
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
        const obj = targetUserId(stateFromStores1[20]);
        const result = obj.closeBadgeDirectoryScreen();
        const obj2 = targetUserId(stateFromStores1[20]);
        const result1 = obj2.openBadgeDirectoryScreen();
      }, []);
      if (!stateFromStores2) {
        let tmp29;
        if (stateFromStores3) {
          const obj6 = { style: tmp.centered, children: items14 };
          const obj8 = { variant: "text-md/semibold", children: intl3.string(targetUserId(stateFromStores1[13]).t.iufib1) };
          const Text = tmp6(tmp3[12]).Text;
          intl3 = tmp6(tmp3[13]).intl;
          items14 = [closure_11(Text, obj8), , ];
          const obj9 = { variant: "text-md/normal", color: "text-subtle", children: intl4.string(targetUserId(stateFromStores1[13]).t.eAn6z2) };
          const Text2 = tmp6(tmp3[12]).Text;
          intl4 = tmp6(tmp3[13]).intl;
          items14[1] = closure_11(Text2, obj9);
          const obj10 = { variant: "secondary", size: "sm", onPress: callback, text: intl5.string(targetUserId(stateFromStores1[13]).t["7NqTJn"]) };
          const Button = tmp6(tmp3[23]).Button;
          intl5 = tmp6(tmp3[13]).intl;
          items14[2] = closure_11(Button, obj10);
          tmp29 = closure_12(closure_6, obj6);
        }
        return tmp29;
      }
      if (stateFromStores2) {
        let tmp37Result2;
        let result1 = (diff - result) / 4;
        const obj13 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: stringResult, onPressBadge: callback2, badgeIndicatorIds };
        stringResult = undefined;
        const obj11 = { style: tmp.container, children: items16 };
        const obj12 = { contentContainerStyle: tmp.content, children: items15 };
        const tmp36 = stateFromStoresArray;
        if (!(null != targetUserId && targetUserId !== stateFromStores)) {
          const intl6 = tmp6(tmp3[13]).intl;
          stringResult = intl6.string(tmp6(tmp3[13]).t.Qno0jg);
        }
        items15 = [closure_11(closure_15, obj13), ];
        if (!(null != targetUserId && targetUserId !== stateFromStores)) {
          const obj14 = { title: intl7.string(targetUserId(stateFromStores1[13]).t["0YzU//"]), badges: earnable, tileSize: result1, onPressBadge: callback2, badgeIndicatorIds };
          intl7 = tmp6(tmp3[13]).intl;
          tmp37Result = tmp37(tmp38, obj14);
        }
        items15[1] = tmp37Result;
        items16 = [closure_12(tmp36, obj12), ];
        if (null != targetUserId && targetUserId !== stateFromStores) {
          const obj15 = { style: items, children: closure_11(Button3, obj16) };
          obj16 = { variant: "secondary", onPress: callback3, text: intl9.string(targetUserId(stateFromStores1[13]).t.msyp90) };
          Button3 = tmp6(tmp3[23]).Button;
          intl9 = tmp6(tmp3[13]).intl;
          tmp37Result2 = tmp37(tmp35, obj15);
        } else {
          tmp37Result2 = owned.length > 0;
          if (tmp37Result2) {
            const obj17 = { style: items, children: closure_11(Button2, obj18) };
            obj18 = { variant: "secondary", onPress: callback1, text: intl8.string(targetUserId(stateFromStores1[13]).t["6CLLyH"]) };
            Button2 = tmp6(tmp3[23]).Button;
            intl8 = tmp6(tmp3[13]).intl;
            tmp37Result2 = tmp37(tmp35, obj17);
          }
        }
        items16[1] = tmp37Result2;
        tmp34Result = tmp34(tmp35, obj11);
      } else {
        const obj19 = { style: tmp.centered, children: closure_11(targetUserId(stateFromStores1[24]).ActivityIndicator, {}) };
        tmp34Result = closure_11(closure_6, obj19);
      }
      tmp29 = tmp34Result;
    }
    const intl = tmp6(tmp3[13]).intl;
    formatToPlainStringResult = intl.string(tmp6(tmp3[13]).t.UqnlQF);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
size = size_mod;
let result1 = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default tmp6;
