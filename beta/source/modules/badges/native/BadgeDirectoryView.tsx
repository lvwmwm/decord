// Module ID: 11450
// Function ID: 11451
// Name: BadgeDirectoryView
// Dependencies: [19, 17, 1376, 8466, 1078, 11451, 21, 4758, 580, 558, 1482, 568, 4754, 11445, 1616, 504, 8471, 11452, 1119, 11448, 7626, 5188, 5796, 2]

// Module 11450 (BadgeDirectoryView)
import nativeDefault from "native" /* 580 */;
import Text_Text from "Text/Text" /* 4754 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8471 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11445 */;
import BadgeUtils from "BadgeUtils" /* 11452 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8466 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1078).UserSettingsSections;
let closure_9 = fn(11451).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, content: null, centered: null, section: null, grid: null, tile: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
obj2.centered = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
let obj5 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
obj2.section = { gap: nativeDefault.space.PX_16 };
let obj6 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
const obj7 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj2.tile = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
const f56887 = () => {

};
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((emptyText) => {
  const cResult = tileSize(568).c(12);
  ({ title, badges, tileSize } = emptyText);
  tile = emptyText.emptyText;
  let section = closure_12();
  if (0 === badges.length) {
    if (null == tile) {
      return null;
    }
  }
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-md/medium", color: "text-strong", children: title };
    const tmp7 = closure_10(tmp(4754).Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === badges) {
    if (cResult[3] === tile) {
      if (cResult[4] === section.grid) {
        if (cResult[5] === section.tile) {
          if (cResult[6] === tileSize) {
            if (cResult[8] === section.section) {
              if (cResult[9] === tmp5) {
              }
            }
            const obj3 = { style: section.section, children: null };
            let items = [tmp5, cResult[7]];
            obj3.children = items;
            const tmp16 = closure_11(closure_5, obj3);
            section = section.section;
            cResult[8] = section;
            cResult[9] = tmp5;
            cResult[10] = cResult[7];
            cResult[11] = tmp16;
          }
        }
      }
    }
  }
  if (badges.length > 0) {
    const obj4 = {
      style: section.grid,
      children: badges.map((accessibilityLabel) => {
          const obj = { style: null, accessible: true, accessibilityLabel: accessibilityLabel.name, children: v65535(BadgeCatalogIconDefault, { badge: accessibilityLabel, size: 44 }) };
          const items = [section.tile, ];
          const size = { width: tileSize, height: tileSize };
          items[1] = size;
          obj.style = items;
          return v65535(hasOwnProperty, obj, accessibilityLabel.badge_id);
        })
    };
    let tmp10 = closure_10(closure_5, obj4);
  } else {
    const obj5 = { variant: "text-md/medium", color: "text-muted", children: tile };
    tmp10 = closure_10(tmp(4754).Text, obj5);
  }
  cResult[2] = badges;
  cResult[3] = tile;
  ({ grid: tmp3[4], tile } = section);
  cResult[5] = tile;
  cResult[6] = tileSize;
  cResult[7] = tmp10;
}) : ((children) => {
  ({ badges, tileSize: require, emptyText } = children);
  let map = closure_12();
  if (0 === badges.length) {
    if (null == emptyText) {
      return null;
    }
  }
  let obj = { style: map.section, children: null };
  let items = [closure_10(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: children.title }), ];
  if (badges.length > 0) {
    const obj2 = { style: map.grid, children: null };
    map = badges.map;
    obj2.children = map((accessibilityLabel) => {
      const obj = { style: null, accessible: true, accessibilityLabel: accessibilityLabel.name, children: v65535(BadgeCatalogIconDefault, { badge: accessibilityLabel, size: 44 }) };
      const items = [map.tile, ];
      const size = { width: height, height };
      items[1] = size;
      obj.style = items;
      return v65535(hasOwnProperty, obj, accessibilityLabel.badge_id);
    });
    let tmp4Result = tmp4(tmp3, obj2);
  } else {
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
    tmp4Result = tmp4(Text_Text.Text, obj3);
  }
  items[1] = tmp4Result;
  obj.children = items;
  closure_11(closure_5, obj);
});
ReactCompilerGating = fn(558);
let obj9 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let size = fn(2);
let result1 = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  const cResult = targetUserId(568).c(68);
  targetUserId = targetUserId.targetUserId;
  const tmp4 = closure_12();
  if (typeof f56887 === "function") {
    const diff = targetUserId(1482)().width - 2 * targetUserId(580).space.PX_16;
    let result = 3 * targetUserId(580).space.PX_12;
    const sum = targetUserId(1616)().bottom + targetUserId(580).space.PX_16;
    if (cResult[0] !== sum) {
      let obj2 = { paddingBottom: sum };
      cResult[0] = sum;
      cResult[1] = obj2;
      let tmp9 = obj2;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] === tmp4.footer) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[5] = items;
        cResult[6] = E;
        let tmp13 = E;
        let tmp12 = items;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const stateFromStores = tmp(504).useStateFromStores(tmp12, tmp13);
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[7] = items1;
        let tmp16 = items1;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== targetUserId) {
        const fn = function z() {
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
        };
        cResult[8] = targetUserId;
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[9] = fn;
        let tmp18 = fn;
      } else {
        tmp18 = cResult[9];
      }
      const tmpResult = tmp(504);
      const stateFromStores1 = tmp(504).useStateFromStores(tmp16, tmp18);
      let tmp22 = stateFromStores;
      if (null != targetUserId && targetUserId !== stateFromStores) {
        tmp22 = targetUserId;
      }
      targetUserId = tmp22;
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [BadgeDirectoryStore];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[10] = items2;
        let tmp23 = items2;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] !== tmp22) {
        const fn2 = function w() {
          if (null != targetUserId) {
            let badges = BadgeDirectoryStore.getBadges(tmp);
          } else {
            badges = [];
          }
          return badges;
        };
        const items3 = [tmp22];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[11] = tmp22;
        cResult[12] = items3;
        cResult[13] = fn2;
        let tmp26 = fn2;
        let tmp25 = items3;
      } else {
        tmp25 = cResult[12];
        tmp26 = cResult[13];
      }
      const tmpResult5 = tmp(504);
      const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp23, tmp26, tmp25);
      const _Symbol4 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [BadgeDirectoryStore];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[14] = items4;
        let tmp28 = items4;
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] !== tmp22) {
        class N {
          constructor() {
            hasCatalogForResult = null != targetUserId;
            if (hasCatalogForResult) {
              tmp3 = closure_7;
              hasCatalogForResult = closure_7.hasCatalogFor(tmp);
            }
            return hasCatalogForResult;
          }
        }
        const items5 = [tmp22];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[15] = tmp22;
        cResult[16] = N;
        cResult[17] = items5;
        let tmp31 = items5;
        const tmp30 = N;
      } else {
        class N {
          constructor() {
            hasCatalogForResult = null != targetUserId;
            if (hasCatalogForResult) {
              tmp3 = closure_7;
              hasCatalogForResult = closure_7.hasCatalogFor(tmp);
            }
            return hasCatalogForResult;
          }
        }
        tmp31 = cResult[17];
      }
      const tmpResult6 = tmp(504);
      const stateFromStores2 = tmp(504).useStateFromStores(tmp28, tmp30, tmp31);
      const _Symbol5 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            hasCatalogForResult = null != targetUserId;
            if (hasCatalogForResult) {
              tmp3 = closure_7;
              hasCatalogForResult = closure_7.hasCatalogFor(tmp);
            }
            return hasCatalogForResult;
          }
        }
        const items6 = [BadgeDirectoryStore];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[18] = items6;
        const tmp33 = items6;
      } else {
        class N {
          constructor() {
            hasCatalogForResult = null != targetUserId;
            if (hasCatalogForResult) {
              tmp3 = closure_7;
              hasCatalogForResult = closure_7.hasCatalogFor(tmp);
            }
            return hasCatalogForResult;
          }
        }
      }
      if (cResult[19] !== tmp22) {
        class G {
          constructor() {
            return closure_7.hasCatalogFetchErrorFor(targetUserId);
          }
        }
        const items7 = [tmp22];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[19] = tmp22;
        cResult[20] = G;
        cResult[21] = items7;
        let tmp35 = items7;
        const tmp34 = G;
      } else {
        class G {
          constructor() {
            return closure_7.hasCatalogFetchErrorFor(targetUserId);
          }
        }
        tmp35 = cResult[21];
      }
      const tmpResult7 = tmp(504);
      const stateFromStores3 = tmp(504).useStateFromStores(tmp33, tmp34, tmp35);
      if (cResult[22] !== tmp22) {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        const items8 = [tmp22];
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[22] = tmp22;
        cResult[23] = V;
        cResult[24] = items8;
        let tmp38 = items8;
        const tmp37 = V;
      } else {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        tmp38 = cResult[24];
      }
      const effect = noop.useEffect(tmp37, tmp38);
      if (cResult[25] !== stateFromStoresArray) {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        const directoryBadges = obj8.getDirectoryBadges(stateFromStoresArray);
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[26] = directoryBadges;
        const tmp41 = directoryBadges;
      } else {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
      }
      ({ earnable, owned } = tmp41);
      if (cResult[27] === (null != targetUserId && targetUserId !== stateFromStores)) {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
      }
      if (!(null != targetUserId && targetUserId !== stateFromStores)) {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
        let stringResult = obj9.string(tmp(1119).t.UqnlQF);
        class E {
          constructor() {
            currentUser = closure_1_6.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
            return id;
          }
        }
        cResult[27] = tmp21;
        cResult[28] = stateFromStores1;
        cResult[29] = stringResult;
      } else {
        class V {
          constructor() {
            tmp = targetUserId;
            if (null != targetUserId) {
              obj = closure_7;
              tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
              if (!tmp2) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj2 = closure_0(closure_2[16]);
                badgeDirectory = obj2.fetchBadgeDirectory(tmp);
              }
            }
            return;
          }
        }
      }
      const intl = tmp(1119).intl;
      let obj3 = { username: stateFromStores1 };
      stringResult = intl.formatToPlainString(tmp(1119).t.EIcwoe, obj3);
      const tmpResult8 = tmp(504);
    }
    const items9 = [tmp4.footer, tmp9];
    cResult[2] = tmp4.footer;
    cResult[3] = tmp9;
    cResult[4] = items9;
  } else {
    class V {
      constructor() {
        tmp = targetUserId;
        if (null != targetUserId) {
          obj = closure_7;
          tmp2 = closure_7.hasCatalogFor(tmp) && !obj.isCatalogStaleFor(tmp);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[16]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp);
          }
        }
        return;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
}) : ((targetUserId) => {
  targetUserId = undefined;
  let stateFromStoresArray;
  const tmp = closure_12();
  if (typeof f56887 === "function") {
    let stringResult1 = stateFromStoresArray;
    const diff = targetUserId(stateFromStoresArray[10])().width - 2 * targetUserId(stateFromStoresArray[8]).space.PX_16;
    let result = 3 * targetUserId(stateFromStoresArray[8]).space.PX_12;
    let items = [tmp.footer, ];
    let obj = { paddingBottom: targetUserId(stateFromStoresArray[14])().bottom + targetUserId(stateFromStoresArray[8]).space.PX_16 };
    items[1] = obj;
    const items1 = [UserStore];
    const stateFromStores = targetUserId(stateFromStoresArray[15]).useStateFromStores(items1, () => {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    });
    let obj2 = targetUserId(stateFromStoresArray[15]);
    const items2 = [UserStore];
    const stateFromStores1 = targetUserId(stateFromStoresArray[15]).useStateFromStores(items2, () => {
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
    let tmp12 = stateFromStores;
    if (null != targetUserId && targetUserId !== stateFromStores) {
      tmp12 = targetUserId;
    }
    targetUserId = tmp12;
    let obj3 = targetUserId(stateFromStoresArray[15]);
    const items3 = [BadgeDirectoryStore];
    const items4 = [tmp12];
    stateFromStoresArray = targetUserId(stringResult1[15]).useStateFromStoresArray(items3, () => {
      if (null != targetUserId) {
        let badges = BadgeDirectoryStore.getBadges(tmp);
      } else {
        badges = [];
      }
      return badges;
    }, items4);
    const tmp6Result = targetUserId(stringResult1[15]);
    const items5 = [BadgeDirectoryStore];
    const items6 = [tmp12];
    const stateFromStores2 = targetUserId(stringResult1[15]).useStateFromStores(items5, () => {
      let hasCatalogForResult = null != targetUserId;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
      }
      return hasCatalogForResult;
    }, items6);
    const tmp6Result3 = targetUserId(stringResult1[15]);
    const items7 = [BadgeDirectoryStore];
    const items8 = [tmp12];
    const items9 = [tmp12];
    const stateFromStores3 = targetUserId(stringResult1[15]).useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items8);
    const effect = noop.useEffect(() => {
      if (null != targetUserId) {
        if (!tmp2) {
          const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp);
        }
        tmp2 = BadgeDirectoryStore.hasCatalogFor(tmp) && !BadgeDirectoryStore.isCatalogStaleFor(tmp);
      }
    }, items9);
    const items10 = [stateFromStoresArray];
    const memo = noop.useMemo(() => BadgeUtils.getDirectoryBadges(stateFromStoresArray), items10);
    const owned = memo.owned;
    if (null != targetUserId && targetUserId !== stateFromStores) {
      if (null != stateFromStores1) {
        const intl2 = tmp6(stringResult1[18]).intl;
        const obj4 = { username: stateFromStores1 };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp6(stringResult1[18]).t.EIcwoe, obj4);
      }
      const items11 = [tmp12];
      const callback = obj7.useCallback(() => {
        if (null != targetUserId) {
          const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp, { isRetry: true });
        }
      }, items11);
      const callback1 = obj7.useCallback(() => {
        const result = targetUserId(stateFromStoresArray[19]).closeBadgeDirectoryScreen();
        const obj = targetUserId(stateFromStoresArray[19]);
        const obj3 = { screen: constants.PROFILE_CUSTOMIZATION, params: { autoFocusElement: constants2.BADGES } };
        targetUserId(stateFromStoresArray[20]).openUserSettings(obj3);
      }, []);
      let string = obj7.useCallback(() => {
        const result = targetUserId(stateFromStoresArray[19]).closeBadgeDirectoryScreen();
        const obj = targetUserId(stateFromStoresArray[19]);
        const result1 = targetUserId(stateFromStoresArray[19]).openBadgeDirectoryScreen();
      }, []);
      if (!stateFromStores2) {
        if (stateFromStores3) {
          const obj5 = { style: tmp.centered, children: null };
          const obj6 = { variant: "text-md/semibold", children: null };
          const intl3 = tmp6(stringResult1[18]).intl;
          obj6.children = intl3.string(tmp6(stringResult1[18]).t.iufib1);
          const items12 = [closure_10(tmp6(stringResult1[12]).Text, obj6), , ];
          const obj8 = { variant: "text-md/normal", color: "text-subtle", children: null };
          const intl4 = tmp6(stringResult1[18]).intl;
          obj8.children = intl4.string(tmp6(stringResult1[18]).t.eAn6z2);
          items12[1] = closure_10(tmp6(stringResult1[12]).Text, obj8);
          const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
          const intl5 = tmp6(stringResult1[18]).intl;
          obj9.text = intl5.string(tmp6(stringResult1[18]).t["7NqTJn"]);
          items12[2] = closure_10(tmp6(stringResult1[21]).Button, obj9);
          obj5.children = items12;
          return closure_11(closure_5, obj5);
        }
      }
      if (!stateFromStores2) {
        const obj10 = { style: tmp.centered, children: closure_10(tmp6(stringResult1[22]).ActivityIndicator, {}) };
        closure_10(closure_5, obj10);
      }
      let result1 = (diff - result) / 4;
      const obj11 = { style: tmp.container, children: null };
      const obj12 = { contentContainerStyle: tmp.content, children: null };
      const obj13 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: null };
      let stringResult;
      if (!tmp11) {
        const intl6 = tmp6(stringResult1[18]).intl;
        stringResult = intl6.string(tmp6(stringResult1[18]).t.Qno0jg);
      }
      obj13.emptyText = stringResult;
      const items13 = [closure_10(closure_14, obj13), ];
      let tmp32Result = !tmp11;
      if (!tmp11) {
        const obj14 = { title: null, badges: null, tileSize: null };
        const intl7 = tmp6(stringResult1[18]).intl;
        obj14.title = intl7.string(tmp6(stringResult1[18]).t["0YzU//"]);
        obj14.badges = tmp19;
        obj14.tileSize = result1;
        tmp32Result = tmp32(tmp33, obj14);
      }
      items13[1] = tmp32Result;
      obj12.children = items13;
      const items14 = [closure_11(closure_4, obj12), ];
      if (tmp11) {
        const obj15 = { style: items, children: null };
        const obj16 = { variant: "secondary", onPress: string, text: null };
        const intl9 = tmp6(stringResult1[18]).intl;
        string = intl9.string;
        stringResult1 = string(tmp6(stringResult1[18]).t.msyp90);
        obj16.text = stringResult1;
        items = tmp32(tmp6(stringResult1[21]).Button, obj16);
        obj15.children = items;
        let tmp32Result2 = tmp32(tmp30, obj15);
      } else {
        tmp32Result2 = owned.length > 0;
        if (tmp32Result2) {
          const obj17 = { style: items, children: null };
          const obj18 = { variant: "secondary", onPress: callback1, text: null };
          const intl8 = tmp6(stringResult1[18]).intl;
          obj18.text = intl8.string(tmp6(stringResult1[18]).t["6CLLyH"]);
          obj17.children = tmp32(tmp6(stringResult1[21]).Button, obj18);
          tmp32Result2 = tmp32(tmp30, obj17);
        }
      }
      items14[1] = tmp32Result2;
      obj11.children = items14;
      closure_11(closure_5, obj11);
    }
    const intl = tmp6(stringResult1[18]).intl;
    formatToPlainStringResult = intl.string(tmp6(stringResult1[18]).t.UqnlQF);
    const tmp6Result4 = targetUserId(stringResult1[15]);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
