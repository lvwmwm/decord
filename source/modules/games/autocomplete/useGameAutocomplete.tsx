// Module ID: 7101
// Function ID: 57107
// Name: fetchStore
// Dependencies: [57, 31, 7091, 653, 566, 7092, 7102, 2]
// Exports: useDebouncedGameAutocomplete

// Module 7101 (fetchStore)
import _slicedToArray from "_slicedToArray";
import result from "result";
import importDefaultResult from "_isNativeReflectConstruct";
import { QueryIds } from "ME";
import initialize from "initialize";

const require = arg1;
initialize = {
  getQueryId(toLocaleLowerCase) {
    return QueryIds.GAME_AUTOCOMPLETE(require(7092) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(toLocaleLowerCase));
  },
  get(arg0) {
    const results = importDefaultResult.getResults(arg0);
    let tmp2 = null;
    if (null != results) {
      tmp2 = results;
    }
    return tmp2;
  },
  load(arg0) {
    return require(7102) /* _fetchGameAutocomplete */.fetchGameAutocomplete(arg0);
  },
  getIsLoading(wishlistId) {
    return importDefaultResult.isFetching(wishlistId);
  },
  retryConfig: initialize,
  staleAfter: 3600,
  failureStaleAfter: 60
};
initialize = {
  retryableErrors: function isRetryableError(status) {
    status = status.status;
    let tmp = null != status;
    if (tmp) {
      let tmp2 = 429 === status;
      if (!tmp2) {
        let tmp3 = status >= 500;
        if (tmp3) {
          tmp3 = 503 !== status;
        }
        tmp2 = tmp3;
      }
      tmp = tmp2;
    }
    return tmp;
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = function useDebouncedGameAutocomplete(toLocaleLowerCase) {
  let data;
  let isLoading;
  let obj = require(7092) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */;
  const result = obj.normalizeGameAutocompleteQuery(toLocaleLowerCase);
  const tmp2 = (function useDebouncedQueryValue(result) {
    let closure_0 = result;
    const tmp = outer1_2(outer1_3.useState(result), 2);
    const first = tmp[0];
    let closure_1 = tmp[1];
    let _slicedToArray = outer1_3.useRef(first);
    let result = outer1_3.useRef(0);
    const items = [result];
    const effect = outer1_3.useEffect(() => {
      function emit() {
        outer1_3.current = Date.now();
        outer1_2.current = closure_0;
        outer1_1(closure_0);
      }
      if (timeout !== ref.current) {
        if (null != timeout) {
          if (null != ref.current) {
            const _Date = Date;
            const _Math = Math;
            const _Math2 = Math;
            const _setTimeout = setTimeout;
            timeout = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
            return () => {
              clearTimeout(closure_0);
            };
          }
        }
        emit();
      }
    }, items);
    return first;
  })(result);
  const tmp3 = fetchStore(tmp2);
  ({ data, isLoading } = tmp3);
  const tmp4 = callback(React.useState(null), 2);
  let first = tmp4[0];
  if (null == result) {
    if (null != first) {
      tmp6(null);
    }
  } else {
    if (tmp7) {
      tmp6(data);
    }
    tmp7 = null != data && data !== first;
  }
  obj = {};
  let tmp10 = null;
  if (null != result) {
    if (null != data) {
      first = data;
    }
    tmp10 = first;
  }
  obj.results = tmp10;
  if (!isLoading) {
    isLoading = tmp2 !== result;
  }
  obj.isLoading = isLoading;
  let error = null;
  if (tmp2 === result) {
    error = tmp3.error;
  }
  obj.error = error;
  return obj;
};
