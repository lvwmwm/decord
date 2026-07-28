// Module ID: 9732
// Function ID: 75643
// Name: openSocialLayerStorefrontUnsupportedOnMobileAlert
// Dependencies: [33, 4506, 1212, 3137, 7865, 6667, 4372, 9733, 1935, 9744, 9748, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 9732 (openSocialLayerStorefrontUnsupportedOnMobileAlert)
import { jsx } from "jsxProd";

function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = importDefault(4506);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(3137).XjhkM5);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(importDefault(3137).NBFa62);
  obj.show(obj);
}
const result = require("getSystemLocale").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export { openSocialLayerStorefrontUnsupportedOnMobileAlert };
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(merged) {
  let obj = require(7865) /* apexExperiment */;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = require(6667) /* _fetchSocialLayerStorefront */.fetchSocialLayerStorefrontConfig();
    const obj3 = importDefault(4372);
    obj = { presentation: "modal" };
    obj3.pushLazy(require(1935) /* maybeLoadBundle */(9733, dependencyMap.paths), merged, "social-layer-storefront-product-details-native-modal", obj);
    const obj2 = require(6667) /* _fetchSocialLayerStorefront */;
  } else {
    openSocialLayerStorefrontUnsupportedOnMobileAlert();
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  importDefault(4372).popWithKey("social-layer-storefront-product-details-native-modal");
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(merged) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(9744, dependencyMap.paths), merged, "social-layer-storefront-native-gift-modal");
    const obj2 = importDefault(4372);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  importDefault(4372).popWithKey("social-layer-storefront-native-gift-modal");
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4506);
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
  let obj = importDefault(4506);
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
