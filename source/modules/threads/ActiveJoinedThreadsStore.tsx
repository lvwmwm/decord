// Module ID: 5036
// Function ID: 43455
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5036 (_isNativeReflectConstruct)
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
function rebuild() {
  let closure_17 = {};
  let closure_21 = {};
  let closure_18 = {};
  let closure_19 = {};
  let closure_20 = {};
  const channelId = store3.getChannelId();
  for (const key10012 in closure_24) {
    let tmp3 = key10012;
    let _clearTimeout = clearTimeout;
    let tmp4 = closure_24;
    let clearTimeoutResult = clearTimeout(closure_24[key10012]);
  }
  let closure_24 = {};
  closure_14.forEachGuild((arg0) => {
    callback(arg0);
  });
  rebuildNewThreadCounts();
}
function rebuildGuild(arg0) {
  delete r0[r7];
  delete r0[r7];
  delete r0[r7];
  delete r0[r7];
  delete r0[r7];
  rebuildGuild_(arg0);
  for (const key10012 in closure_19[arg0]) {
    let tmp2 = key10012;
    let tmp3 = closure_38;
    let tmp4 = closure_38(arg0, key10012);
  }
}
function rebuildGuild_(arg0) {
  let isTimedRelevant;
  let isUnread;
  const threadsForGuild = closure_14.getThreadsForGuild(arg0);
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp2] !== undefined) {
      let tmp63 = tmp17;
      let tmp35 = tmp4;
      let tmp36 = tmp5;
      let tmp37 = tmp6;
      let tmp38 = tmp7;
      let tmp39 = tmp8;
      let tmp40 = tmp9;
      let keys1 = Object.keys();
      if (keys1 === undefined) {
        continue;
      } else {
        let tmp4 = tmp35;
        let tmp5 = tmp36;
        let tmp6 = tmp37;
        let tmp7 = tmp38;
        let tmp8 = tmp39;
        let tmp9 = tmp40;
        let tmp21 = keys1[tmp];
        while (tmp21 !== undefined) {
          let tmp65 = tmp21;
          let tmp66 = clearTimer;
          let tmp67 = clearTimer(tmp21);
          let tmp68 = store;
          let channel = store.getChannel(tmp21);
          tmp35 = tmp21;
          tmp36 = channel;
          if (null == channel) {
            continue;
          } else {
            let tmp22 = closure_15;
            let joinTimestampResult = closure_15.joinTimestamp(tmp21);
            if (null != joinTimestampResult) {
              let obj = { channel, joinTimestamp: joinTimestampResult.getTime() };
              let tmp41 = parseThreadState;
              let tmp42 = parseThreadState(channel);
              ({ isUnread, isTimedRelevant } = tmp42);
              let tmp44 = closure_17;
              let tmp45 = channel;
              let tmp46 = obj;
              let flag3 = false;
              let tmp43 = updateIn;
              let tmp47 = updateIn(closure_17, channel, obj, false);
              let tmp48 = closure_21;
              let tmp49 = null;
              if (tmp42.isRelevant) {
                tmp49 = obj;
              }
              let tmp50 = tmp48;
              let tmp51 = channel;
              let tmp52 = tmp49;
              let flag4 = false;
              let tmp43Result = tmp43(tmp48, channel, tmp49, false);
              let tmp55 = closure_18;
              let tmp56 = null;
              let tmp54 = updateIn;
              if (isUnread) {
                tmp56 = obj;
              }
              let tmp57 = tmp55;
              let tmp58 = channel;
              let tmp59 = tmp56;
              let flag5 = false;
              let tmp54Result = tmp54(tmp55, channel, tmp56, false);
              tmp35 = tmp21;
              tmp36 = channel;
              tmp37 = joinTimestampResult;
              tmp38 = obj;
              tmp39 = isUnread;
              tmp40 = isTimedRelevant;
              if (!isTimedRelevant) {
                continue;
              } else {
                let tmp61 = syncTimer;
                let tmp62 = syncTimer(channel, true);
                tmp35 = tmp21;
                tmp36 = channel;
                tmp37 = joinTimestampResult;
                tmp38 = obj;
                tmp39 = isUnread;
                tmp40 = isTimedRelevant;
                // continue
              }
              continue;
            } else {
              let tmp24 = closure_19;
              let tmp25 = channel;
              let tmp26 = channel;
              let flag = false;
              let tmp23 = updateIn;
              let tmp27 = updateIn(closure_19, channel, channel, false);
              let tmp28 = store2;
              let tmp29 = closure_20;
              let tmp30 = null;
              if (store2.isForumPostUnread(channel.id)) {
                tmp30 = channel;
              }
              let tmp31 = tmp29;
              let tmp32 = channel;
              let tmp33 = tmp30;
              let flag2 = false;
              let tmp23Result = tmp23(tmp29, channel, tmp30, false);
              tmp35 = tmp21;
              tmp36 = channel;
              tmp37 = joinTimestampResult;
              tmp38 = tmp18;
              tmp39 = tmp19;
              tmp40 = tmp20;
              // continue
            }
            continue;
          }
          continue;
        }
      }
      continue;
    }
  }
}
function rebuildNewThreadCounts() {
  let closure_22 = {};
  for (const key10004 in closure_19) {
    let tmp3 = key10004;
    let tmp4 = closure_19;
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp2 = keys[tmp];
      while (tmp2 !== undefined) {
        let tmp6 = tmp2;
        let tmp7 = closure_38;
        let tmp8 = closure_38(key10004, tmp2);
        // continue
      }
    }
    continue;
  }
}
function recountChannelId(closure_23) {
  const basicChannel = store.getBasicChannel(closure_23);
  let hasItem = null != basicChannel;
  if (hasItem) {
    hasItem = set.has(basicChannel.type);
  }
  if (hasItem) {
    recountParent(basicChannel.guild_id, basicChannel.id);
  }
}
function recountParent(guild_id, id) {
  const channel = store.getChannel(id);
  if (null != channel) {
    if (channel.isForumLikeChannel()) {
      if (null == closure_22[guild_id]) {
        closure_22[guild_id] = {};
      }
      closure_22[guild_id][id] = 0;
      if (null != closure_19[guild_id]) {
        if (null != closure_19[guild_id][id]) {
          const guild = guild.getGuild(guild_id);
          if (null != guild) {
            let trackedAckMessageId = store2.getTrackedAckMessageId(id);
            if (null == trackedAckMessageId) {
              const _Date3 = Date;
              let timestamp = Date.now();
              if (null == guild.joinedAt) {
                trackedAckMessageId = importDefault(dependencyMap[13]).fromTimestamp(timestamp);
                const obj3 = importDefault(dependencyMap[13]);
              } else {
                const _Date = Date;
                const joinedAt = guild.joinedAt;
                if (guild.joinedAt instanceof Date) {
                  timestamp = joinedAt.getTime();
                } else if ("string" === typeof joinedAt) {
                  const _Date2 = Date;
                  const date = new Date(guild.joinedAt);
                  timestamp = date.getTime();
                }
              }
            }
            for (const key10046 in closure_19[arg0][arg1]) {
              let tmp29 = key10046;
              let tmp30 = closure_23;
              if (arg1 === closure_23) {
                let tmp20 = closure_12;
                if (!closure_12.isNewForumThread(key10046, arg1, guild)) {
                  continue;
                } else {
                  let tmp21 = closure_22;
                  let tmp22 = closure_22[arg0];
                  tmp22[arg1] = tmp22[arg1] + 1;
                  // continue
                }
                continue;
              } else {
                let tmp14 = closure_1;
                let tmp15 = closure_2;
                let obj4 = closure_1(closure_2[13]);
                let tmp16 = obj4.compare(key10046, trackedAckMessageId) > 0;
                if (tmp16) {
                  let tmp17 = closure_12;
                  tmp16 = !closure_12.hasOpenedThread(key10046);
                }
                if (!tmp16) {
                  continue;
                } else {
                  let tmp18 = closure_22;
                  let tmp19 = closure_22[arg0];
                  tmp19[arg1] = tmp19[arg1] + 1;
                  // continue
                }
                continue;
              }
              continue;
            }
          }
        }
      }
    }
  }
}
function updateThread(guild_id, parent_id, id) {
  let isRelevant;
  let isUnread;
  if (null == parent_id) {
    return false;
  } else {
    const channel = store.getChannel(id);
    let isTimedRelevant = closure_15.joinTimestamp(id);
    if (null != channel) {
      if (closure_14.isActive(guild_id, parent_id, id)) {
        if (null != isTimedRelevant) {
          const obj = { channel, joinTimestamp: isTimedRelevant.getTime() };
          const tmp40 = parseThreadState(channel);
          isTimedRelevant = tmp40.isTimedRelevant;
          ({ isUnread, isRelevant } = tmp40);
          updateIn(closure_17, channel, obj, true);
          let tmp47 = null;
          if (isRelevant) {
            tmp47 = obj;
          }
          updateIn(closure_21, channel, tmp47, true);
          let tmp54 = null;
          if (isUnread) {
            tmp54 = obj;
          }
          updateIn(closure_18, channel, tmp54, true);
          updateIn(closure_19, channel, null, true);
          updateIn(closure_20, channel, null, true);
          syncTimer(channel, isTimedRelevant);
          const tmp41 = updateIn;
          const tmp52 = updateIn;
        } else {
          updateIn(closure_17, channel, null, true);
          updateIn(closure_18, channel, null, true);
          updateIn(closure_21, channel, null, true);
          updateIn(closure_19, channel, channel, true);
          let tmp32 = null;
          if (isForumPostUnreadResult) {
            tmp32 = channel;
          }
          updateIn(closure_20, channel, tmp32, true);
          clearTimer(channel.id);
          const isForumPostUnreadResult = store2.isForumPostUnread(channel.id);
          const tmp76 = updateIn;
        }
        recountParent(guild_id, parent_id);
      }
    }
    deleteIn(closure_17, guild_id, parent_id, id);
    deleteIn(closure_21, guild_id, parent_id, id);
    deleteIn(closure_18, guild_id, parent_id, id);
    deleteIn(closure_19, guild_id, parent_id, id);
    deleteIn(closure_20, guild_id, parent_id, id);
    clearTimer(id);
    recountParent(guild_id, parent_id);
  }
}
function handleThreadUpdate(channel) {
  return updateThread(channel.channel.guild_id, channel.channel.parent_id, channel.channel.id);
}
function anyThreadsNSFW(guild_id, parent_id) {
  if (null == parent_id) {
    return false;
  } else {
    let tmp = null;
    if (null != closure_17[guild_id]) {
      tmp = tmp10[parent_id];
    }
    if (null != tmp) {
      for (const key10008 in tmp) {
        let tmp11 = key10008;
        let tmp12 = closure_0;
        let tmp13 = closure_2;
        let obj = closure_0(closure_2[14]);
        if (!obj.isChannelContentGated(tmp[key10008].channel)) {
          continue;
        } else {
          let flag = true;
          return true;
        }
      }
    }
    let tmp5 = null;
    if (null != closure_19[guild_id]) {
      tmp5 = tmp4[parent_id];
    }
    if (null != tmp5) {
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[14] !== undefined) {
          let tmp14 = tmp8;
          let tmp15 = parent_id;
          let tmp16 = dependencyMap;
          let obj2 = parent_id(dependencyMap[14]);
          if (!obj2.isChannelContentGated(tmp5[tmp8])) {
            continue;
          } else {
            let flag2 = true;
            return true;
          }
        }
      }
    }
    return false;
  }
}
function handleThreadMemberUpdate(id) {
  const channel = store.getChannel(id.id);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !closure_14.isActive(id.guildId, channel.parent_id, id.id);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    tmp4 = updateThread(channel.guild_id, channel.parent_id, channel.id);
  }
  return tmp4;
}
function handleReadStateChannelAction(channelId) {
  let guild_id;
  let isRelevant;
  let isUnread;
  let parent_id;
  const channel = store.getChannel(channelId.channelId);
  if (null == channel) {
    rebuildReadStates();
  } else {
    ({ guild_id, parent_id } = channel);
    if (set2.has(channel.type)) {
      if (null == parent_id) {
        return false;
      } else if (exists(closure_17, channel)) {
        const tmp21 = parseThreadState(channel);
        ({ isUnread, isRelevant } = tmp21);
        syncTimer(channel, tmp21.isTimedRelevant);
        if (isUnread === tmp26) {
          if (isRelevant === exists(closure_21, channel)) {
            return false;
          }
        }
        let tmp30 = null;
        if (isRelevant) {
          tmp30 = tmp29;
        }
        let tmp33 = null;
        if (isUnread) {
          tmp33 = tmp29;
        }
        updateIn(closure_18, channel, tmp33, true);
        updateIn(closure_21, channel, tmp30, true);
        recountParent(guild_id, parent_id);
        const tmp26 = exists(closure_18, channel);
        const tmp31 = updateIn;
      } else {
        const isForumPostUnreadResult = store2.isForumPostUnread(channel.id);
        if (isForumPostUnreadResult === tmp10) {
          return false;
        } else {
          let tmp15 = null;
          if (isForumPostUnreadResult) {
            tmp15 = channel;
          }
          updateIn(closure_20, channel, tmp15, true);
          const tmp13 = updateIn;
        }
        const tmp10 = exists(closure_20, channel);
      }
    } else {
      let tmp5;
      if (null != closure_22[guild_id]) {
        tmp5 = tmp4[channel.id];
      }
      let flag = Number(tmp5) > 0;
      if (flag) {
        recountParent(guild_id, channel.id);
        flag = true;
      }
      return flag;
    }
  }
}
function rebuildReadStates() {
  let isRelevant;
  let isTimedRelevant;
  let closure_18 = {};
  let closure_21 = {};
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp2] !== undefined) {
      let tmp52 = tmp12;
      let tmp53 = closure_17;
      let tmp20 = tmp3;
      let tmp17 = tmp4;
      let tmp18 = tmp5;
      let tmp19 = tmp6;
      let keys1 = Object.keys();
      if (keys1 === undefined) {
        continue;
      } else {
        let tmp3 = tmp20;
        let tmp13 = tmp17;
        let tmp14 = tmp18;
        let tmp15 = tmp19;
        let tmp4 = tmp17;
        let tmp5 = tmp18;
        let tmp6 = tmp19;
        let tmp16 = keys1[tmp];
        while (tmp16 !== undefined) {
          let tmp55 = tmp16;
          let tmp56 = closure_17;
          tmp20 = tmp16;
          let tmp32 = tmp17;
          isRelevant = tmp18;
          let tmp33 = tmp19;
          let keys2 = Object.keys();
          if (keys2 === undefined) {
            continue;
          } else {
            tmp17 = tmp32;
            tmp18 = isRelevant;
            tmp19 = tmp33;
            tmp20 = tmp16;
            let tmp21 = keys2[tmp4];
            while (tmp21 !== undefined) {
              let tmp58 = tmp21;
              let tmp59 = closure_17;
              let tmp60 = closure_17[tmp12][tmp16][tmp21];
              let tmp61 = parseThreadState;
              let tmp62 = parseThreadState(tmp60.channel);
              ({ isRelevant, isTimedRelevant } = tmp62);
              if (tmp62.isUnread) {
                let tmp22 = updateIn;
                let tmp23 = closure_18;
                let tmp24 = tmp60;
                let flag = false;
                let tmp25 = updateIn(closure_18, tmp60.channel, tmp60, false);
              }
              if (isRelevant) {
                let tmp26 = updateIn;
                let tmp27 = closure_21;
                let tmp28 = tmp60;
                let flag2 = false;
                let tmp29 = updateIn(closure_21, tmp60.channel, tmp60, false);
              }
              let tmp30 = syncTimer;
              let tmp31 = syncTimer(tmp60.channel, isTimedRelevant);
              tmp32 = tmp60;
              tmp33 = isTimedRelevant;
              // continue
            }
          }
          continue;
        }
      }
      continue;
    }
  }
  let closure_20 = {};
  const keys3 = Object.keys();
  if (keys3 !== undefined) {
    while (keys3[tmp12] !== undefined) {
      let tmp63 = tmp39;
      let tmp64 = closure_19;
      let tmp43 = tmp34;
      let tmp42 = tmp35;
      let keys4 = Object.keys();
      if (keys4 === undefined) {
        continue;
      } else {
        let tmp34 = tmp43;
        let tmp40 = tmp42;
        let tmp35 = tmp42;
        let tmp41 = keys4[tmp16];
        while (tmp41 !== undefined) {
          let tmp66 = tmp41;
          let tmp67 = closure_19;
          tmp43 = tmp41;
          let tmp50 = tmp42;
          let keys5 = Object.keys();
          if (keys5 === undefined) {
            continue;
          } else {
            tmp42 = tmp50;
            tmp43 = tmp41;
            let tmp44 = keys5[tmp37];
            while (tmp44 !== undefined) {
              let tmp69 = tmp44;
              let tmp70 = closure_19;
              let tmp71 = closure_19[tmp39][tmp41][tmp44];
              let tmp72 = store2;
              tmp50 = tmp71;
              if (!store2.isForumPostUnread(tmp44)) {
                continue;
              } else {
                let tmp45 = updateIn;
                let tmp46 = closure_20;
                let tmp47 = tmp71;
                let tmp48 = tmp71;
                let flag3 = false;
                let tmp49 = updateIn(closure_20, tmp71, tmp71, false);
                tmp50 = tmp71;
                // continue
              }
              continue;
            }
          }
          continue;
        }
      }
      continue;
    }
  }
  rebuildNewThreadCounts();
}
function updateSelectedChannel() {
  const channelId = store3.getChannelId();
  let closure_23 = channelId;
  if (channelId === closure_23) {
    return false;
  } else {
    recountChannelId(tmp);
    recountChannelId(closure_23);
  }
  const tmp = closure_23;
}
function parseThreadState(channel) {
  const tmp = store2.getMentionCount(channel.id) > 0;
  let hasUnreadResult = store2.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = !closure_15.isMuted(channel.id);
  }
  const hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  let isActiveThreadResult = channel.isActiveThread();
  let tmp6 = isActiveThreadResult;
  if (isActiveThreadResult) {
    const _Date = Date;
    tmp6 = importDefault(dependencyMap[15])(channel) > Date.now();
    const tmp9 = importDefault(dependencyMap[15])(channel);
  }
  const obj = {};
  if (!isActiveThreadResult) {
    isActiveThreadResult = hasFlagResult;
  }
  if (isActiveThreadResult) {
    isActiveThreadResult = hasUnreadResult;
  }
  if (!isActiveThreadResult) {
    isActiveThreadResult = tmp;
  }
  obj.isUnread = isActiveThreadResult;
  let tmp12 = tmp6;
  if (!tmp6) {
    tmp12 = hasFlagResult;
  }
  if (!tmp12) {
    tmp12 = hasUnreadResult;
  }
  if (!tmp12) {
    tmp12 = tmp;
  }
  if (!tmp12) {
    tmp12 = tmp11;
  }
  obj.isRelevant = tmp12;
  obj.isTimedRelevant = tmp6;
  return obj;
}
function syncTimer(channel, isTimedRelevant) {
  clearTimer(channel.id);
  if (isTimedRelevant) {
    function setTimer(channel_id, mute_config, arg2) {
      closure_24[channel_id.id] = setTimeout(() => {
        const channel = channel.getChannel(arg0.id);
        if (null != channel) {
          let obj = callback(closure_2[16]);
          obj = { type: "THREAD_UPDATE", channel };
          obj.dispatch(obj);
        }
      }, callback(closure_2[15])(channel_id) - Date.now() + 1);
    }(channel);
  }
}
function clearTimer(id) {
  if (id in closure_24) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_24[id]);
    delete r0[r1];
  }
}
function updateIn(closure_17, channel, channel2, arg3) {
  let guild_id;
  let id;
  let parent_id;
  ({ guild_id, parent_id, id } = channel);
  if (tmp) {
    if (!(guild_id in closure_17)) {
      closure_17[guild_id] = {};
    }
    if (!(parent_id in closure_17[guild_id])) {
      closure_17[guild_id][parent_id] = {};
    }
    if (arg3) {
      let obj = {};
      const merged = Object.assign(closure_17[guild_id]);
      obj = {};
      const merged1 = Object.assign(closure_17[guild_id][parent_id]);
      obj[parent_id] = obj;
      closure_17[guild_id] = obj;
    }
    if (null === channel2) {
      delete r3[r4];
      if (obj3.isEmpty(closure_17[guild_id][parent_id])) {
        delete r0[r1];
      }
      const obj3 = importDefault(dependencyMap[17]);
    } else {
      closure_17[guild_id][parent_id][id] = channel2;
    }
  }
}
function deleteIn(closure_17, guild_id, parent_id, id) {
  let tmp = null != guild_id && null != parent_id && null != id;
  if (tmp) {
    tmp = existsIn(closure_17, guild_id, parent_id, id);
  }
  if (tmp) {
    let obj = {};
    const merged = Object.assign(closure_17[guild_id]);
    obj = {};
    const merged1 = Object.assign(closure_17[guild_id][parent_id]);
    obj[parent_id] = obj;
    closure_17[guild_id] = obj;
    delete r3[r4];
    if (obj3.isEmpty(closure_17[guild_id][parent_id])) {
      delete r0[r1];
    }
    const obj3 = importDefault(dependencyMap[17]);
  }
}
function exists(closure_17, guild_id) {
  return existsIn(closure_17, guild_id.guild_id, guild_id.parent_id, guild_id.id);
}
function existsIn(closure_17, guild_id, parent_id, id) {
  let tmp = guild_id in closure_17 && parent_id in closure_17[guild_id];
  if (tmp) {
    tmp = id in closure_17[guild_id][parent_id];
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ THREADED_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
const ChannelFlags = arg1(dependencyMap[12]).ChannelFlags;
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let closure_23 = null;
let closure_24 = {};
let obj = {};
let closure_26 = {};
let closure_27 = {};
let closure_28 = {};
let closure_29 = {};
let tmp3 = (Store) => {
  class ActiveJoinedThreadsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ActiveJoinedThreadsStore);
      obj = closure_6(ActiveJoinedThreadsStore);
      tmp2 = closure_5;
      if (closure_30()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ActiveJoinedThreadsStore;
  callback2(ActiveJoinedThreadsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_14, closure_10, closure_11, closure_15, closure_12, closure_13);
      const items = [closure_13];
      this.syncWith(items, closure_43);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasActiveJoinedUnreadThreads",
    value(arg0, arg1) {
      let tmp = arg0 in closure_18;
      if (tmp) {
        tmp = arg1 in closure_18[arg0];
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveUnjoinedThreadsForParent",
    value(arg0, arg1) {
      if (!(arg0 in closure_19)) {
        const tmp3 = closure_28;
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getActiveJoinedThreadsForParent",
    value(arg0, arg1) {
      if (!(arg0 in closure_17)) {
        const tmp3 = closure_27;
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "getAllActiveJoinedThreads",
    value() {
      return closure_17;
    }
  };
  items[5] = {
    key: "getActiveJoinedThreadsForGuild",
    value(arg0) {
      let tmp = closure_17[arg0];
      if (null == tmp) {
        tmp = closure_25;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getActiveJoinedUnreadThreadsForGuild",
    value(arg0) {
      let tmp = closure_18[arg0];
      if (null == tmp) {
        tmp = closure_25;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "getActiveJoinedUnreadThreadsForParent",
    value(arg0, arg1) {
      let tmp = this.getActiveJoinedUnreadThreadsForGuild(arg0)[arg1];
      if (null == tmp) {
        tmp = closure_27;
      }
      return tmp;
    }
  };
  items[8] = {
    key: "getActiveJoinedRelevantThreadsForGuild",
    value(arg0) {
      let tmp = closure_21[arg0];
      if (null == tmp) {
        tmp = closure_25;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "getActiveJoinedRelevantThreadsForParent",
    value(arg0, arg1) {
      let tmp = this.getActiveJoinedRelevantThreadsForGuild(arg0)[arg1];
      if (null == tmp) {
        tmp = closure_27;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "getActiveUnjoinedThreadsForGuild",
    value(arg0) {
      let tmp = closure_19[arg0];
      if (null == tmp) {
        tmp = closure_26;
      }
      return tmp;
    }
  };
  items[11] = {
    key: "getActiveUnjoinedUnreadThreadsForGuild",
    value(arg0) {
      let tmp = closure_20[arg0];
      if (null == tmp) {
        tmp = closure_25;
      }
      return tmp;
    }
  };
  items[12] = {
    key: "getActiveUnjoinedUnreadThreadsForParent",
    value(arg0, arg1) {
      let tmp = this.getActiveUnjoinedUnreadThreadsForGuild(arg0)[arg1];
      if (null == tmp) {
        tmp = closure_27;
      }
      return tmp;
    }
  };
  items[13] = {
    key: "getNewThreadCountsForGuild",
    value(arg0) {
      let tmp = closure_22[arg0];
      if (null == tmp) {
        tmp = closure_29;
      }
      return tmp;
    }
  };
  items[14] = {
    key: "computeAllActiveJoinedThreads",
    value(arg0) {
      const items = [];
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp2] !== undefined) {
          let tmp12 = tmp6;
          if (tmp6 === arg0) {
            let tmp8 = tmp3;
            let tmp7 = closure_17;
            let keys1 = Object.keys();
            if (keys1 === undefined) {
              continue;
            } else {
              let tmp3 = tmp8;
              let tmp10 = keys1[tmp];
              while (tmp10 !== undefined) {
                let tmp13 = tmp10;
                let tmp14 = closure_17;
                tmp8 = tmp10;
                let keys2 = Object.keys();
                if (keys2 === undefined) {
                  continue;
                } else {
                  tmp8 = tmp10;
                  let tmp11 = keys2[tmp7];
                  while (tmp11 !== undefined) {
                    let tmp16 = tmp11;
                    let tmp17 = closure_17;
                    let arr = items.push(closure_17[tmp6][tmp10][tmp11].channel);
                    // continue
                  }
                }
                continue;
              }
            }
            continue;
          }
          continue;
        }
      }
      return items;
    }
  };
  items[15] = {
    key: "getNewThreadCount",
    value(arg0, arg1) {
      let tmp2;
      if (null != closure_22[arg0]) {
        tmp2 = tmp[arg1];
      }
      let num = 0;
      if (null != tmp2) {
        num = tmp2;
      }
      return num;
    }
  };
  items[16] = {
    key: "getActiveThreadCount",
    value(arg0, arg1) {
      let obj = callback(closure_2[17]);
      obj = undefined;
      if (null != closure_17[arg0]) {
        obj = tmp[arg1];
      }
      if (null == obj) {
        obj = {};
      }
      const sizeResult = obj.size(obj);
      obj = undefined;
      if (null != closure_19[arg0]) {
        obj = tmp3[arg1];
      }
      if (null == obj) {
        obj = {};
      }
      return sizeResult + callback(closure_2[17]).size(obj);
    }
  };
  return callback(ActiveJoinedThreadsStore, items);
}(importDefault(dependencyMap[18]).Store);
tmp3.displayName = "ActiveJoinedThreadsStore";
obj = {
  CONNECTION_OPEN: rebuild,
  OVERLAY_INITIALIZE: rebuild,
  THREAD_LIST_SYNC: function handleThreadListSync(guildId) {
    rebuildGuild(guildId.guildId);
  },
  LOAD_THREADS_SUCCESS: rebuild,
  LOAD_ARCHIVED_THREADS_SUCCESS: rebuild,
  SEARCH_MESSAGES_SUCCESS: rebuild,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: rebuild,
  GUILD_CREATE: function handleGuildCreate(guild) {
    rebuildGuild(guild.guild.id);
  },
  GUILD_DELETE: rebuild,
  CURRENT_USER_UPDATE: rebuild,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    const channel = store.getChannel(channelId.channelId);
    if (null != channel) {
      if (channel.isThread()) {
        updateThread(channel.guild_id, channel.parent_id, channel.id);
      }
    }
    return false;
  },
  THREAD_CREATE: handleThreadUpdate,
  THREAD_UPDATE: handleThreadUpdate,
  THREAD_DELETE: handleThreadUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      const value = iter.value;
      const result = arg1(dependencyMap[14]).isChannelContentGated(value);
      while (result === anyThreadsNSFW(value.guild_id, value.parent_id)) {
        let iter2 = tmp();
        iter = iter2;
      }
      rebuild();
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let flag = false;
    if (tmp) {
      let tmp3 = channel.guild_id in closure_17;
      if (tmp3) {
        tmp3 = channel.parent_id in closure_17[channel.guild_id];
      }
      let flag2 = false;
      if (tmp3) {
        const parent_id = channel.parent_id;
        delete r5[r4];
        flag2 = true;
      }
      let tmp8 = channel.guild_id in closure_18;
      if (tmp8) {
        tmp8 = channel.parent_id in closure_18[channel.guild_id];
      }
      if (tmp8) {
        const parent_id2 = channel.parent_id;
        delete r5[r4];
        flag2 = true;
      }
      let tmp13 = channel.guild_id in closure_21;
      if (tmp13) {
        tmp13 = channel.parent_id in closure_21[channel.guild_id];
      }
      if (tmp13) {
        const keys = importDefault(dependencyMap[13]).keys(closure_21[channel.guild_id][channel.parent_id]);
        const item = keys.forEach(clearTimer);
        const parent_id3 = channel.parent_id;
        delete r5[r4];
        flag2 = true;
        const obj = importDefault(dependencyMap[13]);
      }
      let tmp23 = channel.guild_id in closure_19;
      if (tmp23) {
        tmp23 = channel.parent_id in closure_19[channel.guild_id];
      }
      if (tmp23) {
        const parent_id4 = channel.parent_id;
        delete r5[r4];
        flag2 = true;
      }
      let tmp28 = channel.guild_id in closure_20;
      if (tmp28) {
        tmp28 = channel.parent_id in closure_20[channel.guild_id];
      }
      if (tmp28) {
        const parent_id5 = channel.parent_id;
        delete r5[r4];
        flag2 = true;
      }
      flag = flag2;
      if (flag2) {
        recountParent(channel.guild_id, channel.parent_id);
        flag = flag2;
      }
    }
    return flag;
  },
  THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  THREAD_MEMBERS_UPDATE: handleThreadMemberUpdate,
  LOAD_MESSAGES_SUCCESS: handleReadStateChannelAction,
  MESSAGE_CREATE: handleReadStateChannelAction,
  MESSAGE_DELETE: handleReadStateChannelAction,
  MESSAGE_DELETE_BULK: handleReadStateChannelAction,
  MESSAGE_ACK: handleReadStateChannelAction,
  CHANNEL_ACK: handleReadStateChannelAction,
  CHANNEL_LOCAL_ACK: handleReadStateChannelAction,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    handleReadStateChannelAction(channelId);
    updateSelectedChannel();
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(channels) {
    if (channels.channels.length > 0) {
      rebuildGuild(channels.guildId);
    }
  },
  WINDOW_FOCUS: rebuildReadStates,
  UPDATE_CHANNEL_DIMENSIONS: function handleUpdateChannelDimensions(channelId) {
    const channel = store.getChannel(channelId.channelId);
    const tmp = null == channel || !channel.isThread();
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = updateThread(channel.guild_id, channel.parent_id, channel.id);
    }
    return tmp2;
  },
  TRY_ACK: rebuildReadStates,
  BULK_ACK: rebuildReadStates
};
tmp3 = new tmp3(importDefault(dependencyMap[16]), obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/threads/ActiveJoinedThreadsStore.tsx");

export default tmp3;
export const NO_GUILD_JOINED_THREADS = obj;
