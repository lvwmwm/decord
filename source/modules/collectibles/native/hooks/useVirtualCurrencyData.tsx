// Module ID: 8759
// Function ID: 69242
// Name: useVirtualCurrencyData
// Dependencies: []
// Exports: useVirtualCurrencyData

// Module 8759 (useVirtualCurrencyData)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  let obj = canUseShopDiscountsResult(dependencyMap[1]);
  obj = { product, hasShopDiscount: canUseShopDiscountsResult };
  const productOrbPrice = obj.getProductOrbPrice(obj);
  canUseShopDiscountsResult = productOrbPrice;
  const balance = canUseShopDiscountsResult(dependencyMap[2]).useFetchVirtualCurrencyBalance().balance;
  const dependencyMap = balance;
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
