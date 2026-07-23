// Module ID: 12614
// Function ID: 97954
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12614 (_isNativeReflectConstruct)
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
let map = new Map();
let map1 = new Map();
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let tmp4 = ((Store) => {
  class CreatorMonetizationStore {
    constructor() {
      self = this;
      tmp = CreatorMonetizationStore(this, CreatorMonetizationStore);
      obj = outer1_3(CreatorMonetizationStore);
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
  callback2(CreatorMonetizationStore, Store);
  let obj = {
    key: "getPriceTiersFetchStateForGuildAndType",
    value(arg0, arg1) {
      let value = outer1_6.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      if (null == value) {
        value = outer1_7.NOT_FETCHED;
      }
      return value;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getPriceTiersForGuildAndType",
    value(arg0, arg1) {
      let value = outer1_5.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      return value;
    }
  };
  items[1] = obj;
  return callback(CreatorMonetizationStore, items);
})(require("initialize").Store);
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
      map1 = new Map();
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
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/creator_monetization/CreatorMonetizationStore.tsx");

export default tmp4;
export const FetchState = obj;
