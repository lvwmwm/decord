// Module ID: 6774
// Function ID: 53287
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 6775, 664, 561, 686, 22, 6786, 566, 2]

// Module 6774 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

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
function updateCategoriesAndProducts(map) {
  let items = [...closure_19.values()];
  map = new Map(items.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  const productsFromCategories = map1(6786).getProductsFromCategories(map, true);
  map1 = new Map(productsFromCategories.map((skuId) => {
    const items = [skuId.skuId, skuId];
    return items;
  }));
  const item = map1.forEach((skuId) => {
    if (!map1.has(skuId.skuId)) {
      const result = map1.set(skuId.skuId, skuId);
    }
  });
  const obj = map1(6786);
  const productsFromCategories1 = map1(6786).getProductsFromCategories(map, false);
  const map2 = new Map(productsFromCategories1.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  let closure_16 = [...map2.values()];
}
function reset() {
  let closure_19 = map;
  let closure_14 = map1;
  let c23;
  let c21 = false;
  let closure_18 = {};
  const values = Object.values(closure_17);
  const item = values.forEach((cancel) => cancel.cancel());
  closure_17 = {};
  let c22;
  let c24;
  let closure_25 = {};
  let c26 = 0;
}
let closure_10 = 10 * require("set").Millis.SECOND;
let closure_11 = 10 * require("set").Millis.MINUTE;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const map3 = new Map();
let closure_16 = [];
let closure_17 = {};
let closure_18 = {};
let c21 = false;
let c22;
let c23;
let c24;
let closure_25 = {};
let c26 = 0;
let tmp6 = ((Store) => {
  class CollectiblesCategoryStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, CollectiblesCategoryStore);
      obj = outer1_6(CollectiblesCategoryStore);
      tmp2 = outer1_5;
      if (outer1_27()) {
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
  callback2(CollectiblesCategoryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_8];
      this.syncWith(items, outer1_31);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isFetchingCategories",
    get() {
      return outer1_21;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingProduct",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let state;
        if (null != outer1_18[arg0]) {
          state = tmp3.state;
        }
        tmp = "fetching" === state;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isProductFetchBackedOff",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let pending;
        if (null != outer1_17[arg0]) {
          pending = tmp3.pending;
        }
        tmp = true === pending;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "error",
    get() {
      return outer1_22;
    }
  };
  items[5] = {
    key: "lastErrorTimestamp",
    get() {
      return outer1_24;
    }
  };
  items[6] = {
    key: "lastSuccessfulFetch",
    get() {
      return outer1_23;
    }
  };
  items[7] = {
    key: "lastFetchOptions",
    get() {
      return outer1_25;
    }
  };
  items[8] = {
    key: "categories",
    get() {
      return outer1_19;
    }
  };
  items[9] = {
    key: "products",
    get() {
      return outer1_14;
    }
  };
  items[10] = {
    key: "productsWithVariantsAsGroup",
    get() {
      return outer1_16;
    }
  };
  items[11] = {
    key: "skipNumCategories",
    get() {
      return outer1_26;
    }
  };
  items[12] = {
    key: "getCategory",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = outer1_19.get(arg0);
      }
      return value;
    }
  };
  items[13] = {
    key: "getProduct",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = outer1_14.get(arg0);
      }
      return value;
    }
  };
  items[14] = {
    key: "getProductsBySkus",
    value(arr) {
      const mapped = arr.map((arg0) => outer2_14.get(arg0));
      return mapped.filter((arg0) => null != arg0);
    }
  };
  items[15] = {
    key: "getProductFetch",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = outer1_18[arg0];
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getProductByStoreListingId",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = outer1_15.get(arg0);
      }
      return value;
    }
  };
  items[17] = {
    key: "getCategoryByStoreListingId",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = outer1_20.get(arg0);
      }
      return value;
    }
  };
  items[18] = {
    key: "getCategoryForProduct",
    value(arg0) {
      const product = this.getProduct(arg0);
      let categorySkuId;
      if (null != product) {
        categorySkuId = product.categorySkuId;
      }
      return this.getCategory(categorySkuId);
    }
  };
  return callback(CollectiblesCategoryStore, items);
})(require("initialize").Store);
tmp6.displayName = "CollectiblesCategoryStore";
tmp6 = new tmp6(require("dispatcher"), {
  COLLECTIBLES_CATEGORIES_FETCH: function handleFetchCategories(options) {
    let c21 = true;
    let c22;
    let c24;
    options = options.options;
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function handleFetchCategoriesSuccess(categories) {
    if (categories.categories.collections.length > 0) {
      const collections = categories.categories.collections;
      let mapped = collections.map(obj.fromStorefrontCollectionRecord);
    } else {
      mapped = categories.categories.categories;
    }
    if (0 === mapped.length) {
      let closure_14 = map1;
    } else {
      obj = map(22);
      let items = [];
      HermesBuiltin.arraySpread(map.values(), 0);
      if (!obj.isEqual(items, mapped)) {
        if (!categories.noOp) {
          const _Map = Map;
          map = new Map(mapped.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
          const _Date = Date;
          const date = new Date();
          const item = map.forEach((unpublishedAt) => {
            let tmp = !map.has(arg1);
            if (tmp) {
              let tmp3 = null == unpublishedAt.unpublishedAt;
              if (!tmp3) {
                tmp3 = unpublishedAt.unpublishedAt > date;
              }
              tmp = tmp3;
            }
            if (tmp) {
              const result = map.set(arg1, unpublishedAt);
            }
          });
          updateCategoriesAndProducts(map);
        }
      }
    }
    let closure_23 = Date.now();
    let c21 = false;
    let c22;
    let c24;
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function handleFetchCategoriesFailure(error) {
    let closure_19 = map;
    let closure_14 = map1;
    let c21 = false;
    let closure_18 = {};
    error = error.error;
    let closure_24 = Date.now();
  },
  COLLECTIBLES_PRODUCT_FETCH: function handleFetchProduct(startedAt) {
    closure_18[startedAt.skuId] = { state: "fetching", startedAt: startedAt.startedAt };
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: function handleFetchProductSuccess(endedAt) {
    let iter;
    let product;
    let skuId;
    ({ skuId, product } = endedAt);
    let value = map1.get(skuId);
    if (null != value) {
      const _Object2 = Object;
      if (0 === Object.keys(product.prices).length) {
        product.prices = value.prices;
        if (null != value.bundledProducts) {
          if (null != product.bundledProducts) {
            const _Map = Map;
            const bundledProducts = value.bundledProducts;
            const map = new Map(bundledProducts.map((arg0) => {
              const items = [, ];
              ({ skuId: arr[0], prices: arr[1] } = arg0);
              return items;
            }));
            const tmp14 = _createForOfIteratorHelperLoose(product.bundledProducts);
            let iter2 = tmp14();
            if (!iter2.done) {
              do {
                value = iter2.value;
                value = map.get(value.skuId);
                let tmp3 = null != value;
                if (tmp3) {
                  let _Object = Object;
                  tmp3 = 0 === Object.keys(value.prices).length;
                }
                if (tmp3) {
                  value.prices = value;
                }
                iter = tmp14();
                iter2 = iter;
              } while (!iter.done);
            }
          }
        }
      }
    }
    const result = map1.set(skuId, product);
    const obj = { state: "success" };
    let startedAt;
    if (null != dependencyMap2[skuId]) {
      startedAt = tmp6.startedAt;
    }
    obj.startedAt = startedAt;
    obj.endedAt = endedAt.endedAt;
    dependencyMap2[skuId] = obj;
    if (null != dependencyMap[skuId]) {
      obj2.succeed();
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: function handleFetchProductFailure(skuId) {
    let endedAt;
    let error;
    skuId = skuId.skuId;
    let obj = { state: "error" };
    let startedAt;
    ({ error, endedAt } = skuId);
    if (null != dependencyMap2[skuId]) {
      startedAt = tmp2.startedAt;
    }
    obj.startedAt = startedAt;
    obj.endedAt = endedAt;
    obj.error = error;
    dependencyMap2[skuId] = obj;
    let obj2 = dependencyMap[skuId];
    if (null == obj2) {
      let tmp6 = importDefault(561);
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(closure_10, closure_11);
      dependencyMap[skuId] = tmp6;
      obj2 = tmp6;
    }
    if (!obj2.pending) {
      obj2.fail(() => {
        let obj = outer1_1(outer1_2[9]);
        obj = { type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId };
        return obj.dispatch(obj);
      });
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED: function handleProductFetchBackoffExpired(arg0) {
    if (null != dependencyMap[arg0.skuId]) {
      obj.cancel();
    }
  },
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function handleFetchShopHomeSuccess(shopHome) {
    if (0 !== shopHome.shopHome.categories.length) {
      const _Map = Map;
      const categories = shopHome.shopHome.categories;
      const map = new Map(categories.map((skuId) => {
        const items = [skuId.skuId, skuId];
        return items;
      }));
      const _Map2 = Map;
      let items = [];
      HermesBuiltin.arraySpread(map, HermesBuiltin.arraySpread(map, 0));
      const map1 = new Map(items);
      updateCategoriesAndProducts(map1);
    }
  },
  COLLECTIBLES_SKIP_NUM_CATEGORIES: function handleSetSkipNumCategories(skipNumCategories) {
    skipNumCategories = skipNumCategories.skipNumCategories;
  },
  LOGOUT: reset
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/collectibles/CollectiblesCategoryStore.tsx");

export default tmp6;
