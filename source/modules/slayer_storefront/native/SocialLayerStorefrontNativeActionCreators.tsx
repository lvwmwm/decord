// Module ID: 9692
// Function ID: 75513
// Name: openSocialLayerStorefrontUnsupportedOnMobileAlert
// Dependencies: [33, 4472, 1212, 3105, 7829, 6631, 4338, 9693, 1935, 9704, 9708, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 9692 (openSocialLayerStorefrontUnsupportedOnMobileAlert)
import { jsx } from "jsxProd";

function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = importDefault(4472);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(3105).XjhkM5);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(importDefault(3105).NBFa62);
  obj.show(obj);
}
const result = require("getSystemLocale").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export { openSocialLayerStorefrontUnsupportedOnMobileAlert };
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(merged) {
  let obj = require(7829) /* apexExperiment */;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = require(6631) /* _fetchSocialLayerStorefront */.fetchSocialLayerStorefrontConfig();
    const obj3 = importDefault(4338);
    obj = { presentation: "modal" };
    obj3.pushLazy(require(1935) /* maybeLoadBundle */(9693, dependencyMap.paths), merged, "social-layer-storefront-product-details-native-modal", obj);
    const obj2 = require(6631) /* _fetchSocialLayerStorefront */;
  } else {
    openSocialLayerStorefrontUnsupportedOnMobileAlert();
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  importDefault(4338).popWithKey("social-layer-storefront-product-details-native-modal");
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(merged) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9704, dependencyMap.paths), merged, "social-layer-storefront-native-gift-modal");
    const obj2 = importDefault(4338);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  importDefault(4338).popWithKey("social-layer-storefront-native-gift-modal");
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4472);
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
  let obj = importDefault(4472);
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
