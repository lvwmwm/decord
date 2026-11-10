// Module ID: 10802
// Function ID: 10803
// Name: StorefrontNativeUtils
// Dependencies: [19, 10039, 504, 7676, 2]
// Exports: useFormattedSKUPrice

// Module 10802 (StorefrontNativeUtils)
import IAPStoreDefault from "IAPStore" /* 7676 */;
import GPlayActionCreators from "GPlayActionCreators" /* 10039 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export function useFormattedSKUPrice(sku) {
  let c0;
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
  const effect = react.useEffect(() => {
    if (null != c0) {
      const items = [tmp];
      const obj = GPlayActionCreators;
      const inAppSkus = obj.loadInAppSkus(items);
    }
  }, items);
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp4 = require("get initialized");
  const items1 = [stateFromStores(7676)];
  const items2 = [tmp2];
  stateFromStores = useStateFromStores(items1, () => {
    let product = null;
    if (null != c0) {
      const obj = IAPStoreDefault;
      product = obj.getProduct(tmp);
    }
    return product;
  }, items2);
  const items3 = [stateFromStores];
  return react.useMemo(() => {
    let obj;
    let priceString;
    if (stateFromStores != null) {
      priceString = tmp.priceString;
    }
    if (null != priceString) {
      const obj3 = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      ({ priceString: obj2.normalPrice, priceString: obj2.userPrice } = stateFromStores);
      obj = obj3;
    } else {
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    }
    return obj;
  }, items3);
}
