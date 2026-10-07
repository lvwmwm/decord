// Module ID: 12003
// Function ID: 12004
// Name: SmartSearchActionCreators
// Dependencies: [5, 1377, 11987, 12004, 1085, 11997, 12005, 12006, 584, 1282, 11989, 2]
// Exports: fetchAnswer

// Module 12003 (SmartSearchActionCreators)
import Constants from "Constants" /* 1085 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 11987 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12004 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _fetchAnswer() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let closure_2;
    let message_citations;
    let obj9;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let status;
      try {
        let tmp;
        let queryText;
        let guildId;
        let channelIds;
        let requestKey;
        let str;
        let ERROR;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1 = tmp4;
            c0 = undefined;
            c1 = undefined;
            ({ searchContext: c0, searchQueryString: c1 } = closure_0);
            tmp = undefined;
            queryText = undefined;
            guildId = undefined;
            channelIds = undefined;
            requestKey = undefined;
            str = undefined;
            closure_8 = undefined;
            status = undefined;
            ERROR = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj15 = closure_130_0(closure_130_2[5]);
              tmp = obj15.getSmartSearchQuery(c0, c1);
              if (null != tmp) {
                const obj16 = closure_130_0(closure_130_2[6]);
                if (obj16.isNlpSearchEnabled(tmp.guildId, "fetch_answer")) {
                  queryText = tmp.queryText;
                  guildId = tmp.guildId;
                  channelIds = tmp.channelIds;
                  requestKey = tmp.requestKey;
                  if (0 !== queryText.length) {
                    if (!closure_130_6.hasSuggestions(guildId, channelIds)) {
                      const obj4 = closure_130_0(closure_130_2[7]);
                      const initialSuggestedSearches = obj4.fetchInitialSuggestedSearches(guildId, channelIds);
                    }
                    if (!closure_130_5.hasAnswer(guildId, requestKey)) {
                      const currentUser = closure_130_4.getCurrentUser();
                      let isStaffResult;
                      if (currentUser != null) {
                        isStaffResult = currentUser.isStaff();
                      }
                      str = "";
                      if (true === isStaffResult) {
                        str = closure_130_8;
                      }
                      const obj8 = { type: "SMART_SEARCH_FETCH_START", requestKey, guildId, queryText, channelIds };
                      const obj6 = closure_130_1(closure_130_2[8]);
                      obj6.dispatch(obj8);
                      c4 = 1;
                      const HTTP = closure_130_0(closure_130_2[9]).HTTP;
                      const request = { url: closure_130_7.SMART_SEARCH(guildId), body: obj9, oldFormErrors: true, rejectWithError: true };
                      const post = HTTP.post;
                      obj9 = { query_text: queryText, channel_ids: channelIds, extra_params_json: str };
                      c5 = 3;
                      c6 = 1;
                      const obj10 = { value: post(request), done: false };
                      return obj10;
                    }
                  }
                }
              }
            }
          } else if (2 === c5) {
            c4 = 0;
            status = undefined;
            if (status != null) {
              status = status.status;
            }
            if (404 === status) {
              ERROR = closure_130_0(closure_130_2[10]).SmartSearchStatus.EMPTY;
            } else {
              ERROR = closure_130_0(closure_130_2[10]).SmartSearchStatus.ERROR;
            }
            const obj11 = { type: "SMART_SEARCH_FETCH_FAILURE", requestKey, guildId, status: ERROR, queryText, channelIds };
            const obj2 = closure_130_1(closure_130_2[8]);
            obj2.dispatch(obj11);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_8 = value;
            const obj12 = { type: "SMART_SEARCH_FETCH_SUCCESS", requestKey, guildId, response: closure_8.body, messages: message_citations.map((message) => message.message), channelIds };
            message_citations = closure_8.body.message_citations;
            const dispatch = closure_130_1(closure_130_2[8]).dispatch;
            const tmp77 = closure_130_1(closure_130_2[8]);
            dispatch(obj12);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp66) {
        status = tmp66;
        if (0 === c4) {
          c6 = 3;
          throw tmp66;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
SmartSearchResultsStoreDefault;
const Endpoints = Constants.Endpoints;
let closure_8 = JSON.stringify({ arbiter: { enabled: false } });
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchActionCreators.tsx");

export const fetchAnswer = function fetchAnswer() {
  return obj(...arguments);
};
