// Module ID: 12150
// Function ID: 12151
// Name: WelcomeScreenUtils
// Dependencies: [19, 12151, 4467, 2067, 4666, 12152, 504, 12153, 4800, 12154, 1981, 2]
// Exports: openWelcomeActionSheet, useShowWelcomeModal

// Module 12150 (WelcomeScreenUtils)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 12151 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12153 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const WelcomeScreenStore = WelcomeScreenStore2;
let _require, importDefault;

let react = react_mod;
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "r" };
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  let closure_3;
  let shouldFetchGuildId;
  let welcomeModalChannelId;
  _require = guildId;
  importDefault = channelId;
  let obj = require("MemoryRouter");
  welcomeModalChannelId = obj.useLocation().welcomeModalChannelId;
  react = require("useWelcomeScreenEnabled")(channelId, guildId);
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let id;
    const tmp = closure_3;
    if (tmp) {
      const guild = GuildStore.getGuild(guildId);
      const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
      const value = WelcomeScreenStore.get(guildId);
      const hasSeenResult = WelcomeScreenStore.hasSeen(guildId);
      let tmp12 = !hasSeenResult;
      const hasErrorResult = WelcomeScreenStore.hasError();
      const isFetchingResult = WelcomeScreenStore.isFetching();
      if (!hasSeenResult) {
        tmp12 = welcomeModalChannelId === channelId;
      }
      const obj = { welcomeScreenModalVisible: tmp12 && null != value && value !== NO_WELCOME_SCREEN && !isFetchingResult && !hasErrorResult && selectableChannelIds.length > 0, shouldFetchGuildId: id };
      id = undefined;
      if (tmp12) {
        if (null == value) {
          if (null != guild) {
            id = guild.id;
          }
        }
      }
      return obj;
    } else {
      return closure_8;
    }
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const welcomeScreenModalVisible = stateFromStoresObject.welcomeScreenModalVisible;
  const effect = react.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const obj = WelcomeScreenActionCreators;
      const welcomeScreen = obj.fetchWelcomeScreen(tmp);
    }
  }, items1);
  return welcomeScreenModalVisible;
};
export const openWelcomeActionSheet = function openWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12154, dependencyMap.paths);
  openLazy(tmp2, "GuildWelcomeActionSheet" + guildId, { guildId, onHide });
};
