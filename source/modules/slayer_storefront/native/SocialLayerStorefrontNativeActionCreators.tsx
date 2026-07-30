// Module ID: 9751
// Function ID: 9752
// Name: SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY
// Dependencies: [21, 4529, 1236, 3161, 7885, 6685, 4395, 9752, 1959, 9763, 9767, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal, openSocialLayerStorefrontUnsupportedOnMobileAlert

// Module 9751 (SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY)
import { jsx } from "jsxProd";

let c4 = "social-layer-storefront-product-details-native-modal";
let c5 = "social-layer-storefront-native-gift-modal";
const result = require("getSystemLocale").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = importDefault(4529);
  obj = { title: null, body: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(importDefault(3161).XjhkM5);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(importDefault(3161).NBFa62);
  obj.show(obj);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(closure_0) {
  let obj = require(7885) /* apexExperiment */;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = tmp(6685).fetchSocialLayerStorefrontConfig();
    const obj5 = importDefault(4395);
    obj5.pushLazy(tmp(1959)(9752, dependencyMap.paths), closure_0, c4, { presentation: "modal" });
    const tmpResult = tmp(6685);
  } else {
    obj = { title: null, body: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(importDefault(3161).XjhkM5);
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(importDefault(3161).NBFa62);
    importDefault(4529).show(obj);
    const obj2 = importDefault(4529);
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  importDefault(4395).popWithKey(c4);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(closure_0) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9763, dependencyMap.paths), closure_0, c5);
    const obj2 = importDefault(4395);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  importDefault(4395).popWithKey(c5);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4529);
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
  let obj = importDefault(4529);
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
