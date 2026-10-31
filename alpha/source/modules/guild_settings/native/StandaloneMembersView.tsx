// Module ID: 18636
// Function ID: 18637
// Name: StandaloneMembersView
// Dependencies: [19, 17, 21, 5014, 575, 9823, 10736, 1497, 1625, 9074, 6998, 1113, 18637, 13248, 13262, 13266, 7169, 2]
// Exports: default

// Module 18636 (StandaloneMembersView)
import nativeDefault from "native" /* 575 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import useActiveTheme from "useActiveTheme" /* 9823 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 13248 */;
import KickConfirmDefault from "KickConfirm" /* 13262 */;
import BanConfirmDefault from "BanConfirm" /* 13266 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 18637 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function OpaqueSceneBackdrop() {
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
}
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
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  let intl;
  let obj3;
  let obj6;
  guildId = guildId.guildId;
  let obj2;
  let tmp = closure_10();
  let obj = guildId(obj2[7]);
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
      const obj = { title: intl.string(guildId(obj2[11]).t["9Oq93m"]) };
      const NavigatorHeader = guildId(obj2[10]).NavigatorHeader;
      intl = guildId(obj2[11]).intl;
      return closure_1_6(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      items = [metroRequire(OpaqueSceneBackdrop, {}), ];
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
      items = [metroRequire(OpaqueSceneBackdrop, {}), ];
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
      items = [metroRequire(OpaqueSceneBackdrop, {}), ];
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
      items = [metroRequire(OpaqueSceneBackdrop, {}), ];
      obj2 = { guildId };
      const tmp = BanConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      items[1] = metroRequire(tmp, obj2);
      return metroImportDefault(metroImportAll, obj);
    }
  };
  obj6 = guildId(obj2[10]);
  const obj7 = { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: intl.string(guildId(obj2[11]).t["13/7kX"]), containerStyle: tmp.navigatorContainer };
  const Navigator = guildId(obj2[16]).Navigator;
  intl = guildId(obj2[11]).intl;
  return closure_6(Navigator, obj7);
};
