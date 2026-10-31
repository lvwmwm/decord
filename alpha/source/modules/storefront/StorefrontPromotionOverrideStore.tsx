// Module ID: 9481
// Function ID: 9482
// Name: StorefrontPromotionOverrideStore
// Dependencies: [504, 572, 2]

// Module 9481 (StorefrontPromotionOverrideStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let promotionIdOverride;
const Store = get_initializedDefault.Store;
class StorefrontPromotionOverrideStore extends Store {
  getPromotionIdOverride() {
    return promotionIdOverride;
  }
}
const prototype = StorefrontPromotionOverrideStore.prototype;
StorefrontPromotionOverrideStore.displayName = "StorefrontPromotionOverrideStore";
const obj = {
  LOGOUT: function handleLogout() {
    promotionIdOverride = undefined;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
};
const storefrontPromotionOverrideStore = new StorefrontPromotionOverrideStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default storefrontPromotionOverrideStore;
