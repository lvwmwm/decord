// Module ID: 8781
// Function ID: 69348
// Name: usePreviewCollectibleProduct
// Dependencies: [57, 31, 6779, 1874, 6780, 6781, 8251, 1876, 7933, 2]
// Exports: usePreviewCollectibleProduct

// Module 8781 (usePreviewCollectibleProduct)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  const _require = product;
  const dependencyMap = arg1;
  let _slicedToArray = arg2;
  const shopProductItems = _require(8251).useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    if (product.type === product(1876).CollectiblesItemType.BUNDLE) {
      let obj = {};
      if (null != firstAvatarDecoration) {
        obj.avatarDecoration = firstAvatarDecoration;
      }
      if (null != firstProfileEffect) {
        obj.profileEffect = firstProfileEffect;
      }
      if (null != firstNameplate) {
        obj.nameplate = firstNameplate;
      }
      if (null != firstProfileFrame) {
        obj.profileFrame = firstProfileFrame;
      }
      if (null != callback) {
        if (firstAvatarDecoration(callback)) {
          obj.avatarDecoration = callback;
        } else {
          if (firstProfileFrame(callback)) {
            obj.profileEffect = callback;
          } else if (!firstNameplate(callback)) {
            if (outer1_7(callback)) {
              obj.profileFrame = callback;
            }
          }
          obj.nameplate = callback;
        }
      }
      product(7933).setPendingChanges(obj);
      const obj10 = product(7933);
    } else {
      const first = callback(product.items, 1)[0];
      if (firstAvatarDecoration(first)) {
        obj = { avatarDecoration: first };
        product(7933).setPendingChanges(obj);
        const obj7 = product(7933);
      } else if (firstProfileFrame(first)) {
        const obj1 = { profileEffect: first };
        product(7933).setPendingChanges(obj1);
        const obj5 = product(7933);
      } else if (firstNameplate(first)) {
        let obj2 = product(7933);
        obj2 = { nameplate: first };
        obj2.setPendingChanges(obj2);
      } else if (outer1_7(first)) {
        obj = product(7933);
        const obj3 = { profileFrame: first };
        obj.setPendingChanges(obj3);
      }
      return () => {
        if (outer1_1) {
          let obj = callback(table[8]);
          obj = { avatarDecoration: undefined, profileEffect: undefined, nameplate: undefined, profileFrame: undefined };
          obj.setPendingChanges(obj);
        }
      };
    }
  }, items);
};
