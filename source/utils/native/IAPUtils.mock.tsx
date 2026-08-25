// Module ID: 7586
// Function ID: 7587
// Name: items
// Dependencies: [7587, 2]

// Module 7586 (items)
import set from "set" /* 2 */;
import items from "items" /* 7587 */;

const result = set.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(items.copiedIAPProducts);
  },
  purchaseProduct() {
    error = new Error("IAPUtils is mocked \u2014 purchases cannot be completed in this build.");
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
