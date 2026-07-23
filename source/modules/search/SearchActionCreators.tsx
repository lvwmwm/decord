// Module ID: 10085
// Function ID: 78052
// Dependencies: [10078, 10086, 686, 22, 7024, 10089, 1331, 2]

// Module 10085
let result = require("dispatcher").fileFinishedImporting("modules/search/SearchActionCreators.tsx");

export default {
  fetchTabMessages(searchContext) {
    let dependencyMap;
    let getLimit;
    let importDefault;
    let onFetchStart;
    let pagination;
    let searchMode;
    let searchQueryString;
    let searchTabs;
    let trackExactTotalHits;
    searchContext = searchContext.searchContext;
    ({ searchTabs, searchQueryString, getId: importDefault, onFetchStart, onFetchSuccess: dependencyMap } = searchContext);
    let mapped;
    ({ pagination, trackExactTotalHits, getLimit, searchMode } = searchContext);
    let obj = searchContext(10078);
    let obj1 = searchContext(10078);
    const searchQueryFromTokens = obj1.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString));
    (function fixSearchQueryPinned(searchQueryFromTokens) {
      if (Array.isArray(searchQueryFromTokens.pinned)) {
        const pinned = searchQueryFromTokens.pinned;
        searchQueryFromTokens.pinned = pinned.some((arg0) => true === arg0);
      }
    })(searchQueryFromTokens);
    let obj2 = searchContext(10078);
    const result = obj2.searchModeToSearchQueryParams(searchMode);
    obj = {};
    const merged = Object.assign(searchQueryFromTokens);
    const merged1 = Object.assign(result);
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    const guildIdFromSearchContext = searchContext(10078).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      searchContext(10078).setIncludeNSFW(obj, guildIdFromSearchContext);
      const obj6 = searchContext(10078);
    }
    const obj5 = searchContext(10078);
    obj = {};
    const obj7 = importDefault(10086);
    obj.id = searchContext(10078).getSearchContextId(searchContext);
    obj.searchContext = searchContext;
    obj.searchQuery = obj;
    obj.searchTabs = searchTabs;
    obj.getLimit = getLimit;
    obj.pagination = pagination;
    obj.trackExactTotalHits = trackExactTotalHits;
    obj1 = obj7.create(obj);
    if (null != onFetchStart) {
      obj2 = { searchContext, searchQueryString, searchQuery: obj };
      onFetchStart(obj2);
    }
    mapped = searchTabs.map((arg0) => callback(arg0));
    const obj9 = searchContext(10078);
    importDefault(686).dispatch({ type: "SEARCH_MESSAGES_START", ids: mapped });
    const response = obj1.fetch((body) => {
      body = body.body;
      const entries = Object.entries(body.tabs);
      let obj = outer1_1(outer1_2[2]);
      obj = {
        type: "SEARCH_MESSAGES_SUCCESS",
        guildId: guildIdFromSearchContext,
        data: entries.map((arg0) => {
          let channels;
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const cursor = tmp2.cursor;
          const obj = { id: outer1_1(tmp), analyticsId: body.analytics_id, totalResults: tmp2.total_results };
          if (null == cursor) {
            let tmp5 = cursor;
          } else {
            tmp5 = null;
            const obj2 = outer2_1(outer2_2[3]);
          }
          obj.cursor = tmp5;
          ({ messages: obj.messages, channels } = tmp2);
          if (null == channels) {
            channels = [];
          }
          obj.channels = channels;
          let threads = tmp2.threads;
          if (null == threads) {
            threads = [];
          }
          obj.threads = threads;
          let members = tmp2.members;
          if (null == members) {
            members = [];
          }
          obj.members = members.map((arg0) => outer3_1(outer3_2[4])(arg0));
          ({ doing_deep_historical_index: obj.doingHistoricalIndex, documents_indexed: obj.documentsIndexed } = body);
          return obj;
        })
      };
      obj.dispatch(obj);
      if (null != callback2) {
        obj = { searchContext: body, tabEntries: entries };
        callback2(obj);
      }
    }, () => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "SEARCH_MESSAGES_INDEXING", ids: mapped };
      obj.dispatch(obj);
    }, (error) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "SEARCH_MESSAGES_FAILURE", ids: mapped, error };
      obj.dispatch(obj);
    });
    return true;
  },
  fetchMessages(arg0) {
    let onFetchStart;
    let pagination;
    let searchContext;
    let searchEverywhere;
    let searchMode;
    let searchQueryString;
    ({ searchContext, searchQueryString, onFetchStart } = arg0);
    let searchContextId;
    ({ pagination, searchMode, searchEverywhere } = arg0);
    let obj = guildIdFromSearchContext(10078);
    obj = {};
    let obj2 = guildIdFromSearchContext(10078);
    const merged = Object.assign(obj2.getSearchQueryFromTokens(obj.tokenizeQuery(searchQueryString)));
    const tokenizeQueryResult = obj.tokenizeQuery(searchQueryString);
    const merged1 = Object.assign(guildIdFromSearchContext(10078).searchModeToSearchQueryParams(searchMode));
    obj["offset"] = pagination.offset;
    const obj4 = guildIdFromSearchContext(10078);
    guildIdFromSearchContext = guildIdFromSearchContext(10078).getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      guildIdFromSearchContext(10078).setIncludeNSFW(obj, guildIdFromSearchContext);
      const obj6 = guildIdFromSearchContext(10078);
    }
    if (searchEverywhere) {
      obj.search_everywhere = true;
    }
    const obj5 = guildIdFromSearchContext(10078);
    searchContextId = guildIdFromSearchContext(10078).getSearchContextId(searchContext);
    const obj7 = guildIdFromSearchContext(10078);
    obj = { id: searchContextId, searchType: searchContext.type, searchQuery: obj };
    const obj8 = searchContextId(10089);
    if (null != onFetchStart) {
      obj2 = { searchContext, searchQueryString, searchQuery: obj };
      onFetchStart(obj2);
    }
    const obj1 = searchContextId(10089).create(obj);
    let items = [searchContextId];
    searchContextId(686).dispatch({ type: "SEARCH_MESSAGES_START", ids: items });
    const response = obj1.fetch((analyticsId) => {
      let obj = searchContextId(outer1_2[2]);
      obj = { type: "SEARCH_MESSAGES_SUCCESS", guildId: guildIdFromSearchContext };
      obj = { id: searchContextId, analyticsId: analyticsId.body.analytics_id, totalResults: analyticsId.body.total_results, messages: analyticsId.body.messages };
      let threads = analyticsId.body.threads;
      if (null == threads) {
        threads = [];
      }
      obj.threads = threads;
      let members = analyticsId.body.members;
      if (null == members) {
        members = [];
      }
      obj.members = members.map((arg0) => searchContextId(outer2_2[4])(arg0));
      obj.doingHistoricalIndex = analyticsId.body.doing_deep_historical_index;
      obj.documentsIndexed = analyticsId.body.documents_indexed;
      let channels = analyticsId.body.channels;
      if (null == channels) {
        channels = [];
      }
      obj.channels = channels;
      obj.cursor = null;
      const items = [obj];
      obj.data = items;
      obj.dispatch(obj);
    }, () => {
      const items = [searchContextId];
      searchContextId(outer1_2[2]).dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: items });
    }, (error) => {
      let obj = searchContextId(outer1_2[2]);
      obj = { type: "SEARCH_MESSAGES_FAILURE", ids: items, error };
      items = [searchContextId];
      obj.dispatch(obj);
    });
  },
  clearSearchRecentMessages() {
    importDefault(686).dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
  },
  clearAllSearchMesssages() {
    importDefault(686).dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
  },
  clearSearchMessages(id) {
    let obj = importDefault(686);
    obj = { type: "SEARCH_MESSAGES_CLEAR", id };
    obj.dispatch(obj);
  },
  initializeAutocomplete(channelDetailsSearchContext) {
    let obj = importDefault(686);
    obj = { type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: channelDetailsSearchContext };
    obj.dispatch(obj);
  },
  updateAutocompleteQuery(arg0) {
    let cursorScope;
    let queryString;
    let searchContext;
    let tokens;
    ({ queryString, searchContext, tokens, cursorScope } = arg0);
    if (queryString.trim().length > 0) {
      const FrecencyUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
    importDefault(686).dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext, tokens, cursorScope });
  },
  markSearchTokensRefreshed() {
    importDefault(686).dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
  }
};
