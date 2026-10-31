// Module ID: 15023
// Function ID: 15024
// Name: useCollectibleProfileOverrides
// Dependencies: [19, 7725, 7726, 7727, 8742, 1987, 2]
// Exports: useCollectibleProfileOverrides

// Module 15023 (useCollectibleProfileOverrides)
import CollectiblesItemType from "CollectiblesItemType" /* 1987 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7725 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7726 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7727 */;
import useShopProductItems from "useShopProductItems" /* 8742 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectibleProfileOverrides.tsx");

export function useCollectibleProfileOverrides(selectedProduct, arg1) {
  let closure_1 = arg1;
  const items = [selectedProduct, arg1];
  return react.useMemo(() => {
    let first;
    let firstAvatarDecoration;
    let firstProfileEffect;
    let firstProfileFrame;
    let obj3;
    const obj = useShopProductItems;
    const productItems = obj.getProductItems(selectedProduct);
    ({ firstAvatarDecoration, firstProfileEffect, firstProfileFrame } = productItems);
    const tmp3 = selectedProduct.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    const tmp = selectedProduct;
    if (tmp3) {
      obj3 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
      const obj2 = { avatarDecoration: firstAvatarDecoration, profileEffect: firstProfileEffect, profileFrame: firstProfileFrame };
    } else {
      obj3 = {};
    }
    if (tmp3) {
      first = closure_1;
    } else {
      first = tmp.items[0];
    }
    if (isAvatarDecorationRecord(first)) {
      obj3.avatarDecoration = first;
    } else if (isProfileEffectRecord(first)) {
      obj3.profileEffect = first;
    } else if (isProfileFrameRecord(first)) {
      obj3.profileFrame = first;
    }
    return obj3;
  }, items);
}
