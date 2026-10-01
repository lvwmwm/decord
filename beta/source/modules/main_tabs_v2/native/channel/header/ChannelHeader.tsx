// Module ID: 12840
// Function ID: 12841
// Name: ChannelHeader
// Dependencies: [19, 2045, 1074, 2052, 21, 1364, 4701, 11004, 1110, 4693, 563, 5046, 12841, 12842, 12843, 12851, 1115, 12853, 2]
// Exports: default, navigateToChannelDetails

// Module 12840 (ChannelHeader)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11004 */;
import GuildRoleSubscriptionsChannelHeaderDefault from "GuildRoleSubscriptionsChannelHeader" /* 12841 */;
import HomeChannelHeaderDefault from "HomeChannelHeader" /* 12842 */;
import PrivateChannelHeaderDefault from "PrivateChannelHeader" /* 12843 */;
import ForumChannelHeaderDefault from "ForumChannelHeader" /* 12851 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 12853 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default function ChannelHeader(channelId) {
  let guild_id;
  let guild_id1;
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let stringResult;
  let tmp8Result;
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
  const items = [ChannelStore];
  const obj = channelId(563);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(5046);
  const isChannelContentGated = obj3.useIsChannelContentGated(stateFromStores);
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    tmp8Result = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(HomeChannelHeaderDefault, {});
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      tmp8Result = jsx(PrivateChannelHeaderDefault, { channelId, pressable: !isChannelContentGated && pressable, screenIndex });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        const obj4 = { channelId, guildId: guild_id, pressable: !isChannelContentGated && pressable, isGuildMemberCountVisible: flag, isNavigationScreen, screenIndex, searchPlaceholder: stringResult };
        guild_id = undefined;
        const tmp9Result = ForumChannelHeaderDefault;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        stringResult = undefined;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1115).intl;
          stringResult = intl.string(tmp(1115).t["L9fR+P"]);
        }
        tmp8Result = tmp8(tmp9Result, obj4);
      } else {
        const obj5 = { channelId, guildId: guild_id1, pressable: !isChannelContentGated && pressable, isGuildMemberCountVisible: flag, isNavigationScreen, screenIndex, showCreateThread: flag2 };
        guild_id1 = undefined;
        const tmp9Result2 = GuildChannelHeaderDefault;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        tmp8Result = tmp8(tmp9Result2, obj5);
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = ChatInputUtils;
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  const tmpResult3 = SwipeToMemberListUtils;
  if (tmpResult3.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = tmp(1110).ComponentDispatch;
    const obj2 = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj2);
  } else {
    const tmpResult4 = RootNavigationRef;
    const rootNavigationRef = tmpResult4.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      const obj3 = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj3);
    }
  }
};
