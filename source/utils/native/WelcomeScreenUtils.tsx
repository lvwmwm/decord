// Module ID: 11712
// Function ID: 90866
// Name: useShowWelcomeModal
// Dependencies: [31, 11713, 1907, 1838, 3958, 11714, 566, 11715, 4098, 11716, 1934, 2]
// Exports: openWelcomeActionSheet, useShowWelcomeModal

// Module 11712 (useShowWelcomeModal)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NO_WELCOME_SCREEN } from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: undefined };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  const _require = guildId;
  const importDefault = channelId;
  welcomeModalChannelId = _require(welcomeModalChannelId[4]).useLocation().welcomeModalChannelId;
  const React = importDefault(welcomeModalChannelId[5])(channelId, guildId);
  let obj = _require(welcomeModalChannelId[4]);
  const items = [_createForOfIteratorHelperLoose, shouldFetchGuildId, closure_6];
  const stateFromStoresObject = _require(welcomeModalChannelId[6]).useStateFromStoresObject(items, () => {
    if (result) {
      const guild = outer1_7.getGuild(closure_0);
      const selectableChannelIds = outer1_6.getSelectableChannelIds(closure_0);
      const value = shouldFetchGuildId.get(closure_0);
      const hasSeenResult = shouldFetchGuildId.hasSeen(closure_0);
      let tmp11 = !hasSeenResult;
      const hasErrorResult = shouldFetchGuildId.hasError();
      if (tmp11) {
        tmp11 = welcomeModalChannelId === closure_1;
      }
      const obj = {};
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = null != value;
      }
      if (tmp14) {
        tmp14 = value !== outer1_5;
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
      obj.welcomeScreenModalVisible = tmp14;
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
      return outer1_8;
    }
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const effect = React.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const welcomeScreen = guildId(welcomeModalChannelId[7]).fetchWelcomeScreen(shouldFetchGuildId);
      const obj = guildId(welcomeModalChannelId[7]);
    }
  }, items1);
  return stateFromStoresObject.welcomeScreenModalVisible;
};
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = importDefault(4098);
  obj.openLazy(require(1934) /* maybeLoadBundle */(11716, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};
