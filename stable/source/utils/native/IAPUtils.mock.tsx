// Module ID: 10806
// Function ID: 10807
// Name: iapProducts
// Dependencies: [10807, 2]

// Module 10806 (iapProducts)
import billing_iapProducts from "billing/iapProducts" /* 10807 */;
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
