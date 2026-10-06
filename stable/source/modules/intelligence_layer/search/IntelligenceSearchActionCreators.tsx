// Module ID: 11750
// Function ID: 11751
// Name: IntelligenceSearchActionCreators
// Dependencies: [5, 1378, 11739, 1086, 7307, 11742, 11716, 11751, 585, 1283, 11741, 2]
// Exports: fetchAnswer

// Module 11750 (IntelligenceSearchActionCreators)
import Constants from "Constants" /* 1086 */;
import SearchConstants from "SearchConstants" /* 7307 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1378 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11739 */;
import size from "module_2" /* 2 */;

let c5;

let obj = function _fetchAnswer() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let closure_1;
    let closure_3;
    let guildId;
    let message_citations;
    let obj10;
    let requestKey;
    let tmp60;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        const obj16 = closure_130_0(closure_130_2[5]);
        if (obj16.isSupportedSearchContext(c0)) {
          const obj4 = closure_130_0(closure_130_2[6]);
          guildId = obj4.getGuildIdFromSearchContext(c0);
          if (null != guildId) {
            const obj17 = closure_130_0(closure_130_2[7]);
            if (obj17.isNlpSearchEnabled(guildId, "fetch_answer")) {
              const obj5 = closure_130_0(closure_130_2[5]);
              tmp60 = obj5.getIntelligenceSearchQuery(c1);
              if (null != tmp60) {
                const obj18 = closure_130_0(closure_130_2[6]);
                requestKey = obj18.getSearchTabFetchId(c0, closure_130_7.MESSAGES, c1);
                if (!closure_130_5.hasAnswer(guildId, requestKey)) {
                  const currentUser = closure_130_4.getCurrentUser();
                  let isStaffResult;
                  if (currentUser != null) {
                    isStaffResult = currentUser.isStaff();
                  }
                  let str = "";
                  if (true === isStaffResult) {
                    str = closure_130_8;
                  }
                  const obj9 = { type: "INTELLIGENCE_SEARCH_FETCH_START", requestKey, guildId, queryText: tmp60.queryText, channelIds: tmp60.channelIds };
                  const obj7 = closure_130_1(closure_130_2[8]);
                  obj7.dispatch(obj9);
                  let c4 = 1;
                  const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                  const request = { url: closure_130_6.INTELLIGENCE_LAYER_SEARCH(guildId), body: obj10, oldFormErrors: true, rejectWithError: true };
                  const post = HTTP.post;
                  obj10 = { query_text: tmp60.queryText, channel_ids: tmp60.channelIds, extra_params_json: str };
                  c5 = 3;
                  c6 = 1;
                  const obj11 = { value: post(request), done: false };
                  return obj11;
                }
              }
            }
          }
        }
      }
    } else if (2 === c5) {
      let ERROR;
      c4 = 0;
      let status;
      if (tmp60 != null) {
        status = tmp60.status;
      }
      if (404 === status) {
        ERROR = closure_130_0(closure_130_2[10]).IntelligenceSearchStatus.EMPTY;
      } else {
        ERROR = closure_130_0(closure_130_2[10]).IntelligenceSearchStatus.ERROR;
      }
      const obj12 = { type: "INTELLIGENCE_SEARCH_FETCH_FAILURE", requestKey, guildId, status: ERROR, queryText: tmp60.queryText, channelIds: tmp60.channelIds };
      const obj2 = closure_130_1(closure_130_2[8]);
      obj2.dispatch(obj12);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_6 = value;
      const obj13 = { type: "INTELLIGENCE_SEARCH_FETCH_SUCCESS", requestKey, guildId, response: closure_6.body, messages: message_citations.map((message) => message.message), channelIds: tmp60.channelIds };
      message_citations = closure_6.body.message_citations;
      const dispatch = closure_130_1(closure_130_2[8]).dispatch;
      const tmp71 = closure_130_1(closure_130_2[8]);
      dispatch(obj13);
      c4 = 0;
    }
    await "IconComponent";
    guildId = tmp;
    ({ searchContext: c0, searchQueryString: c1 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const SearchTabs = SearchConstants.SearchTabs;
let closure_8 = JSON.stringify({ arbiter: { enabled: false } });
const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  return obj(...arguments);
};
