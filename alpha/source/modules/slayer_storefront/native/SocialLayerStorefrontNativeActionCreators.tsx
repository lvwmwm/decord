// Module ID: 11645
// Function ID: 11646
// Name: SocialLayerStorefrontNativeActionCreators
// Dependencies: [5, 6163, 11116, 502, 6360, 21, 6047, 1112, 4145, 11123, 9408, 6130, 11646, 2120, 2186, 11650, 11658, 11661, 2]
// Exports: closeSocialLayerStorefrontGiftModal, closeSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontGiftModal, openSocialLayerStorefrontProductDetailsModal, openSocialLayerStorefrontProductGiftPurchaseSuccessModal, openSocialLayerStorefrontProductSelfPurchaseSuccessModal, openSocialLayerStorefrontUnsupportedOnMobileAlert, toggleSocialLayerStorefrontWishlist

// Module 11645 (SocialLayerStorefrontNativeActionCreators)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2186 */;
import _modDef4145 from "module_4145" /* 4145 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6047 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 9408 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 11123 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 11650 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
import WishlistStore from "WishlistStore" /* 11116 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SKUStore from "SKUStore" /* 6360 */;
import size from "module_2" /* 2 */;

let c1, c2, firstWishlistId, id;

let obj = function _toggleSocialLayerStorefrontWishlist() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let obj5;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            id = id.getId();
            firstWishlistId = null;
            if (null != id) {
              firstWishlistId = firstWishlistId.getFirstWishlistId(id);
            }
            if (null != firstWishlistId) {
              if (WishlistStore.hasSkuId(firstWishlistId, closure_0)) {
                c2 = 2;
                c1 = 1;
                const obj6 = { value: obj5.removeSkuFromWishlist(firstWishlistId, closure_0), done: false };
                obj5 = WishlistActionCreatorsDefault;
                return obj6;
              }
            }
            c2 = 1;
            c1 = 1;
            const obj7 = { value: obj3.addSkuToWishlist(closure_0), done: false };
            obj3 = WishlistActionCreatorsDefault;
            return obj7;
          }
        } else {
          if (1 === tmp3) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp11) {
        c1 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const jsx = Fragment.jsx;
let c9 = "social-layer-storefront-product-details-native-modal";
let c10 = "social-layer-storefront-native-gift-modal";
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(_modDef4145.XjhkM5), body: intl2.string(_modDef4145.NBFa62) };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
}
export function toggleSocialLayerStorefrontWishlist() {
  return obj(...arguments);
}
export function openSocialLayerStorefrontProductDetailsModal(merged) {
  obj = SocialLayerStorefrontActionCreators;
  const socialLayerStorefrontConfig = obj.fetchSocialLayerStorefrontConfig();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11646, dependencyMap.paths), merged, c9, { presentation: "modal" });
}
export function closeSocialLayerStorefrontProductDetailsModal() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(c9);
}
export function openSocialLayerStorefrontGiftModal(skuId) {
  obj = BillingPlatformUtils;
  const tmp2 = dependencyMap;
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    const tmp3Result = ModalActionCreatorsDefault;
    tmp3Result.pushLazy(asyncRequire(11658, tmp2.paths), skuId, c10);
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
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(c10);
}
export function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      const promise = asyncRequire(11661, dependencyMap.paths);
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
  obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      const promise = asyncRequire(11661, dependencyMap.paths);
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
