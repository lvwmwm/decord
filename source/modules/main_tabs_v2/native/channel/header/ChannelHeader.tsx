// Module ID: 10096
// Function ID: 78189
// Name: ChannelHeader
// Dependencies: []
// Exports: default, navigateToChannelDetails

// Module 10096 (ChannelHeader)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ComponentActions = arg1(dependencyMap[2]).ComponentActions;
const StaticChannelRoute = arg1(dependencyMap[3]).StaticChannelRoute;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default function ChannelHeader(channelId) {
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ screenIndex, isNavigationScreen, pressable } = channelId);
  if (pressable === undefined) {
    pressable = true;
  }
  let flag = channelId.isGuildMemberCountVisible;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channelId.showCreateThread;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = arg1(dependencyMap[10]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp = !arg1(dependencyMap[11]).useIsChannelContentGated(stateFromStores) && pressable;
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp2Result = jsx(importDefault(dependencyMap[12]), {});
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    tmp2Result = jsx(importDefault(dependencyMap[13]), {});
  } else {
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        obj = { channelId, pressable: tmp, screenIndex };
        tmp2Result = jsx(importDefault(dependencyMap[14]), obj);
      }
    }
    if (null != stateFromStores) {
      if (stateFromStores.isForumLikeChannel()) {
        obj = { channelId };
        let guild_id;
        if (null != stateFromStores) {
          guild_id = stateFromStores.guild_id;
        }
        obj.guildId = guild_id;
        obj.pressable = tmp;
        obj.isGuildMemberCountVisible = flag;
        obj.isNavigationScreen = isNavigationScreen;
        obj.screenIndex = screenIndex;
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = arg1(dependencyMap[16]).intl;
          stringResult = intl.string(arg1(dependencyMap[16]).t.L9fR+P);
        }
        obj.searchPlaceholder = stringResult;
        tmp2Result = jsx(importDefault(dependencyMap[15]), obj);
        const tmp11 = importDefault(dependencyMap[15]);
        const tmp8 = jsx;
      }
    }
    const obj1 = { channelId };
    let guild_id1;
    if (null != stateFromStores) {
      guild_id1 = stateFromStores.guild_id;
    }
    obj1.guildId = guild_id1;
    obj1.pressable = tmp;
    obj1.isGuildMemberCountVisible = flag;
    obj1.isNavigationScreen = isNavigationScreen;
    obj1.screenIndex = screenIndex;
    obj1.showCreateThread = flag2;
    tmp2Result = jsx(importDefault(dependencyMap[17]), obj1);
    const tmp2 = jsx;
    const tmp5 = importDefault(dependencyMap[17]);
  }
  return tmp2Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  let obj = screenIndex(dependencyMap[5]);
  if (obj.isIOS()) {
    const chatInputRef = screenIndex(dependencyMap[6]).getChatInputRef(channelId, screenIndex);
    if (null != chatInputRef) {
      chatInputRef.blur();
    }
    const obj2 = screenIndex(dependencyMap[6]);
  }
  if (obj4.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = tmp5(tmp6[8]).ComponentDispatch;
    obj = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj);
  } else {
    const rootNavigationRef = tmp5(tmp6[9]).getRootNavigationRef();
    const tmp5Result = tmp5(tmp6[9]);
    if (tmp8) {
      obj = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj);
    }
    const tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
  }
};
