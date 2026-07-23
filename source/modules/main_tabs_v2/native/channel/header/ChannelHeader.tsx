// Module ID: 10111
// Function ID: 78271
// Name: ChannelHeader
// Dependencies: [31, 1348, 653, 1355, 33, 477, 3989, 10093, 1207, 3982, 624, 4345, 10112, 10114, 10116, 10122, 1212, 10124, 2]
// Exports: default, navigateToChannelDetails

// Module 10111 (ChannelHeader)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ComponentActions } from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default function ChannelHeader(channelId) {
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  channelId = channelId.channelId;
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
  let obj = channelId(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(channelId));
  const tmp = !channelId(4345).useIsChannelContentGated(stateFromStores) && pressable;
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp2Result = jsx(importDefault(10112), {});
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    tmp2Result = jsx(importDefault(10114), {});
  } else {
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        obj = { channelId, pressable: tmp, screenIndex };
        tmp2Result = jsx(importDefault(10116), { channelId, pressable: tmp, screenIndex });
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
          const intl = channelId(1212).intl;
          stringResult = intl.string(channelId(1212).t["L9fR+P"]);
        }
        obj.searchPlaceholder = stringResult;
        tmp2Result = jsx(importDefault(10122), { channelId });
        const tmp11 = importDefault(10122);
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
    tmp2Result = jsx(importDefault(10124), { channelId });
    const tmp2 = jsx;
    const tmp5 = importDefault(10124);
  }
  return tmp2Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  let obj = require(477) /* set */;
  if (obj.isIOS()) {
    const chatInputRef = require(3989) /* getHighestActiveScreenIndex */.getChatInputRef(channelId, screenIndex);
    if (null != chatInputRef) {
      chatInputRef.blur();
    }
    const obj2 = require(3989) /* getHighestActiveScreenIndex */;
  }
  if (obj4.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = tmp5(1207).ComponentDispatch;
    obj = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj);
  } else {
    const rootNavigationRef = tmp5(3982).getRootNavigationRef();
    const tmp5Result = tmp5(3982);
    if (tmp8) {
      obj = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj);
    }
    tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
  }
};
