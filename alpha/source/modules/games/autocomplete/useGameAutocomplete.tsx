// Module ID: 9122
// Function ID: 9123
// Name: useGameAutocomplete
// Dependencies: [32, 19, 8672, 1072, 504, 8673, 9123, 9124, 2]
// Exports: useDebouncedGameAutocomplete

// Module 9122 (useGameAutocomplete)
import Constants from "Constants" /* 1072 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8673 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 9123 */;
import GameSearchSession from "GameSearchSession" /* 9124 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8672 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let _slicedToArray = _slicedToArray_mod;
const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId(name, arg1) {
    const GAME_AUTOCOMPLETE = QueryIds.GAME_AUTOCOMPLETE;
    const obj = GameAutocompleteUtils;
    return GAME_AUTOCOMPLETE(obj.normalizeGameAutocompleteQuery(name), arg1);
  },
  get(arg0, arg1) {
    let results = GameAutocompleteStore.getResults(arg0, arg1);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0, arg1) {
    const obj = GameAutocompleteActionCreators;
    return obj.fetchGameAutocomplete(arg0, arg1);
  },
  getIsLoading(arg0, arg1) {
    return GameAutocompleteStore.isFetching(arg0, arg1);
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
export function useDebouncedGameAutocomplete(name, arg1) {
  let c1;
  let c2;
  let data;
  let filterGroup;
  let isLoading;
  let tmp22;
  let tmp4;
  let tmp8;
  let tmp9;
  ({ surface: require, filterGroup } = arg1);
  let query;
  let results2;
  let first;
  const obj = require("GameAutocompleteUtils");
  const result = obj.normalizeGameAutocompleteQuery(name);
  _slicedToArray = result;
  c1 = undefined;
  let tmp2 = _slicedToArray;
  [tmp4, c1] = _slicedToArray(query.useState(result), 2);
  const tmp3 = _slicedToArray(query.useState(result), 2);
  let closure_2 = query.useRef(tmp4);
  let closure_3 = query.useRef(0);
  const items = [result];
  const effect = query.useEffect(() => {
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
  const tmp6 = fetchStore(tmp4, filterGroup);
  ({ data, isLoading } = tmp6);
  const error = tmp6.error;
  [tmp8, tmp9] = _slicedToArray(query.useState(null), 2);
  let tmp10 = null;
  const tmp7 = _slicedToArray(query.useState(null), 2);
  if (null != data) {
    tmp10 = null;
    if (null != tmp4) {
      tmp10 = { query: tmp4, results: data };
      const obj3 = { query: tmp4, results: data };
    }
  }
  if (null == result) {
    if (null != tmp8) {
      tmp9(null);
    }
  } else {
    let tmp11 = null != tmp10;
    if (tmp11) {
      let results1;
      const results = tmp10.results;
      if (tmp8 != null) {
        results1 = tmp8.results;
      }
      tmp11 = results !== results1;
    }
    if (tmp11) {
      tmp9(tmp10);
    }
  }
  let tmp15 = null;
  if (null != result) {
    if (tmp10 == null) {
      tmp10 = tmp8;
    }
    tmp15 = tmp10;
  }
  query = undefined;
  if (tmp15 != null) {
    query = tmp15.query;
  }
  if (query == null) {
    query = null;
  }
  results2 = undefined;
  if (tmp15 != null) {
    results2 = tmp15.results;
  }
  if (results2 == null) {
    results2 = null;
  }
  first = tmp2(obj2.useState(() => {
    const gameSearchSession = new GameSearchSession.GameSearchSession(require, filterGroup);
    return gameSearchSession;
  }), 1)[0];
  const items1 = [first, result];
  const effect1 = obj2.useEffect(() => {
    first.onQuery(c2);
  }, items1);
  const items2 = [first, query, results2];
  const effect2 = obj2.useEffect(() => {
    let tmp2 = null != query;
    const tmp = query;
    if (tmp2) {
      tmp2 = null != results2;
    }
    if (tmp2) {
      first.onResults(tmp, results2);
    }
  }, items2);
  const items3 = [first];
  const effect3 = obj2.useEffect(() => first.end, items3);
  const obj6 = { results: results2, isLoading, error: tmp22, onSelect: null, endSession: null };
  if (!isLoading) {
    isLoading = tmp4 !== result;
  }
  tmp22 = null;
  if (tmp4 === result) {
    tmp22 = error;
  }
  ({ select: obj4.onSelect, end: obj4.endSession } = first);
  return obj6;
}
