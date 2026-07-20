// Module ID: 10109
// Function ID: 78255
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 10109 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  const items = [closure_9, closure_6];
  const stateFromStoresObject = arg1(dependencyMap[15]).useStateFromStoresObject(items, () => {
    let iter3;
    const tmp = callback(props.getProps(channel.guild_id, channel.id).groups);
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
          let tmp3 = closure_17;
          tmp2 = value.id !== closure_17.UNKNOWN;
        }
        let tmp4 = flag2;
        let tmp5 = num;
        let tmp6 = num2;
        if (tmp2) {
          let tmp8 = closure_17;
          let flag5 = true;
          let sum1 = num2;
          let sum = num + value.count;
          if (value.id !== closure_17.OFFLINE) {
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
      memberCount = closure_6.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    const count = closure_6.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    return arg1(dependencyMap[16]).renderMemberCountText(online, total, flag);
  }
}
function computeVisibleChannelName(channel) {
  let guildId;
  let isConnected;
  let showCreateThread;
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = arg1(dependencyMap[18]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[18]).t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = arg1(dependencyMap[18]).intl;
    stringResult = intl2.string(arg1(dependencyMap[18]).t.4WNcpu);
  } else if (null == channel) {
    const intl = arg1(dependencyMap[18]).intl;
    const string = intl.string;
    let ai6Lbr = arg1(dependencyMap[18]).t;
    if (isConnected) {
      ai6Lbr = ai6Lbr.ai6Lbr;
      let stringResult1 = string(ai6Lbr);
    } else {
      stringResult1 = string(ai6Lbr.ZTNur7);
    }
  } else {
    stringResult = arg1(dependencyMap[19]).computeChannelName(channel, closure_14, closure_13);
    const obj2 = arg1(dependencyMap[19]);
  }
  return stringResult;
}
function ChannelLinkedLobbyCoachmark(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  const items = [arg1(dependencyMap[22]).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp = callback(arg1(dependencyMap[21]).useSelectedDismissibleContent(items, undefined, true), 2);
  const dependencyMap = tmp2;
  const tmp3 = tmp[0] === arg1(dependencyMap[22]).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  const callback = tmp3;
  const items1 = [channel, guild, tmp[1], tmp3];
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    const intl = guild(tmp2[18]).intl;
    obj.title = intl.string(guild(tmp2[18]).t.YIVr4B);
    const intl2 = guild(tmp2[18]).intl;
    obj = { helpdeskArticle: channel(tmp2[23]).getArticleURL(constants.LINKED_LOBBIES) };
    obj.description = intl2.format(guild(tmp2[18]).t.w8VWRT, obj);
    let linkedLobby;
    if (null != channel) {
      linkedLobby = channel.linkedLobby;
    }
    obj.visible = null != linkedLobby && tmp3;
    obj.position = "bottom";
    obj.offsetY = 15;
    obj.onDismiss = function onDismiss() {
      return callback(constants.USER_DISMISS);
    };
    let channelIconWithGuild;
    if (null != channel) {
      channelIconWithGuild = guild(tmp2[24]).getChannelIconWithGuild(channel, guild);
      const obj4 = guild(tmp2[24]);
    }
    obj.imgSource = channelIconWithGuild;
    return obj;
  }, items1);
  const obj = arg1(dependencyMap[21]);
  const coachmark = arg1(dependencyMap[25]).useCoachmark(guild.iconRef, memo);
  return null;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const THREAD_CHANNEL_TYPES = arg1(dependencyMap[5]).THREAD_CHANNEL_TYPES;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = arg1(dependencyMap[12]));
