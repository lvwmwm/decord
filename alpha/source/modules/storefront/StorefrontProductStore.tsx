// Module ID: 8868
// Function ID: 8869
// Name: StorefrontProductStore
// Dependencies: [8869, 504, 572, 2]

// Module 8868 (StorefrontProductStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GenericIAPStore from "GenericIAPStore" /* 8869 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, id, set;

function handleNativeStorefront() {

}
const React2 = {};
const _false = {};
const Store = get_initializedDefault.Store;
class StorefrontProductStore extends Store {
  initialize() {
    const _default = GenericIAPStore.default;
    if (null != _default) {
      const self = this;
      this.waitFor(_default);
    }
  }
  getFetchState(arg0) {
    let tmp;
    if (null != arg0) {
      let state;
      if (closure_2[arg0] != null) {
        state = tmp3.state;
      }
      tmp = state;
    }
    return tmp;
  }
  getFetchStateForSku(item10006) {
    let tmp;
    if (null != item10006) {
      let state;
      if (closure_3[item10006] != null) {
        state = tmp3.state;
      }
      tmp = state;
    }
    return tmp;
  }
  getFetchedAt(arg0) {
    let tmp;
    if (null != arg0) {
      let fetchedAt;
      if (closure_2[arg0] != null) {
        fetchedAt = tmp3.fetchedAt;
      }
      tmp = fetchedAt;
    }
    return tmp;
  }
  getFetchedAtForSku(item) {
    let tmp;
    if (null != item) {
      let fetchedAt;
      if (closure_3[item] != null) {
        fetchedAt = tmp3.fetchedAt;
      }
      tmp = fetchedAt;
    }
    return tmp;
  }
  getFetchError(arg0) {
    let tmp;
    if (null != arg0) {
      let fetchError;
      if (closure_2[arg0] != null) {
        fetchError = tmp3.fetchError;
      }
      tmp = fetchError;
    }
    return tmp;
  }
  getFetchErrorForSku(arg0) {
    let tmp;
    if (null != arg0) {
      let fetchError;
      if (closure_3[arg0] != null) {
        fetchError = tmp3.fetchError;
      }
      tmp = fetchError;
    }
    return tmp;
  }
  getProduct(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_2[arg0];
    }
    let product = null;
    if (null != tmp) {
      let state;
      if (tmp != null) {
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
  getPricingKeyForSku(item) {
    let tmp = null;
    if (null != item) {
      tmp = closure_3[item];
    }
    let state;
    if (tmp != null) {
      state = tmp.state;
    }
    let pricingKey;
    if ("success" === state) {
      pricingKey = tmp.pricingKey;
    }
    return pricingKey;
  }
  getNativeStorefrontCountry() {
    const _default = GenericIAPStore.default;
    let country;
    if (_default != null) {
      const storeFront = _default.getStoreFront();
      if (storeFront != null) {
        country = storeFront.country;
      }
    }
    let tmp3 = null;
    if (null != country) {
      tmp3 = null;
      if ("" !== country) {
        tmp3 = country;
      }
    }
    return tmp3;
  }
  getProductsForSku(nextResult) {
    let tmp;
    if (null != nextResult) {
      let products;
      if (closure_3[nextResult] != null) {
        products = tmp3.products;
      }
      tmp = products;
    }
    return tmp;
  }
  hasPricingCoverage(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let includePricing;
      if (closure_2[arg0] != null) {
        includePricing = tmp3.includePricing;
      }
      tmp = includePricing;
    }
    return true === tmp;
  }
}
const prototype = StorefrontProductStore.prototype;
StorefrontProductStore.displayName = "StorefrontProductStore";
let obj = {
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function handleProductsWithSkusFetch(productIds) {
    productIds = productIds.productIds;
    const item = productIds.forEach((item) => {
      let product;
      const tmp = closure_1_2;
      if (closure_1_2[item] != null) {
        product = tmp2.product;
      }
      tmp[item] = { state: "loading", product, includePricing: true };
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    let productIds;
    let products;
    ({ productIds, products } = arg0);
    const fetchedAt = Date.now();
    set = new Set();
    const item = products.forEach((id) => {
      set.add(id.id);
      const obj = { state: "success", product: id, fetchedAt, includePricing: true };
      closure_2[id.id] = obj;
    });
    const item1 = productIds.forEach((item) => {
      const tmp = item;
      if (!set.has(item)) {
        delete closure_2[tmp];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    let fetchError;
    let productIds;
    ({ productIds, apiError: require } = arg0);
    const fetchedAt = Date.now();
    const item = productIds.forEach((item) => {
      const obj = { state: "error", fetchedAt, fetchError: require };
      closure_2[item] = obj;
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((item) => {
      let products;
      const tmp = closure_1_3;
      if (closure_1_3[item] != null) {
        products = tmp2.products;
      }
      tmp[item] = { state: "loading", products };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    let pricingKey;
    let products;
    let skuIds;
    ({ skuIds, products, pricingKey } = arg0);
    if (pricingKey === undefined) {
      pricingKey = "";
    }
    const fetchedAt = Date.now();
    closure_2 = products.reduce((acc, skuIds) => {
      let closure_1 = skuIds;
      skuIds = skuIds.skuIds;
      const item = skuIds.forEach((item) => {
        if (null == acc[item]) {
          const items = [skuIds];
          acc[item] = items;
        } else {
          const arr = acc[item];
          arr.push(skuIds);
        }
      });
      return acc;
    }, {});
    let item = skuIds.forEach((item) => {
      if (null != closure_2[item]) {
        const obj = { state: "success", products: tmp2[item], fetchedAt, pricingKey };
        closure_3[item] = obj;
      } else {
        delete closure_3[tmp];
      }
    });
    const item1 = products.forEach((product) => {
      const obj = { state: "success", product, fetchedAt, includePricing: true };
      closure_2[product.id] = obj;
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    let fetchError;
    let skuIds;
    ({ skuIds, apiError: require } = arg0);
    const fetchedAt = Date.now();
    const item = skuIds.forEach((item) => {
      const obj = { state: "error", fetchedAt, fetchError: require };
      closure_3[item] = obj;
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(arg0) {
    let collections;
    let pricingKey;
    ({ collections, includePricing: require, pricingKey } = arg0);
    if (pricingKey === undefined) {
      pricingKey = "";
    }
    closure_2 = Date.now();
    let item = collections.forEach((products) => {
      let fetchedAt;
      products = products.products;
      let item = products.forEach((id) => {
        includePricing = id;
        if (!includePricing) {
          let state;
          if (fetchedAt[id.id] != null) {
            state = tmp3.state;
          }
          if ("success" === state) {
            if (fetchedAt[id.id].includePricing) {
              let obj = { fetchedAt };
              id = id.id;
              const merged = Object.assign(tmp3);
              fetchedAt[id] = obj;
            }
            if (includePricing) {
              const skuIds = id.skuIds;
              const item = skuIds.forEach((item) => {
                let items;
                const obj = { state: "success", products: items, fetchedAt, pricingKey };
                items = [id];
                closure_3_3[item] = obj;
              });
            }
          }
        }
        fetchedAt[id.id] = { state: "success", product: id, fetchedAt, includePricing };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(arg0) {
    let collections;
    ({ collections, includePricing: require } = arg0);
    let closure_1 = Date.now();
    let item = collections.forEach((products) => {
      let fetchedAt;
      let includePricing;
      products = products.products;
      const item = products.forEach((id) => {
        if (!includePricing) {
          let state;
          if (closure_2_2[id.id] != null) {
            state = tmp3.state;
          }
          if ("success" === state) {
            if (closure_2_2[id.id].includePricing) {
              id = id.id;
              const obj = { fetchedAt };
              const merged = Object.assign(tmp3);
              closure_2_2[id] = obj;
            }
          }
        }
        closure_2_2[id.id] = { state: "success", product: id, fetchedAt, includePricing };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function handleCollectionsForApplicationPageFetchSuccess(arg0) {
    let collections;
    let pricingKey;
    ({ collections, pricingKey } = arg0);
    if (pricingKey === undefined) {
      pricingKey = "";
    }
    let closure_1 = Date.now();
    let item = collections.forEach((products) => {
      let fetchedAt;
      products = products.products;
      let item = products.forEach((product) => {
        let closure_0 = product;
        let obj = { state: "success", product, fetchedAt, includePricing: true };
        closure_1_2[product.id] = obj;
        const skuIds = product.skuIds;
        const item = skuIds.forEach((item) => {
          let items;
          const obj = { state: "success", products: items, fetchedAt, pricingKey };
          items = [closure_0];
          closure_3_3[item] = obj;
        });
      });
    });
  },
  LOGOUT: function handleLogout() {
    closure_2 = {};
    closure_3 = {};
  },
  GENERIC_IAP_SET_STORE_FRONT: handleNativeStorefront,
  IAP_LOAD_GENERIC_PRODUCTS: handleNativeStorefront
};
const storefrontProductStore = new StorefrontProductStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default storefrontProductStore;
