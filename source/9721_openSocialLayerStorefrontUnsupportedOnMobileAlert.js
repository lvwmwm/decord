// Module ID: 9721
// Function ID: 75624
// Name: openSocialLayerStorefrontUnsupportedOnMobileAlert
// Dependencies: []
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 9721 (openSocialLayerStorefrontUnsupportedOnMobileAlert)
function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj.title = intl.string(importDefault(dependencyMap[3]).XjhkM5);
  const intl2 = require(dependencyMap[2]).intl;
  obj.body = intl2.string(importDefault(dependencyMap[3]).NBFa62);
  obj.show(obj);
}
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[11]);
const result = _module.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export { openSocialLayerStorefrontUnsupportedOnMobileAlert };
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(closure_2) {
  let obj = require(dependencyMap[4]);
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = require(dependencyMap[5]).fetchSocialLayerStorefrontConfig();
    const obj3 = importDefault(dependencyMap[6]);
    obj = { presentation: "modal" };
    obj3.pushLazy(require(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), closure_2, "social-layer-storefront-product-details-native-modal", obj);
    const obj2 = require(dependencyMap[5]);
  } else {
    openSocialLayerStorefrontUnsupportedOnMobileAlert();
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  importDefault(dependencyMap[6]).popWithKey("social-layer-storefront-product-details-native-modal");
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(closure_2) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    importDefault(dependencyMap[6]).pushLazy(require(dependencyMap[8])(dependencyMap[9], dependencyMap.paths), closure_2, "social-layer-storefront-native-gift-modal");
    const obj2 = importDefault(dependencyMap[6]);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  importDefault(dependencyMap[6]).popWithKey("social-layer-storefront-native-gift-modal");
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  const require = arg0;
  let obj = importDefault(dependencyMap[1]);
  obj = {
    importer() {
      return arg0(paths[8])(paths[10], paths.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return callback(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  const require = arg0;
  let obj = importDefault(dependencyMap[1]);
  obj = {
    importer() {
      return arg0(paths[8])(paths[10], paths.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return callback(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
