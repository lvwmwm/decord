// Module ID: 18757
// Function ID: 18758
// Name: useInterestGameSearch
// Dependencies: [5, 32, 19, 8751, 9224, 8752, 9223, 9699, 9222, 2]
// Exports: default

// Module 18757 (useInterestGameSearch)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8752 */;
import GameSearchSession from "GameSearchSession" /* 9223 */;
import GameSearchFilterGroup from "GameSearchFilterGroup" /* 9224 */;
import GameSearchSurfaces from "GameSearchSurfaces" /* 9699 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8751 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, dependencyMap, results;

let closure_6 = [];
const DEFAULT = GameSearchFilterGroup.GameSearchFilterGroup.DEFAULT;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestGameSearch.tsx");

export default function useInterestGameSearch(name) {
  let closure_1;
  let error;
  let tmp4;
  let tmp5;
  let obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(name);
  require = result;
  let obj2 = react;
  const tmp2 = _slicedToArray;
  const tmp3 = _slicedToArray(react.useState({ query: null, results: [], error: null }), 2);
  [tmp4, tmp5] = tmp3;
  dependencyMap = tmp5;
  const tmp6 = null == result && null != tmp4.query;
  if (tmp6) {
    let obj3 = { query: null, results: [], error: null };
    tmp5(obj3);
  }
  const first = tmp2(obj2.useState(() => {
    const gameSearchSession = new GameSearchSession.GameSearchSession(GameSearchSurfaces.GameSearchSurface.INTEREST_PICKER, DEFAULT);
    return gameSearchSession;
  }), 1)[0];
  const items = [first];
  const effect = obj2.useEffect(() => first.end, items);
  const items1 = [result, first];
  const effect1 = obj2.useEffect(function() {
    let abortController;
    first.onQuery(abortController);
    if (null != abortController) {
      const _AbortController = AbortController;
      const self = this;
      const self2 = this;
      abortController = new AbortController();
      const tmp4 = abortController;
      let closure_0 = first(function*(arg0, value) {
        let obj4;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c4;
          try {
            let error;
            let query;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                error = tmp4;
                query = undefined;
                c4 = 1;
                if (null == GameAutocompleteStore.getResults(query, DEFAULT)) {
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj4.fetchGameAutocomplete(query, DEFAULT, query.signal), done: false };
                  obj4 = abortController(error[8]);
                  return obj5;
                } else if (query.signal.aborted) {
                  c4 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  results = GameAutocompleteStore.getResults(query, DEFAULT);
                  query = results;
                  if (results == null) {
                    query = [];
                  }
                  first.onResults(query, query);
                  const obj6 = { query, results: query, error: null };
                  closure_2_1(obj6);
                  c4 = 0;
                }
              }
            } else if (1 === c5) {
              c4 = 0;
              error = closure_3;
              if (!query.signal.aborted) {
                const obj7 = { query, results: [], error };
                closure_2_1(obj7);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } catch (tmp39) {
            closure_3 = tmp39;
            if (0 === c4) {
              c6 = 3;
              throw tmp39;
            } else {
              c5 = 1;
            }
          }
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(function load() {
        return closure_0(...arguments);
      }, 200);
      return () => {
        clearTimeout(closure_1);
        abortController.abort();
      };
    }
  }, items1);
  let obj4 = { results: null == result ? closure_6 : tmp4.results, isLoading: null != result && tmp4.query !== result, error, onSelect: first.select };
  error = null;
  if (tmp4.query === result) {
    error = tmp4.error;
  }
  return obj4;
};
export const INTEREST_SEARCH_DEBOUNCE_MS = 200;
