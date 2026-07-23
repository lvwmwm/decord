// Module ID: 6879
// Function ID: 54391
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6880, 6882, 5039, 3760, 1352, 1194, 1348, 1838, 1196, 3758, 4142, 1906, 4325, 1849, 653, 1355, 4326, 6767, 21, 22, 3765, 2]

// Module 6879 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";
import ReadStateTypes from "ReadStateTypes";
import tmp7 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

let closure_12;
let closure_13;
let closure_14;
let closure_25;
let closure_26;
let require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function createGuildState(guild_id) {
  let tmp = guild_id;
  if (null == guild_id) {
    tmp = NULL_STRING_GUILD_ID;
  }
  const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0 };
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
function disableUnreadForOptInChannel(guild_id, mentionCount, result) {
  let tmp = result;
  let tmp2 = null != guild_id.guild_id;
  if (tmp2) {
    if (tmp) {
      result = callback5(guild_id.type);
      if (!result) {
        result = store3.isChannelRecordOrParentOptedIn(guild_id);
      }
      tmp = !result;
    }
    if (tmp) {
      tmp = 0 === mentionCount;
    }
    tmp2 = tmp;
  }
  return tmp2;
}
function isCountableChannel(channel, mentionCount) {
  let num = mentionCount;
  let flag = arg2;
  if (mentionCount === undefined) {
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
        obj = require(6767) /* useOptInEnabledForGuild */;
      }
      let tmp11 = num > 0;
      if (!tmp11) {
        tmp11 = store3.resolveUnreadSetting(channel) === constants2.ALL_MESSAGES;
      }
      return tmp11;
    }
  }
}
function computeIsCountableGuildChannel(type, mentionCount, result) {
  let tmp = !callback4(type.type);
  if (!tmp) {
    tmp = 0 !== mentionCount;
  }
  if (tmp) {
    const tmp4 = !closure_18.canBasicChannel(callback3(type.type), type);
    let tmp5 = !tmp4;
    if (!tmp4) {
      let tmp8 = !disableUnreadForOptInChannel(type, mentionCount, result);
      if (tmp8) {
        let tmp10 = !tmp9;
        if ("flags" in type) {
          tmp10 = !type.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
        }
        if (tmp10) {
          let tmp12 = mentionCount > 0;
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
    return Number(tmp) !== outer1_25.GUILD_EVENT && tmp2;
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
  let closure_0 = mentionCounts;
  const importDefault = 0;
  currentUser = currentUser.getCurrentUser();
  let notifCenterReadState;
  if (null != currentUser) {
    notifCenterReadState = store2.getNotifCenterReadState(currentUser.id);
  }
  if (!tmp4) {
    const keys = importDefault(notifCenterReadState[23]).keys(mentionCounts.mentionCounts);
    const item = keys.forEach((arg0) => {
      const lastMessageIdResult = outer1_19.lastMessageId(arg0);
      if (obj.compare(lastMessageIdResult, notifCenterReadState._ackMessageId) > 0) {
        closure_1 = closure_1 + mentionCounts.mentionCounts[arg0].count;
      }
    });
    const obj = importDefault(notifCenterReadState[23]);
  }
  return importDefault;
}
function aggregateGuildState(guild_id, mentionCounts, unread) {
  let tmp = guild_id;
  let closure_0 = mentionCounts;
  updateGuildUnread(mentionCounts);
  mentionCounts.lowImportanceMentionCount = 0;
  mentionCounts.highImportanceMentionCount = 0;
  const item = importDefault(21).forEach(mentionCounts.mentionCounts, (count) => {
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
  const require = tmp;
  const tmp2 = getOrCreateGuildState(tmp);
  const tmp3 = createNewStateFrom(tmp, tmp2);
  const importDefault = tmp3;
  let c2 = false;
  const item = items.forEach((channelId) => {
    const channel = outer1_16.getChannel(channelId);
    if (null != channel) {
      if (channel.getGuildId() === closure_0) {
        const mentionCount = outer1_19.getMentionCount(channelId);
        let hasUnreadResult = null !== closure_0;
        if (hasUnreadResult) {
          hasUnreadResult = !c2;
        }
        if (hasUnreadResult) {
          hasUnreadResult = outer1_19.hasUnread(channel.id);
        }
        if (hasUnreadResult) {
          hasUnreadResult = outer1_38(channel, mentionCount, true);
        }
        if (hasUnreadResult) {
          c2 = true;
          tmp3.unreadChannelId = channel.id;
        }
        if (mentionCount > 0) {
          if (outer1_38(channel, mentionCount)) {
            const obj = { count: mentionCount, isMentionLowImportance: outer1_19.getIsMentionLowImportance(channelId) };
            tmp3.mentionCounts[channel.id] = obj;
          }
        }
        const mentionCounts2 = tmp3.mentionCounts;
        const id = channel.id;
        delete tmp4[tmp2];
      }
    } else {
      const mentionCounts = tmp3.mentionCounts;
      delete tmp[tmp3];
    }
  });
  tmp3.unreadByType[constants.CHANNEL] = c2;
  if (tmp3.unreadByType[constants.CHANNEL] !== tmp2.unreadByType[constants.CHANNEL]) {
    if (!tmp3.unreadByType[constants.CHANNEL]) {
      let channel = store.getChannel(tmp2.unreadChannelId);
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
      let tmp89 = store2;
      mentionCount = store2.getMentionCount(key10126);
      let tmp67 = mentionCount > 0;
      if (tmp67) {
        let tmp66 = isCountableChannel;
        tmp67 = isCountableChannel(tmp88, mentionCount);
      }
      if (!tmp67) {
        continue;
      } else {
        tmp2.highImportanceMentionCount = tmp2.highImportanceMentionCount + mentionCount;
        let obj = { count: mentionCount, isMentionLowImportance: false };
        tmp2.mentionCounts[tmp88.id] = obj;
        continue;
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
    let obj1 = require(6767) /* useOptInEnabledForGuild */;
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
      let tmp16 = constants;
      tmp17 = tmp2.unreadByType[constants.CHANNEL];
      let tmp18 = store2;
      let tmp19 = store2;
      let tmp20 = tmp82;
      let tmp21 = result;
      let tmp22 = channelOverrides;
      let tmp23 = hasItem;
      let tmp24 = tmp17;
      let guildChannelUnreadState = store2.getGuildChannelUnreadState(tmp82, result, channelOverrides, hasItem, tmp17);
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
          let tmp30 = computeIsCountableGuildChannel;
          let tmp31 = tmp17;
          if (!computeIsCountableGuildChannel(tmp82, mentionCount, result)) {
            continue;
          } else {
            if (tmp17) {
              let tmp32 = constants;
              tmp2.unreadByType[constants.CHANNEL] = true;
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
              continue;
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
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(tmp);
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
          tmp38 = tmp55;
          tmp39 = tmp56;
          tmp40 = tmp57;
          let tmp46 = keys1[tmp13];
          while (tmp46 !== undefined) {
            let tmp85 = tmp46;
            let tmp86 = constants;
            let isMutedResult1 = tmp2.unreadByType[constants.CHANNEL];
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
              continue;
            }
            continue;
          }
        }
        continue;
      }
    }
    let tmp59 = !tmp2.unreadByType[constants.GUILD_EVENT];
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
  let c30 = 0;
  const set = new Set();
  recountGuild(null);
  if (0 < guilds.length) {
    do {
      let tmp3 = guilds[num];
      if (null != tmp3) {
        let tmp4 = recountGuild;
        let tmp5 = recountGuild(tmp3.properties.id);
      }
      num = num + 1;
    } while (num < length);
  }
}
function handleConnectionOpen(readState) {
  let iter2;
  readState = readState.readState;
  let closure_28 = {};
  let c30 = 0;
  const set = new Set();
  const set1 = new Set();
  if (readState.entries.length < 500) {
    const entries = readState.entries;
    const item = entries.forEach((mention_count) => {
      let tmp = null != mention_count.mention_count;
      if (tmp) {
        tmp = mention_count.mention_count > 0;
      }
      if (tmp) {
        if (null != mention_count.read_state_type) {
          if (mention_count.read_state_type !== outer1_25.CHANNEL) {
            set1.add(mention_count.id);
          }
        }
        const channel = outer1_16.getChannel(mention_count.id);
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
      let tmp6 = recountGuild;
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
      let tmp3 = recountGuild;
      let tmp4 = recountGuild(values[num]);
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
  let flag = null != dependencyMap[guild.id];
  if (flag) {
    const id = guild.id;
    delete tmp2[tmp];
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
  const obj = importDefault(22)(channels.channels);
  return importDefault(22)(channels.channels).groupBy((getGuildId) => getGuildId.getGuildId()).reduce((arg0, arr) => outer1_47(arg2, arr.map((id) => id.id)) || arg0, false);
}
function handleBulkAck(channels) {
  const mapped = importDefault(22)(channels.channels).map((channelId) => channelId.channelId);
  const found = mapped.filter((channelId) => null != outer1_16.getChannel(channelId));
  const arr = importDefault(22)(channels.channels);
  return found.groupBy((channelId) => {
    const channel = outer1_16.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return guildId;
  }).reduce((arg0, arg1, arg2) => outer1_47(arg2, arg1) || arg0, false);
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
  let result = require(3765) /* doesThreadMembersActionAffectMe */.doesThreadMembersActionAffectMe(id);
  if (result) {
    const items = [id.id];
    result = recountChannels(id.guildId, items);
  }
  return result;
}
function handleThreadListSync(threads) {
  threads = threads.threads;
  const found = threads.filter((id) => outer1_11.hasJoined(id.id));
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
  const set = new Set(userGuildSettings.map((guild_id) => {
    guild_id = guild_id.guild_id;
    if (null == guild_id) {
      guild_id = outer1_27;
    }
    return guild_id;
  }));
  const keys = importDefault(21).keys(closure_28);
  return keys.reduce((arg0, arg1) => {
    let hasItem = set.has(arg1);
    if (hasItem) {
      hasItem = outer1_49(arg1);
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
    let tmp2 = dependencyMap;
    dependencyMap[key10003].ncMentionCount = 0;
    continue;
  }
}
function handleUserGuildSettingsUpdate(guildId, arg1) {
  return recountGuild(guildId.guildId);
}
function handleRecentMentionsSuccess(messages) {
  messages = messages.messages;
  const item = new Set(messages.map((channel_id) => channel_id.channel_id)).forEach((channelId) => {
    const channel = outer1_16.getChannel(channelId);
    if (null != channel) {
      const items = [channelId];
      outer1_47(channel.getGuildId(), items);
    }
  });
}
({ getBasicAccessPermissions: closure_12, isGuildVocalChannelType: closure_13, isThread: closure_14 } = _callSuper);
const FAVORITES = ME.FAVORITES;
({ ReadStateTypes: closure_25, UnreadSetting: closure_26 } = ReadStateTypes);
const NULL_STRING_GUILD_ID = ME.NULL_STRING_GUILD_ID;
let closure_28 = {};
let set = new Set();
let c30 = 0;
tmp7.displayName = "GuildReadStateStore";
tmp7.LATEST_SNAPSHOT_VERSION = 1;
tmp7 = new tmp7();
let result = set.fileFinishedImporting("stores/GuildReadStateStore.tsx");

export default tmp7;
