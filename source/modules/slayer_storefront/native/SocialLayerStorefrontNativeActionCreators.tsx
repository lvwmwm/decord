// Module ID: 10135
// Function ID: 10136
// Name: SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY
// Dependencies: [21, 4683, 1236, 3239, 8256, 7798, 4549, 10136, 2007, 10145, 10149, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal, openSocialLayerStorefrontUnsupportedOnMobileAlert

// Module 10135 (SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY)
import { jsx } from "jsxProd";

let c4 = "social-layer-storefront-product-details-native-modal";
let c5 = "social-layer-storefront-native-gift-modal";
const result = require("getSystemLocale").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = importDefault(4683);
  obj = { title: null, body: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(importDefault(3239).XjhkM5);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(importDefault(3239).NBFa62);
  obj.show(obj);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(closure_0) {
  let obj = require(8256) /* apexExperiment */;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = tmp(7798).fetchSocialLayerStorefrontConfig();
    const obj5 = importDefault(4549);
    obj5.pushLazy(tmp(2007)(10136, dependencyMap.paths), closure_0, c4, { presentation: "modal" });
    const tmpResult = tmp(7798);
  } else {
    obj = { title: null, body: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(importDefault(3239).XjhkM5);
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(importDefault(3239).NBFa62);
    importDefault(4683).show(obj);
    const obj2 = importDefault(4683);
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  importDefault(4549).popWithKey(c4);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(closure_0) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(10145, dependencyMap.paths), closure_0, c5);
    const obj2 = importDefault(4549);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  importDefault(4549).popWithKey(c5);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4683);
  obj = {
    importer() {
      return callback(outer1_2[8])(outer1_2[10], outer1_2.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return outer2_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4683);
  obj = {
    importer() {
      return callback(outer1_2[8])(outer1_2[10], outer1_2.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return outer2_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
