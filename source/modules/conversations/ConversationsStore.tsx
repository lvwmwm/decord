// Module ID: 6830
// Function ID: 53914
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 3767, 1906, 1849, 6831, 6832, 1362, 21, 4351, 6833, 1327, 3769, 566, 686, 2]

// Module 6830 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import mapConversationModeration from "mapConversationModeration";
import getReactionEmojiName from "getReactionEmojiName";
import initialize from "initialize";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";
import importDefaultResult from "priv";

let closure_14;
let closure_15;
let closure_16;
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
function removePendingListFetch(channelId, requestKey) {
  const value = map.get(channelId);
  const tmp = null == value || !value.has(requestKey);
  let flag = !tmp;
  if (!tmp) {
    value.delete(requestKey);
    flag = true;
    if (0 === value.size) {
      map.delete(channelId);
      flag = true;
    }
  }
  return flag;
}
function clearPendingConversationFetch(arg0, arg1) {
  const value = map1.get(arg0);
  if (null != value) {
    value.delete(arg1);
    if (0 === value.size) {
      map1.delete(arg0);
    }
  }
}
function buildModerationLabel(arr) {
  const first = arr[0];
  const mapped = arr.map((category) => {
    let reason = category.category;
    if (null == reason) {
      reason = category.reason;
    }
    return reason;
  });
  const found = mapped.filter((arg0) => null != arg0);
  let severity;
  if (null != first) {
    severity = first.severity;
  }
  let tmp3 = null;
  if (null != severity) {
    tmp3 = severity;
  }
  let confidence;
  if (null != first) {
    confidence = first.confidence;
  }
  let tmp5 = null;
  if (null != confidence) {
    tmp5 = confidence;
  }
  let combined = null;
  if (null != tmp3) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp3 + " severity";
  }
  const items = [combined, ];
  let combined1 = null;
  if (null != tmp5) {
    const _HermesInternal2 = HermesInternal;
    combined1 = "" + tmp5 + " confidence";
  }
  items[1] = combined1;
  const found1 = items.filter(Boolean);
  const joined = found1.join(", ");
  let joined1 = null;
  if (found.length > 0) {
    joined1 = found.join(", ");
  }
  const items1 = [joined1, ];
  let tmp11 = null;
  if (joined.length > 0) {
    tmp11 = joined;
  }
  items1[1] = tmp11;
  const found2 = items1.filter(Boolean);
  const joined2 = found2.join(" \u00B7 ");
  let str5 = "Moderation Failed";
  if (joined2.length > 0) {
    str5 = joined2;
  }
  return str5;
}
function processHydratedMessages(channelId, conversationId, messages, fullyHydrated, messageReferences) {
  let iter2;
  let iter4;
  let items = messageReferences;
  if (messageReferences === undefined) {
    items = [];
  }
  const peekResult = importDefaultResult.peek(channelId);
  if (null != peekResult) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    let value = conversationMetadataById.get(conversationId);
    if (null != value) {
      if (fullyHydrated) {
        const items1 = [];
        const tmp4 = _createForOfIteratorHelperLoose(messages);
        let iter = tmp4();
        if (!iter.done) {
          do {
            let tmp5 = require;
            let tmp6 = dependencyMap;
            let obj = require(4351) /* createMinimalMessageRecord */;
            let messageRecord = obj.createMessageRecord(iter.value);
            let arr = items1.push(messageRecord);
            let messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
            value = messageMetadataByMessageId.get(messageRecord.id);
            if (null != value) {
              value.conversationId = conversationId;
              value.message = messageRecord;
            } else {
              let messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
              obj = { conversationId, moderationLabel: null, message: messageRecord };
              let result = messageMetadataByMessageId2.set(messageRecord.id, obj);
            }
            iter2 = tmp4();
            iter = iter2;
          } while (!iter2.done);
        }
        value.hydratedMessages = items1;
        value.fullyHydrated = fullyHydrated;
        const tmp12 = _createForOfIteratorHelperLoose(items);
        let iter3 = tmp12();
        if (!iter3.done) {
          do {
            value = iter3.value;
            let messageMetadataByMessageId3 = peekResult.messageMetadataByMessageId;
            if (null == messageMetadataByMessageId3.get(value.id)) {
              let messageMetadataByMessageId4 = peekResult.messageMetadataByMessageId;
              obj = { conversationId: null, moderationLabel: null };
              let tmp13 = require;
              let tmp14 = dependencyMap;
              let obj4 = require(4351) /* createMinimalMessageRecord */;
              obj.message = obj4.createMessageRecord(value);
              let result1 = messageMetadataByMessageId4.set(value.id, obj);
            }
            iter4 = tmp12();
            iter3 = iter4;
          } while (!iter4.done);
        }
      }
    }
  }
}
function replaceHydratedMessage(peekResult, value, messageId, message) {
  let closure_0 = messageId;
  value.message = message;
  value = null;
  if (null != value.conversationId) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    value = conversationMetadataById.get(value.conversationId);
  }
  let hydratedMessages;
  if (null != value) {
    hydratedMessages = value.hydratedMessages;
  }
  if (null != hydratedMessages) {
    hydratedMessages = value.hydratedMessages;
    const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
    if (-1 !== findIndexResult) {
      const hydratedMessages1 = value.hydratedMessages;
      const substr = hydratedMessages1.slice();
      substr[findIndexResult] = message;
      value.hydratedMessages = substr;
    }
  }
}
function handleReaction(channelId) {
  let emoji;
  let messageId;
  let reactionType;
  let type;
  let userId;
  ({ messageId, emoji, reactionType } = channelId);
  ({ type, userId } = channelId);
  const peekResult = importDefaultResult.peek(channelId.channelId);
  if (null == peekResult) {
    return false;
  } else {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    const value = messageMetadataByMessageId.get(messageId);
    let message;
    if (null != value) {
      message = value.message;
    }
    if (null == message) {
      return false;
    } else {
      if (obj.shouldApplyReaction(channelId)) {
        const tmp4 = store.getId() === userId;
        if ("MESSAGE_REACTION_ADD" === type) {
          const message2 = value.message;
          let addReactionResult = message2.addReaction(emoji, tmp4, channelId.colors, reactionType);
        } else {
          message = value.message;
          addReactionResult = message.removeReaction(emoji, tmp4, reactionType);
        }
        replaceHydratedMessage(peekResult, value, messageId, addReactionResult);
        return true;
      } else {
        return false;
      }
      obj = require(3769) /* getReactionEmojiName */;
    }
  }
}
function removeHydratedMessage(channelId, id) {
  let closure_0 = id;
  const peekResult = importDefaultResult.peek(channelId);
  if (null == peekResult) {
    return false;
  } else {
    const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
    let value = messageMetadataByMessageId2.get(id);
    if (null != value) {
      value = null;
      if (null != value.conversationId) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        value = conversationMetadataById.get(value.conversationId);
      }
      let hydratedMessages;
      if (null != value) {
        hydratedMessages = value.hydratedMessages;
      }
      if (null != hydratedMessages) {
        const hydratedMessages1 = value.hydratedMessages;
        value.hydratedMessages = hydratedMessages1.filter((id) => id.id !== closure_0);
      }
    }
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    return messageMetadataByMessageId.delete(id);
  }
}
function cleanupChannelSideState(id) {
  return map.delete(id);
}
function evictChannel(id) {
  let hasItem = importDefaultResult.has(id);
  importDefaultResult.del(id);
  if (!hasItem) {
    hasItem = cleanupChannelSideState(id);
  }
  return hasItem;
}
({ CONVERSATION_COLORS: closure_14, CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX: closure_15, MAX_CONVERSATIONS_PER_CHANNEL: closure_16 } = CONVERSATION_COLORS);
let obj = { max: CONVERSATION_COLORS.MAX_CHANNELS_WITH_CONVERSATIONS, dispose: cleanupChannelSideState };
importDefaultResult = new importDefaultResult(obj);
let map = new Map();
let map1 = new Map();
let tmp7 = ((Store) => {
  class ConversationsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ConversationsStore);
      obj = outer1_6(ConversationsStore);
      tmp2 = outer1_5;
      if (outer1_20()) {
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
  callback2(ConversationsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_13, outer1_10, outer1_11, outer1_12);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasChannelData",
    value(arg0) {
      return outer1_17.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getChannelConversations",
    value(arg0) {
      const peekResult = outer1_17.peek(arg0);
      let conversations = null;
      if (null != peekResult) {
        conversations = peekResult.conversations;
      }
      return conversations;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getConversationForMessage",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let conversationId;
      if (null != peekResult) {
        const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
        const value = messageMetadataByMessageId.get(arg1);
        if (null != value) {
          conversationId = value.conversationId;
        }
      }
      let tmp5 = null;
      if (null != conversationId) {
        tmp5 = conversationId;
      }
      return tmp5;
    }
  };
  items[4] = {
    key: "getMessageMetadata",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let value;
      if (null != peekResult) {
        const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
        value = messageMetadataByMessageId.get(arg1);
      }
      let tmp4 = null;
      if (null != value) {
        tmp4 = value;
      }
      return tmp4;
    }
  };
  items[5] = {
    key: "getMessage",
    value(arg0, arg1) {
      const messageMetadata = this.getMessageMetadata(arg0, arg1);
      let message;
      if (null != messageMetadata) {
        message = messageMetadata.message;
      }
      let tmp3 = null;
      if (null != message) {
        tmp3 = message;
      }
      return tmp3;
    }
  };
  items[6] = {
    key: "getConversationMetadata",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let value;
      if (null != peekResult) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        value = conversationMetadataById.get(arg1);
      }
      let tmp4 = null;
      if (null != value) {
        tmp4 = value;
      }
      return tmp4;
    }
  };
  items[7] = {
    key: "getEdgeMarker",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      if (null == peekResult) {
        return null;
      }
    }
  };
  items[8] = {
    key: "isPendingFetch",
    value(arg0) {
      return outer1_18.has(arg0);
    }
  };
  items[9] = {
    key: "isListFetchPending",
    value(arg0, arg1) {
      const value = outer1_18.get(arg0);
      let hasItem;
      if (null != value) {
        hasItem = value.has(arg1);
      }
      return null != hasItem && hasItem;
    }
  };
  items[10] = {
    key: "getSelectedConversationId",
    value(arg0) {
      const peekResult = outer1_17.peek(arg0);
      let prop;
      if (null != peekResult) {
        prop = peekResult.selectedConversationId;
      }
      let tmp3 = null;
      if (null != prop) {
        tmp3 = prop;
      }
      return tmp3;
    }
  };
  items[11] = {
    key: "getSelectedConversation",
    value(arg0) {
      const peekResult = outer1_17.peek(arg0);
      let prop;
      if (null != peekResult) {
        prop = peekResult.selectedConversationId;
      }
      let tmp3 = null;
      if (null != prop) {
        let conversation;
        if (null != peekResult) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          const value = conversationMetadataById.get(prop);
          if (null != value) {
            conversation = value.conversation;
          }
        }
        let tmp6 = null;
        if (null != conversation) {
          tmp6 = conversation;
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  };
  items[12] = {
    key: "getConversationColor",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let tmp2 = null;
      if (null != peekResult) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        const value = conversationMetadataById.get(arg1);
        let color;
        if (null != value) {
          color = value.color;
        }
        let tmp6 = null;
        if (null != color) {
          tmp6 = color;
        }
        tmp2 = tmp6;
      }
      return tmp2;
    }
  };
  items[13] = {
    key: "getHydratedMessages",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let hydratedMessages;
      if (null != peekResult) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        const value = conversationMetadataById.get(arg1);
        if (null != value) {
          hydratedMessages = value.hydratedMessages;
        }
      }
      let tmp5 = null;
      if (null != hydratedMessages) {
        tmp5 = hydratedMessages;
      }
      return tmp5;
    }
  };
  items[14] = {
    key: "getHydratedMessageById",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let message;
      if (null != peekResult) {
        const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
        const value = messageMetadataByMessageId.get(arg1);
        if (null != value) {
          message = value.message;
        }
      }
      let tmp5 = null;
      if (null != message) {
        tmp5 = message;
      }
      return tmp5;
    }
  };
  items[15] = {
    key: "isConversationFetchPending",
    value(arg0, arg1) {
      const value = outer1_19.get(arg0);
      let tmp = null != value;
      if (tmp) {
        tmp = 0 !== value.size;
      }
      if (tmp) {
        let hasItem = true !== arg1;
        if (!hasItem) {
          hasItem = value.has("full");
        }
        tmp = hasItem;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getConversationFeedbackRating",
    value(arg0, arg1) {
      const peekResult = outer1_17.peek(arg0);
      let value;
      if (null != peekResult) {
        const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
        value = recentFeedbackRatingsByConversationId.get(arg1);
      }
      let tmp4 = null;
      if (null != value) {
        tmp4 = value;
      }
      return tmp4;
    }
  };
  return callback(ConversationsStore, items);
})(require("initialize").Store);
tmp7.displayName = "ConversationsStore";
obj = {
  CONVERSATION_FETCH_START: function handleConversationFetchStart(conversationId) {
    conversationId = conversationId.conversationId;
    let str = "preview";
    if (conversationId.full) {
      str = "full";
    }
    const value = map1.get(conversationId);
    if (null != value) {
      value.add(str);
    } else {
      const _Set = Set;
      const items = [str];
      const set = new Set(items);
      const result = map1.set(conversationId, set);
    }
  },
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(arg0) {
    let channelId;
    let conversationId;
    let fullyHydrated;
    let messageReferences;
    let messages;
    ({ channelId, conversationId, messages, messageReferences, fullyHydrated } = arg0);
    let str = "preview";
    if (fullyHydrated) {
      str = "full";
    }
    clearPendingConversationFetch(conversationId, str);
    processHydratedMessages(channelId, conversationId, messages, fullyHydrated, messageReferences);
  },
  CONVERSATION_FETCH_FAILURE: function handleConversationFetchFailure(full) {
    let str = "preview";
    if (full.full) {
      str = "full";
    }
    clearPendingConversationFetch(full.conversationId, str);
  },
  CONVERSATIONS_FETCH_START: function handleFetchStart(isJump) {
    let channelId;
    let requestKey;
    ({ channelId, requestKey } = isJump);
    if (isJump.isJump) {
      map.delete(channelId);
    }
    let value = map.get(channelId);
    if (null == value) {
      const _Set = Set;
      const set = new Set();
      const result = map.set(channelId, set);
      value = set;
    }
    value.add(requestKey);
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleFetchSuccess(requestKey) {
    let anchor;
    let channelId;
    let direction;
    let fullyHydrated;
    let isJump;
    let iter2;
    let rawConversations;
    ({ channelId, rawConversations, direction, anchor, isJump, fullyHydrated } = requestKey);
    let set;
    if (removePendingListFetch(channelId, requestKey.requestKey)) {
      const mapped = rawConversations.map(set(6833).mapConversation);
      const found = mapped.filter(set(1327).isNotNullish);
      const peekResult = importDefaultResult.peek(channelId);
      if (isJump) {
        let prop;
        if (!tmp6) {
          prop = peekResult.selectedConversationId;
        }
        let tmp8 = null;
        if (null != prop) {
          let conversation;
          if (null != peekResult) {
            let conversationMetadataById = peekResult.conversationMetadataById;
            let value = conversationMetadataById.get(prop);
            if (null != value) {
              conversation = value.conversation;
            }
          }
          tmp8 = conversation;
        }
        if (null != tmp8) {
          let items = [tmp8];
          let items1 = items;
        } else {
          items1 = [];
        }
      } else {
        let conversations;
        if (!tmp6) {
          conversations = peekResult.conversations;
        }
        if (null == conversations) {
          conversations = [];
        }
        let timestamp1 = null;
        if (!isJump) {
          let reachedOldest;
          if (null != peekResult) {
            reachedOldest = peekResult.reachedOldest;
          }
          let tmp14 = null;
          if (null != reachedOldest) {
            tmp14 = reachedOldest;
          }
          timestamp1 = tmp14;
        }
        let tmp15 = null;
        if (!isJump) {
          let reachedNewest;
          if (null != peekResult) {
            reachedNewest = peekResult.reachedNewest;
          }
          let tmp17 = null;
          if (null != reachedNewest) {
            tmp17 = reachedNewest;
          }
          tmp15 = tmp17;
        }
        const _Set = Set;
        set = new Set(conversations.map((id) => id.id));
        let timestamp = tmp15;
        if (tmp23) {
          let tmp30 = tmp29;
          if ("before" === direction) {
            tmp30 = null == anchor;
          }
          if (tmp30) {
            const _Date3 = Date;
            timestamp = Date.now();
          }
          const arr5 = (function mergeConversations(conversations, found) {
            let done;
            let done2;
            const map = new Map();
            const tmp = outer1_21(conversations);
            let iter = tmp();
            if (!iter.done) {
              do {
                let value = iter.value;
                let result = map.set(value.id, value);
                let iter2 = tmp();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
            const tmp3 = outer1_21(found);
            let iter3 = tmp3();
            if (!iter3.done) {
              do {
                value = iter3.value;
                let result1 = map.set(value.id, value);
                let iter4 = tmp3();
                iter3 = iter4;
                done2 = iter4.done;
              } while (!done2);
            }
            const arr = Array.from(map.values());
            const sorted = arr.sort((startMessageId, startMessageId2) => outer2_1(outer2_2[13]).compare(startMessageId.startMessageId, startMessageId2.startMessageId));
            return arr;
          })(conversations, found);
          let substr = arr5;
          let tmp33 = timestamp1;
          let tmp34 = timestamp;
          if (arr5.length > closure_16) {
            if ("after" === direction) {
              substr = arr5.slice(arr5.length - closure_16);
              tmp33 = null;
              tmp34 = timestamp;
            } else if (tmp29) {
              substr = arr5.slice(0, closure_16);
              tmp33 = timestamp1;
              tmp34 = null;
            } else {
              let tmp35 = (function clampAnchorWindowStart(arr5, anchor) {
                let closure_0 = anchor;
                if (null == anchor) {
                  return 0;
                } else {
                  let length = arr5.findIndex((startMessageId) => outer2_1(outer2_2[13]).compare(startMessageId.startMessageId, closure_0) >= 0);
                  if (-1 === length) {
                    length = arr5.length;
                  }
                  const _Math = Math;
                  const _Math2 = Math;
                  const _Math3 = Math;
                  return Math.max(0, Math.min(length - Math.floor(outer1_16 / 2), arr5.length - outer1_16));
                }
              })(arr5, anchor);
              let tmp36 = timestamp1;
              if (tmp35 > 0) {
                tmp36 = null;
              }
              let tmp38 = timestamp;
              if (tmp35 + closure_16 < arr5.length) {
                tmp38 = null;
              }
              substr = arr5.slice(tmp35, tmp35 + closure_16);
              tmp34 = tmp38;
              tmp33 = tmp36;
            }
          }
          let tmp42 = (function buildChannelData(channelId, substr, peekResult) {
            let iter9;
            let guildId;
            if (null != peekResult) {
              guildId = peekResult.guildId;
            }
            if (null == guildId) {
              const first = substr[0];
              let guildId1;
              if (null != first) {
                guildId1 = first.guildId;
              }
              guildId = guildId1;
            }
            if (null == guildId) {
              const channel = outer1_9.getChannel(channelId);
              let guild_id;
              if (null != channel) {
                guild_id = channel.guild_id;
              }
              guildId = guild_id;
            }
            let tmp8 = null;
            if (null != guildId) {
              tmp8 = guildId;
            }
            const map = new Map();
            const map1 = new Map();
            let colorIndex;
            if (null != peekResult) {
              colorIndex = peekResult.colorIndex;
            }
            let num2 = 0;
            if (null != colorIndex) {
              num2 = colorIndex;
            }
            const tmp10 = outer1_21(substr);
            const iter = tmp10();
            let tmp11 = num2;
            let iter2 = iter;
            let tmp17 = num2;
            if (!iter.done) {
              do {
                let value = iter2.value;
                value = undefined;
                if (null != peekResult) {
                  let conversationMetadataById = peekResult.conversationMetadataById;
                  value = conversationMetadataById.get(value.id);
                }
                let color;
                if (null != value) {
                  color = value.color;
                }
                let sum = tmp11;
                if (null == color) {
                  let tmp21 = outer1_14;
                  let tmp22 = +tmp11;
                  sum = tmp22 + 1;
                  color = outer1_14[tmp22 % outer1_14.length];
                }
                let hydratedMessages;
                if (null != value) {
                  hydratedMessages = value.hydratedMessages;
                }
                let tmp24 = null;
                if (null != hydratedMessages) {
                  tmp24 = hydratedMessages;
                }
                let tmp25 = null != tmp24;
                if (tmp25) {
                  let tmp26 = null == value || !value.fullyHydrated;
                  tmp25 = !tmp26;
                }
                let obj = { conversation: value, color, hydratedMessages: tmp24, fullyHydrated: tmp25 };
                let result = map.set(value.id, obj);
                let tmp28 = null;
                let tmp29 = tmp12;
                let tmp30 = tmp13;
                if (null != value.moderation) {
                  let _Map = Map;
                  let tmp31 = new.target;
                  let tmp32 = new.target;
                  let map2 = new Map();
                  let tmp33 = map2;
                  let tmp34 = outer1_21;
                  let tmp35 = outer1_21(value.moderation.flaggedMessageDetails);
                  let iter3 = tmp35();
                  let iter4 = iter3;
                  tmp28 = map2;
                  let tmp36 = iter3;
                  let tmp37 = tmp35;
                  tmp29 = tmp12;
                  tmp30 = tmp13;
                  if (!iter3.done) {
                    do {
                      value = iter4.value;
                      let value1 = map2.get(value.messageId);
                      if (null != value1) {
                        let arr = value1.push(value);
                      } else {
                        let items = [value];
                        let result1 = map2.set(value.messageId, items);
                      }
                      iter5 = tmp35();
                      iter4 = iter5;
                      tmp28 = map2;
                      let tmp40 = iter5;
                      let tmp41 = tmp35;
                      tmp29 = value;
                      tmp30 = value1;
                    } while (!iter5.done);
                  }
                }
                let tmp42 = outer1_21;
                let tmp43 = outer1_21(value.messageIds);
                let iter6 = tmp43();
                let iter7 = iter6;
                let tmp44 = tmp14;
                let tmp45 = tmp15;
                let tmp46 = tmp16;
                if (!iter6.done) {
                  do {
                    let value2 = iter7.value;
                    let value3;
                    if (null != peekResult) {
                      let messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
                      value3 = messageMetadataByMessageId.get(value2);
                    }
                    let moderationLabel;
                    if (null != value3) {
                      moderationLabel = value3.moderationLabel;
                    }
                    let hasItem = null == moderationLabel && null != value.moderation;
                    if (hasItem) {
                      let flaggedMessageIds = value.moderation.flaggedMessageIds;
                      hasItem = flaggedMessageIds.includes(value2);
                    }
                    if (hasItem) {
                      hasItem = null != tmp28;
                    }
                    let tmp51Result = null;
                    if (hasItem) {
                      let tmp51 = outer1_25;
                      let value4 = tmp28.get(value2);
                      let items1 = value4;
                      if (null == value4) {
                        items1 = [];
                      }
                      tmp51Result = tmp51(items1);
                      tmp45 = value4;
                    }
                    obj = { conversationId: value.id };
                    let tmp53 = tmp45;
                    let moderationLabel1;
                    if (null != value3) {
                      moderationLabel1 = value3.moderationLabel;
                    }
                    let tmp55 = tmp51Result;
                    if (null != moderationLabel1) {
                      tmp55 = moderationLabel1;
                    }
                    obj.moderationLabel = tmp55;
                    let message;
                    if (null != value3) {
                      message = value3.message;
                    }
                    let tmp57 = null;
                    if (null != message) {
                      tmp57 = message;
                    }
                    obj.message = tmp57;
                    let result2 = map1.set(value2, obj);
                    let message_id;
                    if (null != value3) {
                      message = value3.message;
                      tmp44 = message;
                      if (null != message) {
                        let messageReference = message.messageReference;
                        tmp44 = messageReference;
                        if (null != messageReference) {
                          message_id = messageReference.message_id;
                          tmp44 = messageReference;
                        }
                      }
                    }
                    let tmp60 = tmp44;
                    if (null != message_id) {
                      let value5;
                      if (null != peekResult) {
                        let messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
                        value5 = messageMetadataByMessageId2.get(message_id);
                      }
                      let message1;
                      if (null != value5) {
                        message1 = value5.message;
                      }
                      let tmp63 = null == message1 || map1.has(message_id);
                      tmp46 = value5;
                      if (!tmp63) {
                        let result3 = map1.set(message_id, value5);
                        tmp46 = value5;
                      }
                    }
                    iter8 = tmp43();
                    iter7 = iter8;
                    let tmp65 = moderationLabel1;
                    let tmp66 = message;
                    tmp14 = tmp44;
                    tmp15 = tmp45;
                    let tmp67 = value2;
                    let tmp68 = value3;
                    let tmp69 = tmp51Result;
                    let tmp70 = message_id;
                    tmp16 = tmp46;
                  } while (!iter8.done);
                }
                iter9 = tmp10();
                iter2 = iter9;
                tmp11 = sum;
                tmp12 = tmp29;
                tmp13 = tmp30;
                tmp17 = sum;
              } while (!iter9.done);
            }
            let prop;
            if (null != peekResult) {
              prop = peekResult.recentFeedbackRatingsByConversationId;
            }
            if (null == prop) {
              const tmp74 = outer1_1(outer1_2[12]);
              const obj1 = { max: outer1_15 };
              const prototype2 = tmp74.prototype;
              prop = new tmp74(obj1);
            }
            let prop1;
            if (null != peekResult) {
              prop1 = peekResult.selectedConversationId;
            }
            let tmp80 = null;
            if (null != prop1) {
              tmp80 = prop1;
            }
            let tmp81 = null;
            if (null != tmp80) {
              tmp81 = null;
              if (substr.some((id) => id.id === closure_0)) {
                tmp81 = tmp80;
              }
            }
            const obj2 = { guildId: tmp8, conversations: substr, conversationMetadataById: map, messageMetadataByMessageId: map1, recentFeedbackRatingsByConversationId: prop };
            let reachedOldest;
            if (null != peekResult) {
              reachedOldest = peekResult.reachedOldest;
            }
            let tmp83 = null;
            if (null != reachedOldest) {
              tmp83 = reachedOldest;
            }
            obj2.reachedOldest = tmp83;
            let reachedNewest;
            if (null != peekResult) {
              reachedNewest = peekResult.reachedNewest;
            }
            let tmp85 = null;
            if (null != reachedNewest) {
              tmp85 = reachedNewest;
            }
            obj2.reachedNewest = tmp85;
            obj2.selectedConversationId = tmp81;
            obj2.colorIndex = tmp17;
            return obj2;
          })(channelId, substr, peekResult);
          tmp42.reachedOldest = tmp33;
          tmp42.reachedNewest = tmp34;
          if (null != peekResult) {
            const _Object = Object;
            const merged = Object.assign(peekResult, tmp42);
          } else {
            let result = importDefaultResult.set(channelId, tmp42);
          }
          const tmp47 = _createForOfIteratorHelperLoose(rawConversations);
          let iter = tmp47();
          if (!iter.done) {
            do {
              value = iter.value;
              if (null != value.messages) {
                let tmp48 = processHydratedMessages;
                let tmp49 = channelId;
                let tmp50 = fullyHydrated;
                let tmp51 = processHydratedMessages(channelId, value.id, value.messages, fullyHydrated);
              }
              iter2 = tmp47();
              iter = iter2;
            } while (!iter2.done);
          }
          return true;
        } else if ("before" === direction) {
          const _Date2 = Date;
          timestamp1 = Date.now();
          let timestamp2 = tmp15;
        } else {
          timestamp2 = tmp15;
          if ("after" === direction) {
            const _Date = Date;
            timestamp2 = Date.now();
          }
        }
        tmp23 = found.some((id) => !set.has(id.id)) || null == anchor;
      }
    } else {
      return false;
    }
  },
  CONVERSATIONS_FETCH_FAILURE: function handleFetchFailure(channelId) {
    return removePendingListFetch(channelId.channelId, channelId.requestKey);
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let hasItem = null != channelId;
    if (hasItem) {
      hasItem = importDefaultResult.has(channelId);
    }
    if (hasItem) {
      const value = importDefaultResult.get(channelId);
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return evictChannel(channel.channel.id);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let iter3;
    guild = guild.guild;
    if ("unavailable" in guild) {
      if (true === guild.unavailable) {
        return false;
      }
    }
    const tmp = _createForOfIteratorHelperLoose(importDefaultResult.keys());
    const iter = tmp();
    let iter2 = iter;
    let flag2 = false;
    let flag3 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = importDefaultResult;
        let peekResult = importDefaultResult.peek(value);
        let guildId;
        if (null != peekResult) {
          guildId = peekResult.guildId;
        }
        let tmp5 = guildId === guild.id;
        if (tmp5) {
          let tmp6 = evictChannel;
          tmp5 = evictChannel(value);
        }
        if (tmp5) {
          flag2 = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag3 = flag2;
      } while (!iter3.done);
    }
    return flag3;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId.jump) {
      if (channelId.getChannelId() === channelId) {
        const peekResult = importDefaultResult.peek(channelId);
        let flag = null != peekResult;
        if (flag) {
          peekResult.reachedOldest = null;
          peekResult.reachedNewest = null;
          flag = true;
        }
        return flag;
      }
    }
    return false;
  },
  SET_SELECTED_CONVERSATION: function handleSetSelectedConversation(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      return false;
    } else {
      const peekResult = importDefaultResult.peek(channelId);
      let flag = null != peekResult;
      if (flag) {
        peekResult.selectedConversationId = tmp;
        flag = true;
      }
      return flag;
    }
  },
  CLEAR_CONVERSATION_SELECTION: function handleClearConversationSelection(conversationId) {
    conversationId = conversationId.conversationId;
    const peekResult = importDefaultResult.peek(conversationId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const selectedConversationId = peekResult.selectedConversationId;
      let flag = null != selectedConversationId;
      if (flag) {
        flag = null == conversationId || selectedConversationId === conversationId;
        const tmp2 = null == conversationId || selectedConversationId === conversationId;
      }
      if (flag) {
        peekResult.selectedConversationId = null;
        flag = true;
      }
      return flag;
    }
  },
  SET_CONVERSATION_FEEDBACK_RATING: function handleSetConversationFeedbackRating(channelId) {
    let conversationId;
    let rating;
    ({ conversationId, rating } = channelId);
    const peekResult = importDefaultResult.peek(channelId.channelId);
    let flag = null != peekResult;
    if (flag) {
      const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
      const result = recentFeedbackRatingsByConversationId.set(conversationId, rating);
      flag = true;
    }
    return flag;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ channel_id, id } = message);
    if (null != channel_id) {
      if (null != id) {
        const peekResult = importDefaultResult.peek(channel_id);
        if (null == peekResult) {
          return false;
        } else {
          const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
          const value = messageMetadataByMessageId.get(id);
          message = undefined;
          if (null != value) {
            message = value.message;
          }
          let flag = null != message;
          if (flag) {
            replaceHydratedMessage(peekResult, value, id, require(4351) /* createMinimalMessageRecord */.updateMessageRecord(value.message, message));
            flag = true;
            const obj = require(4351) /* createMinimalMessageRecord */;
          }
          return flag;
        }
      }
    }
    return false;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const peekResult = importDefaultResult.peek(messageId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(messageId);
      let message;
      if (null != value) {
        message = value.message;
      }
      if (null == message) {
        return false;
      } else {
        message = value.message;
        replaceHydratedMessage(peekResult, value, messageId, message.addReactionBatch(messageId.reactions, store.getId()));
        return true;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = importDefaultResult.peek(messageId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(messageId);
      let message;
      if (null != value) {
        message = value.message;
      }
      if (null == message) {
        return false;
      } else {
        message = value.message;
        replaceHydratedMessage(peekResult, value, messageId, message.set("reactions", []));
        return true;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = importDefaultResult.peek(messageId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(messageId);
      let message;
      if (null != value) {
        message = value.message;
      }
      if (null == message) {
        return false;
      } else {
        message = value.message;
        replaceHydratedMessage(peekResult, value, messageId, message.removeReactionsForEmoji(messageId.emoji));
        return true;
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    return removeHydratedMessage(channelId.channelId, channelId.id);
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    let iter3;
    const tmp2 = _createForOfIteratorHelperLoose(ids.ids);
    const iter = tmp2();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp3 = removeHydratedMessage;
        if (removeHydratedMessage(tmp, iter2.value)) {
          flag = true;
        }
        iter3 = tmp2();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  LOGOUT: function handleLogout() {
    importDefaultResult.reset();
    map.clear();
    map1.clear();
  }
};
tmp7 = new tmp7(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/conversations/ConversationsStore.tsx");

export default tmp7;
