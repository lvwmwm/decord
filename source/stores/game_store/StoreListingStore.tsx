// Module ID: 13476
// Function ID: 103587
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 13477, 1327, 566, 686, 2]

// Module 13476 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
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
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
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
      closure_0 = tmp;
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
function addRegularStoreListing(storeListing) {
  let deleteResult = storeListing;
  const id = storeListing.id;
  let id2 = storeListing.sku.id;
  const fromServer = closure_8.createFromServer(storeListing);
  let tmp2 = null;
  if (!tmp3) {
    if (false === deleteResult.published) {
      if (tmp2 == dependencyMap[id2]) {
        tmp2 = dependencyMap;
        const _Set = Set;
        const set = new Set();
        dependencyMap[id2] = set;
      }
      id2 = dependencyMap[id2];
      id2.add(id);
    } else {
      closure_13[id2] = id;
    }
    table[id] = fromServer;
    deleteResult = set.delete(deleteResult.sku.id);
  }
}
function getChannelSkuComboId(channelId, skuId) {
  return "" + channelId + ":" + skuId;
}
function handleClearData() {
  let closure_10 = {};
  let closure_13 = {};
  let closure_12 = {};
  let closure_11 = {};
  const set = new Set();
}
function handleUserSettingsStoreUpdate() {
  if (locale === closure_7.locale) {
    return false;
  } else {
    handleClearData();
    locale = closure_7.locale;
  }
}
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class StoreListingStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, StoreListingStore);
      obj = outer1_5(StoreListingStore);
      tmp2 = outer1_4;
      if (outer1_15()) {
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
  callback2(StoreListingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
      const items = [outer1_7];
      this.syncWith(items, outer1_21);
      const outer1_9 = outer1_7.locale;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getForSKU",
    value(arg0, arg1) {
      if (null != arg1) {
        let tmp2 = outer1_11[outer1_19(undefined, arg1, arg0)];
      } else {
        tmp2 = null;
        if (null != tmp) {
          tmp2 = outer1_10[tmp];
        }
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUnpublishedForSKU",
    value(arg0) {
      if (null == outer1_12[arg0]) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(tmp).map((arg0) => outer2_10[arg0]);
        items = mapped.filter(StoreListingStore(outer1_1[7]).isNotNullish);
        const arr = Array.from(tmp);
      }
      return items;
    }
  };
  items[4] = {
    key: "getForChannel",
    value(arg0, arg1) {
      return outer1_11[outer1_19(undefined, arg0, arg1)];
    }
  };
  items[5] = {
    key: "isFetchingForSKU",
    value(arg0) {
      return outer1_14.has(arg0);
    }
  };
  items[6] = {
    key: "getStoreListing",
    value(isTestMode) {
      let channelId;
      let skuId;
      let storeListingId;
      const self = this;
      ({ storeListingId, skuId, channelId } = isTestMode);
      if (isTestMode.isTestMode) {
        if (null != skuId) {
          const unpublishedForSKU = self.getUnpublishedForSKU(skuId);
          if (null != unpublishedForSKU) {
            if (unpublishedForSKU.length > 0) {
              return unpublishedForSKU[0];
            }
          }
        }
      }
      if (null != storeListingId) {
        return self.get(storeListingId);
      } else if (null != channelId) {
        if (null == skuId) {
          const _Error = Error;
          const error = new Error("getStoreListing with channel expects a skuId");
          throw error;
        } else {
          return self.getForChannel(channelId, skuId);
        }
      } else {
        let forSKU = null;
        if (null != skuId) {
          forSKU = self.getForSKU(skuId);
        }
        return forSKU;
      }
    }
  };
  return callback(StoreListingStore, items);
})(require("initialize").Store);
tmp3.displayName = "StoreListingStore";
tmp3 = new tmp3(require("dispatcher"), {
  STORE_LISTINGS_FETCH_START: function handleStoreListingsFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_FAIL: function handleStoreListingsFetchFail(skuId) {
    set.delete(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_SUCCESS: function handleStoreListingsFetch(storeListings) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(storeListings.storeListings);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = addRegularStoreListing;
        let tmp3 = addRegularStoreListing(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetch(arg0) {
    let channelId;
    let storeListing;
    ({ storeListing, channelId } = arg0);
    if (null != channelId) {
      const fromServer = closure_8.createFromServer(storeListing);
      closure_11[getChannelSkuComboId(channelId, fromServer.skuId)] = fromServer;
      closure_13[fromServer.skuId] = fromServer.id;
    } else {
      addRegularStoreListing(storeListing);
    }
  },
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsStoreUpdate,
  APPLICATION_STORE_CLEAR_DATA: handleClearData,
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null == giftCode.store_listing) {
      return false;
    } else {
      addRegularStoreListing(giftCode.store_listing);
    }
  }
});
let result = set.fileFinishedImporting("stores/game_store/StoreListingStore.tsx");

export default tmp3;
