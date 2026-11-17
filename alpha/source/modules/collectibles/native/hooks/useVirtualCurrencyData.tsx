// Module ID: 10186
// Function ID: 10187
// Name: useVirtualCurrencyData
// Dependencies: [19, 8507, 10187, 2]
// Exports: useVirtualCurrencyData

// Module 10186 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8507 */;
import _mod10187 from "module_10187" /* 10187 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const obj = CollectiblesProductUtils;
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const productOrbPrice = obj.getProductOrbPrice(obj2);
  const obj3 = _mod10187;
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
