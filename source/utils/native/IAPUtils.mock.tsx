// Module ID: 7219
// Function ID: 58168
// Dependencies: []

// Module 7219
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(require(dependencyMap[0]).copiedIAPProducts);
  },
  purchaseProduct() {
    const error = new Error("IAPUtils is mocked \u2014 purchases cannot be completed in this build.");
    return Promise.reject(error);
  },
  canMakePayments() {
    return Promise.resolve(true);
  },
  restorePurchases() {
    return Promise.resolve([]);
  },
  fetchStoreFront() {
    return Promise.resolve({});
  }
};
