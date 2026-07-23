// Module ID: 15336
// Function ID: 117051
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 9103, 1361, 22, 566, 686, 2]

// Module 15336 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import exact from "exact";
import apply from "apply";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";

let NATIVE_SEARCH_HISTORY_STORAGE_KEY;
let NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
let closure_7;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrCreateSearchHistory(id) {
  let tmp = table[id];
  if (null == tmp) {
    const prototype = ctor.prototype;
    tmp = new ctor();
  }
  table[id] = tmp;
  return tmp;
}
({ SearchHistoryItemTypes: closure_7, NATIVE_SEARCH_HISTORY_STORAGE_KEY, NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME } = SearchAutocompleteSelectAnalyticsActions);
let closure_8 = (() => {
  class SearchHistory {
    constructor() {
      tmp = outer1_5(this, SearchHistory);
      this.items = [];
      return;
    }
  }
  let obj = {
    key: "deserialize",
    value(arr) {
      this.items = arr.slice(0, 3);
      const items = this.items;
      this.items = items.filter((type) => {
        let everyResult = type.type !== outer2_7.TEXT;
        if (!everyResult) {
          everyResult = null == type.tags;
        }
        if (!everyResult) {
          const tags = type.tags;
          everyResult = tags.every((arg0) => SearchHistory(outer3_1[6]).hasOwnProperty(arg0, "type"));
        }
        return everyResult;
      });
    }
  };
  let items = [obj, , , ];
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
      let tmp = type.type === outer1_7.TEXT;
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
      let closure_0 = arg0;
      const items = this.items;
      this.items = items.filter((arg0) => !SearchHistory(outer2_1[7]).isEqual(arg0, closure_0));
    }
  };
  return callback2(SearchHistory, items);
})();
let closure_9 = {};
let tmp3 = ((PersistedStore) => {
  class SearchHistoryStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, SearchHistoryStore);
      obj = outer1_3(SearchHistoryStore);
      tmp2 = outer1_2;
      if (outer1_10()) {
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
  callback(SearchHistoryStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      const searchHistories = {};
      const entries = Object.entries(outer1_9);
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
        const outer1_9 = SearchHistoryStore(outer1_1[7]).mapValues(searchHistories, (arg0) => {
          const obj = new outer2_8();
          obj.deserialize(arg0);
          return obj;
        });
        let obj = SearchHistoryStore(outer1_1[7]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getSearchHistory",
    value(arg0) {
      return outer1_11(arg0).serialize();
    }
  };
  items[2] = obj;
  return callback2(SearchHistoryStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = NATIVE_SEARCH_HISTORY_STORE_DISPLAY_NAME;
tmp3.persistKey = NATIVE_SEARCH_HISTORY_STORAGE_KEY;
tmp3 = new tmp3(require("dispatcher"), {
  SEARCH_HISTORY_NATIVE_CLEAR_ITEMS: function handleSearchHistoryClearItems(arg0) {
    delete tmp[tmp2];
  },
  SEARCH_HISTORY_NATIVE_REMOVE_ITEM: function handleSearchHistoryRemoveItem(id) {
    getOrCreateSearchHistory(id.id).remove(id.item);
  },
  SEARCH_HISTORY_NATIVE_ADD_ITEM: function handleSearchHistoryAddItem(id) {
    getOrCreateSearchHistory(id.id).add(id.item);
  }
});
let result = require("_inherits").fileFinishedImporting("modules/search/native/stores/SearchHistoryStore.tsx");

export default tmp3;
