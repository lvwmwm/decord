// Module ID: 12966
// Function ID: 12967
// Name: WelcomeScreenUtils
// Dependencies: [19, 12967, 2100, 2067, 558, 568, 4623, 12968, 504, 12969, 4757, 12970, 1984, 2]
// Exports: openWelcomeActionSheet

// Module 12966 (WelcomeScreenUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12969 */;
import noop from "module_19" /* 19 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 12967 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

require = fn;
const NO_WELCOME_SCREEN = fn(12967).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "Array" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(9);
  let obj = require("c");
  const tmp = _require;
  const tmp2 = welcomeModalChannelId;
  welcomeModalChannelId = require("module_4623").useLocation().welcomeModalChannelId;
  const tmp4 = require("useWelcomeScreenEnabled")(arg1, arg0);
  noop = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === welcomeModalChannelId) {
        if (cResult[4] === tmp4) {
          let tmp9 = cResult[5];
        }
        const stateFromStoresObject = tmp(tmp2[8]).useStateFromStoresObject(first, tmp9);
        shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
        if (cResult[6] !== shouldFetchGuildId) {
          class F {
            constructor() {
              if (null != shouldFetchGuildId) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[9]);
                welcomeScreen = obj.fetchWelcomeScreen(tmp);
              }
              return;
            }
          }
          const items1 = [shouldFetchGuildId];
          cResult[6] = shouldFetchGuildId;
          cResult[7] = F;
          cResult[8] = items1;
          let tmp12 = items1;
          let tmp11 = F;
        } else {
          class F {
            constructor() {
              if (null != shouldFetchGuildId) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[9]);
                welcomeScreen = obj.fetchWelcomeScreen(tmp);
              }
              return;
            }
          }
          tmp12 = cResult[8];
        }
        const effect = noop.useEffect(tmp11, tmp12);
        return stateFromStoresObject.welcomeScreenModalVisible;
      }
    }
  }
  const fn = function f() {
    if (closure_3) {
      guild = GuildStore.getGuild(closure_0);
      const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(closure_0);
      value = WelcomeScreenStore.get(closure_0);
      const hasSeenResult = WelcomeScreenStore.hasSeen(closure_0);
      let tmp11 = !hasSeenResult;
      const hasErrorResult = WelcomeScreenStore.hasError();
      if (!hasSeenResult) {
        tmp11 = welcomeModalChannelId === closure_1;
      }
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = null != value;
      }
      if (tmp14) {
        tmp14 = value !== NO_WELCOME_SCREEN;
      }
      if (tmp14) {
        tmp14 = !isFetchingResult;
      }
      if (tmp14) {
        tmp14 = !hasErrorResult;
      }
      if (tmp14) {
        tmp14 = selectableChannelIds.length > 0;
      }
      const obj = { welcomeScreenModalVisible: tmp14, shouldFetchGuildId: null };
      let id;
      if (tmp11) {
        if (null == value) {
          if (null != guild) {
            id = guild.id;
          }
        }
      }
      obj.shouldFetchGuildId = id;
      return obj;
    } else {
      return closure_8;
    }
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = welcomeModalChannelId;
  cResult[4] = tmp4;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  welcomeModalChannelId = require("module_4623").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(arg1, arg0);
  let obj = require("module_4623");
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (closure_3) {
      guild = GuildStore.getGuild(closure_0);
      const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(closure_0);
      value = WelcomeScreenStore.get(closure_0);
      const hasSeenResult = WelcomeScreenStore.hasSeen(closure_0);
      let tmp11 = !hasSeenResult;
      const hasErrorResult = WelcomeScreenStore.hasError();
      if (!hasSeenResult) {
        tmp11 = welcomeModalChannelId === closure_1;
      }
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = null != value;
      }
      if (tmp14) {
        tmp14 = value !== NO_WELCOME_SCREEN;
      }
      if (tmp14) {
        tmp14 = !isFetchingResult;
      }
      if (tmp14) {
        tmp14 = !hasErrorResult;
      }
      if (tmp14) {
        tmp14 = selectableChannelIds.length > 0;
      }
      const obj = { welcomeScreenModalVisible: tmp14, shouldFetchGuildId: null };
      let id;
      if (tmp11) {
        if (null == value) {
          if (null != guild) {
            id = guild.id;
          }
        }
      }
      obj.shouldFetchGuildId = id;
      return obj;
    } else {
      return closure_8;
    }
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const effect = noop.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const welcomeScreen = WelcomeScreenActionCreators.fetchWelcomeScreen(tmp);
    }
  }, items1);
  return stateFromStoresObject.welcomeScreenModalVisible;
});
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12970, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};
