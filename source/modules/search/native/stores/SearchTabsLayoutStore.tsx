// Module ID: 11389
// Function ID: 88558
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11389 (_isNativeReflectConstruct)
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
function createInitialState(searchContext) {
  return { searchContext, wasInitialSearchQuery: true, candidateTabs: closure_17, visibleTabs: closure_17, visibleTabCounts: null };
}
function handleSearchQuery(searchContext) {
  searchContext = searchContext.searchContext;
  const searchContextId = arg1(dependencyMap[13]).getSearchContextId(searchContext);
  let value = map.get(searchContextId);
  if (null == value) {
    value = createInitialState(searchContext);
  }
  const result = map.set(searchContextId, value);
  return computeLayoutForState(value);
}
function computeLayoutForState(value) {
  let visibleTabCounts;
  let visibleTabs;
  const arg1 = value;
  const searchContext = value.searchContext;
  const importDefault = searchContext;
  if (uiStore.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    const isInitialSearchQueryResult = uiStore.isInitialSearchQuery(searchContext);
    const dependencyMap = isInitialSearchQueryResult;
    let closure_3 = uiStore.isTextInputValueEmpty(searchContext);
    let closure_4 = uiStore.hasUserAddedTags(searchContext);
    let closure_5 = uiStore.isTagsEmpty(searchContext);
    const searchResultsQuery = uiStore.getSearchResultsQuery(searchContext);
    let closure_6 = searchResultsQuery;
    const queryString = uiStore.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let arr = closure_15[searchContext.type];
    } else {
      arr = closure_16[searchContext.type];
    }
    let channel = channel.getChannel(arg1(dependencyMap[13]).getChannelIdFromSearchContext(searchContext));
    let isArchivedThreadResult;
    if (null != channel) {
      isArchivedThreadResult = channel.isArchivedThread();
    }
    let closure_7 = null != isArchivedThreadResult && isArchivedThreadResult;
    const found = arr.filter((arg0) => {
      if (constants.MEMBERS === arg0) {
        let tmp6 = !closure_7;
        if (tmp6) {
          let tmp7 = isInitialSearchQueryResult;
          if (!isInitialSearchQueryResult) {
            let tmp9 = !closure_4;
            if (tmp9) {
              tmp9 = !closure_3;
            }
            tmp7 = tmp9;
          }
          tmp6 = tmp7;
        }
        return tmp6;
      } else {
        if (constants.RECENT !== arg0) {
          if (constants.GUILD_CHANNELS !== arg0) {
            if (constants.PEOPLE !== arg0) {
              return true;
            }
          }
        }
        return closure_5;
      }
    });
    const obj = arg1(dependencyMap[13]);
    channel = arg1(dependencyMap[13]).getSearchContextId(searchContext);
    const reduced = found.reduce((arg0, closure_1) => {
      if (constants.MEMBERS === closure_1) {
        arg0[closure_1] = count2.getCount(closure_8);
      } else if (constants.GUILD_CHANNELS === closure_1) {
        arg0[closure_1] = count.getCount(closure_8);
      } else if (constants.PEOPLE === closure_1) {
        arg0[closure_1] = count3.getCount(closure_8);
      } else {
        arg0[closure_1] = reduced.getTotalCount(arg0(isInitialSearchQueryResult[13]).getSearchTabFetchId(searchContext, closure_1, searchResultsQuery));
        const obj = arg0(isInitialSearchQueryResult[13]);
      }
      return arg0;
    }, {});
    let closure_9 = reduced;
    visibleTabs = found;
    visibleTabCounts = null;
    let flag = true;
    if (!isInitialSearchQueryResult) {
      if (searchResultsQuery !== queryString) {
        visibleTabs = found.filter((self) => {
          let wasInitialSearchQuery = self.wasInitialSearchQuery;
          if (!wasInitialSearchQuery) {
            const visibleTabs = self.visibleTabs;
            wasInitialSearchQuery = visibleTabs.includes(self);
          }
          return wasInitialSearchQuery;
        });
        flag = false;
        visibleTabCounts = null;
      } else if (found.every((arg0) => null != reduced[arg0])) {
        visibleTabs = found.filter((arg0) => 0 !== reduced[arg0]);
        flag = false;
        visibleTabCounts = reduced;
      } else {
        ({ visibleTabs, visibleTabCounts } = value);
        flag = tmp20;
      }
    }
    const obj3 = arg1(dependencyMap[13]);
    let tmp23 = !arg1(dependencyMap[12]).areArraysShallowEqual(value.candidateTabs, found);
    const obj4 = arg1(dependencyMap[12]);
    const tmp24 = !arg1(dependencyMap[12]).areArraysShallowEqual(value.visibleTabs, visibleTabs);
    const visibleTabCounts2 = value.visibleTabCounts;
    let tmp25 = visibleTabCounts2 === visibleTabCounts;
    if (!tmp25) {
      let tmp26 = null != visibleTabCounts2 && null != visibleTabCounts;
      if (tmp26) {
        tmp26 = importDefault(dependencyMap[12])(visibleTabCounts2, visibleTabCounts);
      }
      tmp25 = tmp26;
    }
    if (tmp23) {
      value.candidateTabs = found;
    }
    if (tmp24) {
      value.visibleTabs = visibleTabs;
    }
    if (!tmp25) {
      value.visibleTabCounts = visibleTabCounts;
    }
    value.wasInitialSearchQuery = flag;
    if (!tmp23) {
      tmp23 = tmp24;
    }
    if (!tmp23) {
      tmp23 = tmp29;
    }
    return tmp23;
  }
}
function computeLayoutForAll() {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(map.values());
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let tmp2 = closure_23;
      if (closure_23(iter2.value)) {
        flag = true;
      }
      iter3 = tmp();
      iter2 = iter3;
      flag2 = flag;
    } while (!iter3.done);
  }
  return flag2;
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
({ SearchTabs: closure_14, SEARCH_TYPE_TO_SEARCH_INITIAL_TABS: closure_15, SEARCH_TYPE_TO_SEARCH_RESULT_TABS: closure_16 } = arg1(dependencyMap[11]));
let closure_17 = [];
const map = new Map();
let tmp4 = (Store) => {
  class SearchTabsLayoutStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SearchTabsLayoutStore);
      obj = closure_6(SearchTabsLayoutStore);
      tmp2 = closure_5;
      if (closure_19()) {
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
  const arg1 = SearchTabsLayoutStore;
  callback2(SearchTabsLayoutStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_9, closure_11, closure_10, closure_12, closure_8);
      const items = [closure_9, closure_11, closure_10, closure_12];
      this.syncWith(items, closure_24);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getCandidateTabs",
    value(searchContext) {
      let value = store.get(SearchTabsLayoutStore(closure_2[13]).getSearchContextId(searchContext));
      if (null == value) {
        value = callback4(searchContext);
      }
      return value.candidateTabs;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVisibleTabs",
    value(searchContext) {
      let value = store.get(SearchTabsLayoutStore(closure_2[13]).getSearchContextId(searchContext));
      if (null == value) {
        value = callback4(searchContext);
      }
      return value.visibleTabs;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVisibleTabCounts",
    value(searchContext) {
      let value = store.get(SearchTabsLayoutStore(closure_2[13]).getSearchContextId(searchContext));
      if (null == value) {
        value = callback4(searchContext);
      }
      return value.visibleTabCounts;
    }
  };
  return callback(SearchTabsLayoutStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp4.displayName = "SearchTabsLayoutStore";
tmp4 = new tmp4(importDefault(dependencyMap[15]), {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
});
const obj = {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
};
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default tmp4;
