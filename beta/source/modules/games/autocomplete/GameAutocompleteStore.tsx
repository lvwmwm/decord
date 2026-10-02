// Module ID: 5421
// Function ID: 5422
// Name: GameAutocompleteStore
// Dependencies: [1445, 504, 5422, 585, 2]

// Module 5421 (GameAutocompleteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import LRUCacheDefault from "LRUCache" /* 1445 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5422 */;
import size from "module_2" /* 2 */;

const React2 = new LRUCacheDefault({ max: 100 });
const tmp2 = new LRUCacheDefault({ max: 100 });
const set = new Set();
let tmp4 = new LRUCacheDefault({ max: 500 });
const React3 = tmp4;
const Store = get_initializedDefault.Store;
class GameAutocompleteStore extends Store {
  getResults(query) {
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(query);
    let peekResult;
    if (null != result) {
      peekResult = navigation.peek(result);
    }
    return peekResult;
  }
  getClosestResults(result) {
    const obj = GameAutocompleteUtils;
    result = obj.normalizeGameAutocompleteQuery(result);
    if (null != result) {
      const peekResult = navigation.peek(result);
      if (null != peekResult) {
        return peekResult;
      } else {
        let diff = result.length - 1;
        if (1 <= diff) {
          const peekResult1 = navigation.peek(result.slice(0, diff));
          while (null == peekResult1) {
            diff = diff - 1;
          }
          return peekResult1;
        }
      }
    }
  }
  shouldSuppressFetch(result) {
    const obj = GameAutocompleteUtils;
    result = obj.normalizeGameAutocompleteQuery(result);
    let tmp4 = null != result;
    if (tmp4) {
      const hasItem = navigation.has(result);
      let result1 = !hasItem && !set.has(result);
      if (result1) {
        const tmpResult = GameAutocompleteUtils;
        result1 = tmpResult.shouldSuppressAutocompleteFetch(result, (arg0) => navigation.peek(arg0));
      }
      tmp4 = result1;
    }
    return tmp4;
  }
  isFetching(query) {
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(query);
    const hasItem = null != result && set.has(result);
    return hasItem;
  }
  getGameById(item) {
    return navigation2.peek(item);
  }
}
const prototype = GameAutocompleteStore.prototype;
GameAutocompleteStore.displayName = "GameAutocompleteStore";
let obj = {
  LOGOUT: function handleLogout() {
    navigation.reset();
    new Set();
    navigation2.reset();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(query) {
    set.add(query.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let query;
    let results;
    ({ query, results } = arg0);
    set.delete(query);
    const result = navigation.set(query, results);
    for (const item10013 of results) {
      let result1 = navigation2.set(item10013.id, item10013);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(query) {
    set.delete(query.query);
  }
};
const gameAutocompleteStore = new GameAutocompleteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;
