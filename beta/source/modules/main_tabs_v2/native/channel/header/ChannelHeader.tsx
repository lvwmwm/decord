// Module ID: 14840
// Function ID: 14841
// Name: ChannelHeader
// Dependencies: [19, 5019, 1072, 5026, 21, 1377, 5355, 11715, 1108, 5347, 563, 6821, 14841, 14842, 14843, 14848, 1113, 14849, 2]
// Exports: default, navigateToChannelDetails

// Module 14840 (ChannelHeader)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import RootNavigationRef from "RootNavigationRef" /* 5347 */;
import ChatInputUtils from "ChatInputUtils" /* 5355 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11715 */;
import GuildRoleSubscriptionsChannelHeaderDefault from "GuildRoleSubscriptionsChannelHeader" /* 14841 */;
import HomeChannelHeaderDefault from "HomeChannelHeader" /* 14842 */;
import PrivateChannelHeaderDefault from "PrivateChannelHeader" /* 14843 */;
import ForumChannelHeaderDefault from "ForumChannelHeader" /* 14848 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 14849 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
  const obj3 = channelId(6821);
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
          const intl = tmp(1113).intl;
          stringResult = intl.string(tmp(1113).t["L9fR+P"]);
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
export function navigateToChannelDetails(channelId, screenIndex, source) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = ChatInputUtils;
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  const tmpResult3 = SwipeToMemberListUtils;
  if (tmpResult3.isSwipeToMemberListEnabledForChannel(channelId)) {
    const ComponentDispatch = tmp(1108).ComponentDispatch;
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
}
