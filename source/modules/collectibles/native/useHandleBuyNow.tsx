// Module ID: 11827
// Function ID: 91698
// Name: useHandleBuyNow
// Dependencies: []
// Exports: default, useHandleBuyNow

// Module 11827 (useHandleBuyNow)
function useHandleBuyNow(product) {
  let analyticsLocations;
  let orderId;
  product = product.product;
  const arg1 = product;
  const onBuy = product.onBuy;
  const importDefault = onBuy;
  let callback;
  function _onPurchaseComplete() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onPurchaseComplete = obj;
    return obj(...arguments);
  }
  ({ analyticsLocations, orderId } = product);
  const tmp2 = callback2(_onPurchaseComplete.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
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
  const tmp4 = importDefault(dependencyMap[5])(obj);
  const callback2 = tmp4;
  obj = { handleBuyNow: _onPurchaseComplete.useCallback(callback(tmp), items), isBuying: first };
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [tmp4, first, onBuy, product.skuId];
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const Routes = arg1(dependencyMap[3]).Routes;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("useHandleBuyNow");
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/native/useHandleBuyNow.tsx");

export default useHandleBuyNow;
export { useHandleBuyNow };
