// Module ID: 4138
// Function ID: 34457
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4138 (_isNativeReflectConstruct)
let BasicPermissions;
let OverlayWidgets;
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
function generateOldThreadCutoff() {
  return importDefault(dependencyMap[42]).fromTimestamp(Date.now() - closure_74);
}
function setDecayedReadStateTimer() {
  const timestamp = Date.now();
  let closure_75 = timestamp - 7 * importDefault(dependencyMap[43]).Millis.DAY;
  const timestamp1 = Date.now();
  let closure_76 = timestamp1 - 3 * importDefault(dependencyMap[43]).Millis.DAY;
  clearTimeout(timeout);
  const timeout = setTimeout(() => {
    callback(closure_2[44]).dispatch({ type: "DECAY_READ_STATES" });
  }, importDefault(dependencyMap[43]).Millis.HOUR);
}
function parseTimestamp(arg0) {
  if (null == arg0) {
    return 0;
  } else {
    const _Date = Date;
    const parsed = Date.parse(arg0);
    const _isNaN = isNaN;
    let num = 0;
    if (!isNaN(parsed)) {
      num = parsed;
    }
    return num;
  }
}
function shouldBadgeMessage(channel_id, id) {
  const channel = store3.getChannel(channel_id.channel_id);
  let tmp2 = null != channel;
  if (tmp2) {
    let tmp4 = !closure_36.isBlockedOrIgnoredForMessage(channel_id);
    if (tmp4) {
      const obj = { message: channel_id, userId: id.id, suppressEveryone: closure_38.isSuppressEveryoneEnabled(channel.guild_id), suppressRoles: closure_38.isSuppressRolesEnabled(channel.guild_id) };
      const tmp11 = !importDefault(dependencyMap[45])(obj);
      let tmp12 = !tmp11;
      if (tmp11) {
        tmp12 = isNonMutedPrivateMessage(channel);
      }
      tmp4 = tmp12;
      const tmp7 = importDefault(dependencyMap[45]);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function isNonMutedPrivateMessage(channel) {
  let tmp = null != channel && channel.isPrivate();
  if (tmp) {
    tmp = !closure_38.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
  }
  return tmp;
}
function processBulkAckQueue() {
  return _processBulkAckQueue(...arguments);
}
async function _processBulkAckQueue(arg0, arg1) {
  let callback;
  if (0 === arr.length) {
    let closure_71 = false;
    if (null != arg0) {
      arg0();
    }
  } else {
    closure_71 = true;
    callback = arr.splice(0, 100);
    yield closure_1(closure_2[46])(() => {
      const HTTP = callback(closure_2[47]).HTTP;
      let obj = { url: constants.BULK_ACK, body: obj, oldFormErrors: true, rejectWithError: false };
      obj = { read_states: callback };
      return HTTP.post(obj);
    });
    yield callback(closure_2[48]).timeoutPromise(1000);
    callback2(arg0);
  }
}
function isOverlayAckable(arg0, channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isOverlayChannelVisible(channelId);
  }
  return tmp;
}
function staffLog(channelId, arg1) {
  const currentUser = authStore.getCurrentUser();
  if (tmp) {
    importDefaultResult1.log("STAFF-ACK-LOG:", arg1, channelId.channelId);
  }
}
function shouldAutomaticallyAck(value, timestamp) {
  staffLog(value, "shouldAutomaticallyAck called");
  if (value.type !== ReadStateTypes.CHANNEL) {
    staffLog(value, "not channel read state");
    return false;
  } else {
    const channel = store3.getChannel(value.channelId);
    const tmp2 = null != channel && channel.isForumPost();
    if (null != store.getConnectedActivityLocation()) {
      if (store.getActivityPanelMode() === constants12.PANEL) {
        if (store.getFocusedLayout() === constants13.NO_CHAT) {
          staffLog(value, "In activity");
          return false;
        }
      }
    }
    if (idle.isIdle()) {
      staffLog(value, "Is idle");
      return false;
    } else if (value.canTrackUnreads()) {
      let isForumLikeChannelResult;
      if (null != channel) {
        isForumLikeChannelResult = channel.isForumLikeChannel();
      }
      if (true !== isForumLikeChannelResult) {
        if (obj.getState() !== constants11.ACTIVE) {
          staffLog(value, "App not active");
          return false;
        }
        const obj = importDefault(dependencyMap[49]);
      }
      if (tmp2) {
        if (!value._persisted) {
          staffLog(value, "unpersisted forum post");
          return true;
        }
      }
      if (value.hasUnreadOrMentions()) {
        let isForumLikeChannelResult1;
        if (null != channel) {
          isForumLikeChannelResult1 = channel.isForumLikeChannel();
        }
        if (true === isForumLikeChannelResult1) {
          staffLog(value, "Forum-like channel");
          return false;
        } else {
          if (!tmp2) {
            if (!atBottom.isAtBottom(value.channelId)) {
              staffLog(value, "Not at bottom");
              return false;
            }
          }
          const layout = uiStore.getLayout(value.channelId);
          if (!uiStore.getChatOpen(value.channelId)) {
            staffLog(value, "Fullscreen video");
            return false;
          }
          const messages = store4.getMessages(value.channelId);
          if (null != messages) {
            if (messages.ready) {
              if (!messages.loadingMore) {
                if (obj2.isChannelFocusedForReadStateAck(value.channelId, timestamp)) {
                  tmp35(value, "Acked");
                  let flag6 = true;
                } else {
                  tmp35(value, "Chat not focused");
                  flag6 = false;
                }
                const obj2 = timestamp(dependencyMap[50]);
              }
              return flag6;
            }
          }
          staffLog(value, "Still loading messages");
          flag6 = false;
        }
      } else {
        staffLog(value, "No unread or mentions");
        return false;
      }
    } else {
      staffLog(value, "Cannot track unreads");
      return false;
    }
  }
}
function mergeChannels(initialPrivateChannels) {
  const item = initialPrivateChannels.forEach((type) => {
    if (callback(type.type)) {
      const value = closure_79.get(type.id);
      ({ guild_id: obj._guildId, lastMessageId: obj.lastMessageId } = type);
      value.lastPinTimestamp = callback2(type.lastPinTimestamp);
      value._isResourceChannel = type.hasFlag(constants.IS_GUILD_RESOURCE_CHANNEL);
      if (set.has(type.type)) {
        value.syncThreadSettings();
      }
    }
  });
}
function mergeServerChannels(mapped) {
  const item = mapped.forEach((type) => {
    if (callback2(type.type)) {
      const value = closure_79.get(type.id);
      value.lastMessageId = type.last_message_id;
      value.lastPinTimestamp = callback3(type.last_pin_timestamp);
      const flags = type.flags;
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      value._isResourceChannel = callback(closure_2[57]).hasFlag(num2, constants.IS_GUILD_RESOURCE_CHANNEL);
      if (set.has(type.type)) {
        value.syncThreadSettings();
      }
      const obj2 = callback(closure_2[57]);
    }
  });
}
function mergeForGuild(guild) {
  function mergeActiveJoinedThreads(threads) {
    threads = threads.threads;
    if (null != threads) {
      const item = threads.forEach((type) => {
        if (set.has(type.type)) {
          const value = closure_79.get(type.id);
          value.lastMessageId = type.lastMessageId;
          value.lastPinTimestamp = callback2(type.lastPinTimestamp);
          value._isThread = true;
          value._isActiveThread = true;
          value._isJoinedThread = null != type.member;
          if (null == value.ackMessageId) {
            value.ackMessageId = callback(closure_2[42]).fromTimestamp(callback3(type.id, type.id));
            const obj = callback(closure_2[42]);
          }
          if (null == value.ackPinTimestamp) {
            value.ackPinTimestamp = callback3(type.id, type.id);
          }
        }
      });
    }
  }(guild);
  function mergeGuildEvents(guild_scheduled_events) {
    const prop = guild_scheduled_events.guild_scheduled_events;
    let length;
    if (null != prop) {
      length = prop.length;
    }
    const value = store.get(guild_scheduled_events.id, constants.GUILD_EVENT);
    value._guildId = guild_scheduled_events.id;
    let closure_0 = 0;
    const callback = null;
    let _ackMessageId = value._ackMessageId;
    if (null == _ackMessageId) {
      _ackMessageId = callback(_ackMessageId[42]).fromTimestamp(value.getAckTimestamp());
      const obj2 = callback(_ackMessageId[42]);
    }
    const prop1 = guild_scheduled_events.guild_scheduled_events;
    const item = prop1.forEach((id) => {
      if (obj.compare(id.id, _null) > 0) {
        const _null = id.id;
      }
      const obj = _null(_ackMessageId[42]);
      if (obj2.compare(id.id, _ackMessageId) > 0) {
        closure_0 = closure_0 + 1;
      }
    });
    value.lastMessageId = callback;
    value.mentionCount = closure_0;
  }(guild);
  let value = tmp10.get(guild.id, ReadStateTypes.GUILD_HOME);
  const obj = importDefault(dependencyMap[42]);
  const tmp4 = importDefault(dependencyMap[58]);
  const tmp4Result = importDefault(dependencyMap[58])(Date.now());
  value.lastMessageId = obj.fromTimestamp(importDefault(dependencyMap[58])(Date.now()).subtract(24, "h").valueOf());
  guild = guild.getGuild(guild.id);
  if (null != guild) {
    let prop;
    if (null != guild) {
      prop = guild.latestOnboardingQuestionId;
    }
    if (null != prop) {
      value = tmp10.get(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
      value._guildId = guild.id;
      value.lastMessageId = prop;
    }
  }
}
function mergeRelationships(relationships) {
  function mergeNotificationCenter(arr) {
    const currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      let closure_0 = closure_79.get(currentUser.id, constants.NOTIFICATION_CENTER);
      const item = arr.forEach((since) => {
        if (null != since.since) {
          if (since.type === constants.PENDING_INCOMING) {
            const _Date = Date;
            const date = new Date(since.since);
            const time = date.getTime();
            let num2 = 0;
            if (null != closure_0.ackMessageId) {
              num2 = callback(closure_2[42]).extractTimestamp(closure_0.ackMessageId);
              const obj = callback(closure_2[42]);
            }
            if (num2 < time) {
              closure_0.mentionCount = closure_0.mentionCount + 1;
              closure_0.lastMessageId = callback(closure_2[42]).fromTimestamp(time);
              const obj2 = callback(closure_2[42]);
            }
          }
        }
      });
    }
  }(relationships);
}
function getThreadAckMessageTimestamp(arg0, channelId) {
  const channel = store3.getChannel(channelId);
  if (null == arg0) {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
  }
  if (null == channel) {
    let num = getGuildJoinedAtTime(tmp3);
  } else {
    num = 0;
  }
  const joinTimestampResult = closure_20.joinTimestamp(channelId);
  let time;
  if (null != joinTimestampResult) {
    time = joinTimestampResult.getTime();
  }
  let num2 = 0;
  if (null != time) {
    num2 = time;
  }
  let num3 = num2 - 5000;
  if (isNaN(num3)) {
    num3 = -5000;
  }
  let archiveTimestamp;
  if (null != channel) {
    const threadMetadata = channel.threadMetadata;
    if (null != threadMetadata) {
      archiveTimestamp = threadMetadata.archiveTimestamp;
    }
  }
  let num4 = 0;
  if (null != archiveTimestamp) {
    const _Date = Date;
    const date = new Date(archiveTimestamp);
    num4 = date.getTime() - 1;
  }
  let num6 = num4;
  if (isNaN(num4)) {
    num6 = 0;
  }
  let num7 = Math.max(num3, num6);
  if (num7 <= 0) {
    num7 = importDefault(dependencyMap[42]).extractTimestamp(channelId) - 1;
    const obj4 = importDefault(dependencyMap[42]);
  }
  if (tmp13) {
    num7 = 0;
  }
  let bound = num7;
  if (!isNaN(num)) {
    const _Math = Math;
    bound = Math.max(num, num7);
  }
  return bound;
}
function getGuildJoinedAtTime(joinedAt) {
  if (null != joinedAt) {
    if (null != joinedAt.joinedAt) {
      const _Date2 = Date;
      joinedAt = joinedAt.joinedAt;
      if (joinedAt.joinedAt instanceof Date) {
        const time = joinedAt.getTime();
        const _isNaN3 = isNaN;
        if (!isNaN(time)) {
          return time;
        }
      } else if ("string" === typeof joinedAt) {
        const _Date = Date;
        const date = new Date(joinedAt.joinedAt);
        const time1 = date.getTime();
        const _isNaN2 = isNaN;
        if (!isNaN(time1)) {
          return time1;
        }
      } else if ("number" === typeof joinedAt.joinedAt) {
        const _isNaN = isNaN;
        if (!isNaN(joinedAt.joinedAt)) {
          return joinedAt.joinedAt;
        }
      }
    }
  }
  return Date.now();
}
function isOldReadState(mentionCount) {
  let tmp = mentionCount.mentionCount > 0;
  if (!tmp) {
    const tmp4 = importDefault(dependencyMap[42]).compare(mentionCount.channelId, arg1) > 0;
    let tmp5 = !tmp4;
    if (!tmp4) {
      let tmp7 = null != mentionCount._ackMessageId;
      if (tmp7) {
        tmp7 = importDefault(dependencyMap[42]).compare(mentionCount._ackMessageId, arg1) > 0;
        const obj2 = importDefault(dependencyMap[42]);
      }
      let tmp10 = !tmp7;
      if (!tmp7) {
        let tmp11 = null != mentionCount._lastMessageId;
        if (tmp11) {
          tmp11 = importDefault(dependencyMap[42]).compare(mentionCount._lastMessageId, arg1) > 0;
          const obj3 = importDefault(dependencyMap[42]);
        }
        tmp10 = !tmp11;
      }
      tmp5 = tmp10;
    }
    tmp = tmp5;
    const obj = importDefault(dependencyMap[42]);
  }
  return tmp;
}
function tryAck(location, channelId, timestamp) {
  if (null == channelId) {
    return false;
  } else {
    const value = tmp10.get(channelId);
    const tmp4 = shouldAutomaticallyAck(value, timestamp);
    let ackResult = tmp4;
    if (tmp4) {
      const obj = { trackAnalytics: true, location };
      ackResult = value.ack(obj);
    }
    return ackResult;
  }
}
function tryAckParentForumChannel(arg0) {
  if (null != arg0) {
    let value = tmp10.get(arg0);
    if (value.type === ReadStateTypes.CHANNEL) {
      const channel = store3.getChannel(value.channelId);
      if (null != channel) {
        if (channel.isForumPost()) {
          if (null != channel.parent_id) {
            const parent_id = channel.parent_id;
            value = tmp10.get(parent_id);
            const arg1 = value;
            let hasLoadedResult = closure_19.hasLoaded(channel.guild_id);
            if (hasLoadedResult) {
              let obj = importDefault(dependencyMap[42]);
              const keys = obj.keys(closure_19.getThreadsForParent(channel.guild_id, parent_id));
              hasLoadedResult = keys.every((arg0) => {
                let hasOpenedThreadResult = closure_81.hasOpenedThread(arg0);
                if (!hasOpenedThreadResult) {
                  hasOpenedThreadResult = callback(closure_2[42]).compare(arg0, value.ackMessageId) < 0;
                  const obj = callback(closure_2[42]);
                }
                return hasOpenedThreadResult;
              });
            }
            if (hasLoadedResult) {
              obj = { trackAnalytics: true };
              obj = { section: constants3.CHANNEL, object: constants2.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS, objectType: constants.ACK_AUTOMATIC };
              obj.location = obj;
              value.ack(obj);
            }
          }
        }
      }
    }
  }
}
function clearDeleteOldReadStatesTimer() {
  if (null != closure_72) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_72);
  }
}
function mergeChannelTimestampUpdates(channelTimestampUpdates) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(channelTimestampUpdates);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_79;
      value = closure_79.get(value.id);
      if (null != value.last_message_id) {
        value.lastMessageId = value.last_message_id;
      }
      if (null != value.last_pin_timestamp) {
        let tmp4 = closure_87;
        value.lastPinTimestamp = closure_87(value.last_pin_timestamp);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleMessageDelete(channelId) {
  const value = tmp10.get(channelId.channelId);
  value.rebuildChannelState();
}
function handleLoadArchivedThreadsSuccess(threads) {
  mergeServerChannels(threads.threads);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  const item = data.forEach((arg0) => {
    let messages;
    let threads;
    ({ messages, threads } = arg0);
    const item = messages.forEach((arr) => {
      const mapped = arr.map((thread) => thread.thread);
      callback2(mapped.filter(callback(closure_2[60]).isNotNullish));
    });
    callback(threads);
  });
}
function currentUserIsEventCreator(guildScheduledEvent) {
  const currentUser = authStore.getCurrentUser();
  return null != guildScheduledEvent.creator_id && null != currentUser && guildScheduledEvent.creator_id === currentUser.id;
}
function handleChannelDelete(channel) {
  return tmp10.clear(channel.channel.id);
}
function handleChannelSectionStoreUpdate() {
  const currentSidebarChannelId = store2.getCurrentSidebarChannelId(closure_66);
  if (closure_67 !== currentSidebarChannelId) {
    let tmp6 = clearOldestUnreadMessageId(closure_67);
    closure_67 = currentSidebarChannelId;
  } else {
    const obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SECTION_STORE_UPDATE, objectType: constants.ACK_AUTOMATIC };
    tmp6 = tryAck(obj, currentSidebarChannelId) || false;
  }
  return tmp6;
}
function clearManualAck(closure_66) {
  if (null != closure_66) {
    tmp10.get(closure_66).isManualAck = false;
  }
}
function clearOldestUnreadMessageId(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const value = tmp10.get(arg0);
    let flag = !value.hasUnread();
    if (flag) {
      value.oldestUnreadMessageId = null;
      flag = true;
    }
    return flag;
  }
}
function handleMessageAck(messageId) {
  let manual;
  let newMentionCount;
  messageId = messageId.messageId;
  ({ manual, newMentionCount } = messageId);
  const value = tmp10.get(messageId.channelId);
  if (manual) {
    value.rebuildChannelState(messageId, true, newMentionCount);
    value.clearOutgoingAck();
    let flag = true;
  } else {
    flag = messageId !== value._ackMessageId;
    if (flag) {
      const obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, messageId };
      flag = value.ack(obj);
    }
  }
  return flag;
}
function handleGuildFeatureAck(id) {
  return handleNonChannelAck(id.id, id.ackType, id.ackedId, id.local);
}
function handleNonChannelAck(id, NOTIFICATION_CENTER, ackedId, local) {
  let lastMessageId = ackedId;
  const value = tmp10.get(id, NOTIFICATION_CENTER);
  let tmp = ackedId !== value.ackMessageId && value.lastMessageId !== value.ackMessageId;
  if (tmp) {
    let ackResult = null != value.lastMessageId;
    if (!ackResult) {
      ackResult = 0 !== value.mentionCount;
    }
    if (ackResult) {
      if (null == lastMessageId) {
        lastMessageId = value.lastMessageId;
      }
      if (null == lastMessageId) {
        lastMessageId = importDefault(dependencyMap[42]).fromTimestamp(value.getAckTimestamp());
        const obj2 = importDefault(dependencyMap[42]);
      }
      const obj = { messageId: lastMessageId };
      let tmp6 = null == local;
      if (!tmp6) {
        tmp6 = local;
      }
      obj.local = tmp6;
      obj.trackAnalytics = false;
      ackResult = value.ack(obj);
    }
    tmp = ackResult;
  }
  return tmp;
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
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const isEventUpcoming = arg1(dependencyMap[11]).isEventUpcoming;
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
let closure_21 = importDefault(dependencyMap[17]);
({ isReadableType: closure_22, isThread: closure_23, isPrivate: closure_24, ALL_CHANNEL_TYPES: closure_25, THREAD_CHANNEL_TYPES: closure_26 } = arg1(dependencyMap[18]));
let closure_27 = importDefault(dependencyMap[19]);
let closure_28 = importDefault(dependencyMap[20]);
let closure_29 = importDefault(dependencyMap[21]);
let closure_30 = importDefault(dependencyMap[22]);
let closure_31 = importDefault(dependencyMap[23]);
let closure_32 = importDefault(dependencyMap[24]);
let closure_33 = importDefault(dependencyMap[25]);
let closure_34 = importDefault(dependencyMap[26]);
let closure_35 = importDefault(dependencyMap[27]);
let closure_36 = importDefault(dependencyMap[28]);
const importDefaultResult = importDefault(dependencyMap[29]);
let closure_38 = importDefault(dependencyMap[30]);
let closure_39 = importDefault(dependencyMap[31]);
let closure_40 = importDefault(dependencyMap[32]);
const tmp3 = arg1(dependencyMap[33]);
({ AnalyticsObjectTypes: closure_41, AnalyticsObjects: closure_42, AnalyticsSections: closure_43, Endpoints: closure_44, ChannelLayouts: closure_45, OverlayWidgets, CURRENT_APP_CONTEXT: closure_46, ChannelTypes: closure_47, BasicPermissions } = tmp3);
({ Permissions: closure_49, MessageTypes: closure_50, RelationshipTypes: closure_51, ChannelTypesSets: closure_52, UserNotificationSettings: closure_53, MessageTypesSets: closure_54, AppStates: closure_55 } = tmp3);
const tmp2 = arg1(dependencyMap[18]);
({ ActivityPanelModes: closure_56, FocusedActivityLayouts: closure_57 } = arg1(dependencyMap[34]));
const tmp4 = arg1(dependencyMap[34]);
({ ChannelFlags: closure_58, isStaticChannelRoute: closure_59 } = arg1(dependencyMap[35]));
const GuildScheduledEventStatus = arg1(dependencyMap[36]).GuildScheduledEventStatus;
const ReadStateTypes = arg1(dependencyMap[37]).ReadStateTypes;
const ThreadMemberFlags = arg1(dependencyMap[38]).ThreadMemberFlags;
let importDefaultResult1 = importDefault(dependencyMap[39]);
importDefaultResult1 = new importDefaultResult1("ReadStateStore");
function isOverlayChannelVisible() {
  return false;
}
if (arg1(dependencyMap[40]).OVERLAY_SUPPORTED) {
  isOverlayChannelVisible = arg1(dependencyMap[41]).isOverlayChannelVisible;
}
let closure_65 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const channelId = importDefaultResult.getChannelId();
let closure_67 = null;
let closure_68 = null;
let closure_69 = false;
let closure_70 = [];
let closure_71 = false;
let closure_72 = null;
let tmp8 = () => {
  class AutoAckableChannelTracker {
    constructor() {
      tmp = closure_8(this, AutoAckableChannelTracker);
      this.channelWindowIds = {};
      return;
    }
  }
  const arg1 = AutoAckableChannelTracker;
  let obj = {
    key: "addWindowId",
    value(arg0, arg1) {
      const self = this;
      if (null == this.channelWindowIds[arg0]) {
        const _Set = Set;
        const set = new Set();
        self.channelWindowIds[arg0] = set;
      }
      self.channelWindowIds[arg0].add(arg1);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "hasWindowId",
    value(arg0, arg1) {
      let hasItem = null != this.channelWindowIds[arg0];
      if (hasItem) {
        hasItem = this.channelWindowIds[arg0].has(arg1);
        const obj = this.channelWindowIds[arg0];
      }
      return hasItem;
    }
  };
  items[1] = obj;
  obj = {
    key: "isChannelAckable",
    value(arg0) {
      let tmp = null != this.channelWindowIds[arg0];
      if (tmp) {
        tmp = this.channelWindowIds[arg0].size > 0;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAllWindowIds",
    value(arg0) {
      if (null == this.channelWindowIds[arg0]) {
        let items = [];
      } else {
        const _Array = Array;
        items = Array.from(tmp.channelWindowIds[arg0]);
      }
      return items;
    }
  };
  items[4] = {
    key: "getAllChannelIdsForWindowId",
    value(arg0) {
      let iter2;
      let obj3;
      let tmp4;
      const set = new Set();
      const tmp = callback3(callback(closure_2[42]).entries(this.channelWindowIds));
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_7;
          let tmp3 = closure_7(iter.value, 2);
          [tmp4, obj3] = tmp3;
          if (obj3.has(arg0)) {
            let addResult = set.add(tmp4);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      return Array.from(set);
    }
  };
  items[5] = {
    key: "isAnyWindowFocused",
    value(arg0) {
      const tmp = this.channelWindowIds[arg0];
      if (null == tmp) {
        return false;
      } else {
        const tmp3 = callback3(tmp);
        let iter = tmp3();
        if (!iter.done) {
          while (!focused.isFocused(iter.value)) {
            let iter2 = tmp3();
            iter = iter2;
          }
          return true;
        }
        return false;
      }
    }
  };
  items[6] = {
    key: "removeWindowId",
    value(arg0, arg1) {
      const self = this;
      if (null != this.channelWindowIds[arg0]) {
        self.channelWindowIds[arg0].delete(arg1);
        if (0 === self.channelWindowIds[arg0].size) {
          const channelWindowIds = self.channelWindowIds;
          delete r0[r1];
        }
        const obj = self.channelWindowIds[arg0];
      }
    }
  };
  items[7] = {
    key: "forEachChannel",
    value(arg0) {
      let done;
      const tmp = callback3(callback(closure_2[42]).entries(this.channelWindowIds));
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_7;
          let tmp3 = closure_7(iter.value, 2);
          let tmp4 = arg0(tmp3[0], tmp3[1]);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  return callback3(AutoAckableChannelTracker, items);
}();
tmp8 = new tmp8();
let closure_74 = 30 * importDefault(dependencyMap[43]).Millis.DAY;
let closure_75 = 0;
let closure_76 = 0;
let closure_77 = null;
let closure_78 = { IS_GUILD_CHANNEL: 1, [1]: "IS_GUILD_CHANNEL", IS_THREAD: 2, [2]: "IS_THREAD", IS_MENTION_LOW_IMPORTANCE: 4, [4]: "IS_MENTION_LOW_IMPORTANCE" };
const tmp10 = () => {
  class ReadState {
    constructor(arg0) {
      CHANNEL = arg1;
      self = this;
      if (arg1 === undefined) {
        tmp = closure_61;
        CHANNEL = closure_61.CHANNEL;
      }
      tmp2 = closure_8(self, ReadState);
      self.type = closure_61.CHANNEL;
      self.outgoingAckTimer = null;
      self.ackMessageIdAtChannelSelect = null;
      self.ackedWhileCached = undefined;
      self.channelId = arg0;
      self.type = CHANNEL;
      self._guildId = null;
      self._isThread = false;
      self._isActiveThread = false;
      self._isJoinedThread = false;
      self._isResourceChannel = false;
      self._persisted = false;
      self.loadedMessages = false;
      self._lastMessageId = null;
      self._lastMessageTimestamp = 0;
      self._ackMessageId = null;
      self._ackMessageTimestamp = 0;
      self.isManualAck = false;
      self.ackPinTimestamp = 0;
      self.lastPinTimestamp = 0;
      self._oldestUnreadMessageId = null;
      self.oldestUnreadMessageIdStale = false;
      self.estimated = false;
      self._unreadCount = 0;
      self._mentionCount = 0;
      self.outgoingAck = null;
      return;
    }
  }
  const arg1 = ReadState;
  let obj = {
    key: "serialize",
    value(arg0) {
      let _ackMessageId;
      let _ackMessageTimestamp;
      let _guildId;
      let _isActiveThread;
      let _isJoinedThread;
      let _isThread;
      let _lastMessageId;
      let _lastMessageTimestamp;
      let _mentionCount;
      let _persisted;
      let ackPinTimestamp;
      let channelId;
      let flags;
      let lastPinTimestamp;
      let lastViewed;
      let type;
      ({ channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags, lastViewed } = this);
      if (arg0) {
        let obj = { channelId, type, _guildId, _isThread, _isActiveThread, _isJoinedThread, _persisted, loadedMessages: tmp, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, isManualAck: tmp2, lastPinTimestamp, _oldestUnreadMessageId: tmp3, oldestUnreadMessageIdStale: tmp4, estimated: tmp5, _mentionCount, flags, lastViewed };
        return obj;
      } else {
        obj = { channelId, type, _guildId, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _mentionCount, flags };
        let tmp7 = null != lastViewed;
        if (tmp7) {
          tmp7 = lastViewed > 0;
        }
        if (tmp7) {
          obj.lastViewed = lastViewed;
        }
        if (_isThread) {
          obj._isThread = _isThread;
          obj._isActiveThread = _isActiveThread;
          obj._isJoinedThread = _isJoinedThread;
        }
        return obj;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "deserializeForOverlay",
    value(arg0) {
      let _ackMessageId;
      let _ackMessageTimestamp;
      let _guildId;
      let _isActiveJoinedThread;
      let _isActiveThread;
      let _isJoinedThread;
      let _isThread;
      let _lastMessageId;
      let _lastMessageTimestamp;
      let _mentionCount;
      let _oldestUnreadMessageId;
      let _persisted;
      let _unreadCount;
      let ackPinTimestamp;
      let estimated;
      let flags;
      let isManualAck;
      let lastPinTimestamp;
      let lastViewed;
      let loadedMessages;
      let oldestUnreadMessageIdStale;
      let type;
      const self = this;
      ({ type, _isThread, _isActiveJoinedThread, _isActiveThread, _isJoinedThread, loadedMessages, isManualAck, oldestUnreadMessageIdStale, estimated, _unreadCount, channelId: this.channelId } = arg0);
      ({ _guildId, _persisted, _lastMessageId, _lastMessageTimestamp, _ackMessageId, _ackMessageTimestamp, ackPinTimestamp, lastPinTimestamp, _oldestUnreadMessageId, _mentionCount, flags, lastViewed } = arg0);
      if (null == type) {
        type = constants3.CHANNEL;
      }
      self.type = type;
      self._guildId = _guildId;
      self._isThread = null != _isThread && _isThread;
      if (null != _isActiveJoinedThread) {
        self._isActiveThread = _isActiveJoinedThread;
        self._isJoinedThread = _isActiveJoinedThread;
      } else {
        self._isActiveThread = null != _isActiveThread && _isActiveThread;
        self._isJoinedThread = null != _isJoinedThread && _isJoinedThread;
      }
      self._persisted = false !== _persisted;
      self.loadedMessages = null != loadedMessages && loadedMessages;
      self._lastMessageId = _lastMessageId;
      self._lastMessageTimestamp = _lastMessageTimestamp;
      self._ackMessageId = _ackMessageId;
      self._ackMessageTimestamp = _ackMessageTimestamp;
      self.ackPinTimestamp = ackPinTimestamp;
      self.isManualAck = null != isManualAck && isManualAck;
      self.lastPinTimestamp = lastPinTimestamp;
      self._oldestUnreadMessageId = _oldestUnreadMessageId;
      self.oldestUnreadMessageIdStale = null != oldestUnreadMessageIdStale && oldestUnreadMessageIdStale;
      self.estimated = null != estimated && estimated;
      let num = 0;
      if (null != _unreadCount) {
        num = _unreadCount;
      }
      self._unreadCount = num;
      self._mentionCount = _mentionCount;
      self.flags = flags;
      self.lastViewed = lastViewed;
      const _mentionChannels = ReadState._mentionChannels;
      _mentionChannels.delete(self.channelId);
      if (tmp3) {
        const _mentionChannels2 = ReadState._mentionChannels;
        _mentionChannels2.add(self.channelId);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "incrementGuildUnreadsSentinel",
    value() {
      if (null != this._guildId) {
        const guildSentinels = ReadState.getGuildSentinels(tmp._guildId);
        guildSentinels.unreadsSentinel = guildSentinels.unreadsSentinel + 1;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "oldestUnreadMessageId",
    get() {
      return this._oldestUnreadMessageId;
    },
    set(_oldestUnreadMessageId) {
      this._oldestUnreadMessageId = _oldestUnreadMessageId;
      this.oldestUnreadMessageIdStale = false;
    }
  };
  items[4] = {
    key: "lastMessageId",
    get() {
      return this._lastMessageId;
    },
    set(_lastMessageId) {
      this._lastMessageId = _lastMessageId;
      let num = 0;
      if (null != _lastMessageId) {
        num = callback(closure_2[42]).extractTimestamp(_lastMessageId);
        const obj = callback(closure_2[42]);
      }
      this._lastMessageTimestamp = num;
    }
  };
  items[5] = {
    key: "lastMessageTimestamp",
    get() {
      return this._lastMessageTimestamp;
    }
  };
  items[6] = {
    key: "ackMessageId",
    get() {
      return this._ackMessageId;
    },
    set(_ackMessageId) {
      this._ackMessageId = _ackMessageId;
      let num = 0;
      if (null != _ackMessageId) {
        num = callback(closure_2[42]).extractTimestamp(_ackMessageId);
        const obj = callback(closure_2[42]);
      }
      this._ackMessageTimestamp = num;
    }
  };
  items[7] = {
    key: "unreadCount",
    get() {
      const _unreadCount = this._unreadCount;
      let num = 0;
      if (null != _unreadCount) {
        num = _unreadCount;
      }
      return num;
    },
    set(_unreadCount) {
      const self = this;
      let tmp = undefined !== this._unreadCount;
      if (tmp) {
        tmp = 0 !== self._unreadCount;
      }
      if (tmp) {
        tmp = 0 !== _unreadCount;
      }
      if (!tmp) {
        const result = self.incrementGuildUnreadsSentinel();
      }
      self._unreadCount = _unreadCount;
    }
  };
  items[8] = {
    key: "mentionCount",
    get() {
      return this._mentionCount;
    },
    set(_mentionCount) {
      const self = this;
      if (!tmp) {
        const result = self.incrementGuildUnreadsSentinel();
      }
      self._mentionCount = _mentionCount;
      const _mentionChannels = ReadState._mentionChannels;
      _mentionChannels.delete(self.channelId);
      if (tmp4) {
        const _mentionChannels2 = ReadState._mentionChannels;
        _mentionChannels2.add(self.channelId);
      }
    }
  };
  items[9] = {
    key: "isMentionLowImportance",
    get() {
      let tmp = null != this.flags;
      if (tmp) {
        tmp = (this.flags & constants4.IS_MENTION_LOW_IMPORTANCE) === constants4.IS_MENTION_LOW_IMPORTANCE;
      }
      return tmp;
    },
    set(arg0) {
      const self = this;
      if (arg0) {
        if (0 === self._mentionCount) {
          const flags = self.flags;
          let num3 = 0;
          if (null != flags) {
            num3 = flags;
          }
          self.flags = num3 | constants4.IS_MENTION_LOW_IMPORTANCE;
        }
      } else {
        let tmp2 = null != self.flags;
        if (tmp2) {
          tmp2 = 0 !== self.flags;
        }
        if (tmp2) {
          self.flags = self.flags & ~constants4.IS_MENTION_LOW_IMPORTANCE;
        }
      }
    }
  };
  items[10] = {
    key: "guessAckMessageId",
    value() {
      const self = this;
      const messages = store3.getMessages(this.channelId);
      if (null == this.ackMessageId) {
        if (self.isPrivate()) {
          if (!messages.hasMoreAfter) {
            if (self.hasMentions()) {
              let closure_0 = null;
              const mentionCount = self.mentionCount;
              const currentUser = authStore.getCurrentUser();
              const item = messages.forEach((author) => {
                if (closure_1 > 0) {
                  let id;
                  if (null != id) {
                    id = id.id;
                  }
                  if (author.author.id !== id) {
                    closure_1 = closure_1 - 1;
                  }
                }
                if (0 === closure_1) {
                  const id2 = author.id;
                  return false;
                }
              }, self, true);
              return closure_0;
            } else {
              return self.lastMessageId;
            }
          }
        }
      }
      return self.ackMessageId;
    }
  };
  items[11] = {
    key: "guildId",
    get() {
      const self = this;
      if (null != this._guildId) {
        return self._guildId;
      } else {
        const channel = store.getChannel(self.channelId);
        let guildId = null;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        self._guildId = guildId;
        return guildId;
      }
    }
  };
  items[12] = {
    key: "isPrivate",
    value() {
      if (this.type !== constants3.CHANNEL) {
        return false;
      } else {
        const channel = store.getChannel(tmp.channelId);
        return null != channel && channel.isPrivate();
      }
    }
  };
  items[13] = {
    key: "rebuildChannelState",
    value(arg0, arg1, mentionCount) {
      let flag = arg1;
      const self = this;
      const ReadState = this;
      if (arg1 === undefined) {
        flag = false;
      }
      let currentUser;
      let ackTimestamp;
      let closure_4;
      let closure_5;
      let closure_6;
      let _ackMessageId = arg0;
      if (null == arg0) {
        _ackMessageId = self._ackMessageId;
      }
      if (null == _ackMessageId) {
        _ackMessageId = self.guessAckMessageId();
      }
      self.ackMessageId = _ackMessageId;
      self.isManualAck = null != arg0;
      self.oldestUnreadMessageId = null;
      self.estimated = false;
      self.unreadCount = 0;
      if (flag) {
        self.mentionCount = 0;
      }
      if (self.hasUnread()) {
        currentUser = authStore.getCurrentUser();
        ackTimestamp = self.getAckTimestamp();
        closure_4 = false;
        closure_5 = false;
        closure_6 = null;
        const messages = store3.getMessages(self.channelId);
        messages.forAll((id) => {
          if (closure_4) {
            id = self._oldestUnreadMessageId;
            if (null == id) {
              id = id.id;
            }
            self.oldestUnreadMessageId = id;
            const tmp2 = self;
          } else {
            closure_4 = id.id === self._ackMessageId;
          }
          if (obj.extractTimestamp(id.id) > closure_3) {
            self.unreadCount = self.unreadCount + 1;
            let tmp5 = flag;
            if (flag) {
              tmp5 = callback(id, closure_2);
            }
            if (tmp5) {
              self.mentionCount = self.mentionCount + 1;
            }
            closure_6 = null != closure_6 ? closure_6 : id.id;
          } else {
            let closure_5 = true;
          }
        });
        let tmp4 = !messages.hasPresent();
        if (!tmp4) {
          let tmp5 = closure_4;
          if (!closure_4) {
            tmp5 = closure_5;
          }
          let tmp6 = !tmp5;
          if (!tmp5) {
            tmp6 = messages.length === self.unreadCount;
          }
          tmp4 = tmp6;
        }
        self.estimated = tmp4;
        let _oldestUnreadMessageId = self._oldestUnreadMessageId;
        if (null == _oldestUnreadMessageId) {
          _oldestUnreadMessageId = closure_6;
        }
        self.oldestUnreadMessageId = _oldestUnreadMessageId;
      }
      if (null != mentionCount) {
        self.mentionCount = mentionCount;
      }
    }
  };
  items[14] = {
    key: "handleGuildEventRemoval",
    value(arg0, arg1) {
      const self = this;
      if (obj.compare(this.ackMessageId, arg1) < 0) {
        const guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(arg0);
        const ackTimestamp = self.getAckTimestamp();
        const _isNaN = isNaN;
        if (!isNaN(ackTimestamp)) {
          let _ackMessageId = self._ackMessageId;
          if (null == _ackMessageId) {
            _ackMessageId = callback(closure_2[42]).fromTimestamp(ackTimestamp);
            const obj2 = callback(closure_2[42]);
          }
          const ReadState = _ackMessageId;
          const callback = null;
          closure_2 = 0;
          const item = guildScheduledEventsForGuild.forEach((id) => {
            if (callback(id)) {
              if (obj.compare(id.id, _null) > 0) {
                const _null = id.id;
              }
              const obj = _null(closure_2[42]);
              if (obj2.compare(id.id, _ackMessageId) > 0) {
                closure_2 = closure_2 + 1;
              }
              const obj2 = _null(closure_2[42]);
            }
          });
          self.lastMessageId = callback;
          self.mentionCount = closure_2;
        }
      }
    }
  };
  items[15] = {
    key: "canTrackUnreads",
    value() {
      const self = this;
      if (this.type !== constants3.CHANNEL) {
        return true;
      } else {
        if (self._isThread) {
          if (!self._isActiveThread) {
            return false;
          }
        }
        if (self._isResourceChannel) {
          return false;
        } else {
          let basicPermissions = store.getBasicChannel(self.channelId);
          if (null == basicPermissions) {
            return tmp3;
          } else if ("basicPermissions" in basicPermissions) {
            basicPermissions = basicPermissions.basicPermissions;
            let hasItem = callback(closure_2[51]).has(basicPermissions, constants.VIEW_CHANNEL);
            const obj = callback(closure_2[51]);
          } else {
            hasItem = !closure_12.isChannelGated(self.guildId, self.channelId);
            if (!hasItem) {
              hasItem = closure_35.can(constants2.VIEW_CHANNEL, basicPermissions);
            }
          }
        }
      }
    }
  };
  items[16] = {
    key: "canBeUnread",
    value() {
      const self = this;
      if (this._isThread) {
        if (!self._isJoinedThread) {
          return false;
        }
      }
      const items = [closure_16, closure_17];
      if (obj.isMessageRequestOrSpamRequest(self.channelId, items)) {
        return false;
      } else {
        if (!self._isThread) {
          if (obj2.isOptInEnabledForGuild(self._guildId)) {
            if (self._lastMessageTimestamp < closure_75) {
              return false;
            } else if (!closure_38.isChannelOrParentOptedIn(self._guildId, self.channelId)) {
              if (!self.hasRecentlyVisitedAndRead()) {
                if (!self.hasMentions()) {
                  return false;
                }
              }
            }
          }
          const obj2 = ReadState(closure_2[53]);
        }
        return self.canTrackUnreads();
      }
      const obj = ReadState(closure_2[52]);
    }
  };
  items[17] = {
    key: "canHaveMentions",
    value() {
      const self = this;
      let tmp = 0 !== this.mentionCount;
      if (tmp) {
        let tmp3 = !(self._isThread && !self._isJoinedThread);
        if (tmp3) {
          const items = [closure_16, closure_17];
          let tmp8 = !ReadState(closure_2[52]).isMessageRequestOrSpamRequest(self.channelId, items);
          if (tmp8) {
            let result = ReadState(closure_2[53]).isOptInEnabledForGuild(self._guildId);
            if (result) {
              result = self._lastMessageTimestamp < closure_75;
            }
            const obj2 = ReadState(closure_2[53]);
            tmp8 = !result && self.canTrackUnreads();
            const tmp13 = !result && self.canTrackUnreads();
          }
          tmp3 = tmp8;
          const obj = ReadState(closure_2[52]);
        }
        tmp = tmp3;
        const tmp2 = self._isThread && !self._isJoinedThread;
      }
      return tmp;
    }
  };
  items[18] = {
    key: "getGuildChannelUnreadState",
    value(basicPermissions) {
      const self = this;
      if (arg1) {
        if (self._lastMessageTimestamp < closure_75) {
          return {};
        } else if (!closure_38.isChannelRecordOrParentOptedIn(basicPermissions)) {
          if (!self.hasRecentlyVisitedAndRead()) {
            if (self.mentionCount <= 0) {
              return {};
            }
          }
        }
      }
      if ("basicPermissions" in basicPermissions) {
        let obj = callback(closure_2[51]);
        if (!obj.has(basicPermissions.basicPermissions, constants.VIEW_CHANNEL)) {
          return {};
        }
      } else if (closure_12.isChannelGated(self.guildId, self.channelId)) {
        if (!closure_35.can(constants2.VIEW_CHANNEL, basicPermissions)) {
          return {};
        }
      }
      if (!arg3) {
        if (!arg4) {
          obj = { mentionCount: self.mentionCount, unread: self.getAckTimestamp() < self._lastMessageTimestamp, isMentionLowImportance: self.isMentionLowImportance };
        }
        return obj;
      }
      obj = { mentionCount: self.mentionCount, unread: false, isMentionLowImportance: self.isMentionLowImportance };
    }
  };
  items[19] = {
    key: "hasUnread",
    value() {
      return this.getAckTimestamp() < this._lastMessageTimestamp;
    }
  };
  items[20] = {
    key: "hasRecentlyVisitedAndRead",
    value() {
      const self = this;
      let tmp = this._lastMessageTimestamp > 0;
      if (tmp) {
        tmp = null != self._ackMessageId;
      }
      if (tmp) {
        tmp = self.getAckTimestamp() > closure_76;
      }
      if (tmp) {
        const guildRecentsDismissedAt = guildRecentsDismissedAt.getGuildRecentsDismissedAt(self._guildId);
        tmp = guildRecentsDismissedAt < self.getAckTimestamp();
      }
      return tmp;
    }
  };
  items[21] = {
    key: "isForumPostUnread",
    value() {
      const self = this;
      const tmp = !this._isActiveThread;
      let hasUnreadResult = !tmp;
      if (!tmp) {
        hasUnreadResult = self.hasUnread();
      }
      return hasUnreadResult;
    }
  };
  items[22] = {
    key: "hasMentions",
    value() {
      return this.getMentionCount() > 0;
    }
  };
  items[23] = {
    key: "getMentionCount",
    value() {
      return this.mentionCount;
    }
  };
  items[24] = {
    key: "hasUnreadOrMentions",
    value() {
      const self = this;
      return this.hasMentions() || self.hasUnread();
    }
  };
  items[25] = {
    key: "ackPins",
    value() {
      let tmp = arg0;
      const self = this;
      const ReadState = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      if (self.type !== constants3.CHANNEL) {
        return false;
      } else if (self.canTrackUnreads()) {
        if (null == tmp) {
          if (self.lastPinTimestamp === self.ackPinTimestamp) {
            return false;
          } else {
            self._persisted = true;
            callback(closure_2[46])(() => {
              const HTTP = self(closure_2[47]).HTTP;
              const obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: closure_44.PINS_ACK(self.channelId) };
              return HTTP.post(obj);
            });
          }
        }
        let lastPinTimestamp = callback8(tmp);
        if (0 === lastPinTimestamp) {
          lastPinTimestamp = self.lastPinTimestamp;
        }
        self.ackPinTimestamp = lastPinTimestamp;
        return true;
      } else {
        return false;
      }
    }
  };
  items[26] = {
    key: "ack",
    value(immediate) {
      let local;
      let messageId;
      const self = this;
      const ReadState = this;
      ({ messageId, location: closure_1, trackAnalytics: closure_2, local } = immediate);
      if (local === undefined) {
        local = false;
      }
      let flag = immediate.immediate;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = immediate.force;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = immediate.isExplicitUserAction;
      if (flag3 === undefined) {
        flag3 = false;
      }
      if (self._shouldAck(flag2, local, flag3)) {
        if (!flag2) {
          if (!self.canTrackUnreads()) {
            return false;
          }
        }
        self.estimated = false;
        self.snapshot = self.takeSnapshot();
        self.unreadCount = 0;
        self.mentionCount = 0;
        self.isMentionLowImportance = false;
        let flag7 = null != messageId;
        if (!flag7) {
          const lastMessageId = self.lastMessageId;
          flag7 = null != lastMessageId;
          messageId = lastMessageId;
        }
        if (flag7) {
          self.ackMessageId = messageId;
          self.isManualAck = false;
          self._persisted = true;
          if (closure_69) {
            self.ackedWhileCached = true;
          }
          callback12(self.channelId);
          if (local) {
            self.oldestUnreadMessageId = null;
            flag7 = true;
          } else {
            if (null == self.outgoingAck) {
              if (hasMentionsResult) {
                let num2 = 0;
              } else {
                num2 = 3000;
              }
              self.outgoingAckTimer = setTimeout(() => {
                if (self.type === constants.CHANNEL) {
                  self._ack(closure_1, closure_2);
                } else {
                  self._nonChannelAck();
                }
                self.outgoingAck = null;
                self.outgoingAckTimer = null;
              }, num2);
            }
            self.outgoingAck = messageId;
            flag7 = true;
          }
        }
        return flag7;
      } else {
        return false;
      }
    }
  };
  items[27] = {
    key: "takeSnapshot",
    value() {
      const _default = ReadState(closure_2[54]).default;
      const guildId = this.guildId;
      const obj = { unread: this.hasUnread(), mentionCount: this.mentionCount };
      let hasUnreadResult = null;
      if (null != guildId) {
        hasUnreadResult = _default.hasUnread(guildId);
      }
      obj.guildUnread = hasUnreadResult;
      let mentionCount = null;
      if (null != guildId) {
        mentionCount = _default.getMentionCount(guildId);
      }
      obj.guildMentionCount = mentionCount;
      obj.takenAt = Date.now();
      return obj;
    }
  };
  items[28] = {
    key: "clearOutgoingAck",
    value() {
      const self = this;
      this.outgoingAck = null;
      if (null != this.outgoingAckTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.outgoingAckTimer);
        self.outgoingAckTimer = null;
      }
    }
  };
  items[29] = {
    key: "_shouldAck",
    value(arg0, arg1, arg2) {
      const self = this;
      let tmp2 = !tmp;
      if (!arg0) {
        let tmp5 = !tmp4;
        if (!arg2) {
          let tmp8 = !tmp7;
          if (!arg1) {
            let tmp9 = !self.isManualAck;
            if (tmp9) {
              let tmp11 = self.type !== constants3.CHANNEL || self.loadedMessages;
              if (!tmp11) {
                const channel = store.getChannel(self.channelId);
                tmp11 = null != channel && channel.isForumLikeChannel();
                const tmp14 = null != channel && channel.isForumLikeChannel();
              }
              tmp9 = tmp11;
            }
            tmp8 = tmp9;
          }
          tmp5 = tmp8;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    }
  };
  items[30] = {
    key: "_ack",
    value(arg0, arg1) {
      const self = this;
      const ReadState = this;
      const outgoingAck = this.outgoingAck;
      if (null != outgoingAck) {
        const id2 = id.getId();
        let closure_5 = closure_68;
        self._persisted = true;
        const recalculateFlagsResult = self.recalculateFlags();
        let tmp4;
        if (recalculateFlagsResult !== self.flags) {
          tmp4 = recalculateFlagsResult;
        }
        arg0(arg1[46])(() => {
          const HTTP = self(arg1[47]).HTTP;
          let obj = { url: closure_44.MESSAGE_ACK(self.channelId, outgoingAck), body: obj, oldFormErrors: true, rejectWithError: true };
          obj = { token: closure_68, last_viewed: self.lastViewed, flags: tmp4 };
          return HTTP.post(obj);
        }).then((body) => {
          if (null != body) {
            let tmp3 = token === closure_5;
            if (tmp3) {
              tmp3 = closure_4 === id.getId();
            }
            if (tmp3) {
              const token = body.body.token;
            }
            let obj = body(arg1[44]);
            obj = { type: "MESSAGE_ACKED" };
            obj.dispatch(obj);
            if (arg1) {
              self(arg1[56])(arg1[55], arg1.paths).then((arg0) => {
                arg0.default(channelId.channelId, null != closure_1 ? closure_1 : {});
              });
              const promise = self(arg1[56])(arg1[55], arg1.paths);
            }
          }
        });
        const promise = arg0(arg1[46])(() => {
          const HTTP = self(arg1[47]).HTTP;
          let obj = { url: closure_44.MESSAGE_ACK(self.channelId, outgoingAck), body: obj, oldFormErrors: true, rejectWithError: true };
          obj = { token: closure_68, last_viewed: self.lastViewed, flags: tmp4 };
          return HTTP.post(obj);
        });
      }
    }
  };
  items[31] = {
    key: "recalculateFlags",
    value() {
      if (this.type === constants3.CHANNEL) {
        const channel = store.getChannel(tmp.channelId);
        if (null != channel) {
          if (channel.isThread()) {
            let num = constants4.IS_THREAD;
          } else {
            num = 0;
            if (null != channel.guild_id) {
              num = constants4.IS_GUILD_CHANNEL;
            }
          }
          return num;
        }
      }
    }
  };
  items[32] = {
    key: "_nonChannelAck",
    value() {
      let outgoingAck;
      let type;
      let self = this;
      ({ outgoingAck, type } = this);
      if (null != outgoingAck) {
        if (constants3.GUILD_HOME !== type) {
          if (constants3.GUILD_EVENT !== type) {
            if (constants3.GUILD_ONBOARDING_QUESTION !== type) {
              let closure_0 = closure_44.USER_NON_CHANNEL_ACK(outgoingAck, type);
            }
            self._persisted = true;
            self = callback;
            callback(closure_2[46])(() => {
              const HTTP = callback(closure_2[47]).HTTP;
              return HTTP.post({ url: callback, body: {}, oldFormErrors: true, rejectWithError: true });
            });
          }
        }
        closure_0 = closure_44.GUILD_FEATURE_ACK(tmp, outgoingAck, type);
      }
    }
  };
  items[33] = {
    key: "delete",
    value() {
      let channelId;
      let type;
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = true;
      }
      const basicChannel = store.getBasicChannel(self.channelId);
      ({ channelId, type } = self);
      let obj = { remote: flag, persisted: self._persisted, channelMissing: null == basicChannel, isOld: callback11(self, callback7()) };
      let hasItem = null != basicChannel;
      if (hasItem) {
        hasItem = set.has(basicChannel.type);
      }
      obj.validType = hasItem;
      let tmp5 = null != basicChannel;
      if (tmp5) {
        tmp5 = callback3(basicChannel.type);
      }
      obj.readableType = tmp5;
      obj.oldThreadCutoff = callback7();
      ({ mentionCount: obj.mentionCount, channelId: obj.channelId, _ackMessageId: obj.ackMessageId, _lastMessageId: obj.lastMessageId } = self);
      closure_63.log("Deleting ReadState", channelId, type, obj);
      if (flag) {
        flag = self._persisted;
      }
      if (flag) {
        const HTTP = ReadState(closure_2[47]).HTTP;
        obj = { url: closure_44.CHANNEL_ACK(self.channelId) };
        obj = { version: 2, read_state_type: self.type };
        obj.body = obj;
        obj.oldFormErrors = true;
        obj.rejectWithError = true;
        HTTP.del(obj);
      }
      const _readStates = ReadState._readStates;
      const value = _readStates.get(self.type);
      if (null != value) {
        value.delete(self.channelId);
      }
      const _mentionChannels = ReadState._mentionChannels;
      _mentionChannels.delete(self.channelId);
    }
  };
  items[34] = {
    key: "shouldDeleteReadState",
    value(arg0) {
      const self = this;
      if (0 !== obj.totalUnavailableGuilds) {
        return false;
      } else {
        if (null != self.type) {
          if (self.type !== constants3.CHANNEL) {
            const type = self.type;
            if (constants3.GUILD_HOME !== type) {
              if (constants3.GUILD_EVENT !== type) {
                if (constants3.GUILD_ONBOARDING_QUESTION !== type) {
                  let flag = true;
                  if (constants3.NOTIFICATION_CENTER === type) {
                    let id;
                    const obj = callback(closure_2[42]);
                    const currentUser = authStore.getCurrentUser();
                    if (null != currentUser) {
                      id = currentUser.id;
                    }
                    flag = obj.cast(id) === self.channelId;
                  }
                }
                return !flag;
              }
            }
            flag = null != store2.getGuild(self.channelId);
          }
        }
        const basicChannel = store.getBasicChannel(self.channelId);
        if (null == basicChannel) {
          let tmp18 = callback11(self, arg0);
        } else {
          const tmp32 = !set.has(basicChannel.type);
          tmp18 = !tmp32;
          if (!tmp32) {
            let tmp5 = !callback3(basicChannel.type);
            if (!tmp5) {
              let tmp7 = !callback4(basicChannel.type);
              if (tmp7) {
                let tmp9 = !set2.has(basicChannel.type);
                if (!tmp9) {
                  const guildId = self.guildId;
                  let isActiveResult = null != guildId;
                  if (isActiveResult) {
                    isActiveResult = closure_19.isActive(guildId, basicChannel.parent_id, self.channelId);
                  }
                  let tmp12 = !isActiveResult;
                  if (tmp12) {
                    tmp12 = callback11(self, arg0);
                  }
                  tmp9 = !tmp12;
                }
                let tmp14 = !tmp9;
                if (tmp9) {
                  let tmp15 = self.mentionCount > 0;
                  if (tmp15) {
                    tmp15 = !closure_35.canBasicChannel(closure_65, basicChannel);
                  }
                  tmp14 = tmp15;
                }
                tmp7 = tmp14;
              }
              tmp5 = tmp7;
            }
            tmp18 = tmp5;
          }
        }
        return tmp18;
      }
    }
  };
  items[35] = {
    key: "getAckTimestamp",
    value() {
      const self = this;
      if (0 !== this._ackMessageTimestamp) {
        const _isNaN = isNaN;
        if (!isNaN(self._ackMessageTimestamp)) {
          return self._ackMessageTimestamp;
        }
      }
      if (self._isThread) {
        self._ackMessageTimestamp = callback9(self.guildId, self.channelId);
        self._ackMessageId = callback(closure_2[42]).fromTimestamp(self._ackMessageTimestamp);
        return self._ackMessageTimestamp;
      } else {
        if (self.type !== constants3.GUILD_EVENT) {
          if (self.type !== constants3.GUILD_ONBOARDING_QUESTION) {
            if (callback5(self.channelId)) {
              let guild = store2.getGuild(self.guildId);
            } else {
              const channel = store.getChannel(self.channelId);
              if (null != channel) {
                guild = store2.getGuild(channel.getGuildId());
              }
            }
          }
          if (null != guild) {
            const tmp16 = callback10(guild);
            const _isNaN2 = isNaN;
            let extractTimestampResult = tmp16;
            if (isNaN(tmp16)) {
              extractTimestampResult = callback(closure_2[42]).extractTimestamp(self.channelId);
              const obj3 = callback(closure_2[42]);
            }
          } else {
            extractTimestampResult = callback(closure_2[42]).extractTimestamp(self.channelId);
            const obj2 = callback(closure_2[42]);
          }
          self._ackMessageTimestamp = extractTimestampResult;
          return extractTimestampResult;
        }
        guild = store2.getGuild(self.channelId);
      }
    }
  };
  items[36] = {
    key: "oldestUnreadTimestamp",
    get() {
      let num = 0;
      if (null != this.oldestUnreadMessageId) {
        num = callback(closure_2[42]).extractTimestamp(tmp.oldestUnreadMessageId);
        const obj = callback(closure_2[42]);
      }
      return num;
    }
  };
  items[37] = {
    key: "syncThreadSettings",
    value() {
      const self = this;
      this._isThread = true;
      const channel = store.getChannel(this.channelId);
      if (null == channel) {
        const _HermesInternal = HermesInternal;
        closure_63.warn("syncThreadSettings called with channel not in memory " + self.channelId);
        return false;
      } else {
        const guildId = self.guildId;
        let isActiveResult = null != guildId;
        if (isActiveResult) {
          isActiveResult = closure_19.isActive(guildId, channel.parent_id, self.channelId);
        }
        const hasJoinedResult = closure_20.hasJoined(self.channelId);
        let flag = self._isActiveThread !== isActiveResult || self._isJoinedThread !== hasJoinedResult;
        if (flag) {
          self._isActiveThread = isActiveResult;
          self._isJoinedThread = hasJoinedResult;
          flag = true;
        }
        return flag;
      }
    }
  };
  items[38] = {
    key: "recordLastViewedTime",
    value() {
      const self = this;
      const timestamp = Date.now();
      const diff = timestamp - ReadState(closure_2[42]).DISCORD_EPOCH;
      const rounded = Math.ceil(diff / callback(closure_2[43]).Millis.DAY);
      if (rounded !== this.lastViewed) {
        self.lastViewed = rounded;
        if (tmp4) {
          self.ack({ "Bool(false)": null, "Bool(false)": null });
        }
        const tmp4 = self.canTrackUnreads() && !self.hasUnread();
      }
    }
  };
  const items1 = [
    {
      key: "forEach",
      value(arg0) {
        let iter4;
        const _readStates = ReadState._readStates;
        const tmp = callback6(_readStates.values());
        let iter = tmp();
        if (!iter.done) {
          do {
            let tmp2 = closure_83;
            let value = iter.value;
            let tmp3 = closure_83(value.values());
            let iter2 = tmp3();
            if (!iter2.done) {
              while (false !== arg0(iter2.value)) {
                let iter3 = tmp3();
                iter2 = iter3;
                if (iter3.done) {
                  break;
                }
              }
            }
            iter4 = tmp();
            iter = iter4;
          } while (!iter4.done);
        }
      }
    },
    {
      key: "get",
      value(channelId, CHANNEL) {
        if (CHANNEL === undefined) {
          CHANNEL = constants3.CHANNEL;
        }
        const _readStates = ReadState._readStates;
        let value = _readStates.get(CHANNEL);
        value = undefined;
        if (null != value) {
          value = value.get(channelId);
        }
        if (null == value) {
          const prototype2 = ReadState.prototype;
          const tmp15 = new ReadState(channelId, CHANNEL);
          const _readStates4 = ReadState._readStates;
          let value1 = _readStates4.get(CHANNEL);
          if (null == value1) {
            const _Map = Map;
            value1 = new Map();
          }
          const result = value1.set(channelId, tmp15);
          const _readStates2 = ReadState._readStates;
          value = tmp15;
          if (!_readStates2.has(CHANNEL)) {
            const _readStates3 = ReadState._readStates;
            const result1 = _readStates3.set(CHANNEL, value1);
            value = tmp15;
          }
        }
        return value;
      }
    },
    {
      key: "getGuildSentinels",
      value(arg0) {
        const self = this;
        if (null == this._guildReadStateSentinels[arg0]) {
          const obj = { unreadsSentinel: 0 };
          self._guildReadStateSentinels[arg0] = obj;
        }
        return self._guildReadStateSentinels[arg0];
      }
    },
    {
      key: "resetGuildSentinels",
      value() {
        this._guildReadStateSentinels = {};
      }
    },
    {
      key: "getIfExists",
      value(arg0) {
        let CHANNEL = arg1;
        if (arg1 === undefined) {
          CHANNEL = constants3.CHANNEL;
        }
        const _readStates = ReadState._readStates;
        let value = _readStates.get(CHANNEL);
        value = undefined;
        if (null != value) {
          value = value.get(arg0);
        }
        return value;
      }
    },
    {
      key: "getMentionChannelIds",
      value() {
        const items = [];
        const tmp = callback6(ReadState._mentionChannels);
        let iter = tmp();
        if (!iter.done) {
          while (true) {
            let value = iter.value;
            let tmp2 = ReadState;
            let ifExists = ReadState.getIfExists(value);
            if (null != ifExists) {
              if (ifExists.canHaveMentions()) {
                let arr = items.push(value);
                let iter2 = tmp();
                iter = iter2;
                if (iter2.done) {
                  break;
                }
              }
            }
            let tmp3 = ReadState;
            let _mentionChannels = ReadState._mentionChannels;
            let deleteResult = _mentionChannels.delete(value);
          }
        }
        return items;
      }
    },
    {
      key: "getValue",
      value(arg0) {
        let CHANNEL = arg1;
        let tmp = arg3;
        const self = this;
        if (arg1 === undefined) {
          CHANNEL = constants3.CHANNEL;
        }
        const ifExists = self.getIfExists(arg0, CHANNEL);
        if (null != ifExists) {
          tmp = arg2(ifExists);
        }
        return tmp;
      }
    },
    {
      key: "clear",
      value(arg0) {
        let CHANNEL = arg1;
        if (arg1 === undefined) {
          CHANNEL = constants3.CHANNEL;
        }
        const _readStates = ReadState._readStates;
        const value = _readStates.get(CHANNEL);
        if (null == value) {
          return false;
        } else {
          const deleteResult = value.delete(arg0);
          if (deleteResult) {
            const _mentionChannels = ReadState._mentionChannels;
            _mentionChannels.delete(arg0);
          }
          return deleteResult;
        }
      }
    },
    {
      key: "clearAll",
      value() {
        const _readStates = ReadState._readStates;
        _readStates.clear();
        const _mentionChannels = ReadState._mentionChannels;
        _mentionChannels.clear();
      }
    }
  ];
  return callback3(ReadState, items, items1);
}();
tmp10._guildReadStateSentinels = {};
const tmp5 = arg1(dependencyMap[35]);
tmp10._readStates = new Map();
const map = new Map();
tmp10._mentionChannels = new Set();
const set = new Set();
let closure_80 = arg1(dependencyMap[59]).throttle((arg0) => {
  arg0.delete();
}, 100);
let tmp13 = (Store) => {
  class ReadStateStoreClass {
    constructor() {
      self = this;
      tmp = closure_8(this, ReadStateStoreClass);
      obj = closure_4(ReadStateStoreClass);
      tmp2 = closure_3;
      if (closure_82()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ReadStateStoreClass;
  callback(ReadStateStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_30, closure_39, closure_32, closure_31, closure_29, closure_37, closure_34, closure_35, closure_11, closure_19, closure_20, closure_28, closure_14, closure_13, closure_12, closure_38, closure_40, closure_18, closure_16, closure_21, closure_17];
      items.push(ReadStateStoreClass(closure_2[66]).default);
      this.waitFor(closure_19, closure_27, closure_11, closure_28, closure_29, closure_30, closure_10, closure_12, closure_31, closure_14, closure_32, closure_33, closure_20, closure_34, closure_18, closure_35, closure_36, closure_37, closure_38, closure_21, closure_39, closure_40);
      const items1 = [closure_28];
      this.syncWith(items1, closure_107);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getReadStatesByChannel",
    value() {
      const _readStates = store._readStates;
      let map = _readStates.get(constants.CHANNEL);
      if (null == map) {
        const _Map = Map;
        map = new Map();
      }
      return map;
    }
  };
  items[1] = obj;
  obj = {
    key: "getForDebugging",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getIfExists(arg0, CHANNEL);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNotifCenterReadState",
    value(arg0) {
      return store.getIfExists(arg0, constants.NOTIFICATION_CENTER);
    }
  };
  items[4] = {
    key: "hasUnread",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canBeUnread) => canBeUnread.canBeUnread() && canBeUnread.hasUnread(), false);
    }
  };
  items[5] = {
    key: "hasUnreadOrMentions",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canBeUnread) => canBeUnread.canBeUnread() && canBeUnread.hasUnreadOrMentions(), false);
    }
  };
  items[6] = {
    key: "hasTrackedUnread",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canTrackUnreads) => canTrackUnreads.canTrackUnreads() && canTrackUnreads.hasUnread(), false);
    }
  };
  items[7] = {
    key: "isForumPostUnread",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (isForumPostUnread) => isForumPostUnread.isForumPostUnread(), false);
    }
  };
  items[8] = {
    key: "getUnreadCount",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canBeUnread) => {
        let num = 0;
        if (canBeUnread.canBeUnread()) {
          num = canBeUnread.unreadCount;
        }
        return num;
      }, 0);
    }
  };
  items[9] = {
    key: "getMentionCount",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      const value = store.getValue(arg0, CHANNEL, (canHaveMentions) => {
        let num = 0;
        if (canHaveMentions.canHaveMentions()) {
          num = canHaveMentions.getMentionCount();
        }
        return num;
      }, 0);
      if (!callback(closure_2[67])(arg0)) {
        let num = value;
      } else {
        num = 1;
      }
      return num;
    }
  };
  items[10] = {
    key: "getIsMentionLowImportance",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      let value = CHANNEL === constants.CHANNEL;
      if (value) {
        value = store.getValue(arg0, CHANNEL, (isMentionLowImportance) => isMentionLowImportance.isMentionLowImportance, false);
      }
      return value;
    }
  };
  items[11] = {
    key: "getGuildChannelUnreadState",
    value(id) {
      const ReadStateStoreClass = id;
      return store.getValue(id.id, constants.CHANNEL, (getGuildChannelUnreadState) => getGuildChannelUnreadState.getGuildChannelUnreadState(getGuildChannelUnreadState, arg1, arg2, arg3, arg4), {});
    }
  };
  items[12] = {
    key: "hasRecentlyVisitedAndRead",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (hasRecentlyVisitedAndRead) => hasRecentlyVisitedAndRead.hasRecentlyVisitedAndRead(), false);
    }
  };
  items[13] = {
    key: "ackMessageId",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canBeUnread) => {
        let ackMessageId = null;
        if (canBeUnread.canBeUnread()) {
          ackMessageId = canBeUnread.ackMessageId;
        }
        return ackMessageId;
      }, null);
    }
  };
  items[14] = {
    key: "getTrackedAckMessageId",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canTrackUnreads) => {
        let _ackMessageId = null;
        if (canTrackUnreads.canTrackUnreads()) {
          _ackMessageId = canTrackUnreads._ackMessageId;
        }
        return _ackMessageId;
      }, null);
    }
  };
  items[15] = {
    key: "lastMessageId",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (lastMessageId) => lastMessageId.lastMessageId, null);
    }
  };
  items[16] = {
    key: "lastMessageTimestamp",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (lastMessageTimestamp) => lastMessageTimestamp.lastMessageTimestamp, 0);
    }
  };
  items[17] = {
    key: "lastPinTimestamp",
    value(arg0) {
      return store.getValue(arg0, constants.CHANNEL, (lastPinTimestamp) => lastPinTimestamp.lastPinTimestamp, null);
    }
  };
  items[18] = {
    key: "getOldestUnreadMessageId",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canTrackUnreads) => {
        let prop = null;
        if (canTrackUnreads.canTrackUnreads()) {
          prop = canTrackUnreads.oldestUnreadMessageId;
        }
        return prop;
      }, null);
    }
  };
  items[19] = {
    key: "getOldestUnreadTimestamp",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (canTrackUnreads) => {
        let num = 0;
        if (canTrackUnreads.canTrackUnreads()) {
          num = canTrackUnreads.oldestUnreadTimestamp;
        }
        return num;
      }, 0);
    }
  };
  items[20] = {
    key: "isEstimated",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (estimated) => estimated.estimated, false);
    }
  };
  items[21] = {
    key: "hasOpenedThread",
    value(arg0) {
      let CHANNEL = arg1;
      if (arg1 === undefined) {
        CHANNEL = constants.CHANNEL;
      }
      return store.getValue(arg0, CHANNEL, (_persisted) => _persisted._persisted, false);
    }
  };
  items[22] = {
    key: "hasUnreadPins",
    value(arg0) {
      return store.getValue(arg0, constants.CHANNEL, (canBeUnread) => canBeUnread.canBeUnread() && canBeUnread.lastPinTimestamp > canBeUnread.ackPinTimestamp, false);
    }
  };
  items[23] = {
    key: "isNewForumThread",
    value(arg0, arg1, arg2) {
      const value = store.get(arg1);
      if (true !== store.get(arg0)._persisted) {
        if (null != value.ackMessageIdAtChannelSelect) {
          if (obj.compare(arg0, value.ackMessageIdAtChannelSelect) > 0) {
            const tmp7 = callback5(arg2);
            return callback(closure_2[42]).extractTimestamp(arg0) > tmp7;
          }
          const obj = callback(closure_2[42]);
        }
      }
      return false;
    }
  };
  items[24] = {
    key: "getAllReadStates",
    value(arg0) {
      const ReadStateStoreClass = arg0;
      const items = [];
      const item = store.forEach((type) => {
        type = type.type;
        if (constants.GUILD_HOME !== type) {
          if (constants.GUILD_EVENT !== type) {
            if (constants.GUILD_ONBOARDING_QUESTION !== type) {
              if (constants.NOTIFICATION_CENTER !== type) {
                if (constants.MESSAGE_REQUESTS !== type) {
                  items.push(type.serialize(type));
                }
              }
              let id;
              const currentUser = currentUser.getCurrentUser();
              if (null != currentUser) {
                id = currentUser.id;
              }
              if (obj.cast(id) === type.channelId) {
                items.push(type.serialize(type));
              }
              const obj = items(closure_2[42]);
            }
          }
        }
        if (null != guild.getGuild(type.channelId)) {
          items.push(type.serialize(type));
        }
      });
      return items;
    }
  };
  items[25] = {
    key: "getGuildUnreadsSentinel",
    value(arg0) {
      return store.getGuildSentinels(arg0).unreadsSentinel;
    }
  };
  items[26] = {
    key: "getMentionChannelIds",
    value() {
      return store.getMentionChannelIds();
    }
  };
  items[27] = {
    key: "getNonChannelAckId",
    value(arg0) {
      const currentUser = currentUser.getCurrentUser();
      let id;
      if (null != currentUser) {
        id = currentUser.id;
      }
      let ackMessageId = null;
      if (null != id) {
        ackMessageId = store.get(id, arg0).ackMessageId;
      }
      return ackMessageId;
    }
  };
  items[28] = {
    key: "getSnapshot",
    value(arg0, arg1) {
      const value = store.get(arg0);
      if (null != value.snapshot) {
        const _Date = Date;
        if (Date.now() - value.snapshot.takenAt <= arg1) {
          let snapshot = value.snapshot;
        }
        return snapshot;
      }
      snapshot = value.takeSnapshot();
    }
  };
  items[29] = {
    key: "getChannelIdsForWindowId",
    value(arg0) {
      return allChannelIdsForWindowId.getAllChannelIdsForWindowId(arg0);
    }
  };
  return callback3(ReadStateStoreClass, items);
}(importDefault(dependencyMap[68]).Store);
tmp13.displayName = "ReadStateStore";
tmp13 = new tmp13(importDefault(dependencyMap[44]), {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSync(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10015 in changesByChannelId) {
      let tmp16 = key10015;
      let tmp17 = changesByChannelId[key10015];
      let tmp18 = closure_79;
      let ifExists = closure_79.getIfExists(key10015);
      if (null == ifExists) {
        continue;
      } else {
        let new_messages = tmp17.new_messages;
        let first;
        let tmp = closure_83;
        if (null != new_messages) {
          first = new_messages[0];
        }
        let items = [first];
        let modified_messages = tmp17.modified_messages;
        let items1 = modified_messages;
        if (null == modified_messages) {
          items1 = [];
        }
        let combined = items.concat(items1);
        let tmp3 = closure_0;
        let tmp4 = closure_2;
        let tmpResult = tmp(combined.filter(closure_0(closure_2[60]).isNotNullish));
        let iter = tmpResult();
        let tmp6 = new_messages;
        let tmp7 = modified_messages;
        let tmp8 = iter;
        let tmp9 = tmpResult;
        let iter2 = iter;
        if (iter.done) {
          continue;
        } else {
          while (true) {
            let value = iter2.value;
            let tmp10 = closure_1;
            let tmp11 = closure_2;
            let obj = closure_1(closure_2[42]);
            if (1 === obj.compare(value.id, ifExists.lastMessageId)) {
              ifExists.lastMessageId = value.id;
            }
            let iter3 = tmpResult();
            let tmp12 = new_messages;
            let tmp13 = modified_messages;
            let tmp14 = iter3;
            let tmp15 = tmpResult;
            iter2 = iter3;
            if (iter3.done) {
              break;
            } else {
              // continue
            }
          }
        }
        continue;
      }
      continue;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(readState) {
    let guilds;
    let initialPrivateChannels;
    let iter2;
    let relationships;
    readState = readState.readState;
    const arg1 = readState;
    ({ guilds, relationships, initialPrivateChannels } = readState);
    setDecayedReadStateTimer();
    let closure_68 = null;
    let partial = closure_69;
    if (!closure_69) {
      partial = readState.partial;
    }
    if (!partial) {
      tmp10.clearAll();
    }
    closure_69 = false;
    const entries = readState.entries;
    const item = entries.forEach((read_state_type) => {
      let CHANNEL = read_state_type.read_state_type;
      if (null == CHANNEL) {
        CHANNEL = constants.CHANNEL;
      }
      let tmp2 = read_state_type;
      if (CHANNEL !== constants.CHANNEL) {
        const obj = {};
        ({ id: obj.id, read_state_type: obj.read_state_type, badge_count: obj.mention_count, last_acked_id: obj.last_message_id } = read_state_type);
        tmp2 = obj;
      }
      const value = closure_79.get(tmp2.id, CHANNEL);
      value._persisted = true;
      const mention_count = tmp2.mention_count;
      let num = 0;
      if (null != mention_count) {
        num = mention_count;
      }
      value._mentionCount = num;
      ({ flags: obj2.flags, last_viewed: obj2.lastViewed } = tmp2);
      const basicChannel = basicChannel.getBasicChannel(tmp2.id);
      if (null != basicChannel) {
        if (callback2(basicChannel.type)) {
          value.ackMessageId = callback(closure_2[42]).fromTimestamp(callback6(basicChannel.guild_id, basicChannel.id));
          const obj3 = callback(closure_2[42]);
        }
        value.ackedWhileCached = undefined;
        value.ackPinTimestamp = callback5(tmp2.last_pin_timestamp);
        const _mentionChannels = closure_79._mentionChannels;
        _mentionChannels.delete(value.channelId);
        if (tmp13) {
          const _mentionChannels2 = closure_79._mentionChannels;
          _mentionChannels2.add(value.channelId);
        }
      }
      if (value.ackedWhileCached) {
        if (-1 === obj4.compare(value.ackMessageId, tmp2.last_message_id)) {
          value.ackMessageId = tmp2.last_message_id;
        }
        const obj4 = callback(closure_2[42]);
      } else {
        value.ackMessageId = tmp2.last_message_id;
      }
    });
    tmp10.resetGuildSentinels();
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null != id) {
      let value = tmp10.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      value.lastMessageId = importDefault(dependencyMap[42]).fromTimestamp(Date.now());
      const obj = importDefault(dependencyMap[42]);
    }
    mergeRelationships(relationships);
    mergeChannels(initialPrivateChannels);
    const tmp16 = _createForOfIteratorHelperLoose(guilds);
    let iter = tmp16();
    if (!iter.done) {
      do {
        value = iter.value;
        let tmp17 = closure_95;
        if ("full_sync" === value.channels.op) {
          let writes = value.channels.items;
        } else {
          writes = value.channels.writes;
        }
        let tmp17Result = tmp17(writes);
        if (null != value.channelTimestampUpdates) {
          let tmp19 = closure_105;
          let tmp20 = closure_105(value.channelTimestampUpdates);
        }
        let tmp21 = closure_97;
        let tmp22 = closure_97(value);
        iter2 = tmp16();
        iter = iter2;
      } while (!iter2.done);
    }
    clearDeleteOldReadStatesTimer();
    const timeout = setTimeout(() => {
      let iter2;
      const tmp2 = callback3(readState.entries);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let CHANNEL = value.read_state_type;
          if (null == CHANNEL) {
            let tmp3 = closure_61;
            CHANNEL = closure_61.CHANNEL;
          }
          let tmp4 = closure_79;
          value = closure_79.get(value.id, CHANNEL);
          if (value.shouldDeleteReadState(tmp)) {
            let tmp5 = closure_80;
            let tmp6 = closure_80(value);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
    }, 10 * importDefault(dependencyMap[43]).Millis.SECOND);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    mergeChannels(lazyPrivateChannels.lazyPrivateChannels);
  },
  LOGOUT: clearDeleteOldReadStatesTimer,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(readStates) {
    readStates = readStates.readStates;
    setDecayedReadStateTimer();
    let closure_68 = null;
    const selectedChannelId = readStates.selectedChannelId;
    const currentSidebarChannelId = store2.getCurrentSidebarChannelId(selectedChannelId);
    tmp10.clearAll();
    const item = readStates.forEach((channelId) => {
      const value = closure_79.get(channelId.channelId);
      const result = value.deserializeForOverlay(channelId);
      if (value.type === constants.CHANNEL) {
        value.rebuildChannelState();
      }
    });
  },
  CACHE_LOADED: function handleCacheLoaded(readStates) {
    readStates = readStates.readStates;
    let closure_69 = true;
    setDecayedReadStateTimer();
    const item = readStates.forEach((type) => {
      let CHANNEL = type.type;
      if (null == CHANNEL) {
        CHANNEL = constants.CHANNEL;
      }
      type.type = CHANNEL;
      const _readStates = closure_79._readStates;
      const value = _readStates.get(CHANNEL);
      let map = value;
      if (null == value) {
        const _Map = Map;
        map = new Map();
      }
      const result = map.set(type.channelId, callback(closure_2[65]).dangerouslyCast(type, closure_79));
      const _readStates2 = closure_79._readStates;
      if (!_readStates2.has(CHANNEL)) {
        const _readStates3 = closure_79._readStates;
        const result1 = _readStates3.set(CHANNEL, map);
      }
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const arg1 = guild;
    let closure_1 = generateOldThreadCutoff();
    const item = tmp10.forEach((guildId) => {
      let result = guildId.guildId === guild.id;
      if (result) {
        result = guildId.shouldDeleteReadState(closure_1);
      }
      if (result) {
        guildId.delete(false);
      }
    });
    if ("full_sync" === guild.channels.op) {
      let writes = guild.channels.items;
    } else {
      writes = guild.channels.writes;
    }
    mergeChannels(writes);
    if (null != guild.channelTimestampUpdates) {
      mergeChannelTimestampUpdates(guild.channelTimestampUpdates);
    }
    mergeForGuild(guild);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(arg0) {
    let channelId;
    let isAfter;
    let messages;
    ({ channelId, isAfter, messages } = arg0);
    const value = tmp10.get(channelId);
    value.loadedMessages = true;
    let tmp = null == value.lastMessageId;
    if (tmp) {
      tmp = messages.length > 0;
    }
    if (tmp) {
      value.lastMessageId = messages[0].id;
    }
    messages = store4.getMessages(channelId);
    if (null != messages) {
      if (messages.length > 0) {
        value.rebuildChannelState();
        const obj3 = importDefault(dependencyMap[42]);
      }
      if (!messages.hasPresent()) {
        if (messages.jumpTargetId !== value.ackMessageId) {
          if (isAfter) {
            isAfter = null != value.ackMessageId;
          }
          if (isAfter) {
            isAfter = messages.has(value.ackMessageId, true);
          }
          if (isAfter) {
            value.unreadCount = value.unreadCount + messages.length;
            if (null == value.oldestUnreadMessageId) {
              value.rebuildChannelState();
            }
          }
        }
      }
    }
    const mapped = messages.map((thread) => thread.thread);
    mergeServerChannels(mapped.filter(arg1(dependencyMap[60]).isNotNullish));
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(messages) {
    messages = messages.messages;
    if (obj.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
      if (0 === messages.length) {
        return false;
      } else {
        const value = tmp10.get(messages.channelId);
        const id = messages[0].id;
        let tmp3 = null == value.lastMessageId;
        if (!tmp3) {
          tmp3 = importDefault(dependencyMap[42]).compare(id, value.lastMessageId) > 0;
          const obj3 = importDefault(dependencyMap[42]);
        }
        if (tmp3) {
          value.lastMessageId = id;
          value.rebuildChannelState();
        }
      }
    } else {
      return false;
    }
    const obj = arg1(dependencyMap[61]);
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    let channelId;
    let message;
    ({ channelId, message } = isPushNotification);
    const value = tmp10.get(channelId);
    let hasUnreadResult = value.hasUnread();
    value.lastMessageId = message.id;
    const currentUser = authStore.getCurrentUser();
    const basicChannel = store3.getBasicChannel(channelId);
    if (null != message.author) {
      if (null != currentUser) {
        if (message.author.id === currentUser.id) {
          const SELF_MENTIONABLE_SYSTEM = constants10.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            if (null != value.outgoingAck) {
              value.clearOutgoingAck();
            }
            let obj = { channelId, messageId: message.id, manual: false };
            return handleMessageAck(obj);
          }
        }
      }
    }
    let obj2 = arg1(dependencyMap[62]);
    const rootNavigationRef = obj2.getRootNavigationRef();
    let isReadyResult;
    if (null != rootNavigationRef) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (true === isReadyResult) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      if (uiStore.getChatOpen(value.channelId)) {
        let channelId2 = value.channelId;
      } else {
        let name;
        if (null != currentRoute) {
          name = currentRoute.name;
        }
        if ("channel" === name) {
          channelId2 = currentRoute.params.channelId;
        } else {
          let name1;
          if (null != currentRoute) {
            name1 = currentRoute.name;
          }
          if ("guilds" === name1) {
            const params = currentRoute.params;
            channelId = undefined;
            if (null != params) {
              channelId = params.channelId;
            }
            channelId2 = channelId;
          }
        }
      }
    } else if (null == rootNavigationRef) {
      const channelId1 = importDefaultResult.getChannelId();
      const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId1);
      channelId2 = channelId1;
    }
    if (tmp18) {
      if (shouldAutomaticallyAck(value)) {
        if (!isPushNotification.isPushNotification) {
          obj = { messageId: message.id, trackAnalytics: true };
          const obj1 = { section: isOverlayAckable(undefined, value.channelId) ? constants3.OVERLAY : constants3.CHANNEL, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
          obj.location = obj1;
          return value.ack(obj);
        }
      }
    }
    if (isOverlayAckable(undefined, channelId)) {
      obj2 = { messageId: message.id, trackAnalytics: true };
      const obj3 = { section: constants3.OVERLAY, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
      obj2.location = obj3;
      return value.ack(obj2);
    } else {
      if (null != value.oldestUnreadMessageId) {
        if (!value.oldestUnreadMessageIdStale) {
          if (!hasUnreadResult) {
            hasUnreadResult = arg1(dependencyMap[50]).getFocusedChannelId() === channelId;
            const obj7 = arg1(dependencyMap[50]);
          }
          if (!hasUnreadResult) {
            value.oldestUnreadMessageId = message.id;
          }
        }
        if (!tmp2) {
          value.unreadCount = value.unreadCount + 1;
        }
        if (!closure_36.isBlockedOrIgnoredForMessage(message)) {
          if (message.type !== constants6.RECIPIENT_REMOVE) {
            if (null != currentUser) {
              const obj4 = { rawMessage: message, userId: currentUser.id, suppressEveryone: closure_38.isSuppressEveryoneEnabled(value.guildId), suppressRoles: closure_38.isSuppressRolesEnabled(value.guildId) };
              if (obj8.isRawMessageMentioned(obj4)) {
                let obj5 = { "Null": null, "Null": null };
              }
              if (obj5.shouldMention) {
                value.isMentionLowImportance = obj5.isMentionLowImportance;
                value.mentionCount = value.mentionCount + 1;
                if (null != currentUser) {
                  tmp10.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = message.id;
                  if (closure_18.tabFocused) {
                    handleNonChannelAck(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER, undefined, false);
                  }
                }
              }
              const obj8 = arg1(dependencyMap[45]);
            }
            const channel = store3.getChannel(message.channel_id);
            if (isNonMutedPrivateMessage(channel)) {
              obj5 = { "Null": null, "Null": null };
            } else {
              if (closure_38.mentionOnAllMessages) {
                if (null != channel) {
                  if (channel.isThread()) {
                    if (obj12.computeThreadNotificationSetting(channel) === ThreadMemberFlags.ALL_MESSAGES) {
                      obj5 = { "Null": null, "Null": null };
                    }
                    const obj12 = arg1(dependencyMap[63]);
                  } else if (!channel.isVocal()) {
                    if (!closure_38.isChannelMuted(channel.guild_id, channel.id)) {
                      if (closure_38.resolvedMessageNotifications(channel) === constants9.ALL_MESSAGES) {
                        obj5 = { "Null": null, "Null": null };
                      }
                    }
                  }
                }
              }
              obj5 = { "Null": null, "Null": null };
            }
          } else {
            let type;
            if (null != basicChannel) {
              type = basicChannel.type;
            }
          }
        }
      }
      value.oldestUnreadMessageId = message.id;
    }
  },
  MESSAGE_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: handleMessageDelete,
  MESSAGE_ACK: handleMessageAck,
  CHANNEL_ACK: function handleChannelAck(force) {
    let _location;
    let context;
    let immediate;
    let messageId;
    ({ messageId, immediate } = force);
    if (immediate === undefined) {
      immediate = false;
    }
    let flag = force.force;
    if (flag === undefined) {
      flag = false;
    }
    ({ context, location: _location } = force);
    const value = tmp10.get(force.channelId);
    const obj = { messageId, local: context !== closure_46, immediate, force: flag, isExplicitUserAction: true, location: _location, trackAnalytics: true };
    let flag2 = value.ack(obj);
    if (null != messageId) {
      value.rebuildChannelState();
      flag2 = true;
    }
    return flag2;
  },
  CHANNEL_LOCAL_ACK: function handleChannelLocalAck(channelId) {
    const value = tmp10.get(channelId.channelId);
    return value.ack({ messageId: undefined, immediate: undefined, force: undefined });
  },
  CHANNEL_PINS_ACK: function handleChannelPinsAck(channelId) {
    const value = tmp10.get(channelId.channelId);
    return value.ackPins(channelId.timestamp);
  },
  CHANNEL_PINS_UPDATE: function handleChannelPinsUpdate(channelId) {
    const value = tmp10.get(channelId.channelId);
    const tmp2 = parseTimestamp(channelId.lastPinTimestamp);
    let flag = value.lastPinTimestamp !== tmp2;
    if (flag) {
      value.lastPinTimestamp = tmp2;
      flag = true;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId);
    const channel = store3.getChannel(channelId);
    if (null != channel) {
      const value = tmp10.get(channel.id);
      let ackMessageId = value.ackMessageId;
      if (null == ackMessageId) {
        ackMessageId = importDefault(dependencyMap[42]).fromTimestamp(value.getAckTimestamp());
        const obj2 = importDefault(dependencyMap[42]);
      }
      value.ackMessageIdAtChannelSelect = ackMessageId;
      value.recordLastViewedTime();
    }
    clearManualAck(closure_66);
    clearManualAck(closure_67);
    let flag = false;
    if (closure_66 !== channelId) {
      const tmp11 = clearOldestUnreadMessageId(closure_66) || false;
      flag = clearOldestUnreadMessageId(closure_67) || (clearOldestUnreadMessageId(closure_66) || false);
      const tmp14 = clearOldestUnreadMessageId(closure_67) || (clearOldestUnreadMessageId(closure_66) || false);
    }
    let tmp15 = closure_66 === channelId;
    if (!tmp15) {
      let type;
      if (null != channel) {
        type = channel.type;
      }
      let hasItem = null != type;
      if (hasItem) {
        const GUILD_THREADS_ONLY = constants8.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(channel.type);
      }
      tmp15 = hasItem;
    }
    let tmp19 = flag;
    if (tmp15) {
      let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL, objectType: constants.ACK_AUTOMATIC };
      tmp19 = tryAck(obj, channelId) || flag;
      const tmp24 = tryAck(obj, channelId) || flag;
    }
    let tmp25 = tmp19;
    if (closure_66 === channelId) {
      obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR, objectType: constants.ACK_AUTOMATIC };
      tmp25 = tryAck(obj, currentSidebarChannelId) || tmp19;
      const tmp30 = tryAck(obj, currentSidebarChannelId) || tmp19;
    }
    closure_66 = channelId;
    closure_67 = currentSidebarChannelId;
    return tmp25;
  },
  OVERLAY_TEXT_CHAT_ACK_CHANNEL: function handleOverlayTextChatAckChannel(channelId) {
    channelId = channelId.channelId;
    const value = tmp10.get(channelId);
    let ackMessageId = value.ackMessageId;
    if (null == ackMessageId) {
      ackMessageId = importDefault(dependencyMap[42]).fromTimestamp(value.getAckTimestamp());
      const obj2 = importDefault(dependencyMap[42]);
    }
    value.ackMessageIdAtChannelSelect = ackMessageId;
    value.recordLastViewedTime();
    clearOldestUnreadMessageId(channelId);
    tryAck({ section: constants3.OVERLAY, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC }, channelId);
    return true;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      const value = tmp10.get(channelId);
      if (!value.hasMentions()) {
        value.oldestUnreadMessageId = null;
        let obj = { "Null": null, "Null": null };
        obj = { section: constants3.CHANNEL, object: constants2.ACK_VOICE_CHANNEL_SELECT, objectType: constants.ACK_SEMI_AUTOMATIC };
        obj.location = obj;
        return value.ack(obj);
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (callback4(channel.type)) {
      const value = tmp10.get(channel.id);
      value.lastMessageId = channel.lastMessageId;
      value.lastPinTimestamp = parseTimestamp(channel.lastPinTimestamp);
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    if (set.has(channel.type)) {
      const value = tmp10.get(channel.id);
      value.lastMessageId = channel.lastMessageId;
      value.lastPinTimestamp = parseTimestamp(channel.lastPinTimestamp);
      value.syncThreadSettings();
      if (channel.ownerId === id.getId()) {
        value.loadedMessages = true;
      }
    }
    const parent_id = channel.parent_id;
    tmp10.get(parent_id).lastMessageId = channel.id;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      tmp10.get(channel.id)._persisted = true;
      const obj = { channelId: parent_id, messageId: channel.id, manual: false };
      handleMessageAck(obj);
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    const tmp = !set.has(channel.type);
    let syncThreadSettingsResult = !tmp;
    if (!tmp) {
      const value = tmp10.get(channel.id);
      syncThreadSettingsResult = value.syncThreadSettings();
    }
    return syncThreadSettingsResult;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        let value = store.get(type.id);
        value.lastMessageId = type.lastMessageId;
        value.lastPinTimestamp = callback2(type.lastPinTimestamp);
        value._isThread = true;
        value._isActiveThread = true;
        value._isJoinedThread = closure_20.hasJoined(type.id);
        if (type.isForumPost()) {
          value = store.get(type.parent_id);
          if (obj.compare(value.lastMessageId, type.id) < 0) {
            value.lastMessageId = type.id;
          }
          const obj = callback(closure_2[42]);
        }
      }
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(id) {
    const value = tmp10.get(id.id);
    return value.syncThreadSettings();
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    let result = arg1(dependencyMap[64]).doesThreadMembersActionAffectMe(id);
    if (result) {
      const value = tmp10.get(id.id);
      result = value.syncThreadSettings();
    }
    return result;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  WINDOW_FOCUS: function handleWindowFocus(arg0) {
    const arg1 = arg0;
    let closure_1 = false;
    tmp8.forEachChannel((self, has) => {
      if (has.has(self.windowId)) {
        let focused = self.focused;
        let flag = false;
        if (null != self) {
          const value = closure_79.get(self);
          if (!focused) {
            focused = value.hasUnread();
          }
          if (!focused) {
            value.oldestUnreadMessageIdStale = true;
          }
          const obj = { section: constants3.CHANNEL, object: constants2.ACK_WINDOW_FOCUS, objectType: constants.ACK_AUTOMATIC };
          flag = callback(obj, self);
        }
        if (!flag) {
          flag = closure_1;
        }
        closure_1 = flag;
      }
    });
    return closure_1;
  },
  UPDATE_CHANNEL_DIMENSIONS: function handleScroll(channelId) {
    return tryAck({ section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SCROLL, objectType: constants.ACK_AUTOMATIC }, channelId.channelId, channelId.timestamp);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    let closure_68 = null;
  },
  BULK_ACK: function handleBulkAck(arg0) {
    let channels;
    let context;
    let onFinished;
    ({ channels, context, onFinished } = arg0);
    function _handleBulkAck(channels, context, onFinished) {
      const item = channels.forEach((messageId) => {
        const value = closure_79.get(messageId.channelId, messageId.readStateType);
        value.ack({ messageId: messageId.messageId, immediate: undefined, force: undefined });
      });
      if (context === closure_46) {
        const push = navigation.push;
        const items = [];
        HermesBuiltin.arraySpread(channels.map((channelId) => ({ channel_id: channelId.channelId, message_id: channelId.messageId, read_state_type: channelId.readStateType })), 0);
        HermesBuiltin.apply(items, navigation);
        if (!closure_71) {
          callback(onFinished);
        }
      }
    }(channels.filter((messageId) => {
      let hasUnreadOrMentionsResult = null != messageId.messageId;
      if (hasUnreadOrMentionsResult) {
        hasUnreadOrMentionsResult = closure_81.hasUnreadOrMentions(messageId.channelId, messageId.readStateType);
      }
      return hasUnreadOrMentionsResult;
    }), context, onFinished);
  },
  ENABLE_AUTOMATIC_ACK: function handleEnableAutomaticAck(arg0) {
    let channelId;
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  DISABLE_AUTOMATIC_ACK: function handleDisableAutomaticAck(arg0) {
    let channelId;
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  GUILD_FEATURE_ACK: handleGuildFeatureAck,
  GUILD_SCHEDULED_EVENT_CREATE: function handleGuildScheduledEventCreate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const value = tmp10.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
    value.lastMessageId = guildScheduledEvent.id;
    if (currentUserIsEventCreator(guildScheduledEvent)) {
      const obj = { type: "GUILD_FEATURE_ACK", id: guild_id, ackType: ReadStateTypes.GUILD_EVENT, ackedId: guildScheduledEvent.id, local: false };
      handleGuildFeatureAck(obj);
    } else if (!closure_38.isMuteScheduledEventsEnabled(guild_id)) {
      value.mentionCount = value.mentionCount + 1;
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const tmp = currentUserIsEventCreator(guildScheduledEvent);
    let tmp2 = !tmp;
    if (!tmp) {
      const items = [, ];
      ({ CANCELED: arr[0], COMPLETED: arr[1] } = GuildScheduledEventStatus);
      const tmp4 = !items.includes(guildScheduledEvent.status);
      if (!tmp4) {
        const value = tmp10.get(guild_id, ReadStateTypes.GUILD_EVENT);
        const result = value.handleGuildEventRemoval(guild_id, guildScheduledEvent.id);
      }
      tmp2 = !tmp4;
      const tmp5 = !tmp4;
    }
    return tmp2;
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleGuildScheduledEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (currentUserIsEventCreator(guildScheduledEvent)) {
      return false;
    } else {
      const value = tmp10.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
      const result = value.handleGuildEventRemoval(guildScheduledEvent.guild_id, guildScheduledEvent.id);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    return tmp10.clear(guild.guild.id, ReadStateTypes.GUILD_EVENT);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const latest_onboarding_question_id = guild.latest_onboarding_question_id;
    if (null != latest_onboarding_question_id) {
      const value = tmp10.get(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
      value._guildId = guild.id;
      value.lastMessageId = latest_onboarding_question_id;
    }
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    return tryAck({ section: constants3.CHANNEL, object: constants2.ACK_RESORT_THREADS, objectType: constants.ACK_AUTOMATIC }, channelId.channelId);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(chatOpen) {
    if (chatOpen.chatOpen) {
      const obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN, objectType: constants.ACK_AUTOMATIC };
      return tryAck(obj, tmp);
    }
  },
  DECAY_READ_STATES: setDecayedReadStateTimer,
  NOTIFICATION_CENTER_ITEM_CREATE: function handleNotificationCenterItemCreate(item) {
    item = item.item;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = tmp10.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      value.lastMessageId = item.id;
      if (closure_18.tabFocused) {
        const tmp10 = handleNonChannelAck(id, ReadStateTypes.NOTIFICATION_CENTER, item.id, false);
      } else {
        value.mentionCount = value.mentionCount + 1;
      }
    }
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else {
      if (relationship.relationship.type !== constants7.PENDING_INCOMING) {
        if (relationship.relationship.type !== constants7.FRIEND) {
          return false;
        }
      }
      const value = tmp10.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      let _Date = Date;
      if (relationship.relationship.type === constants7.FRIEND) {
        const _Date2 = Date;
        const prototype2 = _Date.prototype;
        _Date = new _Date(Date.now());
        let time = _Date.getTime();
      } else {
        const prototype = _Date.prototype;
        const _Date1 = new _Date(relationship.relationship.since);
        time = _Date1.getTime();
      }
      let num = 0;
      if (null != value.ackMessageId) {
        num = importDefault(dependencyMap[42]).extractTimestamp(value.ackMessageId);
        const obj3 = importDefault(dependencyMap[42]);
      }
      if (num < time) {
        value.lastMessageId = importDefault(dependencyMap[42]).fromTimestamp(time);
        if (closure_18.tabFocused) {
          handleNonChannelAck(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER, undefined, false);
        } else {
          const mentionCount = value.mentionCount;
          if (tmp7) {
            value.mentionCount = mentionCount - 1;
          } else {
            value.mentionCount = mentionCount + 1;
          }
        }
        const obj4 = importDefault(dependencyMap[42]);
      }
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else if (relationship.relationship.type !== constants7.PENDING_INCOMING) {
      return false;
    } else {
      const value = tmp10.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      const date = new Date(relationship.relationship.since);
      let num2 = 0;
      const time = date.getTime();
      if (null != value.ackMessageId) {
        num2 = importDefault(dependencyMap[42]).extractTimestamp(value.ackMessageId);
        const obj = importDefault(dependencyMap[42]);
      }
      if (num2 <= time) {
        const _Math = Math;
        value.mentionCount = Math.max(0, value.mentionCount - 1);
      }
    }
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleNotificationCenterItemAck(ids) {
    ids = ids.ids;
    let closure_0;
    if (!ids.optimistic) {
      if (!closure_18.active) {
        const currentUser = authStore.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        if (null == id) {
          return false;
        } else {
          closure_0 = tmp10.get(id, ReadStateTypes.NOTIFICATION_CENTER);
          const item = ids.forEach((arg0) => {
            if (obj.compare(closure_0.ackMessageId, arg0) < 0) {
              const _Math = Math;
              closure_0.mentionCount = Math.max(closure_0.mentionCount - 1, 0);
            }
          });
        }
      }
    }
    return false;
  },
  USER_NON_CHANNEL_ACK: function handleUserNonChannelAck(arg0) {
    let ackType;
    let ackedId;
    let local;
    ({ ackType, ackedId, local } = arg0);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = handleNonChannelAck(id, ackType, ackedId, local);
    }
    return tmp3;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_79;
        value = closure_79.get(value.id);
        let tmp4 = closure_87;
        let tmp5 = closure_87(value.lastPinTimestamp);
        let tmp6 = value.lastMessageId === value.lastMessageId && value.lastPinTimestamp === tmp5;
        if (!tmp6) {
          value.lastMessageId = value.lastMessageId;
          value.lastPinTimestamp = tmp5;
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function handleClearOldestUnreadMessage(channelId) {
    return clearOldestUnreadMessageId(channelId.channelId);
  },
  TRY_ACK: function handleTryAck(location) {
    return tryAck(location.location, location.channelId);
  },
  MESSAGE_REQUEST_ACK: function handleMessageRequestAck(ackedId) {
    ackedId = ackedId.ackedId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = tmp10.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (ackedId === value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = ackedId;
        const obj = { guildId: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, messageId: ackedId };
        value.ack(obj);
      }
    }
  },
  MESSAGE_REQUEST_CLEAR_ACK: function handleMessageRequestClearAck() {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = tmp10.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (null == value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = undefined;
      }
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let tmp = state.state === constants11.ACTIVE;
    if (tmp) {
      const obj = { section: constants3.CHANNEL, object: constants2.ACK_APP_FOREGROUND, objectType: constants.ACK_AUTOMATIC };
      tmp = tryAck(obj, importDefaultResult.getChannelId());
    }
    return tmp;
  }
});
const obj = {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSync(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10015 in changesByChannelId) {
      let tmp16 = key10015;
      let tmp17 = changesByChannelId[key10015];
      let tmp18 = closure_79;
      let ifExists = closure_79.getIfExists(key10015);
      if (null == ifExists) {
        continue;
      } else {
        let new_messages = tmp17.new_messages;
        let first;
        let tmp = closure_83;
        if (null != new_messages) {
          first = new_messages[0];
        }
        let items = [first];
        let modified_messages = tmp17.modified_messages;
        let items1 = modified_messages;
        if (null == modified_messages) {
          items1 = [];
        }
        let combined = items.concat(items1);
        let tmp3 = closure_0;
        let tmp4 = closure_2;
        let tmpResult = tmp(combined.filter(closure_0(closure_2[60]).isNotNullish));
        let iter = tmpResult();
        let tmp6 = new_messages;
        let tmp7 = modified_messages;
        let tmp8 = iter;
        let tmp9 = tmpResult;
        let iter2 = iter;
        if (iter.done) {
          continue;
        } else {
          while (true) {
            let value = iter2.value;
            let tmp10 = closure_1;
            let tmp11 = closure_2;
            let obj = closure_1(closure_2[42]);
            if (1 === obj.compare(value.id, ifExists.lastMessageId)) {
              ifExists.lastMessageId = value.id;
            }
            let iter3 = tmpResult();
            let tmp12 = new_messages;
            let tmp13 = modified_messages;
            let tmp14 = iter3;
            let tmp15 = tmpResult;
            iter2 = iter3;
            if (iter3.done) {
              break;
            } else {
              // continue
            }
          }
        }
        continue;
      }
      continue;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(readState) {
    let guilds;
    let initialPrivateChannels;
    let iter2;
    let relationships;
    readState = readState.readState;
    const arg1 = readState;
    ({ guilds, relationships, initialPrivateChannels } = readState);
    setDecayedReadStateTimer();
    let closure_68 = null;
    let partial = closure_69;
    if (!closure_69) {
      partial = readState.partial;
    }
    if (!partial) {
      tmp10.clearAll();
    }
    closure_69 = false;
    const entries = readState.entries;
    const item = entries.forEach((read_state_type) => {
      let CHANNEL = read_state_type.read_state_type;
      if (null == CHANNEL) {
        CHANNEL = constants.CHANNEL;
      }
      let tmp2 = read_state_type;
      if (CHANNEL !== constants.CHANNEL) {
        const obj = {};
        ({ id: obj.id, read_state_type: obj.read_state_type, badge_count: obj.mention_count, last_acked_id: obj.last_message_id } = read_state_type);
        tmp2 = obj;
      }
      const value = closure_79.get(tmp2.id, CHANNEL);
      value._persisted = true;
      const mention_count = tmp2.mention_count;
      let num = 0;
      if (null != mention_count) {
        num = mention_count;
      }
      value._mentionCount = num;
      ({ flags: obj2.flags, last_viewed: obj2.lastViewed } = tmp2);
      const basicChannel = basicChannel.getBasicChannel(tmp2.id);
      if (null != basicChannel) {
        if (callback2(basicChannel.type)) {
          value.ackMessageId = callback(closure_2[42]).fromTimestamp(callback6(basicChannel.guild_id, basicChannel.id));
          const obj3 = callback(closure_2[42]);
        }
        value.ackedWhileCached = undefined;
        value.ackPinTimestamp = callback5(tmp2.last_pin_timestamp);
        const _mentionChannels = closure_79._mentionChannels;
        _mentionChannels.delete(value.channelId);
        if (tmp13) {
          const _mentionChannels2 = closure_79._mentionChannels;
          _mentionChannels2.add(value.channelId);
        }
      }
      if (value.ackedWhileCached) {
        if (-1 === obj4.compare(value.ackMessageId, tmp2.last_message_id)) {
          value.ackMessageId = tmp2.last_message_id;
        }
        const obj4 = callback(closure_2[42]);
      } else {
        value.ackMessageId = tmp2.last_message_id;
      }
    });
    tmp10.resetGuildSentinels();
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null != id) {
      let value = tmp10.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      value.lastMessageId = importDefault(dependencyMap[42]).fromTimestamp(Date.now());
      const obj = importDefault(dependencyMap[42]);
    }
    mergeRelationships(relationships);
    mergeChannels(initialPrivateChannels);
    const tmp16 = _createForOfIteratorHelperLoose(guilds);
    let iter = tmp16();
    if (!iter.done) {
      do {
        value = iter.value;
        let tmp17 = closure_95;
        if ("full_sync" === value.channels.op) {
          let writes = value.channels.items;
        } else {
          writes = value.channels.writes;
        }
        let tmp17Result = tmp17(writes);
        if (null != value.channelTimestampUpdates) {
          let tmp19 = closure_105;
          let tmp20 = closure_105(value.channelTimestampUpdates);
        }
        let tmp21 = closure_97;
        let tmp22 = closure_97(value);
        iter2 = tmp16();
        iter = iter2;
      } while (!iter2.done);
    }
    clearDeleteOldReadStatesTimer();
    const timeout = setTimeout(() => {
      let iter2;
      const tmp2 = callback3(readState.entries);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let CHANNEL = value.read_state_type;
          if (null == CHANNEL) {
            let tmp3 = closure_61;
            CHANNEL = closure_61.CHANNEL;
          }
          let tmp4 = closure_79;
          value = closure_79.get(value.id, CHANNEL);
          if (value.shouldDeleteReadState(tmp)) {
            let tmp5 = closure_80;
            let tmp6 = closure_80(value);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
    }, 10 * importDefault(dependencyMap[43]).Millis.SECOND);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    mergeChannels(lazyPrivateChannels.lazyPrivateChannels);
  },
  LOGOUT: clearDeleteOldReadStatesTimer,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(readStates) {
    readStates = readStates.readStates;
    setDecayedReadStateTimer();
    let closure_68 = null;
    const selectedChannelId = readStates.selectedChannelId;
    const currentSidebarChannelId = store2.getCurrentSidebarChannelId(selectedChannelId);
    tmp10.clearAll();
    const item = readStates.forEach((channelId) => {
      const value = closure_79.get(channelId.channelId);
      const result = value.deserializeForOverlay(channelId);
      if (value.type === constants.CHANNEL) {
        value.rebuildChannelState();
      }
    });
  },
  CACHE_LOADED: function handleCacheLoaded(readStates) {
    readStates = readStates.readStates;
    let closure_69 = true;
    setDecayedReadStateTimer();
    const item = readStates.forEach((type) => {
      let CHANNEL = type.type;
      if (null == CHANNEL) {
        CHANNEL = constants.CHANNEL;
      }
      type.type = CHANNEL;
      const _readStates = closure_79._readStates;
      const value = _readStates.get(CHANNEL);
      let map = value;
      if (null == value) {
        const _Map = Map;
        map = new Map();
      }
      const result = map.set(type.channelId, callback(closure_2[65]).dangerouslyCast(type, closure_79));
      const _readStates2 = closure_79._readStates;
      if (!_readStates2.has(CHANNEL)) {
        const _readStates3 = closure_79._readStates;
        const result1 = _readStates3.set(CHANNEL, map);
      }
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const arg1 = guild;
    let closure_1 = generateOldThreadCutoff();
    const item = tmp10.forEach((guildId) => {
      let result = guildId.guildId === guild.id;
      if (result) {
        result = guildId.shouldDeleteReadState(closure_1);
      }
      if (result) {
        guildId.delete(false);
      }
    });
    if ("full_sync" === guild.channels.op) {
      let writes = guild.channels.items;
    } else {
      writes = guild.channels.writes;
    }
    mergeChannels(writes);
    if (null != guild.channelTimestampUpdates) {
      mergeChannelTimestampUpdates(guild.channelTimestampUpdates);
    }
    mergeForGuild(guild);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(arg0) {
    let channelId;
    let isAfter;
    let messages;
    ({ channelId, isAfter, messages } = arg0);
    const value = tmp10.get(channelId);
    value.loadedMessages = true;
    let tmp = null == value.lastMessageId;
    if (tmp) {
      tmp = messages.length > 0;
    }
    if (tmp) {
      value.lastMessageId = messages[0].id;
    }
    messages = store4.getMessages(channelId);
    if (null != messages) {
      if (messages.length > 0) {
        value.rebuildChannelState();
        const obj3 = importDefault(dependencyMap[42]);
      }
      if (!messages.hasPresent()) {
        if (messages.jumpTargetId !== value.ackMessageId) {
          if (isAfter) {
            isAfter = null != value.ackMessageId;
          }
          if (isAfter) {
            isAfter = messages.has(value.ackMessageId, true);
          }
          if (isAfter) {
            value.unreadCount = value.unreadCount + messages.length;
            if (null == value.oldestUnreadMessageId) {
              value.rebuildChannelState();
            }
          }
        }
      }
    }
    const mapped = messages.map((thread) => thread.thread);
    mergeServerChannels(mapped.filter(arg1(dependencyMap[60]).isNotNullish));
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(messages) {
    messages = messages.messages;
    if (obj.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
      if (0 === messages.length) {
        return false;
      } else {
        const value = tmp10.get(messages.channelId);
        const id = messages[0].id;
        let tmp3 = null == value.lastMessageId;
        if (!tmp3) {
          tmp3 = importDefault(dependencyMap[42]).compare(id, value.lastMessageId) > 0;
          const obj3 = importDefault(dependencyMap[42]);
        }
        if (tmp3) {
          value.lastMessageId = id;
          value.rebuildChannelState();
        }
      }
    } else {
      return false;
    }
    const obj = arg1(dependencyMap[61]);
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    let channelId;
    let message;
    ({ channelId, message } = isPushNotification);
    const value = tmp10.get(channelId);
    let hasUnreadResult = value.hasUnread();
    value.lastMessageId = message.id;
    const currentUser = authStore.getCurrentUser();
    const basicChannel = store3.getBasicChannel(channelId);
    if (null != message.author) {
      if (null != currentUser) {
        if (message.author.id === currentUser.id) {
          const SELF_MENTIONABLE_SYSTEM = constants10.SELF_MENTIONABLE_SYSTEM;
          if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
            if (null != value.outgoingAck) {
              value.clearOutgoingAck();
            }
            let obj = { channelId, messageId: message.id, manual: false };
            return handleMessageAck(obj);
          }
        }
      }
    }
    let obj2 = arg1(dependencyMap[62]);
    const rootNavigationRef = obj2.getRootNavigationRef();
    let isReadyResult;
    if (null != rootNavigationRef) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (true === isReadyResult) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      if (uiStore.getChatOpen(value.channelId)) {
        let channelId2 = value.channelId;
      } else {
        let name;
        if (null != currentRoute) {
          name = currentRoute.name;
        }
        if ("channel" === name) {
          channelId2 = currentRoute.params.channelId;
        } else {
          let name1;
          if (null != currentRoute) {
            name1 = currentRoute.name;
          }
          if ("guilds" === name1) {
            const params = currentRoute.params;
            channelId = undefined;
            if (null != params) {
              channelId = params.channelId;
            }
            channelId2 = channelId;
          }
        }
      }
    } else if (null == rootNavigationRef) {
      const channelId1 = importDefaultResult.getChannelId();
      const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId1);
      channelId2 = channelId1;
    }
    if (tmp18) {
      if (shouldAutomaticallyAck(value)) {
        if (!isPushNotification.isPushNotification) {
          obj = { messageId: message.id, trackAnalytics: true };
          const obj1 = { section: isOverlayAckable(undefined, value.channelId) ? constants3.OVERLAY : constants3.CHANNEL, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
          obj.location = obj1;
          return value.ack(obj);
        }
      }
    }
    if (isOverlayAckable(undefined, channelId)) {
      obj2 = { messageId: message.id, trackAnalytics: true };
      const obj3 = { section: constants3.OVERLAY, object: constants2.ACK_INCOMING_MESSAGE, objectType: constants.ACK_AUTOMATIC };
      obj2.location = obj3;
      return value.ack(obj2);
    } else {
      if (null != value.oldestUnreadMessageId) {
        if (!value.oldestUnreadMessageIdStale) {
          if (!hasUnreadResult) {
            hasUnreadResult = arg1(dependencyMap[50]).getFocusedChannelId() === channelId;
            const obj7 = arg1(dependencyMap[50]);
          }
          if (!hasUnreadResult) {
            value.oldestUnreadMessageId = message.id;
          }
        }
        if (!tmp2) {
          value.unreadCount = value.unreadCount + 1;
        }
        if (!closure_36.isBlockedOrIgnoredForMessage(message)) {
          if (message.type !== constants6.RECIPIENT_REMOVE) {
            if (null != currentUser) {
              const obj4 = { rawMessage: message, userId: currentUser.id, suppressEveryone: closure_38.isSuppressEveryoneEnabled(value.guildId), suppressRoles: closure_38.isSuppressRolesEnabled(value.guildId) };
              if (obj8.isRawMessageMentioned(obj4)) {
                let obj5 = { "Null": null, "Null": null };
              }
              if (obj5.shouldMention) {
                value.isMentionLowImportance = obj5.isMentionLowImportance;
                value.mentionCount = value.mentionCount + 1;
                if (null != currentUser) {
                  tmp10.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = message.id;
                  if (closure_18.tabFocused) {
                    handleNonChannelAck(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER, undefined, false);
                  }
                }
              }
              const obj8 = arg1(dependencyMap[45]);
            }
            const channel = store3.getChannel(message.channel_id);
            if (isNonMutedPrivateMessage(channel)) {
              obj5 = { "Null": null, "Null": null };
            } else {
              if (closure_38.mentionOnAllMessages) {
                if (null != channel) {
                  if (channel.isThread()) {
                    if (obj12.computeThreadNotificationSetting(channel) === ThreadMemberFlags.ALL_MESSAGES) {
                      obj5 = { "Null": null, "Null": null };
                    }
                    const obj12 = arg1(dependencyMap[63]);
                  } else if (!channel.isVocal()) {
                    if (!closure_38.isChannelMuted(channel.guild_id, channel.id)) {
                      if (closure_38.resolvedMessageNotifications(channel) === constants9.ALL_MESSAGES) {
                        obj5 = { "Null": null, "Null": null };
                      }
                    }
                  }
                }
              }
              obj5 = { "Null": null, "Null": null };
            }
          } else {
            let type;
            if (null != basicChannel) {
              type = basicChannel.type;
            }
          }
        }
      }
      value.oldestUnreadMessageId = message.id;
    }
  },
  MESSAGE_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: handleMessageDelete,
  MESSAGE_ACK: handleMessageAck,
  CHANNEL_ACK: function handleChannelAck(force) {
    let _location;
    let context;
    let immediate;
    let messageId;
    ({ messageId, immediate } = force);
    if (immediate === undefined) {
      immediate = false;
    }
    let flag = force.force;
    if (flag === undefined) {
      flag = false;
    }
    ({ context, location: _location } = force);
    const value = tmp10.get(force.channelId);
    const obj = { messageId, local: context !== closure_46, immediate, force: flag, isExplicitUserAction: true, location: _location, trackAnalytics: true };
    let flag2 = value.ack(obj);
    if (null != messageId) {
      value.rebuildChannelState();
      flag2 = true;
    }
    return flag2;
  },
  CHANNEL_LOCAL_ACK: function handleChannelLocalAck(channelId) {
    const value = tmp10.get(channelId.channelId);
    return value.ack({ messageId: undefined, immediate: undefined, force: undefined });
  },
  CHANNEL_PINS_ACK: function handleChannelPinsAck(channelId) {
    const value = tmp10.get(channelId.channelId);
    return value.ackPins(channelId.timestamp);
  },
  CHANNEL_PINS_UPDATE: function handleChannelPinsUpdate(channelId) {
    const value = tmp10.get(channelId.channelId);
    const tmp2 = parseTimestamp(channelId.lastPinTimestamp);
    let flag = value.lastPinTimestamp !== tmp2;
    if (flag) {
      value.lastPinTimestamp = tmp2;
      flag = true;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const currentSidebarChannelId = store2.getCurrentSidebarChannelId(channelId);
    const channel = store3.getChannel(channelId);
    if (null != channel) {
      const value = tmp10.get(channel.id);
      let ackMessageId = value.ackMessageId;
      if (null == ackMessageId) {
        ackMessageId = importDefault(dependencyMap[42]).fromTimestamp(value.getAckTimestamp());
        const obj2 = importDefault(dependencyMap[42]);
      }
      value.ackMessageIdAtChannelSelect = ackMessageId;
      value.recordLastViewedTime();
    }
    clearManualAck(closure_66);
    clearManualAck(closure_67);
    let flag = false;
    if (closure_66 !== channelId) {
      const tmp11 = clearOldestUnreadMessageId(closure_66) || false;
      flag = clearOldestUnreadMessageId(closure_67) || (clearOldestUnreadMessageId(closure_66) || false);
      const tmp14 = clearOldestUnreadMessageId(closure_67) || (clearOldestUnreadMessageId(closure_66) || false);
    }
    let tmp15 = closure_66 === channelId;
    if (!tmp15) {
      let type;
      if (null != channel) {
        type = channel.type;
      }
      let hasItem = null != type;
      if (hasItem) {
        const GUILD_THREADS_ONLY = constants8.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(channel.type);
      }
      tmp15 = hasItem;
    }
    let tmp19 = flag;
    if (tmp15) {
      let obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL, objectType: constants.ACK_AUTOMATIC };
      tmp19 = tryAck(obj, channelId) || flag;
      const tmp24 = tryAck(obj, channelId) || flag;
    }
    let tmp25 = tmp19;
    if (closure_66 === channelId) {
      obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR, objectType: constants.ACK_AUTOMATIC };
      tmp25 = tryAck(obj, currentSidebarChannelId) || tmp19;
      const tmp30 = tryAck(obj, currentSidebarChannelId) || tmp19;
    }
    closure_66 = channelId;
    closure_67 = currentSidebarChannelId;
    return tmp25;
  },
  OVERLAY_TEXT_CHAT_ACK_CHANNEL: function handleOverlayTextChatAckChannel(channelId) {
    channelId = channelId.channelId;
    const value = tmp10.get(channelId);
    let ackMessageId = value.ackMessageId;
    if (null == ackMessageId) {
      ackMessageId = importDefault(dependencyMap[42]).fromTimestamp(value.getAckTimestamp());
      const obj2 = importDefault(dependencyMap[42]);
    }
    value.ackMessageIdAtChannelSelect = ackMessageId;
    value.recordLastViewedTime();
    clearOldestUnreadMessageId(channelId);
    tryAck({ section: constants3.OVERLAY, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC }, channelId);
    return true;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      const value = tmp10.get(channelId);
      if (!value.hasMentions()) {
        value.oldestUnreadMessageId = null;
        let obj = { "Null": null, "Null": null };
        obj = { section: constants3.CHANNEL, object: constants2.ACK_VOICE_CHANNEL_SELECT, objectType: constants.ACK_SEMI_AUTOMATIC };
        obj.location = obj;
        return value.ack(obj);
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (callback4(channel.type)) {
      const value = tmp10.get(channel.id);
      value.lastMessageId = channel.lastMessageId;
      value.lastPinTimestamp = parseTimestamp(channel.lastPinTimestamp);
    } else {
      return false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    if (set.has(channel.type)) {
      const value = tmp10.get(channel.id);
      value.lastMessageId = channel.lastMessageId;
      value.lastPinTimestamp = parseTimestamp(channel.lastPinTimestamp);
      value.syncThreadSettings();
      if (channel.ownerId === id.getId()) {
        value.loadedMessages = true;
      }
    }
    const parent_id = channel.parent_id;
    tmp10.get(parent_id).lastMessageId = channel.id;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      tmp10.get(channel.id)._persisted = true;
      const obj = { channelId: parent_id, messageId: channel.id, manual: false };
      handleMessageAck(obj);
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    const tmp = !set.has(channel.type);
    let syncThreadSettingsResult = !tmp;
    if (!tmp) {
      const value = tmp10.get(channel.id);
      syncThreadSettingsResult = value.syncThreadSettings();
    }
    return syncThreadSettingsResult;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        let value = store.get(type.id);
        value.lastMessageId = type.lastMessageId;
        value.lastPinTimestamp = callback2(type.lastPinTimestamp);
        value._isThread = true;
        value._isActiveThread = true;
        value._isJoinedThread = closure_20.hasJoined(type.id);
        if (type.isForumPost()) {
          value = store.get(type.parent_id);
          if (obj.compare(value.lastMessageId, type.id) < 0) {
            value.lastMessageId = type.id;
          }
          const obj = callback(closure_2[42]);
        }
      }
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(id) {
    const value = tmp10.get(id.id);
    return value.syncThreadSettings();
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    let result = arg1(dependencyMap[64]).doesThreadMembersActionAffectMe(id);
    if (result) {
      const value = tmp10.get(id.id);
      result = value.syncThreadSettings();
    }
    return result;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  WINDOW_FOCUS: function handleWindowFocus(arg0) {
    const arg1 = arg0;
    let closure_1 = false;
    tmp8.forEachChannel((self, has) => {
      if (has.has(self.windowId)) {
        let focused = self.focused;
        let flag = false;
        if (null != self) {
          const value = closure_79.get(self);
          if (!focused) {
            focused = value.hasUnread();
          }
          if (!focused) {
            value.oldestUnreadMessageIdStale = true;
          }
          const obj = { section: constants3.CHANNEL, object: constants2.ACK_WINDOW_FOCUS, objectType: constants.ACK_AUTOMATIC };
          flag = callback(obj, self);
        }
        if (!flag) {
          flag = closure_1;
        }
        closure_1 = flag;
      }
    });
    return closure_1;
  },
  UPDATE_CHANNEL_DIMENSIONS: function handleScroll(channelId) {
    return tryAck({ section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SCROLL, objectType: constants.ACK_AUTOMATIC }, channelId.channelId, channelId.timestamp);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    let closure_68 = null;
  },
  BULK_ACK: function handleBulkAck(arg0) {
    let channels;
    let context;
    let onFinished;
    ({ channels, context, onFinished } = arg0);
    function _handleBulkAck(channels, context, onFinished) {
      const item = channels.forEach((messageId) => {
        const value = closure_79.get(messageId.channelId, messageId.readStateType);
        value.ack({ messageId: messageId.messageId, immediate: undefined, force: undefined });
      });
      if (context === closure_46) {
        const push = navigation.push;
        const items = [];
        HermesBuiltin.arraySpread(channels.map((channelId) => ({ channel_id: channelId.channelId, message_id: channelId.messageId, read_state_type: channelId.readStateType })), 0);
        HermesBuiltin.apply(items, navigation);
        if (!closure_71) {
          callback(onFinished);
        }
      }
    }(channels.filter((messageId) => {
      let hasUnreadOrMentionsResult = null != messageId.messageId;
      if (hasUnreadOrMentionsResult) {
        hasUnreadOrMentionsResult = closure_81.hasUnreadOrMentions(messageId.channelId, messageId.readStateType);
      }
      return hasUnreadOrMentionsResult;
    }), context, onFinished);
  },
  ENABLE_AUTOMATIC_ACK: function handleEnableAutomaticAck(arg0) {
    let channelId;
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  DISABLE_AUTOMATIC_ACK: function handleDisableAutomaticAck(arg0) {
    let channelId;
    let windowId;
    ({ channelId, windowId } = arg0);
    return false;
  },
  GUILD_FEATURE_ACK: handleGuildFeatureAck,
  GUILD_SCHEDULED_EVENT_CREATE: function handleGuildScheduledEventCreate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const value = tmp10.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
    value.lastMessageId = guildScheduledEvent.id;
    if (currentUserIsEventCreator(guildScheduledEvent)) {
      const obj = { type: "GUILD_FEATURE_ACK", id: guild_id, ackType: ReadStateTypes.GUILD_EVENT, ackedId: guildScheduledEvent.id, local: false };
      handleGuildFeatureAck(obj);
    } else if (!closure_38.isMuteScheduledEventsEnabled(guild_id)) {
      value.mentionCount = value.mentionCount + 1;
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const guild_id = guildScheduledEvent.guild_id;
    const tmp = currentUserIsEventCreator(guildScheduledEvent);
    let tmp2 = !tmp;
    if (!tmp) {
      const items = [, ];
      ({ CANCELED: arr[0], COMPLETED: arr[1] } = GuildScheduledEventStatus);
      const tmp4 = !items.includes(guildScheduledEvent.status);
      if (!tmp4) {
        const value = tmp10.get(guild_id, ReadStateTypes.GUILD_EVENT);
        const result = value.handleGuildEventRemoval(guild_id, guildScheduledEvent.id);
      }
      tmp2 = !tmp4;
      const tmp5 = !tmp4;
    }
    return tmp2;
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleGuildScheduledEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (currentUserIsEventCreator(guildScheduledEvent)) {
      return false;
    } else {
      const value = tmp10.get(guildScheduledEvent.guild_id, ReadStateTypes.GUILD_EVENT);
      const result = value.handleGuildEventRemoval(guildScheduledEvent.guild_id, guildScheduledEvent.id);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    return tmp10.clear(guild.guild.id, ReadStateTypes.GUILD_EVENT);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const latest_onboarding_question_id = guild.latest_onboarding_question_id;
    if (null != latest_onboarding_question_id) {
      const value = tmp10.get(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION);
      value._guildId = guild.id;
      value.lastMessageId = latest_onboarding_question_id;
    }
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    return tryAck({ section: constants3.CHANNEL, object: constants2.ACK_RESORT_THREADS, objectType: constants.ACK_AUTOMATIC }, channelId.channelId);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(chatOpen) {
    if (chatOpen.chatOpen) {
      const obj = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN, objectType: constants.ACK_AUTOMATIC };
      return tryAck(obj, tmp);
    }
  },
  DECAY_READ_STATES: setDecayedReadStateTimer,
  NOTIFICATION_CENTER_ITEM_CREATE: function handleNotificationCenterItemCreate(item) {
    item = item.item;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = tmp10.get(id, ReadStateTypes.NOTIFICATION_CENTER);
      value.lastMessageId = item.id;
      if (closure_18.tabFocused) {
        const tmp10 = handleNonChannelAck(id, ReadStateTypes.NOTIFICATION_CENTER, item.id, false);
      } else {
        value.mentionCount = value.mentionCount + 1;
      }
    }
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else {
      if (relationship.relationship.type !== constants7.PENDING_INCOMING) {
        if (relationship.relationship.type !== constants7.FRIEND) {
          return false;
        }
      }
      const value = tmp10.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      let _Date = Date;
      if (relationship.relationship.type === constants7.FRIEND) {
        const _Date2 = Date;
        const prototype2 = _Date.prototype;
        _Date = new _Date(Date.now());
        let time = _Date.getTime();
      } else {
        const prototype = _Date.prototype;
        const _Date1 = new _Date(relationship.relationship.since);
        time = _Date1.getTime();
      }
      let num = 0;
      if (null != value.ackMessageId) {
        num = importDefault(dependencyMap[42]).extractTimestamp(value.ackMessageId);
        const obj3 = importDefault(dependencyMap[42]);
      }
      if (num < time) {
        value.lastMessageId = importDefault(dependencyMap[42]).fromTimestamp(time);
        if (closure_18.tabFocused) {
          handleNonChannelAck(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER, undefined, false);
        } else {
          const mentionCount = value.mentionCount;
          if (tmp7) {
            value.mentionCount = mentionCount - 1;
          } else {
            value.mentionCount = mentionCount + 1;
          }
        }
        const obj4 = importDefault(dependencyMap[42]);
      }
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const currentUser = authStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else if (null == relationship.relationship.since) {
      return false;
    } else if (relationship.relationship.type !== constants7.PENDING_INCOMING) {
      return false;
    } else {
      const value = tmp10.get(currentUser.id, ReadStateTypes.NOTIFICATION_CENTER);
      const _Date = Date;
      const date = new Date(relationship.relationship.since);
      let num2 = 0;
      const time = date.getTime();
      if (null != value.ackMessageId) {
        num2 = importDefault(dependencyMap[42]).extractTimestamp(value.ackMessageId);
        const obj = importDefault(dependencyMap[42]);
      }
      if (num2 <= time) {
        const _Math = Math;
        value.mentionCount = Math.max(0, value.mentionCount - 1);
      }
    }
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleNotificationCenterItemAck(ids) {
    ids = ids.ids;
    let closure_0;
    if (!ids.optimistic) {
      if (!closure_18.active) {
        const currentUser = authStore.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        if (null == id) {
          return false;
        } else {
          closure_0 = tmp10.get(id, ReadStateTypes.NOTIFICATION_CENTER);
          const item = ids.forEach((arg0) => {
            if (obj.compare(closure_0.ackMessageId, arg0) < 0) {
              const _Math = Math;
              closure_0.mentionCount = Math.max(closure_0.mentionCount - 1, 0);
            }
          });
        }
      }
    }
    return false;
  },
  USER_NON_CHANNEL_ACK: function handleUserNonChannelAck(arg0) {
    let ackType;
    let ackedId;
    let local;
    ({ ackType, ackedId, local } = arg0);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = handleNonChannelAck(id, ackType, ackedId, local);
    }
    return tmp3;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_79;
        value = closure_79.get(value.id);
        let tmp4 = closure_87;
        let tmp5 = closure_87(value.lastPinTimestamp);
        let tmp6 = value.lastMessageId === value.lastMessageId && value.lastPinTimestamp === tmp5;
        if (!tmp6) {
          value.lastMessageId = value.lastMessageId;
          value.lastPinTimestamp = tmp5;
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function handleClearOldestUnreadMessage(channelId) {
    return clearOldestUnreadMessageId(channelId.channelId);
  },
  TRY_ACK: function handleTryAck(location) {
    return tryAck(location.location, location.channelId);
  },
  MESSAGE_REQUEST_ACK: function handleMessageRequestAck(ackedId) {
    ackedId = ackedId.ackedId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = tmp10.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (ackedId === value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = ackedId;
        const obj = { guildId: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, messageId: ackedId };
        value.ack(obj);
      }
    }
  },
  MESSAGE_REQUEST_CLEAR_ACK: function handleMessageRequestClearAck() {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (null == id) {
      return false;
    } else {
      const value = tmp10.get(id, ReadStateTypes.MESSAGE_REQUESTS);
      if (null == value.ackMessageId) {
        return false;
      } else {
        value.ackMessageId = undefined;
      }
    }
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let tmp = state.state === constants11.ACTIVE;
    if (tmp) {
      const obj = { section: constants3.CHANNEL, object: constants2.ACK_APP_FOREGROUND, objectType: constants.ACK_AUTOMATIC };
      tmp = tryAck(obj, importDefaultResult.getChannelId());
    }
    return tmp;
  }
};
const obj2 = arg1(dependencyMap[59]);
const result = arg1(dependencyMap[69]).fileFinishedImporting("stores/ReadStateStore.tsx");

export default tmp13;
export { shouldBadgeMessage };
export const ReadState = tmp10;
