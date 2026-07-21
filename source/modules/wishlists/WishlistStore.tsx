// Module ID: 8669
// Function ID: 68601
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8669 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrCreateEntry(wishlistId) {
  let tmp2 = closure_11[wishlistId];
  if (tmp2 == null) {
    const obj = { "Bool(false)": false, "Bool(false)": false };
    tmp[wishlistId] = obj;
    tmp2 = obj;
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ getWishlistSkuIds: closure_8, wishlistHasSkuId: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = {};
let tmp3 = (Store) => {
  class WishlistStore {
    constructor() {
      self = this;
      tmp = closure_3(this, WishlistStore);
      obj = closure_6(WishlistStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = WishlistStore;
  callback2(WishlistStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      let obj = closure_11[arg0];
      if (null == obj) {
        obj = { "Bool(false)": false, "Bool(false)": false };
      }
      return obj;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getWishlist",
    value(arg0) {
      return this.get(arg0).data;
    }
  };
  items[1] = obj;
  obj = {
    key: "getWishlistItems",
    value(arg0) {
      const data = this.get(arg0).data;
      if (null != data) {
        let items = callback3(data);
      } else {
        items = [];
      }
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasSkuId",
    value(arg0, arg1) {
      const data = this.get(arg0).data;
      let tmp = null != data;
      if (tmp) {
        tmp = callback4(data, arg1);
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getStatus",
    value(arg0) {
      return this.get(arg0).status;
    }
  };
  items[5] = {
    key: "isFetching",
    value(arg0) {
      return "fetching" === this.getStatus(arg0);
    }
  };
  items[6] = {
    key: "hasError",
    value(arg0) {
      return "error" === this.getStatus(arg0);
    }
  };
  items[7] = {
    key: "getError",
    value(arg0) {
      return this.get(arg0).error;
    }
  };
  items[8] = {
    key: "getUpdatedAt",
    value(arg0) {
      return this.get(arg0).updatedAt;
    }
  };
  items[9] = {
    key: "getLastFetchedAt",
    value(arg0) {
      return this.get(arg0).lastFetchedAt;
    }
  };
  return callback(WishlistStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3 = new tmp3(importDefault(dependencyMap[9]), {
  WISHLIST_FETCH_START: function handleFetchStart(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "fetching";
    tmp.error = undefined;
  },
  WISHLIST_FETCH_SUCCESS: function handleFetchSuccess(wishlistId) {
    let updatedAt;
    let wishlistData;
    ({ wishlistData, updatedAt } = wishlistId);
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.updatedAt = updatedAt;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_FETCH_FAILURE: function handleFetchFailure(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "error";
    tmp.error = wishlistId.error;
  },
  WISHLIST_ADD_SKU_SUCCESS: function handleAddSkuSuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistId.wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_ADD_SKU_FAILURE: function handleAddSkuFailure(error) {
    importDefault(dependencyMap[6]).captureException(error.error);
  },
  WISHLIST_REMOVE_SKU_START: function handleRemoveSkuStart(skuId) {
    const arg1 = skuId.skuId;
    const tmp = getOrCreateEntry(skuId.wishlistId);
    if (null != tmp.data) {
      const obj = { id: tmp.data.id, userId: tmp.data.userId };
      const items = tmp.data.items;
      obj.items = items.filter((skuId) => skuId.skuId !== skuId);
      obj.applications = tmp.data.applications;
      const prototype = ctor.prototype;
      const tmp6 = new ctor(obj);
      tmp.data = tmp6;
    }
  },
  WISHLIST_REMOVE_SKU_SUCCESS: function handleRemoveSkuSuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistId.wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_REMOVE_SKU_FAILURE: function handleRemoveSkuFailure(wishlistId) {
    getOrCreateEntry(wishlistId.wishlistId).updatedAt = undefined;
    importDefault(dependencyMap[6]).captureException(wishlistId.error);
  },
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_UPDATE_VISIBILITY_FAILURE: function handleUpdateVisibilityFailure(error) {
    importDefault(dependencyMap[6]).captureException(error.error);
  },
  WISHLIST_REORDER_START: function handleReorderStart(wishlistId) {
    getOrCreateEntry(wishlistId.wishlistId).data = wishlistId.newWishlistData;
  },
  WISHLIST_REORDER_SUCCESS: function handleReorderSuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistId.wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_REORDER_FAILURE: function handleReorderFailure(wishlistId) {
    getOrCreateEntry(wishlistId.wishlistId).updatedAt = undefined;
    importDefault(dependencyMap[6]).captureException(wishlistId.error);
  },
  WISHLIST_ITEM_PURCHASED: function handleWishlistItemPurchased(arg0) {
    let recipientId;
    let skuId;
    ({ recipientId, skuId } = arg0);
    const firstWishlistId = arg1(dependencyMap[7]).default.getFirstWishlistId(recipientId);
    let tmp2 = null != firstWishlistId;
    if (tmp2) {
      tmp2 = null != closure_11[firstWishlistId];
    }
    if (tmp2) {
      tmp2 = null != closure_11[firstWishlistId].data;
    }
    if (tmp2) {
      tmp2 = callback3(closure_11[firstWishlistId].data, skuId);
    }
    if (tmp2) {
      closure_11[firstWishlistId].updatedAt = undefined;
    }
  }
});
const obj = {
  WISHLIST_FETCH_START: function handleFetchStart(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "fetching";
    tmp.error = undefined;
  },
  WISHLIST_FETCH_SUCCESS: function handleFetchSuccess(wishlistId) {
    let updatedAt;
    let wishlistData;
    ({ wishlistData, updatedAt } = wishlistId);
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.updatedAt = updatedAt;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_FETCH_FAILURE: function handleFetchFailure(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "error";
    tmp.error = wishlistId.error;
  },
  WISHLIST_ADD_SKU_SUCCESS: function handleAddSkuSuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistId.wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_ADD_SKU_FAILURE: function handleAddSkuFailure(error) {
    importDefault(dependencyMap[6]).captureException(error.error);
  },
  WISHLIST_REMOVE_SKU_START: function handleRemoveSkuStart(skuId) {
    const arg1 = skuId.skuId;
    const tmp = getOrCreateEntry(skuId.wishlistId);
    if (null != tmp.data) {
      const obj = { id: tmp.data.id, userId: tmp.data.userId };
      const items = tmp.data.items;
      obj.items = items.filter((skuId) => skuId.skuId !== skuId);
      obj.applications = tmp.data.applications;
      const prototype = ctor.prototype;
      const tmp6 = new ctor(obj);
      tmp.data = tmp6;
    }
  },
  WISHLIST_REMOVE_SKU_SUCCESS: function handleRemoveSkuSuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistId.wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_REMOVE_SKU_FAILURE: function handleRemoveSkuFailure(wishlistId) {
    getOrCreateEntry(wishlistId.wishlistId).updatedAt = undefined;
    importDefault(dependencyMap[6]).captureException(wishlistId.error);
  },
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_UPDATE_VISIBILITY_FAILURE: function handleUpdateVisibilityFailure(error) {
    importDefault(dependencyMap[6]).captureException(error.error);
  },
  WISHLIST_REORDER_START: function handleReorderStart(wishlistId) {
    getOrCreateEntry(wishlistId.wishlistId).data = wishlistId.newWishlistData;
  },
  WISHLIST_REORDER_SUCCESS: function handleReorderSuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.data = wishlistId.wishlistData;
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_REORDER_FAILURE: function handleReorderFailure(wishlistId) {
    getOrCreateEntry(wishlistId.wishlistId).updatedAt = undefined;
    importDefault(dependencyMap[6]).captureException(wishlistId.error);
  },
  WISHLIST_ITEM_PURCHASED: function handleWishlistItemPurchased(arg0) {
    let recipientId;
    let skuId;
    ({ recipientId, skuId } = arg0);
    const firstWishlistId = arg1(dependencyMap[7]).default.getFirstWishlistId(recipientId);
    let tmp2 = null != firstWishlistId;
    if (tmp2) {
      tmp2 = null != closure_11[firstWishlistId];
    }
    if (tmp2) {
      tmp2 = null != closure_11[firstWishlistId].data;
    }
    if (tmp2) {
      tmp2 = callback3(closure_11[firstWishlistId].data, skuId);
    }
    if (tmp2) {
      closure_11[firstWishlistId].updatedAt = undefined;
    }
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/wishlists/WishlistStore.tsx");

export default tmp3;
