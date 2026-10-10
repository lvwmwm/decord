// Module ID: 8235
// Function ID: 8236
// Name: GameAutocompleteStore
// Dependencies: [1102, 1457, 504, 8236, 584, 2]

// Module 8235 (GameAutocompleteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import LRUCacheDefault from "LRUCache" /* 1457 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8236 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getCacheKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
const HOUR = DurationsDefault.Millis.HOUR;
let obj = { max: 100, maxAge: HOUR };
const _false = new LRUCacheDefault(obj);
const tmp2 = new LRUCacheDefault(obj);
const set = new Set();
const obj2 = { max: 500, maxAge: HOUR };
let tmp4 = new LRUCacheDefault(obj2);
const hasOwnProperty = tmp4;
const Store = get_initializedDefault.Store;
class GameAutocompleteStore extends Store {
  getResults(name, arg1) {
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(name);
    let peekResult;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      peekResult = navigation.peek("" + arg1 + ":" + result);
    }
    return peekResult;
  }
  getClosestResults(result, DEFAULT) {
    const obj = GameAutocompleteUtils;
    result = obj.normalizeGameAutocompleteQuery(result);
    if (null != result) {
      let length = result.length;
      if (length >= 1) {
        const substr = result.slice(0, length);
        const _HermesInternal = HermesInternal;
        const peekResult = navigation.peek("" + DEFAULT + ":" + substr);
        while (null == peekResult) {
          length = length - 1;
        }
        return { query: substr, results: peekResult };
      }
    }
  }
  shouldSuppressFetch(result, arg1) {
    let closure_0;
    _require = arg1;
    const obj = require("GameAutocompleteUtils");
    result = obj.normalizeGameAutocompleteQuery(result);
    const tmp = _require;
    if (null == result) {
      return false;
    } else {
      const _HermesInternal = HermesInternal;
      const combined = "" + arg1 + ":" + result;
      const hasItem = navigation.has(combined);
      let result1 = !hasItem && !set.has(combined);
      if (result1) {
        const tmpResult = tmp(8236);
        result1 = tmpResult.shouldSuppressAutocompleteFetch(result, (arg0) => navigation.peek("" + closure_0 + ":" + arg0));
      }
      return result1;
    }
  }
  isFetching(name, arg1) {
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(name);
    let hasItem = null != result;
    if (hasItem) {
      const _HermesInternal = HermesInternal;
      hasItem = set.has("" + arg1 + ":" + result);
    }
    return hasItem;
  }
  getGameById(item) {
    return navigation2.peek(item);
  }
}
const prototype = GameAutocompleteStore.prototype;
GameAutocompleteStore.displayName = "GameAutocompleteStore";
const obj3 = {
  LOGOUT: function handleLogout() {
    navigation.reset();
    new Set();
    navigation2.reset();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(filterGroup) {
    set.add("" + filterGroup.filterGroup + ":" + filterGroup.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(results) {
    results = results.results;
    const tmp = getCacheKey(results.filterGroup, results.query);
    set.delete(tmp);
    const result = navigation.set(tmp, results);
    for (const item10017 of results) {
      let result1 = navigation2.set(item10017.id, item10017);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(filterGroup) {
    set.delete("" + filterGroup.filterGroup + ":" + filterGroup.query);
  }
};
const gameAutocompleteStore = new GameAutocompleteStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;
