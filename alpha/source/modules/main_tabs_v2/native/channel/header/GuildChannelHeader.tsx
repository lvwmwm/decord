// Module ID: 14567
// Function ID: 14568
// Name: GuildChannelHeader
// Dependencies: [32, 19, 17, 14568, 6568, 4867, 7446, 4863, 5242, 4885, 4956, 1383, 1072, 4860, 21, 5596, 575, 504, 11337, 7096, 9972, 1113, 5652, 14563, 11319, 5624, 7569, 4847, 2061, 8603, 9954, 10205, 7420, 7419, 14569, 14558, 2]

// Module 14567 (GuildChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import useChannelName from "useChannelName" /* 5652 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9972 */;
import ChannelHeader from "ChannelHeader" /* 14558 */;
import openConjureAppChannelSheetDefault from "openConjureAppChannelSheet" /* 14569 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 14568 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7446 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
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
const utils_ChannelUtils = tmp(8603);
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
  let obj = channel(5596);
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
    const tmpResult = tmp(11337);
    let tmp6 = tmpResult;
    let tmp7 = online;
    let tmp8 = total;
    let tmp9 = flag;
    return tmpResult.renderMemberCountText(online, total, flag, tmp(7096).ICON_SIZE[token]);
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
    const intl3 = tmp(1113).intl;
    stringResult = intl3.string(tmp(1113).t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = tmp(1113).intl;
    stringResult = intl2.string(tmp(1113).t["4WNcpu"]);
  } else if (null == channel) {
    let stringResult1;
    const intl = tmp(1113).intl;
    const string = intl.string;
    const t = tmp(1113).t;
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
  let tmp = guild(7569);
  const useSelectedDismissibleContent = tmp.useSelectedDismissibleContent;
  const items = [guild(4847).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp2 = _slicedToArray(useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  const tmp3 = tmp2[1];
  dependencyMap = tmp3;
  const tmp4 = tmp2[0] === guild(4847).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
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
  let obj = guild(9954);
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
  let isGuildMemberCountVisible;
  let items9;
  let joined;
  let memberCount;
  let obj10;
  let pressable;
  let result;
  let showCreateThread;
  let tmp2Result26;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
  let stateFromStores;
  let isConjureChannelCandidate;
  let obj = stateFromStores;
  const ref = stateFromStores.useRef(null);
  let tmp2 = channelId;
  const items = [ChannelStore];
  const obj2 = channelId(guildId[17]);
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GatewayConnectionStore];
  const obj4 = channelId(guildId[17]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => GatewayConnectionStore.isConnected());
  let parentChannelId = screenIndex(guildId[31])(channelId);
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
      const tmp2Result14 = tmp2(guildId[18]);
      renderChannelIconResult = tmp2Result14.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp11 = type === constants.GUILD_APP && !showCreateThread;
  if (tmp11) {
    tmp11 = "channel-secondary-view-chat" !== screenIndex;
  }
  let tmp13 = null;
  const useAppChannelApplication = tmp2(tmp3[32]).useAppChannelApplication;
  tmp2(guildId[32]);
  if (tmp11) {
    tmp13 = stateFromStores;
  }
  const appChannelApplication = useAppChannelApplication(tmp13);
  let type1;
  const useIsConjureChannelCandidate = tmp2(tmp3[33]).useIsConjureChannelCandidate;
  tmp2(guildId[33]);
  if (stateFromStores != null) {
    type1 = stateFromStores.type;
  }
  let tmp17 = null;
  if (type1 === constants.GUILD_APP) {
    tmp17 = null;
    if (!showCreateThread) {
      tmp17 = stateFromStores;
    }
  }
  isConjureChannelCandidate = useIsConjureChannelCandidate(tmp17, "GuildChannelHeader");
  let renderAppSubTitleResult;
  if (tmp11) {
    const tmp2Result17 = tmp2(guildId[18]);
    renderAppSubTitleResult = tmp2Result17.renderAppSubTitle(appChannelApplication, null != stateFromStores.application_id);
  }
  const items4 = [tmp4];
  const tmp20 = !pressable;
  const tmp21 = !isGuildMemberCountVisible;
  const tmp2Result18 = tmp2(guildId[17]);
  const obj3 = { channel: stateFromStores, guildId, showCreateThread, isConnected: tmp2Result18.useStateFromStores(items4, () => GatewayConnectionStore.isConnected()) };
  const tmp23 = computeVisibleChannelName(obj3);
  const tmp2Result19 = tmp2(guildId[20]);
  let tmp25 = !tmp2Result19.shouldNSFWGateGuild(guildId);
  tmp2Result19.shouldNSFWGateGuild(guildId);
  const tmp22 = computeVisibleChannelName;
  if (tmp25) {
    let tmp26 = showCreateThread;
    if (!tmp26) {
      let isThreadResult;
      if (stateFromStores != null) {
        isThreadResult = stateFromStores.isThread();
      }
      tmp26 = isThreadResult;
    }
    tmp25 = tmp26;
  }
  const intl = tmp2(tmp3[21]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(tmp3[21]).t;
  const formatToPlainStringResult = formatToPlainString(tmp25 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp23 });
  if (tmp25) {
    if (null != stateFromStores2) {
      const tmp2Result20 = tmp2(guildId[18]);
      result = tmp2Result20.renderParentChannelSubTitle(stateFromStores2);
    }
  }
  const items5 = [GuildMemberCountStore];
  const tmp2Result21 = tmp2(guildId[17]);
  let num = tmp2Result21.useStateFromStores(items5, () => memberCount.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  let id;
  const useShouldChannelShowLoadingIndicator = tmp2(tmp3[23]).useShouldChannelShowLoadingIndicator;
  tmp2(guildId[23]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = useShouldChannelShowLoadingIndicator(id);
  if (stateFromStores != null) {
    isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
  }
  let tmp36 = null;
  const useIsPinotChannelLabelVisible = tmp2(tmp3[24]).useIsPinotChannelLabelVisible;
  tmp2(guildId[24]);
  if (!showCreateThread) {
    tmp36 = stateFromStores;
  }
  const tmp37 = useIsPinotChannelLabelVisible(tmp36, "mobile_channel_header_label") && null == renderAppSubTitleResult && !(!isForumLikeChannelResult && shouldChannelShowLoadingIndicator);
  let tmp38 = !tmp21;
  if (isGuildMemberCountVisible) {
    tmp38 = !tmp37;
  }
  if (tmp38) {
    tmp38 = num < 500;
  }
  if (tmp38) {
    tmp38 = null != stateFromStores;
  }
  if (tmp38) {
    tmp38 = !stateFromStores.isThread();
  }
  if (tmp38) {
    const items6 = [, ];
    ({ GUILD_DIRECTORY: arr7[0], GUILD_FORUM: arr7[1] } = constants);
    tmp38 = !items6.includes(stateFromStores.type);
  }
  if (tmp38) {
    tmp38 = !showCreateThread;
  }
  if (tmp38) {
    tmp38 = null == renderAppSubTitleResult;
  }
  let tmp39 = renderAppSubTitleResult;
  if (null == renderAppSubTitleResult) {
    let tmp40Result;
    if (!isForumLikeChannelResult && shouldChannelShowLoadingIndicator) {
      tmp40Result = closure_19(tmp2(tmp3[23]).ChannelHeaderLoadingIndicator, {});
    } else {
      let tmp42 = tmp38;
      const tmp40 = closure_21;
      const tmp41 = closure_20;
      if (tmp38) {
        const obj6 = { channel: stateFromStores, withSeparator: null != result };
        tmp42 = closure_19(GuildChannelMemberCount, obj6);
      }
      const items7 = [tmp42, null != stateFromStores2 && result, , ];
      let tmp45 = null;
      if (tmp37) {
        tmp45 = null;
        if (null != result) {
          tmp45 = closure_19(tmp2(tmp3[25]).Text, { variant: "text-sm/medium", color: "text-subtle", children: "\u2022" });
        }
      }
      items7[2] = tmp45;
      let tmp47 = null;
      if (tmp37) {
        tmp47 = null;
        if (null != stateFromStores) {
          const obj7 = { channel: stateFromStores };
          tmp47 = closure_19(tmp2(tmp3[24]).PinotChannelLabel, obj7);
        }
      }
      const obj8 = { children: items7 };
      items7[3] = tmp47;
      tmp40Result = tmp40(tmp41, obj8);
    }
    tmp39 = tmp40Result;
  }
  let tmp52 = null != renderAppSubTitleResult;
  const tmp2Result24 = tmp2(guildId[18]);
  const renderChannelTitleResult = tmp2Result24.renderChannelTitle(tmp23, { accessibleTitle: formatToPlainStringResult, subtitle: tmp39, disableArrow: tmp20, guildId, icon: renderChannelIconResult });
  if (!tmp52) {
    tmp52 = tmp34;
  }
  if (!tmp52) {
    tmp52 = tmp38;
  }
  if (!tmp52) {
    tmp52 = null != result;
  }
  if (!tmp52) {
    tmp52 = tmp37;
  }
  const items8 = [channelId, screenIndex, isConjureChannelCandidate];
  const callback = obj.useCallback(() => {
    const tmp = isConjureChannelCandidate;
    if (tmp) {
      openConjureAppChannelSheetDefault(channelId);
    } else {
      const obj = ChannelHeader;
      const result = obj.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
    }
  }, items8);
  let tmp56 = null;
  const tmp54 = closure_21;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp56 = null;
    if (null != linkedLobby) {
      const obj9 = { ref, children: closure_19(ChannelLinkedLobbyCoachmark, obj10) };
      obj10 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      tmp56 = closure_19(parentChannelId, obj9);
    }
  }
  const obj11 = { children: items9 };
  items9 = [tmp56, renderChannelTitleResult];
  const tmp54Result = tmp54(closure_20, obj11);
  let pinotChannelLabelText = null;
  if (tmp37) {
    const tmp2Result25 = tmp2(guildId[24]);
    pinotChannelLabelText = tmp2Result25.getPinotChannelLabelText();
  }
  if (null != stateFromStores) {
    const obj12 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const items10 = [tmp22(obj12), pinotChannelLabelText, ];
    const intl2 = tmp2(tmp3[21]).intl;
    const string = intl2.string;
    const t2 = tmp2(tmp3[21]).t;
    items10[2] = string(isConjureChannelCandidate ? t2.OBr7Cw : t2.x87QCk);
    const found = items10.filter((item) => null != item);
    joined = found.join(", ");
  }
  if (pressable) {
    let num3 = 24;
    if (tmp52) {
      num3 = 44;
    }
    const obj13 = { children: tmp2Result26.renderTitleWrapper(tmp54Result, callback, joined, num3) };
    tmp2Result26 = tmp2(guildId[18]);
    return closure_19(closure_20, obj13);
  } else {
    return tmp54Result;
  }
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;
