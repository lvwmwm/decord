// Module ID: 10076
// Function ID: 77776
// Name: toAnalyticsSearchFilterType
// Dependencies: [1348, 10077, 9133, 653, 10091, 10078, 4324, 491, 3803, 2]

// Module 10076 (toAnalyticsSearchFilterType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY as closure_5 } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
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
({ SearchTokenTypes: closure_6, AnalyticEvents: closure_7 } = ME);
const result = require("SearchEntrypointAnalyticsLocations").fileFinishedImporting("modules/search/native/tracking/Tracking.tsx");

export default {
  trackSearchOpened(arg0) {
    let searchContext;
    let searchLocation;
    ({ searchContext, searchLocation } = arg0);
    let obj = importDefault(10091);
    obj.initialize(searchContext, searchLocation);
    const channelIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getChannelIdFromSearchContext(searchContext);
    const channel = store.getChannel(channelIdFromSearchContext);
    const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
    obj = {};
    const obj3 = importDefault(4324);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
    obj.search_location = searchLocation;
    const obj5 = importDefault(10091);
    obj.guild_id = require(10078) /* _createForOfIteratorHelperLoose */.getGuildIdFromSearchContext(searchContext);
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
      let obj = importDefault(10091);
      obj.refreshQueryId(searchContext);
      const channelIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(4324);
      obj.search_session_id = importDefault(10091).getSessionId(searchContext);
      const obj5 = importDefault(10091);
      obj.search_query_id = importDefault(10091).getQueryId(searchContext);
      const obj6 = importDefault(10091);
      obj.search_location = importDefault(10091).getLocation(searchContext);
      const obj7 = importDefault(10091);
      obj.guild_id = require(10078) /* _createForOfIteratorHelperLoose */.getGuildIdFromSearchContext(searchContext);
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj3.trackWithMetadata(closure_7.SEARCH_STARTED_MOBILE, obj);
      const obj8 = require(10078) /* _createForOfIteratorHelperLoose */;
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
      let obj = require(10078) /* _createForOfIteratorHelperLoose */;
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const channel1 = store.getChannel(channelId);
      const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(4324);
      obj.search_session_id = importDefault(10091).getSessionId(searchContext);
      const obj5 = importDefault(10091);
      obj.search_location = importDefault(10091).getLocation(searchContext);
      const obj6 = importDefault(10091);
      obj.search_query_id = importDefault(10091).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      const obj7 = importDefault(10091);
      obj.search_tab_selected = importDefault(10091).getSelectedTab(searchContext);
      obj.search_result_index = index;
      const obj8 = importDefault(10091);
      obj.search_result_click_id = require(491) /* v1 */.v4();
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
      const obj9 = require(491) /* v1 */;
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
      let obj = require(10078) /* _createForOfIteratorHelperLoose */;
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(4324);
      obj.search_session_id = importDefault(10091).getSessionId(searchContext);
      const obj5 = importDefault(10091);
      obj.search_location = importDefault(10091).getLocation(searchContext);
      const obj6 = importDefault(10091);
      obj.search_query_id = importDefault(10091).getQueryId(searchContext);
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
      const obj7 = importDefault(10091);
      obj.exact_search_result_count_setting_enabled = require(3803) /* explicitContentFromProto */.SearchResultExactCountEnabled.getSetting();
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj3.trackWithMetadata(closure_7.SEARCH_RESULT_RETURNED_MOBILE, obj);
      const SearchResultExactCountEnabled = require(3803) /* explicitContentFromProto */.SearchResultExactCountEnabled;
    }
  },
  trackSearchEmptyResult(searchContext) {
    searchContext = searchContext.searchContext;
    if (!store2.isInitialSearchQuery(searchContext)) {
      let type;
      let obj = require(10078) /* _createForOfIteratorHelperLoose */;
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(4324);
      obj.search_session_id = importDefault(10091).getSessionId(searchContext);
      const obj5 = importDefault(10091);
      obj.search_location = importDefault(10091).getLocation(searchContext);
      const obj6 = importDefault(10091);
      obj.search_query_id = importDefault(10091).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj3.trackWithMetadata(closure_7.SEARCH_EMPTY_RESULT_MOBILE, obj);
      const obj7 = importDefault(10091);
    }
  },
  trackSearchEmptyMessageResult(searchContext) {
    searchContext = searchContext.searchContext;
    if (!store2.isInitialSearchQuery(searchContext)) {
      let type;
      let obj = require(10078) /* _createForOfIteratorHelperLoose */;
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
      const channelIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getChannelIdFromSearchContext(searchContext);
      const channel = store.getChannel(channelIdFromSearchContext);
      const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
      const str = store2.getQueryString(searchContext);
      const str2 = store2.getTextInputValue(searchContext);
      obj = {};
      const obj3 = importDefault(4324);
      obj.search_session_id = importDefault(10091).getSessionId(searchContext);
      const obj5 = importDefault(10091);
      obj.search_location = importDefault(10091).getLocation(searchContext);
      const obj6 = importDefault(10091);
      obj.search_query_id = importDefault(10091).getQueryId(searchContext);
      obj.search_query_length = str.trim().length;
      obj.search_query_content_length = str2.trim().length;
      obj.guild_id = guildIdFromSearchContext;
      obj.channel_id = channelIdFromSearchContext;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      obj3.trackWithMetadata(closure_7.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE, obj);
      const obj7 = importDefault(10091);
    }
  },
  trackSearchClosed(searchContext) {
    importDefault(10091).terminate(searchContext.searchContext);
  },
  trackSearchIndexing(searchContext) {
    let documentsIndexed;
    let isHistoricalIndexing;
    searchContext = searchContext.searchContext;
    ({ isHistoricalIndexing, documentsIndexed } = searchContext);
    let obj = importDefault(4324);
    obj = { is_historical_indexing: isHistoricalIndexing, documents_indexed: documentsIndexed, search_tab_selected: importDefault(10091).getSelectedTab(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    const obj4 = importDefault(10091);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
    const obj5 = importDefault(10091);
    obj.search_query_id = importDefault(10091).getQueryId(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_INDEXING_VIEWED, obj);
  },
  trackSearchHistoryClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = importDefault(4324);
    obj = { search_tab_selected: importDefault(10091).getSelectedTab(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    const obj4 = importDefault(10091);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.search_history_type = table[searchContext.searchHistoryItemType];
    obj.trackWithMetadata(closure_7.SEARCH_V2_HISTORY_CLICKED, obj);
  },
  trackSuggestedSearchClicked(searchContext) {
    searchContext = searchContext.searchContext;
    const channel = store.getChannel(searchContext.channelId);
    let obj = importDefault(4324);
    obj = { search_tab_selected: importDefault(10091).getSelectedTab(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    const obj4 = importDefault(10091);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
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
    let obj = importDefault(4324);
    obj = { search_tab_selected: importDefault(10091).getSelectedTab(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    const obj4 = importDefault(10091);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
    const obj5 = importDefault(10091);
    obj.search_query_id = importDefault(10091).getQueryId(searchContext);
    obj.search_filter_type = toAnalyticsSearchFilterType(searchTokenType);
    obj.location = _location;
    obj.trackWithMetadata(closure_7.SEARCH_V2_FILTER_ADD, obj);
  },
  trackSearchFilterRemove(searchContext) {
    let isDefault;
    let searchTokenType;
    searchContext = searchContext.searchContext;
    ({ searchTokenType, isDefault } = searchContext);
    let obj = importDefault(4324);
    obj = { search_tab_selected: importDefault(10091).getSelectedTab(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    const obj4 = importDefault(10091);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
    const obj5 = importDefault(10091);
    obj.search_query_id = importDefault(10091).getQueryId(searchContext);
    obj.search_filter_type = toAnalyticsSearchFilterType(searchTokenType);
    obj.is_default_search_filter = isDefault;
    obj.trackWithMetadata(closure_7.SEARCH_V2_FILTER_REMOVE, obj);
  },
  trackSearchTabSelected(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = importDefault(4324);
    obj = { search_session_id: importDefault(10091).getSessionId(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_query_id = importDefault(10091).getQueryId(searchContext);
    const obj4 = importDefault(10091);
    obj.search_tab_selected = importDefault(10091).getSelectedTab(searchContext);
    const obj5 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    obj.trackWithMetadata(closure_7.SEARCH_V2_TAB_SELECTED, obj);
  },
  trackSearchJumpToMessage(arg0) {
    let channelId;
    let searchContext;
    ({ searchContext, channelId } = arg0);
    const channel = store.getChannel(channelId);
    let obj = importDefault(4324);
    obj = { search_tab_selected: importDefault(10091).getSelectedTab(searchContext) };
    const obj3 = importDefault(10091);
    obj.search_location = importDefault(10091).getLocation(searchContext);
    const obj4 = importDefault(10091);
    obj.search_session_id = importDefault(10091).getSessionId(searchContext);
    const obj5 = importDefault(10091);
    obj.search_query_id = importDefault(10091).getQueryId(searchContext);
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.search_result_channel_type = type;
    obj.search_result_channel_id = channelId;
    obj.trackWithMetadata(closure_7.SEARCH_V2_JUMP_TO_MESSAGE, obj);
  }
};
