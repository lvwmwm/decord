// Module ID: 6874
// Function ID: 54346
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6874 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function createGuildState(guild_id) {
  let tmp = guild_id;
  if (null == guild_id) {
    tmp = NULL_STRING_GUILD_ID;
  }
  const obj = { channel_id: 215435264, sr: -2067333117, ks: -37355518, ao: -2091909119, ip: 1350172674, op: 1188495362, st: -1216675839, unreadByType: {}, mentionCounts: {} };
  let sentinel;
  if (null != closure_28[tmp]) {
    sentinel = tmp3.sentinel;
  }
  let num = 0;
  if (null != sentinel) {
    num = sentinel;
  }
  obj.sentinel = num;
  return obj;
}
function getOrCreateGuildState(guild_id) {
  let tmp2 = guild_id;
  if (null == guild_id) {
    tmp2 = NULL_STRING_GUILD_ID;
  }
  let tmp4 = guild_id;
  if (null == guild_id) {
    tmp4 = NULL_STRING_GUILD_ID;
  }
  let tmp5 = closure_28[tmp4];
  if (null == tmp5) {
    tmp5 = createGuildState(guild_id);
  }
  closure_28[tmp2] = tmp5;
  return tmp5;
}
function updateGuildUnreadSentinel(guild_id) {
  const tmp = getOrCreateGuildState(guild_id);
  tmp.sentinel = tmp.sentinel + 1;
  closure_30 = closure_30 + 1;
}
function disableUnreadForOptInChannel(guild_id, arg1, arg2) {
  let tmp = arg2;
  let tmp2 = null != guild_id.guild_id;
  if (tmp2) {
    if (tmp) {
      let result = callback5(guild_id.type);
      if (!result) {
        result = store3.isChannelRecordOrParentOptedIn(guild_id);
      }
      tmp = !result;
    }
    if (tmp) {
      tmp = 0 === arg1;
    }
    tmp2 = tmp;
  }
  return tmp2;
}
function isCountableChannel(channel) {
  let num = arg1;
  let flag = arg2;
  if (arg1 === undefined) {
    num = 0;
  }
  if (flag === undefined) {
    flag = false;
  }
  if (null == channel) {
    return false;
  } else {
    if (channel.isGuildVocal()) {
      if (0 === num) {
        return false;
      }
    }
    if (channel.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
      return false;
    } else {
      if (0 === num) {
        if (channel.isThread()) {
          let isMutedResult = closure_11.isMuted(channel.id);
          if (!isMutedResult) {
            isMutedResult = store3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
          }
          let result = isMutedResult;
        } else {
          result = store3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        }
        if (result) {
          return false;
        }
      }
      if (!channel.isPrivate()) {
        if (disableUnreadForOptInChannel(channel, num, obj.isOptInEnabledForGuild(channel.guild_id))) {
          return false;
        } else if (!closure_18.can(channel.accessPermissions, channel)) {
          return false;
        }
        const obj = arg1(dependencyMap[22]);
      }
      let tmp11 = num > 0;
      if (!tmp11) {
        tmp11 = store3.resolveUnreadSetting(channel) === constants2.ALL_MESSAGES;
      }
      return tmp11;
    }
  }
}
function computeIsCountableGuildChannel(type) {
  let tmp = !callback4(type.type);
  if (!tmp) {
    tmp = 0 !== arg1;
  }
  if (tmp) {
    const tmp4 = !closure_18.canBasicChannel(callback3(type.type), type);
    let tmp5 = !tmp4;
    if (!tmp4) {
      let tmp8 = !disableUnreadForOptInChannel(type, arg1, arg2);
      if (tmp8) {
        let tmp10 = !tmp9;
        if ("flags" in type) {
          tmp10 = !type.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
        }
        if (tmp10) {
          let tmp12 = arg1 > 0;
          if (!tmp12) {
            tmp12 = store3.resolveUnreadSetting(type) === constants2.ALL_MESSAGES;
          }
          tmp10 = tmp12;
        }
        tmp8 = tmp10;
      }
      tmp5 = tmp8;
    }
    tmp = tmp5;
  }
  return tmp;
}
function sanitizeGuildId(guildId) {
  if (NULL_STRING_GUILD_ID !== guildId) {
    if (null !== guildId) {
      if (undefined !== guildId) {
        return guildId;
      }
    }
  }
  return null;
}
function isNonChannelUnread(guild_id, GUILD_EVENT) {
  const hasUnreadResult = store2.hasUnread(guild_id, GUILD_EVENT);
  let tmp2 = hasUnreadResult;
  if (GUILD_EVENT === constants.GUILD_EVENT) {
    let tmp4 = !store3.isMuted(guild_id);
    if (tmp4) {
      tmp4 = !store3.isMuteScheduledEventsEnabled(guild_id) && hasUnreadResult;
      const tmp6 = !store3.isMuteScheduledEventsEnabled(guild_id) && hasUnreadResult;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function createNewStateFrom(guild_id, mentionCounts) {
  const tmp = createGuildState(guild_id);
  let obj = {};
  const merged = Object.assign(mentionCounts.mentionCounts);
  tmp.mentionCounts = obj;
  obj = {};
  const merged1 = Object.assign(mentionCounts.unreadByType);
  tmp.unreadByType = obj;
  return tmp;
}
function updateGuildUnread(unreadByType) {
  const entries = Object.entries(unreadByType.unreadByType);
  unreadByType.unread = entries.some((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return Number(tmp) !== constants.GUILD_EVENT && tmp2;
  });
  return unreadByType;
}
function updateNotificationCenterMentions(mentionCounts, ncMentionCount) {
  if (!tabFocused.tabFocused) {
    ncMentionCount = undefined;
    const tmp3 = getGuildNotifCenterMentionCount(mentionCounts);
    if (null != ncMentionCount) {
      ncMentionCount = ncMentionCount.ncMentionCount;
    }
    let num2 = 0;
    if (null != ncMentionCount) {
      num2 = ncMentionCount;
    }
    mentionCounts.ncMentionCount = Math.max(num2 + (tmp3 - getGuildNotifCenterMentionCount(ncMentionCount)), 0);
    const tmp4 = getGuildNotifCenterMentionCount(ncMentionCount);
  }
}
function getGuildNotifCenterMentionCount(mentionCounts) {
  const arg1 = mentionCounts;
  const importDefault = 0;
  const currentUser = currentUser.getCurrentUser();
  let notifCenterReadState;
  if (null != currentUser) {
    notifCenterReadState = store2.getNotifCenterReadState(currentUser.id);
  }
  const dependencyMap = notifCenterReadState;
  if (!tmp4) {
    const keys = importDefault(dependencyMap[23]).keys(mentionCounts.mentionCounts);
    const item = keys.forEach((arg0) => {
      const lastMessageIdResult = closure_19.lastMessageId(arg0);
      if (obj.compare(lastMessageIdResult, notifCenterReadState._ackMessageId) > 0) {
        const v0 = v0 + arg0.mentionCounts[arg0].count;
      }
    });
    const obj = importDefault(dependencyMap[23]);
  }
  return importDefault;
}
function aggregateGuildState(guild_id, mentionCounts, unread) {
  let tmp = guild_id;
  updateGuildUnread(mentionCounts);
  mentionCounts.lowImportanceMentionCount = 0;
  mentionCounts.highImportanceMentionCount = 0;
  const item = importDefault(dependencyMap[23]).forEach(mentionCounts.mentionCounts, (count) => {
    count = count.count;
    if (count.isMentionLowImportance) {
      tmp.lowImportanceMentionCount = tmp.lowImportanceMentionCount + count;
    } else {
      tmp.highImportanceMentionCount = tmp.highImportanceMentionCount + count;
    }
  });
  let flag = mentionCounts.unread !== unread.unread || mentionCounts.lowImportanceMentionCount !== unread.lowImportanceMentionCount || mentionCounts.highImportanceMentionCount !== unread.highImportanceMentionCount;
  if (flag) {
    let tmp6 = tmp;
    if (null == tmp) {
      tmp6 = NULL_STRING_GUILD_ID;
    }
    closure_28[tmp6] = mentionCounts;
    if (null != tmp) {
      if (mentionCounts.unread) {
        obj.add(tmp);
      } else {
        obj.delete(tmp);
      }
    }
    closure_30 = closure_30 + 1;
    if (null == tmp) {
      tmp = NULL_STRING_GUILD_ID;
    }
    updateGuildUnreadSentinel(tmp);
    updateNotificationCenterMentions(mentionCounts, unread);
    flag = true;
    const tmp10 = updateGuildUnreadSentinel;
    const tmp4 = closure_28;
  }
  return flag;
}
function recountChannels(guildId, items) {
  const tmp = sanitizeGuildId(guildId);
  items = tmp;
  const tmp2 = getOrCreateGuildState(tmp);
  const tmp3 = createNewStateFrom(tmp, tmp2);
  const importDefault = tmp3;
  let closure_2 = false;
  const item = items.forEach((channelId) => {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      if (channel.getGuildId() === tmp) {
        const mentionCount = store.getMentionCount(channelId);
        let hasUnreadResult = null !== tmp;
        if (hasUnreadResult) {
          hasUnreadResult = !closure_2;
        }
        if (hasUnreadResult) {
          hasUnreadResult = store.hasUnread(channel.id);
        }
        if (hasUnreadResult) {
          hasUnreadResult = callback(channel, mentionCount, true);
        }
        if (hasUnreadResult) {
          closure_2 = true;
          tmp3.unreadChannelId = channel.id;
        }
        if (mentionCount > 0) {
          if (callback(channel, mentionCount)) {
            const obj = { count: mentionCount, isMentionLowImportance: store.getIsMentionLowImportance(channelId) };
            tmp3.mentionCounts[channel.id] = obj;
          }
        }
        const mentionCounts2 = tmp3.mentionCounts;
        const id = channel.id;
        delete r6[r2];
      }
    } else {
      const mentionCounts = tmp3.mentionCounts;
      delete r1[r5];
    }
  });
  tmp3.unreadByType[constants.CHANNEL] = closure_2;
  if (tmp3.unreadByType[closure_25.CHANNEL] !== tmp2.unreadByType[closure_25.CHANNEL]) {
    if (!tmp3.unreadByType[closure_25.CHANNEL]) {
      const channel = store.getChannel(tmp2.unreadChannelId);
      if (null != channel) {
        if (!items.includes(channel.id)) {
          if (store2.hasUnread(channel.id)) {
            if (isCountableChannel(channel)) {
              if (null != tmp) {
                set.add(tmp);
              }
              tmp3.unreadByType[constants.CHANNEL] = true;
            }
          }
        }
      }
      return recountGuild(tmp);
    }
  }
  return aggregateGuildState(tmp, tmp3, tmp2);
}
function updateNonChannel(guild_id, GUILD_EVENT) {
  if (null != guild_id) {
    const tmp2 = getOrCreateGuildState(guild_id);
    const tmp4 = createNewStateFrom(guild_id, tmp2);
    tmp4.unreadByType[constants.GUILD_EVENT] = isNonChannelUnread(guild_id, GUILD_EVENT);
    return aggregateGuildState(guild_id, tmp4, tmp2);
  }
}
function recountGuild(guildId) {
  let isMentionLowImportance;
  let mentionCount;
  let tmp17;
  let tmp = sanitizeGuildId(guildId);
  const tmp2 = createGuildState(tmp);
  if (null == tmp) {
    const mutablePrivateChannels = store.getMutablePrivateChannels();
    for (const key10126 in mutablePrivateChannels) {
      let tmp87 = key10126;
      let tmp88 = mutablePrivateChannels[key10126];
      let tmp89 = closure_19;
      mentionCount = closure_19.getMentionCount(key10126);
      let tmp67 = mentionCount > 0;
      if (tmp67) {
        let tmp66 = closure_38;
        tmp67 = closure_38(tmp88, mentionCount);
      }
      if (!tmp67) {
        continue;
      } else {
        tmp2.highImportanceMentionCount = tmp2.highImportanceMentionCount + mentionCount;
        let obj = { count: mentionCount, isMentionLowImportance: false };
        tmp2.mentionCounts[tmp88.id] = obj;
        // continue
      }
      continue;
    }
  } else {
    const isMutedResult = store3.isMuted(tmp);
    if (isMutedResult) {
      if (false === arg1) {
        return false;
      }
    }
    const mutedChannels = store3.getMutedChannels(tmp);
    const channelOverrides = store3.getChannelOverrides(tmp);
    let obj1 = arg1(dependencyMap[22]);
    const result = obj1.isOptInEnabledForGuild(tmp);
    const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(tmp);
    for (const key10030 in mutableBasicGuildChannelsForGuild) {
      let tmp81 = key10030;
      let tmp82 = mutableBasicGuildChannelsForGuild[key10030];
      let hasItem = isMutedResult;
      if (!isMutedResult) {
        hasItem = mutedChannels.has(key10030);
      }
      if (!hasItem) {
        let hasItem1 = null != tmp82.parent_id;
        if (hasItem1) {
          hasItem1 = mutedChannels.has(tmp82.parent_id);
        }
        hasItem = hasItem1;
      }
      let tmp16 = closure_25;
      tmp17 = tmp2.unreadByType[closure_25.CHANNEL];
      let tmp18 = closure_19;
      let tmp19 = closure_19;
      let tmp20 = tmp82;
      let tmp21 = result;
      let tmp22 = channelOverrides;
      let tmp23 = hasItem;
      let tmp24 = tmp17;
      let guildChannelUnreadState = closure_19.getGuildChannelUnreadState(tmp82, result, channelOverrides, hasItem, tmp17);
      ({ mentionCount, isMentionLowImportance } = guildChannelUnreadState);
      let tmp27 = mentionCount > 0;
      if (tmp27) {
        tmp17 = !tmp17;
        if (tmp17) {
          let tmp28 = !hasItem;
          if (!tmp28) {
            tmp28 = tmp27;
          }
          tmp17 = tmp28;
        }
        if (tmp17) {
          tmp17 = tmp26;
        }
        if (tmp17) {
          let tmp30 = closure_39;
          let tmp31 = tmp17;
          if (!closure_39(tmp82, mentionCount, result)) {
            continue;
          } else {
            if (tmp17) {
              let tmp32 = closure_25;
              tmp2.unreadByType[closure_25.CHANNEL] = true;
              tmp2.unreadChannelId = key10030;
            }
            let tmp33 = tmp17;
            if (!tmp27) {
              continue;
            } else {
              if (isMentionLowImportance) {
                tmp2.lowImportanceMentionCount = tmp2.lowImportanceMentionCount + mentionCount;
              } else {
                tmp2.highImportanceMentionCount = tmp2.highImportanceMentionCount + mentionCount;
              }
              obj = { count: mentionCount, isMentionLowImportance };
              tmp2.mentionCounts[tmp82.id] = obj;
              let tmp34 = tmp17;
              // continue
            }
            continue;
          }
          continue;
        } else {
          let tmp29 = tmp17;
        }
        continue;
      }
      continue;
    }
    const activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(tmp);
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp17] !== undefined) {
        let tmp83 = tmp45;
        let tmp55 = tmp38;
        let tmp56 = tmp39;
        let tmp57 = tmp40;
        let keys1 = Object.keys();
        if (keys1 === undefined) {
          continue;
        } else {
          let tmp38 = tmp55;
          let tmp39 = tmp56;
          let tmp40 = tmp57;
          let tmp46 = keys1[tmp13];
          while (tmp46 !== undefined) {
            let tmp85 = tmp46;
            let tmp86 = constants;
            let isMutedResult1 = tmp2.unreadByType[closure_25.CHANNEL];
            if (!isMutedResult1) {
              let tmp47 = store2;
              isMutedResult1 = !store2.hasUnread(tmp46);
            }
            if (!isMutedResult1) {
              let tmp49 = closure_11;
              isMutedResult1 = closure_11.isMuted(tmp46);
            }
            if (!isMutedResult1) {
              isMutedResult1 = isMutedResult;
            }
            if (!isMutedResult1) {
              let tmp50 = constants;
              tmp2.unreadByType[constants.CHANNEL] = true;
              tmp2.unreadChannelId = tmp46;
            }
            let tmp51 = store2;
            let mentionCount1 = store2.getMentionCount(tmp46);
            let tmp53 = store2;
            isMentionLowImportance = store2.getIsMentionLowImportance(tmp46);
            tmp55 = tmp46;
            tmp56 = mentionCount1;
            tmp57 = isMentionLowImportance;
            if (mentionCount1 <= 0) {
              continue;
            } else {
              if (isMentionLowImportance) {
                tmp2.lowImportanceMentionCount = tmp2.lowImportanceMentionCount + mentionCount1;
              } else {
                tmp2.highImportanceMentionCount = tmp2.highImportanceMentionCount + mentionCount1;
              }
              obj1 = { count: mentionCount1, isMentionLowImportance };
              tmp2.mentionCounts[tmp46] = obj1;
              tmp55 = tmp46;
              tmp56 = mentionCount1;
              tmp57 = isMentionLowImportance;
              // continue
            }
            continue;
          }
        }
        continue;
      }
    }
    let tmp59 = !tmp2.unreadByType[closure_25.GUILD_EVENT];
    if (tmp59) {
      tmp59 = isNonChannelUnread(tmp, constants.GUILD_EVENT);
    }
    if (tmp59) {
      tmp2.unreadByType[constants.GUILD_EVENT] = true;
    }
  }
  updateGuildUnread(tmp2);
  const tmp69 = getOrCreateGuildState(tmp);
  let flag4 = tmp2.unread !== tmp69.unread || tmp2.highImportanceMentionCount !== tmp69.highImportanceMentionCount || tmp2.lowImportanceMentionCount !== tmp69.lowImportanceMentionCount;
  if (flag4) {
    let tmp71 = tmp;
    if (null == tmp) {
      tmp71 = NULL_STRING_GUILD_ID;
    }
    closure_28[tmp71] = tmp2;
    if (null != tmp) {
      if (tmp2.unread) {
        obj6.add(tmp);
      } else {
        obj6.delete(tmp);
      }
    }
    closure_30 = closure_30 + 1;
    if (null == tmp) {
      tmp = NULL_STRING_GUILD_ID;
    }
    updateGuildUnreadSentinel(tmp);
    updateNotificationCenterMentions(tmp2, tmp69);
    flag4 = true;
    const tmp70 = closure_28;
    const tmp75 = updateGuildUnreadSentinel;
  }
  return flag4;
}
function handleOverlayInitialize(guilds) {
  guilds = guilds.guilds;
  let closure_28 = {};
  let num = 0;
  let closure_30 = 0;
  const set = new Set();
  recountGuild(null);
  if (0 < guilds.length) {
    do {
      let tmp3 = guilds[num];
      if (null != tmp3) {
        let tmp4 = closure_49;
        let tmp5 = closure_49(tmp3.properties.id);
      }
      num = num + 1;
    } while (num < length);
  }
}
function handleConnectionOpen(readState) {
  let iter2;
  readState = readState.readState;
  let closure_28 = {};
  let closure_30 = 0;
  const set = new Set();
  const set1 = new Set();
  const arg1 = set1;
  if (readState.entries.length < 500) {
    const entries = readState.entries;
    const item = entries.forEach((mention_count) => {
      let tmp = null != mention_count.mention_count;
      if (tmp) {
        tmp = mention_count.mention_count > 0;
      }
      if (tmp) {
        if (null != mention_count.read_state_type) {
          if (mention_count.read_state_type !== constants.CHANNEL) {
            set1.add(mention_count.id);
          }
        }
        const channel = channel.getChannel(mention_count.id);
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        set1.add(guild_id);
      }
    });
  }
  recountGuild(null);
  const tmp5 = _createForOfIteratorHelperLoose(readState.guilds);
  let iter = tmp5();
  if (!iter.done) {
    do {
      let value = iter.value;
      let hasItem;
      let tmp6 = closure_49;
      if (tmp2) {
        hasItem = set1.has(value.id);
      }
      let tmp6Result = tmp6(value.id, hasItem);
      iter2 = tmp5();
      iter = iter2;
    } while (!iter2.done);
  }
}
function recomputeAllGuilds() {
  let length;
  let closure_28 = {};
  const set = new Set();
  recountGuild(null);
  const values = Object.values(guildIds.getGuildIds());
  let num = 0;
  if (0 < values.length) {
    do {
      let tmp3 = closure_49;
      let tmp4 = closure_49(values[num]);
      num = num + 1;
      length = values.length;
    } while (num < length);
  }
}
function handleGuildCreate(guild) {
  return recountGuild(guild.guild.id);
}
function handleGuildDelete(guild) {
  guild = guild.guild;
  let flag = null != closure_28[guild.id];
  if (flag) {
    const id = guild.id;
    delete r4[r3];
    set.delete(guild.id);
    closure_30 = closure_30 + 1;
    flag = true;
  }
  return flag;
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  const items = [channel.id];
  return recountChannels(channel.guild_id, items);
}
function handleWindowFocus() {
  const channel = store.getChannel(channelId.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleGuildMemberUpdate(user) {
  let tmp = user.user.id === id.getId();
  if (tmp) {
    tmp = recountGuild(user.guildId);
  }
  return tmp;
}
function handleGenericUpdate(channelId) {
  const channel = store.getChannel(channelId.channelId);
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleMessageCreate(channelId) {
  channelId = channelId.channelId;
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (null != channel.guild_id) {
      if (channel.isThread()) {
        let isMutedResult = !closure_11.hasJoined(channel.id);
        if (!isMutedResult) {
          isMutedResult = closure_11.isMuted(channel.id);
        }
        let result = isMutedResult;
      } else {
        result = store3.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      if (result) {
        if (0 === store2.getMentionCount(channelId)) {
          return false;
        }
      }
      const tmp10 = getOrCreateGuildState(channel.guild_id);
    }
    const items = [channel.id];
    return recountChannels(channel.getGuildId(), items);
  }
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  let tmp = guildId !== FAVORITES;
  if (tmp) {
    let tmp3 = null != channelId;
    if (tmp3) {
      const items = [channelId];
      tmp3 = recountChannels(guildId, items);
    }
    tmp = tmp3;
  }
  return tmp;
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  const items = [channel.id];
  return recountChannels(channel.getGuildId(), items);
}
function handleChannelUpdates(channels) {
  const obj = importDefault(dependencyMap[24])(channels.channels);
  return importDefault(dependencyMap[24])(channels.channels).groupBy((getGuildId) => getGuildId.getGuildId()).reduce((arg0, arr) => callback(arg2, arr.map((id) => id.id)) || arg0, false);
}
function handleBulkAck(channels) {
  const mapped = importDefault(dependencyMap[24])(channels.channels).map((channelId) => channelId.channelId);
  const found = mapped.filter((channelId) => null != store.getChannel(channelId));
  const arr = importDefault(dependencyMap[24])(channels.channels);
  return found.groupBy((channelId) => {
    const channel = store.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return guildId;
  }).reduce((arg0, arg1, arg2) => callback(arg2, arg1) || arg0, false);
}
function handleThreadUpdate(channel) {
  channel = channel.channel;
  const items = [, ];
  ({ id: arr[0], parent_id: arr[1] } = channel);
  return recountChannels(channel.getGuildId(), items);
}
function handleGuildEventUpdate(guildScheduledEvent) {
  return updateNonChannel(guildScheduledEvent.guildScheduledEvent.guild_id, constants.GUILD_EVENT);
}
function handleGuildEventDelete(guildScheduledEvent) {
  return updateNonChannel(guildScheduledEvent.guildScheduledEvent.guild_id, constants.GUILD_EVENT);
}
function handleGuildFeatureAck(id) {
  return updateNonChannel(id.id, id.ackType);
}
function handleThreadMemberUpdate(id) {
  const items = [id.id];
  return recountChannels(id.guildId, items);
}
function handleThreadMembersUpdate(id) {
  let result = arg1(dependencyMap[25]).doesThreadMembersActionAffectMe(id);
  if (result) {
    const items = [id.id];
    result = recountChannels(id.guildId, items);
  }
  return result;
}
function handleThreadListSync(threads) {
  threads = threads.threads;
  const found = threads.filter((id) => closure_11.hasJoined(id.id));
  return recountChannels(threads.guildId, found.map((id) => id.id));
}
function handlePassiveUpdateV2(channels) {
  let guildId;
  let tmp = channels.channels.length > 0;
  if (tmp) {
    ({ channels, guildId } = channels);
    tmp = recountChannels(guildId, channels.map((id) => id.id));
  }
  return tmp;
}
function handleMarkGuildAsRead(guildId) {
  return recountGuild(guildId.guildId);
}
function handleGuildUpdate(guildId) {
  return recountGuild(guildId.guildId);
}
function handleUserGuildSettingsFullUpdate(userGuildSettings) {
  userGuildSettings = userGuildSettings.userGuildSettings;
  const arg1 = new Set(userGuildSettings.map((guild_id) => {
    guild_id = guild_id.guild_id;
    if (null == guild_id) {
      guild_id = closure_27;
    }
    return guild_id;
  }));
  const set = new Set(userGuildSettings.map((guild_id) => {
    guild_id = guild_id.guild_id;
    if (null == guild_id) {
      guild_id = closure_27;
    }
    return guild_id;
  }));
  const keys = importDefault(dependencyMap[23]).keys(closure_28);
  return keys.reduce((arg0, arg1) => {
    let hasItem = set.has(arg1);
    if (hasItem) {
      hasItem = callback(arg1);
    }
    if (!hasItem) {
      hasItem = arg0;
    }
    return hasItem;
  }, false);
}
function handleClearNotifCenterGuildMentions() {
  for (const key10003 in closure_28) {
    let tmp = key10003;
    let tmp2 = closure_28;
    closure_28[key10003].ncMentionCount = 0;
  }
}
function handleUserGuildSettingsUpdate(guildId, arg1) {
  return recountGuild(guildId.guildId);
}
function handleRecentMentionsSuccess(messages) {
  messages = messages.messages;
  const item = new Set(messages.map((channel_id) => channel_id.channel_id)).forEach((channelId) => {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      const items = [channelId];
      callback(channel.getGuildId(), items);
    }
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ getBasicAccessPermissions: closure_12, isGuildVocalChannelType: closure_13, isThread: closure_14 } = arg1(dependencyMap[9]));
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
const tmp2 = arg1(dependencyMap[9]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
let closure_21 = importDefault(dependencyMap[17]);
let closure_22 = importDefault(dependencyMap[18]);
const tmp4 = arg1(dependencyMap[19]);
const FAVORITES = tmp4.FAVORITES;
const ChannelFlags = arg1(dependencyMap[20]).ChannelFlags;
const importDefaultResult = importDefault(dependencyMap[13]);
({ ReadStateTypes: closure_25, UnreadSetting: closure_26 } = arg1(dependencyMap[21]));
const NULL_STRING_GUILD_ID = tmp4.NULL_STRING_GUILD_ID;
let closure_28 = {};
const set = new Set();
let closure_30 = 0;
let tmp7 = (importDefaultResult) => {
  class GuildReadStateStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildReadStateStore);
      obj = {
        CONNECTION_OPEN: closure_51,
        OVERLAY_INITIALIZE: closure_50,
        CACHE_LOADED_LAZY() {
              return tmp2Result.loadCache();
            },
        GUILD_CREATE: closure_53,
        GUILD_DELETE: closure_54,
        MESSAGE_CREATE: closure_59,
        MESSAGE_ACK: closure_58,
        BULK_ACK: closure_63,
        UPDATE_CHANNEL_DIMENSIONS: closure_58,
        CHANNEL_SELECT: closure_60,
        CHANNEL_DELETE: closure_55,
        WINDOW_FOCUS: closure_56,
        GUILD_ACK: closure_72,
        GUILD_ROLE_CREATE: closure_73,
        GUILD_ROLE_DELETE: closure_73,
        GUILD_ROLE_UPDATE: closure_73,
        CHANNEL_CREATE: closure_61,
        CHANNEL_UPDATES: closure_62,
        THREAD_CREATE: closure_64,
        THREAD_UPDATE: closure_64,
        THREAD_DELETE: closure_64,
        THREAD_LIST_SYNC: closure_70,
        THREAD_MEMBER_UPDATE: closure_68,
        THREAD_MEMBERS_UPDATE: closure_69,
        PASSIVE_UPDATE_V2: closure_71,
        GUILD_MEMBER_UPDATE: closure_57,
        USER_GUILD_SETTINGS_FULL_UPDATE: closure_74,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: closure_76,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: closure_76,
        USER_GUILD_SETTINGS_GUILD_UPDATE: closure_76,
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: closure_76,
        GUILD_FEATURE_ACK: closure_67,
        GUILD_SCHEDULED_EVENT_CREATE: closure_65,
        GUILD_SCHEDULED_EVENT_UPDATE: closure_65,
        GUILD_SCHEDULED_EVENT_DELETE: closure_66,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: closure_58,
        LOAD_MESSAGES_SUCCESS: closure_58,
        CHANNEL_ACK: closure_58,
        CHANNEL_LOCAL_ACK: closure_58,
        NOTIFICATION_SETTINGS_UPDATE: closure_52,
        RECOMPUTE_READ_STATES: closure_52,
        VOICE_CHANNEL_SELECT: closure_58,
        ENABLE_AUTOMATIC_ACK: closure_58,
        RESORT_THREADS: closure_58,
        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: closure_75,
        TRY_ACK: closure_58,
        LOAD_RECENT_MENTIONS_SUCCESS: closure_77
      };
      items = [];
      items[0] = obj;
      obj2 = closure_6(GuildReadStateStore);
      tmp2 = closure_5;
      if (closure_31()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildReadStateStore = tmp2Result;
      return tmp2Result;
    }
  }
  const arg1 = GuildReadStateStore;
  callback2(GuildReadStateStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_16, closure_20, closure_19, closure_18, closure_15, closure_22, closure_21, closure_10, closure_11, closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "loadCache",
    value() {
      const snapshot = this.readSnapshot(GuildReadStateStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        const guilds = snapshot.guilds;
        const _Set = Set;
        const set = new Set(snapshot.unreadGuilds);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "takeSnapshot",
    value() {
      let obj = { version: GuildReadStateStore.LATEST_SNAPSHOT_VERSION };
      obj = { guilds: closure_28, unreadGuilds: Array.from(closure_29) };
      obj.data = obj;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasAnyUnread",
    value() {
      return set.size > 0;
    }
  };
  items[4] = {
    key: "getStoreChangeSentinel",
    value() {
      return closure_30;
    }
  };
  items[5] = {
    key: "getMutableUnreadGuilds",
    value() {
      return closure_29;
    }
  };
  items[6] = {
    key: "getMutableGuildStates",
    value() {
      return closure_28;
    }
  };
  items[7] = {
    key: "shouldCountChannelUnread",
    value(arg0) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      return callback5(arg0, num, true);
    }
  };
  items[8] = {
    key: "hasUnread",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[9] = {
    key: "getMentionCount",
    value(arg0) {
      const tmp = callback4(arg0);
      return tmp.highImportanceMentionCount + tmp.lowImportanceMentionCount;
    }
  };
  items[10] = {
    key: "getIsMentionLowImportance",
    value(arg0) {
      return 0 === callback4(arg0).highImportanceMentionCount;
    }
  };
  items[11] = {
    key: "getGuildHasUnreadIgnoreMuted",
    value(arg0) {
      const mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(arg0);
      for (const key10008 in mutableGuildChannelsForGuild) {
        let tmp7 = key10008;
        let obj = mutableGuildChannelsForGuild[key10008];
        if (null == obj) {
          continue;
        } else {
          if (!obj.isGuildVocal()) {
            let tmp3 = closure_18;
            let can = closure_18.can;
            if (!can(obj.accessPermissions, obj)) {
              continue;
            } else {
              can = closure_19;
              if (!closure_19.hasUnreadOrMentions(key10008)) {
                continue;
              } else {
                let flag = true;
                return true;
              }
            }
            continue;
          } else {
            can = closure_19;
          }
          continue;
        }
        continue;
      }
      const activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(arg0);
      for (const key10025 in activeJoinedThreadsForGuild) {
        let tmp8 = key10025;
        let tmp9 = closure_16;
        if (null == closure_16.getChannel(key10025)) {
          continue;
        } else {
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp6 = keys[tmp];
            while (tmp6 !== undefined) {
              let tmp10 = tmp6;
              let tmp11 = closure_19;
              if (!closure_19.hasUnreadOrMentions(tmp6)) {
                continue;
              } else {
                let flag2 = true;
                return true;
              }
            }
          }
          continue;
        }
        continue;
      }
      return closure_19.hasUnreadOrMentions(arg0, constants.GUILD_EVENT);
    }
  };
  items[12] = {
    key: "getTotalMentionCount",
    value(arg0) {
      let num = 0;
      let num2 = 0;
      const keys = Object.keys();
      if (keys !== undefined) {
        num2 = num;
        while (keys[tmp] !== undefined) {
          let tmp8 = tmp5;
          let tmp9 = closure_28;
          let tmp7 = tmp2;
          if (tmp2) {
            let tmp6 = closure_27;
            tmp7 = tmp5 === closure_27;
          }
          if (tmp7) {
            continue;
          } else {
            num = tmp4 + closure_28[tmp5].highImportanceMentionCount;
            // continue
          }
          continue;
        }
      }
      return num2;
    }
  };
  items[13] = {
    key: "getTotalNotificationsMentionCount",
    value(arg0) {
      let num = 0;
      let num2 = 0;
      const keys = Object.keys();
      if (keys !== undefined) {
        num2 = num;
        while (keys[tmp] !== undefined) {
          let tmp8 = tmp5;
          let tmp9 = closure_28;
          let tmp7 = tmp2;
          if (tmp2) {
            let tmp6 = closure_27;
            tmp7 = tmp5 === closure_27;
          }
          if (tmp7) {
            continue;
          } else {
            num = tmp4 + closure_28[tmp5].ncMentionCount;
            // continue
          }
          continue;
        }
      }
      return num2;
    }
  };
  items[14] = {
    key: "getPrivateChannelMentionCount",
    value() {
      let prop;
      if (null != closure_28[closure_27]) {
        prop = tmp.highImportanceMentionCount;
      }
      let num = 0;
      if (null != prop) {
        num = prop;
      }
      return num;
    }
  };
  items[15] = {
    key: "getMentionCountForPrivateChannel",
    value(arg0) {
      let tmp2;
      if (null != closure_28[closure_27]) {
        tmp2 = tmp.mentionCounts[arg0];
      }
      let num = 0;
      if (null != tmp2) {
        num = tmp2;
      }
      return num;
    }
  };
  items[16] = {
    key: "getHighImportanceMentionCountForChannel",
    value(arg0, arg1) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_27;
      }
      let tmp4;
      if (null != closure_28[tmp]) {
        tmp4 = tmp3.mentionCounts[arg1];
      }
      let num = 0;
      if (null != tmp4) {
        num = 0;
        if (!tmp4.isMentionLowImportance) {
          num = tmp4.count;
        }
      }
      return num;
    }
  };
  items[17] = {
    key: "getGuildChangeSentinel",
    value(arg0) {
      return callback4(arg0).sentinel;
    }
  };
  return callback(GuildReadStateStore, items);
}(importDefaultResult);
tmp7.displayName = "GuildReadStateStore";
tmp7.LATEST_SNAPSHOT_VERSION = 1;
tmp7 = new tmp7();
const tmp5 = arg1(dependencyMap[21]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("stores/GuildReadStateStore.tsx");

export default tmp7;
