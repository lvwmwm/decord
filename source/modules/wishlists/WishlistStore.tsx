// Module ID: 8718
// Function ID: 68884
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8719, 1184, 6855, 566, 686, 2]

// Module 8718 (_isNativeReflectConstruct)
import isNonEmptyString from "isNonEmptyString";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrCreateEntry(wishlistId) {
  let tmp2 = dependencyMap[wishlistId];
  if (tmp2 == null) {
    const obj = { data: null, status: "not_loaded" };
    tmp[wishlistId] = obj;
    tmp2 = obj;
  }
  return tmp2;
}
({ getWishlistSkuIds: closure_8, wishlistHasSkuId: closure_9 } = _isNativeReflectConstruct);
let closure_11 = {};
let tmp3 = ((Store) => {
  class WishlistStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, WishlistStore);
      obj = outer1_6(WishlistStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WishlistStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      let obj = outer1_11[arg0];
      if (null == obj) {
        obj = { data: null, status: "not_loaded" };
      }
      return obj;
    }
  };
  let items = [obj, , , , , , , , , ];
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
        let items = outer1_8(data);
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
        tmp = outer1_9(data, arg1);
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
})(require("initialize").Store);
tmp3 = new tmp3(require("dispatcher"), {
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
    importDefault(1184).captureException(error.error);
  },
  WISHLIST_REMOVE_SKU_START: function handleRemoveSkuStart(skuId) {
    skuId = skuId.skuId;
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
    importDefault(1184).captureException(wishlistId.error);
  },
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(wishlistId) {
    const tmp = getOrCreateEntry(wishlistId.wishlistId);
    tmp.status = "success";
    tmp.error = undefined;
    tmp.lastFetchedAt = Date.now();
  },
  WISHLIST_UPDATE_VISIBILITY_FAILURE: function handleUpdateVisibilityFailure(error) {
    importDefault(1184).captureException(error.error);
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
    importDefault(1184).captureException(wishlistId.error);
  },
  WISHLIST_ITEM_PURCHASED: function handleWishlistItemPurchased(arg0) {
    let recipientId;
    let skuId;
    ({ recipientId, skuId } = arg0);
    const firstWishlistId = require(6855) /* _isNativeReflectConstruct */.default.getFirstWishlistId(recipientId);
    let tmp2 = null != firstWishlistId;
    if (tmp2) {
      tmp2 = null != dependencyMap[firstWishlistId];
    }
    if (tmp2) {
      tmp2 = null != dependencyMap[firstWishlistId].data;
    }
    if (tmp2) {
      tmp2 = callback3(dependencyMap[firstWishlistId].data, skuId);
    }
    if (tmp2) {
      dependencyMap[firstWishlistId].updatedAt = undefined;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/wishlists/WishlistStore.tsx");

export default tmp3;
