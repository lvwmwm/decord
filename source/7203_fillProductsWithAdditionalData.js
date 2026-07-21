// Module ID: 7203
// Function ID: 58004
// Name: fillProductsWithAdditionalData
// Dependencies: []

// Module 7203 (fillProductsWithAdditionalData)
let closure_0 = importDefault(dependencyMap[0]);
const RNIapAmazonModule = arg1(dependencyMap[1]).NativeModules.RNIapAmazonModule;

export const fillProductsWithAdditionalData = () => {
  const callback = callback(async (arg0) => {
    let closure_0;
    if (closure_1) {
      closure_0 = {}[yield closure_1.getUser(closure_1).userMarketplaceAmazon];
      const item = arg0.forEach((originalPrice) => {
        if (closure_0) {
          originalPrice = originalPrice.originalPrice;
          originalPrice.currency = closure_0;
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
}();
