// Module ID: 12493
// Function ID: 95748
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12493 (_isNativeReflectConstruct)
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
const map = new Map();
const map1 = new Map();
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let tmp4 = (Store) => {
  class CreatorMonetizationStore {
    constructor() {
      self = this;
      tmp = CreatorMonetizationStore(this, CreatorMonetizationStore);
      obj = closure_3(CreatorMonetizationStore);
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
  let closure_0 = CreatorMonetizationStore;
  callback2(CreatorMonetizationStore, Store);
  let obj = {
    key: "getPriceTiersFetchStateForGuildAndType",
    value(arg0, arg1) {
      let value = closure_6.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      if (null == value) {
        value = constants.NOT_FETCHED;
      }
      return value;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getPriceTiersForGuildAndType",
    value(arg0, arg1) {
      let value = closure_5.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      return value;
    }
  };
  items[1] = obj;
  return callback(CreatorMonetizationStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp4.displayName = "CreatorMonetizationStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
    map1.clear();
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function handleFetchPriceTiers(guildId) {
    guildId = guildId.guildId;
    if (!map1.has(guildId)) {
      const _Map = Map;
      const map = new Map();
      const result = map1.set(guildId, map);
    }
    const value = map1.get(guildId);
    const result1 = value.set(guildId.priceTierType, obj.FETCHING);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function handleFetchPriceTiersSuccess(priceTiers) {
    let guildId;
    let priceTierType;
    ({ guildId, priceTierType } = priceTiers);
    if (!map1.has(guildId)) {
      const _Map = Map;
      const map = new Map();
      const result = map1.set(guildId, map);
    }
    let value = map1.get(guildId);
    const result1 = value.set(priceTierType, obj.FETCHED);
    if (!map.has(guildId)) {
      const _Map2 = Map;
      const map1 = new Map();
      const result2 = map.set(guildId, map1);
    }
    value = map.get(guildId);
    const result3 = value.set(priceTierType, priceTiers.priceTiers);
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function handleFetchPriceTiersFailure(guildId) {
    guildId = guildId.guildId;
    if (!map1.has(guildId)) {
      const _Map = Map;
      const map = new Map();
      const result = map1.set(guildId, map);
    }
    const value = map1.get(guildId);
    const result1 = value.set(guildId.priceTierType, obj.FETCHED);
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/creator_monetization/CreatorMonetizationStore.tsx");

export default tmp4;
export const FetchState = obj;
