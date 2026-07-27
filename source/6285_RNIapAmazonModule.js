// Module ID: 6285
// Function ID: 56562
// Name: RNIapAmazonModule
// Dependencies: [5, 27, 6279]

// Module 6285 (RNIapAmazonModule)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const RNIapAmazonModule = require("get ActivityIndicator").NativeModules.RNIapAmazonModule;
const tmp2 = (() => {
  let closure_0 = callback(async (arg0) => {
    let developerSecret;
    let receiptId;
    let useSandbox;
    let userId;
    ({ developerSecret, userId, receiptId, useSandbox } = arg0);
    if (undefined === useSandbox) {
      let str = "sandbox/";
    } else {
      str = "";
    }
    const combined = "https://appstore-sdk.amazon.com/" + str + "version/1.0/verifyReceiptId/developer/" + developerSecret + "/user/" + userId + "/receiptId/" + receiptId;
    return yield callback(outer2_1[2]).enhancedFetch(combined);
  });
  return function validateReceiptAmazon(arg0) {
    return callback(...arguments);
  };
})();

export const AmazonModule = RNIapAmazonModule;
export const validateReceiptAmazon = tmp2;
export const verifyLicense = (() => {
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else {
      return outer2_3.verifyLicense();
    }
  });
  return function verifyLicense() {
    return callback(...arguments);
  };
})();
export const deepLinkToSubscriptionsAmazon = (() => {
  let closure_0 = callback(async (arg0) => {
    if (obj) {
      return obj.resume();
    } else {
      return outer2_3.deepLinkToSubscriptions(arg0.isAmazonDevice);
    }
  });
  return function deepLinkToSubscriptionsAmazon(arg0) {
    return callback(...arguments);
  };
})();
