// Module ID: 12006
// Function ID: 12007
// Name: SuggestedSearchActionCreators
// Dependencies: [5, 12004, 11988, 1085, 569, 12005, 584, 1282, 2]
// Exports: advanceSuggestedSearches, fetchInitialSuggestedSearches

// Module 12006 (SuggestedSearchActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SmartSearchExperiments from "SmartSearchExperiments" /* 12005 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12004 */;
import SmartSearchConstants from "SmartSearchConstants" /* 11988 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let body, c2, c3, closure_4;

let SUGGESTED_SEARCHES_RETRY_MAX_MS;
let SUGGESTED_SEARCHES_RETRY_MIN_MS;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function canFetchSuggestedSearches(guildId, channelIds) {
  obj = SmartSearchExperiments;
  let isNlpSearchEnabledResult = obj.isNlpSearchEnabled(guildId, "suggested_searches");
  if (isNlpSearchEnabledResult) {
    const result = SuggestedSearchStore.isLoadingSuggestedSearches(guildId, channelIds);
    isNlpSearchEnabledResult = !result && !closure_8.pending;
    const tmp5 = !result && !closure_8.pending;
  }
  return isNlpSearchEnabledResult;
}
function performSuggestedSearchesFetch() {
  return obj(...arguments);
}
let obj = function _performSuggestedSearchesFetch() {
  obj = _asyncToGenerator(async (guildId, arg1, refillWindowSize) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let obj7;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              body = tmp4;
              refillWindowSize = undefined;
              let tmp29 = closure_2;
              if (closure_2 === undefined) {
                tmp29 = null;
              }
              refillWindowSize = tmp29;
              body = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              const obj6 = { type: "SUGGESTED_SEARCHES_FETCH_START", guildId, channelIds };
              const obj10 = closure_132_1(closure_132_2[6]);
              obj10.dispatch(obj6);
              c5 = 1;
              const HTTP = closure_132_0(closure_132_2[7]).HTTP;
              const request = { url: closure_132_6.SUGGESTED_SEARCHES(guildId), body: obj7, oldFormErrors: true, rejectWithError: true };
              const post = HTTP.post;
              c6 = 3;
              c7 = 1;
              obj7 = { channel_ids: channelIds, limit: closure_132_5 };
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else {
            if (2 === c6) {
              c5 = 0;
              closure_132_8.fail(closure_132_7);
              const obj9 = { type: "SUGGESTED_SEARCHES_FETCH_FAILURE", guildId, channelIds, refillWindowSize };
              const obj4 = closure_132_1(closure_132_2[6]);
              obj4.dispatch(obj9);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = value;
              closure_132_8.succeed();
              const obj12 = { type: "SUGGESTED_SEARCHES_FETCH_SUCCESS", guildId, channelIds, refillWindowSize, response: body.body };
              obj = closure_132_1(closure_132_2[6]);
              obj.dispatch(obj12);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp30) {
          if (0 === c5) {
            c7 = 3;
            throw tmp30;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchInitialSuggestedSearches() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (!SuggestedSearchStore.hasSuggestions(closure_0, closure_1)) {
            if (canFetchSuggestedSearches(closure_0, closure_1)) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: performSuggestedSearchesFetch(closure_0, closure_1), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
({ SUGGESTED_SEARCHES_REQUEST_LIMIT: hasOwnProperty, SUGGESTED_SEARCHES_RETRY_MIN_MS, SUGGESTED_SEARCHES_RETRY_MAX_MS } = SmartSearchConstants);
({ Endpoints: metroRequire, NOOP: metroImportDefault } = Constants);
const tmp4 = new BackoffDefault(SUGGESTED_SEARCHES_RETRY_MIN_MS, SUGGESTED_SEARCHES_RETRY_MAX_MS, true);
let closure_8 = tmp4;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SuggestedSearchActionCreators.tsx");

export const fetchInitialSuggestedSearches = function fetchInitialSuggestedSearches() {
  return obj(...arguments);
};
export const advanceSuggestedSearches = function advanceSuggestedSearches(guildId, channelIds, windowSize) {
  if (!SuggestedSearchStore.isLoadingSuggestedSearches(guildId, channelIds)) {
    if (SuggestedSearchStore.willExhaustSuggestedSearches(guildId, channelIds, windowSize)) {
      const obj2 = SmartSearchExperiments;
      let isNlpSearchEnabledResult = obj2.isNlpSearchEnabled(guildId, "suggested_searches");
      if (isNlpSearchEnabledResult) {
        const result = obj.isLoadingSuggestedSearches(guildId, channelIds);
        isNlpSearchEnabledResult = !result && !closure_8.pending;
        const tmp6 = !result && !closure_8.pending;
      }
      if (isNlpSearchEnabledResult) {
        performSuggestedSearchesFetch(guildId, channelIds, windowSize);
      }
    }
    const obj4 = { type: "SUGGESTED_SEARCH_ADVANCE", guildId, channelIds, windowSize };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
  }
};
