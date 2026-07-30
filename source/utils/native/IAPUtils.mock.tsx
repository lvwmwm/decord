// Module ID: 6351
// Function ID: 6352
// Name: items
// Dependencies: [6352, 2]

// Module 6351 (items)
const result = require("set").fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(require(6352) /* items */.copiedIAPProducts);
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
    return Promise.resolve({ country: "US", currency: "usd" });
  }
};
