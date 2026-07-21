// Module ID: 11395
// Function ID: 88581
// Dependencies: [0, 0, 4294967295, 0, 0, 0]

// Module 11395
import { SearchTypes } from "result";
import result from "result";
import result from "result";

const _module1 = require(dependencyMap[2]);
result = result.fileFinishedImporting("modules/search/native/SearchPlatformActionCreators.tsx");

export default {
  searchPeopleTab(closure_0, searchQueryString) {
    let obj = require(dependencyMap[3]);
    const searchContextId = obj.getSearchContextId(closure_0);
    obj = { type: "SEARCH_PEOPLE_TAB_SEARCH", id: searchContextId, searchQueryString };
    importDefault(dependencyMap[4]).dispatch(obj);
  },
  cleanupPeopleTab(closure_0) {
    const searchContextId = require(dependencyMap[3]).getSearchContextId(closure_0);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_PEOPLE_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildMemberTab(arg0) {
    let channelId;
    let guildId;
    let searchContext;
    let searchQueryString;
    let threadId;
    ({ searchContext, searchQueryString, guildId, channelId, threadId } = arg0);
    const searchContextId = require(dependencyMap[3]).getSearchContextId(searchContext);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_SEARCH", id: searchContextId, searchQueryString, guildId, channelId, threadId });
  },
  cleanupGuildMemberTab(closure_0) {
    const searchContextId = require(dependencyMap[3]).getSearchContextId(closure_0);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_GUILD_MEMBER_TAB_CLEANUP", id: searchContextId });
  },
  searchGuildChannelTab(arg0) {
    let guildId;
    let searchContext;
    let searchQueryString;
    ({ searchContext, searchQueryString, guildId } = arg0);
    const searchContextId = require(dependencyMap[3]).getSearchContextId(searchContext);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_SEARCH", id: searchContextId, searchQueryString, guildId });
  },
  cleanupGuildChannelTab(closure_0) {
    const searchContextId = require(dependencyMap[3]).getSearchContextId(closure_0);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_GUILD_CHANNEL_TAB_CLEANUP", id: searchContextId });
  },
  addSearchHistoryItem(type, item) {
    if (type.type === SearchTypes.DMS) {
      let obj = require(dependencyMap[3]);
      const searchContextId = obj.getSearchContextId(type);
      obj = { type: "SEARCH_HISTORY_NATIVE_ADD_ITEM", id: searchContextId, item };
      importDefault(dependencyMap[4]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[4]);
    }
  },
  removeSearchHistoryItem(searchContext, searchHistoryItem) {
    let obj = require(dependencyMap[3]);
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM", id: searchContextId, item: searchHistoryItem };
    importDefault(dependencyMap[4]).dispatch(obj);
  },
  clearSearchHistory(searchContext) {
    const searchContextId = require(dependencyMap[3]).getSearchContextId(searchContext);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS", id: searchContextId });
  },
  updateSearchQuery(searchContext, updater) {
    let obj = require(dependencyMap[3]);
    const searchContextId = obj.getSearchContextId(searchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_UPDATE", id: searchContextId, searchContext, updater };
    importDefault(dependencyMap[4]).dispatch(obj);
  },
  deleteSearchQuery(closure_5) {
    const searchContextId = require(dependencyMap[3]).getSearchContextId(closure_5);
    const obj = require(dependencyMap[3]);
    importDefault(dependencyMap[4]).dispatch({ type: "SEARCH_QUERY_NATIVE_DELETE", id: searchContextId });
  },
  initializeSearchQuery(channelDetailsSearchContext) {
    let obj = require(dependencyMap[3]);
    const searchContextId = obj.getSearchContextId(channelDetailsSearchContext);
    obj = { type: "SEARCH_QUERY_NATIVE_INITIALIZE", id: searchContextId, searchContext: channelDetailsSearchContext };
    importDefault(dependencyMap[4]).dispatch(obj);
  }
};
