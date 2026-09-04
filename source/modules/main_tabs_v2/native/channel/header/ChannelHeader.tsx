// Module ID: 13193
// Function ID: 13194
// Name: ChannelHeader
// Dependencies: [19, 1386, 673, 1393, 21, 1234, 4343, 11398, 1228, 4336, 644, 4739, 13194, 13195, 13196, 13203, 1233, 13205, 2]
// Exports: default, navigateToChannelDetails

// Module 13193 (ChannelHeader)
import noopAll from "noop" /* 19 */;
import set from "set" /* 1234 */;
import _modDef13194 from "module_13194" /* 13194 */;
import _modDef13195 from "module_13195" /* 13195 */;
import GroupDmMemberCountDefault from "GroupDmMemberCount" /* 13196 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import { ComponentActions } from "ME" /* 673 */;
import { StaticChannelRoute } from "set" /* 1393 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

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
  let obj = channelId(644);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getChannel(channelId));
  const isChannelContentGated = channelId(4739).useIsChannelContentGated(stateFromStores);
  let tmp4 = !isChannelContentGated;
  if (!isChannelContentGated) {
    tmp4 = pressable;
  }
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp8Result = jsx(_modDef13194, {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(_modDef13195, {});
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      obj = { channelId: null, pressable: null, screenIndex: null };
      obj[0] = channelId;
      obj[1] = tmp4;
      obj[2] = screenIndex;
      tmp8Result = jsx(GroupDmMemberCountDefault, { channelId: null, pressable: null, screenIndex: null });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        obj = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null };
        obj[0] = channelId;
        let guild_id;
        let tmp9Result = tmp9(13203);
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        obj[1] = guild_id;
        obj[2] = tmp4;
        obj[3] = flag;
        obj[4] = isNavigationScreen;
        obj[5] = screenIndex;
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1233).intl;
          stringResult = intl.string(tmp(1233).t["L9fR+P"]);
        }
        obj[6] = stringResult;
        tmp8Result = tmp8(tmp9Result, obj);
      } else {
        obj1 = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null };
        obj1[0] = channelId;
        let guild_id1;
        tmp9Result = tmp9(13205);
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        obj1[1] = guild_id1;
        obj1[2] = tmp4;
        obj1[3] = flag;
        obj1[4] = isNavigationScreen;
        obj1[5] = screenIndex;
        obj1[6] = flag2;
        tmp8Result = tmp8(tmp9Result, obj1);
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, arg2) {
  let obj = set;
  if (obj.isIOS()) {
    let tmpResult = tmp(4343);
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  tmpResult = tmp(11398);
  if (tmpResult.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = tmp(1228).ComponentDispatch;
    obj = { source: null, channelId: null, screenIndex: null };
    obj[0] = arg2;
    obj[1] = channelId;
    obj[2] = screenIndex;
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj);
  } else {
    const rootNavigationRef = tmp(4336).getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      obj = { channelId: null, source: null };
      obj[0] = channelId;
      obj[1] = arg2;
      rootNavigationRef.navigate("sidebar", obj);
    }
    const tmpResult1 = tmp(4336);
  }
};
