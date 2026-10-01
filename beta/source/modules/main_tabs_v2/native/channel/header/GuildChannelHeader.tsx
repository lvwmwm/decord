// Module ID: 12853
// Function ID: 12854
// Name: GuildChannelHeader
// Dependencies: [32, 19, 17, 12854, 5589, 2049, 6697, 2045, 4754, 2067, 4479, 1372, 1074, 2042, 21, 4531, 576, 504, 12847, 6038, 9757, 1115, 4989, 12845, 6806, 2029, 2111, 5335, 10589, 9716, 12840, 2]

// Module 12853 (GuildChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import useChannelName from "useChannelName" /* 4989 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9757 */;
import ChannelHeader from "ChannelHeader" /* 12840 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 12854 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6697 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let tmp;
const utils_ChannelUtils = tmp(5335);
function GuildChannelMemberCount(channel) {
  let online;
  let total;
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(4531);
  const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  const items = [ChannelMemberStore, ChannelMemberCountStore];
  const obj2 = channel(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let memberCount;
    const groups = ChannelMemberStore.getProps(channel.guild_id, channel.id).groups;
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of groups) {
      let tmp = item10021;
      let tmp2 = 0 !== item10021.count;
      if (tmp2) {
        tmp2 = tmp.id !== constants.UNKNOWN;
      }
      if (tmp2) {
        flag = true;
        num = num + tmp.count;
        if (tmp.id === constants.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + tmp.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp14 = null;
      if (flag2) {
        tmp14 = num;
      }
      memberCount = { total: tmp14, online: num2 };
      const obj = { total: tmp14, online: num2 };
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = react.useEffect(() => {
    const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    if (null != online) {
      let num2 = 500;
    }
    const tmpResult = tmp(12847);
    let tmp6 = tmpResult;
    let tmp7 = online;
    let tmp8 = total;
    let tmp9 = flag;
    return tmpResult.renderMemberCountText(online, total, flag, tmp(6038).ICON_SIZE[token]);
  } else {
    let num = 500;
  }
}
function computeVisibleChannelName(channel) {
  let guildId;
  let isConnected;
  let showCreateThread;
  let stringResult;
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  const obj = age_gate_AgeGateUtils;
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = tmp(1115).intl;
    stringResult = intl3.string(tmp(1115).t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(tmp(1115).t["4WNcpu"]);
  } else if (null == channel) {
    let stringResult1;
    const intl = tmp(1115).intl;
    const string = intl.string;
    const t = tmp(1115).t;
    if (isConnected) {
      stringResult1 = string(t.ai6Lbr);
    } else {
      stringResult1 = string(t.ZTNur7);
    }
    stringResult = stringResult1;
  } else {
    const tmpResult = useChannelName;
    stringResult = tmpResult.computeChannelName(channel, UserStore, RelationshipStore);
  }
  return stringResult;
}
function ChannelLinkedLobbyCoachmark(guild) {
  let closure_2;
  let closure_3;
  guild = guild.guild;
  const channel = guild.channel;
  _slicedToArray = undefined;
  const iconRef = guild.iconRef;
  let tmp = guild(6806);
  const useSelectedDismissibleContent = tmp.useSelectedDismissibleContent;
  const items = [guild(2029).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp2 = _slicedToArray(useSelectedDismissibleContent(items, undefined, true), 2);
  const tmp3 = tmp2[1];
  dependencyMap = tmp3;
  const tmp4 = tmp2[0] === guild(2029).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  _slicedToArray = tmp4;
  const items1 = [channel, guild, tmp3, tmp4];
  const memo = react.useMemo(() => {
    let channelIconWithGuild;
    let format;
    let intl;
    let linkedLobby;
    let obj2;
    let obj3;
    let w8VWRT;
    const obj = {
      title: intl.string(intl4.t.YIVr4B),
      description: format(w8VWRT, obj2),
      visible: null != linkedLobby && closure_3,
      position: "bottom",
      offsetY: 15,
      onDismiss() {
        return closure_1_2(constants.USER_DISMISS);
      },
      imgSource: channelIconWithGuild
    };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    format = intl2.format;
    obj2 = { helpdeskArticle: obj3.getArticleURL(constants.LINKED_LOBBIES) };
    w8VWRT = intl4.t.w8VWRT;
    linkedLobby = undefined;
    obj3 = HelpdeskUtilsDefault;
    if (channel != null) {
      linkedLobby = tmp3.linkedLobby;
    }
    channelIconWithGuild = undefined;
    if (null != channel) {
      const tmpResult = utils_ChannelUtils;
      channelIconWithGuild = tmpResult.getChannelIconWithGuild(tmp3, guild);
    }
    return obj;
  }, items1);
  let obj = guild(10589);
  const coachmark = obj.useCoachmark(iconRef, memo);
  return null;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
const memoResult = react.memo(function GuildChannelHeader(channelId) {
  let combined;
  let isGuildMemberCountVisible;
  let items9;
  let memberCount;
  let obj9;
  let pressable;
  let result;
  let showCreateThread;
  let tmp26Result;
  let tmp2Result16;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
  let stateFromStores;
  let obj = stateFromStores;
  const ref = stateFromStores.useRef(null);
  let tmp2 = channelId;
  const items = [ChannelStore];
  const obj2 = channelId(guildId[17]);
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GatewayConnectionStore];
  const obj4 = channelId(guildId[17]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => GatewayConnectionStore.isConnected());
  let parentChannelId = screenIndex(guildId[29])(channelId);
  const items2 = [ChannelStore];
  const obj5 = channelId(guildId[17]);
  const stateFromStores2 = obj5.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let channel;
      const tmp2 = showCreateThread;
      if (!tmp2) {
        if (null != stateFromStores) {
          if (null != stateFromStores.parent_id) {
            if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
              channel = ChannelStore.getChannel(tmp.parent_id);
            }
          }
        }
      }
      return channel;
    }
    parentChannelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    channel = getChannel(parentChannelId);
  });
  const tmp4 = GatewayConnectionStore;
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  const items3 = [GuildStore];
  const tmp2Result = tmp2(guildId[17]);
  const stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      const tmp2Result9 = tmp2(guildId[18]);
      renderChannelIconResult = tmp2Result9.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  const items4 = [tmp4];
  const tmp10 = !isGuildMemberCountVisible;
  const tmp9 = !pressable;
  const tmp2Result10 = tmp2(guildId[17]);
  const obj3 = { channel: stateFromStores, guildId, showCreateThread, isConnected: tmp2Result10.useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) };
  const tmp12 = computeVisibleChannelName(obj3);
  const tmp2Result11 = tmp2(guildId[20]);
  let tmp14 = !tmp2Result11.shouldNSFWGateGuild(guildId);
  tmp2Result11.shouldNSFWGateGuild(guildId);
  const tmp11 = computeVisibleChannelName;
  if (tmp14) {
    let tmp15 = showCreateThread;
    if (!tmp15) {
      let isThreadResult;
      if (stateFromStores != null) {
        isThreadResult = stateFromStores.isThread();
      }
      tmp15 = isThreadResult;
    }
    tmp14 = tmp15;
  }
  const intl = tmp2(tmp3[21]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(tmp3[21]).t;
  const formatToPlainStringResult = formatToPlainString(tmp14 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp12 });
  if (tmp14) {
    if (null != stateFromStores2) {
      const tmp2Result12 = tmp2(guildId[18]);
      result = tmp2Result12.renderParentChannelSubTitle(stateFromStores2);
    }
  }
  const items5 = [GuildMemberCountStore];
  const tmp2Result13 = tmp2(guildId[17]);
  let num = tmp2Result13.useStateFromStores(items5, () => memberCount.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  let tmp19 = !tmp10;
  if (isGuildMemberCountVisible) {
    tmp19 = num < 500;
  }
  if (tmp19) {
    tmp19 = null != stateFromStores;
  }
  if (tmp19) {
    tmp19 = !stateFromStores.isThread();
  }
  if (tmp19) {
    const items6 = [, ];
    ({ GUILD_DIRECTORY: arr7[0], GUILD_FORUM: arr7[1] } = closure_15);
    tmp19 = !items6.includes(stateFromStores.type);
  }
  if (tmp19) {
    tmp19 = !showCreateThread;
  }
  let id;
  const useShouldChannelShowLoadingIndicator = tmp2(guildId[23]).useShouldChannelShowLoadingIndicator;
  tmp2(guildId[23]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = useShouldChannelShowLoadingIndicator(id);
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp25 = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
  if (tmp25) {
    tmp26Result = closure_19(tmp2(tmp3[23]).ChannelHeaderLoadingIndicator, {});
  } else {
    let tmp28 = tmp19;
    const tmp26 = closure_21;
    const tmp27 = closure_20;
    if (tmp19) {
      const obj6 = { channel: stateFromStores, withSeparator: null != result };
      tmp28 = closure_19(GuildChannelMemberCount, obj6);
    }
    const items7 = [tmp28, ];
    const obj7 = { children: items7 };
    const tmp31 = null != stateFromStores2 && result;
    items7[1] = tmp31;
    tmp26Result = tmp26(tmp27, obj7);
  }
  const tmp2Result15 = tmp2(guildId[18]);
  const renderChannelTitleResult = tmp2Result15.renderChannelTitle(tmp12, { accessibleTitle: formatToPlainStringResult, subtitle: tmp26Result, disableArrow: tmp9, guildId, icon: renderChannelIconResult });
  if (!tmp25) {
    tmp25 = tmp19;
  }
  if (!tmp25) {
    tmp25 = null != result;
  }
  const items8 = [channelId, screenIndex];
  const callback = obj.useCallback(() => {
    const obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
  }, items8);
  let tmp38 = null;
  const tmp36 = closure_21;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp38 = null;
    if (null != linkedLobby) {
      const obj8 = { ref, children: closure_19(ChannelLinkedLobbyCoachmark, obj9) };
      obj9 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      tmp38 = closure_19(parentChannelId, obj8);
    }
  }
  const obj10 = { children: items9 };
  items9 = [tmp38, renderChannelTitleResult];
  const tmp36Result = tmp36(closure_20, obj10);
  if (null != stateFromStores) {
    const obj11 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const tmp11Result = tmp11(obj11);
    const intl2 = tmp2(tmp3[21]).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + tmp11Result + ", " + intl2.string(tmp2(tmp3[21]).t.x87QCk);
  }
  if (pressable) {
    let num3 = 24;
    if (tmp25) {
      num3 = 44;
    }
    const obj12 = { children: tmp2Result16.renderTitleWrapper(tmp36Result, callback, combined, num3) };
    tmp2Result16 = tmp2(guildId[18]);
    return closure_19(closure_20, obj12);
  } else {
    return tmp36Result;
  }
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;
