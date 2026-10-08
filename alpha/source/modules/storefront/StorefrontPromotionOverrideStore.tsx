// Module ID: 8960
// Function ID: 8961
// Name: StorefrontPromotionOverrideStore
// Dependencies: [504, 584, 2]

// Module 8960 (StorefrontPromotionOverrideStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
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
