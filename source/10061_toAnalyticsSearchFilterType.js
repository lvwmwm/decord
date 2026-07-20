// Module ID: 10061
// Function ID: 77694
// Name: toAnalyticsSearchFilterType
// Dependencies: []

// Module 10061 (toAnalyticsSearchFilterType)
function toAnalyticsSearchFilterType(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    return "filter_from";
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    return "filter_mentions";
  } else if (constants.FILTER_IN === searchTokenType) {
    return "filter_in";
  } else if (constants.FILTER_HAS === searchTokenType) {
    return "filter_has";
  } else if (constants.FILTER_ON === searchTokenType) {
    return "filter_on";
  } else if (constants.FILTER_AFTER === searchTokenType) {
    return "filter_after";
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    return "filter_before";
  } else {
    return null;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
({ SearchTokenTypes: closure_6, AnalyticEvents: closure_7 } = arg1(dependencyMap[3]));
const obj = {
  trackSearchOpened(arg0) {
    let searchContext;
    let searchLocation;
    ({ searchContext, searchLocation } = arg0);
    let obj = importDefault(dependencyMap[4]);
    obj.initialize(searchContext, searchLocation);
    const channelIdFromSearchContext = arg1(dependencyMap[5]).getChannelIdFromSearchContext(searchContext);
    const channel = store.getChannel(channelIdFromSearchContext);
    const obj2 = arg1(dependencyMap[5]);
    obj = {};
    const obj3 = importDefault(dependencyMap[6]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    obj.search_location = searchLocation;
    const obj5 = importDefault(dependencyMap[4]);
    obj.guild_id = arg1(dependencyMap[5]).getGuildIdFromSearchContext(searchContext);
    obj.channel_id = channelIdFromSearchContext;
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.channel_type = type;
    obj3.trackWithMetadata(closure_7.SEARCH_OPENED_MOBILE, obj);
  },
  trackSearchStarted(searchContext) {
    searchContext = searchContext.searchContext;
    if (!store2.isInitialSearchQuery(searchContext)) {
      let type;
      let obj = importDefault(dependencyMap[4]);
      obj.refreshQueryId(searchContext);
      const channelIdFromSearchContext = arg1(dependencyMap[5]).getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = arg1(dependencyMap[5]);
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(dependencyMap[6]);
      obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
      const obj5 = importDefault(dependencyMap[4]);
      obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
      const obj6 = importDefault(dependencyMap[4]);
      obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
      const obj7 = importDefault(dependencyMap[4]);
      obj.guild_id = arg1(dependencyMap[5]).getGuildIdFromSearchContext(searchContext);
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj3.trackWithMetadata(closure_7.SEARCH_STARTED_MOBILE, obj);
      const obj8 = arg1(dependencyMap[5]);
    }
  },
  trackSearchResultClicked(arg0) {
    let channelId;
    let entityType;
    let index;
    let messageId;
    let searchContext;
    let userId;
    ({ searchContext, channelId } = arg0);
    ({ index, messageId, userId, entityType } = arg0);
    if (!store2.isInitialSearchQuery(searchContext)) {
      let obj = arg1(dependencyMap[5]);
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = arg1(dependencyMap[5]).getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const channel1 = store.getChannel(channelId);
      const obj2 = arg1(dependencyMap[5]);
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(dependencyMap[6]);
      obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
      const obj5 = importDefault(dependencyMap[4]);
      obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
      const obj6 = importDefault(dependencyMap[4]);
      obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      const obj7 = importDefault(dependencyMap[4]);
      obj.search_tab_selected = importDefault(dependencyMap[4]).getSelectedTab(searchContext);
      obj.search_result_index = index;
      const obj8 = importDefault(dependencyMap[4]);
      obj.search_result_click_id = arg1(dependencyMap[7]).v4();
      obj.search_result_content_entity_type = entityType;
      obj.search_result_user_id = userId;
      obj.search_result_message_id = messageId;
      obj.search_result_channel_id = channelId;
      obj.search_result_guild_id = guildIdFromSearchContext;
      let type;
      if (null != channel1) {
        type = channel1.type;
      }
      obj.search_result_channel_type = type;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      let type1;
      if (null != channel) {
        type1 = channel.type;
      }
      obj.channel_type = type1;
      obj3.trackWithMetadata(closure_7.SEARCH_RESULT_CLICKED_MOBILE, obj);
      const obj9 = arg1(dependencyMap[7]);
    }
  },
  trackSearchResultReturned(searchContext) {
    let numChannelTabReturnedResults;
    let numFileTabReturnedResults;
    let numLinkTabReturnedResults;
    let numMediaTabReturnedResults;
    let numMemberTabReturnedResults;
    let numMessageTabReturnedResults;
    let numPeopleTabReturnedResults;
    let searchResultTotalCount;
    searchContext = searchContext.searchContext;
    ({ searchResultTotalCount, numMemberTabReturnedResults, numChannelTabReturnedResults, numPeopleTabReturnedResults, numMessageTabReturnedResults, numMediaTabReturnedResults, numFileTabReturnedResults, numLinkTabReturnedResults } = searchContext);
    if (!store2.isInitialSearchQuery(searchContext)) {
      let type;
      let obj = arg1(dependencyMap[5]);
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = arg1(dependencyMap[5]).getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = arg1(dependencyMap[5]);
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(dependencyMap[6]);
      obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
      const obj5 = importDefault(dependencyMap[4]);
      obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
      const obj6 = importDefault(dependencyMap[4]);
      obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.search_result_total_count = searchResultTotalCount;
      obj.num_member_tab_returned_results = numMemberTabReturnedResults;
      obj.num_channel_tab_returned_results = numChannelTabReturnedResults;
      obj.num_people_tab_returned_results = numPeopleTabReturnedResults;
      obj.num_message_tab_returned_results = numMessageTabReturnedResults;
      obj.num_media_tab_returned_results = numMediaTabReturnedResults;
      obj.num_file_tab_returned_results = numFileTabReturnedResults;
      obj.num_link_tab_returned_results = numLinkTabReturnedResults;
      const obj7 = importDefault(dependencyMap[4]);
      obj.exact_search_result_count_setting_enabled = arg1(dependencyMap[8]).SearchResultExactCountEnabled.getSetting();
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj3.trackWithMetadata(closure_7.SEARCH_RESULT_RETURNED_MOBILE, obj);
      const SearchResultExactCountEnabled = arg1(dependencyMap[8]).SearchResultExactCountEnabled;
    }
  },
  trackSearchEmptyResult(searchContext) {
    searchContext = searchContext.searchContext;
    if (!store2.isInitialSearchQuery(searchContext)) {
      let type;
      let obj = arg1(dependencyMap[5]);
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = arg1(dependencyMap[5]).getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = arg1(dependencyMap[5]);
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(dependencyMap[6]);
      obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
      const obj5 = importDefault(dependencyMap[4]);
      obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
      const obj6 = importDefault(dependencyMap[4]);
      obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj3.trackWithMetadata(closure_7.SEARCH_EMPTY_RESULT_MOBILE, obj);
      const obj7 = importDefault(dependencyMap[4]);
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    searchContext = searchContext.searchContext;
    if (!store2.isInitialSearchQuery(searchContext)) {
      let type;
      let obj = arg1(dependencyMap[5]);
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = arg1(dependencyMap[5]).getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = arg1(dependencyMap[5]);
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(dependencyMap[6]);
      obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
      const obj5 = importDefault(dependencyMap[4]);
      obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
      const obj6 = importDefault(dependencyMap[4]);
      obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj3.trackWithMetadata(closure_7.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE, obj);
      const obj7 = importDefault(dependencyMap[4]);
    }
  },
  trackSearchClosed(searchContext) {
    importDefault(dependencyMap[4]).terminate(searchContext.searchContext);
  },
  trackSearchIndexing(searchContext) {
    let documentsIndexed;
    let isHistoricalIndexing;
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    let obj = importDefault(dependencyMap[6]);
    obj = { is_historical_indexing: isHistoricalIndexing, documents_indexed: documentsIndexed, search_tab_selected: importDefault(dependencyMap[4]).getSelectedTab(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    const obj5 = importDefault(dependencyMap[4]);
    obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_INDEXING_VIEWED, obj);
  },
  trackSearchHistoryClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = importDefault(dependencyMap[6]);
    obj = { search_tab_selected: importDefault(dependencyMap[4]).getSelectedTab(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.search_history_type = closure_5[searchContext.searchHistoryItemType];
    obj.trackWithMetadata(closure_7.SEARCH_V2_HISTORY_CLICKED, obj);
  },
  trackSuggestedSearchClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = importDefault(dependencyMap[6]);
    obj = { search_tab_selected: importDefault(dependencyMap[4]).getSelectedTab(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.trackWithMetadata(closure_7.SEARCH_V2_SUGGESTED_CLICKED, obj);
  },
  trackSearchFilterAdd(searchContext) {
    let _location;
    let searchTokenType;
    searchContext = searchContext.searchContext;
    ({ searchTokenType, location: _location } = searchContext);
    let obj = importDefault(dependencyMap[6]);
    obj = { search_tab_selected: importDefault(dependencyMap[4]).getSelectedTab(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    const obj5 = importDefault(dependencyMap[4]);
    obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
    obj.search_filter_type = toAnalyticsSearchFilterType(searchTokenType);
    obj.location = _location;
    obj.trackWithMetadata(closure_7.SEARCH_V2_FILTER_ADD, obj);
  },
  trackSearchFilterRemove(searchContext) {
    let isDefault;
    let searchTokenType;
    searchContext = searchContext.searchContext;
    ({ searchTokenType, isDefault } = searchContext);
    let obj = importDefault(dependencyMap[6]);
    obj = { search_tab_selected: importDefault(dependencyMap[4]).getSelectedTab(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    const obj5 = importDefault(dependencyMap[4]);
    obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
    obj.search_filter_type = toAnalyticsSearchFilterType(searchTokenType);
    obj.is_default_search_filter = isDefault;
    obj.trackWithMetadata(closure_7.SEARCH_V2_FILTER_REMOVE, obj);
  },
  trackSearchTabSelected(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = importDefault(dependencyMap[6]);
    obj = { search_session_id: importDefault(dependencyMap[4]).getSessionId(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_tab_selected = importDefault(dependencyMap[4]).getSelectedTab(searchContext);
    const obj5 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_TAB_SELECTED, obj);
  },
  trackSearchJumpToMessage(arg0) {
    let channelId;
    let searchContext;
    ({ searchContext, channelId } = arg0);
    const channel = store.getChannel(channelId);
    let obj = importDefault(dependencyMap[6]);
    obj = { search_tab_selected: importDefault(dependencyMap[4]).getSelectedTab(searchContext) };
    const obj3 = importDefault(dependencyMap[4]);
    obj.search_location = importDefault(dependencyMap[4]).getLocation(searchContext);
    const obj4 = importDefault(dependencyMap[4]);
    obj.search_session_id = importDefault(dependencyMap[4]).getSessionId(searchContext);
    const obj5 = importDefault(dependencyMap[4]);
    obj.search_query_id = importDefault(dependencyMap[4]).getQueryId(searchContext);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.search_result_channel_id = channelId;
    obj.trackWithMetadata(closure_7.SEARCH_V2_JUMP_TO_MESSAGE, obj);
  }
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default obj;
