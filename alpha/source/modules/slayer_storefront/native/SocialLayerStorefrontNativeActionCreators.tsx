// Module ID: 10669
// Function ID: 10670
// Name: SocialLayerStorefrontNativeActionCreators
// Dependencies: [6896, 21, 5959, 1113, 3738, 10670, 6744, 10671, 1994, 2059, 10675, 10691, 14412, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal, openSocialLayerStorefrontUnsupportedOnMobileAlert

// Module 10669 (SocialLayerStorefrontNativeActionCreators)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2059 */;
import _modDef3738 from "module_3738" /* 3738 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10670 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10675 */;
import SKUStore from "SKUStore" /* 6896 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c5 = "social-layer-storefront-product-details-native-modal";
let c6 = "social-layer-storefront-native-gift-modal";
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let intl;
  let intl2;
  const obj = { title: intl.string(_modDef3738.XjhkM5), body: intl2.string(_modDef3738.NBFa62) };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
}
export function openSocialLayerStorefrontProductDetailsModal(merged) {
  const obj = SocialLayerStorefrontActionCreators;
  const socialLayerStorefrontConfig = obj.fetchSocialLayerStorefrontConfig();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10671, dependencyMap.paths), merged, c5, { presentation: "modal" });
}
export function closeSocialLayerStorefrontProductDetailsModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c5);
}
export function openSocialLayerStorefrontGiftModal(skuId) {
  const obj = BillingPlatformUtils;
  const tmp2 = dependencyMap;
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    const tmp3Result = ModalActionCreatorsDefault;
    tmp3Result.pushLazy(asyncRequire(10691, tmp2.paths), skuId, c6);
  } else {
    const tmp3Result2 = redirectToSlayerStorefrontWebDefault;
    const value = SKUStore.get(skuId.skuId);
    let applicationId;
    if (value != null) {
      applicationId = value.applicationId;
    }
    const obj2 = { applicationId, skuId: skuId.skuId, source: "openSocialLayerStorefrontGiftModal" };
    tmp3Result2(obj2);
  }
}
export function closeSocialLayerStorefrontGiftModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c6);
}
export function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      const promise = asyncRequire(14412, dependencyMap.paths);
      return promise.then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_2_0);
          const merged1 = Object.assign(arg0);
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  };
  return obj.openLazy(obj2);
}
export function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      const promise = asyncRequire(14412, dependencyMap.paths);
      return promise.then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_2_0);
          const merged1 = Object.assign(arg0);
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  };
  return obj.openLazy(obj2);
}
