// Module ID: 9565
// Function ID: 9566
// Name: useVirtualCurrencyData
// Dependencies: [19, 8086, 9566, 2]
// Exports: useVirtualCurrencyData

// Module 9565 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8086 */;
import _mod9566 from "module_9566" /* 9566 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const obj = CollectiblesProductUtils;
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const productOrbPrice = obj.getProductOrbPrice(obj2);
  const obj3 = _mod9566;
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
