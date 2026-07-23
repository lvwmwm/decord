// Module ID: 9738
// Function ID: 75762
// Name: useFormattedSKUPrice
// Dependencies: [31, 7160, 566, 5621, 2]
// Exports: useFormattedSKUPrice

// Module 9738 (useFormattedSKUPrice)
import result from "result";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = function useFormattedSKUPrice(sku) {
  sku = sku.sku;
  let _require;
  let stateFromStores;
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
  _require = tmp3;
  let items = [tmp3];
  const effect = React.useEffect(() => {
    if (null != _undefined) {
      const items = [_undefined];
      const inAppSkus = _undefined(outer1_2[1]).loadInAppSkus(items);
      const obj = _undefined(outer1_2[1]);
    }
  }, items);
  const items1 = [stateFromStores(5621)];
  const items2 = [tmp3];
  stateFromStores = _require(566).useStateFromStores(items1, () => {
    let product = null;
    if (null != c0) {
      product = stateFromStores(outer1_2[3]).getProduct(c0);
      const obj = stateFromStores(outer1_2[3]);
    }
    return product;
  }, items2);
  const items3 = [stateFromStores];
  return React.useMemo(() => {
    let priceString;
    if (null != stateFromStores) {
      priceString = stateFromStores.priceString;
    }
    if (null != priceString) {
      let obj = { normalPrice: stateFromStores.priceString, discountedPrice: null, discountPercent: null, userPrice: stateFromStores.priceString };
    } else {
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    }
    return obj;
  }, items3);
};
