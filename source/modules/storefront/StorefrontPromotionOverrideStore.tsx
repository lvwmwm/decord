// Module ID: 7526
// Function ID: 7527
// Name: getPromotionIdOverride
// Dependencies: [589, 709, 2]

// Module 7526 (getPromotionIdOverride)
import { Store } from "initialize";

let c0;
class StorefrontPromotionOverrideStore extends Store {
}
StorefrontPromotionOverrideStore.prototype["getPromotionIdOverride"] = function getPromotionIdOverride() {
  return c0;
};
StorefrontPromotionOverrideStore.displayName = "StorefrontPromotionOverrideStore";
const storefrontPromotionOverrideStore = new StorefrontPromotionOverrideStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let c0;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default storefrontPromotionOverrideStore;
