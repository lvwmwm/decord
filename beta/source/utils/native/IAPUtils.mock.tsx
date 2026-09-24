// Module ID: 11405
// Function ID: 11406
// Name: iapProducts
// Dependencies: [11406, 2]

// Module 11405 (iapProducts)
import billing_iapProducts from "billing/iapProducts" /* 11406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(billing_iapProducts.copiedIAPProducts);
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
