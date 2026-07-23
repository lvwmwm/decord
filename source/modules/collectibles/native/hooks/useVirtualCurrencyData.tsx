// Module ID: 8767
// Function ID: 69306
// Name: useVirtualCurrencyData
// Dependencies: [31, 6785, 8722, 2]
// Exports: useVirtualCurrencyData

// Module 8767 (useVirtualCurrencyData)
import result from "result";

const require = arg1;
const result = require("module_8722").fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  let obj = productOrbPrice(balance[1]);
  obj = { product, hasShopDiscount: canUseShopDiscountsResult };
  productOrbPrice = obj.getProductOrbPrice(obj);
  balance = productOrbPrice(balance[2]).useFetchVirtualCurrencyBalance().balance;
  const items = [productOrbPrice, balance];
  obj = {
    price: productOrbPrice,
    balance,
    canAfford: React.useMemo(() => {
      let tmp = null;
      if (null != productOrbPrice) {
        tmp = null;
        if (null != balance) {
          tmp = productOrbPrice.amount <= balance;
        }
      }
      return tmp;
    }, items)
  };
  return obj;
};
