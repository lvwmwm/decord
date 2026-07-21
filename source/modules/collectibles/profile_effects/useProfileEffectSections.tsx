// Module ID: 13474
// Function ID: 102282
// Name: useProfileEffectSections
// Dependencies: []
// Exports: default

// Module 13474 (useProfileEffectSections)
let closure_2 = importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[1]).useMemo;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffectSections.tsx");

export default function useProfileEffectSections() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => purchases.purchases);
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const tmp2 = callback(arg1(dependencyMap[4]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = closure_4);
    return items;
  }), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  return useMemo(() => {
    let obj = stateFromStores(first[5]);
    const profileEffects = obj.getProfileEffects(stateFromStores, first);
    const reduced = profileEffects.reduce((premium_purchase, skuId) => {
      const value = lib.get(skuId.skuId);
      if (null != value) {
        let result = lib(closure_1[5]).isPremiumCollectiblesPurchase(value);
        const obj2 = lib(closure_1[5]);
      } else {
        result = lib(closure_1[5]).isPremiumCollectiblesProduct(closure_2.get(skuId.skuId));
        const obj = lib(closure_1[5]);
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
    obj = { section: constants.PURCHASE };
    const items = [closure_7, closure_8, ...reduced.purchase];
    obj.items = items;
    obj.height = 12;
    const intl = stateFromStores(first[6]).intl;
    obj.header = intl.string(stateFromStores(first[6]).t.9x1v/p);
    const items1 = [obj, , ];
    obj = { section: constants.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12 };
    const intl2 = stateFromStores(first[6]).intl;
    obj.header = intl2.string(stateFromStores(first[6]).t.TiLCgw);
    items1[1] = obj;
    const obj1 = { section: constants.PREVIEW, items: reduced.preview, height: 12 };
    const intl3 = stateFromStores(first[6]).intl;
    obj1.header = intl3.string(stateFromStores(first[6]).t.1vbbee);
    items1[2] = obj1;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;
