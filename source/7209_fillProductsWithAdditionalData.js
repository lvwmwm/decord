// Module ID: 7209
// Function ID: 58090
// Name: fillProductsWithAdditionalData
// Dependencies: [5, 27]

// Module 7209 (fillProductsWithAdditionalData)
import asyncGeneratorStep from "asyncGeneratorStep";

const RNIapAmazonModule = require("get ActivityIndicator").NativeModules.RNIapAmazonModule;

export const fillProductsWithAdditionalData = (() => {
  callback = callback(async (arg0) => {
    let asyncGeneratorStep;
    if (outer2_1) {
      asyncGeneratorStep = { CA: "CAD", ES: "EUR", AU: "AUD", DE: "EUR", IN: "INR", US: "USD", JP: "JPY", GB: "GBP", IT: "EUR", BR: "BRL", FR: "EUR" }[yield outer2_1.getUser(outer2_1).userMarketplaceAmazon];
      const item = arg0.forEach((originalPrice) => {
        if (asyncGeneratorStep) {
          originalPrice = originalPrice.originalPrice;
          originalPrice.currency = asyncGeneratorStep;
          let str = "0.0";
          let str2 = "0.0";
          if (null != originalPrice) {
            str2 = originalPrice;
          }
          originalPrice.price = str2;
          if (null != originalPrice) {
            str = originalPrice;
          }
          originalPrice.localizedPrice = str;
        }
      });
    }
    return arg0;
  });
  return function fillProductsWithAdditionalData(mapped) {
    return callback(...arguments);
  };
})();
