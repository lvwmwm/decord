// Module ID: 6819
// Function ID: 53782
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6819 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let closure_6 = {};
let NOT_FETCHED = obj.NOT_FETCHED;
let tmp2 = ((Store) => {
  class CollectiblesMarketingsStore {
    constructor() {
      self = this;
      tmp = CollectiblesMarketingsStore(this, CollectiblesMarketingsStore);
      obj = outer1_3(CollectiblesMarketingsStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CollectiblesMarketingsStore, Store);
  let obj = {
    key: "getMarketingBySurface",
    value(arg0) {
      return outer1_6[arg0];
    }
  };
  const items = [obj, ];
  obj = {
    key: "fetchState",
    get() {
      return outer1_7;
    }
  };
  items[1] = obj;
  return callback(CollectiblesMarketingsStore, items);
})(require("initialize").Store);
tmp2.displayName = "CollectiblesMarketingsStore";
obj = {
  COLLECTIBLES_MARKETING_FETCH: function handleFetchMarketing() {
    const FETCHING = obj.FETCHING;
  },
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: function handleFetchMarketingSuccess(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    const FETCHED = obj.FETCHED;
  },
  LOGOUT: function reset() {
    let closure_6 = {};
    const NOT_FETCHED = obj.NOT_FETCHED;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default tmp2;
export const FetchState = obj;
