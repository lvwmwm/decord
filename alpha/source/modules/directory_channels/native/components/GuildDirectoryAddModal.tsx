// Module ID: 12951
// Function ID: 12952
// Name: GuildDirectoryAddModal
// Dependencies: [19, 12952, 21, 5191, 6536, 1275, 6478, 12950, 12953, 12961, 12965, 12975, 558, 576, 7092, 6447, 1128, 6965, 2]

// Module 12951 (GuildDirectoryAddModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import useInitialValueDefault from "useInitialValue" /* 6447 */;
import NavigatorHeader from "NavigatorHeader" /* 6478 */;
import NavigatorConstants from "NavigatorConstants" /* 6536 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12950 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 12952 */;
import GuildDirectoryCreateOrAddDefault from "GuildDirectoryCreateOrAdd" /* 12953 */;
import GuildDirectoryCreateOrAddDescriptionDefault from "GuildDirectoryCreateOrAddDescription" /* 12961 */;
import GuildDirectoryTemplatesDefault from "GuildDirectoryTemplates" /* 12965 */;
import CreateGuildContainerDefault from "CreateGuildContainer" /* 12975 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let tmp;
const common_SafeAreaView = tmp(7092);
function getScreens() {
  let obj3;
  function headerTitle() {
    return null;
  }
  function render(arg0) {
    GuildDirectoryCreateOrAddDescriptionDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  }
  const headerTitle2 = function headerTitle() {
    return null;
  };
  const render2 = function render(arg0) {
    GuildDirectoryTemplatesDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  };
  const headerTitle3 = function headerTitle() {
    return null;
  };
  const render3 = function render(arg0) {
    CreateGuildContainerDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  };
  const obj = {};
  const CREATE_OR_ADD = GuildDirectoryCreate.CREATE_OR_ADD;
  const obj2 = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
    headerLeft: obj3.getHeaderCloseButton(GuildDirectoryAddModalActionCreatorsDefault.close),
    headerTitle() {
      return null;
    },
    render(arg0) {
      GuildDirectoryCreateOrAddDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj[CREATE_OR_ADD] = obj2;
  obj3 = NavigatorHeader;
  obj[GuildDirectoryCreate.DESCRIPTION] = { fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, headerTitle, render };
  ({ fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, headerTitle, render });
  obj[GuildDirectoryCreate.TEMPLATES] = { fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE, headerTitle: headerTitle2, render: render2 };
  ({ fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE, headerTitle: headerTitle2, render: render2 });
  obj[GuildDirectoryCreate.CREATE] = { headerTitle: headerTitle3, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, render: render3 };
  ({ headerTitle: headerTitle3, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE, render: render3 });
  return obj;
}
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
const jsx = Fragment.jsx;
let obj = { safeArea: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryAddModalScreen(children) {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp4 = closure_5();
  if (cResult[0] === children) {
    let tmp5;
    if (cResult[1] === tmp4.safeArea) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: tmp4.safeArea, children });
  cResult[0] = children;
  cResult[1] = tmp4.safeArea;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function GuildDirectoryAddModalScreen(children) {
  children = children.children;
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryAddModal(arg0) {
  let closure_0;
  let initialStack;
  let screens;
  let tmp4;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      let obj2;
      const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: obj2 };
      obj2 = {};
      const merged = Object.assign(closure_0);
      const items = [obj];
      const obj3 = { screens: getScreens(), initialStack: items };
      return obj3;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  ({ screens, initialStack } = useInitialValueDefault(tmp4));
  useInitialValueDefault(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(require("intl").t["13/7kX"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === initialStack) {
    let tmp8;
    if (cResult[4] === screens) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const tmp9 = jsx(require("Navigator").Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: tmp6 });
  cResult[3] = initialStack;
  cResult[4] = screens;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function GuildDirectoryAddModal(arg0) {
  let closure_0;
  let initialStack;
  let screens;
  const f114984 = () => {
    let obj2;
    const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: obj2 };
    obj2 = {};
    const merged = Object.assign(closure_0);
    const items = [obj];
    const obj3 = { screens: getScreens(), initialStack: items };
    return obj3;
  };
  _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(f114984));
  useInitialValueDefault(f114984);
  const Navigator = require("Navigator").Navigator;
  const intl = require("intl").intl;
  return <Navigator screens={screens} initialRouteStack={initialStack} headerBackTitle={intl.string(require("intl").t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default tmp4;
export const GuildDirectoryAddModalScreen = tmp3;
