// Module ID: 7091
// Function ID: 56856
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7092, 566, 686, 2]

// Module 7091 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let map = new Map();
let set = new Set();
let tmp4 = ((Store) => {
  class GameAutocompleteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GameAutocompleteStore);
      obj = outer1_5(GameAutocompleteStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GameAutocompleteStore, Store);
  let obj = {
    key: "getResults",
    value(toLocaleLowerCase) {
      let value;
      const result = GameAutocompleteStore(outer1_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      if (null != result) {
        value = outer1_7.get(result);
      }
      return value;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getClosestResults",
    value(toLocaleLowerCase) {
      const result = GameAutocompleteStore(outer1_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      if (null != result) {
        let value = outer1_7.get(result);
        if (null != value) {
          return value;
        } else {
          let diff = result.length - 1;
          if (diff >= 1) {
            value = outer1_7.get(result.slice(0, diff));
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
      const result = GameAutocompleteStore(outer1_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      let tmp2 = null != result;
      if (tmp2) {
        let result1 = !outer1_7.has(result);
        if (result1) {
          result1 = !outer1_8.has(result);
        }
        if (result1) {
          result1 = GameAutocompleteStore(outer1_1[5]).shouldSuppressAutocompleteFetch(result, (arg0) => outer2_7.get(arg0));
          const obj2 = GameAutocompleteStore(outer1_1[5]);
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
      const result = GameAutocompleteStore(outer1_1[5]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
      let hasItem = null != result;
      if (hasItem) {
        hasItem = outer1_8.has(result);
      }
      return hasItem;
    }
  };
  return callback(GameAutocompleteStore, items);
})(require("initialize").Store);
tmp4.displayName = "GameAutocompleteStore";
tmp4 = new tmp4(require("dispatcher"), {
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
let result = set.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default tmp4;
