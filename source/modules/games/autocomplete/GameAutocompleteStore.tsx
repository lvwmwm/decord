// Module ID: 7081
// Function ID: 56788
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7081 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const map = new Map();
const set = new Set();
let tmp4 = (Store) => {
  class GameAutocompleteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GameAutocompleteStore);
      obj = closure_5(GameAutocompleteStore);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GameAutocompleteStore;
  callback2(GameAutocompleteStore, Store);
  let obj = {
    key: "getResults",
    value(toLocaleLowerCase) {
      let value;
      const result = GameAutocompleteStore(closure_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      if (null != result) {
        value = store.get(result);
      }
      return value;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getClosestResults",
    value(toLocaleLowerCase) {
      const result = GameAutocompleteStore(closure_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      if (null != result) {
        let value = store.get(result);
        if (null != value) {
          return value;
        } else {
          let diff = result.length - 1;
          if (diff >= 1) {
            value = store.get(result.slice(0, diff));
            while (null == value) {
              diff = diff - 1;
            }
            return value;
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldSuppressFetch",
    value(toLocaleLowerCase) {
      const result = GameAutocompleteStore(closure_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      let tmp2 = null != result;
      if (tmp2) {
        let result1 = !store.has(result);
        if (result1) {
          result1 = !set.has(result);
        }
        if (result1) {
          result1 = GameAutocompleteStore(closure_1[5]).shouldSuppressAutocompleteFetch(result, (arg0) => closure_7.get(arg0));
          const obj2 = GameAutocompleteStore(closure_1[5]);
        }
        tmp2 = result1;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetching",
    value(toLocaleLowerCase) {
      const result = GameAutocompleteStore(closure_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      let hasItem = null != result;
      if (hasItem) {
        hasItem = set.has(result);
      }
      return hasItem;
    }
  };
  return callback(GameAutocompleteStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "GameAutocompleteStore";
tmp4 = new tmp4(importDefault(dependencyMap[7]), {
  LOGOUT: function handleLogout() {
    const map = new Map();
    const set = new Set();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(query) {
    set.add(query.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(query) {
    query = query.query;
    set.delete(query);
    map.delete(query);
    const result = map.set(query, query.results);
    if (map.size > 100) {
      const value = map.keys().next().value;
      while (null != value) {
        let tmp5 = map;
        let deleteResult2 = map.delete(value);
        let tmp7 = map;
        if (map.size <= 100) {
          break;
        }
      }
      const iter = map.keys();
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(query) {
    set.delete(query.query);
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default tmp4;
