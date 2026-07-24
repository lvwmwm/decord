// Module ID: 11438
// Function ID: 88963
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1348, 5042, 22, 11439, 8859, 1212, 566, 686, 2]

// Module 11438 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import apply from "apply";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_10 = [];
let closure_11 = (() => {
  class PeopleSearchManager {
    constructor() {
      self = this;
      tmp = outer1_6(this, self);
      this.count = null;
      this.searchQueryString = "";
      this.groupDMs = [];
      this.userIndexes = {};
      this.results = [];
      userSearch = new PeopleSearchManager(outer1_2[9]).UserSearch(() => self.processResults());
      this.userSearch = userSearch;
      userSearch = this.userSearch;
      subscription = userSearch.subscribe(() => self.processResults(), true);
      return;
    }
  }
  let obj = {
    key: "teardown",
    value() {
      const userSearch = this.userSearch;
      userSearch.unsubscribe();
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "search",
    value(str) {
      const self = this;
      let trimmed = str.toLowerCase().trim();
      this.searchQueryString = trimmed;
      if ("" !== trimmed) {
        let userSearch = self.userSearch;
        self.userIndexes = userSearch.filter(trimmed);
        userSearch = self.userSearch;
        const response = userSearch.fetch(trimmed, true);
        self.groupDMs = (function searchGroupDMs(trimmed) {
          trimmed = trimmed.toLocaleLowerCase().trim();
          if (0 === trimmed.length) {
            let items = [];
          } else {
            const obj = outer2_1(outer2_2[7]);
            const values = outer2_1(outer2_2[7]).chain(outer2_8.getMutablePrivateChannels()).values();
            const found = values.filter(PeopleSearchManager(outer2_2[8]).filterGroupDMs);
            const mapped = found.map((id) => {
              const items = [id, PeopleSearchManager(outer3_2[8]).matchGroupDM(id, trimmed), outer3_9.getScoreWithoutFetchingLatest(id.id)];
              return items;
            });
            const found1 = mapped.filter((arg0) => {
              let tmp;
              [, tmp] = arg0;
              return tmp > 0;
            });
            const sorted = found1.sort((arg0, arg1) => {
              let diff = arg1[1] - arg0[1];
              if (0 === diff) {
                diff = arg1[2] - arg0[2];
              }
              return diff;
            });
            const chainResult = outer2_1(outer2_2[7]).chain(outer2_8.getMutablePrivateChannels());
            items = sorted.map((arg0) => {
              let tmp;
              [tmp] = arg0;
              return tmp;
            }).value();
            const iter = sorted.map((arg0) => {
              let tmp;
              [tmp] = arg0;
              return tmp;
            });
          }
          return items;
        })(trimmed);
      }
      self.processResults();
    }
  };
  items[1] = obj;
  obj = {
    key: "processResults",
    value() {
      const self = this;
      const userSearch = this.userSearch;
      this.userIndexes = userSearch.filter(this.searchQueryString);
      let obj = PeopleSearchManager(outer1_2[9]);
      obj = { data: this.userIndexes, withGuildMembers: true, withAffinitySuggestions: true, withFriends: true, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
      const result = obj.parseUserSearchResults(obj);
      let arr3 = result;
      if (this.groupDMs.length > 0) {
        arr3 = result;
        if ("" !== self.searchQueryString) {
          obj = {};
          let intl = PeopleSearchManager(outer1_2[10]).intl;
          obj.title = intl.string(PeopleSearchManager(outer1_2[10]).t.qGlQrW);
          obj.items = self.groupDMs;
          const findIndexResult = result.findIndex((title) => {
            const intl = PeopleSearchManager(outer2_2[10]).intl;
            return title.title === intl.string(PeopleSearchManager(outer2_2[10]).t.y29JXs);
          });
          if (-1 === findIndexResult) {
            const items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(result, 0);
            items[arraySpreadResult] = obj;
            const sum = arraySpreadResult + 1;
            arr3 = items;
          } else {
            const items1 = [];
            arraySpreadResult = HermesBuiltin.arraySpread(result.slice(0, findIndexResult), 0);
            items1[arraySpreadResult] = obj;
            const sum1 = arraySpreadResult + 1;
            HermesBuiltin.arraySpread(result.slice(findIndexResult), sum1);
            arr3 = items1;
          }
        }
      }
      if (self.searchQueryString.length > 0) {
        self.count = arr3.reduce((arg0, items) => arg0 + items.items.length, 0);
      } else {
        self.count = null;
      }
      self.results = arr3;
      outer1_13.emitChange();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getResults",
    value() {
      return this.results;
    }
  };
  items[4] = {
    key: "getCount",
    value() {
      return this.count;
    }
  };
  return callback2(PeopleSearchManager, items);
})();
const map = new Map();
let tmp3 = ((Store) => {
  class SearchPeopleTabStoreImpl {
    constructor() {
      self = this;
      tmp = outer1_6(this, SearchPeopleTabStoreImpl);
      obj = outer1_4(SearchPeopleTabStoreImpl);
      tmp2 = outer1_3;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(SearchPeopleTabStoreImpl, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getResults",
    value(arg0) {
      const value = outer1_12.get(arg0);
      let results;
      if (null != value) {
        results = value.getResults();
      }
      if (null == results) {
        results = outer1_10;
      }
      return results;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCount",
    value(arg0) {
      const value = outer1_12.get(arg0);
      let count;
      if (null != value) {
        count = value.getCount();
      }
      let tmp2 = null;
      if (null != count) {
        tmp2 = count;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  return callback2(SearchPeopleTabStoreImpl, items);
})(require("initialize").Store);
tmp3.displayName = "SearchPeopleTabStore";
tmp3 = new tmp3(require("dispatcher"), {
  SEARCH_PEOPLE_TAB_SEARCH: function handleSearchPeopleTabSearch(id) {
    id = id.id;
    let value = map.get(id);
    if (null == value) {
      const prototype = ctor.prototype;
      value = new ctor();
    }
    const result = map.set(id, value);
    value.search(id.searchQueryString);
  },
  SEARCH_PEOPLE_TAB_CLEANUP: function handleSearchPeopleTabCleanup(id) {
    id = id.id;
    const value = map.get(id);
    if (null != value) {
      value.teardown();
    }
    map.delete(id);
  }
});
let closure_13 = tmp3;
let result = require("_inherits").fileFinishedImporting("modules/search/native/stores/SearchPeopleTabStore.tsx");

export default tmp3;
