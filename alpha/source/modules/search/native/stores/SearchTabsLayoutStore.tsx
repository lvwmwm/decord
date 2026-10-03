// Module ID: 11986
// Function ID: 11987
// Name: SearchTabsLayoutStore
// Dependencies: [11987, 2051, 6784, 11990, 11991, 11992, 11967, 7513, 568, 11968, 11997, 11989, 504, 584, 2]

// Module 11986 (SearchTabsLayoutStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import SmartSearchUtils from "SmartSearchUtils" /* 11997 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 11987 */;
import ChannelStore_mod from "ChannelStore" /* 2051 */;
import SearchMessageStore from "SearchMessageStore" /* 6784 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 11990 */;
import SearchMemberTabStore from "SearchMemberTabStore" /* 11991 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 11992 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let closure_12;
let unpackModuleId;
function handleSearchQuery(searchContext) {
  searchContext = searchContext.searchContext;
  const obj = SearchUtils;
  const searchContextId = obj.getSearchContextId(searchContext);
  let value = map.get(searchContextId);
  const obj2 = map;
  if (value == null) {
    value = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    const obj3 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
  }
  const result = obj2.set(searchContextId, value);
  return computeLayoutForState(value);
}
function computeLayoutForState(value) {
  let closure_4;
  let closure_8;
  let reduced;
  let tmp11;
  let visibleTabCounts;
  let visibleTabs;
  _require = value;
  const searchContext = value.searchContext;
  let obj = reduced;
  if (reduced.isAutocompleteVisible(searchContext)) {
    return false;
  } else {
    let arr;
    const isInitialSearchQueryResult = obj.isInitialSearchQuery(searchContext);
    dependencyMap = isInitialSearchQueryResult;
    let closure_3 = obj.isTextInputValueEmpty(searchContext);
    ChannelStore = obj.hasUserAddedTags(searchContext);
    let closure_5 = obj.isTagsEmpty(searchContext);
    const searchResultsQuery = obj.getSearchResultsQuery(searchContext);
    const queryString = obj.getQueryString(searchContext);
    if (isInitialSearchQueryResult) {
      let tmp5 = closure_11;
      arr = closure_11[searchContext.type];
    } else {
      let tmp4 = closure_12;
      arr = closure_12[searchContext.type];
    }
    let tmp7 = dependencyMap;
    let obj2 = require("SearchUtils");
    let tmp8 = ChannelStore;
    const channel = ChannelStore.getChannel(obj2.getChannelIdFromSearchContext(searchContext));
    let flag;
    if (channel != null) {
      flag = channel.isArchivedThread();
    }
    if (flag == null) {
      flag = false;
    }
    const found = arr.filter((item) => {
      if (constants.MEMBERS === item) {
        let tmp4 = !flag;
        if (tmp4) {
          let tmp5 = dependencyMap;
          if (!tmp5) {
            tmp5 = !closure_4 && !closure_3;
            const tmp7 = !closure_4 && !closure_3;
          }
          tmp4 = tmp5;
        }
        return tmp4;
      } else {
        if (constants.RECENT !== item) {
          if (constants.GUILD_CHANNELS !== item) {
            if (constants.PEOPLE !== item) {
              return true;
            }
          }
        }
        return closure_5;
      }
    });
    const tmp6Result = require("SearchUtils");
    const searchContextId = tmp6Result.getSearchContextId(searchContext);
    reduced = found.reduce((acc, item) => {
      if (constants.MEMBERS === item) {
        acc[item] = SearchMemberTabStore.getCount(closure_8);
      } else if (constants.GUILD_CHANNELS === item) {
        acc[item] = SearchGuildChannelTabStore.getCount(closure_8);
      } else if (constants.PEOPLE === item) {
        acc[item] = SearchPeopleTabStore.getCount(closure_8);
      } else if (constants.MESSAGES === item) {
        const getTotalCount2 = SearchMessageStore.getTotalCount;
        const obj2 = SearchUtils;
        const totalCount2 = getTotalCount2(obj2.getSearchTabFetchId(searchContext, item, searchResultsQuery));
        let sum = null;
        const tmp10 = searchContext;
        const tmp11 = searchResultsQuery;
        const tmp8 = require;
        if (null != totalCount2) {
          const tmp8Result = tmp8(11997);
          sum = totalCount2 + tmp8Result.getSmartSearchCitationsCount(tmp10, tmp11, totalCount2 > 0);
        }
        acc[item] = sum;
      } else {
        const getTotalCount = SearchMessageStore.getTotalCount;
        const obj = SearchUtils;
        acc[item] = getTotalCount(obj.getSearchTabFetchId(searchContext, item, searchResultsQuery));
      }
      return acc;
    }, {});
    let flag2 = true;
    visibleTabCounts = null;
    visibleTabs = found;
    if (!isInitialSearchQueryResult) {
      if (searchResultsQuery !== queryString) {
        visibleTabs = found.filter((item) => {
          let wasInitialSearchQuery = value.wasInitialSearchQuery;
          if (!wasInitialSearchQuery) {
            const visibleTabs = tmp.visibleTabs;
            wasInitialSearchQuery = visibleTabs.includes(item);
          }
          return wasInitialSearchQuery;
        });
        flag2 = false;
        visibleTabCounts = null;
      } else if (found.every((item) => null != reduced[item])) {
        const found1 = found.filter((item) => {
          if (item === constants.MESSAGES) {
            flag = true;
            if (0 === reduced[constants.MESSAGES]) {
              const obj = SmartSearchUtils;
              const smartSearchQuery = obj.getSmartSearchQuery(tmp, tmp2);
              let tmp8 = null != smartSearchQuery;
              if (tmp8) {
                const tmp4Result = SmartSearchUtils;
                const smartSearchStatus = tmp4Result.getSmartSearchStatus(smartSearchQuery);
                tmp8 = smartSearchStatus === tmp4(11989).SmartSearchStatus.LOADING;
              }
              flag = tmp8;
            }
          } else {
            flag = 0 !== tmp3[item];
          }
          return flag;
        });
        flag2 = false;
        visibleTabCounts = reduced;
        visibleTabs = found1;
        const tmp13 = 0 === reduced[constants.MESSAGES] && found1.includes(constants.MESSAGES);
        if (tmp13) {
          reduced[constants.MESSAGES] = null;
          flag2 = false;
          visibleTabCounts = reduced;
          visibleTabs = found1;
        }
      } else {
        ({ visibleTabs, visibleTabCounts } = value);
        flag2 = tmp11;
      }
    }
    const tmp6Result3 = require("shallowEqual");
    const result = tmp6Result3.areArraysShallowEqual(value.candidateTabs, found);
    let tmp15 = !result;
    const tmp6Result4 = require("shallowEqual");
    const result1 = tmp6Result4.areArraysShallowEqual(value.visibleTabs, visibleTabs);
    const visibleTabCounts2 = value.visibleTabCounts;
    let tmp18 = visibleTabCounts2 === visibleTabCounts;
    const tmp17 = !result1;
    if (!tmp18) {
      tmp18 = null != visibleTabCounts2 && null != visibleTabCounts && searchContext(568)(visibleTabCounts2, visibleTabCounts);
      const tmp19 = null != visibleTabCounts2 && null != visibleTabCounts && searchContext(568)(visibleTabCounts2, visibleTabCounts);
    }
    const tmp21 = !tmp18;
    if (!result) {
      value.candidateTabs = found;
    }
    if (!result1) {
      value.visibleTabs = visibleTabs;
    }
    if (!tmp18) {
      value.visibleTabCounts = visibleTabCounts;
    }
    value.wasInitialSearchQuery = flag2;
    if (result) {
      tmp15 = tmp17;
    }
    if (!tmp15) {
      tmp15 = tmp21;
    }
    return tmp15;
  }
}
function computeLayoutForAll() {
  let flag = false;
  const values = map.values();
  const tmp2 = values[Symbol.iterator]();
  while (tmp2 !== undefined) {
    if (computeLayoutForState(tmp3)) {
      flag = true;
    }
    continue;
  }
  return flag;
}
let ChannelStore = ChannelStore_mod;
({ SearchTabs: c10, SEARCH_TYPE_TO_SEARCH_INITIAL_TABS: unpackModuleId, SEARCH_TYPE_TO_SEARCH_RESULT_TABS: closure_12 } = SearchConstants);
const map = new Map();
const Store = get_initializedDefault.Store;
class SearchTabsLayoutStore extends Store {
  initialize() {
    this.waitFor(SearchQueryStore, SearchMessageStore, SearchMemberTabStore, SearchGuildChannelTabStore, SearchPeopleTabStore, ChannelStore, SmartSearchResultsStore);
    const items = [SearchMessageStore, SearchMemberTabStore, SearchGuildChannelTabStore, SearchPeopleTabStore, SmartSearchResultsStore];
    this.syncWith(items, computeLayoutForAll);
  }
  getCandidateTabs(searchContext) {
    const obj = SearchUtils;
    let value = map.get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
      const obj2 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    }
    return value.candidateTabs;
  }
  getVisibleTabs(searchContext) {
    const obj = SearchUtils;
    let value = map.get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
      const obj2 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    }
    return value.visibleTabs;
  }
  getVisibleTabCounts(searchContext) {
    const obj = SearchUtils;
    let value = map.get(obj.getSearchContextId(searchContext));
    if (value == null) {
      value = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
      const obj2 = { searchContext, wasInitialSearchQuery: true, candidateTabs: visibleTabs, visibleTabs, visibleTabCounts: null };
    }
    return value.visibleTabCounts;
  }
}
const prototype = SearchTabsLayoutStore.prototype;
SearchTabsLayoutStore.displayName = "SearchTabsLayoutStore";
let obj = {
  SEARCH_QUERY_NATIVE_INITIALIZE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_UPDATE: handleSearchQuery,
  SEARCH_QUERY_NATIVE_DELETE: function handleSearchQueryNativeDelete(id) {
    return map.delete(id.id);
  }
};
const searchTabsLayoutStore = new SearchTabsLayoutStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchTabsLayoutStore.tsx");

export default searchTabsLayoutStore;
