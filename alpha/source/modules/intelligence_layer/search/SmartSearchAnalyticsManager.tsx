// Module ID: 13205
// Function ID: 13206
// Name: SmartSearchAnalyticsManager
// Dependencies: [13182, 1087, 568, 13188, 5709, 2]

// Module 13205 (SmartSearchAnalyticsManager)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import Constants from "Constants" /* 1087 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5709 */;
import SearchUtils from "SearchUtils" /* 13188 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 13182 */;
import size from "module_2" /* 2 */;

let set;

function getCitationCompositionProperties(citations) {
  set = new Set();
  const items = [];
  const items1 = [];
  const items2 = [];
  const iter = citations[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let author = nextResult.message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    if (null != id) {
      let addResult = set.add(tmp4);
    }
    let arr = items.push(tmp2.sourceType);
    let arr2 = items1.push(tmp2.channelId);
    let arr3 = items2.push(tmp2.messageId);
    continue;
  }
  return { num_citation_authors: set.size, citation_source_types: items, citation_channel_ids: items1, citation_message_ids: items2 };
}
const AnalyticEvents = Constants.AnalyticEvents;
const re5 = /\s+/;
class SmartSearchAnalyticsManager {
  constructor() {
    const merged = Object.assign({ rowVisibilityState: null, dwellStartTime: null, lastShownAnswerKey: null, lastShownSuggestionKey: null, parentSuggestedSearch: null });
    merged[0] = { isRowViewable: false, isTabActive: false, isAppActive: true, currentAnswer: null };
    return merged;
  }
  setIsRowViewable(isViewable, c2) {
    const obj = { isRowViewable: isViewable };
    this.updateVisibility(obj, c2);
  }
  setIsTabActive(isTabActive, c2) {
    const obj = { isTabActive };
    this.updateVisibility(obj, c2);
  }
  setIsAppActive(stateFromStores, c2) {
    const obj = { isAppActive: stateFromStores };
    this.updateVisibility(obj, c2);
  }
  setAnswer(currentAnswer, c2) {
    const obj = { currentAnswer };
    this.updateVisibility(obj, c2);
  }
  resetSession(c2) {
    this.updateVisibility({ currentAnswer: null }, c2);
    this.lastShownAnswerKey = null;
    this.lastShownSuggestionKey = null;
    this.parentSuggestedSearch = null;
  }
  updateVisibility(arg0, c2) {
    const self = this;
    const rowVisibilityState = this.rowVisibilityState;
    const obj = {};
    const merged = Object.assign(rowVisibilityState);
    const merged1 = Object.assign(arg0);
    if (!shallowEqualDefault(obj, rowVisibilityState)) {
      self.rowVisibilityState = obj;
      let tmp3 = obj.isRowViewable && obj.isTabActive && obj.isAppActive && null != obj.currentAnswer;
      if (null != self.dwellStartTime) {
        if (!tmp3) {
          const _performance = performance;
          self.dwellStartTime = null;
          if (null != rowVisibilityState.currentAnswer) {
            const obj2 = { smartSearchQuery: rowVisibilityState.currentAnswer.smartSearchQuery, dwellDurationMs: tmp10 };
            const result = self.trackSmartSearchAnswerDwelled(obj2, c2);
          }
        } else {
          const currentAnswer = obj.currentAnswer;
          let requestKey;
          if (currentAnswer != null) {
            requestKey = currentAnswer.smartSearchQuery.requestKey;
          }
          const currentAnswer2 = rowVisibilityState.currentAnswer;
          let requestKey1;
          if (currentAnswer2 != null) {
            requestKey1 = currentAnswer2.smartSearchQuery.requestKey;
          }
        }
      }
      if (tmp3) {
        tmp3 = null != obj.currentAnswer;
      }
      if (tmp3) {
        tmp3 = null == self.dwellStartTime;
      }
      if (tmp3) {
        const _performance2 = performance;
        self.dwellStartTime = performance.now();
        const result1 = self.trackSmartSearchAnswerShownDeduped(obj.currentAnswer, c2);
      }
    }
  }
  getContextualProperties(smartSearchQuery, c2) {
    let obj2;
    let tmp2;
    const obj = { search_session_id: c2.getSessionId(smartSearchQuery.searchContext), search_query_id: c2.getQueryId(smartSearchQuery.searchContext), search_location: c2.getLocation(smartSearchQuery.searchContext), guild_id: smartSearchQuery.guildId, channel_id: obj2.getChannelIdFromSearchContext(smartSearchQuery.searchContext), filter_channel_ids: smartSearchQuery.channelIds, num_filter_channels: smartSearchQuery.channelIds.length, parent_suggested_search_id: tmp2 };
    const parentSuggestedSearch = this.parentSuggestedSearch;
    let suggestedSearchText;
    const queryText = smartSearchQuery.queryText;
    obj2 = SearchUtils;
    if (parentSuggestedSearch != null) {
      suggestedSearchText = parentSuggestedSearch.suggestedSearchText;
    }
    tmp2 = null;
    if (queryText === suggestedSearchText) {
      const parentSuggestedSearch2 = this.parentSuggestedSearch;
      let suggestionId;
      if (parentSuggestedSearch2 != null) {
        suggestionId = parentSuggestedSearch2.suggestionId;
      }
      tmp2 = suggestionId;
    }
    return obj;
  }
  trackSmartSearchAnswerReturned(arg0) {
    let answerText;
    let citations;
    let contextualProperties;
    let durationMs;
    let requestId;
    let responseStatus;
    let smartSearchQuery;
    let smartSearchStatus;
    let str2;
    ({ smartSearchQuery, answerText, citations } = arg0);
    const str = smartSearchQuery.queryText;
    ({ requestId, durationMs, responseStatus, smartSearchStatus, contextualProperties } = arg0);
    const trimmed = str.trim();
    const length = trimmed.length;
    const parts = trimmed.split(re5);
    const length2 = parts.filter(Boolean).length;
    const trimmed1 = answerText.trim();
    const length3 = trimmed1.length;
    const parts1 = trimmed1.split(re5);
    const length4 = parts1.filter(Boolean).length;
    const obj = { request_id: requestId, duration_ms: Math.round(durationMs), response_status: responseStatus, smart_search_status: smartSearchStatus, search_query_length: str2.trim().length, search_query_content_length: length, num_query_words: length2, answer_length: length3, num_answer_words: length4, num_citations_returned: citations.length };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_ANSWER_RETURNED = AnalyticEvents.SMART_SEARCH_ANSWER_RETURNED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(contextualProperties);
    const merged1 = Object.assign(getCitationCompositionProperties(citations));
    str2 = smartSearchQuery.searchQueryString;
    trackWithMetadata(SMART_SEARCH_ANSWER_RETURNED, obj);
  }
  trackSuggestedSearchesReturned(suggestedSearches) {
    let contextualProperties;
    let durationMs;
    let requestId;
    let responseStatusCode;
    suggestedSearches = suggestedSearches.suggestedSearches;
    ({ requestId, durationMs, responseStatusCode, contextualProperties } = suggestedSearches);
    const obj = { request_id: requestId, duration_ms: Math.round(durationMs), response_status_code: responseStatusCode, suggested_search_ids: suggestedSearches.map((suggestionId) => suggestionId.suggestionId) };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SUGGESTED_SEARCHES_RETURNED = AnalyticEvents.SUGGESTED_SEARCHES_RETURNED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(contextualProperties);
    trackWithMetadata(SUGGESTED_SEARCHES_RETURNED, obj);
  }
  trackSmartSearchAnswerToggled(arg0, c2) {
    let isCollapsed;
    let smartSearchQuery;
    ({ smartSearchQuery, isCollapsed } = arg0);
    const obj = { is_collapsed: isCollapsed };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_ANSWER_TOGGLED = AnalyticEvents.SMART_SEARCH_ANSWER_TOGGLED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, c2));
    trackWithMetadata(SMART_SEARCH_ANSWER_TOGGLED, obj);
  }
  trackSmartSearchCitationOpened(citation, c2) {
    let index;
    let numCitationsPresented;
    let smartSearchQuery;
    citation = citation.citation;
    ({ smartSearchQuery, index, numCitationsPresented } = citation);
    const obj = { citation_index: index, num_citations_presented: numCitationsPresented };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_CITATION_OPENED = AnalyticEvents.SMART_SEARCH_CITATION_OPENED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, c2));
    ({ sourceId: obj.citation_source_id, sourceType: obj.citation_source_type, channelId: obj.citation_channel_id, messageId: obj.citation_message_id } = citation);
    trackWithMetadata(SMART_SEARCH_CITATION_OPENED, obj);
  }
  trackSuggestedSearchStarted(arg0, c2) {
    let index;
    let numSuggestedSearches;
    let requestId;
    let smartSearchQuery;
    let suggestedSearch;
    let suggestionSource;
    let tmp5;
    ({ smartSearchQuery, suggestedSearch } = arg0);
    ({ suggestionSource, index, numSuggestedSearches } = arg0);
    const stateForScope = SuggestedSearchStore.getStateForScope(smartSearchQuery);
    let num;
    if (stateForScope != null) {
      const suggestedSearches = stateForScope.suggestedSearches;
      num = suggestedSearches.findIndex((suggestionId) => suggestionId.suggestionId === suggestedSearch.suggestionId);
    }
    if (num == null) {
      num = -1;
    }
    const obj = { suggested_search_id: suggestedSearch.suggestionId, shown_index: index, suggestion_source: suggestionSource, num_suggested_searches: numSuggestedSearches, fetch_request_id: requestId, global_index: tmp5 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SUGGESTED_SEARCH_STARTED = AnalyticEvents.SUGGESTED_SEARCH_STARTED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, c2));
    requestId = undefined;
    if (stateForScope != null) {
      requestId = stateForScope.requestId;
    }
    tmp5 = null;
    if (num >= 0) {
      tmp5 = num;
    }
    trackWithMetadata(SUGGESTED_SEARCH_STARTED, obj);
    this.parentSuggestedSearch = suggestedSearch;
  }
  trackSuggestedSearchesShownDeduped(arg0, c2) {
    let smartSearchQuery;
    let suggestedSearches;
    let suggestionSource;
    const self = this;
    ({ smartSearchQuery, suggestedSearches, suggestionSource } = arg0);
    const combined = "" + suggestionSource + ":" + smartSearchQuery.requestKey;
    if (this.lastShownSuggestionKey !== combined) {
      self.lastShownSuggestionKey = combined;
      const obj = { suggested_search_ids: suggestedSearches.map((suggestionId) => suggestionId.suggestionId), suggestion_source: suggestionSource };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SUGGESTED_SEARCHES_SHOWN = AnalyticEvents.SUGGESTED_SEARCHES_SHOWN;
      AppAnalyticsUtilsDefault;
      const merged = Object.assign(self.getContextualProperties(smartSearchQuery, c2));
      trackWithMetadata(SUGGESTED_SEARCHES_SHOWN, obj);
    }
  }
  trackSmartSearchAnswerShownDeduped(currentAnswer, c2) {
    let answerText;
    let presentedCitations;
    let smartSearchQuery;
    let str;
    const self = this;
    ({ smartSearchQuery, answerText, presentedCitations } = currentAnswer);
    if (this.lastShownAnswerKey !== smartSearchQuery.requestKey) {
      self.lastShownAnswerKey = smartSearchQuery.requestKey;
      const trimmed = answerText.trim();
      const length = trimmed.length;
      const parts = trimmed.split(re5);
      const _Boolean = Boolean;
      const length2 = parts.filter(Boolean).length;
      const obj = { num_citations_presented: presentedCitations.length, answer_length: length, num_answer_words: length2, search_query_length: str.trim().length, has_keyword_results: tmp };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const SMART_SEARCH_ANSWER_SHOWN = AnalyticEvents.SMART_SEARCH_ANSWER_SHOWN;
      AppAnalyticsUtilsDefault;
      const merged = Object.assign(self.getContextualProperties(smartSearchQuery, c2));
      const merged1 = Object.assign(getCitationCompositionProperties(presentedCitations));
      str = smartSearchQuery.searchQueryString;
      trackWithMetadata(SMART_SEARCH_ANSWER_SHOWN, obj);
    }
  }
  trackSmartSearchAnswerDwelled(arg0, c2) {
    let dwellDurationMs;
    let smartSearchQuery;
    ({ smartSearchQuery, dwellDurationMs } = arg0);
    const obj = { dwell_duration_ms: Math.round(dwellDurationMs) };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_ANSWER_DWELLED = AnalyticEvents.SMART_SEARCH_ANSWER_DWELLED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, c2));
    trackWithMetadata(SMART_SEARCH_ANSWER_DWELLED, obj);
  }
  trackSmartSearchFeedbackGiven(arg0, SearchSessionAnalyticsManager) {
    let hasPositiveFeedback;
    let smartSearchQuery;
    ({ smartSearchQuery, hasPositiveFeedback } = arg0);
    const obj = { is_positive_feedback: hasPositiveFeedback };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SMART_SEARCH_FEEDBACK_GIVEN = AnalyticEvents.SMART_SEARCH_FEEDBACK_GIVEN;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(this.getContextualProperties(smartSearchQuery, SearchSessionAnalyticsManager));
    trackWithMetadata(SMART_SEARCH_FEEDBACK_GIVEN, obj);
  }
}
const prototype = SmartSearchAnalyticsManager.prototype;
let merged = Object.assign({ rowVisibilityState: null, dwellStartTime: null, lastShownAnswerKey: null, lastShownSuggestionKey: null, parentSuggestedSearch: null });
merged[0] = { isRowViewable: false, isTabActive: false, isAppActive: true, currentAnswer: null };
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchAnalyticsManager.tsx");

export default merged;
