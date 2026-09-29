// Module ID: 12018
// Function ID: 12019
// Name: SmartSearchUtils
// Dependencies: [4479, 12015, 12016, 1074, 7468, 11998, 11992, 5058, 12017, 2]
// Exports: getChannelFilterKey, getChannelIdsForFilterKey, getSmartSearchCitationsCount, getSmartSearchQuery, getSmartSearchStatus, hydrateAndFilterCitations, isSmartSearchEmptyOrErrored, isSupportedSearchContext, parseConversationId, resolveSearchStatus

// Module 12018 (SmartSearchUtils)
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import SearchUtils from "SearchUtils" /* 11992 */;
import QueryTokenizer from "QueryTokenizer" /* 11998 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 12015 */;
import SmartSearchTypes from "SmartSearchTypes" /* 12017 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;

require = fn;
function isUnsupportedFilterToken(type) {
  let tmp = type.type !== QueryTokenizer.NON_TOKEN_TYPE;
  if (tmp) {
    tmp = !set.has(type.type);
  }
  return tmp;
}
SmartSearchResultsStoreDefault;
const SmartSearchConstants = fn(12016);
({ MAX_PRESENTED_CITATIONS: closure_4, SUGGESTED_SEARCH_CHANNEL_KEY_DELIMITER: hasOwnProperty } = SmartSearchConstants);
const Constants = fn(1074);
({ SearchTokenTypes, SearchTypes: metroRequire } = Constants);
const SearchTabs = fn(7468).SearchTabs;
let items = [, ];
({ FILTER_IN: arr[0], ANSWER_IN: arr[1] } = SearchTokenTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchUtils.tsx");

export const getSmartSearchQuery = function getSmartSearchQuery(searchContext, searchQueryString) {
  if (tmp2) {
    const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
    if (null == guildIdFromSearchContext) {
      return null;
    } else {
      const searchTabFetchId = tmp4(11992).getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchQueryString);
      const tmp4Result = tmp4(11992);
      const tokenizeQueryResult = tmp4(11992).tokenizeQuery(searchQueryString);
      const tmp4Result4 = tmp4(11992);
      const searchQueryFromTokens = tmp4(11992).getSearchQueryFromTokens(tokenizeQueryResult);
      const tmp4Result5 = tmp4(11992);
      const nonTokenQuery = tmp4(11992).getNonTokenQuery(tokenizeQueryResult);
      let tmp8 = null;
      if (!tokenizeQueryResult.some(isUnsupportedFilterToken)) {
        const obj2 = { queryText: nonTokenQuery, requestKey: searchTabFetchId, guildId: guildIdFromSearchContext, channelIds: null, searchContext: null, searchQueryString: null };
        let channel_id = searchQueryFromTokens.channel_id;
        if (channel_id == null) {
          channel_id = [];
        }
        obj2.channelIds = channel_id;
        obj2.searchContext = searchContext;
        obj2.searchQueryString = searchQueryString;
        tmp8 = obj2;
      }
      return tmp8;
    }
  } else {
    return null;
  }
  tmp2 = searchContext.type === constants.GUILD || searchContext.type === tmp.GUILD_CHANNEL;
};
export const isSupportedSearchContext = function isSupportedSearchContext(type) {
  return type.type === constants.GUILD || type.type === tmp.GUILD_CHANNEL;
};
export const getChannelFilterKey = function getChannelFilterKey(channelIds) {
  const items = [...channelIds];
  const sorted = items.sort();
  return sorted.join(hasOwnProperty);
};
export const getChannelIdsForFilterKey = function getChannelIdsForFilterKey(item) {
  return item.split(hasOwnProperty);
};
export const hydrateAndFilterCitations = function hydrateAndFilterCitations(response) {
  const message_citations = response.message_citations;
  const mapped = message_citations.map((sourceId) => {
    const obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: MessageRecordUtils.createMessageRecord(sourceId.message) };
    return obj;
  });
  return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
};
export const resolveSearchStatus = function resolveSearchStatus(response, length) {
  const search_status = response.search_status;
  if ("not_qualified" === search_status) {
    return SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
  } else if ("no_results" === search_status) {
    return SmartSearchTypes.SmartSearchStatus.EMPTY;
  } else if ("success" === search_status) {
    if (length > 0) {
      let EMPTY = SmartSearchTypes.SmartSearchStatus.LOADED;
    } else {
      EMPTY = SmartSearchTypes.SmartSearchStatus.EMPTY;
    }
    return EMPTY;
  } else {
    return SmartSearchTypes.SmartSearchStatus.ERROR;
  }
};
export const parseConversationId = function parseConversationId(sourceId) {
  const match = /\/(\d+)$/.exec(sourceId);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (tmp2 == null) {
    tmp2 = sourceId;
  }
  return tmp2;
};
export const getSmartSearchStatus = function getSmartSearchStatus(smartSearchQuery, SmartSearchResultsStore) {
  let obj = SmartSearchResultsStore;
  if (SmartSearchResultsStore === undefined) {
    obj = SmartSearchResultsStore;
  }
  let NOT_QUALIFIED = obj.getStatus(smartSearchQuery.guildId, smartSearchQuery.requestKey);
  if (NOT_QUALIFIED == null) {
    NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
  }
  return NOT_QUALIFIED;
};
export const isSmartSearchEmptyOrErrored = function isSmartSearchEmptyOrErrored(smartSearchStatus) {
  return smartSearchStatus === SmartSearchTypes.SmartSearchStatus.EMPTY || smartSearchStatus === SmartSearchTypes.SmartSearchStatus.ERROR;
};
export const getSmartSearchCitationsCount = function getSmartSearchCitationsCount(searchContext, searchResultsQuery, arg2) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
  if (null == guildIdFromSearchContext) {
    return 0;
  } else {
    const answer = SmartSearchResultsStore.getAnswer(guildIdFromSearchContext, SearchUtils.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery));
    let num;
    if (answer != null) {
      num = answer.citations.length;
    }
    if (num == null) {
      num = 0;
    }
    let bound = num;
    if (arg2) {
      const _Math = Math;
      bound = Math.min(num, React4);
    }
    return bound;
  }
};
