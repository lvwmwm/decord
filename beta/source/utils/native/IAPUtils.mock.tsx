// Module ID: 13968
// Function ID: 13969
// Name: iapProducts
// Dependencies: [13969, 2]

// Module 13968 (iapProducts)
import billing_iapProducts from "billing/iapProducts" /* 13969 */;
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
