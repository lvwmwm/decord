// Module ID: 5660
// Function ID: 48556
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1194, 3767, 4029, 4351, 3769, 566, 686, 2]

// Module 5660 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import V6OrEarlierAPIError from "V6OrEarlierAPIError";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

const require = arg1;
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
  let _possibleConstructorReturn;
  let dependencyMap;
  let messageId;
  let userId;
  const _require = optimistic;
  ({ type: dependencyMap, emoji: _possibleConstructorReturn } = optimistic);
  ({ messageId, userId } = optimistic);
  if (obj.shouldApplyReaction(optimistic)) {
    let _getPrototypeOf = store.getId() === userId;
    return updateMessage(messageId, (addReaction) => {
      const reactionType = optimistic.reactionType;
      if ("MESSAGE_REACTION_ADD" === closure_1) {
        let addReactionResult = addReaction.addReaction(_possibleConstructorReturn, _getPrototypeOf, optimistic.colors, reactionType);
      } else {
        addReactionResult = addReaction.removeReaction(_possibleConstructorReturn, _getPrototypeOf, reactionType);
      }
      return addReactionResult;
    });
  } else {
    return false;
  }
  obj = _require(3769);
}
let closure_9 = (() => {
  class SearchState {
    constructor() {
      tmp = outer1_5(this, SearchState);
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
  let obj = {
    key: "handleSearchStart",
    value() {
      this.isFetching = true;
      this.isIndexing = false;
      this.analyticsId = null;
      this.error = null;
    }
  };
  let items = [obj, , , ];
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
      const aPIError = new SearchState(outer1_1[7]).APIError(arg0);
      this.error = aPIError;
      this.analyticsId = null;
      this.documentsIndexed = 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleSearchSuccess",
    value(analyticsId, arr) {
      let self = this;
      self = this;
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
          hasItem = outer2_8.isBlockedOrIgnoredForMessage(id);
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
})();
let map = new Map();
let map1 = new Map();
let map2 = new Map();
let tmp5 = ((Store) => {
  class SearchMessageStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, SearchMessageStore);
      obj = outer1_3(SearchMessageStore);
      tmp2 = outer1_2;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(SearchMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getMessage",
    value(arg0) {
      return outer1_11.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getTotalCount",
    value(arg0) {
      return outer1_17(arg0, (totalResults) => totalResults.totalResults);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsInitialFetchComplete",
    value(arg0) {
      return outer1_17(arg0, (isInitialFetchComplete) => isInitialFetchComplete.isInitialFetchComplete);
    }
  };
  items[4] = {
    key: "getIsIndexing",
    value(arg0) {
      return outer1_17(arg0, (isIndexing) => isIndexing.isIndexing);
    }
  };
  items[5] = {
    key: "getIsHistoricalIndexing",
    value(arg0) {
      return outer1_17(arg0, (isHistoricalIndexing) => isHistoricalIndexing.isHistoricalIndexing);
    }
  };
  items[6] = {
    key: "getDocumentsIndexed",
    value(arg0) {
      return outer1_17(arg0, (documentsIndexed) => documentsIndexed.documentsIndexed);
    }
  };
  items[7] = {
    key: "getIsFetching",
    value(arg0) {
      return outer1_17(arg0, (isFetching) => isFetching.isFetching);
    }
  };
  items[8] = {
    key: "getError",
    value(arg0) {
      return outer1_17(arg0, (error) => error.error);
    }
  };
  items[9] = {
    key: "getMessages",
    value(arg0) {
      return outer1_17(arg0, (messages) => messages.messages);
    }
  };
  items[10] = {
    key: "getCursor",
    value(arg0) {
      return outer1_17(arg0, (cursor) => cursor.cursor);
    }
  };
  items[11] = {
    key: "getAnalyticsId",
    value(arg0) {
      return outer1_17(arg0, (analyticsId) => analyticsId.analyticsId);
    }
  };
  items[12] = {
    key: "hasSearchState",
    value(arg0) {
      return outer1_10.has(arg0);
    }
  };
  return callback2(SearchMessageStore, items);
})(require("initialize").Store);
tmp5.displayName = "SearchMessageStore";
tmp5 = new tmp5(require("dispatcher"), {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      outer1_15(arg0).handleSearchStart();
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((id) => {
      const messages = id.messages;
      const obj = outer1_15(id.id);
      const item = outer1_15(id.id).handleSearchSuccess(id, messages.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return outer2_0(outer2_1[8]).createMessageRecord(tmp);
      })).forEach((id) => {
        const result = outer2_11.set(id.id, id);
        const value = outer2_12.get(id.id);
        let num = 0;
        if (null != value) {
          num = value;
        }
        const result1 = outer2_12.set(id.id, num + 1);
      });
    });
  },
  SEARCH_MESSAGES_INDEXING: function handleSearchMessagesIndexing(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      outer1_15(arg0).handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    let closure_0 = ids;
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      outer1_15(arg0).handleSearchFailure(ids.error);
    });
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    let value = map.get(id.id);
    if (null == value) {
      return false;
    } else {
      const messageIds = value.messageIds;
      const item = messageIds.forEach((arg0) => {
        const value = outer1_12.get(arg0);
        let num = 0;
        if (null != value) {
          num = value;
        }
        if (num <= 1) {
          outer1_11.delete(arg0);
          outer1_12.delete(arg0);
        } else {
          const result = outer1_12.set(arg0, num - 1);
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
        const result = map1.set(id, require(4351) /* createMinimalMessageRecord */.updateMessageRecord(value, message.message));
      }
    }
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    reactions = reactions.reactions;
    const id = store.getId();
    return updateMessage(reactions.messageId, (addReactionBatch) => addReactionBatch.addReactionBatch(reactions, closure_1));
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    return updateMessage(messageId.messageId, (set) => set.set("reactions", []));
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    emoji = emoji.emoji;
    return updateMessage(emoji.messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const map = new Map();
    const map1 = new Map();
    const map2 = new Map();
  }
});
let result = require("_inherits").fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default tmp5;
