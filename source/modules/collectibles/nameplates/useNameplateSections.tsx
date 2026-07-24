// Module ID: 13655
// Function ID: 104852
// Name: useNameplateSections
// Dependencies: [57, 31, 6774, 6790, 624, 6786, 1212, 2]
// Exports: default

// Module 13655 (useNameplateSections)
import _slicedToArray from "_slicedToArray";
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/nameplates/useNameplateSections.tsx");

export default function useNameplateSections() {
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
  const items2 = [first, stateFromStores, tmp2[1]];
  return useMemo(() => {
    let obj = stateFromStores(first[5]);
    const nameplates = obj.getNameplates(stateFromStores, first);
    const reduced = nameplates.reduce((premium_purchase, skuId) => {
      let value = outer1_0.get(skuId.skuId);
      value = outer1_2.get(skuId.skuId);
      if (null != value) {
        let result = stateFromStores(first[5]).isPremiumCollectiblesPurchase(value);
        const obj2 = stateFromStores(first[5]);
      } else {
        result = stateFromStores(first[5]).isPremiumCollectiblesProduct(value);
        const obj = stateFromStores(first[5]);
      }
      let isCategoryReward;
      if (null != value) {
        isCategoryReward = value.isCategoryReward;
      }
      if (result) {
        premium_purchase = premium_purchase.premium_purchase;
        premium_purchase.push(skuId);
      } else if (null != value) {
        const purchase = premium_purchase.purchase;
        purchase.push(skuId);
      } else if (!tmp9) {
        const preview = premium_purchase.preview;
        preview.push(skuId);
      }
      return premium_purchase;
    }, { purchase: [], premium_purchase: [], preview: [] });
    obj = { section: outer1_6.PURCHASE };
    const items = [outer1_7, outer1_8, ...reduced.purchase];
    obj.items = items;
    obj.height = 12;
    const intl = stateFromStores(first[6]).intl;
    obj.header = intl.string(stateFromStores(first[6]).t.WfGV52);
    const items1 = [obj, , ];
    obj = { section: outer1_6.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12 };
    const intl2 = stateFromStores(first[6]).intl;
    obj.header = intl2.string(stateFromStores(first[6]).t.TiLCgw);
    items1[1] = obj;
    const obj1 = { section: outer1_6.PREVIEW, items: reduced.preview, height: 12 };
    const intl3 = stateFromStores(first[6]).intl;
    obj1.header = intl3.string(stateFromStores(first[6]).t["1vbbee"]);
    items1[2] = obj1;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;
