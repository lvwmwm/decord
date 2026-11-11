// Module ID: 8516
// Function ID: 8517
// Name: getStorefrontNativeStoreQuery
// Dependencies: [8512, 1072, 1377, 504, 2]
// Exports: getStorefrontNativeStoreQuery, getStorefrontPricingKey, useStorefrontPricingKey

// Module 8516 (getStorefrontNativeStoreQuery)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8512 */;
import size from "module_2" /* 2 */;

const PaymentGateways = Constants.PaymentGateways;
const result = size.fileFinishedImporting("modules/storefront/getStorefrontNativeStoreQuery.tsx");

export function getStorefrontNativeStoreQuery() {
  let obj3;
  let nativeStorefrontCountry = arg0;
  if (arg0 === undefined) {
    nativeStorefrontCountry = StorefrontProductStore.getNativeStorefrontCountry();
  }
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    obj3 = { payment_gateway: PaymentGateways.APPLE, country_code: nativeStorefrontCountry };
    const obj2 = { payment_gateway: PaymentGateways.APPLE, country_code: nativeStorefrontCountry };
  } else {
    obj3 = {};
  }
  return obj3;
}
export function getStorefrontPricingKey(arg0) {
  let country_code;
  let payment_gateway;
  let tmp = arg0;
  if (arg0 === undefined) {
    let obj3;
    const nativeStorefrontCountry = StorefrontProductStore.getNativeStorefrontCountry();
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      obj3 = { payment_gateway: PaymentGateways.APPLE, country_code: nativeStorefrontCountry };
      const obj2 = { payment_gateway: PaymentGateways.APPLE, country_code: nativeStorefrontCountry };
    } else {
      obj3 = {};
    }
    tmp = obj3;
  }
  ({ payment_gateway, country_code } = tmp);
  let str = "";
  if (null != payment_gateway) {
    if (country_code == null) {
      country_code = "";
    }
    const _HermesInternal = HermesInternal;
    str = "" + payment_gateway + ":" + country_code;
  }
  return str;
}
export function useStorefrontPricingKey() {
  let obj = get_initialized;
  const items = [StorefrontProductStore];
  return obj.useStateFromStores(items, () => {
    let country_code;
    let obj4;
    let payment_gateway;
    const obj = nativeStorefrontCountry;
    nativeStorefrontCountry = nativeStorefrontCountry.getNativeStorefrontCountry();
    if (nativeStorefrontCountry === undefined) {
      nativeStorefrontCountry = obj.getNativeStorefrontCountry();
    }
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      obj4 = { payment_gateway: constants.APPLE, country_code: nativeStorefrontCountry };
      const obj3 = { payment_gateway: constants.APPLE, country_code: nativeStorefrontCountry };
    } else {
      obj4 = {};
    }
    ({ payment_gateway, country_code } = obj4);
    let str = "";
    if (null != payment_gateway) {
      if (country_code == null) {
        country_code = "";
      }
      const _HermesInternal = HermesInternal;
      str = "" + payment_gateway + ":" + country_code;
    }
    return str;
  });
}
