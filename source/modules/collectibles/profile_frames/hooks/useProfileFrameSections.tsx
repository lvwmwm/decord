// Module ID: 13650
// Function ID: 104823
// Name: useProfileFrameSections
// Dependencies: [57, 31, 6774, 6790, 624, 8744, 6786, 1212, 2]
// Exports: default

// Module 13650 (useProfileFrameSections)
import _slicedToArray from "_slicedToArray";
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx");

export default function useProfileFrameSections() {
  let items = [closure_5];
  stateFromStores = stateFromStores(first[4]).useStateFromStores(items, () => outer1_5.purchases);
  let obj = stateFromStores(first[4]);
  let items1 = [_isNativeReflectConstruct];
  const tmp2 = callback(stateFromStores(first[4]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = outer1_4);
    return items;
  }), 2);
  first = tmp2[0];
  callback = tmp4;
  let obj2 = stateFromStores(first[4]);
  const isProfileFramesEarlyAccessPhase = stateFromStores(first[5]).useIsProfileFramesEarlyAccessPhase("useProfileFrameSections");
  const items2 = [first, tmp2[1], stateFromStores, isProfileFramesEarlyAccessPhase];
  return isProfileFramesEarlyAccessPhase(() => {
    let obj = stateFromStores(first[6]);
    const profileFrames = obj.getProfileFrames(stateFromStores, first);
    const reduced = profileFrames.reduce((premium_purchase, skuId) => {
      const value = outer1_0.get(skuId.skuId);
      if (null != value) {
        let result = stateFromStores(first[6]).isPremiumCollectiblesPurchase(value);
        const obj2 = stateFromStores(first[6]);
      } else {
        result = stateFromStores(first[6]).isPremiumCollectiblesProduct(outer1_2.get(skuId.skuId));
        const obj = stateFromStores(first[6]);
      }
      if (result) {
        premium_purchase = premium_purchase.premium_purchase;
        premium_purchase.push(skuId);
      } else if (null != value) {
        const purchase = premium_purchase.purchase;
        purchase.push(skuId);
      } else {
        const preview = premium_purchase.preview;
        preview.push(skuId);
      }
      return premium_purchase;
    }, { purchase: [], premium_purchase: [], preview: [] });
    const intl = stateFromStores(first[7]).intl;
    let stringResult = intl.string(stateFromStores(first[7]).t.TiLCgw);
    obj = { section: outer1_6.PURCHASE };
    const items = [outer1_7, outer1_8, ...reduced.purchase];
    obj.items = items;
    obj.height = 12;
    const intl2 = stateFromStores(first[7]).intl;
    obj.header = intl2.string(stateFromStores(first[7]).t["9eZ4aO"]);
    const items1 = [obj, , ];
    obj = { section: outer1_6.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: stringResult };
    items1[1] = obj;
    const obj1 = { section: outer1_6.PREVIEW, items: reduced.preview, height: 12 };
    if (!isProfileFramesEarlyAccessPhase) {
      const intl3 = stateFromStores(first[7]).intl;
      stringResult = intl3.string(stateFromStores(first[7]).t["1vbbee"]);
    }
    obj1.header = stringResult;
    items1[2] = obj1;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;
