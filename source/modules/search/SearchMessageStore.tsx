// Module ID: 5656
// Function ID: 48511
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5656 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSearchStateOrDefault(arg0) {
  let value = map.get(arg0);
  if (null == value) {
    const prototype = ctor.prototype;
    value = new ctor();
  }
  return value;
}
function getOrCreateSearchState(arg0) {
  const tmp = getSearchStateOrDefault(arg0);
  const result = map.set(arg0, tmp);
  return tmp;
}
function updateMessage(arg0, arg1) {
  const value = map1.get(arg0);
  if (null == value) {
    return false;
  } else {
    const result = map1.set(arg0, arg1(value));
    return true;
  }
}
function withSearchState(arg0, arg1) {
  return arg1(getSearchStateOrDefault(arg0));
}
function handleReaction(optimistic) {
  let messageId;
  let userId;
  const arg1 = optimistic;
  ({ type: closure_1, emoji: closure_2 } = optimistic);
  ({ messageId, userId } = optimistic);
  if (obj.shouldApplyReaction(optimistic)) {
    let closure_3 = store.getId() === userId;
    return updateMessage(messageId, (addReaction) => {
      const reactionType = addReaction.reactionType;
      if ("MESSAGE_REACTION_ADD" === closure_1) {
        let addReactionResult = addReaction.addReaction(closure_2, closure_3, addReaction.colors, reactionType);
      } else {
        addReactionResult = addReaction.removeReaction(closure_2, closure_3, reactionType);
      }
      return addReactionResult;
    });
  } else {
    return false;
  }
  const obj = arg1(dependencyMap[9]);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = () => {
  class SearchState {
    constructor() {
      tmp = closure_5(this, SearchState);
      this.isIndexing = false;
      this.isHistoricalIndexing = false;
      this.isFetching = false;
      this.analyticsId = null;
      this.error = null;
      this.messages = null;
      this.documentsIndexed = 0;
      this.totalResults = null;
      set = new Set();
      this.messageIds = set;
      this.isInitialFetchComplete = false;
      this.cursor = null;
      return;
    }
  }
  const arg1 = SearchState;
  let obj = {
    key: "handleSearchStart",
    value() {
      this.isFetching = true;
      this.isIndexing = false;
      this.analyticsId = null;
      this.error = null;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "handleSearchIndexing",
    value() {
      this.isInitialFetchComplete = true;
      this.isIndexing = true;
      this.isHistoricalIndexing = true;
      this.isFetching = false;
      this.error = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleSearchFailure",
    value(arg0) {
      this.isFetching = false;
      this.isIndexing = false;
      this.isInitialFetchComplete = true;
      this.isHistoricalIndexing = false;
      const aPIError = new SearchState(closure_1[7]).APIError(arg0);
      this.error = aPIError;
      this.analyticsId = null;
      this.documentsIndexed = 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleSearchSuccess",
    value(analyticsId, arr) {
      const self = this;
      const SearchState = this;
      let items;
      let items1;
      this.analyticsId = analyticsId.analyticsId;
      this.isFetching = false;
      this.isIndexing = false;
      this.isInitialFetchComplete = true;
      this.isHistoricalIndexing = analyticsId.doingHistoricalIndex;
      this.error = null;
      ({ documentsIndexed: this.documentsIndexed, cursor: this.cursor } = analyticsId);
      let messages = this.messages;
      if (null == messages) {
        messages = [];
      }
      items = [...messages];
      items1 = [];
      const item = arr.forEach((id) => {
        const messageIds = self.messageIds;
        let hasItem = messageIds.has(id.id);
        if (!hasItem) {
          hasItem = blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(id);
        }
        if (!hasItem) {
          const messageIds2 = self.messageIds;
          messageIds2.add(id.id);
          items.push(id);
          items1.push(id);
        }
      });
      self.messages = items;
      self.totalResults = analyticsId.totalResults;
      return items1;
    }
  };
  return callback2(SearchState, items);
}();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let tmp5 = (Store) => {
  class SearchMessageStore {
    constructor() {
      self = this;
      tmp = closure_5(this, SearchMessageStore);
      obj = closure_3(SearchMessageStore);
      tmp2 = closure_2;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SearchMessageStore;
  callback(SearchMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getMessage",
    value(arg0) {
      return closure_11.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getTotalCount",
    value(arg0) {
      return callback4(arg0, (totalResults) => totalResults.totalResults);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsInitialFetchComplete",
    value(arg0) {
      return callback4(arg0, (isInitialFetchComplete) => isInitialFetchComplete.isInitialFetchComplete);
    }
  };
  items[4] = {
    key: "getIsIndexing",
    value(arg0) {
      return callback4(arg0, (isIndexing) => isIndexing.isIndexing);
    }
  };
  items[5] = {
    key: "getIsHistoricalIndexing",
    value(arg0) {
      return callback4(arg0, (isHistoricalIndexing) => isHistoricalIndexing.isHistoricalIndexing);
    }
  };
  items[6] = {
    key: "getDocumentsIndexed",
    value(arg0) {
      return callback4(arg0, (documentsIndexed) => documentsIndexed.documentsIndexed);
    }
  };
  items[7] = {
    key: "getIsFetching",
    value(arg0) {
      return callback4(arg0, (isFetching) => isFetching.isFetching);
    }
  };
  items[8] = {
    key: "getError",
    value(arg0) {
      return callback4(arg0, (error) => error.error);
    }
  };
  items[9] = {
    key: "getMessages",
    value(arg0) {
      return callback4(arg0, (messages) => messages.messages);
    }
  };
  items[10] = {
    key: "getCursor",
    value(arg0) {
      return callback4(arg0, (cursor) => cursor.cursor);
    }
  };
  items[11] = {
    key: "getAnalyticsId",
    value(arg0) {
      return callback4(arg0, (analyticsId) => analyticsId.analyticsId);
    }
  };
  items[12] = {
    key: "hasSearchState",
    value(arg0) {
      return set.has(arg0);
    }
  };
  return callback2(SearchMessageStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp5.displayName = "SearchMessageStore";
tmp5 = new tmp5(importDefault(dependencyMap[11]), {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      callback(arg0).handleSearchStart();
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    const item = data.forEach((id) => {
      const messages = id.messages;
      const obj = callback(id.id);
      const item = callback(id.id).handleSearchSuccess(id, messages.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return callback(closure_1[8]).createMessageRecord(tmp);
      })).forEach((id) => {
        const result = closure_11.set(id.id, id);
        const value = store.get(id.id);
        let num = 0;
        if (null != value) {
          num = value;
        }
        const result1 = store.set(id.id, num + 1);
      });
    });
  },
  SEARCH_MESSAGES_INDEXING: function handleSearchMessagesIndexing(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      callback(arg0).handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    const arg1 = ids;
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      callback(arg0).handleSearchFailure(arg0.error);
    });
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    const value = map.get(id.id);
    if (null == value) {
      return false;
    } else {
      const messageIds = value.messageIds;
      const item = messageIds.forEach((arg0) => {
        const value = store.get(arg0);
        let num = 0;
        if (null != value) {
          num = value;
        }
        if (num <= 1) {
          set.delete(arg0);
          store.delete(arg0);
        } else {
          const result = store.set(arg0, num - 1);
        }
      });
      map.delete(id.id);
    }
  },
  SEARCH_MESSAGES_CLEAR_ALL: function handleSearchMessagesClearAll() {
    const map = new Map();
    const map1 = new Map();
    const map2 = new Map();
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null == id) {
      return false;
    } else {
      const value = map1.get(id);
      if (null == value) {
        return false;
      } else {
        const result = map1.set(id, arg1(dependencyMap[8]).updateMessageRecord(value, message.message));
      }
    }
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    const arg1 = reactions.reactions;
    const id = store.getId();
    return updateMessage(reactions.messageId, (addReactionBatch) => addReactionBatch.addReactionBatch(reactions, closure_1));
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    return updateMessage(messageId.messageId, (set) => set.set("reactions", []));
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    const arg1 = emoji.emoji;
    return updateMessage(emoji.messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const map = new Map();
    const map1 = new Map();
    const map2 = new Map();
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default tmp5;
