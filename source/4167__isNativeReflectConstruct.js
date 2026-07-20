// Module ID: 4167
// Function ID: 35332
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4167 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function addSku(sku) {
  let closure_0 = sku;
  let value = map1.get(sku.id);
  const fromServer = closure_5.createFromServer(sku);
  if (null != value) {
    if (tmp3) {
      fromServer.price = value.price;
    }
    const _Object = Object;
    let tmp5 = 0 === Object.keys(fromServer.prices).length;
    if (tmp5) {
      const _Object2 = Object;
      tmp5 = Object.keys(value.prices).length > 0;
    }
    if (tmp5) {
      fromServer.prices = value.prices;
    }
    if (tmp6) {
      fromServer.orbsReward = value.orbsReward;
    }
    if (tmp7) {
      fromServer.eligibleOffers = value.eligibleOffers;
    }
    const tmp3 = null == fromServer.price && null != value.price;
    const tmp6 = null == fromServer.orbsReward && null != value.orbsReward;
    const tmp7 = 0 === fromServer.eligibleOffers.length && value.eligibleOffers.length > 0;
  }
  const result = map1.set(sku.id, fromServer);
  set.delete(sku.id);
  set1.delete(sku.id);
  const bundled_sku_ids = sku.bundled_sku_ids;
  if (null != bundled_sku_ids) {
    const item = bundled_sku_ids.forEach((arg0) => {
      const result = closure_9.set(arg0, arg0.id);
    });
  }
  if (!map2.has(sku.application_id)) {
    const _Set = Set;
    const set = new Set();
    const result1 = map2.set(sku.application_id, set);
  }
  value = map2.get(sku.application_id);
  value.add(sku.id);
}
function skuFetchSuccess(sku) {
  addSku(sku);
}
function handleStoreListing(storeListing) {
  addSku(storeListing.sku);
  if (null != storeListing.child_skus) {
    const child_skus = storeListing.child_skus;
    const item = child_skus.forEach((arg0) => {
      callback(arg0);
    });
  }
  if (null != storeListing.alternative_skus) {
    const alternative_skus = storeListing.alternative_skus;
    const item1 = alternative_skus.forEach((arg0) => {
      callback(arg0);
    });
  }
}
function handleEntitlementsFetch(entitlements) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(entitlements.entitlements);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (null != value.sku) {
        let tmp2 = closure_18;
        let tmp3 = closure_18(value.sku);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleClearData() {
  const map = new Map();
  const set = new Set();
  const set1 = new Set();
  const map1 = new Map();
  const map2 = new Map();
  const map3 = new Map();
}
function handleUserSettingsStoreUpdate() {
  if (locale === closure_6.locale) {
    return false;
  } else {
    const locale = closure_6.locale;
    handleClearData();
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = importDefault(dependencyMap[7]);
const map = new Map();
const set = new Set();
const set1 = new Set();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let tmp8 = (Store) => {
  class SKUStore {
    constructor() {
      self = this;
      tmp = SKUStore(this, SKUStore);
      obj = closure_3(SKUStore);
      tmp2 = closure_2;
      if (closure_15()) {
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
  let closure_0 = SKUStore;
  callback2(SKUStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(locale, closure_7);
      const items = [locale];
      this.syncWith(items, closure_22);
      const locale = locale.locale;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return closure_12.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getForApplication",
    value(arg0) {
      const value = closure_13.get(arg0);
      if (null == value) {
        let items = [];
      } else {
        const _Array = Array;
        items = Array.from(value).map((arg0) => closure_12.get(arg0));
        const arr = Array.from(value);
      }
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetching",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[4] = {
    key: "getFetchingSkuIds",
    value() {
      const items = [...closure_10.keys()];
      return items;
    }
  };
  items[5] = {
    key: "getSKUs",
    value() {
      return Object.fromEntries(closure_12);
    }
  };
  items[6] = {
    key: "getParentSKU",
    value(arg0) {
      const self = this;
      const value = closure_9.get(arg0);
      if (null != value) {
        return self.get(value);
      }
    }
  };
  items[7] = {
    key: "didFetchingSkuFail",
    value(arg0) {
      return set2.has(arg0);
    }
  };
  return callback(SKUStore, items);
}(importAll(dependencyMap[8]).Store);
tmp8.displayName = "SKUStore";
tmp8 = new tmp8(importDefault(dependencyMap[9]), {
  STORE_LISTINGS_FETCH_START: function handleStoreListingsFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_FAIL: function handleStoreListingsFetchFail(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.add(skuId);
  },
  STORE_LISTINGS_FETCH_SUCCESS: function handleStoreListingsFetchSuccess(storeListings) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(storeListings.storeListings);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_20;
        let tmp3 = closure_20(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetchSuccess(storeListing) {
    handleStoreListing(storeListing.storeListing);
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null == giftCode.store_listing) {
      return false;
    } else {
      addSku(giftCode.store_listing.sku);
    }
  },
  SKU_FETCH_START: function handleSkuFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  SKU_FETCH_SUCCESS: function handleSkuFetchSuccess(sku) {
    skuFetchSuccess(sku.sku);
  },
  SKU_FETCH_FAIL: function handleSkuFetchFail(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.add(skuId);
  },
  SKUS_FETCH_SUCCESS: function handleSkusFetchSuccess(arg0) {
    let done;
    let guildId;
    let skus;
    ({ guildId, skus } = arg0);
    const tmp = _createForOfIteratorHelperLoose(skus);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_19;
        let tmp3 = closure_19(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (null != guildId) {
      const _Set = Set;
      const set = new Set(skus.map((id) => id.id));
      const result = map3.set(guildId, set);
    }
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: handleEntitlementsFetch,
  APPLICATION_STORE_CLEAR_DATA: handleClearData,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: handleEntitlementsFetch,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: handleEntitlementsFetch
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/game_store/SKUStore.tsx");

export default tmp8;
