// Module ID: 13302
// Function ID: 101071
// Name: _isNativeReflectConstruct
// Dependencies: [5, 653, 13282, 13270, 10490, 7366, 10485, 13274, 10475, 2, 6937]

// Module 13302 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import ME from "ME";
import createRPCCommand from "createRPCCommand";
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants";
import recurseReplaceContentTree from "recurseReplaceContentTree";
import getApplicationFlags from "getApplicationFlags";
import module_10485 from "module_10485";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function addRegularStoreListing(storeListing) {
  let deleteResult = storeListing;
  const id = storeListing.id;
  let id2 = storeListing.sku.id;
  const fromServer = module_10485.createFromServer(storeListing);
  let tmp2 = null;
  if (!tmp3) {
    if (false === deleteResult.published) {
      if (tmp2 == closure_12[id2]) {
        tmp2 = closure_12;
        const _Set = Set;
        const set = new Set();
        closure_12[id2] = set;
      }
      id2 = closure_12[id2];
      id2.add(id);
    } else {
      closure_13[id2] = id;
    }
    closure_10[id] = fromServer;
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
  if (locale === getApplicationFlags.locale) {
    return false;
  } else {
    handleClearData();
    const locale = getApplicationFlags.locale;
  }
}
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
const set = new Set();
let tmp3 = (Store) => {
  class StoreListingStore {
    constructor() {
      self = this;
      tmp = asyncGeneratorStep(this, StoreListingStore);
      obj = activityInstanceConnectedParticipants(StoreListingStore);
      tmp2 = createRPCCommand;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = activityInstanceConnectedParticipants;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, activityInstanceConnectedParticipants(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = StoreListingStore;
  callback2(StoreListingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(locale);
      const items = [locale];
      this.syncWith(items, closure_21);
      const locale = locale.locale;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getForSKU",
    value(arg0, arg1) {
      if (null != arg1) {
        let tmp2 = closure_11[closure_19(undefined, arg1, arg0)];
      } else {
        tmp2 = null;
        if (null != tmp) {
          tmp2 = closure_10[tmp];
        }
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUnpublishedForSKU",
    value(arg0) {
      if (null == closure_12[arg0]) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(tmp).map((arg0) => closure_10[arg0]);
        items = mapped.filter(StoreListingStore(closure_1[7]).isNotNullish);
        const arr = Array.from(tmp);
      }
      return items;
    }
  };
  items[4] = {
    key: "getForChannel",
    value(arg0, arg1) {
      return closure_11[closure_19(undefined, arg0, arg1)];
    }
  };
  items[5] = {
    key: "isFetchingForSKU",
    value(arg0) {
      return set.has(arg0);
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
}(require("_runPrimaryAppCommandOrJoinEmbeddedActivity").Store);
tmp3.displayName = "StoreListingStore";
tmp3 = new tmp3(require("result2"), {
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
        let tmp2 = closure_18;
        let tmp3 = closure_18(iter.value);
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
      const fromServer = module_10485.createFromServer(storeListing);
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
const result = _isNativeReflectConstruct.fileFinishedImporting("stores/game_store/StoreListingStore.tsx");

export default tmp3;
