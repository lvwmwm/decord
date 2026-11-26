// Module ID: 10436
// Function ID: 10437
// Name: useVirtualCurrencyData
// Dependencies: [19, 8496, 10437, 2]
// Exports: useVirtualCurrencyData

// Module 10436 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8496 */;
import _mod10437 from "module_10437" /* 10437 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const obj = CollectiblesProductUtils;
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const productOrbPrice = obj.getProductOrbPrice(obj2);
  const obj3 = _mod10437;
  const balance = obj3.useFetchVirtualCurrencyBalance().balance;
  const items = [productOrbPrice, balance];
  const obj4 = {
    price: productOrbPrice,
    balance,
    canAfford: react.useMemo(() => {
      let tmp2 = null;
      if (null != productOrbPrice) {
        tmp2 = null;
        if (null != balance) {
          tmp2 = tmp.amount <= tmp3;
        }
      }
      return tmp2;
    }, items)
  };
  return obj4;
}
