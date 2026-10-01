// Module ID: 11792
// Function ID: 11793
// Name: GuildDirectoryAddModal
// Dependencies: [19, 11793, 21, 4836, 5994, 1249, 5936, 11791, 11794, 11802, 11806, 11816, 6544, 5910, 6421, 1115, 2]
// Exports: GuildDirectoryAddModalScreen, default

// Module 11792 (GuildDirectoryAddModal)
import Fragment from "Fragment" /* 21 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import reactDefault from "react" /* 5910 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11791 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11793 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
const jsx = Fragment.jsx;
let obj = { safeArea: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  let closure_0;
  let initialStack;
  let screens;
  _require = arg0;
  let tmp = reactDefault(() => {
    let obj2;
    let obj4;
    let obj6;
    function headerTitle() {
      return null;
    }
    function render(arg0) {
      const obj = {};
      const tmp = closure_1_1(closure_1_2[9]);
      const merged = Object.assign(arg0);
      return closure_1_4(tmp, obj);
    }
    const headerTitle2 = function headerTitle() {
      return null;
    };
    const render2 = function render(arg0) {
      const obj = {};
      const tmp = closure_1_1(closure_1_2[10]);
      const merged = Object.assign(arg0);
      return closure_1_4(tmp, obj);
    };
    const headerTitle3 = function headerTitle() {
      return null;
    };
    const render3 = function render(arg0) {
      const obj = {};
      const tmp = closure_1_1(closure_1_2[11]);
      const merged = Object.assign(arg0);
      return closure_1_4(tmp, obj);
    };
    let obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: obj2 };
    obj2 = {};
    let merged = Object.assign(closure_0);
    const items = [obj];
    const obj3 = { screens: obj4, initialStack: items };
    obj4 = {};
    const CREATE_OR_ADD = GuildDirectoryCreate.CREATE_OR_ADD;
    const obj5 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
      headerLeft: obj6.getHeaderCloseButton(GuildDirectoryAddModalActionCreatorsDefault.close),
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(closure_1_2[8]);
        const merged = Object.assign(arg0);
        return closure_1_4(tmp, obj);
      }
    };
    obj4[CREATE_OR_ADD] = obj5;
    obj6 = NavigatorHeader;
    obj4[GuildDirectoryCreate.DESCRIPTION] = { fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, headerTitle, render };
    ({ fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, headerTitle, render });
    obj4[GuildDirectoryCreate.TEMPLATES] = { fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE, headerTitle: headerTitle2, render: render2 };
    ({ fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE, headerTitle: headerTitle2, render: render2 });
    obj4[GuildDirectoryCreate.CREATE] = { headerTitle: headerTitle3, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, render: render3 };
    ({ headerTitle: headerTitle3, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, render: render3 });
    return obj3;
  });
  ({ screens, initialStack } = tmp);
  const Navigator = require("Navigator").Navigator;
  const intl = require("intl").intl;
  return <Navigator screens={screens} initialRouteStack={initialStack} headerBackTitle={intl.string(require("intl").t["13/7kX"])} />;
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  children = children.children;
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children });
};
