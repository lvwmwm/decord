// Module ID: 12929
// Function ID: 12930
// Name: useVirtualCurrencyData
// Dependencies: [19, 7161, 8503, 2]
// Exports: useVirtualCurrencyData

// Module 12929 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7161 */;
import _mod8503 from "module_8503" /* 8503 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount: canUseShopDiscountsResult });
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const balance = _mod8503.useFetchVirtualCurrencyBalance().balance;
  const items = [productOrbPrice, balance];
  return {
    price: productOrbPrice,
    balance,
    canAfford: noop.useMemo(() => {
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
};
