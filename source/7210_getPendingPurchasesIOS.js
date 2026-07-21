// Module ID: 7210
// Function ID: 58064
// Name: getPendingPurchasesIOS
// Dependencies: []
// Exports: buyPromotedProductIOS, clearProductsIOS, clearTransactionIOS, deepLinkToSubscriptionsIos, getPromotedProductIOS

// Module 7210 (getPendingPurchasesIOS)
let closure_2 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const Linking = tmp2.Linking;
const RNIapIos = tmp2.NativeModules.RNIapIos;
const tmp3 = () => {
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else {
      const iosModule = callback(closure_1[2]).getIosModule();
      return iosModule.getPendingTransactions();
    }
  });
  return function getPendingPurchasesIOS() {
    return callback(...arguments);
  };
}();
const tmp4 = () => {
  let closure_0 = callback(async (arg0) => {
    if (obj) {
      return obj.resume();
    } else {
      const forceRefresh = arg0.forceRefresh;
      if (obj2.isIosStorekit2()) {
        let rejectResult = Promise.reject("Only available on Sk1");
      } else {
        let tmp6 = null != forceRefresh;
        if (tmp6) {
          tmp6 = forceRefresh;
        }
        rejectResult = closure_4.requestReceipt(tmp6);
      }
      return rejectResult;
    }
  });
  return function getReceiptIOS(arg0) {
    return callback(...arguments);
  };
}();
let closure_5 = () => {
  let closure_0 = callback(async (arg0, arg1) => {
    let obj = { method: "POST", headers: { 268438398: "r", 313070216: "PAYMENT_GATEWAY" }, body: JSON.stringify(arg1) };
    const obj2 = yield fetch(arg0, obj);
    if (obj2.ok) {
      return obj2.json();
    } else {
      const _Object = Object;
      const _Error = Error;
      const error = new Error(obj2.statusText);
      obj = { statusCode: obj2.status };
      throw Object.assign(error, obj);
    }
  });
  return function fetchJsonOrThrow(arg0, arg1) {
    return callback(...arguments);
  };
}();
let closure_6 = () => {
  let closure_0 = callback(async (arg0) => {
    const tmp = yield closure_5("https://buy.itunes.apple.com/verifyReceipt", arg0);
    let tmp2 = tmp;
    if (tmp) {
      tmp2 = tmp;
      if (21007 === tmp.status) {
        tmp2 = yield closure_5("https://sandbox.itunes.apple.com/verifyReceipt", arg0);
      }
    }
    return tmp2;
  });
  return function requestAgnosticReceiptValidationIos(arg0) {
    return callback(...arguments);
  };
}();

export const getPendingPurchasesIOS = tmp3;
export const getReceiptIOS = tmp4;
export const presentCodeRedemptionSheetIOS = () => {
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else {
      const iosModule = callback(closure_1[2]).getIosModule();
      return iosModule.presentCodeRedemptionSheet();
    }
  });
  return function presentCodeRedemptionSheetIOS() {
    return callback(...arguments);
  };
}();
export const getPromotedProductIOS = function getPromotedProductIOS() {
  if (obj.isIosStorekit2()) {
    let rejectResult = Promise.reject("Only available on Sk1");
  } else {
    rejectResult = RNIapIos.promotedProduct();
  }
  return rejectResult;
};
export const buyPromotedProductIOS = function buyPromotedProductIOS() {
  const iosModule = arg1(dependencyMap[2]).getIosModule();
  return iosModule.buyPromotedProduct();
};
export const validateReceiptIos = () => {
  let closure_0 = callback(async (arg0) => {
    let isTest;
    let receiptBody;
    ({ receiptBody, isTest } = arg0);
    if (null == isTest) {
      return yield closure_6(receiptBody);
    } else {
      let str = "https://buy.itunes.apple.com/verifyReceipt";
      if (isTest) {
        str = "https://sandbox.itunes.apple.com/verifyReceipt";
      }
      return yield closure_5(str, receiptBody);
    }
  });
  return function validateReceiptIos(arg0) {
    return callback(...arguments);
  };
}();
export const clearTransactionIOS = function clearTransactionIOS() {
  const iosModule = arg1(dependencyMap[2]).getIosModule();
  return iosModule.clearTransaction();
};
export const clearProductsIOS = function clearProductsIOS() {
  const iosModule = arg1(dependencyMap[2]).getIosModule();
  return iosModule.clearProducts();
};
export const deepLinkToSubscriptionsIos = function deepLinkToSubscriptionsIos() {
  return Linking.openURL("https://apps.apple.com/account/subscriptions");
};
