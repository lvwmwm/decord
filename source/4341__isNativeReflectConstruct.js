// Module ID: 4341
// Function ID: 38382
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4341 (_isNativeReflectConstruct)
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
function reinjectEphemerals(channelId, truncateResult) {
  if (truncateResult.hasMoreAfter) {
    return truncateResult;
  } else {
    const messages = messages.getMessages(channelId);
    if (0 === messages.length) {
      return truncateResult;
    } else {
      const found = messages.filter((id) => !arg1.has(id.id));
      const importDefault = found;
      let mutation = truncateResult;
      if (0 !== found.length) {
        mutation = truncateResult.mutate((_merge) => {
          _merge._merge(found);
          const _array = _merge._array;
          const sorted = _array.sort((id, id2) => callback(closure_2[23]).compare(id.id, id2.id));
        }, true);
      }
      return mutation;
    }
  }
}
function handleConnectionOpen() {
  const item = importDefault(dependencyMap[24]).forEach((mutate) => {
    callback(closure_2[24]).commit(mutate.mutate({}));
  });
  set.clear();
}
async function _addPushNotificationMessageIfNotCached(arg0, id, arg2, arg3) {
  const databaseResult = callback(closure_2[26]).database();
  const basicChannel = basicChannel.getBasicChannel(arg0);
  if (null != databaseResult) {
    if (null != basicChannel) {
      const obj2 = callback(closure_2[26]);
      const messagesResult = callback(closure_2[26]).messages(databaseResult);
    }
  }
  closure_30.log("Push notification message not in cache, adding directly", id.id, id.channel_id);
  const obj = callback(closure_2[26]);
  const tmp = arg0;
  const orCreate = callback(closure_2[24]).getOrCreate(arg0);
  const obj4 = callback(closure_2[24]);
  callback(closure_2[24]).commit(orCreate.receivePushNotification(id, arg2));
  closure_32.emitChange();
}
function receiveMediaMentionMessage(message) {
  const media_mention = message.media_mention;
  let message_id;
  if (null != media_mention) {
    message_id = media_mention.message_id;
  }
  if (null != message_id) {
    const attachment_id = message.media_mention.attachment_id;
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(attachment_id);
    let obj = {};
    const merged = Object.assign(message);
    obj["channel_id"] = attachment_id;
    obj["type"] = constants3.MEDIA_MENTION_MESSAGE;
    obj["id"] = message.media_mention.message_id;
    obj = { channel_id: message.channel_id, message_id: message.media_mention.message_id, type: constants.DEFAULT };
    const channel = channel.getChannel(message.channel_id);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj["message_reference"] = obj;
    const obj4 = importDefault(dependencyMap[24]);
    const obj1 = { ready: true };
    const mutation = orCreate.receiveMessage(obj, false).mutate(obj1);
    const receiveMessageResult = orCreate.receiveMessage(obj, false);
    importDefault(dependencyMap[24]).commit(mutation);
    const obj3 = importDefault(dependencyMap[24]);
  }
}
function cleanMediaMention(orCreate) {
  if (null != orCreate) {
    const mediaMention2 = orCreate.mediaMention;
    let attachment_id;
    if (null != mediaMention2) {
      attachment_id = mediaMention2.attachment_id;
    }
    if (null != attachment_id) {
      const value = importDefault(dependencyMap[24]).get(attachment_id);
      if (null != value) {
        const mediaMention = orCreate.mediaMention;
        let message_id;
        if (null != mediaMention) {
          message_id = mediaMention.message_id;
        }
        if (null != message_id) {
          const removeResult = value.remove(message_id);
          importDefault(dependencyMap[24]).commit(removeResult);
          const obj3 = importDefault(dependencyMap[24]);
        }
      }
      const obj = importDefault(dependencyMap[24]);
    }
  }
}
function handleCleanup() {
  const item = importDefault(dependencyMap[24]).forEach((channelId) => {
    channelId = channelId.channelId;
    if (null == channel.getChannel(channelId)) {
      callback(closure_2[24]).clear(channelId);
      const obj = callback(closure_2[24]);
    }
  });
}
function handleRelationshipUpdate() {
  let closure_0 = false;
  const item = importDefault(dependencyMap[24]).forEach((reset) => {
    callback(closure_2[24]).commit(reset.reset(reset.map((blocked) => {
      let result = blocked;
      if (blocked.blocked !== closure_20.isBlockedForMessage(blocked)) {
        let closure_0 = true;
        result = blocked.set("blocked", closure_20.isBlockedForMessage(blocked));
      }
      let result1 = result;
      if (result.ignored !== closure_20.isIgnoredForMessage(result)) {
        closure_0 = true;
        result1 = result.set("ignored", closure_20.isIgnoredForMessage(result));
      }
      return result1;
    })));
  });
  return closure_0;
}
function performAuthorUpdate(guildId) {
  const arg1 = guildId;
  const item = importDefault(dependencyMap[24]).forEach((channelId) => {
    const channel = channel.getChannel(channelId.channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (guild_id === channelId) {
      const items = [];
      channelId = items;
      const callback = false;
      const item = channelId.forEach((nick) => {
        let colorString;
        const messageAuthor = items(closure_2[32]).getMessageAuthor(nick);
        ({ nick, colorString } = messageAuthor);
        if (nick === nick.nick) {
          if (colorString === nick.colorString) {
            items.push(nick);
          }
        }
        let closure_1 = true;
        items.push(nick.merge({ nick, colorString }));
      });
      if (callback) {
        callback(closure_2[24]).commit(channelId.reset(items));
        const obj = callback(closure_2[24]);
      }
    }
  });
}
function handleReaction(optimistic) {
  let channelId;
  let messageId;
  let userId;
  const arg1 = optimistic;
  ({ type: closure_1, emoji: closure_2, reactionType: closure_3 } = optimistic);
  ({ channelId, messageId, userId } = optimistic);
  const value = importDefault(dependencyMap[24]).get(channelId);
  if (null == value) {
    return false;
  } else {
    if (obj3.shouldApplyReaction(optimistic)) {
      let closure_4 = id.getId() === userId;
      const updateResult = value.update(messageId, (addReaction) => {
        if ("MESSAGE_REACTION_ADD" === closure_1) {
          let addReactionResult = addReaction.addReaction(closure_2, closure_4, addReaction.colors, closure_3);
        } else {
          addReactionResult = addReaction.removeReaction(closure_2, closure_4, closure_3);
        }
        return addReactionResult;
      });
      importDefault(dependencyMap[24]).commit(updateResult);
    } else {
      return false;
    }
    const obj3 = arg1(dependencyMap[33]);
  }
  const obj = importDefault(dependencyMap[24]);
}
function handleMessageSendFailedAutomod(arg0) {
  let messageData;
  ({ type: closure_0, messageData } = arg0);
  const failedMessageId = arg1(dependencyMap[34]).getFailedMessageId(messageData);
  const obj = arg1(dependencyMap[34]);
  const orCreate = importDefault(dependencyMap[24]).getOrCreate(messageData.message.channelId);
  if (orCreate.has(failedMessageId)) {
    const updateResult = orCreate.update(failedMessageId, (embeds) => {
      embeds = embeds.embeds;
      let length;
      if (null != embeds) {
        length = embeds.filter(callback(closure_2[35]).isNotAutomodEmbed).length;
      }
      let result = embeds;
      if (length > 0) {
        result = embeds.set("embeds", []);
      }
      let result1 = result;
      if ("MESSAGE_SEND_FAILED_AUTOMOD" === callback) {
        result1 = result.set("flags", callback(closure_2[29]).addFlag(result.flags, constants.EPHEMERAL));
        const obj2 = callback(closure_2[29]);
      }
      return result1;
    });
    importDefault(dependencyMap[24]).commit(updateResult);
  } else {
    return false;
  }
  const obj2 = importDefault(dependencyMap[24]);
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
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
let closure_21 = importDefault(dependencyMap[18]);
let closure_22 = importDefault(dependencyMap[19]);
let closure_23 = importDefault(dependencyMap[20]);
({ MessageFlags: closure_24, MessageReferenceTypes: closure_25, MessageStates: closure_26, MessageTypes: closure_27, Permissions: closure_28 } = arg1(dependencyMap[21]));
const set = new Set();
let importDefaultResult = importDefault(dependencyMap[22]);
importDefaultResult = new importDefaultResult("MessageStore");
let closure_31 = false;
let tmp6 = (Store) => {
  class MessageStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MessageStore);
      obj = closure_6(MessageStore);
      tmp2 = closure_5;
      if (closure_33()) {
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
  const arg1 = MessageStore;
  callback2(MessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_14, closure_15, closure_11, closure_16, closure_17, closure_18, closure_10, closure_12, closure_19, closure_20, closure_21, closure_22, closure_23);
      const items = [closure_10];
      this.syncWith(items, () => {

      });
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getMessages",
    value(channelId) {
      if (closure_10.hasViewingRoles()) {
        const channel = channel.getChannel(channelId);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        if (closure_10.isViewingRoles(guildId)) {
          if (!closure_19.can(constants.VIEW_CHANNEL, channel)) {
            let tmp9 = callback(closure_2[24]);
            const prototype = tmp9.prototype;
            tmp9 = new tmp9(channelId);
            return tmp9;
          }
        }
      }
      return callback(closure_2[24]).getOrCreate(channelId);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0, arg1) {
      const orCreate = callback(closure_2[24]).getOrCreate(arg0);
      return orCreate.get(arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastEditableMessage",
    value(arg0) {
      const currentUser = authStore.getCurrentUser();
      const messages = this.getMessages(arg0);
      const tmp = callback(closure_2[30]);
      const reversed = callback(closure_2[30])(messages.toArray()).reverse();
      return reversed.find((arg0) => {
        let id;
        if (null != id) {
          id = id.id;
        }
        return callback(closure_2[36])(arg0, id);
      });
    }
  };
  items[4] = {
    key: "getLastChatCommandMessage",
    value(arg0) {
      const currentUser = authStore.getCurrentUser();
      const messages = this.getMessages(arg0);
      const reversed = messages.toArray().reverse();
      return reversed.find((interaction) => {
        interaction = interaction.interaction;
        let type;
        if (null != interaction) {
          type = interaction.type;
        }
        let tmp2 = type === lib(closure_2[37]).InteractionTypes.APPLICATION_COMMAND;
        if (tmp2) {
          const interactionData = interaction.interactionData;
          let type1;
          if (null != interactionData) {
            type1 = interactionData.type;
          }
          tmp2 = type1 === lib(closure_2[37]).ApplicationCommandType.CHAT;
        }
        if (tmp2) {
          let id;
          if (null != lib) {
            id = lib.id;
          }
          tmp2 = interaction.interaction.user.id === id;
        }
        return tmp2;
      });
    }
  };
  items[5] = {
    key: "getLastMessage",
    value(arg0) {
      const messages = this.getMessages(arg0);
      const tmp = callback(closure_2[30]);
      const reversed = callback(closure_2[30])(messages.toArray()).reverse();
      return reversed.get(0);
    }
  };
  items[6] = {
    key: "getLastNonCurrentUserMessage",
    value(arg0) {
      const currentUser = authStore.getCurrentUser();
      const messages = this.getMessages(arg0);
      const tmp = callback(closure_2[30]);
      const reversed = callback(closure_2[30])(messages.toArray()).reverse();
      return reversed.find((author) => {
        let id;
        if (null != id) {
          id = id.id;
        }
        return author.author.id !== id;
      });
    }
  };
  items[7] = {
    key: "jumpedMessageId",
    value(arg0) {
      let jumpTargetId;
      const value = callback(closure_2[24]).get(arg0);
      if (null != value) {
        jumpTargetId = value.jumpTargetId;
      }
      return jumpTargetId;
    }
  };
  items[8] = {
    key: "focusedMessageId",
    value(arg0) {
      let focusTargetId;
      const value = callback(closure_2[24]).get(arg0);
      if (null != value) {
        focusTargetId = value.focusTargetId;
      }
      return focusTargetId;
    }
  };
  items[9] = {
    key: "hasPresent",
    value(arg0) {
      const value = callback(closure_2[24]).get(arg0);
      const obj = callback(closure_2[24]);
      return null != value && value.ready && value.hasPresent();
    }
  };
  items[10] = {
    key: "isReady",
    value(arg0) {
      return callback(closure_2[24]).getOrCreate(arg0).ready;
    }
  };
  items[11] = {
    key: "whenReady",
    value(arg0, arg1) {
      const MessageStore = this;
      const result = this.addConditionalChangeListener(() => {
        if (self.isReady(arg0)) {
          const _setImmediate = setImmediate;
          setImmediate(arg1);
          return false;
        }
      });
    }
  };
  items[12] = {
    key: "isLoadingMessages",
    value(arg0) {
      return callback(closure_2[24]).getOrCreate(arg0).loadingMore;
    }
  };
  items[13] = {
    key: "hasCurrentUserSentMessage",
    value(arg0) {
      const currentUser = authStore.getCurrentUser();
      const messages = this.getMessages(arg0);
      return null != messages.findNewest((author) => {
        let id;
        if (null != id) {
          id = id.id;
        }
        return author.author.id === id;
      });
    }
  };
  items[14] = {
    key: "hasCurrentUserSentWaveBlockingMessage",
    value(arg0) {
      const currentUser = authStore.getCurrentUser();
      const messages = this.getMessages(arg0);
      return null != messages.findNewest((type) => {
        let tmp = type.type !== constants.FRIEND_REQUEST_ACCEPTED;
        if (tmp) {
          let id;
          if (null != id) {
            id = id.id;
          }
          tmp = type.author.id === id;
        }
        return tmp;
      });
    }
  };
  items[15] = {
    key: "hasCurrentUserSentMessageSinceAppStart",
    value() {
      return closure_31;
    }
  };
  return callback(MessageStore, items);
}(importDefault(dependencyMap[38]).Store);
tmp6.displayName = "MessageStore";
tmp6 = new tmp6(importDefault(dependencyMap[39]), {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10015 in changesByChannelId) {
      let tmp12 = closure_1;
      let tmp13 = closure_2;
      let tmp11 = key10015;
      let obj = closure_1(closure_2[24]);
      let value = obj.get(key10015);
      if (null == value) {
        continue;
      } else {
        let tmp = closure_0;
        let tmp2 = closure_2;
        let _default = closure_0(closure_2[25]).default;
        let isConnectedResult = _default.isConnected();
        if (!value.cached) {
          if (isConnectedResult) {
            let tmp4 = closure_30;
            let _HermesInternal = HermesInternal;
            let str = "Skipping background message sync for ";
            let tmp5 = key10015;
            let str2 = " cached:";
            let str3 = " ready:";
            let str4 = " hasMoreAfter:";
            let str5 = " isConnected:";
            let tmp6 = isConnectedResult;
            let logResult = closure_30.log("Skipping background message sync for " + tmp11 + " cached:" + value.cached + " ready:" + value.ready + " hasMoreAfter:" + value.hasMoreAfter + " isConnected:" + isConnectedResult);
            let tmp8 = isConnectedResult;
            // continue
          }
          continue;
        }
        let mergeDeltaResult = value.mergeDelta(changesByChannelId[key10015].new_messages, changesByChannelId[key10015].modified_messages, changesByChannelId[key10015].deleted_message_ids);
        let tmp10 = isConnectedResult;
        // continue
      }
      continue;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: function handleCacheLoaded(messages) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(importDefault(dependencyMap[23]).entries(messages.messages));
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_8;
        let tmp3 = closure_8(iter.value, 2);
        let tmp4 = closure_1;
        let tmp5 = closure_2;
        let obj2 = closure_1(closure_2[24]);
        let orCreate = obj2.getOrCreate(tmp3[0]);
        let addCachedMessagesResult = orCreate.addCachedMessages(tmp3[1], true);
        let obj4 = closure_1(closure_2[24]);
        let commitResult = obj4.commit(addCachedMessagesResult);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOAD_MESSAGES: function handleLoadMessages() {
    return true;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let avoidInitialScroll;
    let channelId;
    let done;
    let hasMoreAfter;
    let hasMoreBefore;
    let isAfter;
    let isBefore;
    let isStale;
    let jump;
    let messages;
    let truncate;
    ({ channelId, isBefore, isAfter, messages } = arg0);
    ({ jump, hasMoreBefore, hasMoreAfter, isStale, truncate, avoidInitialScroll } = arg0);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const complete = orCreate.loadComplete({ newMessages: messages, isBefore, isAfter, jump, hasMoreBefore, hasMoreAfter, cached: isStale, hasFetched: true, avoidInitialScroll });
    let tmp = null == truncate;
    if (!tmp) {
      tmp = !isBefore && !isAfter;
      const tmp2 = !isBefore && !isAfter;
    }
    if (!tmp) {
      let tmp3 = isBefore;
      if (isBefore) {
        tmp3 = isAfter;
      }
      tmp = tmp3;
    }
    let truncateResult = complete;
    if (!tmp) {
      truncateResult = complete.truncate(isBefore, isAfter);
    }
    const obj = importDefault(dependencyMap[24]);
    const tmp5 = reinjectEphemerals(channelId, truncateResult);
    importDefault(dependencyMap[24]).commit(tmp5);
    const tmp7 = _createForOfIteratorHelperLoose(messages);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let tmp8 = closure_38;
        let tmp9 = closure_38(iter.value);
        let iter2 = tmp7();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId.channelId);
    const obj = importDefault(dependencyMap[24]);
    importDefault(dependencyMap[24]).commit(orCreate.mutate({ "Bool(true)": true, "Bool(true)": true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    let after;
    let before;
    let channelId;
    let focus;
    let jump;
    let limit;
    ({ channelId, jump, focus, before, after, limit } = truncate);
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(channelId);
    if (null != jump) {
      if (jump.present) {
        let jumpToPresentResult = orCreate.jumpToPresent(limit);
      }
      let tmp4 = null == truncate.truncate;
      if (!tmp4) {
        tmp4 = null == before && null == after;
        const tmp5 = null == before && null == after;
      }
      if (!tmp4) {
        tmp4 = null != before && null != after;
        const tmp6 = null != before && null != after;
      }
      let truncateResult = jumpToPresentResult;
      if (!tmp4) {
        truncateResult = jumpToPresentResult.truncate(null != before, null != after);
      }
      const tmp9 = reinjectEphemerals(channelId, truncateResult);
      importDefault(dependencyMap[24]).commit(tmp9);
    }
    let messageId;
    if (null != focus) {
      messageId = focus.messageId;
    }
    if (null != messageId) {
      jumpToPresentResult = orCreate.focusOnMessage(focus.messageId);
    } else {
      let messageId1;
      if (null != jump) {
        messageId1 = jump.messageId;
      }
      if (null != messageId1) {
        obj = {};
        ({ messageId: obj4.messageId, flash: obj4.flash, offset: obj4.offset, returnMessageId: obj4.returnTargetId, jumpType: obj4.jumpType, onJumpComplete: obj4.onJumpComplete } = jump);
        jumpToPresentResult = orCreate.jumpToMessage(obj);
      } else {
        jumpToPresentResult = orCreate;
        if (!tmp3) {
          jumpToPresentResult = orCreate.loadFromCache(null != before, limit);
        }
        const tmp3 = null == before && null == after;
      }
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(channelId.channelId);
    const addCachedMessagesResult = orCreate.addCachedMessages(channelId.messages, channelId.stale);
    let isForegroundCacheLoad = channelId.isForegroundCacheLoad;
    if (isForegroundCacheLoad) {
      isForegroundCacheLoad = channelId.messages.length > 0;
    }
    if (isForegroundCacheLoad) {
      isForegroundCacheLoad = null == addCachedMessagesResult.jumpTargetId;
    }
    let mutation = addCachedMessagesResult;
    if (isForegroundCacheLoad) {
      obj = { initialScrollSequenceId: addCachedMessagesResult.initialScrollSequenceId + 1, suppressRowAnimationSequenceId: addCachedMessagesResult.suppressRowAnimationSequenceId + 1 };
      mutation = addCachedMessagesResult.mutate(obj);
    }
    importDefault(dependencyMap[24]).commit(mutation);
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    const arg1 = messageId;
    messageId = messageId.messageId;
    const value = importDefault(dependencyMap[24]).get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", set.interactionData));
        importDefault(dependencyMap[24]).commit(updateResult);
      }
    }
    return false;
  },
  TRUNCATE_MESSAGES: function handleTruncateMessages(arg0) {
    let channelId;
    let truncateBottom;
    let truncateTop;
    ({ channelId, truncateBottom, truncateTop } = arg0);
    importDefaultResult.log("Truncating messages for " + channelId + " bottom:" + truncateBottom + " top:" + truncateTop);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const obj = importDefault(dependencyMap[24]);
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    importDefault(dependencyMap[24]).commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    importDefaultResult.log("Clearing messages for " + channelId);
    importDefault(dependencyMap[24]).clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(arg0) {
    let channelId;
    let isPushNotification;
    let message;
    let optimistic;
    ({ channelId, message } = arg0);
    ({ optimistic, isPushNotification } = arg0);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const obj = importDefault(dependencyMap[24]);
    const isConnectedResult = arg1(dependencyMap[25]).default.isConnected();
    if (isPushNotification) {
      if (obj5.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        function addPushNotificationMessageIfNotCached(channelId, message, isConnectedResult) {
          return callback(...arguments);
        }(channelId, message, isConnectedResult);
      } else {
        importDefaultResult.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        importDefault(dependencyMap[24]).commit(orCreate.receivePushNotification(message, isConnectedResult));
        const obj6 = importDefault(dependencyMap[24]);
      }
      const obj5 = arg1(dependencyMap[27]);
    } else {
      let tmp3 = !tmp2;
      if (!!orCreate.ready) {
        const tmp4 = !optimistic || !orCreate.has(message.id);
        if (tmp4) {
          let hasItem = null != message.nonce;
          if (hasItem) {
            hasItem = message.state !== constants2.SENDING;
          }
          if (hasItem) {
            hasItem = set.has(message.nonce);
          }
          let removeResult = orCreate;
          if (hasItem) {
            removeResult = orCreate.remove(message.nonce);
            set.delete(message.nonce);
          }
          const receiveMessageResult = removeResult.receiveMessage(message, true === atBottom.isAtBottom(channelId));
          importDefault(dependencyMap[24]).commit(receiveMessageResult);
          receiveMediaMentionMessage(message);
          const obj4 = importDefault(dependencyMap[24]);
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_SEND_FAILED: function handleSendFailed(channelId) {
    let messageId;
    ({ messageId, reason: closure_0 } = channelId);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId.channelId);
    if (null != orCreate) {
      if (orCreate.has(messageId)) {
        const value = orCreate.get(messageId, true);
        let isPollResult;
        if (null != value) {
          isPollResult = value.isPoll();
        }
        if (true === isPollResult) {
          let removeResult = orCreate.remove(messageId);
        } else {
          removeResult = orCreate.update(messageId, (set) => {
            const result = set.set("state", constants2.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = "";
              if (null != callback) {
                str3 = callback;
              }
              const result1 = result.set("interactionError", str3);
              let result2 = result1.set("flags", callback(closure_2[29]).addFlag(result1.flags, constants.EPHEMERAL));
              const obj3 = callback(closure_2[29]);
            } else {
              result2 = result;
              if (null != callback) {
                let str = "";
                if (null != callback) {
                  str = callback;
                }
                result2 = result.set("interactionError", str);
              }
            }
            return result2;
          });
        }
        importDefault(dependencyMap[24]).commit(removeResult);
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const arg1 = message;
    const id = message.message.id;
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(message.message.channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        const updateResult = orCreate.update(id, (message) => message(closure_2[28]).updateMessageRecord(message, message.message));
        importDefault(dependencyMap[24]).commit(updateResult);
        function handleMediaMentionMessageUpdate(message) {
          const media_mention = message.media_mention;
          let message_id;
          if (null != media_mention) {
            message_id = media_mention.message_id;
          }
          if (null != message_id) {
            if ("content" in message) {
              const orCreate = callback(closure_2[24]).getOrCreate(message.media_mention.attachment_id);
              const obj = callback(closure_2[24]);
              const updateResult = orCreate.update(message.media_mention.message_id, (message) => {
                let obj = message(closure_2[28]);
                obj = { content: message.content };
                return obj.updateMessageRecord(message, obj);
              });
              callback(closure_2[24]).commit(updateResult);
              const obj3 = callback(closure_2[24]);
            }
          }
        }(message.message);
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    const value = importDefault(dependencyMap[24]).get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, arg1(dependencyMap[31]).handleExplicitMediaScanTimeoutForMessage);
        importDefault(dependencyMap[24]).commit(updateResult);
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(id.channelId);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        if (orCreate.revealedMessageId !== id) {
          cleanMediaMention(orCreate.get(id));
          const removeResult = orCreate.remove(id);
          importDefault(dependencyMap[24]).commit(removeResult);
          set.delete(id);
        } else {
          let id2 = orCreate.getAfter(id);
          if (null == id2) {
            obj = { revealedMessageId: null };
            let mutation = orCreate.mutate(obj);
          }
          obj = {};
          id2 = id2.id;
          obj.revealedMessageId = id2;
          mutation = orCreate.mutate(obj);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    let importDefault;
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(ids.channelId);
    const arg1 = orCreate;
    if (null == orCreate) {
      return false;
    } else {
      const item = ids.forEach((arg0) => {
        callback(orCreate.get(arg0));
      });
      const removeManyResult = orCreate.removeMany(ids);
      importDefault = removeManyResult;
      if (orCreate === removeManyResult) {
        return false;
      } else {
        let tmp8 = removeManyResult;
        if (null != removeManyResult.revealedMessageId) {
          tmp8 = removeManyResult;
          if (obj7.some(ids, (arg0) => mutation.revealedMessageId === arg0)) {
            let id = removeManyResult.getAfter(removeManyResult.revealedMessageId);
            if (null == id) {
              obj = { revealedMessageId: null };
              let mutation = removeManyResult.mutate(obj);
              importDefault = mutation;
            }
            obj = {};
            id = id.id;
            obj.revealedMessageId = id;
            mutation = removeManyResult.mutate(obj);
          }
          const obj7 = importDefault(dependencyMap[30]);
        }
        importDefault(dependencyMap[24]).commit(tmp8);
        const item1 = ids.forEach((arg0) => {
          set.delete(arg0);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const obj = importDefault(dependencyMap[24]);
    importDefault(dependencyMap[24]).commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(channelId.channelId);
    obj = { gestureResponseDistance: true, stackPresentation: true, stackAnimation: true, newMessages: [] };
    const complete = orCreate.loadComplete(obj);
    importDefault(dependencyMap[24]).commit(complete);
  },
  CHANNEL_DELETE: handleCleanup,
  THREAD_DELETE: handleCleanup,
  GUILD_DELETE: handleCleanup,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_40;
        let tmp3 = closure_40(iter.value.guildId);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(guildId) {
    performAuthorUpdate(guildId.guildId);
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    let channelId;
    let messageId;
    const arg1 = reactions.reactions;
    ({ channelId, messageId } = reactions);
    const value = importDefault(dependencyMap[24]).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        const currentUser = currentUser.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        return addReactionBatch.addReactionBatch(reactions, id);
      });
      importDefault(dependencyMap[24]).commit(updateResult);
    }
    const obj = importDefault(dependencyMap[24]);
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const value = importDefault(dependencyMap[24]).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      importDefault(dependencyMap[24]).commit(updateResult);
    }
    const obj = importDefault(dependencyMap[24]);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    let channelId;
    let messageId;
    const arg1 = emoji.emoji;
    ({ channelId, messageId } = emoji);
    const value = importDefault(dependencyMap[24]).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
      importDefault(dependencyMap[24]).commit(updateResult);
    }
    const obj = importDefault(dependencyMap[24]);
  },
  LOGOUT: function handleLogout() {
    const item = importDefault(dependencyMap[24]).forEach((channelId) => {
      callback(closure_2[24]).clear(channelId.channelId);
    });
    set.clear();
  },
  UPLOAD_START: function handleUploadStart(message) {
    message = message.message;
    let nonce;
    if (null != message) {
      nonce = message.nonce;
    }
    if (null != nonce) {
      set.add(message.nonce);
    }
  },
  UPLOAD_FAIL: function handleUploadFail(messageId) {
    messageId = messageId.messageId;
    if (null == messageId) {
      return false;
    } else if (set.has(messageId)) {
      const orCreate = importDefault(dependencyMap[24]).getOrCreate(tmp);
      const value = orCreate.get(messageId);
      if (null == value) {
        return false;
      } else {
        const items = [value];
        const removeResult = orCreate.remove(messageId);
        set.delete(messageId);
        const mergeResult = orCreate.remove(messageId).merge(items);
        importDefault(dependencyMap[24]).commit(mergeResult);
      }
      const obj = importDefault(dependencyMap[24]);
    } else {
      return false;
    }
  },
  LOCAL_MESSAGE_CREATE: function handleLocalIncomingMesssage(message) {
    message = message.message;
    const currentUser = currentUser.getCurrentUser();
    if (tmp2) {
      let closure_31 = true;
    }
  }
});
const obj = {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10015 in changesByChannelId) {
      let tmp12 = closure_1;
      let tmp13 = closure_2;
      let tmp11 = key10015;
      let obj = closure_1(closure_2[24]);
      let value = obj.get(key10015);
      if (null == value) {
        continue;
      } else {
        let tmp = closure_0;
        let tmp2 = closure_2;
        let _default = closure_0(closure_2[25]).default;
        let isConnectedResult = _default.isConnected();
        if (!value.cached) {
          if (isConnectedResult) {
            let tmp4 = closure_30;
            let _HermesInternal = HermesInternal;
            let str = "Skipping background message sync for ";
            let tmp5 = key10015;
            let str2 = " cached:";
            let str3 = " ready:";
            let str4 = " hasMoreAfter:";
            let str5 = " isConnected:";
            let tmp6 = isConnectedResult;
            let logResult = closure_30.log("Skipping background message sync for " + tmp11 + " cached:" + value.cached + " ready:" + value.ready + " hasMoreAfter:" + value.hasMoreAfter + " isConnected:" + isConnectedResult);
            let tmp8 = isConnectedResult;
            // continue
          }
          continue;
        }
        let mergeDeltaResult = value.mergeDelta(changesByChannelId[key10015].new_messages, changesByChannelId[key10015].modified_messages, changesByChannelId[key10015].deleted_message_ids);
        let tmp10 = isConnectedResult;
        // continue
      }
      continue;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: function handleCacheLoaded(messages) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(importDefault(dependencyMap[23]).entries(messages.messages));
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_8;
        let tmp3 = closure_8(iter.value, 2);
        let tmp4 = closure_1;
        let tmp5 = closure_2;
        let obj2 = closure_1(closure_2[24]);
        let orCreate = obj2.getOrCreate(tmp3[0]);
        let addCachedMessagesResult = orCreate.addCachedMessages(tmp3[1], true);
        let obj4 = closure_1(closure_2[24]);
        let commitResult = obj4.commit(addCachedMessagesResult);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOAD_MESSAGES: function handleLoadMessages() {
    return true;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let avoidInitialScroll;
    let channelId;
    let done;
    let hasMoreAfter;
    let hasMoreBefore;
    let isAfter;
    let isBefore;
    let isStale;
    let jump;
    let messages;
    let truncate;
    ({ channelId, isBefore, isAfter, messages } = arg0);
    ({ jump, hasMoreBefore, hasMoreAfter, isStale, truncate, avoidInitialScroll } = arg0);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const complete = orCreate.loadComplete({ newMessages: messages, isBefore, isAfter, jump, hasMoreBefore, hasMoreAfter, cached: isStale, hasFetched: true, avoidInitialScroll });
    let tmp = null == truncate;
    if (!tmp) {
      tmp = !isBefore && !isAfter;
      const tmp2 = !isBefore && !isAfter;
    }
    if (!tmp) {
      let tmp3 = isBefore;
      if (isBefore) {
        tmp3 = isAfter;
      }
      tmp = tmp3;
    }
    let truncateResult = complete;
    if (!tmp) {
      truncateResult = complete.truncate(isBefore, isAfter);
    }
    const obj = importDefault(dependencyMap[24]);
    const tmp5 = reinjectEphemerals(channelId, truncateResult);
    importDefault(dependencyMap[24]).commit(tmp5);
    const tmp7 = _createForOfIteratorHelperLoose(messages);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let tmp8 = closure_38;
        let tmp9 = closure_38(iter.value);
        let iter2 = tmp7();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId.channelId);
    const obj = importDefault(dependencyMap[24]);
    importDefault(dependencyMap[24]).commit(orCreate.mutate({ "Bool(true)": true, "Bool(true)": true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    let after;
    let before;
    let channelId;
    let focus;
    let jump;
    let limit;
    ({ channelId, jump, focus, before, after, limit } = truncate);
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(channelId);
    if (null != jump) {
      if (jump.present) {
        let jumpToPresentResult = orCreate.jumpToPresent(limit);
      }
      let tmp4 = null == truncate.truncate;
      if (!tmp4) {
        tmp4 = null == before && null == after;
        const tmp5 = null == before && null == after;
      }
      if (!tmp4) {
        tmp4 = null != before && null != after;
        const tmp6 = null != before && null != after;
      }
      let truncateResult = jumpToPresentResult;
      if (!tmp4) {
        truncateResult = jumpToPresentResult.truncate(null != before, null != after);
      }
      const tmp9 = reinjectEphemerals(channelId, truncateResult);
      importDefault(dependencyMap[24]).commit(tmp9);
    }
    let messageId;
    if (null != focus) {
      messageId = focus.messageId;
    }
    if (null != messageId) {
      jumpToPresentResult = orCreate.focusOnMessage(focus.messageId);
    } else {
      let messageId1;
      if (null != jump) {
        messageId1 = jump.messageId;
      }
      if (null != messageId1) {
        obj = {};
        ({ messageId: obj4.messageId, flash: obj4.flash, offset: obj4.offset, returnMessageId: obj4.returnTargetId, jumpType: obj4.jumpType, onJumpComplete: obj4.onJumpComplete } = jump);
        jumpToPresentResult = orCreate.jumpToMessage(obj);
      } else {
        jumpToPresentResult = orCreate;
        if (!tmp3) {
          jumpToPresentResult = orCreate.loadFromCache(null != before, limit);
        }
        const tmp3 = null == before && null == after;
      }
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(channelId.channelId);
    const addCachedMessagesResult = orCreate.addCachedMessages(channelId.messages, channelId.stale);
    let isForegroundCacheLoad = channelId.isForegroundCacheLoad;
    if (isForegroundCacheLoad) {
      isForegroundCacheLoad = channelId.messages.length > 0;
    }
    if (isForegroundCacheLoad) {
      isForegroundCacheLoad = null == addCachedMessagesResult.jumpTargetId;
    }
    let mutation = addCachedMessagesResult;
    if (isForegroundCacheLoad) {
      obj = { initialScrollSequenceId: addCachedMessagesResult.initialScrollSequenceId + 1, suppressRowAnimationSequenceId: addCachedMessagesResult.suppressRowAnimationSequenceId + 1 };
      mutation = addCachedMessagesResult.mutate(obj);
    }
    importDefault(dependencyMap[24]).commit(mutation);
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    const arg1 = messageId;
    messageId = messageId.messageId;
    const value = importDefault(dependencyMap[24]).get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", set.interactionData));
        importDefault(dependencyMap[24]).commit(updateResult);
      }
    }
    return false;
  },
  TRUNCATE_MESSAGES: function handleTruncateMessages(arg0) {
    let channelId;
    let truncateBottom;
    let truncateTop;
    ({ channelId, truncateBottom, truncateTop } = arg0);
    importDefaultResult.log("Truncating messages for " + channelId + " bottom:" + truncateBottom + " top:" + truncateTop);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const obj = importDefault(dependencyMap[24]);
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    importDefault(dependencyMap[24]).commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    importDefaultResult.log("Clearing messages for " + channelId);
    importDefault(dependencyMap[24]).clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(arg0) {
    let channelId;
    let isPushNotification;
    let message;
    let optimistic;
    ({ channelId, message } = arg0);
    ({ optimistic, isPushNotification } = arg0);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const obj = importDefault(dependencyMap[24]);
    const isConnectedResult = arg1(dependencyMap[25]).default.isConnected();
    if (isPushNotification) {
      if (obj5.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        function addPushNotificationMessageIfNotCached(channelId, message, isConnectedResult) {
          return callback(...arguments);
        }(channelId, message, isConnectedResult);
      } else {
        importDefaultResult.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        importDefault(dependencyMap[24]).commit(orCreate.receivePushNotification(message, isConnectedResult));
        const obj6 = importDefault(dependencyMap[24]);
      }
      const obj5 = arg1(dependencyMap[27]);
    } else {
      let tmp3 = !tmp2;
      if (!!orCreate.ready) {
        const tmp4 = !optimistic || !orCreate.has(message.id);
        if (tmp4) {
          let hasItem = null != message.nonce;
          if (hasItem) {
            hasItem = message.state !== constants2.SENDING;
          }
          if (hasItem) {
            hasItem = set.has(message.nonce);
          }
          let removeResult = orCreate;
          if (hasItem) {
            removeResult = orCreate.remove(message.nonce);
            set.delete(message.nonce);
          }
          const receiveMessageResult = removeResult.receiveMessage(message, true === atBottom.isAtBottom(channelId));
          importDefault(dependencyMap[24]).commit(receiveMessageResult);
          receiveMediaMentionMessage(message);
          const obj4 = importDefault(dependencyMap[24]);
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_SEND_FAILED: function handleSendFailed(channelId) {
    let messageId;
    ({ messageId, reason: closure_0 } = channelId);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId.channelId);
    if (null != orCreate) {
      if (orCreate.has(messageId)) {
        const value = orCreate.get(messageId, true);
        let isPollResult;
        if (null != value) {
          isPollResult = value.isPoll();
        }
        if (true === isPollResult) {
          let removeResult = orCreate.remove(messageId);
        } else {
          removeResult = orCreate.update(messageId, (set) => {
            const result = set.set("state", constants2.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = "";
              if (null != callback) {
                str3 = callback;
              }
              const result1 = result.set("interactionError", str3);
              let result2 = result1.set("flags", callback(closure_2[29]).addFlag(result1.flags, constants.EPHEMERAL));
              const obj3 = callback(closure_2[29]);
            } else {
              result2 = result;
              if (null != callback) {
                let str = "";
                if (null != callback) {
                  str = callback;
                }
                result2 = result.set("interactionError", str);
              }
            }
            return result2;
          });
        }
        importDefault(dependencyMap[24]).commit(removeResult);
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const arg1 = message;
    const id = message.message.id;
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(message.message.channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        const updateResult = orCreate.update(id, (message) => message(closure_2[28]).updateMessageRecord(message, message.message));
        importDefault(dependencyMap[24]).commit(updateResult);
        function handleMediaMentionMessageUpdate(message) {
          const media_mention = message.media_mention;
          let message_id;
          if (null != media_mention) {
            message_id = media_mention.message_id;
          }
          if (null != message_id) {
            if ("content" in message) {
              const orCreate = callback(closure_2[24]).getOrCreate(message.media_mention.attachment_id);
              const obj = callback(closure_2[24]);
              const updateResult = orCreate.update(message.media_mention.message_id, (message) => {
                let obj = message(closure_2[28]);
                obj = { content: message.content };
                return obj.updateMessageRecord(message, obj);
              });
              callback(closure_2[24]).commit(updateResult);
              const obj3 = callback(closure_2[24]);
            }
          }
        }(message.message);
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    const value = importDefault(dependencyMap[24]).get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, arg1(dependencyMap[31]).handleExplicitMediaScanTimeoutForMessage);
        importDefault(dependencyMap[24]).commit(updateResult);
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(id.channelId);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        if (orCreate.revealedMessageId !== id) {
          cleanMediaMention(orCreate.get(id));
          const removeResult = orCreate.remove(id);
          importDefault(dependencyMap[24]).commit(removeResult);
          set.delete(id);
        } else {
          let id2 = orCreate.getAfter(id);
          if (null == id2) {
            obj = { revealedMessageId: null };
            let mutation = orCreate.mutate(obj);
          }
          obj = {};
          id2 = id2.id;
          obj.revealedMessageId = id2;
          mutation = orCreate.mutate(obj);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    let importDefault;
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(ids.channelId);
    const arg1 = orCreate;
    if (null == orCreate) {
      return false;
    } else {
      const item = ids.forEach((arg0) => {
        callback(orCreate.get(arg0));
      });
      const removeManyResult = orCreate.removeMany(ids);
      importDefault = removeManyResult;
      if (orCreate === removeManyResult) {
        return false;
      } else {
        let tmp8 = removeManyResult;
        if (null != removeManyResult.revealedMessageId) {
          tmp8 = removeManyResult;
          if (obj7.some(ids, (arg0) => mutation.revealedMessageId === arg0)) {
            let id = removeManyResult.getAfter(removeManyResult.revealedMessageId);
            if (null == id) {
              obj = { revealedMessageId: null };
              let mutation = removeManyResult.mutate(obj);
              importDefault = mutation;
            }
            obj = {};
            id = id.id;
            obj.revealedMessageId = id;
            mutation = removeManyResult.mutate(obj);
          }
          const obj7 = importDefault(dependencyMap[30]);
        }
        importDefault(dependencyMap[24]).commit(tmp8);
        const item1 = ids.forEach((arg0) => {
          set.delete(arg0);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const orCreate = importDefault(dependencyMap[24]).getOrCreate(channelId);
    const obj = importDefault(dependencyMap[24]);
    importDefault(dependencyMap[24]).commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    let obj = importDefault(dependencyMap[24]);
    const orCreate = obj.getOrCreate(channelId.channelId);
    obj = { gestureResponseDistance: true, stackPresentation: true, stackAnimation: true, newMessages: [] };
    const complete = orCreate.loadComplete(obj);
    importDefault(dependencyMap[24]).commit(complete);
  },
  CHANNEL_DELETE: handleCleanup,
  THREAD_DELETE: handleCleanup,
  GUILD_DELETE: handleCleanup,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_40;
        let tmp3 = closure_40(iter.value.guildId);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(guildId) {
    performAuthorUpdate(guildId.guildId);
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    let channelId;
    let messageId;
    const arg1 = reactions.reactions;
    ({ channelId, messageId } = reactions);
    const value = importDefault(dependencyMap[24]).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        const currentUser = currentUser.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        return addReactionBatch.addReactionBatch(reactions, id);
      });
      importDefault(dependencyMap[24]).commit(updateResult);
    }
    const obj = importDefault(dependencyMap[24]);
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const value = importDefault(dependencyMap[24]).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      importDefault(dependencyMap[24]).commit(updateResult);
    }
    const obj = importDefault(dependencyMap[24]);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    let channelId;
    let messageId;
    const arg1 = emoji.emoji;
    ({ channelId, messageId } = emoji);
    const value = importDefault(dependencyMap[24]).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
      importDefault(dependencyMap[24]).commit(updateResult);
    }
    const obj = importDefault(dependencyMap[24]);
  },
  LOGOUT: function handleLogout() {
    const item = importDefault(dependencyMap[24]).forEach((channelId) => {
      callback(closure_2[24]).clear(channelId.channelId);
    });
    set.clear();
  },
  UPLOAD_START: function handleUploadStart(message) {
    message = message.message;
    let nonce;
    if (null != message) {
      nonce = message.nonce;
    }
    if (null != nonce) {
      set.add(message.nonce);
    }
  },
  UPLOAD_FAIL: function handleUploadFail(messageId) {
    messageId = messageId.messageId;
    if (null == messageId) {
      return false;
    } else if (set.has(messageId)) {
      const orCreate = importDefault(dependencyMap[24]).getOrCreate(tmp);
      const value = orCreate.get(messageId);
      if (null == value) {
        return false;
      } else {
        const items = [value];
        const removeResult = orCreate.remove(messageId);
        set.delete(messageId);
        const mergeResult = orCreate.remove(messageId).merge(items);
        importDefault(dependencyMap[24]).commit(mergeResult);
      }
      const obj = importDefault(dependencyMap[24]);
    } else {
      return false;
    }
  },
  LOCAL_MESSAGE_CREATE: function handleLocalIncomingMesssage(message) {
    message = message.message;
    const currentUser = currentUser.getCurrentUser();
    if (tmp2) {
      let closure_31 = true;
    }
  }
};
const tmp2 = arg1(dependencyMap[21]);
const result = arg1(dependencyMap[40]).fileFinishedImporting("stores/MessageStore.tsx");

export default tmp6;
