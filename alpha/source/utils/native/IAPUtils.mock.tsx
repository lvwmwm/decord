// Module ID: 9310
// Function ID: 9311
// Name: iapProducts
// Dependencies: [9311, 2]

// Module 9310 (iapProducts)
import billing_iapProducts from "billing/iapProducts" /* 9311 */;
import size from "module_2" /* 2 */;

const obj = {
  loadProducts() {
    return Promise.resolve(billing_iapProducts.copiedIAPProducts);
  },
  purchaseProduct() {
    const error = new Error("IAPUtils is mocked \u2014 purchases cannot be completed in this build.");
    return reject(error);
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
const result = size.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default obj;
