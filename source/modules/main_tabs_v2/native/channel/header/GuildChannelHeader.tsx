// Module ID: 10156
// Function ID: 78531
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 10157, 4808, 1352, 5658, 1348, 4051, 1838, 3767, 1849, 653, 1345, 33, 3834, 689, 566, 10151, 5511, 9384, 1212, 4320, 10149, 5802, 1334, 1920, 4593, 8608, 1324, 9584, 10143, 2]

// Module 10156 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "ChannelHeader";
import { View } from "getThreadChannelIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";

let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function GuildChannelMemberCount(channel) {
  let online;
  let total;
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const token = channel(3834).useToken(importDefault(689).modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  let obj = channel(3834);
  const items = [closure_9, _isNativeReflectConstruct];
  const stateFromStoresObject = channel(566).useStateFromStoresObject(items, () => {
    let iter3;
    const tmp = outer1_22(outer1_9.getProps(channel.guild_id, channel.id).groups);
    const iter = tmp();
    let flag = false;
    let iter2 = iter;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    let flag3 = false;
    let flag4 = false;
    let num3 = 0;
    let num4 = 0;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = 0 !== value.count;
        if (tmp2) {
          let tmp3 = outer1_17;
          tmp2 = value.id !== outer1_17.UNKNOWN;
        }
        let tmp4 = flag2;
        let tmp5 = num;
        let tmp6 = num2;
        if (tmp2) {
          let tmp8 = outer1_17;
          let flag5 = true;
          let sum1 = num2;
          let sum = num + value.count;
          if (value.id !== outer1_17.OFFLINE) {
            sum1 = num2 + value.count;
            flag5 = flag2;
          }
          tmp4 = flag5;
          tmp6 = sum1;
          flag = true;
          tmp5 = sum;
        }
        iter3 = tmp();
        flag2 = tmp4;
        num = tmp5;
        num2 = tmp6;
        iter2 = iter3;
        flag3 = flag;
        flag4 = tmp4;
        num3 = tmp5;
        num4 = tmp6;
      } while (!iter3.done);
    }
    if (flag3) {
      const obj = {};
      let tmp13 = null;
      if (flag4) {
        tmp13 = num3;
      }
      obj.total = tmp13;
      obj.online = num4;
      let memberCount = obj;
    } else {
      memberCount = outer1_6.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    const count = outer1_6.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    const obj3 = channel(10151);
    return obj3.renderMemberCountText(online, total, flag, channel(5511).ICON_SIZE[token]);
  }
}
function computeVisibleChannelName(channel) {
  let guildId;
  let isConnected;
  let showCreateThread;
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t["4WNcpu"]);
  } else if (null == channel) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    let ai6Lbr = require(1212) /* getSystemLocale */.t;
    if (isConnected) {
      ai6Lbr = ai6Lbr.ai6Lbr;
      let stringResult1 = string(ai6Lbr);
    } else {
      stringResult1 = string(ai6Lbr.ZTNur7);
    }
  } else {
    stringResult = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_14, closure_13);
    const obj2 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  }
  return stringResult;
}
function ChannelLinkedLobbyCoachmark(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const items = [guild(1334).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = callback(guild(5802).useSelectedDismissibleContent(items, undefined, true), 2);
  const dependencyMap = tmp2;
  const tmp3 = tmp[0] === guild(1334).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  callback = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    const intl = guild(tmp2[21]).intl;
    obj.title = intl.string(guild(tmp2[21]).t.YIVr4B);
    const intl2 = guild(tmp2[21]).intl;
    obj = { helpdeskArticle: channel(tmp2[26]).getArticleURL(outer1_16.LINKED_LOBBIES) };
    obj.description = intl2.format(guild(tmp2[21]).t.w8VWRT, obj);
    let linkedLobby;
    if (null != channel) {
      linkedLobby = channel.linkedLobby;
    }
    obj.visible = null != linkedLobby && _slicedToArray;
    obj.position = "bottom";
    obj.offsetY = 15;
    obj.onDismiss = function onDismiss() {
      return outer1_2(outer2_18.USER_DISMISS);
    };
    let channelIconWithGuild;
    if (null != channel) {
      channelIconWithGuild = guild(tmp2[27]).getChannelIconWithGuild(channel, guild);
      const obj4 = guild(tmp2[27]);
    }
    obj.imgSource = channelIconWithGuild;
    return obj;
  }, items1);
  let obj = guild(5802);
  const coachmark = guild(8608).useCoachmark(guild.iconRef, memo);
  return null;
}
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = ME);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = jsxProd);
const memoResult = importAllResult.memo(function GuildChannelHeader(channelId) {
  let hasSubtitle;
  let node;
  let pressable;
  let showCreateThread;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  let tmp = screenIndex(guildId[29])("GuildChannelHeader");
  const ref = stateFromStores.useRef(null);
  let obj = channelId(guildId[17]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channelId));
  let obj1 = channelId(guildId[17]);
  let items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.isConnected());
  let closure_5 = screenIndex(guildId[30])(channelId);
  let obj2 = channelId(guildId[17]);
  let items2 = [closure_10];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      if (!showCreateThread) {
        if (null != stateFromStores) {
          if (null != stateFromStores.parent_id) {
            if (outer1_8.has(stateFromStores.type)) {
              let channel = outer1_10.getChannel(stateFromStores.parent_id);
            }
          }
        }
      }
      return channel;
    }
    let parentChannelId;
    if (null != parentChannelId) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    channel = outer1_10.getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  let obj3 = channelId(guildId[17]);
  let items3 = [_createForOfIteratorHelperLoose];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => outer1_12.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      let obj4 = channelId(guildId[18]);
      renderChannelIconResult = obj4.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  obj = { channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !channelId.isGuildMemberCountVisible, showCreateThread };
  let tmp10 = null;
  if (tmp) {
    tmp10 = renderChannelIconResult;
  }
  obj.icon = tmp10;
  const items4 = [channelId, screenIndex];
  ({ node, hasSubtitle } = (function useChannelName(showCreateThread) {
    let channel;
    let disableArrow;
    let disableGuildMemberCount;
    let guildId;
    let icon;
    let parentChannel;
    ({ channel, parentChannel, guildId } = showCreateThread);
    showCreateThread = showCreateThread.showCreateThread;
    ({ disableArrow, disableGuildMemberCount, icon } = showCreateThread);
    let obj = channelId(guildId[17]);
    const items = [outer1_7];
    obj = { channel, guildId, showCreateThread, isConnected: obj.useStateFromStores(items, () => outer2_7.isConnected()) };
    const tmp = outer1_25(obj);
    let obj2 = channelId(guildId[20]);
    let tmp2 = !obj2.shouldNSFWGateGuild(guildId);
    if (tmp2) {
      let tmp3 = showCreateThread;
      if (!showCreateThread) {
        let isThreadResult;
        if (null != channel) {
          isThreadResult = channel.isThread();
        }
        tmp3 = isThreadResult;
      }
      tmp2 = tmp3;
    }
    const intl = channelId(guildId[21]).intl;
    const t = channelId(guildId[21]).t;
    if (tmp2) {
      if (null != parentChannel) {
        let obj3 = channelId(guildId[18]);
        const result = obj3.renderParentChannelSubTitle(parentChannel);
      }
    }
    const formatToPlainStringResult = intl.formatToPlainString(tmp2 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp });
    const items1 = [outer1_11];
    const stateFromStores = channelId(guildId[17]).useStateFromStores(items1, () => outer2_11.getMemberCount(guildId));
    let num2 = 0;
    if (null != stateFromStores) {
      num2 = stateFromStores;
    }
    let tmp12 = !disableGuildMemberCount;
    if (tmp12) {
      tmp12 = num2 < 500;
    }
    if (tmp12) {
      tmp12 = null != channel;
    }
    if (tmp12) {
      tmp12 = !channel.isThread();
    }
    if (tmp12) {
      const items2 = [, ];
      ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = outer1_15);
      tmp12 = !items2.includes(channel.type);
    }
    if (tmp12) {
      tmp12 = !showCreateThread;
    }
    const obj5 = channelId(guildId[17]);
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let isForumLikeChannelResult = null != channel;
    const shouldChannelShowLoadingIndicator = channelId(guildId[23]).useShouldChannelShowLoadingIndicator(id);
    if (isForumLikeChannelResult) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    let tmp17 = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
    if (tmp17) {
      let tmp18Result = outer1_19(channelId(guildId[23]).ChannelHeaderLoadingIndicator, {});
    } else {
      obj = {};
      let tmp20 = tmp12;
      if (tmp12) {
        const obj1 = { channel, withSeparator: null != result };
        tmp20 = outer1_19(outer1_24, obj1);
      }
      const items3 = [tmp20, null != parentChannel && result];
      obj.children = items3;
      tmp18Result = outer1_21(outer1_20, obj);
      const tmp18 = outer1_21;
      const tmp19 = outer1_20;
    }
    obj2 = {};
    const obj6 = channelId(guildId[23]);
    obj3 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp18Result, disableArrow, guildId, icon };
    obj2.node = channelId(guildId[18]).renderChannelTitle(tmp, obj3);
    if (!tmp17) {
      tmp17 = tmp12;
    }
    if (!tmp17) {
      tmp17 = null != result;
    }
    obj2.hasSubtitle = tmp17;
    return obj2;
  })(obj));
  const callback = stateFromStores.useCallback(() => {
    const result = channelId(guildId[31]).navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
  }, items4);
  obj = {};
  if (tmp) {
    let tmp22 = null;
    if (null != stateFromStores3) {
      let linkedLobby;
      if (null != stateFromStores) {
        linkedLobby = stateFromStores.linkedLobby;
      }
      tmp22 = null;
      if (null != linkedLobby) {
        obj1 = { ref };
        obj2 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
        obj1.children = callback2(ChannelLinkedLobbyCoachmark, obj2);
        tmp22 = callback2(closure_5, obj1);
      }
    }
    let tmp15Result = tmp22;
  } else {
    obj3 = { ref };
    obj4 = { marginRight: 8 };
    obj3.style = obj4;
    const items5 = [renderChannelIconResult, ];
    let tmp17 = null;
    if (null != stateFromStores3) {
      let linkedLobby1;
      if (null != stateFromStores) {
        linkedLobby1 = stateFromStores.linkedLobby;
      }
      tmp17 = null;
      if (null != linkedLobby1) {
        let obj5 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
        tmp17 = callback2(ChannelLinkedLobbyCoachmark, obj5);
      }
    }
    items5[1] = tmp17;
    obj3.children = items5;
    tmp15Result = closure_21(closure_5, obj3);
    const tmp15 = closure_21;
    const tmp16 = closure_5;
  }
  const items6 = [tmp15Result, node];
  obj.children = items6;
  const tmp13Result = closure_21(closure_20, obj);
  if (null != stateFromStores) {
    let obj6 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    let intl = channelId(guildId[21]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + computeVisibleChannelName(obj6) + ", " + intl.string(channelId(guildId[21]).t.x87QCk);
    const tmp30 = computeVisibleChannelName(obj6);
  }
  if (pressable) {
    let num4 = 24;
    if (hasSubtitle) {
      num4 = 44;
    }
    const obj7 = {};
    const obj15 = channelId(guildId[18]);
    obj7.children = obj15.renderTitleWrapper(tmp13Result, callback, combined, num4);
    return callback2(closure_20, obj7);
  } else {
    return tmp13Result;
  }
  const tmp11 = (function useChannelName(showCreateThread) {
    let channel;
    let disableArrow;
    let disableGuildMemberCount;
    let guildId;
    let icon;
    let parentChannel;
    ({ channel, parentChannel, guildId } = showCreateThread);
    showCreateThread = showCreateThread.showCreateThread;
    ({ disableArrow, disableGuildMemberCount, icon } = showCreateThread);
    let obj = channelId(guildId[17]);
    const items = [outer1_7];
    obj = { channel, guildId, showCreateThread, isConnected: obj.useStateFromStores(items, () => outer2_7.isConnected()) };
    const tmp = outer1_25(obj);
    let obj2 = channelId(guildId[20]);
    let tmp2 = !obj2.shouldNSFWGateGuild(guildId);
    if (tmp2) {
      let tmp3 = showCreateThread;
      if (!showCreateThread) {
        let isThreadResult;
        if (null != channel) {
          isThreadResult = channel.isThread();
        }
        tmp3 = isThreadResult;
      }
      tmp2 = tmp3;
    }
    const intl = channelId(guildId[21]).intl;
    const t = channelId(guildId[21]).t;
    if (tmp2) {
      if (null != parentChannel) {
        let obj3 = channelId(guildId[18]);
        const result = obj3.renderParentChannelSubTitle(parentChannel);
      }
    }
    const formatToPlainStringResult = intl.formatToPlainString(tmp2 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp });
    const items1 = [outer1_11];
    const stateFromStores = channelId(guildId[17]).useStateFromStores(items1, () => outer2_11.getMemberCount(guildId));
    let num2 = 0;
    if (null != stateFromStores) {
      num2 = stateFromStores;
    }
    let tmp12 = !disableGuildMemberCount;
    if (tmp12) {
      tmp12 = num2 < 500;
    }
    if (tmp12) {
      tmp12 = null != channel;
    }
    if (tmp12) {
      tmp12 = !channel.isThread();
    }
    if (tmp12) {
      const items2 = [, ];
      ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = outer1_15);
      tmp12 = !items2.includes(channel.type);
    }
    if (tmp12) {
      tmp12 = !showCreateThread;
    }
    const obj5 = channelId(guildId[17]);
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let isForumLikeChannelResult = null != channel;
    const shouldChannelShowLoadingIndicator = channelId(guildId[23]).useShouldChannelShowLoadingIndicator(id);
    if (isForumLikeChannelResult) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    let tmp17 = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
    if (tmp17) {
      let tmp18Result = outer1_19(channelId(guildId[23]).ChannelHeaderLoadingIndicator, {});
    } else {
      obj = {};
      let tmp20 = tmp12;
      if (tmp12) {
        const obj1 = { channel, withSeparator: null != result };
        tmp20 = outer1_19(outer1_24, obj1);
      }
      const items3 = [tmp20, null != parentChannel && result];
      obj.children = items3;
      tmp18Result = outer1_21(outer1_20, obj);
      const tmp18 = outer1_21;
      const tmp19 = outer1_20;
    }
    obj2 = {};
    const obj6 = channelId(guildId[23]);
    obj3 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp18Result, disableArrow, guildId, icon };
    obj2.node = channelId(guildId[18]).renderChannelTitle(tmp, obj3);
    if (!tmp17) {
      tmp17 = tmp12;
    }
    if (!tmp17) {
      tmp17 = null != result;
    }
    obj2.hasSubtitle = tmp17;
    return obj2;
  })(obj);
  const tmp13 = closure_21;
  const tmp14 = closure_20;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;
