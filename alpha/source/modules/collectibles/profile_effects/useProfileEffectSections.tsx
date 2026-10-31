// Module ID: 16489
// Function ID: 16490
// Name: useProfileEffectSections
// Dependencies: [32, 19, 7720, 7735, 563, 7732, 1113, 15064, 2]
// Exports: default

// Module 16489 (useProfileEffectSections)
import react from "react" /* 19 */;
import intl4 from "intl" /* 1113 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7732 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7735 */;
import size from "module_2" /* 2 */;

let dependencyMap, premium_purchase;

const useMemo = react.useMemo;
const Section = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
let obj2 = { skuId: "None" };
let obj3 = { skuId: "Shop" };
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffectSections.tsx");

export default function useProfileEffectSections() {
  let closure_2;
  let first;
  let purchases;
  let stateFromStores;
  let tmp4;
  let obj = stateFromStores(563);
  let items = [CollectiblesPurchaseStore];
  stateFromStores = obj.useStateFromStores(items, () => purchases.purchases);
  obj2 = stateFromStores(563);
  let items1 = [CollectiblesCategoryStore];
  [first, tmp4] = obj2.useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
    return items;
  });
  dependencyMap = tmp4;
  const items2 = [first, tmp4, stateFromStores];
  const tmp5 = useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj = CollectiblesUtils;
    const profileEffects = obj.getProfileEffects(stateFromStores, first);
    const reduced = profileEffects.reduce((premium_purchase, skuId) => {
      let result;
      const value = closure_1_0.get(skuId.skuId);
      if (null != value) {
        obj2 = stateFromStores(closure_2[5]);
        result = obj2.isPremiumCollectiblesPurchase(value);
      } else {
        const obj = stateFromStores(closure_2[5]);
        result = obj.isPremiumCollectiblesProduct(closure_1_2.get(skuId.skuId));
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
    obj2 = { section: obj.PURCHASE, items, height: 12, header: intl.string(intl4.t["9x1v/p"]) };
    items = [obj2, obj3, ...reduced.purchase];
    intl = intl4.intl;
    const items1 = [obj2, , ];
    obj3 = { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: intl2.string(intl4.t.TiLCgw) };
    intl2 = intl4.intl;
    items1[1] = obj3;
    const obj4 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: intl3.string(intl4.t["1vbbee"]) };
    intl3 = intl4.intl;
    items1[2] = obj4;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
  return first(15064)(tmp5, obj.PREVIEW);
};
export { Section };
export const NONE_ITEM = obj2;
export const SHOP_ITEM = obj3;
