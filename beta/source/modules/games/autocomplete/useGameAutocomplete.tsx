// Module ID: 8367
// Function ID: 8368
// Name: useGameAutocomplete
// Dependencies: [32, 19, 5420, 1074, 504, 5421, 8368, 2]
// Exports: useDebouncedGameAutocomplete

// Module 8367 (useGameAutocomplete)
import Constants from "Constants" /* 1074 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5421 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 8368 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5420 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId(query) {
    const GAME_AUTOCOMPLETE = QueryIds.GAME_AUTOCOMPLETE;
    const obj = GameAutocompleteUtils;
    return GAME_AUTOCOMPLETE(obj.normalizeGameAutocompleteQuery(query));
  },
  get(arg0) {
    let results = GameAutocompleteStore.getResults(arg0);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0) {
    const obj = GameAutocompleteActionCreators;
    return obj.fetchGameAutocomplete(arg0);
  },
  getIsLoading(arg0) {
    return GameAutocompleteStore.isFetching(arg0);
  },
  retryConfig: {
    retryableErrors: function isRetryableError(status) {
      status = status.status;
      let tmp = null != status;
      if (tmp) {
        let tmp2 = 429 === status;
        if (!tmp2) {
          tmp2 = status >= 500 && 503 !== status;
          const tmp3 = status >= 500 && 503 !== status;
        }
        tmp = tmp2;
      }
      return tmp;
    }
  },
  staleAfter: 3600,
  failureStaleAfter: 60
};
const fetchStore = get_initialized.createFetchStore(GameAutocompleteStore, obj);
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = function useDebouncedGameAutocomplete(query) {
  let c1;
  let data;
  let isLoading;
  let tmp13;
  let tmp3;
  let tmp7;
  let tmp8;
  const obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(query);
  c1 = undefined;
  [tmp3, c1] = _slicedToArray(react.useState(result), 2);
  const tmp2 = _slicedToArray(react.useState(result), 2);
  let closure_2 = react.useRef(tmp3);
  let closure_3 = react.useRef(0);
  const items = [result];
  const effect = react.useEffect(() => {
    let current;
    if (current !== ref.current) {
      if (null != current) {
        if (null != ref.current) {
          const _Date2 = Date;
          function emit() {
            ref2.current = Date.now();
            ref.current = current;
            _undefined(current);
          }
          const _Math = Math;
          const _Math2 = Math;
          const _setTimeout = setTimeout;
          current = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
          return () => {
            clearTimeout(current);
          };
        }
      }
      const _Date = Date;
      ref2.current = Date.now();
      ref.current = current;
      _undefined(current);
    }
  }, items);
  const tmp5 = fetchStore(tmp3);
  ({ data, isLoading } = tmp5);
  const error = tmp5.error;
  [tmp7, tmp8] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  if (null == result) {
    if (null != tmp7) {
      tmp8(null);
    }
  } else {
    const tmp9 = null != data && data !== tmp7;
    if (tmp9) {
      tmp8(data);
    }
  }
  let tmp12 = null;
  if (null != result) {
    if (data == null) {
      data = tmp7;
    }
    tmp12 = data;
  }
  const obj2 = { results: tmp12, isLoading, error: tmp13 };
  if (!isLoading) {
    isLoading = tmp3 !== result;
  }
  tmp13 = null;
  if (tmp3 === result) {
    tmp13 = error;
  }
  return obj2;
};
