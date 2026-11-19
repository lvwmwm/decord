// Module ID: 13474
// Function ID: 13475
// Name: WelcomeScreenUtils
// Dependencies: [19, 13475, 4722, 4663, 4836, 13476, 504, 13477, 5006, 13478, 2121, 2]
// Exports: openWelcomeActionSheet, useShowWelcomeModal

// Module 13474 (WelcomeScreenUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 13475 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 13477 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4722 */;
import GuildStore from "GuildStore" /* 4663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const WelcomeScreenStore = WelcomeScreenStore2;
let _require, importDefault;

let react = react_mod;
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "Array" };
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
  const tmp2 = asyncRequire(13478, dependencyMap.paths);
  openLazy(tmp2, "GuildWelcomeActionSheet" + guildId, { guildId, onHide });
}
