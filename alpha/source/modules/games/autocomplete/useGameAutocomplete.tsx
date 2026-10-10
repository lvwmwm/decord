// Module ID: 8706
// Function ID: 8707
// Name: useGameAutocomplete
// Dependencies: [32, 19, 8235, 1085, 504, 8236, 8707, 558, 576, 8708, 2]

// Module 8706 (useGameAutocomplete)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8236 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 8707 */;
import GameSearchSession from "GameSearchSession" /* 8708 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8235 */;
import get_initialized from "get initialized" /* 504 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDebouncedQueryValue(arg0) {
  let closure_129_1;
  let tmp3;
  let tmp4;
  let tmp5;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, closure_129_1] = _slicedToArray(react.useState(arg0), 2);
  const tmp2 = _slicedToArray(react.useState(arg0), 2);
  let closure_2 = react.useRef(tmp3);
  let closure_3 = react.useRef(0);
  const obj2 = react;
  if (cResult[0] !== arg0) {
    const fn = function n() {
      let current;
      if (current !== ref.current) {
        if (null != current) {
          if (null != ref.current) {
            const _Date2 = Date;
            function emit() {
              ref2.current = Date.now();
              ref.current = current;
              closure_1_1(current);
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
        closure_1(current);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  return tmp3;
}) : (function useDebouncedQueryValue(arg0) {
  let closure_129_1;
  let tmp2;
  let closure_0 = arg0;
  const tmp = _slicedToArray(react.useState(arg0), 2);
  [tmp2, closure_129_1] = tmp;
  let closure_2 = react.useRef(tmp2);
  let closure_3 = react.useRef(0);
  const items = [arg0];
  const effect = react.useEffect(() => {
    let current;
    if (current !== ref.current) {
      if (null != current) {
        if (null != ref.current) {
          const _Date2 = Date;
          function emit() {
            ref2.current = Date.now();
            ref.current = current;
            closure_1_1(current);
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
      closure_1(current);
    }
  }, items);
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDebouncedGameAutocomplete(name, surface) {
  let closure_2;
  let data;
  let filterGroup;
  let isLoading;
  let query;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp = surface;
  let tmp2 = filterGroup;
  const obj = surface(filterGroup[8]);
  const cResult = obj.c(27);
  surface = surface.surface;
  filterGroup = surface.filterGroup;
  if (cResult[0] !== name) {
    const tmpResult = tmp(tmp2[5]);
    const result = tmpResult.normalizeGameAutocompleteQuery(name);
    cResult[0] = name;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  _slicedToArray = tmp4;
  const tmp6 = closure_7(tmp4);
  ({ data, isLoading } = fetchStore(tmp6, filterGroup));
  fetchStore(tmp6, filterGroup);
  [tmp10, tmp11] = query.useState(null);
  _slicedToArray(query.useState(null), 2);
  const tmp8 = _slicedToArray;
  if (cResult[2] === data) {
    let tmp12;
    if (cResult[3] === tmp6) {
      tmp12 = cResult[4];
    }
    if (null == tmp4) {
      if (null != tmp10) {
        tmp11(null);
      }
    } else {
      let tmp15 = null != tmp12;
      if (tmp15) {
        let results1;
        const results = tmp12.results;
        if (tmp10 != null) {
          results1 = tmp10.results;
        }
        tmp15 = results !== results1;
      }
      if (tmp15) {
        tmp11(tmp12);
      }
    }
    let tmp19 = null;
    if (null != tmp4) {
      if (tmp12 == null) {
        tmp12 = tmp10;
      }
      tmp19 = tmp12;
    }
    query = undefined;
    if (tmp19 != null) {
      query = tmp19.query;
    }
    if (query == null) {
      query = null;
    }
    let results2;
    if (tmp19 != null) {
      results2 = tmp19.results;
    }
    if (results2 == null) {
      results2 = null;
    }
    if (cResult[5] === filterGroup) {
      let tmp22;
      if (cResult[6] === surface) {
        tmp22 = cResult[7];
      }
      const first = tmp8(obj3.useState(tmp22), 1)[0];
      if (cResult[8] === tmp4) {
        let tmp24;
        let tmp25;
        if (cResult[9] === first) {
          tmp24 = cResult[10];
          tmp25 = cResult[11];
        }
        const effect = obj3.useEffect(tmp24, tmp25);
        if (cResult[12] === query) {
          if (cResult[13] === results2) {
            let tmp27;
            let tmp28;
            let tmp30;
            if (cResult[14] === first) {
              tmp27 = cResult[15];
              tmp28 = cResult[16];
            }
            const effect1 = obj3.useEffect(tmp27, tmp28);
            if (cResult[17] !== first.end) {
              class P {
                constructor() {
                  return first.end;
                }
              }
              cResult[17] = first.end;
              class U {
                constructor() {
                  let tmp2 = null != query;
                  const tmp = query;
                  if (tmp2) {
                    tmp2 = null != results2;
                  }
                  if (tmp2) {
                    first.onResults(tmp, results2);
                  }
                }
              }
              cResult[18] = P;
              tmp30 = P;
            } else {
              class P {
                constructor() {
                  return first.end;
                }
              }
            }
            class U {
              constructor() {
                let tmp2 = null != query;
                const tmp = query;
                if (tmp2) {
                  tmp2 = null != results2;
                }
                if (tmp2) {
                  first.onResults(tmp, results2);
                }
              }
            }
            const effect2 = obj3.useEffect(tmp30, tmp31);
            if (!isLoading) {
              class P {
                constructor() {
                  return first.end;
                }
              }
            }
            if (tmp6 === tmp4) {
              class P {
                constructor() {
                  return first.end;
                }
              }
            }
            if (cResult[21] === results2) {
              class P {
                constructor() {
                  return first.end;
                }
              }
            }
            const obj2 = { results: results2, isLoading, error: null, onSelect: null, endSession: first.end };
            class O {
              constructor() {
                const gameSearchSession = new GameSearchSession.GameSearchSession(surface, filterGroup);
                return gameSearchSession;
              }
            }
            cResult[21] = results2;
            cResult[22] = first.end;
            cResult[23] = first.select;
            cResult[24] = isLoading;
            cResult[25] = null;
            cResult[26] = obj2;
          }
        }
        class U {
          constructor() {
            let tmp2 = null != query;
            const tmp = query;
            if (tmp2) {
              tmp2 = null != results2;
            }
            if (tmp2) {
              first.onResults(tmp, results2);
            }
          }
        }
        const items = [first, query, results2];
        cResult[12] = query;
        cResult[13] = results2;
        class O {
          constructor() {
            const gameSearchSession = new GameSearchSession.GameSearchSession(surface, filterGroup);
            return gameSearchSession;
          }
        }
        cResult[15] = U;
        cResult[16] = items;
        tmp28 = items;
        tmp27 = U;
      }
      const fn = function w() {
        first.onQuery(closure_2);
      };
      const items1 = [first, tmp4];
      cResult[8] = tmp4;
      cResult[9] = first;
      class O {
        constructor() {
          const gameSearchSession = new GameSearchSession.GameSearchSession(surface, filterGroup);
          return gameSearchSession;
        }
      }
      cResult[10] = fn;
      cResult[11] = items1;
      tmp25 = items1;
      tmp24 = fn;
    }
    class O {
      constructor() {
        const gameSearchSession = new GameSearchSession.GameSearchSession(surface, filterGroup);
        return gameSearchSession;
      }
    }
    cResult[5] = filterGroup;
    cResult[6] = surface;
    cResult[7] = O;
    tmp22 = O;
  }
  if (null != data) {
    class P {
      constructor() {
        return first.end;
      }
    }
    if (null != tmp6) {
      class P {
        constructor() {
          return first.end;
        }
      }
      tmp14[0] = tmp6;
      tmp14[1] = data;
      class U {
        constructor() {
          let tmp2 = null != query;
          const tmp = query;
          if (tmp2) {
            tmp2 = null != results2;
          }
          if (tmp2) {
            first.onResults(tmp, results2);
          }
        }
      }
    }
  }
  cResult[2] = data;
  cResult[3] = tmp6;
  cResult[4] = null;
  tmp12 = tmp13;
}) : (function useDebouncedGameAutocomplete(name, arg1) {
  let c2;
  let data;
  let filterGroup;
  let isLoading;
  let require;
  let tmp20;
  let tmp6;
  let tmp7;
  ({ surface: require, filterGroup } = arg1);
  let query;
  let results2;
  let first;
  const obj = require("GameAutocompleteUtils");
  const result = obj.normalizeGameAutocompleteQuery(name);
  _slicedToArray = result;
  let tmp2 = closure_7(result);
  const tmp3 = fetchStore(tmp2, filterGroup);
  ({ data, isLoading } = tmp3);
  const error = tmp3.error;
  [tmp6, tmp7] = _slicedToArray(query.useState(null), 2);
  let tmp8 = null;
  const tmp4 = _slicedToArray;
  const tmp5 = _slicedToArray(query.useState(null), 2);
  if (null != data) {
    tmp8 = null;
    if (null != tmp2) {
      tmp8 = { query: tmp2, results: data };
      const obj3 = { query: tmp2, results: data };
    }
  }
  if (null == result) {
    if (null != tmp6) {
      tmp7(null);
    }
  } else {
    let tmp9 = null != tmp8;
    if (tmp9) {
      let results1;
      const results = tmp8.results;
      if (tmp6 != null) {
        results1 = tmp6.results;
      }
      tmp9 = results !== results1;
    }
    if (tmp9) {
      tmp7(tmp8);
    }
  }
  let tmp13 = null;
  if (null != result) {
    if (tmp8 == null) {
      tmp8 = tmp6;
    }
    tmp13 = tmp8;
  }
  query = undefined;
  if (tmp13 != null) {
    query = tmp13.query;
  }
  if (query == null) {
    query = null;
  }
  results2 = undefined;
  if (tmp13 != null) {
    results2 = tmp13.results;
  }
  if (results2 == null) {
    results2 = null;
  }
  first = tmp4(obj2.useState(() => {
    const gameSearchSession = new GameSearchSession.GameSearchSession(_require, filterGroup);
    return gameSearchSession;
  }), 1)[0];
  const items = [first, result];
  const effect = obj2.useEffect(() => {
    first.onQuery(c2);
  }, items);
  const items1 = [first, query, results2];
  const effect1 = obj2.useEffect(() => {
    let tmp2 = null != query;
    const tmp = query;
    if (tmp2) {
      tmp2 = null != results2;
    }
    if (tmp2) {
      first.onResults(tmp, results2);
    }
  }, items1);
  const items2 = [first];
  const effect2 = obj2.useEffect(() => first.end, items2);
  const obj6 = { results: results2, isLoading, error: tmp20, onSelect: null, endSession: null };
  if (!isLoading) {
    isLoading = tmp2 !== result;
  }
  tmp20 = null;
  if (tmp2 === result) {
    tmp20 = error;
  }
  ({ select: obj4.onSelect, end: obj4.endSession } = first);
  return obj6;
});
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = tmp4;
