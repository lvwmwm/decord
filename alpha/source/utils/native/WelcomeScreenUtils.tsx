// Module ID: 14215
// Function ID: 14216
// Name: WelcomeScreenUtils
// Dependencies: [19, 14216, 4944, 4885, 5056, 14217, 504, 14218, 5258, 14219, 1994, 2]
// Exports: openWelcomeActionSheet, useShowWelcomeModal

// Module 14215 (WelcomeScreenUtils)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 14216 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 14218 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const WelcomeScreenStore = WelcomeScreenStore2;
let _require, importDefault;

let react = react_mod;
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export function useShowWelcomeModal(guildId, channelId) {
  let closure_3;
  let shouldFetchGuildId;
  let welcomeModalChannelId;
  _require = guildId;
  importDefault = channelId;
  let obj = require("MemoryRouter");
  welcomeModalChannelId = obj.useLocation().welcomeModalChannelId;
  react = require("useWelcomeScreenEnabled")(channelId, guildId);
  let obj2 = require("get initialized");
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let id;
    const tmp = closure_3;
    if (tmp) {
      if (!WelcomeScreenStore.hasSeen(guildId)) {
        if (welcomeModalChannelId === channelId) {
          const guild = GuildStore.getGuild(tmp2);
          const value = obj.get(tmp2);
          let tmp6 = null != value;
          const hasErrorResult = WelcomeScreenStore.hasError();
          const isFetchingResult = WelcomeScreenStore.isFetching();
          if (tmp6) {
            tmp6 = value !== NO_WELCOME_SCREEN;
          }
          if (tmp6) {
            tmp6 = !isFetchingResult;
          }
          if (tmp6) {
            tmp6 = !hasErrorResult;
          }
          if (tmp6) {
            tmp6 = GuildChannelStore.getSelectableChannelIds(tmp2).length > 0;
          }
          const obj2 = { welcomeScreenModalVisible: tmp6, shouldFetchGuildId: id };
          id = undefined;
          if (null == value) {
            if (null != guild) {
              id = guild.id;
            }
          }
          return obj2;
        }
      }
    }
    return closure_8;
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
}
export function openWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14219, dependencyMap.paths);
  openLazy(tmp2, "GuildWelcomeActionSheet" + guildId, { guildId, onHide });
}
