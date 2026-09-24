// Module ID: 13494
// Function ID: 13495
// Name: useVirtualCurrencyData
// Dependencies: [19, 558, 568, 7832, 9159, 2]

// Module 13494 (useVirtualCurrencyData)
import c from "c" /* 568 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7832 */;
import _mod9159 from "module_9159" /* 9159 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = ReactCompilerGating.isReactCompilerEnabled() ? ((product, hasShopDiscount) => {
  const cResult = c.c(7);
  if (cResult[0] === hasShopDiscount) {
    if (cResult[1] === product) {
      let tmp4 = cResult[2];
    }
    const balance = tmp(9159).useFetchVirtualCurrencyBalance().balance;
    let tmp7 = null;
    if (null != tmp4) {
      tmp7 = null;
      if (null != balance) {
        tmp7 = tmp4.amount <= balance;
      }
    }
    if (cResult[3] === balance) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp4) {
          let tmp8 = cResult[6];
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
    const tmpResult = tmp(9159);
  }
  const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount });
  cResult[0] = hasShopDiscount;
  cResult[1] = product;
  cResult[2] = productOrbPrice;
  tmp4 = productOrbPrice;
}) : ((product, hasShopDiscount) => {
  const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount });
  const obj2 = { product, hasShopDiscount };
  const balance = _mod9159.useFetchVirtualCurrencyBalance().balance;
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
});
