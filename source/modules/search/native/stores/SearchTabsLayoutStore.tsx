// Module ID: 11435
// Function ID: 88896
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 5660, 11436, 11437, 11438, 10109, 9141, 620, 10110, 566, 686, 2]

// Module 11435 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";

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
function createInitialState(searchContext) {
  return { searchContext, wasInitialSearchQuery: true, candidateTabs: closure_17, visibleTabs: closure_17, visibleTabCounts: null };
}
function handleSearchQuery(searchContext) {
  searchContext = searchContext.searchContext;
  const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext);
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
  const _require = value;
  const searchContext = value.searchContext;
  if (uiStore.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    const isInitialSearchQueryResult = uiStore.isInitialSearchQuery(searchContext);
    const dependencyMap = isInitialSearchQueryResult;
    let _isNativeReflectConstruct = uiStore.isTextInputValueEmpty(searchContext);
    let closure_4 = uiStore.hasUserAddedTags(searchContext);
    let dispatcher = uiStore.isTagsEmpty(searchContext);
    const searchResultsQuery = uiStore.getSearchResultsQuery(searchContext);
    const queryString = uiStore.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let arr = table[searchContext.type];
    } else {
      arr = table2[searchContext.type];
    }
    channel = channel.getChannel(_require(10110).getChannelIdFromSearchContext(searchContext));
    let isArchivedThreadResult;
    if (null != channel) {
      isArchivedThreadResult = channel.isArchivedThread();
    }
    let _inherits = null != isArchivedThreadResult && isArchivedThreadResult;
    const found = arr.filter((arg0) => {
      if (outer1_14.MEMBERS === arg0) {
        let tmp6 = !_inherits;
        if (tmp6) {
          let tmp7 = closure_2;
          if (!closure_2) {
            let tmp9 = !closure_4;
            if (tmp9) {
              tmp9 = !_isNativeReflectConstruct;
            }
            tmp7 = tmp9;
          }
          tmp6 = tmp7;
        }
        return tmp6;
      } else {
        if (outer1_14.RECENT !== arg0) {
          if (outer1_14.GUILD_CHANNELS !== arg0) {
            if (outer1_14.PEOPLE !== arg0) {
              return true;
            }
          }
        }
        return dispatcher;
      }
    });
    let obj = _require(10110);
    channel = _require(10110).getSearchContextId(searchContext);
    const reduced = found.reduce((arg0, closure_1) => {
      if (outer1_14.MEMBERS === closure_1) {
        arg0[closure_1] = outer1_11.getCount(closure_8);
      } else if (outer1_14.GUILD_CHANNELS === closure_1) {
        arg0[closure_1] = outer1_10.getCount(closure_8);
      } else if (outer1_14.PEOPLE === closure_1) {
        arg0[closure_1] = outer1_12.getCount(closure_8);
      } else {
        arg0[closure_1] = reduced.getTotalCount(value(isInitialSearchQueryResult[13]).getSearchTabFetchId(searchContext, closure_1, searchResultsQuery));
        const obj = value(isInitialSearchQueryResult[13]);
      }
      return arg0;
    }, {});
    visibleTabs = found;
    visibleTabCounts = null;
    let flag = true;
    if (!isInitialSearchQueryResult) {
      if (searchResultsQuery !== queryString) {
        visibleTabs = found.filter((arg0) => {
          let wasInitialSearchQuery = value.wasInitialSearchQuery;
          if (!wasInitialSearchQuery) {
            const visibleTabs = value.visibleTabs;
            wasInitialSearchQuery = visibleTabs.includes(arg0);
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
    const obj3 = _require(10110);
    let tmp23 = !_require(620).areArraysShallowEqual(value.candidateTabs, found);
    const obj4 = _require(620);
    const tmp24 = !_require(620).areArraysShallowEqual(value.visibleTabs, visibleTabs);
    const visibleTabCounts2 = value.visibleTabCounts;
    let tmp25 = visibleTabCounts2 === visibleTabCounts;
    if (!tmp25) {
      let tmp26 = null != visibleTabCounts2 && null != visibleTabCounts;
      if (tmp26) {
        tmp26 = searchContext(620)(visibleTabCounts2, visibleTabCounts);
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
      let tmp2 = computeLayoutForState;
      if (computeLayoutForState(iter2.value)) {
        flag = true;
      }
      iter3 = tmp();
      iter2 = iter3;
      flag2 = flag;
    } while (!iter3.done);
  }
  return flag2;
}
({ SearchTabs: closure_14, SEARCH_TYPE_TO_SEARCH_INITIAL_TABS: closure_15, SEARCH_TYPE_TO_SEARCH_RESULT_TABS: closure_16 } = SearchAutocompleteSelectAnalyticsActions);
let closure_17 = [];
const map = new Map();
let tmp4 = ((Store) => {
  class SearchTabsLayoutStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SearchTabsLayoutStore);
      obj = outer1_6(SearchTabsLayoutStore);
      tmp2 = outer1_5;
      if (outer1_19()) {
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
  callback2(SearchTabsLayoutStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_9, outer1_11, outer1_10, outer1_12, outer1_8);
      const items = [outer1_9, outer1_11, outer1_10, outer1_12];
      this.syncWith(items, outer1_24);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getCandidateTabs",
    value(searchContext) {
      let value = outer1_18.get(SearchTabsLayoutStore(outer1_2[13]).getSearchContextId(searchContext));
      if (null == value) {
        value = outer1_22(searchContext);
      }
      return value.candidateTabs;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVisibleTabs",
    value(searchContext) {
      let value = outer1_18.get(SearchTabsLayoutStore(outer1_2[13]).getSearchContextId(searchContext));
      if (null == value) {
        value = outer1_22(searchContext);
      }
      return value.visibleTabs;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVisibleTabCounts",
    value(searchContext) {
      let value = outer1_18.get(SearchTabsLayoutStore(outer1_2[13]).getSearchContextId(searchContext));
      if (null == value) {
        value = outer1_22(searchContext);
      }
      return value.visibleTabCounts;
    }
  };
  return callback(SearchTabsLayoutStore, items);
})(require("initialize").Store);
tmp4.displayName = "SearchTabsLayoutStore";
tmp4 = new tmp4(require("dispatcher"), {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default tmp4;
