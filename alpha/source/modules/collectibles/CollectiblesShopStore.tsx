// Module ID: 7674
// Function ID: 7675
// Name: CollectiblesShopStore
// Dependencies: [504, 584, 2]

// Module 7674 (CollectiblesShopStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0;

const items = [];
const React2 = items;
const _false = null;
const Store = get_initializedDefault.Store;
class CollectiblesShopStore extends Store {
  getAnalytics() {
    return { analyticsLocations, analyticsSource };
  }
}
const prototype = CollectiblesShopStore.prototype;
Object.defineProperty(prototype, "analyticsLocations", {
  get: function analyticsLocations() {
    return analyticsLocations;
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsSource", {
  get: function analyticsSource() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "initialProductSkuId", {
  get: function initialProductSkuId() {
    return c0;
  },
  set: undefined
});
CollectiblesShopStore.displayName = "CollectiblesShopStore";
const obj = {
  COLLECTIBLES_SHOP_OPEN: function handleOpen(analyticsLocations) {
    analyticsLocations = analyticsLocations.analyticsLocations;
    if (analyticsLocations == null) {
      analyticsLocations = items;
    }
    let closure_2 = analyticsLocations;
    analyticsSource = analyticsLocations.analyticsSource;
    if (analyticsSource == null) {
      analyticsSource = null;
    }
    let c3 = analyticsSource;
    const initialProductSkuId = analyticsLocations.initialProductSkuId;
  },
  COLLECTIBLES_SHOP_CLOSE: function handleClose() {
    let closure_2 = items;
    let c3 = null;
    c0 = undefined;
  },
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: function handleProductDetailsOpen(skuId) {
    if (skuId.skuId === c0) {
      c0 = undefined;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_2 = items;
    let c3 = null;
    c0 = undefined;
  }
};
const collectiblesShopStore = new CollectiblesShopStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default collectiblesShopStore;
