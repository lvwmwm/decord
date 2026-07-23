// Module ID: 4175
// Function ID: 35422
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4169, 1921, 4162, 566, 686, 2]

// Module 4175 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _isNativeReflectConstruct = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      _isNativeReflectConstruct = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  let _isNativeReflectConstruct = sku;
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
    tmp3 = null == fromServer.price && null != value.price;
    tmp6 = null == fromServer.orbsReward && null != value.orbsReward;
    tmp7 = 0 === fromServer.eligibleOffers.length && value.eligibleOffers.length > 0;
  }
  let result = map1.set(sku.id, fromServer);
  set.delete(sku.id);
  set1.delete(sku.id);
  const bundled_sku_ids = sku.bundled_sku_ids;
  if (null != bundled_sku_ids) {
    const item = bundled_sku_ids.forEach((arg0) => {
      const result = outer1_9.set(arg0, sku.id);
    });
  }
  if (!map2.has(sku.application_id)) {
    const _Set = Set;
    set = new Set();
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
      outer1_18(arg0);
    });
  }
  if (null != storeListing.alternative_skus) {
    const alternative_skus = storeListing.alternative_skus;
    const item1 = alternative_skus.forEach((arg0) => {
      outer1_18(arg0);
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
        let tmp2 = addSku;
        let tmp3 = addSku(value.sku);
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
    locale = closure_6.locale;
    handleClearData();
  }
}
let map = new Map();
let set = new Set();
let set1 = new Set();
let map1 = new Map();
let map2 = new Map();
let map3 = new Map();
let tmp8 = ((Store) => {
  class SKUStore {
    constructor() {
      self = this;
      tmp = SKUStore(this, SKUStore);
      obj = outer1_3(SKUStore);
      tmp2 = outer1_2;
      if (outer1_15()) {
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
  callback2(SKUStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6, outer1_7);
      const items = [outer1_6];
      this.syncWith(items, outer1_22);
      const outer1_8 = outer1_6.locale;
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return outer1_12.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getForApplication",
    value(arg0) {
      const value = outer1_13.get(arg0);
      if (null == value) {
        let items = [];
      } else {
        const _Array = Array;
        items = Array.from(value).map((arg0) => outer2_12.get(arg0));
        const arr = Array.from(value);
      }
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetching",
    value(arg0) {
      return outer1_10.has(arg0);
    }
  };
  items[4] = {
    key: "getFetchingSkuIds",
    value() {
      const items = [...outer1_10.keys()];
      return items;
    }
  };
  items[5] = {
    key: "getSKUs",
    value() {
      return Object.fromEntries(outer1_12);
    }
  };
  items[6] = {
    key: "getParentSKU",
    value(arg0) {
      const self = this;
      const value = outer1_9.get(arg0);
      if (null != value) {
        return self.get(value);
      }
    }
  };
  items[7] = {
    key: "didFetchingSkuFail",
    value(arg0) {
      return outer1_11.has(arg0);
    }
  };
  return callback(SKUStore, items);
})(require("initialize").Store);
tmp8.displayName = "SKUStore";
tmp8 = new tmp8(require("dispatcher"), {
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
        let tmp2 = handleStoreListing;
        let tmp3 = handleStoreListing(iter.value);
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
        let tmp2 = skuFetchSuccess;
        let tmp3 = skuFetchSuccess(iter.value);
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
let result = set.fileFinishedImporting("stores/game_store/SKUStore.tsx");

export default tmp8;
