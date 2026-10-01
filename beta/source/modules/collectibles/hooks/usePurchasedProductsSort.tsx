// Module ID: 14607
// Function ID: 14608
// Name: usePurchasedProductsSort
// Dependencies: [19, 6977, 1974, 6973, 563, 2]
// Exports: usePurchasedProductsSort

// Module 14607 (usePurchasedProductsSort)
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let useMemo = react.useMemo;
let closure_4 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = function usePurchasedProductsSort(memo) {
  let closure_2;
  let purchases;
  let stateFromStores;
  _require = memo;
  let obj = require("useStateFromStores");
  let items = [CollectiblesPurchaseStore];
  stateFromStores = obj.useStateFromStores(items, () => purchases.purchases);
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...stateFromStores];
    return items.map((item) => {
      let tmp;
      [tmp] = item;
      return tmp;
    });
  }, items1);
  useMemo = tmp2;
  let items2 = [memo, tmp2];
  return useMemo(() => {
    let items = [...closure_0];
    return items.sort((type, type2) => {
      let NOT_PURCHASED;
      let tmp4;
      const f100125 = (skuId) => obj.includes(skuId.skuId);
      const f100126 = (skuId) => obj.includes(skuId.skuId);
      const obj = closure_1_2;
      let closure_0 = closure_1_2;
      if (type.type === closure_0(stateFromStores[2]).CollectiblesItemType.BUNDLE) {
        let PARTIAL_OWNED_BUNDLE;
        const items = type.items;
        if (items.some(f100125)) {
          NOT_PURCHASED = constants.PARTIAL_OWNED_BUNDLE;
          tmp4 = constants;
        }
        if (type2.type === closure_0(stateFromStores[2]).CollectiblesItemType.BUNDLE) {
          const items2 = type2.items;
          if (items2.some(f100125)) {
            PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
          }
          return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
        }
        const tmpResult = closure_0(stateFromStores[3]);
        if (tmpResult.getIsVariantProduct(type2)) {
          const variants2 = type2.variants;
          PARTIAL_OWNED_BUNDLE = variants2.every(f100126) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        } else {
          PARTIAL_OWNED_BUNDLE = obj.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        }
      }
      const tmpResult2 = closure_0(stateFromStores[3]);
      if (tmpResult2.getIsVariantProduct(type)) {
        let NOT_PURCHASED2;
        let tmp6;
        const variants = type.variants;
        if (variants.every(f100126)) {
          NOT_PURCHASED2 = tmp5.PURCHASED;
          tmp6 = tmp5;
        } else {
          NOT_PURCHASED2 = tmp5.NOT_PURCHASED;
          tmp6 = tmp5;
        }
        tmp4 = tmp6;
        NOT_PURCHASED = NOT_PURCHASED2;
      } else if (obj.includes(type.skuId)) {
        NOT_PURCHASED = tmp3.PURCHASED;
        tmp4 = tmp3;
      } else {
        NOT_PURCHASED = tmp3.NOT_PURCHASED;
        tmp4 = tmp3;
      }
    });
  }, items2);
};
