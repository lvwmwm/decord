// Module ID: 7767
// Function ID: 7768
// Name: ChannelConversationsStore
// Dependencies: [502, 4863, 4956, 4917, 1383, 5655, 1451, 11, 7768, 7769, 1379, 6063, 504, 572, 2]

// Module 7767 (ChannelConversationsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import LRUCacheDefault from "LRUCache" /* 1451 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6063 */;
import ConversationMessageCacheUtils from "ConversationMessageCacheUtils" /* 7768 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import UserStore from "UserStore" /* 1383 */;
import ConversationConstants from "ConversationConstants" /* 5655 */;
import size from "module_2" /* 2 */;

let length, set;

let MAX_CHANNELS_WITH_CONVERSATIONS;
let c10;
let c9;
let metroImportAll;
function upsertReference(id) {
  const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
  const tmp = _undefined;
  if (!messageMetadataByMessageId.has(id.id)) {
    const messageMetadataByMessageId2 = tmp.messageMetadataByMessageId;
    const obj = { conversationId: null, message: id };
    const result = messageMetadataByMessageId2.set(id.id, obj);
  }
}
function removePendingListFetch(channelId, requestKey) {
  const value = map.get(channelId);
  let flag = !(null == value || !value.has(requestKey));
  null == value || !value.has(requestKey);
  const obj = map;
  if (flag) {
    value.delete(requestKey);
    flag = true;
    if (0 === value.size) {
      obj.delete(channelId);
      flag = true;
    }
  }
  return flag;
}
function processHydratedMessages(channelId, id, messages, fullyHydrated) {
  let closure_0 = id;
  const items = [];
  const peekResult = navigation.peek(channelId);
  let c1 = peekResult;
  if (null != peekResult) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    const value = conversationMetadataById.get(id);
    if (null != value) {
      const obj2 = {
        meta: value,
        messages,
        fullyHydrated,
        messageReferences: items,
        upsertMessage(id) {
              const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
              const value = messageMetadataByMessageId.get(id.id);
              const tmp = _undefined;
              if (null != value) {
                value.conversationId = conversationId;
                value.message = id;
              } else {
                const messageMetadataByMessageId2 = tmp.messageMetadataByMessageId;
                const obj = { conversationId, message: id };
                const result = messageMetadataByMessageId2.set(id.id, obj);
              }
            },
        upsertReference
      };
      const obj = ConversationMessageCacheUtils;
      const result = obj.applyHydratedMessages(obj2);
    }
  }
}
function handleReaction(messageId) {
  messageId = messageId.messageId;
  const peekResult = navigation.peek(messageId.channelId);
  let flag = false;
  if (null != peekResult) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    const value = messageMetadataByMessageId.get(messageId);
    let message1;
    if (value != null) {
      message1 = value.message;
    }
    flag = false;
    if (null != message1) {
      const message = value.message;
      const obj = ConversationMessageCacheUtils;
      const applyReactionResult = obj.applyReaction(messageId, message);
      let flag2 = null != applyReactionResult;
      if (flag2) {
        value.message = applyReactionResult;
        let tmp8 = null;
        const replaceHydratedMessage = tmp4(7768).replaceHydratedMessage;
        ConversationMessageCacheUtils;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          let value2 = conversationMetadataById.get(value.conversationId);
          if (value2 == null) {
            value2 = null;
          }
          tmp8 = value2;
        }
        const result = replaceHydratedMessage(tmp8, messageId, applyReactionResult);
        flag2 = true;
      }
      flag = flag2;
    }
  }
  return flag;
}
function handleRelationshipUpdate() {
  let c0 = false;
  let item = navigation.forEach((messageMetadataByMessageId) => {
    const prop = messageMetadataByMessageId.messageMetadataByMessageId;
    const item = prop.forEach((message, index) => {
      if (null != message.message) {
        const obj = ConversationMessageCacheUtils;
        const result = obj.applyRelationshipFlags(message.message);
        if (null != result) {
          c0 = true;
          message.message = result;
          let tmp2 = null;
          const replaceHydratedMessage = tmp6(7768).replaceHydratedMessage;
          ConversationMessageCacheUtils;
          if (null != message.conversationId) {
            const conversationMetadataById = messageMetadataByMessageId.conversationMetadataById;
            let value = conversationMetadataById.get(message.conversationId);
            if (value == null) {
              value = null;
            }
            tmp2 = value;
          }
          const result1 = replaceHydratedMessage(tmp2, index, result);
        }
      }
    });
  });
  return c0;
}
function removeMessage(arg0, id) {
  const peekResult = navigation.peek(arg0);
  if (null == peekResult) {
    return false;
  } else {
    const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
    const value = messageMetadataByMessageId2.get(id);
    let tmp4 = null;
    if (null != value) {
      let tmp2 = null;
      if (null != value.conversationId) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        let value2 = conversationMetadataById.get(value.conversationId);
        if (value2 == null) {
          value2 = null;
        }
        tmp2 = value2;
      }
      tmp4 = tmp2;
    }
    const obj = ConversationMessageCacheUtils;
    const result = obj.removeHydratedMessage(tmp4, id);
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    return messageMetadataByMessageId.delete(id);
  }
}
function evictChannel(arg0) {
  let hasItem = navigation.has(arg0);
  navigation.del(arg0);
  if (!hasItem) {
    hasItem = map.delete(arg0);
  }
  return hasItem;
}
({ CONVERSATION_COLORS: metroImportAll, CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX: c9, MAX_CONVERSATIONS_PER_CHANNEL: c10, MAX_CHANNELS_WITH_CONVERSATIONS } = ConversationConstants);
let obj = {
  max: MAX_CHANNELS_WITH_CONVERSATIONS,
  dispose: function cleanupChannelSideState(arg0) {
    return map.delete(arg0);
  }
};
let tmp3 = new LRUCacheDefault(obj);
const unpackModuleId = tmp3;
let map = new Map();
let map1 = new Map();
const Store = get_initializedDefault.Store;
class ChannelConversationsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, RelationshipStore, SelectedChannelStore, UserStore);
  }
  hasChannelData(id) {
    return navigation.has(id);
  }
  getChannelConversations(channelId) {
    const peekResult = navigation.peek(channelId);
    let conversations = null;
    if (null != peekResult) {
      conversations = peekResult.conversations;
    }
    return conversations;
  }
  getConversationForMessage(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let conversationId;
    if (peekResult != null) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(arg1);
      if (value != null) {
        conversationId = value.conversationId;
      }
    }
    if (conversationId == null) {
      conversationId = null;
    }
    return conversationId;
  }
  getMessageMetadata(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let value;
    if (peekResult != null) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      value = messageMetadataByMessageId.get(arg1);
    }
    if (value == null) {
      value = null;
    }
    return value;
  }
  getMessage(arg0, arg1) {
    const messageMetadata = this.getMessageMetadata(arg0, arg1);
    let message;
    if (messageMetadata != null) {
      message = messageMetadata.message;
    }
    if (message == null) {
      message = null;
    }
    return message;
  }
  getConversation(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let conversation;
    if (peekResult != null) {
      const conversationMetadataById = peekResult.conversationMetadataById;
      const value = conversationMetadataById.get(arg1);
      if (value != null) {
        conversation = value.conversation;
      }
    }
    if (conversation == null) {
      conversation = null;
    }
    return conversation;
  }
  getEdgeMarker(channelId, after) {
    const peekResult = navigation.peek(channelId);
    let tmp2 = null;
    if (null != peekResult) {
      tmp2 = "before" === after ? peekResult.reachedOldest : peekResult.reachedNewest;
    }
    return tmp2;
  }
  isPendingFetch(channelId) {
    return map.has(channelId);
  }
  isListFetchPending(c0, arg1) {
    const value = map.get(c0);
    let flag;
    if (value != null) {
      flag = value.has(arg1);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getConversationColor(arg0, arg1) {
    let closure_0 = arg1;
    const peekResult = navigation.peek(arg0);
    if (null == peekResult) {
      return null;
    } else {
      const conversations = peekResult.conversations;
      const findIndexResult = conversations.findIndex((id) => id.id === closure_0);
      let tmp3 = null;
      if (-1 !== findIndexResult) {
        tmp3 = metroImportAll[findIndexResult % metroImportAll.length];
      }
      return tmp3;
    }
  }
  isFullyHydrated(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let fullyHydrated;
    if (peekResult != null) {
      const conversationMetadataById = peekResult.conversationMetadataById;
      const value = conversationMetadataById.get(arg1);
      if (value != null) {
        fullyHydrated = value.fullyHydrated;
      }
    }
    return true === fullyHydrated;
  }
  getHydratedMessages(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let hydratedMessages;
    if (peekResult != null) {
      const conversationMetadataById = peekResult.conversationMetadataById;
      const value = conversationMetadataById.get(arg1);
      if (value != null) {
        hydratedMessages = value.hydratedMessages;
      }
    }
    if (hydratedMessages == null) {
      hydratedMessages = null;
    }
    return hydratedMessages;
  }
  getHydratedMessageById(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let message;
    if (peekResult != null) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(arg1);
      if (value != null) {
        message = value.message;
      }
    }
    if (message == null) {
      message = null;
    }
    return message;
  }
  isConversationFetchPending(arg0, arg1) {
    const value = map1.get(arg0);
    let tmp = null != value && 0 !== value.size;
    if (tmp) {
      const hasItem = true !== arg1 || value.has("full");
      tmp = hasItem;
    }
    return tmp;
  }
  getConversationFeedbackRating(arg0, arg1) {
    const peekResult = navigation.peek(arg0);
    let value;
    if (peekResult != null) {
      const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
      value = recentFeedbackRatingsByConversationId.get(arg1);
    }
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ChannelConversationsStore.prototype;
ChannelConversationsStore.displayName = "ChannelConversationsStore";
let obj2 = {
  CONVERSATION_MESSAGES_FETCH_START: function handleConversationMessagesFetchStart(conversationId) {
    conversationId = conversationId.conversationId;
    if ("channel" !== conversationId.cacheType) {
      return false;
    } else {
      let str = "preview";
      if (tmp) {
        str = "full";
      }
      const value = map1.get(conversationId);
      const tmp2 = map1;
      if (null != value) {
        value.add(str);
      } else {
        const _Set = Set;
        const items = [str];
        const self = this;
        const self2 = this;
        set = tmp2.set;
        const set1 = new Set(items);
        const result = set(conversationId, set1);
      }
    }
  },
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(cacheType) {
    let conversationId;
    let fullyHydrated;
    let messageReferences;
    let tmp;
    ({ conversationId, messageReferences, fullyHydrated } = cacheType);
    if ("channel" !== cacheType.cacheType) {
      return false;
    } else {
      let str = "preview";
      if (fullyHydrated) {
        str = "full";
      }
      let obj = map1;
      let value = map1.get(conversationId);
      if (null != value) {
        value.delete(str);
        if (0 === value.size) {
          obj.delete(conversationId);
        }
      }
      if (messageReferences === undefined) {
        messageReferences = [];
      }
      const peekResult = navigation.peek(tmp);
      let c1 = peekResult;
      if (null != peekResult) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        const value2 = conversationMetadataById.get(conversationId);
        if (null != value2) {
          const obj2 = {
            meta: value2,
            messages: tmp2,
            fullyHydrated,
            messageReferences,
            upsertMessage(id) {
                    const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
                    const value = messageMetadataByMessageId.get(id.id);
                    const tmp = _undefined;
                    if (null != value) {
                      value.conversationId = conversationId;
                      value.message = id;
                    } else {
                      const messageMetadataByMessageId2 = tmp.messageMetadataByMessageId;
                      const obj = { conversationId, message: id };
                      const result = messageMetadataByMessageId2.set(id.id, obj);
                    }
                  },
            upsertReference
          };
          const obj3 = ConversationMessageCacheUtils;
          let result = obj3.applyHydratedMessages(obj2);
        }
      }
    }
  },
  CONVERSATION_MESSAGES_FETCH_FAILURE: function handleConversationMessagesFetchFailure(conversationId) {
    conversationId = conversationId.conversationId;
    if ("channel" !== conversationId.cacheType) {
      return false;
    } else {
      let str = "preview";
      if (tmp) {
        str = "full";
      }
      const value = map1.get(conversationId);
      const obj = map1;
      if (null != value) {
        value.delete(str);
        if (0 === value.size) {
          obj.delete(conversationId);
        }
      }
    }
  },
  CHANNEL_CONVERSATIONS_FETCH_START: function handleFetchStart(isJump) {
    let channelId;
    let requestKey;
    ({ channelId, requestKey } = isJump);
    if (isJump.isJump) {
      map.delete(channelId);
    }
    let value = map.get(channelId);
    const obj = map;
    if (null == value) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const result = obj.set(channelId, set);
      value = set;
    }
    value.add(requestKey);
  },
  CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function handleFetchSuccess(requestKey) {
    let anchor;
    let channelId;
    let direction;
    let fullyHydrated;
    let isJump;
    let max;
    let rawConversations;
    let selectedConversationId;
    function mergeConversations(conversations, found) {
      map = new Map();
      const iter = conversations[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let result = map.set(nextResult.id, nextResult);
        continue;
      }
      const iter2 = found[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let result1 = map.set(nextResult1.id, nextResult1);
        continue;
      }
      const arr = Array.from(map.values());
      const sorted = arr.sort((startMessageId, startMessageId2) => {
        const obj = closure_1_1(closure_1_2[7]);
        return obj.compare(startMessageId.startMessageId, startMessageId2.startMessageId);
      });
      return arr;
    }
    function clampAnchorWindowStart(arr5, anchor) {
      let closure_0 = anchor;
      if (null == anchor) {
        return 0;
      } else {
        length = arr5.findIndex((startMessageId) => {
          const obj = SnowflakeUtilsDefault;
          return obj.compare(startMessageId.startMessageId, anchor) >= 0;
        });
        if (-1 === length) {
          length = arr5.length;
        }
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        return Math.max(0, Math.min(length - Math.floor(closure_10 / 2), arr5.length - closure_10));
      }
    }
    function buildChannelData(channelId, substr, peekResult) {
      let prop;
      let reachedNewest;
      let reachedOldest;
      let guildId;
      if (peekResult != null) {
        guildId = peekResult.guildId;
      }
      if (guildId == null) {
        const first = substr[0];
        let guildId1;
        if (first != null) {
          guildId1 = first.guildId;
        }
        guildId = guildId1;
      }
      if (guildId == null) {
        channel = channel.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        guildId = guild_id;
      }
      if (guildId == null) {
        guildId = null;
      }
      map = new Map();
      map1 = new Map();
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        let value;
        if (peekResult != null) {
          let conversationMetadataById = peekResult.conversationMetadataById;
          value = conversationMetadataById.get(tmp9.id);
        }
        let tmp12 = value;
        let hydratedMessages;
        if (value != null) {
          hydratedMessages = value.hydratedMessages;
        }
        if (hydratedMessages == null) {
          hydratedMessages = null;
        }
        let tmp15 = null != hydratedMessages;
        let tmp14 = hydratedMessages;
        if (tmp15) {
          let fullyHydrated;
          if (tmp12 != null) {
            fullyHydrated = tmp12.fullyHydrated;
          }
          tmp15 = fullyHydrated;
        }
        let obj = { conversation: tmp9, hydratedMessages: tmp14, fullyHydrated: tmp15 };
        let result = map.set(tmp9.id, obj);
        let messageIds = tmp9.messageIds;
        for (const item10064 of messageIds) {
          let tmp23 = item10064;
          let value3;
          if (peekResult != null) {
            let messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
            value3 = messageMetadataByMessageId.get(tmp23);
          }
          let tmp26 = value3;
          let obj2 = { conversationId: tmp9.id, message: message1 };
          let message1;
          set = map1.set;
          if (value3 != null) {
            message1 = value3.message;
          }
          if (message1 == null) {
            message1 = null;
          }
          let result1 = set(tmp23, obj2);
          let message_id;
          if (tmp26 != null) {
            let message = tmp26.message;
            if (message != null) {
              let messageReference = message.messageReference;
              if (messageReference != null) {
                message_id = messageReference.message_id;
              }
            }
          }
          let tmp33 = message_id;
          if (null != message_id) {
            let value4;
            if (peekResult != null) {
              let messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
              value4 = messageMetadataByMessageId2.get(tmp33);
            }
            let message2;
            let tmp36 = value4;
            if (value4 != null) {
              message2 = value4.message;
            }
            let hasItem = null == message2;
            if (!hasItem) {
              hasItem = map1.has(tmp33);
            }
            if (!hasItem) {
              let result2 = map1.set(tmp33, tmp36);
            }
          }
          continue;
        }
        continue;
      }
      const obj3 = { guildId, conversations: substr, conversationMetadataById: map, messageMetadataByMessageId: map1, recentFeedbackRatingsByConversationId: prop, reachedOldest, reachedNewest };
      prop = undefined;
      if (peekResult != null) {
        prop = peekResult.recentFeedbackRatingsByConversationId;
      }
      if (prop == null) {
        const self = this;
        const self2 = this;
        const obj4 = { max };
        prop = new LRUCacheDefault(obj4);
      }
      reachedOldest = undefined;
      if (peekResult != null) {
        reachedOldest = peekResult.reachedOldest;
      }
      if (reachedOldest == null) {
        reachedOldest = null;
      }
      reachedNewest = undefined;
      if (peekResult != null) {
        reachedNewest = peekResult.reachedNewest;
      }
      if (reachedNewest == null) {
        reachedNewest = null;
      }
      return obj3;
    }
    ({ channelId, rawConversations, direction, anchor, isJump, fullyHydrated, selectedConversationId } = requestKey);
    set = undefined;
    if (removePendingListFetch(channelId, requestKey.requestKey)) {
      let conversations;
      const mapped = rawConversations.map(set(7769).mapConversation);
      const found = mapped.filter(set(1379).isNotNullish);
      let obj2 = navigation;
      const peekResult = navigation.peek(channelId);
      if (isJump) {
        let items1;
        let tmp5 = null;
        if (null != selectedConversationId) {
          let conversation;
          if (peekResult != null) {
            let conversationMetadataById = peekResult.conversationMetadataById;
            let value = conversationMetadataById.get(selectedConversationId);
            if (value != null) {
              conversation = value.conversation;
            }
          }
          tmp5 = conversation;
        }
        if (null != tmp5) {
          const items = [tmp5];
          items1 = items;
        } else {
          items1 = [];
        }
        conversations = items1;
      } else {
        conversations = undefined;
        if (peekResult != null) {
          conversations = peekResult.conversations;
        }
        if (conversations == null) {
          conversations = [];
        }
      }
      let timestamp = null;
      if (!isJump) {
        let reachedOldest;
        if (peekResult != null) {
          reachedOldest = peekResult.reachedOldest;
        }
        if (reachedOldest == null) {
          reachedOldest = null;
        }
        timestamp = reachedOldest;
      }
      let tmp10 = null;
      if (!isJump) {
        let reachedNewest;
        if (peekResult != null) {
          reachedNewest = peekResult.reachedNewest;
        }
        if (reachedNewest == null) {
          reachedNewest = null;
        }
        tmp10 = reachedNewest;
      }
      let tmp12 = globalThis;
      const _Set = Set;
      let self = this;
      let self2 = this;
      set = new Set(conversations.map((id) => id.id));
      let tmp14 = set;
      let tmp15 = found.some((id) => !set.has(id.id)) || null == anchor;
      let timestamp2 = tmp10;
      let tmp17 = timestamp;
      if (!tmp15) {
        let timestamp1;
        if ("before" === direction) {
          const _Date2 = Date;
          timestamp = Date.now();
          timestamp1 = tmp10;
        } else {
          timestamp1 = tmp10;
          if ("after" === direction) {
            const _Date = Date;
            timestamp1 = Date.now();
          }
        }
        timestamp2 = timestamp1;
        tmp17 = timestamp;
      }
      let tmp19 = "before" === direction;
      const tmp20 = tmp19 && null == anchor;
      if (tmp20) {
        const _Date3 = Date;
        timestamp2 = Date.now();
      }
      const arr5 = mergeConversations(conversations, found);
      let tmp21 = closure_10;
      let tmp22 = timestamp2;
      let tmp23 = tmp17;
      let substr = arr5;
      if (arr5.length > closure_10) {
        if ("after" === direction) {
          substr = arr5.slice(arr5.length - tmp21);
          tmp22 = timestamp2;
          tmp23 = null;
        } else if (tmp19) {
          substr = arr5.slice(0, tmp21);
          tmp22 = null;
          tmp23 = tmp17;
        } else {
          let tmp25 = clampAnchorWindowStart(arr5, anchor);
          let tmp26 = tmp17;
          if (tmp25 > 0) {
            tmp26 = null;
          }
          let tmp27 = timestamp2;
          if (tmp25 + tmp21 < arr5.length) {
            tmp27 = null;
          }
          substr = arr5.slice(tmp25, tmp25 + tmp21);
          tmp22 = tmp27;
          tmp23 = tmp26;
        }
      }
      let tmp28 = buildChannelData(channelId, substr, peekResult);
      tmp28.reachedOldest = tmp23;
      tmp28.reachedNewest = tmp22;
      if (null != peekResult) {
        const _Object = Object;
        const merged = Object.assign(peekResult, tmp28);
      } else {
        let result = obj2.set(channelId, tmp28);
      }
      let tmp31 = rawConversations;
      for (const item10105 of rawConversations) {
        let tmp33 = item10105;
        if (null != item10105.messages) {
          let tmp35 = item10105;
          let tmp36 = channelId;
          let tmp38 = processHydratedMessages(channelId, tmp33.id, tmp33.messages, fullyHydrated);
        }
        continue;
      }
      return true;
    } else {
      return false;
    }
  },
  CHANNEL_CONVERSATIONS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    let channelId;
    let requestKey;
    ({ channelId, requestKey } = arg0);
    const value = map.get(channelId);
    let flag = !(null == value || !value.has(requestKey));
    null == value || !value.has(requestKey);
    const obj = map;
    if (flag) {
      value.delete(requestKey);
      flag = true;
      if (0 === value.size) {
        obj.delete(channelId);
        flag = true;
      }
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const hasItem = null != channelId && navigation.has(channelId);
    if (hasItem) {
      const value = navigation.get(channelId);
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    let hasItem = navigation.has(id);
    navigation.del(id);
    if (!hasItem) {
      hasItem = map.delete(id);
    }
    return hasItem;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if ("unavailable" in guild) {
      if (true === guild.unavailable) {
        return false;
      }
    }
    let flag2 = false;
    const keys = navigation.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let peekResult = navigation.peek(nextResult);
      let guildId;
      if (peekResult != null) {
        guildId = peekResult.guildId;
      }
      let tmp7 = guildId === guild.id;
      if (tmp7) {
        tmp7 = evictChannel(tmp3);
      }
      if (tmp7) {
        flag2 = true;
      }
      continue;
    }
    return flag2;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId.jump) {
      if (SelectedChannelStore.getChannelId() === channelId) {
        const peekResult = navigation.peek(channelId);
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
  SET_CONVERSATION_FEEDBACK_RATING: function handleSetConversationFeedbackRating(channelId) {
    let conversationId;
    let rating;
    ({ conversationId, rating } = channelId);
    const peekResult = navigation.peek(channelId.channelId);
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
    let tmp = null != channel_id && null != id;
    if (tmp) {
      const peekResult = navigation.peek(channel_id);
      let flag = false;
      if (null != peekResult) {
        const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
        const value = messageMetadataByMessageId.get(id);
        let message1;
        if (value != null) {
          message1 = value.message;
        }
        flag = false;
        if (null != message1) {
          const message2 = value.message;
          const obj = MessageRecordUtils;
          const updateMessageRecordResult = obj.updateMessageRecord(message2, message);
          let flag2 = null != updateMessageRecordResult;
          if (flag2) {
            value.message = updateMessageRecordResult;
            let tmp10 = null;
            const replaceHydratedMessage = tmp6(7768).replaceHydratedMessage;
            ConversationMessageCacheUtils;
            if (null != value.conversationId) {
              const conversationMetadataById = peekResult.conversationMetadataById;
              let value2 = conversationMetadataById.get(value.conversationId);
              if (value2 == null) {
                value2 = null;
              }
              tmp10 = value2;
            }
            const result = replaceHydratedMessage(tmp10, id, updateMessageRecordResult);
            flag2 = true;
          }
          flag = flag2;
        }
      }
      tmp = flag;
    }
    return tmp;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const reactions = messageId.reactions;
    const peekResult = navigation.peek(messageId.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(messageId);
      let message1;
      if (value != null) {
        message1 = value.message;
      }
      flag = false;
      if (null != message1) {
        const message = value.message;
        const addReactionBatchResult = message.addReactionBatch(reactions, AuthenticationStore.getId());
        let flag2 = null != addReactionBatchResult;
        if (flag2) {
          value.message = addReactionBatchResult;
          let tmp9 = null;
          const replaceHydratedMessage = ConversationMessageCacheUtils.replaceHydratedMessage;
          ConversationMessageCacheUtils;
          if (null != value.conversationId) {
            const conversationMetadataById = peekResult.conversationMetadataById;
            let value2 = conversationMetadataById.get(value.conversationId);
            if (value2 == null) {
              value2 = null;
            }
            tmp9 = value2;
          }
          const result = replaceHydratedMessage(tmp9, messageId, addReactionBatchResult);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = navigation.peek(messageId.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(messageId);
      let message1;
      if (value != null) {
        message1 = value.message;
      }
      flag = false;
      if (null != message1) {
        const message = value.message;
        const result = message.set("reactions", []);
        let flag2 = null != result;
        if (flag2) {
          value.message = result;
          let tmp8 = null;
          const replaceHydratedMessage = ConversationMessageCacheUtils.replaceHydratedMessage;
          ConversationMessageCacheUtils;
          if (null != value.conversationId) {
            const conversationMetadataById = peekResult.conversationMetadataById;
            let value2 = conversationMetadataById.get(value.conversationId);
            if (value2 == null) {
              value2 = null;
            }
            tmp8 = value2;
          }
          const result1 = replaceHydratedMessage(tmp8, messageId, result);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const emoji = messageId.emoji;
    const peekResult = navigation.peek(messageId.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(messageId);
      let message1;
      if (value != null) {
        message1 = value.message;
      }
      flag = false;
      if (null != message1) {
        const message = value.message;
        const result = message.removeReactionsForEmoji(emoji);
        let flag2 = null != result;
        if (flag2) {
          value.message = result;
          let tmp8 = null;
          const replaceHydratedMessage = ConversationMessageCacheUtils.replaceHydratedMessage;
          ConversationMessageCacheUtils;
          if (null != value.conversationId) {
            const conversationMetadataById = peekResult.conversationMetadataById;
            let value2 = conversationMetadataById.get(value.conversationId);
            if (value2 == null) {
              value2 = null;
            }
            tmp8 = value2;
          }
          const result1 = replaceHydratedMessage(tmp8, messageId, result);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const peekResult = navigation.peek(id.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      const value = messageMetadataByMessageId.get(id);
      let tmp3 = null;
      if (null != value) {
        let tmp4 = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          let value2 = conversationMetadataById.get(value.conversationId);
          if (value2 == null) {
            value2 = null;
          }
          tmp4 = value2;
        }
        tmp3 = tmp4;
      }
      const obj = ConversationMessageCacheUtils;
      const result = obj.removeHydratedMessage(tmp3, id);
      const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
      flag = messageMetadataByMessageId2.delete(id);
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    let flag = false;
    channelId = channelId.channelId;
    const tmp = channelId.ids[Symbol.iterator]();
    while (tmp !== undefined) {
      if (removeMessage(channelId, tmp2)) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  LOGOUT: function handleLogout() {
    navigation.reset();
    map.clear();
    map1.clear();
  }
};
const channelConversationsStore = new ChannelConversationsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/conversations/ChannelConversationsStore.tsx");

export default channelConversationsStore;
