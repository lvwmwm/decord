// Module ID: 17984
// Function ID: 17985
// Name: StandaloneMembersView
// Dependencies: [19, 17, 21, 4969, 587, 558, 576, 9709, 10624, 1505, 1633, 9004, 6922, 1128, 17985, 12740, 12754, 12758, 7093, 2]

// Module 17984 (StandaloneMembersView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9004 */;
import useActiveTheme from "useActiveTheme" /* 9709 */;
import ThemedGradientDefault from "ThemedGradient" /* 10624 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 12740 */;
import KickConfirmDefault from "KickConfirm" /* 12754 */;
import BanConfirmDefault from "BanConfirm" /* 12758 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 17985 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, navigation;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
let createStyles = createStyles_mod;
let obj = { navigatorContainer: { overflow: "hidden" }, navigatorBackground: obj2, sceneBackground: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpaqueSceneBackdrop() {
  let items;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp3 = closure_10();
  let tmp4 = null;
  const obj2 = useActiveTheme;
  if (obj2.useIsClientThemeOrCustomThemeActive()) {
    let first;
    let tmp10;
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = metroRequire(ThemedGradientDefault, { absolute: true });
      cResult[0] = tmp9;
      first = tmp9;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.navigatorBackground) {
      const obj3 = { style: tmp3.navigatorBackground };
      const tmp13 = metroRequire(View, obj3);
      cResult[1] = tmp3.navigatorBackground;
      cResult[2] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== tmp3.sceneBackground) {
      const obj4 = { style: tmp3.sceneBackground };
      const tmp17 = metroRequire(View, obj4);
      cResult[3] = tmp3.sceneBackground;
      cResult[4] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === tmp10) {
      let tmp18;
      if (cResult[6] === tmp14) {
        tmp18 = cResult[7];
      }
      tmp4 = tmp18;
    }
    const obj5 = { style: StyleSheet.absoluteFill, pointerEvents: "none", children: items };
    items = [first, tmp10, tmp14];
    const tmp22 = metroImportDefault(View, obj5);
    cResult[5] = tmp10;
    cResult[6] = tmp14;
    cResult[7] = tmp22;
    tmp18 = tmp22;
  }
  return tmp4;
}) : (function OpaqueSceneBackdrop() {
  let items;
  const tmp = closure_10();
  let tmp3 = null;
  const obj = useActiveTheme;
  if (obj.useIsClientThemeOrCustomThemeActive()) {
    const obj2 = { style: StyleSheet.absoluteFill, pointerEvents: "none", children: items };
    items = [metroRequire(ThemedGradientDefault, { absolute: true }), , ];
    const obj3 = { style: tmp.navigatorBackground };
    items[1] = metroRequire(View, obj3);
    const obj4 = { style: tmp.sceneBackground };
    items[2] = metroRequire(View, obj4);
    tmp3 = metroImportDefault(View, obj2);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function StandaloneMembersView(guildId) {
  let closure_2;
  let obj4;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(31);
  guildId = guildId.guildId;
  closure_10();
  let obj2 = guildId(1505);
  navigation = obj2.useNavigation();
  const bottom = navigation(1633)().bottom;
  if (cResult[0] !== guildId) {
    const fn = function o() {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.init(guildId);
    };
    let items = [guildId];
    cResult[0] = guildId;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  const sum = 16 + bottom;
  if (cResult[3] !== sum) {
    const obj3 = { contentContainerStyle: obj4 };
    obj4 = { paddingBottom: sum };
    cResult[3] = sum;
    cResult[4] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  dependencyMap = tmp10;
  if (cResult[5] !== navigation) {
    const tmpResult = tmp(6922);
    const headerCloseButton = tmpResult.getHeaderCloseButton(() => navigation.goBack());
    cResult[5] = navigation;
    cResult[6] = headerCloseButton;
    tmp11 = headerCloseButton;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k() {
      let intl;
      const obj = { title: intl.string(guildId(closure_2[13]).t["9Oq93m"]) };
      const NavigatorHeader = guildId(closure_2[12]).NavigatorHeader;
      intl = guildId(closure_2[13]).intl;
      return closure_1_6(NavigatorHeader, obj);
    };
    cResult[7] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === guildId) {
    let tmp14;
    if (cResult[9] === tmp11) {
      tmp14 = cResult[10];
    }
    if (cResult[11] === guildId) {
      let tmp15;
      let tmp16;
      if (cResult[12] === tmp10) {
        tmp15 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function y() {
          return null;
        };
        cResult[14] = fn3;
        tmp16 = fn3;
      } else {
        tmp16 = cResult[14];
      }
      if (cResult[15] === guildId) {
        let tmp17;
        let tmp18;
        if (cResult[16] === tmp10) {
          tmp17 = cResult[17];
        }
        const _Symbol2 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              return null;
            }
          }
          cResult[18] = T;
          tmp18 = T;
        } else {
          class T {
            constructor() {
              return null;
            }
          }
        }
        if (cResult[19] === guildId) {
          class T {
            constructor() {
              return null;
            }
          }
          if (cResult[22] === tmp17) {
            class T {
              constructor() {
                return null;
              }
            }
          }
          const obj5 = {};
          obj5[constants.MAIN] = tmp14;
          obj5[constants.MEMBER_EDIT] = tmp15;
          obj5[constants.MEMBER_KICK] = tmp17;
          obj5[constants.MEMBER_BAN] = tmp19;
          cResult[22] = tmp17;
          cResult[23] = tmp19;
          cResult[24] = tmp14;
          cResult[25] = tmp15;
          cResult[26] = obj5;
        }
        const obj6 = {
          headerTitle: tmp18,
          render(arg0) {
                  let items;
                  const obj = { children: items };
                  items = [metroRequire(closure_11, {}), ];
                  const obj2 = { guildId };
                  const tmp = BanConfirmDefault;
                  const merged = Object.assign(arg0);
                  const merged1 = Object.assign(closure_2);
                  items[1] = metroRequire(tmp, obj2);
                  return metroImportDefault(metroImportAll, obj);
                }
        };
        cResult[19] = guildId;
        cResult[20] = tmp10;
        cResult[21] = obj6;
      }
      const obj7 = {
        headerTitle: tmp16,
        render(arg0) {
              let items;
              const obj = { children: items };
              items = [metroRequire(closure_11, {}), ];
              const obj2 = { guildId };
              const tmp = KickConfirmDefault;
              const merged = Object.assign(arg0);
              const merged1 = Object.assign(closure_2);
              items[1] = metroRequire(tmp, obj2);
              return metroImportDefault(metroImportAll, obj);
            }
      };
      cResult[15] = guildId;
      cResult[16] = tmp10;
      cResult[17] = obj7;
      tmp17 = obj7;
    }
    const obj8 = {
      render(arg0) {
          let items;
          const obj = { children: items };
          items = [metroRequire(closure_11, {}), ];
          const obj2 = { guildId };
          const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(closure_2);
          items[1] = metroRequire(GuildSettingsModalMemberEditScene, obj2);
          return metroImportDefault(metroImportAll, obj);
        }
    };
    cResult[11] = guildId;
    cResult[12] = tmp10;
    cResult[13] = obj8;
    tmp15 = obj8;
  }
  const obj9 = {
    headerLeft: tmp11,
    headerTitle: tmp13,
    render() {
      let items;
      const obj = { children: items };
      items = [metroRequire(closure_11, {}), ];
      const obj2 = { guildId };
      items[1] = metroRequire(GuildSettingsModalMembersWithTabsDefault, obj2);
      return metroImportDefault(metroImportAll, obj);
    }
  };
  cResult[8] = guildId;
  cResult[9] = tmp11;
  cResult[10] = obj9;
  tmp14 = obj9;
}) : (function StandaloneMembersView(guildId) {
  let intl;
  let obj3;
  let obj6;
  guildId = guildId.guildId;
  let obj2;
  let tmp = closure_10();
  let obj = guildId(obj2[9]);
  importDefault = obj.useNavigation();
  let items = [guildId];
  const bottom = require("useSafeAreaInsets")().bottom;
  const effect = react.useEffect(() => {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.init(guildId);
  }, items);
  obj2 = { contentContainerStyle: obj3 };
  const obj4 = {};
  obj3 = { paddingBottom: 16 + bottom };
  const MAIN = constants.MAIN;
  const obj5 = {
    headerLeft: obj6.getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      let intl;
      const obj = { title: intl.string(guildId(obj2[13]).t["9Oq93m"]) };
      const NavigatorHeader = guildId(obj2[12]).NavigatorHeader;
      intl = guildId(obj2[13]).intl;
      return closure_1_6(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      items = [metroRequire(closure_11, {}), ];
      obj2 = { guildId };
      items[1] = metroRequire(GuildSettingsModalMembersWithTabsDefault, obj2);
      return metroImportDefault(metroImportAll, obj);
    }
  };
  obj4[MAIN] = obj5;
  obj4[constants.MEMBER_EDIT] = {
    render(arg0) {
      let items;
      const obj = { children: items };
      items = [metroRequire(closure_11, {}), ];
      obj2 = { guildId };
      const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = metroRequire(GuildSettingsModalMemberEditScene, obj2);
      return metroImportDefault(metroImportAll, obj);
    }
  };
  obj4[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      let items;
      const obj = { children: items };
      items = [metroRequire(closure_11, {}), ];
      obj2 = { guildId };
      const tmp = KickConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = metroRequire(tmp, obj2);
      return metroImportDefault(metroImportAll, obj);
    }
  };
  obj4[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      let items;
      const obj = { children: items };
      items = [metroRequire(closure_11, {}), ];
      obj2 = { guildId };
      const tmp = BanConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = metroRequire(tmp, obj2);
      return metroImportDefault(metroImportAll, obj);
    }
  };
  obj6 = guildId(obj2[12]);
  const obj7 = { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: intl.string(guildId(obj2[13]).t["13/7kX"]), containerStyle: tmp.navigatorContainer };
  const Navigator = guildId(obj2[18]).Navigator;
  intl = guildId(obj2[13]).intl;
  return closure_6(Navigator, obj7);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default tmp7;