const ContentDismissActionType = arg1(dependencyMap[13]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[12]);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = arg1(dependencyMap[14]));
const tmp3 = arg1(dependencyMap[14]);
const memoResult = importAllResult.memo(function GuildChannelHeader(channelId) {
  let hasSubtitle;
  let node;
  let pressable;
  let showCreateThread;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  const importDefault = screenIndex;
  const guildId = channelId.guildId;
  const dependencyMap = guildId;
  ({ pressable, showCreateThread } = channelId);
  let closure_3 = showCreateThread;
  const tmp = importDefault(dependencyMap[26])("GuildChannelHeader");
  const ref = importAllResult.useRef(null);
  let obj = arg1(dependencyMap[15]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => store.getChannel(channelId));
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => connected.isConnected());
  let closure_5 = importDefault(dependencyMap[27])(channelId);
  let obj2 = arg1(dependencyMap[15]);
  const items2 = [closure_10];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      if (!showCreateThread) {
        if (null != stateFromStores) {
          if (null != stateFromStores.parent_id) {
            if (set.has(stateFromStores.type)) {
              let channel = store.getChannel(stateFromStores.parent_id);
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
    channel = store.getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  let obj3 = arg1(dependencyMap[15]);
  const items3 = [closure_12];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => guild.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      let obj4 = arg1(dependencyMap[16]);
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
  ({ node, hasSubtitle } = function useChannelName(showCreateThread) {
    let channel;
    let disableArrow;
    let disableGuildMemberCount;
    let guildId;
    let icon;
    let parentChannel;
    ({ channel, parentChannel, guildId } = showCreateThread);
    const channelId = guildId;
    showCreateThread = showCreateThread.showCreateThread;
    ({ disableArrow, disableGuildMemberCount, icon } = showCreateThread);
    let obj = channelId(guildId[15]);
    const items = [closure_7];
    obj = { channel, guildId, showCreateThread, isConnected: obj.useStateFromStores(items, () => connected.isConnected()) };
    const tmp = callback2(obj);
    let obj2 = channelId(guildId[17]);
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
    const intl = channelId(guildId[18]).intl;
    const t = channelId(guildId[18]).t;
    if (tmp2) {
      if (null != parentChannel) {
        let obj3 = channelId(guildId[16]);
        const result = obj3.renderParentChannelSubTitle(parentChannel);
      }
    }
    const formatToPlainStringResult = intl.formatToPlainString(tmp2 ? t.OkzL+Q : t.UbNmGc, { channelName: tmp });
    const items1 = [closure_11];
    const stateFromStores = channelId(guildId[15]).useStateFromStores(items1, () => memberCount.getMemberCount(guildId));
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
      ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
      tmp12 = !items2.includes(channel.type);
    }
    if (tmp12) {
      tmp12 = !showCreateThread;
    }
    const obj5 = channelId(guildId[15]);
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let isForumLikeChannelResult = null != channel;
    const shouldChannelShowLoadingIndicator = channelId(guildId[20]).useShouldChannelShowLoadingIndicator(id);
    if (isForumLikeChannelResult) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    let tmp17 = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
    if (tmp17) {
      let tmp18Result = callback(channelId(guildId[20]).ChannelHeaderLoadingIndicator, {});
    } else {
      obj = {};
      let tmp20 = tmp12;
      if (tmp12) {
        const obj1 = { channel, withSeparator: null != result };
        tmp20 = callback(closure_24, obj1);
      }
      const items3 = [tmp20, null != parentChannel && result];
      obj.children = items3;
      tmp18Result = closure_21(closure_20, obj);
      const tmp18 = closure_21;
      const tmp19 = closure_20;
    }
    obj2 = {};
    const obj6 = channelId(guildId[20]);
    obj3 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp18Result, disableArrow, guildId, icon };
    obj2.node = channelId(guildId[16]).renderChannelTitle(tmp, obj3);
    if (!tmp17) {
      tmp17 = tmp12;
    }
    if (!tmp17) {
      tmp17 = null != result;
    }
    obj2.hasSubtitle = tmp17;
    return obj2;
  }(obj));
  const callback = importAllResult.useCallback(() => {
    const result = channelId(guildId[28]).navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
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
        const obj5 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
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
    const obj6 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const intl = arg1(dependencyMap[18]).intl;
    const _HermesInternal = HermesInternal;
    const combined = "" + computeVisibleChannelName(obj6) + ", " + intl.string(arg1(dependencyMap[18]).t.x87QCk);
    const tmp30 = computeVisibleChannelName(obj6);
  }
  if (pressable) {
    let num4 = 24;
    if (hasSubtitle) {
      num4 = 44;
    }
    const obj7 = {};
    const obj15 = arg1(dependencyMap[16]);
    obj7.children = obj15.renderTitleWrapper(tmp13Result, callback, combined, num4);
    return callback2(closure_20, obj7);
  } else {
    return tmp13Result;
  }
  const tmp11 = function useChannelName(showCreateThread) {
    let channel;
    let disableArrow;
    let disableGuildMemberCount;
    let guildId;
    let icon;
    let parentChannel;
    ({ channel, parentChannel, guildId } = showCreateThread);
    const channelId = guildId;
    showCreateThread = showCreateThread.showCreateThread;
    ({ disableArrow, disableGuildMemberCount, icon } = showCreateThread);
    let obj = channelId(guildId[15]);
    const items = [closure_7];
    obj = { channel, guildId, showCreateThread, isConnected: obj.useStateFromStores(items, () => connected.isConnected()) };
    const tmp = callback2(obj);
    let obj2 = channelId(guildId[17]);
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
    const intl = channelId(guildId[18]).intl;
    const t = channelId(guildId[18]).t;
    if (tmp2) {
      if (null != parentChannel) {
        let obj3 = channelId(guildId[16]);
        const result = obj3.renderParentChannelSubTitle(parentChannel);
      }
    }
    const formatToPlainStringResult = intl.formatToPlainString(tmp2 ? t.OkzL+Q : t.UbNmGc, { channelName: tmp });
    const items1 = [closure_11];
    const stateFromStores = channelId(guildId[15]).useStateFromStores(items1, () => memberCount.getMemberCount(guildId));
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
      ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
      tmp12 = !items2.includes(channel.type);
    }
    if (tmp12) {
      tmp12 = !showCreateThread;
    }
    const obj5 = channelId(guildId[15]);
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let isForumLikeChannelResult = null != channel;
    const shouldChannelShowLoadingIndicator = channelId(guildId[20]).useShouldChannelShowLoadingIndicator(id);
    if (isForumLikeChannelResult) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    let tmp17 = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
    if (tmp17) {
      let tmp18Result = callback(channelId(guildId[20]).ChannelHeaderLoadingIndicator, {});
    } else {
      obj = {};
      let tmp20 = tmp12;
      if (tmp12) {
        const obj1 = { channel, withSeparator: null != result };
        tmp20 = callback(closure_24, obj1);
      }
      const items3 = [tmp20, null != parentChannel && result];
      obj.children = items3;
      tmp18Result = closure_21(closure_20, obj);
      const tmp18 = closure_21;
      const tmp19 = closure_20;
    }
    obj2 = {};
    const obj6 = channelId(guildId[20]);
    obj3 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp18Result, disableArrow, guildId, icon };
    obj2.node = channelId(guildId[16]).renderChannelTitle(tmp, obj3);
    if (!tmp17) {
      tmp17 = tmp12;
    }
    if (!tmp17) {
      tmp17 = null != result;
    }
    obj2.hasSubtitle = tmp17;
    return obj2;
  }(obj);
  const tmp13 = closure_21;
  const tmp14 = closure_20;
});
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;
