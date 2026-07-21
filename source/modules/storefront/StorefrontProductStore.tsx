// Module ID: 13847
// Function ID: 104715
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13847 (_isNativeReflectConstruct)
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
let closure_5 = {};
let closure_6 = {};
let tmp2 = (Store) => {
  class StorefrontProductStore {
    constructor() {
      self = this;
      tmp = StorefrontProductStore(this, StorefrontProductStore);
      obj = closure_3(StorefrontProductStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = StorefrontProductStore;
  callback2(StorefrontProductStore, Store);
  let obj = {
    key: "getFetchState",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let state;
        if (null != closure_5[arg0]) {
          state = tmp3.state;
        }
        tmp = state;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getFetchStateForSku",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let state;
        if (null != closure_6[arg0]) {
          state = tmp3.state;
        }
        tmp = state;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFetchedAt",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let fetchedAt;
        if (null != closure_5[arg0]) {
          fetchedAt = tmp3.fetchedAt;
        }
        tmp = fetchedAt;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchedAtForSku",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let fetchedAt;
        if (null != closure_6[arg0]) {
          fetchedAt = tmp3.fetchedAt;
        }
        tmp = fetchedAt;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getFetchError",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let fetchError;
        if (null != closure_5[arg0]) {
          fetchError = tmp3.fetchError;
        }
        tmp = fetchError;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getFetchErrorForSku",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let fetchError;
        if (null != closure_6[arg0]) {
          fetchError = tmp3.fetchError;
        }
        tmp = fetchError;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getProduct",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = closure_5[arg0];
      }
      let product = null;
      if (null != tmp) {
        let state;
        if (null != tmp) {
          state = tmp.state;
        }
        product = null;
        if ("error" !== state) {
          product = null;
          if (null != tmp.product) {
            product = tmp.product;
          }
        }
      }
      return product;
    }
  };
  items[7] = {
    key: "getProductsForSku",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let products;
        if (null != closure_6[arg0]) {
          products = tmp3.products;
        }
        tmp = products;
      }
      return tmp;
    }
  };
  return callback(StorefrontProductStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "StorefrontProductStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function handleProductsWithSkusFetch(productIds) {
    productIds = productIds.productIds;
    const item = productIds.forEach((arg0) => {
      const obj = { state: "loading" };
      let product;
      if (null != closure_5[arg0]) {
        product = tmp2.product;
      }
      obj.product = product;
      closure_5[arg0] = obj;
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    let productIds;
    let products;
    ({ productIds, products } = arg0);
    let closure_0 = Date.now();
    let closure_1 = new Set();
    const item = products.forEach((id) => {
      set.add(id.id);
      closure_5[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
    });
    const item1 = productIds.forEach((arg0) => {
      if (!set.has(arg0)) {
        delete r0[r1];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    let productIds;
    ({ productIds, apiError: closure_0 } = arg0);
    let closure_1 = Date.now();
    const item = productIds.forEach((arg0) => {
      closure_5[arg0] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((arg0) => {
      const obj = { state: "loading" };
      let products;
      if (null != closure_6[arg0]) {
        products = tmp2.products;
      }
      obj.products = products;
      closure_6[arg0] = obj;
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    let products;
    let skuIds;
    ({ skuIds, products } = arg0);
    let closure_0 = Date.now();
    let closure_1 = products.reduce((arg0, skuIds) => {
      let closure_0 = arg0;
      let closure_1 = skuIds;
      skuIds = skuIds.skuIds;
      const item = skuIds.forEach((arg0) => {
        if (null == arg0[arg0]) {
          const items = [arg1];
          arg0[arg0] = items;
        } else {
          let arr = arg0[arg0];
          arr = arr.push(arg1);
        }
      });
      return arg0;
    }, {});
    const item = skuIds.forEach((arg0) => {
      if (null != closure_1[arg0]) {
        const obj = { state: "success", products: closure_1[arg0], fetchedAt: closure_0 };
        closure_6[arg0] = obj;
      } else {
        delete r0[r2];
      }
    });
    const item1 = products.forEach((id) => {
      closure_5[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    let skuIds;
    ({ skuIds, apiError: closure_0 } = arg0);
    let closure_1 = Date.now();
    const item = skuIds.forEach((arg0) => {
      closure_6[arg0] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(collections) {
    collections = collections.collections;
    let closure_0 = Date.now();
    const item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((id) => {
        closure_5[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(collections) {
    collections = collections.collections;
    let closure_0 = Date.now();
    const item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((id) => {
        closure_5[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
      });
    });
  },
  LOGOUT: function handleLogout() {
    let closure_5 = {};
    let closure_6 = {};
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default tmp2;
