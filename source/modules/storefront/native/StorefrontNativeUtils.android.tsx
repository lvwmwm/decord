// Module ID: 9731
// Function ID: 75721
// Name: useFormattedSKUPrice
// Dependencies: []
// Exports: useFormattedSKUPrice

// Module 9731 (useFormattedSKUPrice)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = function useFormattedSKUPrice(sku) {
  sku = sku.sku;
  let arg1;
  let importDefault;
  let tmp2;
  if (null != sku) {
    const googleSkuIds = sku.googleSkuIds;
    if (null != googleSkuIds) {
      tmp2 = googleSkuIds[tmp];
    }
  }
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = tmp2;
  }
  arg1 = tmp3;
  const items = [tmp3];
  const effect = React.useEffect(() => {
    if (null != tmp3) {
      const items = [tmp3];
      const inAppSkus = tmp3(closure_2[1]).loadInAppSkus(items);
      const obj = tmp3(closure_2[1]);
    }
  }, items);
  const items1 = [importDefault(dependencyMap[3])];
  const items2 = [tmp3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items1, () => {
    let product = null;
    if (null != tmp3) {
      product = stateFromStores(closure_2[3]).getProduct(tmp3);
      const obj = stateFromStores(closure_2[3]);
    }
    return product;
  }, items2);
  importDefault = stateFromStores;
  const items3 = [stateFromStores];
  return React.useMemo(() => {
    let priceString;
    if (null != stateFromStores) {
      priceString = stateFromStores.priceString;
    }
    if (null != priceString) {
      let obj = { normalPrice: stateFromStores.priceString, userPrice: stateFromStores.priceString };
    } else {
      obj = { "Null": true, "Null": 5, "Null": true, "Null": true };
    }
    return obj;
  }, items3);
};
