// Module ID: 11838
// Function ID: 91761
// Name: useHandleBuyNow
// Dependencies: [5, 57, 31, 653, 3, 11817, 6773, 4098, 9772, 1553, 5692, 3791, 3831, 1212, 2]
// Exports: default, useHandleBuyNow

// Module 11838 (useHandleBuyNow)
import useMobileCollectiblesPurchaseSKU from "useMobileCollectiblesPurchaseSKU";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Routes } from "ME";
import importDefaultResult from "ME";

let require = arg1;
function useHandleBuyNow(product) {
  let analyticsLocations;
  let orderId;
  product = product.product;
  const require = product;
  const onBuy = product.onBuy;
  let callback;
  function _onPurchaseComplete() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  ({ analyticsLocations, orderId } = product);
  const tmp2 = callback2(_onPurchaseComplete.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = {
    product,
    analyticsLocations,
    onPurchaseComplete() {
      return _onPurchaseComplete(...arguments);
    },
    onPurchaseError() {
      callback(false);
    },
    onPurchasePending() {

    },
    orderId
  };
  const tmp4 = onBuy(first[5])(obj);
  callback2 = tmp4;
  obj = { handleBuyNow: _onPurchaseComplete.useCallback(callback(tmp), items), isBuying: first };
  // CreateGeneratorClosureLongIndex (0x67)
  items = [tmp4, first, onBuy, product.skuId];
  return obj;
}
importDefaultResult = new importDefaultResult("useHandleBuyNow");
const result = require("result").fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };
