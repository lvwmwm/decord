// Module ID: 11849
// Function ID: 11850
// Name: IntelligenceSearchUtils
// Dependencies: [4479, 11846, 11847, 1074, 7303, 11829, 11823, 5058, 11848, 2]
// Exports: getIntelligenceSearchCitationsCount, getIntelligenceSearchQuery, getIntelligenceSearchStatus, hydrateAndFilterCitations, isIntelligenceSearchActive, isIntelligenceSearchEmptyOrErrored, isSupportedSearchContext, parseConversationId, resolveSearchStatus

// Module 11849 (IntelligenceSearchUtils)
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import QueryTokenizer from "QueryTokenizer" /* 11829 */;
import IntelligenceSearchConstants from "IntelligenceSearchConstants" /* 11847 */;
import IntelligenceSearchTypes from "IntelligenceSearchTypes" /* 11848 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11846 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let SearchTokenTypes;
let hasOwnProperty;
function isUnsupportedFilterToken(type) {
  const tmp = type.type !== QueryTokenizer.NON_TOKEN_TYPE && !set.has(type.type);
  return tmp;
}
const MAX_PRESENTED_CITATIONS = IntelligenceSearchConstants.MAX_PRESENTED_CITATIONS;
({ SearchTokenTypes, SearchTypes: hasOwnProperty } = Constants);
const SearchTabs = SearchConstants.SearchTabs;
const items = [, ];
({ FILTER_IN: arr[0], ANSWER_IN: arr[1] } = SearchTokenTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchUtils.tsx");

export const getIntelligenceSearchQuery = function getIntelligenceSearchQuery(c1) {
  let channel_id;
  const obj = SearchUtils;
  const tokenizeQueryResult = obj.tokenizeQuery(c1);
  const obj3 = SearchUtils;
  const searchQueryFromTokens = obj3.getSearchQueryFromTokens(tokenizeQueryResult);
  const obj4 = SearchUtils;
  const nonTokenQuery = obj4.getNonTokenQuery(tokenizeQueryResult);
  let tmp2 = null;
  if (0 !== nonTokenQuery.length) {
    tmp2 = null;
    if (!tokenizeQueryResult.some(isUnsupportedFilterToken)) {
      const obj2 = { queryText: nonTokenQuery, channelIds: channel_id };
      channel_id = searchQueryFromTokens.channel_id;
      if (channel_id == null) {
        channel_id = [];
      }
      tmp2 = obj2;
    }
  }
  return tmp2;
};
export const isSupportedSearchContext = function isSupportedSearchContext(c0) {
  return c0.type === hasOwnProperty.GUILD || c0.type === tmp.GUILD_CHANNEL;
};
export const hydrateAndFilterCitations = function hydrateAndFilterCitations(response) {
  let blockedOrIgnoredForMessage;
  const message_citations = response.message_citations;
  const mapped = message_citations.map((sourceId) => {
    let obj2;
    const obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: obj2.createMessageRecord(sourceId.message) };
    obj2 = MessageRecordUtils;
    return obj;
  });
  return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
};
export const resolveSearchStatus = function resolveSearchStatus(response, length) {
  const search_status = response.search_status;
  if ("not_qualified" === search_status) {
    return IntelligenceSearchTypes.IntelligenceSearchStatus.NOT_QUALIFIED;
  } else if ("no_results" === search_status) {
    return IntelligenceSearchTypes.IntelligenceSearchStatus.EMPTY;
  } else if ("success" === search_status) {
    let EMPTY;
    if (length > 0) {
      EMPTY = IntelligenceSearchTypes.IntelligenceSearchStatus.LOADED;
    } else {
      EMPTY = IntelligenceSearchTypes.IntelligenceSearchStatus.EMPTY;
    }
    return EMPTY;
  } else {
    return IntelligenceSearchTypes.IntelligenceSearchStatus.ERROR;
  }
};
export const parseConversationId = function parseConversationId(sourceId) {
  const obj = /\/(\d+)$/;
  const match = obj.exec(sourceId);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (tmp2 == null) {
    tmp2 = sourceId;
  }
  return tmp2;
};
export const getIntelligenceSearchStatus = function getIntelligenceSearchStatus(searchContext, searchResultsQuery) {
  const obj = SearchUtils;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  let status = null;
  if (null != guildIdFromSearchContext) {
    const getStatus = IntelligenceSearchStore.getStatus;
    const tmpResult = SearchUtils;
    status = getStatus(guildIdFromSearchContext, tmpResult.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery));
  }
  return status;
};
export const isIntelligenceSearchActive = function isIntelligenceSearchActive(intelligenceStatus) {
  const tmp3 = intelligenceStatus === IntelligenceSearchTypes.IntelligenceSearchStatus.LOADING || intelligenceStatus === IntelligenceSearchTypes.IntelligenceSearchStatus.LOADED;
  return tmp3;
};
export const isIntelligenceSearchEmptyOrErrored = function isIntelligenceSearchEmptyOrErrored(status) {
  const tmp3 = status === IntelligenceSearchTypes.IntelligenceSearchStatus.EMPTY || status === IntelligenceSearchTypes.IntelligenceSearchStatus.ERROR;
  return tmp3;
};
export const getIntelligenceSearchCitationsCount = function getIntelligenceSearchCitationsCount(searchContext, searchResultsQuery, arg2) {
  const obj = SearchUtils;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  if (null == guildIdFromSearchContext) {
    return 0;
  } else {
    const getAnswer = IntelligenceSearchStore.getAnswer;
    const tmpResult = SearchUtils;
    const answer = getAnswer(guildIdFromSearchContext, tmpResult.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery));
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
      bound = Math.min(num, MAX_PRESENTED_CITATIONS);
    }
    return bound;
  }
};
