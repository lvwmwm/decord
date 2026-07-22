// Module ID: 6815
// Function ID: 53739
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6815 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let closure_6 = {};
const NOT_FETCHED = obj.NOT_FETCHED;
let tmp2 = (Store) => {
  class CollectiblesMarketingsStore {
    constructor() {
      self = this;
      tmp = CollectiblesMarketingsStore(this, CollectiblesMarketingsStore);
      obj = closure_3(CollectiblesMarketingsStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = CollectiblesMarketingsStore;
  callback2(CollectiblesMarketingsStore, Store);
  let obj = {
    key: "getMarketingBySurface",
    value(arg0) {
      return closure_6[arg0];
    }
  };
  const items = [obj, ];
  obj = {
    key: "fetchState",
    get() {
      return closure_7;
    }
  };
  items[1] = obj;
  return callback(CollectiblesMarketingsStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "CollectiblesMarketingsStore";
obj = {
  COLLECTIBLES_MARKETING_FETCH: function handleFetchMarketing() {
    const NOT_FETCHED = obj.FETCHING;
  },
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: function handleFetchMarketingSuccess(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    const NOT_FETCHED = obj.FETCHED;
  },
  LOGOUT: function reset() {
    let closure_6 = {};
    const NOT_FETCHED = obj.NOT_FETCHED;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default tmp2;
export const FetchState = obj;
