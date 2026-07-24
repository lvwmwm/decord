// Module ID: 9768
// Function ID: 75918
// Name: openSocialLayerStorefrontUnsupportedOnMobileAlert
// Dependencies: [33, 4471, 1212, 3104, 7882, 7539, 4337, 9769, 1934, 9780, 9784, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 9768 (openSocialLayerStorefrontUnsupportedOnMobileAlert)
import { jsx } from "jsxProd";

function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(3104).XjhkM5);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(importDefault(3104).NBFa62);
  obj.show(obj);
}
const result = require("getSystemLocale").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export { openSocialLayerStorefrontUnsupportedOnMobileAlert };
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(merged) {
  let obj = require(7882) /* apexExperiment */;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = require(7539) /* _fetchSocialLayerStorefront */.fetchSocialLayerStorefrontConfig();
    const obj3 = importDefault(4337);
    obj = { presentation: "modal" };
    obj3.pushLazy(require(1934) /* maybeLoadBundle */(9769, dependencyMap.paths), merged, "social-layer-storefront-product-details-native-modal", obj);
    const obj2 = require(7539) /* _fetchSocialLayerStorefront */;
  } else {
    openSocialLayerStorefrontUnsupportedOnMobileAlert();
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  importDefault(4337).popWithKey("social-layer-storefront-product-details-native-modal");
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(merged) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(9780, dependencyMap.paths), merged, "social-layer-storefront-native-gift-modal");
    const obj2 = importDefault(4337);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  importDefault(4337).popWithKey("social-layer-storefront-native-gift-modal");
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4471);
  obj = {
    importer() {
      return callback(outer1_2[8])(outer1_2[10], outer1_2.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(outer2_0);
          const merged1 = Object.assign(arg0);
          return outer3_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4471);
  obj = {
    importer() {
      return callback(outer1_2[8])(outer1_2[10], outer1_2.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(outer2_0);
          const merged1 = Object.assign(arg0);
          return outer3_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
