// Module ID: 11021
// Function ID: 11022
// Name: usePreviewCollectibleProduct
// Dependencies: [32, 19, 8091, 7480, 1947, 7481, 7482, 8102, 11020, 1949, 8095, 2]
// Exports: usePreviewCollectibleProduct

// Module 11021 (usePreviewCollectibleProduct)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleFormOpen" /* 8091 */;
import { isAvatarDecorationRecord, isNameplateRecord, isProfileEffectRecord, isProfileFrameRecord } from "fromServer" /* 7480 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  const _require = product;
  dependencyMap = arg1;
  closure_2 = arg2;
  const shopProductItems = _require(8102).useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    let obj = product;
    obj1 = product(11020);
    product = obj1.currentPreviewGeneration();
    const pendingChanges = firstAvatarDecoration.getPendingChanges();
    dependencyMap = { avatarDecoration: pendingChanges.pendingAvatarDecoration, profileEffect: pendingChanges.pendingProfileEffect, nameplate: pendingChanges.pendingNameplate, profileFrame: pendingChanges.pendingProfileFrame };
    if (product.type === product(1949).CollectiblesItemType.BUNDLE) {
      obj = {};
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
        if (firstNameplate(tmp12)) {
          obj.avatarDecoration = tmp12;
        } else {
          if (closure_1_7(tmp12)) {
            obj.profileEffect = tmp12;
          } else if (!firstProfileFrame(tmp12)) {
            if (closure_1_8(tmp12)) {
              obj.profileFrame = tmp12;
            }
          }
          obj.nameplate = tmp12;
        }
      }
      obj = obj(8095);
      obj.setPendingChanges(obj);
    } else {
      const first = callback(product.items, 1)[0];
      if (firstNameplate(first)) {
        let objResult = obj(8095);
        obj = { avatarDecoration: null };
        obj[0] = first;
        objResult.setPendingChanges(obj);
      } else if (closure_1_7(first)) {
        objResult = obj(8095);
        obj1 = { profileEffect: null };
        obj1[0] = first;
        objResult.setPendingChanges(obj1);
      } else if (firstProfileFrame(first)) {
        let obj2 = { nameplate: null };
        obj2[0] = first;
        obj(8095).setPendingChanges(obj2);
        const objResult1 = obj(8095);
      } else if (closure_1_8(first)) {
        const obj3 = { profileFrame: null };
        obj3[0] = first;
        obj(8095).setPendingChanges(obj3);
        const objResult2 = obj(8095);
      }
      return () => {
        let tmp = dependencyMap;
        if (dependencyMap) {
          tmp = callback === callback(11020).currentPreviewGeneration();
          const obj = callback(11020);
        }
        if (tmp) {
          callback(8095).setPendingChanges(dependencyMap);
          const obj2 = callback(8095);
        }
      };
    }
  }, items);
};
