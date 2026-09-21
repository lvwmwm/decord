// Module ID: 11064
// Function ID: 11065
// Name: StorefrontNativeUtils
// Dependencies: [19, 9481, 504, 7482, 2]
// Exports: useFormattedSKUPrice

// Module 11064 (StorefrontNativeUtils)
import IAPStoreDefault from "IAPStore" /* 7482 */;
import GPlayActionCreators from "GPlayActionCreators" /* 9481 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = function useFormattedSKUPrice(sku) {
  sku = sku.sku;
  _require = undefined;
  let stateFromStores;
  let tmp2;
  if (sku != null) {
    const googleSkuIds = sku.googleSkuIds;
    if (googleSkuIds != null) {
      tmp2 = googleSkuIds[tmp];
    }
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  _require = tmp2;
  let items = [tmp2];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      const items = [tmp];
      const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
    }
  }, items);
  const items1 = [stateFromStores(7482)];
  const items2 = [tmp2];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let product = null;
    if (null != c0) {
      product = IAPStoreDefault.getProduct(tmp);
    }
    return product;
  }, items2);
  const items3 = [stateFromStores];
  return noop.useMemo(() => {
    let priceString;
    if (stateFromStores != null) {
      priceString = tmp.priceString;
    }
    if (null != priceString) {
      ({ priceString: obj2.normalPrice, priceString: obj2.userPrice } = tmp);
      let obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      const obj3 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    } else {
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    }
    return obj;
  }, items3);
};
