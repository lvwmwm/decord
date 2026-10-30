// Module ID: 19468
// Function ID: 19469
// Name: getStorefrontSkuFetchOptions
// Dependencies: [19469, 1072, 1377, 2]
// Exports: default

// Module 19468 (getStorefrontSkuFetchOptions)
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import GenericIAPStore from "GenericIAPStore" /* 19469 */;
import size from "module_2" /* 2 */;

const PaymentGateways = Constants.PaymentGateways;
const result = size.fileFinishedImporting("modules/slayer_storefront/getStorefrontSkuFetchOptions.native.tsx");

export default function getStorefrontSkuFetchOptions() {
  let APPLE;
  let obj2;
  let tmp3;
  const obj = { withGoogleSkuIds: obj2.isAndroid(), countryCode: tmp3, paymentGateway: APPLE };
  tmp3 = undefined;
  obj2 = utils_PlatformUtils;
  const obj3 = utils_PlatformUtils;
  if (obj3.isIOS()) {
    const storeFront = GenericIAPStore.getStoreFront();
    let country;
    if (storeFront != null) {
      country = storeFront.country;
    }
    tmp3 = country;
  }
  APPLE = undefined;
  const tmpResult = utils_PlatformUtils;
  if (tmpResult.isIOS()) {
    APPLE = PaymentGateways.APPLE;
  }
  return obj;
};
