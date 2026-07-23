// Module ID: 4349
// Function ID: 38478
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 5, 1909, 4350, 1921, 1194, 1348, 4802, 1907, 1917, 1838, 3758, 3767, 1906, 3947, 1849, 653, 3, 21, 4803, 4808, 1882, 4806, 4351, 1360, 22, 6835, 4360, 3769, 7076, 12692, 9965, 1881, 566, 686, 2]

// Module 4349 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_slicedToArray";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_createForOfIteratorHelperLoose";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_getPrototypeOf";
import set from "_possibleConstructorReturn";

let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
const require = arg1;
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
function reinjectEphemerals(channelId, truncateResult) {
  let closure_0 = truncateResult;
  if (truncateResult.hasMoreAfter) {
    return truncateResult;
  } else {
    messages = messages.getMessages(channelId);
    if (0 === messages.length) {
      return truncateResult;
    } else {
      const found = messages.filter((id) => !truncateResult.has(id.id));
      let mutation = truncateResult;
      if (0 !== found.length) {
        mutation = truncateResult.mutate((_merge) => {
          _merge._merge(found);
          const _array = _merge._array;
          const sorted = _array.sort((id, id2) => found(outer2_2[23]).compare(id.id, id2.id));
        }, true);
      }
      return mutation;
    }
  }
}
function handleConnectionOpen() {
  const item = importDefault(4803).forEach((mutate) => {
    outer1_1(outer1_2[24]).commit(mutate.mutate({ ready: false, loadingMore: false }));
  });
  set.clear();
}
async function _addPushNotificationMessageIfNotCached(arg0, arg1, arg2, arg3) {
  const databaseResult = outer2_1(outer2_2[26]).database();
  const basicChannel = outer2_14.getBasicChannel(arg0);
  if (null != databaseResult) {
    if (null != basicChannel) {
      const obj2 = outer2_1(outer2_2[26]);
      const messagesResult = outer2_1(outer2_2[26]).messages(databaseResult);
    }
  }
  outer2_30.log("Push notification message not in cache, adding directly", arg1.id, arg1.channel_id);
  const obj = outer2_1(outer2_2[26]);
  const tmp = arg0;
  const orCreate = outer2_1(outer2_2[24]).getOrCreate(arg0);
  const obj4 = outer2_1(outer2_2[24]);
  outer2_1(outer2_2[24]).commit(orCreate.receivePushNotification(arg1, arg2));
  outer2_32.emitChange();
}
function receiveMediaMentionMessage(message) {
  const media_mention = message.media_mention;
  let message_id;
  if (null != media_mention) {
    message_id = media_mention.message_id;
  }
  if (null != message_id) {
    const attachment_id = message.media_mention.attachment_id;
    const orCreate = importDefault(4803).getOrCreate(attachment_id);
    let obj = {};
    const merged = Object.assign(message);
    obj["channel_id"] = attachment_id;
    obj["type"] = constants3.MEDIA_MENTION_MESSAGE;
    obj["id"] = message.media_mention.message_id;
    obj = { channel_id: message.channel_id, message_id: message.media_mention.message_id, type: constants.DEFAULT };
    channel = channel.getChannel(message.channel_id);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj["message_reference"] = obj;
    const obj4 = importDefault(4803);
    const obj1 = { ready: true };
    const mutation = orCreate.receiveMessage(obj, false).mutate(obj1);
    const receiveMessageResult = orCreate.receiveMessage(obj, false);
    importDefault(4803).commit(mutation);
    const obj3 = importDefault(4803);
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
      const value = importDefault(4803).get(attachment_id);
      if (null != value) {
        const mediaMention = orCreate.mediaMention;
        let message_id;
        if (null != mediaMention) {
          message_id = mediaMention.message_id;
        }
        if (null != message_id) {
          const removeResult = value.remove(message_id);
          importDefault(4803).commit(removeResult);
          const obj3 = importDefault(4803);
        }
      }
      const obj = importDefault(4803);
    }
  }
}
function handleCleanup() {
  const item = importDefault(4803).forEach((channelId) => {
    channelId = channelId.channelId;
    if (null == outer1_14.getChannel(channelId)) {
      outer1_1(outer1_2[24]).clear(channelId);
      const obj = outer1_1(outer1_2[24]);
    }
  });
}
function handleRelationshipUpdate() {
  let c0 = false;
  const item = importDefault(4803).forEach((reset) => {
    outer1_1(outer1_2[24]).commit(reset.reset(reset.map((blocked) => {
      let result = blocked;
      if (blocked.blocked !== outer2_20.isBlockedForMessage(blocked)) {
        let outer1_0 = true;
        result = blocked.set("blocked", outer2_20.isBlockedForMessage(blocked));
      }
      let result1 = result;
      if (result.ignored !== outer2_20.isIgnoredForMessage(result)) {
        outer1_0 = true;
        result1 = result.set("ignored", outer2_20.isIgnoredForMessage(result));
      }
      return result1;
    })));
  });
  return c0;
}
function performAuthorUpdate(guildId) {
  let closure_0 = guildId;
  let item = importDefault(4803).forEach((channelId) => {
    const channel = outer1_14.getChannel(channelId.channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (guild_id === items) {
      items = [];
      let c1 = false;
      const item = channelId.forEach((nick) => {
        let colorString;
        const messageAuthor = items(outer2_2[32]).getMessageAuthor(nick);
        ({ nick, colorString } = messageAuthor);
        if (nick === nick.nick) {
          if (colorString === nick.colorString) {
            items.push(nick);
          }
        }
        let c1 = true;
        items.push(nick.merge({ nick, colorString }));
      });
      if (c1) {
        outer1_1(outer1_2[24]).commit(channelId.reset(items));
        const obj = outer1_1(outer1_2[24]);
      }
    }
  });
}
function handleReaction(optimistic) {
  let channelId;
  let asyncGeneratorStep;
  let dependencyMap;
  let importDefault;
  let messageId;
  let userId;
  const _require = optimistic;
  ({ type: importDefault, emoji: dependencyMap, reactionType: asyncGeneratorStep } = optimistic);
  ({ channelId, messageId, userId } = optimistic);
  const value = importDefault(4803).get(channelId);
  if (null == value) {
    return false;
  } else {
    if (obj3.shouldApplyReaction(optimistic)) {
      let _isNativeReflectConstruct = id.getId() === userId;
      const updateResult = value.update(messageId, (addReaction) => {
        if ("MESSAGE_REACTION_ADD" === closure_1) {
          let addReactionResult = addReaction.addReaction(closure_2, _isNativeReflectConstruct, optimistic.colors, asyncGeneratorStep);
        } else {
          addReactionResult = addReaction.removeReaction(closure_2, _isNativeReflectConstruct, asyncGeneratorStep);
        }
        return addReactionResult;
      });
      importDefault(4803).commit(updateResult);
    } else {
      return false;
    }
    obj3 = _require(3769);
  }
  const obj = importDefault(4803);
}
function handleMessageSendFailedAutomod(arg0) {
  let messageData;
  let require;
  ({ type: require, messageData } = arg0);
  const failedMessageId = require(7076) /* _isNativeReflectConstruct */.getFailedMessageId(messageData);
  const obj = require(7076) /* _isNativeReflectConstruct */;
  const orCreate = importDefault(4803).getOrCreate(messageData.message.channelId);
  if (orCreate.has(failedMessageId)) {
    const updateResult = orCreate.update(failedMessageId, (embeds) => {
      embeds = embeds.embeds;
      let length;
      if (null != embeds) {
        length = embeds.filter(outer1_0(outer1_2[35]).isNotAutomodEmbed).length;
      }
      let result = embeds;
      if (length > 0) {
        result = embeds.set("embeds", []);
      }
      let result1 = result;
      if ("MESSAGE_SEND_FAILED_AUTOMOD" === closure_0) {
        result1 = result.set("flags", outer1_0(outer1_2[29]).addFlag(result.flags, outer1_24.EPHEMERAL));
        const obj2 = outer1_0(outer1_2[29]);
      }
      return result1;
    });
    importDefault(4803).commit(updateResult);
  } else {
    return false;
  }
  let obj2 = importDefault(4803);
}
({ MessageFlags: closure_24, MessageReferenceTypes: closure_25, MessageStates: closure_26, MessageTypes: closure_27, Permissions: closure_28 } = ME);
let set = new Set();
importDefaultResult = new importDefaultResult("MessageStore");
let c31 = false;
let tmp6 = ((Store) => {
  class MessageStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MessageStore);
      obj = outer1_6(MessageStore);
      tmp2 = outer1_5;
      if (outer1_33()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_14, outer1_15, outer1_11, outer1_16, outer1_17, outer1_18, outer1_10, outer1_12, outer1_19, outer1_20, outer1_21, outer1_22, outer1_23);
      const items = [outer1_10];
      this.syncWith(items, () => {

      });
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getMessages",
    value(channelId) {
      if (outer1_10.hasViewingRoles()) {
        const channel = outer1_14.getChannel(channelId);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        if (outer1_10.isViewingRoles(guildId)) {
          if (!outer1_19.can(outer1_28.VIEW_CHANNEL, channel)) {
            let tmp9 = outer1_1(outer1_2[24]);
            const prototype = tmp9.prototype;
            tmp9 = new tmp9(channelId);
            return tmp9;
          }
        }
      }
      return outer1_1(outer1_2[24]).getOrCreate(channelId);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0, arg1) {
      const orCreate = outer1_1(outer1_2[24]).getOrCreate(arg0);
      return orCreate.get(arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastEditableMessage",
    value(arg0) {
      const currentUser = outer1_23.getCurrentUser();
      const messages = this.getMessages(arg0);
      const tmp = outer1_1(outer1_2[30]);
      const reversed = outer1_1(outer1_2[30])(messages.toArray()).reverse();
      return reversed.find((arg0) => {
        let id;
        if (null != id) {
          id = id.id;
        }
        return outer2_1(outer2_2[36])(arg0, id);
      });
    }
  };
  items[4] = {
    key: "getLastChatCommandMessage",
    value(arg0) {
      const currentUser = outer1_23.getCurrentUser();
      const messages = this.getMessages(arg0);
      const reversed = messages.toArray().reverse();
      return reversed.find((interaction) => {
        interaction = interaction.interaction;
        let type;
        if (null != interaction) {
          type = interaction.type;
        }
        let tmp2 = type === MessageStore(outer2_2[37]).InteractionTypes.APPLICATION_COMMAND;
        if (tmp2) {
          const interactionData = interaction.interactionData;
          let type1;
          if (null != interactionData) {
            type1 = interactionData.type;
          }
          tmp2 = type1 === MessageStore(outer2_2[37]).ApplicationCommandType.CHAT;
        }
        if (tmp2) {
          let id;
          if (null != id) {
            id = id.id;
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
      const tmp = outer1_1(outer1_2[30]);
      const reversed = outer1_1(outer1_2[30])(messages.toArray()).reverse();
      return reversed.get(0);
    }
  };
  items[6] = {
    key: "getLastNonCurrentUserMessage",
    value(arg0) {
      const currentUser = outer1_23.getCurrentUser();
      const messages = this.getMessages(arg0);
      const tmp = outer1_1(outer1_2[30]);
      const reversed = outer1_1(outer1_2[30])(messages.toArray()).reverse();
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
      const value = outer1_1(outer1_2[24]).get(arg0);
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
      const value = outer1_1(outer1_2[24]).get(arg0);
      if (null != value) {
        focusTargetId = value.focusTargetId;
      }
      return focusTargetId;
    }
  };
  items[9] = {
    key: "hasPresent",
    value(arg0) {
      const value = outer1_1(outer1_2[24]).get(arg0);
      const obj = outer1_1(outer1_2[24]);
      return null != value && value.ready && value.hasPresent();
    }
  };
  items[10] = {
    key: "isReady",
    value(arg0) {
      return outer1_1(outer1_2[24]).getOrCreate(arg0).ready;
    }
  };
  items[11] = {
    key: "whenReady",
    value(arg0, arg1) {
      const self = this;
      let closure_1 = arg0;
      let closure_2 = arg1;
      const result = this.addConditionalChangeListener(() => {
        if (self.isReady(closure_1)) {
          const _setImmediate = setImmediate;
          setImmediate(closure_2);
          return false;
        }
      });
    }
  };
  items[12] = {
    key: "isLoadingMessages",
    value(arg0) {
      return outer1_1(outer1_2[24]).getOrCreate(arg0).loadingMore;
    }
  };
  items[13] = {
    key: "hasCurrentUserSentMessage",
    value(arg0) {
      const currentUser = outer1_23.getCurrentUser();
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
      const currentUser = outer1_23.getCurrentUser();
      const messages = this.getMessages(arg0);
      return null != messages.findNewest((type) => {
        let tmp = type.type !== outer2_27.FRIEND_REQUEST_ACCEPTED;
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
      return outer1_31;
    }
  };
  return callback(MessageStore, items);
})(require("initialize").Store);
tmp6.displayName = "MessageStore";
tmp6 = new tmp6(require("dispatcher"), {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10015 in changesByChannelId) {
      let tmp12 = importDefault;
      let tmp13 = dependencyMap;
      let tmp11 = key10015;
      let obj = importDefault(4803);
      let value = obj.get(key10015);
      if (null == value) {
        continue;
      } else {
        let tmp = require;
        let tmp2 = dependencyMap;
        let _default = require(4808) /* _isNativeReflectConstruct */.default;
        let isConnectedResult = _default.isConnected();
        if (!value.cached) {
          if (isConnectedResult) {
            let tmp4 = importDefaultResult;
            let _HermesInternal = HermesInternal;
            let str = "Skipping background message sync for ";
            let tmp5 = key10015;
            let str2 = " cached:";
            let str3 = " ready:";
            let str4 = " hasMoreAfter:";
            let str5 = " isConnected:";
            let tmp6 = isConnectedResult;
            let logResult = importDefaultResult.log("Skipping background message sync for " + tmp11 + " cached:" + value.cached + " ready:" + value.ready + " hasMoreAfter:" + value.hasMoreAfter + " isConnected:" + isConnectedResult);
            let tmp8 = isConnectedResult;
            continue;
          }
          continue;
        }
        let mergeDeltaResult = value.mergeDelta(changesByChannelId[key10015].new_messages, changesByChannelId[key10015].modified_messages, changesByChannelId[key10015].deleted_message_ids);
        let tmp10 = isConnectedResult;
        continue;
      }
      continue;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: function handleCacheLoaded(messages) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(importDefault(21).entries(messages.messages));
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = callback3;
        let tmp3 = callback3(iter.value, 2);
        let tmp4 = importDefault;
        let tmp5 = dependencyMap;
        let obj2 = importDefault(4803);
        let orCreate = obj2.getOrCreate(tmp3[0]);
        let addCachedMessagesResult = orCreate.addCachedMessages(tmp3[1], true);
        let obj4 = importDefault(4803);
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
    const orCreate = importDefault(4803).getOrCreate(channelId);
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
    const obj = importDefault(4803);
    const tmp5 = reinjectEphemerals(channelId, truncateResult);
    importDefault(4803).commit(tmp5);
    const tmp7 = _createForOfIteratorHelperLoose(messages);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let tmp8 = receiveMediaMentionMessage;
        let tmp9 = receiveMediaMentionMessage(iter.value);
        let iter2 = tmp7();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    const orCreate = importDefault(4803).getOrCreate(channelId.channelId);
    const obj = importDefault(4803);
    importDefault(4803).commit(orCreate.mutate({ loadingMore: false, error: true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    let after;
    let before;
    let channelId;
    let focus;
    let jump;
    let limit;
    ({ channelId, jump, focus, before, after, limit } = truncate);
    let obj = importDefault(4803);
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
      importDefault(4803).commit(tmp9);
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
        tmp3 = null == before && null == after;
      }
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    let obj = importDefault(4803);
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
    importDefault(4803).commit(mutation);
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    let closure_0 = messageId;
    messageId = messageId.messageId;
    const value = importDefault(4803).get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", messageId.interactionData));
        importDefault(4803).commit(updateResult);
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
    const orCreate = importDefault(4803).getOrCreate(channelId);
    const obj = importDefault(4803);
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    importDefault(4803).commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    importDefaultResult.log("Clearing messages for " + channelId);
    importDefault(4803).clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(arg0) {
    let channelId;
    let isPushNotification;
    let message;
    let optimistic;
    ({ channelId, message } = arg0);
    ({ optimistic, isPushNotification } = arg0);
    const orCreate = importDefault(4803).getOrCreate(channelId);
    const obj = importDefault(4803);
    const isConnectedResult = require(4808) /* _isNativeReflectConstruct */.default.isConnected();
    if (isPushNotification) {
      if (obj5.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        (function addPushNotificationMessageIfNotCached(channelId, message, isConnectedResult) {
          return outer1_37(...arguments);
        })(channelId, message, isConnectedResult);
      } else {
        importDefaultResult.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        importDefault(4803).commit(orCreate.receivePushNotification(message, isConnectedResult));
        const obj6 = importDefault(4803);
      }
      obj5 = require(4806) /* isIOSPushNotificationRawPayloadFixExperimentEnabled */;
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
          importDefault(4803).commit(receiveMessageResult);
          receiveMediaMentionMessage(message);
          const obj4 = importDefault(4803);
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_SEND_FAILED: function handleSendFailed(channelId) {
    let messageId;
    let require;
    ({ messageId, reason: require } = channelId);
    const orCreate = importDefault(4803).getOrCreate(channelId.channelId);
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
            const result = set.set("state", outer1_26.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = "";
              if (null != closure_0) {
                str3 = closure_0;
              }
              const result1 = result.set("interactionError", str3);
              let result2 = result1.set("flags", outer1_0(outer1_2[29]).addFlag(result1.flags, outer1_24.EPHEMERAL));
              const obj3 = outer1_0(outer1_2[29]);
            } else {
              result2 = result;
              if (null != closure_0) {
                let str = "";
                if (null != closure_0) {
                  str = closure_0;
                }
                result2 = result.set("interactionError", str);
              }
            }
            return result2;
          });
        }
        importDefault(4803).commit(removeResult);
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let closure_0 = message;
    const id = message.message.id;
    let orCreate = importDefault(4803).getOrCreate(message.message.channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        let updateResult = orCreate.update(id, (message) => message(outer1_2[28]).updateMessageRecord(message, message.message));
        importDefault(4803).commit(updateResult);
        (function handleMediaMentionMessageUpdate(message) {
          let closure_0 = message;
          const media_mention = message.media_mention;
          let message_id;
          if (null != media_mention) {
            message_id = media_mention.message_id;
          }
          if (null != message_id) {
            if ("content" in message) {
              const orCreate = outer1_1(outer1_2[24]).getOrCreate(message.media_mention.attachment_id);
              let obj = outer1_1(outer1_2[24]);
              const updateResult = orCreate.update(message.media_mention.message_id, (message) => {
                let obj = message(outer2_2[28]);
                obj = { content: message.content };
                return obj.updateMessageRecord(message, obj);
              });
              outer1_1(outer1_2[24]).commit(updateResult);
              const obj3 = outer1_1(outer1_2[24]);
            }
          }
        })(message.message);
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    const value = importDefault(4803).get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, require(6835) /* timeoutAttachmentsAndEmbedsForMessage */.handleExplicitMediaScanTimeoutForMessage);
        importDefault(4803).commit(updateResult);
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    let obj = importDefault(4803);
    const orCreate = obj.getOrCreate(id.channelId);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        if (orCreate.revealedMessageId !== id) {
          cleanMediaMention(orCreate.get(id));
          const removeResult = orCreate.remove(id);
          importDefault(4803).commit(removeResult);
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
    let mutation;
    let obj = mutation(4803);
    const orCreate = obj.getOrCreate(ids.channelId);
    if (null == orCreate) {
      return false;
    } else {
      const item = ids.forEach((arg0) => {
        outer1_39(orCreate.get(arg0));
      });
      const removeManyResult = orCreate.removeMany(ids);
      mutation = removeManyResult;
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
              mutation = removeManyResult.mutate(obj);
            }
            obj = {};
            id = id.id;
            obj.revealedMessageId = id;
            mutation = removeManyResult.mutate(obj);
          }
          obj7 = mutation(22);
        }
        mutation(4803).commit(tmp8);
        const item1 = ids.forEach((arg0) => {
          outer1_29.delete(arg0);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const orCreate = importDefault(4803).getOrCreate(channelId);
    const obj = importDefault(4803);
    importDefault(4803).commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    let obj = importDefault(4803);
    const orCreate = obj.getOrCreate(channelId.channelId);
    obj = { newMessages: [], hasMoreAfter: false, hasMoreBefore: false };
    const complete = orCreate.loadComplete(obj);
    importDefault(4803).commit(complete);
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
        let tmp2 = performAuthorUpdate;
        let tmp3 = performAuthorUpdate(iter.value.guildId);
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
    reactions = reactions.reactions;
    ({ channelId, messageId } = reactions);
    const value = importDefault(4803).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        const currentUser = outer1_23.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        return addReactionBatch.addReactionBatch(reactions, id);
      });
      importDefault(4803).commit(updateResult);
    }
    const obj = importDefault(4803);
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const value = importDefault(4803).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      importDefault(4803).commit(updateResult);
    }
    const obj = importDefault(4803);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    let channelId;
    let messageId;
    emoji = emoji.emoji;
    ({ channelId, messageId } = emoji);
    const value = importDefault(4803).get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
      importDefault(4803).commit(updateResult);
    }
    const obj = importDefault(4803);
  },
  LOGOUT: function handleLogout() {
    const item = importDefault(4803).forEach((channelId) => {
      outer1_1(outer1_2[24]).clear(channelId.channelId);
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
      const orCreate = importDefault(4803).getOrCreate(tmp);
      const value = orCreate.get(messageId);
      if (null == value) {
        return false;
      } else {
        const items = [value];
        const removeResult = orCreate.remove(messageId);
        set.delete(messageId);
        const mergeResult = orCreate.remove(messageId).merge(items);
        importDefault(4803).commit(mergeResult);
      }
      const obj = importDefault(4803);
    } else {
      return false;
    }
  },
  LOCAL_MESSAGE_CREATE: function handleLocalIncomingMesssage(message) {
    message = message.message;
    currentUser = currentUser.getCurrentUser();
    if (tmp2) {
      let c31 = true;
    }
  }
});
let closure_32 = tmp6;
let result = set.fileFinishedImporting("stores/MessageStore.tsx");

export default tmp6;
