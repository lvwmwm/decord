// Module ID: 12433
// Function ID: 12434
// Name: socialLayerStorefrontEmbedPrice
// Dependencies: [19, 502, 7070, 1072, 9302, 504, 2186, 9686, 2]
// Exports: getSocialLayerStorefrontEmbedPrice, useFetchSocialLayerStorefrontEmbedPrices

// Module 12433 (socialLayerStorefrontEmbedPrice)
import Constants from "Constants" /* 1072 */;
import IAPStoreDefault from "IAPStore" /* 9302 */;
import GPlayActionCreators from "GPlayActionCreators" /* 9686 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SKUStore from "SKUStore" /* 7070 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const constants = Constants.PriceSetAssignmentPurchaseTypes;
let items = [SKUStore, IAPStoreDefault];
const result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedPrice.android.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRICE_STORES = items;
export function getSocialLayerStorefrontEmbedPrice(value) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const googleSkuIds = value.googleSkuIds;
  let tmp2;
  if (googleSkuIds != null) {
    tmp2 = googleSkuIds[DEFAULT];
  }
  let tmp3;
  if (null != tmp2) {
    const obj = IAPStoreDefault;
    const product = obj.getProduct(tmp2);
    let priceString;
    if (product != null) {
      priceString = product.priceString;
    }
    tmp3 = priceString;
  }
  return tmp3;
}
export function useFetchSocialLayerStorefrontEmbedPrices(singleSkuIds) {
  let authenticated;
  let stateFromStores;
  _require = singleSkuIds;
  let obj = require("get initialized");
  let items = [SKUStore];
  let items1 = [singleSkuIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const f132276 = (item) => {
      let items1;
      const value = closure_1_5.get(item);
      let tmp2;
      if (value != null) {
        const googleSkuIds = value.googleSkuIds;
        if (googleSkuIds != null) {
          tmp2 = googleSkuIds[constants.DEFAULT];
        }
      }
      if (null != tmp2) {
        const items = [tmp2];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    };
    let items = [...new Set(singleSkuIds.flatMap(f132276))];
    new Set(singleSkuIds.flatMap(f132276));
    return items;
  }, items1);
  let tmp2 = require("get initialized");
  const useStateFromStores = tmp2.useStateFromStores;
  const items2 = [stateFromStoresArray(stateFromStores[4]), AuthenticationStore];
  stateFromStores = useStateFromStores(items2, () => {
    let isReadyResult;
    const obj = singleSkuIds(stateFromStores[6]);
    const tmp = stateFromStores;
    if (obj.isGooglePlayBillingSupported()) {
      const obj2 = stateFromStoresArray(tmp[4]);
      isReadyResult = obj2.isReady();
    } else {
      isReadyResult = authenticated.isAuthenticated();
    }
    return isReadyResult;
  });
  const items3 = [stateFromStoresArray, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && stateFromStoresArray.length > 0;
    if (tmp) {
      const obj = GPlayActionCreators;
      const inAppSkus = obj.loadInAppSkus(stateFromStoresArray);
    }
  }, items3);
}
