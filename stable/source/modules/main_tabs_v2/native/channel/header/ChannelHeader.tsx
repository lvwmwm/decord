// Module ID: 13398
// Function ID: 13399
// Name: ChannelHeader
// Dependencies: [19, 1957, 1074, 1964, 21, 1363, 4502, 11603, 1109, 4495, 563, 4847, 13399, 13400, 13401, 13409, 1114, 13411, 2]
// Exports: default, navigateToChannelDetails

// Module 13398 (ChannelHeader)
import PlatformUtils from "PlatformUtils" /* 1363 */;
import GuildRoleSubscriptionsChannelHeaderDefault from "GuildRoleSubscriptionsChannelHeader" /* 13399 */;
import HomeChannelHeaderDefault from "HomeChannelHeader" /* 13400 */;
import PrivateChannelHeaderDefault from "PrivateChannelHeader" /* 13401 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default function ChannelHeader(channelId) {
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
  const stateFromStores = channelId(563).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(563);
  const isChannelContentGated = channelId(4847).useIsChannelContentGated(stateFromStores);
  let tmp4 = !isChannelContentGated;
  if (!isChannelContentGated) {
    tmp4 = pressable;
  }
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp8Result = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(HomeChannelHeaderDefault, {});
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      const obj2 = { channelId, pressable: tmp4, screenIndex };
      tmp8Result = jsx(PrivateChannelHeaderDefault, { channelId, pressable: tmp4, screenIndex });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        const obj4 = { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null };
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        obj4.guildId = guild_id;
        obj4.pressable = tmp4;
        obj4.isGuildMemberCountVisible = flag;
        obj4.isNavigationScreen = isNavigationScreen;
        obj4.screenIndex = screenIndex;
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1114).intl;
          stringResult = intl.string(tmp(1114).t["L9fR+P"]);
        }
        obj4.searchPlaceholder = stringResult;
        tmp8Result = tmp8(tmp9(13409), obj4);
        const tmp9Result = tmp9(13409);
      } else {
        const obj5 = { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null };
        let guild_id1;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        obj5.guildId = guild_id1;
        obj5.pressable = tmp4;
        obj5.isGuildMemberCountVisible = flag;
        obj5.isNavigationScreen = isNavigationScreen;
        obj5.screenIndex = screenIndex;
        obj5.showCreateThread = flag2;
        tmp8Result = tmp8(tmp9(13411), obj5);
        const tmp9Result2 = tmp9(13411);
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  if (obj.isIOS()) {
    const chatInputRef = tmp(4502).getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
    const tmpResult = tmp(4502);
  }
  obj = PlatformUtils;
  if (tmpResult3.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = tmp(1109).ComponentDispatch;
    const obj2 = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj2);
  } else {
    const rootNavigationRef = tmp(4495).getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      const obj3 = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj3);
    }
    const tmpResult4 = tmp(4495);
  }
};
