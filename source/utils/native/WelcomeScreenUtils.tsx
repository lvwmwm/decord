// Module ID: 11674
// Function ID: 90554
// Name: useShowWelcomeModal
// Dependencies: []
// Exports: openWelcomeActionSheet, useShowWelcomeModal

// Module 11674 (useShowWelcomeModal)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const NO_WELCOME_SCREEN = arg1(dependencyMap[1]).NO_WELCOME_SCREEN;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: undefined };
const result = arg1(dependencyMap[11]).fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = function useShowWelcomeModal(guildId, channelId) {
  channelId = guildId;
  const importDefault = channelId;
  const dependencyMap = channelId(dependencyMap[4]).useLocation().welcomeModalChannelId;
  const React = importDefault(dependencyMap[5])(channelId, guildId);
  const obj = channelId(dependencyMap[4]);
  const items = [closure_7, closure_4, closure_6];
  const stateFromStoresObject = channelId(dependencyMap[6]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      const guild = guild.getGuild(arg0);
      const selectableChannelIds = selectableChannelIds.getSelectableChannelIds(arg0);
      const value = shouldFetchGuildId.get(arg0);
      const hasSeenResult = shouldFetchGuildId.hasSeen(arg0);
      let tmp11 = !hasSeenResult;
      const hasErrorResult = shouldFetchGuildId.hasError();
      if (tmp11) {
        tmp11 = welcomeModalChannelId === arg1;
      }
      const obj = {};
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = null != value;
      }
      if (tmp14) {
        tmp14 = value !== closure_5;
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
      return closure_8;
    }
  });
  const shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  closure_4 = shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const effect = React.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const welcomeScreen = arg0(welcomeModalChannelId[7]).fetchWelcomeScreen(shouldFetchGuildId);
      const obj = arg0(welcomeModalChannelId[7]);
    }
  }, items1);
  return stateFromStoresObject.welcomeScreenModalVisible;
};
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = importDefault(dependencyMap[8]);
  obj.openLazy(arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};
