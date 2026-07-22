// Module ID: 8735
// Function ID: 69092
// Name: usePreviewCollectibleProduct
// Dependencies: []
// Exports: usePreviewCollectibleProduct

// Module 8735 (usePreviewCollectibleProduct)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const isAvatarDecorationRecord = arg1(dependencyMap[2]).isAvatarDecorationRecord;
const isNameplateRecord = arg1(dependencyMap[3]).isNameplateRecord;
const isProfileEffectRecord = arg1(dependencyMap[4]).isProfileEffectRecord;
const isProfileFrameRecord = arg1(dependencyMap[5]).isProfileFrameRecord;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  arg1 = product;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  const shopProductItems = arg1(dependencyMap[6]).useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const React = firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const isAvatarDecorationRecord = firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const isNameplateRecord = firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const isProfileEffectRecord = firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = React.useEffect(() => {
    if (arg0.type === arg0(arg1[7]).CollectiblesItemType.BUNDLE) {
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
      if (null != arg2) {
        if (firstAvatarDecoration(arg2)) {
          obj.avatarDecoration = arg2;
        } else {
          if (firstProfileFrame(arg2)) {
            obj.profileEffect = arg2;
          } else if (!firstNameplate(arg2)) {
            if (callback(arg2)) {
              obj.profileFrame = arg2;
            }
          }
          obj.nameplate = arg2;
        }
      }
      arg0(arg1[8]).setPendingChanges(obj);
      const obj10 = arg0(arg1[8]);
    } else {
      const first = arg2(arg0.items, 1)[0];
      if (firstAvatarDecoration(first)) {
        obj = { avatarDecoration: first };
        arg0(arg1[8]).setPendingChanges(obj);
        const obj7 = arg0(arg1[8]);
      } else if (firstProfileFrame(first)) {
        const obj1 = { profileEffect: first };
        arg0(arg1[8]).setPendingChanges(obj1);
        const obj5 = arg0(arg1[8]);
      } else if (firstNameplate(first)) {
        let obj2 = arg0(arg1[8]);
        obj2 = { nameplate: first };
        obj2.setPendingChanges(obj2);
      } else if (callback(first)) {
        obj = arg0(arg1[8]);
        const obj3 = { profileFrame: first };
        obj.setPendingChanges(obj3);
      }
      return () => {
        if (closure_1) {
          let obj = callback(closure_1[8]);
          obj = { avatarDecoration: undefined, profileEffect: undefined, nameplate: undefined, profileFrame: undefined };
          obj.setPendingChanges(obj);
        }
      };
    }
  }, items);
};
