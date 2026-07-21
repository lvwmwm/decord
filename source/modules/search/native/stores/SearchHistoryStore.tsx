// Module ID: 15209
// Function ID: 114804
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15209 (_isNativeReflectConstruct)
let NATIVE_SEARCH_HISTORY_STORAGE_KEY;
let NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrCreateSearchHistory(id) {
  let tmp = closure_9[id];
  if (null == tmp) {
    const prototype = ctor.prototype;
    tmp = new ctor();
  }
  closure_9[id] = tmp;
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ SearchHistoryItemTypes: closure_7, NATIVE_SEARCH_HISTORY_STORAGE_KEY, NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME } = arg1(dependencyMap[5]));
let closure_8 = () => {
  class SearchHistory {
    constructor() {
      tmp = closure_5(this, SearchHistory);
      this.items = [];
      return;
    }
  }
  const arg1 = SearchHistory;
  let obj = {
    key: "deserialize",
    value(arr) {
      this.items = arr.slice(0, 3);
      const items = this.items;
      this.items = items.filter((type) => {
        let everyResult = type.type !== constants.TEXT;
        if (!everyResult) {
          everyResult = null == type.tags;
        }
        if (!everyResult) {
          const tags = type.tags;
          everyResult = tags.every((arg0) => callback(closure_1[6]).hasOwnProperty(arg0, "type"));
        }
        return everyResult;
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "serialize",
    value() {
      return this.items;
    }
  };
  items[1] = obj;
  obj = {
    key: "add",
    value(type) {
      const self = this;
      let tmp = type.type === constants.TEXT;
      if (tmp) {
        tmp = "" === type.text.trim();
        const str = type.text;
      }
      if (tmp) {
        let tmp3 = null == type.tags;
        if (!tmp3) {
          tmp3 = 0 === type.tags.length;
        }
        tmp = tmp3;
      }
      if (!tmp) {
        self.remove(type);
        const items = self.items;
        items.unshift(type);
        const items1 = self.items;
        self.items = items1.slice(0, 3);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "remove",
    value(arg0) {
      const SearchHistory = arg0;
      const items = this.items;
      this.items = items.filter((arg0) => !arg0(closure_1[7]).isEqual(arg0, arg0));
    }
  };
  return callback2(SearchHistory, items);
}();
let closure_9 = {};
let tmp3 = (PersistedStore) => {
  class SearchHistoryStore {
    constructor() {
      self = this;
      tmp = closure_5(this, SearchHistoryStore);
      obj = closure_3(SearchHistoryStore);
      tmp2 = closure_2;
      if (closure_10()) {
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
  const arg1 = SearchHistoryStore;
  callback(SearchHistoryStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      const searchHistories = {};
      const SearchHistoryStore = searchHistories;
      const entries = Object.entries(closure_9);
      const item = entries.forEach((arg0) => {
        let obj;
        let tmp;
        [tmp, obj] = arg0;
        if (null != obj) {
          searchHistories[tmp] = obj.serialize();
        }
      });
      return { searchHistories };
    }
  };
  const items = [obj, , ];
  obj = {
    key: "initialize",
    value(searchHistories) {
      searchHistories = undefined;
      if (null != searchHistories) {
        searchHistories = searchHistories.searchHistories;
      }
      if (null != searchHistories) {
        let closure_9 = SearchHistoryStore(closure_1[7]).mapValues(searchHistories, (arg0) => {
          const obj = new closure_8();
          obj.deserialize(arg0);
          return obj;
        });
        const obj = SearchHistoryStore(closure_1[7]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getSearchHistory",
    value(arg0) {
      return callback4(arg0).serialize();
    }
  };
  items[2] = obj;
  return callback2(SearchHistoryStore, items);
}(importDefault(dependencyMap[8]).PersistedStore);
tmp3.displayName = NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
tmp3.persistKey = NATIVE_SEARCH_HISTORY_STORAGE_KEY;
tmp3 = new tmp3(importDefault(dependencyMap[9]), {
  SEARCH_HISTORY_NATIVE_CLEAR_ITEMS: function handleSearchHistoryClearItems(arg0) {
    delete r0[r1];
  },
  SEARCH_HISTORY_NATIVE_REMOVE_ITEM: function handleSearchHistoryRemoveItem(id) {
    getOrCreateSearchHistory(id.id).remove(id.item);
  },
  SEARCH_HISTORY_NATIVE_ADD_ITEM: function handleSearchHistoryAddItem(id) {
    getOrCreateSearchHistory(id.id).add(id.item);
  }
});
const obj = {
  SEARCH_HISTORY_NATIVE_CLEAR_ITEMS: function handleSearchHistoryClearItems(arg0) {
    delete r0[r1];
  },
  SEARCH_HISTORY_NATIVE_REMOVE_ITEM: function handleSearchHistoryRemoveItem(id) {
    getOrCreateSearchHistory(id.id).remove(id.item);
  },
  SEARCH_HISTORY_NATIVE_ADD_ITEM: function handleSearchHistoryAddItem(id) {
    getOrCreateSearchHistory(id.id).add(id.item);
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/search/native/stores/SearchHistoryStore.tsx");

export default tmp3;
