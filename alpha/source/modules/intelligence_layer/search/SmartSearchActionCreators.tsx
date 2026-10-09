// Module ID: 12029
// Function ID: 12030
// Name: SmartSearchActionCreators
// Dependencies: [5, 4719, 11994, 11991, 1085, 11993, 12030, 12031, 12014, 584, 1295, 11995, 5431, 2]
// Exports: fetchAnswer, setResultFeedback

// Module 12029 (SmartSearchActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 11994 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12014 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 11991 */;
import size from "module_2" /* 2 */;

let obj = function _fetchAnswer() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let closure_1;
    let closure_8;
    let message_citations;
    let obj10;
    let parentSuggestedSearch;
    let smartSearchQuery;
    let str;
    function hydrateAndFilterCitations(message_citations) {
      let blockedOrIgnoredForMessage;
      const mapped = message_citations.map((sourceId) => {
        let obj2;
        obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: obj2.createMessageRecord(sourceId.message) };
        obj2 = closure_1_0(closure_1_2[12]);
        return obj;
      });
      return mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
    }
    function resolveSearchStatus(search_status, length) {
      if ("not_qualified" === search_status) {
        return closure_1_0(closure_1_2[11]).SmartSearchStatus.NOT_QUALIFIED;
      } else if ("no_results" === search_status) {
        return closure_1_0(closure_1_2[11]).SmartSearchStatus.EMPTY;
      } else if ("success" === search_status) {
        let EMPTY;
        if (length > 0) {
          EMPTY = closure_1_0(closure_1_2[11]).SmartSearchStatus.LOADED;
        } else {
          EMPTY = closure_1_0(closure_1_2[11]).SmartSearchStatus.EMPTY;
        }
        return EMPTY;
      } else {
        return closure_1_0(closure_1_2[11]).SmartSearchStatus.ERROR;
      }
    }
    let closure_0 = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        const obj17 = closure_130_0(closure_130_2[5]);
        smartSearchQuery = obj17.getSmartSearchQuery(c0, c1);
        if (null != smartSearchQuery) {
          const obj18 = closure_130_0(closure_130_2[6]);
          if (obj18.isNlpSearchEnabled(smartSearchQuery.guildId, "fetch_answer")) {
            const queryText = smartSearchQuery.queryText;
            const guildId = smartSearchQuery.guildId;
            const channelIds = smartSearchQuery.channelIds;
            const requestKey = smartSearchQuery.requestKey;
            if (0 !== queryText.length) {
              if (!closure_130_6.hasSuggestions(smartSearchQuery)) {
                const obj5 = closure_130_0(closure_130_2[7]);
                const initialSuggestedSearches = obj5.fetchInitialSuggestedSearches(smartSearchQuery, c2);
              }
              if (!closure_130_5.hasAnswer(guildId, requestKey)) {
                const _performance2 = performance;
                closure_8 = performance.now();
                const obj6 = closure_130_1(closure_130_2[8]);
                parentSuggestedSearch = obj6.getParentSuggestedSearch();
                const obj9 = { type: "SMART_SEARCH_FETCH_START", smartSearchQuery };
                const obj7 = closure_130_1(closure_130_2[9]);
                obj7.dispatch(obj9);
                let c4 = 1;
                const HTTP = closure_130_0(closure_130_2[10]).HTTP;
                const request = { url: closure_130_7.SMART_SEARCH(guildId), body: obj10, oldFormErrors: true, rejectWithError: true };
                const post = HTTP.post;
                obj10 = { query_text: queryText, channel_ids: channelIds };
                let c5 = 3;
                c6 = 1;
                const obj11 = { value: post(request), done: false };
                return obj11;
              }
            }
          }
        }
      }
    } else if (2 === tmp4) {
      let ERROR;
      c4 = 0;
      let status;
      if (smartSearchQuery != null) {
        status = smartSearchQuery.status;
      }
      if (404 === status) {
        ERROR = closure_130_0(closure_130_2[11]).SmartSearchStatus.EMPTY;
      } else {
        ERROR = closure_130_0(closure_130_2[11]).SmartSearchStatus.ERROR;
      }
      let obj2 = closure_130_1(closure_130_2[9]);
      const obj12 = { type: "SMART_SEARCH_FETCH_FAILURE", smartSearchQuery, status: ERROR };
      obj2.dispatch(obj12);
      const obj13 = { smartSearchQuery, requestId: null, durationMs: performance.now() - closure_8, responseStatus: str, smartSearchStatus: ERROR, answerText: "", citations: [], parentSuggestedSearch };
      const _performance = performance;
      const trackSmartSearchAnswerReturned = closure_130_1(closure_130_2[8]).trackSmartSearchAnswerReturned;
      str = "error";
      if (404 === status) {
        str = "no_results";
      }
      const result = trackSmartSearchAnswerReturned(obj13, c2);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_10 = value;
      const citations = hydrateAndFilterCitations(closure_10.body.message_citations);
      const smartSearchStatus = resolveSearchStatus(closure_10.body.search_status, citations.length);
      const obj14 = { type: "SMART_SEARCH_FETCH_SUCCESS", smartSearchQuery, smartSearchStatus, answerText: closure_10.body.answer_text, citations, messages: message_citations.map((message) => message.message) };
      message_citations = closure_10.body.message_citations;
      const dispatch = closure_130_1(closure_130_2[9]).dispatch;
      const tmp82 = closure_130_1(closure_130_2[9]);
      dispatch(obj14);
      const obj15 = { smartSearchQuery, requestId: closure_10.body.request_id, durationMs: performance.now() - closure_8, responseStatus: closure_10.body.search_status, smartSearchStatus, answerText: closure_10.body.answer_text, citations, parentSuggestedSearch };
      const _performance3 = performance;
      const trackSmartSearchAnswerReturned2 = closure_130_1(closure_130_2[8]).trackSmartSearchAnswerReturned;
      const result1 = trackSmartSearchAnswerReturned2(obj15, c2);
      c4 = 0;
    }
    await "IconComponent";
    let closure_2 = tmp;
    ({ searchContext: c0, searchQueryString: c1, SearchSessionAnalyticsManager: c2 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
SmartSearchResultsStoreDefault;
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  return obj(...arguments);
};
export const setResultFeedback = function setResultFeedback(SearchSessionAnalyticsManager) {
  let hasPositiveFeedback;
  let smartSearchQuery;
  ({ smartSearchQuery, hasPositiveFeedback } = SearchSessionAnalyticsManager);
  SearchSessionAnalyticsManager = SearchSessionAnalyticsManager.SearchSessionAnalyticsManager;
  obj = DispatcherDefault;
  obj.dispatch({ type: "SMART_SEARCH_SET_RESULT_FEEDBACK", smartSearchQuery, hasPositiveFeedback });
  const obj2 = SmartSearchAnalyticsManagerDefault;
  const result = obj2.trackSmartSearchFeedbackGiven({ smartSearchQuery, hasPositiveFeedback }, SearchSessionAnalyticsManager);
};
