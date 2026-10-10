// Module ID: 13428
// Function ID: 13429
// Name: useVirtualCurrencyData
// Dependencies: [19, 558, 576, 7274, 9060, 2]

// Module 13428 (useVirtualCurrencyData)
import react2 from "react" /* 576 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7274 */;
import _mod9060 from "module_9060" /* 9060 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVirtualCurrencyData(product, hasShopDiscount) {
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === hasShopDiscount) {
    let tmp4;
    if (cResult[1] === product) {
      tmp4 = cResult[2];
    }
    const tmpResult = _mod9060;
    const balance = tmpResult.useFetchVirtualCurrencyBalance().balance;
    let tmp7 = null;
    if (null != tmp4) {
      tmp7 = null;
      if (null != balance) {
        tmp7 = tmp4.amount <= balance;
      }
    }
    if (cResult[3] === balance) {
      if (cResult[4] === tmp7) {
        let tmp8;
        if (cResult[5] === tmp4) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    const obj2 = { price: tmp4, balance, canAfford: tmp7 };
    cResult[3] = balance;
    cResult[4] = tmp7;
    cResult[5] = tmp4;
    cResult[6] = obj2;
    tmp8 = obj2;
  }
  const obj3 = { product, hasShopDiscount };
  const tmpResult2 = CollectiblesProductUtils;
  const productOrbPrice = tmpResult2.getProductOrbPrice(obj3);
  cResult[0] = hasShopDiscount;
  cResult[1] = product;
  cResult[2] = productOrbPrice;
  tmp4 = productOrbPrice;
}) : (function useVirtualCurrencyData(product, hasShopDiscount) {
  const obj = CollectiblesProductUtils;
  const obj2 = { product, hasShopDiscount };
  const productOrbPrice = obj.getProductOrbPrice(obj2);
  const obj3 = _mod9060;
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
});
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = tmp2;
