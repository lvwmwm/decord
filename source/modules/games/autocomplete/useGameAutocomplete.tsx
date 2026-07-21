// Module ID: 7095
// Function ID: 57050
// Name: fetchStore
// Dependencies: []
// Exports: useDebouncedGameAutocomplete

// Module 7095 (fetchStore)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[2]);
const QueryIds = arg1(dependencyMap[3]).QueryIds;
let obj = arg1(dependencyMap[4]);
obj = {
  getQueryId(toLocaleLowerCase) {
    return QueryIds.GAME_AUTOCOMPLETE(arg1(dependencyMap[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase));
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
    return arg1(dependencyMap[6]).fetchGameAutocomplete(arg0);
  },
  getIsLoading(wishlistId) {
    return importDefaultResult.isFetching(wishlistId);
  },
  retryConfig: obj,
  staleAfter: 3600,
  failureStaleAfter: 60
};
obj = {
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
const fetchStore = obj.createFetchStore(importDefaultResult, obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = function useDebouncedGameAutocomplete(toLocaleLowerCase) {
  let data;
  let isLoading;
  let obj = arg1(dependencyMap[5]);
  const result = obj.normalizeGameAutocompleteQuery(toLocaleLowerCase);
  const tmp2 = function useDebouncedQueryValue(result) {
    const tmp = callback(React.useState(result), 2);
    const first = tmp[0];
    let closure_1 = tmp[1];
    const callback = React.useRef(first);
    const React = React.useRef(0);
    const items = [result];
    const effect = React.useEffect(() => {
      function emit() {
        closure_3.current = Date.now();
        closure_2.current = closure_0;
        callback(closure_0);
      }
      if (timeout !== ref.current) {
        if (null != timeout) {
          if (null != ref.current) {
            const _Date = Date;
            const _Math = Math;
            const _Math2 = Math;
            const _setTimeout = setTimeout;
            const timeout = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
            return () => {
              clearTimeout(closure_0);
            };
          }
        }
        emit();
      }
    }, items);
    return first;
  }(result);
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
    const tmp7 = null != data && data !== first;
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
