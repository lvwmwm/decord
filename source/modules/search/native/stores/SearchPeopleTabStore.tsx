// Module ID: 11400
// Function ID: 88674
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11400 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = [];
let closure_11 = () => {
  class PeopleSearchManager {
    constructor() {
      PeopleSearchManager = this;
      tmp = closure_6(this, PeopleSearchManager);
      this.count = null;
      this.searchQueryString = "";
      this.groupDMs = [];
      this.userIndexes = {};
      this.results = [];
      userSearch = new PeopleSearchManager(closure_2[9]).UserSearch(() => self.processResults());
      this.userSearch = userSearch;
      userSearch = this.userSearch;
      subscription = userSearch.subscribe(() => self.processResults(), true);
      return;
    }
  }
  const arg1 = PeopleSearchManager;
  let obj = {
    key: "teardown",
    value() {
      const userSearch = this.userSearch;
      userSearch.unsubscribe();
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "search",
    value(str) {
      const self = this;
      const trimmed = str.toLowerCase().trim();
      this.searchQueryString = trimmed;
      if ("" !== trimmed) {
        let userSearch = self.userSearch;
        self.userIndexes = userSearch.filter(trimmed);
        userSearch = self.userSearch;
        const response = userSearch.fetch(trimmed, true);
        self.groupDMs = function searchGroupDMs(trimmed) {
          trimmed = trimmed.toLocaleLowerCase().trim();
          if (0 === trimmed.length) {
            let items = [];
          } else {
            const obj = callback(closure_2[7]);
            const values = callback(closure_2[7]).chain(mutablePrivateChannels.getMutablePrivateChannels()).values();
            const found = values.filter(trimmed(closure_2[8]).filterGroupDMs);
            const mapped = found.map((id) => {
              const items = [id, trimmed(closure_2[8]).matchGroupDM(id, trimmed), scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id)];
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
            const chainResult = callback(closure_2[7]).chain(mutablePrivateChannels.getMutablePrivateChannels());
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
        }(trimmed);
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
      let obj = PeopleSearchManager(closure_2[9]);
      obj = { data: this.userIndexes };
      const result = obj.parseUserSearchResults(obj);
      let arr3 = result;
      if (this.groupDMs.length > 0) {
        arr3 = result;
        if ("" !== self.searchQueryString) {
          obj = {};
          const intl = PeopleSearchManager(closure_2[10]).intl;
          obj.title = intl.string(PeopleSearchManager(closure_2[10]).t.qGlQrW);
          obj.items = self.groupDMs;
          const findIndexResult = result.findIndex((title) => {
            const intl = callback(closure_2[10]).intl;
            return title.title === intl.string(callback(closure_2[10]).t.y29JXs);
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
      closure_13.emitChange();
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
}();
const map = new Map();
let tmp3 = (Store) => {
  class SearchPeopleTabStoreImpl {
    constructor() {
      self = this;
      tmp = closure_6(this, SearchPeopleTabStoreImpl);
      obj = closure_4(SearchPeopleTabStoreImpl);
      tmp2 = closure_3;
      if (closure_14()) {
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
  const arg1 = SearchPeopleTabStoreImpl;
  callback(SearchPeopleTabStoreImpl, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getResults",
    value(arg0) {
      const value = store.get(arg0);
      let results;
      if (null != value) {
        results = value.getResults();
      }
      if (null == results) {
        results = closure_10;
      }
      return results;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCount",
    value(arg0) {
      const value = store.get(arg0);
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
}(importDefault(dependencyMap[11]).Store);
tmp3.displayName = "SearchPeopleTabStore";
tmp3 = new tmp3(importDefault(dependencyMap[12]), {
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
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/search/native/stores/SearchPeopleTabStore.tsx");

export default tmp3;
