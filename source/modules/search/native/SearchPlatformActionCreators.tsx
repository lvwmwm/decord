// Module ID: 11434
// Function ID: 88883
// Dependencies: [653, 11435, 10109, 10110, 686, 2]

// Module 11434
import { SearchTypes } from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/SearchPlatformActionCreators.tsx");

export default {
  searchPeopleTab(closure_0, searchQueryString) {
    let obj = require(10110) /* _createForOfIteratorHelperLoose */;
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString };
    importDefault(686).dispatch(obj);
  },
  cleanupPeopleTab(outer1_0) {
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(outer1_0);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_PEOPLE_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildMemberTab(arg0) {
    let channelId;
    let guildId;
    let searchContext;
    let searchQueryString;
    let threadId;
    ({ searchContext, searchQueryString, guildId, channelId, threadId } = arg0);
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_SEARCH", id: searchContextId, searchQueryString, guildId, channelId, threadId });
  },
  cleanupGuildMemberTab(outer1_0) {
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(outer1_0);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    let guildId;
    let searchContext;
    let searchQueryString;
    ({ searchContext, searchQueryString, guildId } = arg0);
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH", id: searchContextId, searchQueryString, guildId });
  },
  cleanupGuildChannelTab(outer1_0) {
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(outer1_0);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_CLEANUP", id: searchContextId });
  },
  addSearchHistoryItem(type, item) {
    if (type.type === SearchTypes.DMS) {
      let obj = require(10110) /* _createForOfIteratorHelperLoose */;
      const searchContextId = obj.getSearchContextId(type);
      obj = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: searchContextId, item };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    let obj = require(10110) /* _createForOfIteratorHelperLoose */;
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem };
    importDefault(686).dispatch(obj);
  },
  clearSearchHistory(searchContext) {
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(searchContext);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(closure_0, updater) {
    let obj = require(10110) /* _createForOfIteratorHelperLoose */;
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext: closure_0, updater };
    importDefault(686).dispatch(obj);
  },
  deleteSearchQuery(outer1_5) {
    const searchContextId = require(10110) /* _createForOfIteratorHelperLoose */.getSearchContextId(outer1_5);
    const obj = require(10110) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    let obj = require(10110) /* _createForOfIteratorHelperLoose */;
    const searchContextId = obj.getSearchContextId(channelDetailsSearchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_INITIALIZE", id: searchContextId, searchContext: channelDetailsSearchContext };
    importDefault(686).dispatch(obj);
  }
};
