// Module ID: 6769
// Function ID: 53244
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6769 (_isNativeReflectConstruct)
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
function updateCategoriesAndProducts(map) {
  const items = [...closure_19.values()];
  map = new Map(items.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  const productsFromCategories = arg1(dependencyMap[11]).getProductsFromCategories(map, true);
  const map1 = new Map(productsFromCategories.map((skuId) => {
    const items = [skuId.skuId, skuId];
    return items;
  }));
  const arg1 = map1;
  const item = map1.forEach((skuId) => {
    if (!map1.has(skuId.skuId)) {
      const result = map1.set(skuId.skuId, skuId);
    }
  });
  const obj = arg1(dependencyMap[11]);
  const productsFromCategories1 = arg1(dependencyMap[11]).getProductsFromCategories(map, false);
  const map2 = new Map(productsFromCategories1.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  let closure_16 = [...map2.values()];
}
function reset() {
  let closure_19 = map;
  let closure_14 = map1;
  let closure_23;
  let closure_21 = false;
  let closure_18 = {};
  const values = Object.values(closure_17);
  const item = values.forEach((cancel) => cancel.cancel());
  closure_17 = {};
  let closure_22;
  let closure_24;
  let closure_25 = {};
  let closure_26 = 0;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = 10 * importDefault(dependencyMap[7]).Millis.SECOND;
let closure_11 = 10 * importDefault(dependencyMap[7]).Millis.MINUTE;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let closure_16 = [];
let closure_17 = {};
let closure_18 = {};
let closure_21 = false;
let closure_22;
let closure_23;
let closure_24;
let closure_25 = {};
let closure_26 = 0;
let tmp6 = (Store) => {
  class CollectiblesCategoryStore {
    constructor() {
      self = this;
      tmp = closure_3(this, CollectiblesCategoryStore);
      obj = closure_6(CollectiblesCategoryStore);
      tmp2 = closure_5;
      if (closure_27()) {
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
  const arg1 = CollectiblesCategoryStore;
  callback2(CollectiblesCategoryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_8];
      this.syncWith(items, closure_31);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isFetchingCategories",
    get() {
      return closure_21;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingProduct",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let state;
        if (null != closure_18[arg0]) {
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
        if (null != closure_17[arg0]) {
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
      return closure_22;
    }
  };
  items[5] = {
    key: "lastErrorTimestamp",
    get() {
      return closure_24;
    }
  };
  items[6] = {
    key: "lastSuccessfulFetch",
    get() {
      return closure_23;
    }
  };
  items[7] = {
    key: "lastFetchOptions",
    get() {
      return closure_25;
    }
  };
  items[8] = {
    key: "categories",
    get() {
      return closure_19;
    }
  };
  items[9] = {
    key: "products",
    get() {
      return closure_14;
    }
  };
  items[10] = {
    key: "productsWithVariantsAsGroup",
    get() {
      return closure_16;
    }
  };
  items[11] = {
    key: "skipNumCategories",
    get() {
      return closure_26;
    }
  };
  items[12] = {
    key: "getCategory",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = closure_19.get(arg0);
      }
      return value;
    }
  };
  items[13] = {
    key: "getProduct",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = closure_14.get(arg0);
      }
      return value;
    }
  };
  items[14] = {
    key: "getProductsBySkus",
    value(arr) {
      const mapped = arr.map((arg0) => closure_14.get(arg0));
      return mapped.filter((arg0) => null != arg0);
    }
  };
  items[15] = {
    key: "getProductFetch",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = closure_18[arg0];
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getProductByStoreListingId",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = closure_15.get(arg0);
      }
      return value;
    }
  };
  items[17] = {
    key: "getCategoryByStoreListingId",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = closure_20.get(arg0);
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
}(importDefault(dependencyMap[12]).Store);
tmp6.displayName = "CollectiblesCategoryStore";
tmp6 = new tmp6(importDefault(dependencyMap[9]), {
  COLLECTIBLES_CATEGORIES_FETCH: function handleFetchCategories(options) {
    let closure_21 = true;
    let closure_22;
    let closure_24;
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
      const obj = arg1(dependencyMap[10]);
      const items = [];
      HermesBuiltin.arraySpread(map.values(), 0);
      if (!obj.isEqual(items, mapped)) {
        if (!categories.noOp) {
          const _Map = Map;
          const map = new Map(mapped.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
          const arg1 = map;
          const _Date = Date;
          const date = new Date();
          const importDefault = date;
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
    let closure_21 = false;
    let closure_22;
    let closure_24;
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function handleFetchCategoriesFailure(error) {
    let closure_19 = map;
    let closure_14 = map1;
    let closure_21 = false;
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
    if (null != closure_18[skuId]) {
      startedAt = tmp6.startedAt;
    }
    obj.startedAt = startedAt;
    obj.endedAt = endedAt.endedAt;
    closure_18[skuId] = obj;
    if (null != closure_17[skuId]) {
      obj2.succeed();
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: function handleFetchProductFailure(skuId) {
    let endedAt;
    let error;
    skuId = skuId.skuId;
    const arg1 = skuId;
    const obj = { state: "error" };
    let startedAt;
    ({ error, endedAt } = skuId);
    if (null != closure_18[skuId]) {
      startedAt = tmp2.startedAt;
    }
    obj.startedAt = startedAt;
    obj.endedAt = endedAt;
    obj.error = error;
    closure_18[skuId] = obj;
    let obj2 = closure_17[skuId];
    if (null == obj2) {
      let tmp6 = importDefault(dependencyMap[8]);
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(closure_10, closure_11);
      closure_17[skuId] = tmp6;
      obj2 = tmp6;
    }
    if (!obj2.pending) {
      obj2.fail(() => {
        let obj = callback(closure_2[9]);
        obj = { type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId };
        return obj.dispatch(obj);
      });
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED: function handleProductFetchBackoffExpired(arg0) {
    if (null != closure_17[arg0.skuId]) {
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
      const items = [];
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
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/collectibles/CollectiblesCategoryStore.tsx");

export default tmp6;
