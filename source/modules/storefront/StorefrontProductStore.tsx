// Module ID: 13968
// Function ID: 106911
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 13968 (_isNativeReflectConstruct)
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
let closure_5 = {};
let closure_6 = {};
let tmp2 = ((Store) => {
  class StorefrontProductStore {
    constructor() {
      self = this;
      tmp = StorefrontProductStore(this, StorefrontProductStore);
      obj = outer1_3(StorefrontProductStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(StorefrontProductStore, Store);
  let obj = {
    key: "getFetchState",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        let state;
        if (null != outer1_5[arg0]) {
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
        if (null != outer1_6[arg0]) {
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
        if (null != outer1_5[arg0]) {
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
        if (null != outer1_6[arg0]) {
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
        if (null != outer1_5[arg0]) {
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
        if (null != outer1_6[arg0]) {
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
        tmp = outer1_5[arg0];
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
        if (null != outer1_6[arg0]) {
          products = tmp3.products;
        }
        tmp = products;
      }
      return tmp;
    }
  };
  return callback(StorefrontProductStore, items);
})(require("initialize").Store);
tmp2.displayName = "StorefrontProductStore";
tmp2 = new tmp2(require("dispatcher"), {
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function handleProductsWithSkusFetch(productIds) {
    productIds = productIds.productIds;
    const item = productIds.forEach((arg0) => {
      const obj = { state: "loading" };
      let product;
      if (null != outer1_5[arg0]) {
        product = tmp2.product;
      }
      obj.product = product;
      outer1_5[arg0] = obj;
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    let productIds;
    let products;
    ({ productIds, products } = arg0);
    let dispatcher = Date.now();
    const set = new Set();
    const item = products.forEach((id) => {
      set.add(id.id);
      outer1_5[id.id] = { state: "success", product: id, fetchedAt: dispatcher };
    });
    const item1 = productIds.forEach((arg0) => {
      if (!set.has(arg0)) {
        delete tmp[tmp2];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    let dispatcher;
    let productIds;
    ({ productIds, apiError: dispatcher } = arg0);
    let set = Date.now();
    const item = productIds.forEach((arg0) => {
      outer1_5[arg0] = { state: "error", fetchedAt: set, fetchError: dispatcher };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((arg0) => {
      const obj = { state: "loading" };
      let products;
      if (null != outer1_6[arg0]) {
        products = tmp2.products;
      }
      obj.products = products;
      outer1_6[arg0] = obj;
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    let products;
    let skuIds;
    ({ skuIds, products } = arg0);
    let dispatcher = Date.now();
    let set = products.reduce((arg0, skuIds) => {
      let dispatcher = arg0;
      let set = skuIds;
      skuIds = skuIds.skuIds;
      const item = skuIds.forEach((arg0) => {
        if (null == dependencyMap[arg0]) {
          const items = [set];
          dependencyMap[arg0] = items;
        } else {
          let arr = dependencyMap[arg0];
          arr = arr.push(set);
        }
      });
      return arg0;
    }, {});
    let item = skuIds.forEach((arg0) => {
      if (null != dependencyMap[arg0]) {
        const obj = { state: "success", products: dependencyMap[arg0], fetchedAt: dispatcher };
        outer1_6[arg0] = obj;
      } else {
        delete tmp[tmp2];
      }
    });
    const item1 = products.forEach((id) => {
      outer1_5[id.id] = { state: "success", product: id, fetchedAt: dispatcher };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    let dispatcher;
    let skuIds;
    ({ skuIds, apiError: dispatcher } = arg0);
    let set = Date.now();
    const item = skuIds.forEach((arg0) => {
      outer1_6[arg0] = { state: "error", fetchedAt: set, fetchError: dispatcher };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(collections) {
    collections = collections.collections;
    let dispatcher = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((id) => {
        outer2_5[id.id] = { state: "success", product: id, fetchedAt: outer1_0 };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(collections) {
    collections = collections.collections;
    let dispatcher = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((id) => {
        outer2_5[id.id] = { state: "success", product: id, fetchedAt: outer1_0 };
      });
    });
  },
  LOGOUT: function handleLogout() {
    let closure_5 = {};
    let closure_6 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default tmp2;
