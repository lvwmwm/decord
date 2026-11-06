// Module ID: 15285
// Function ID: 15286
// Name: MobileOrbCheckoutFlow
// Dependencies: [2]
// Exports: getMobileCheckoutFlow

// Module 15285 (MobileOrbCheckoutFlow)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/MobileOrbCheckoutFlow.tsx");

export function getMobileCheckoutFlow(arg0) {
  let obj;
  let product;
  let sku;
  let usesCollectiblesDetails;
  ({ sku, product, usesCollectiblesDetails } = arg0);
  if (null == product) {
    if (null != sku) {
      let obj2;
      if (!usesCollectiblesDetails) {
        obj2 = { scenario: "commerce", sku };
      }
      obj = obj2;
    }
    obj2 = { scenario: "loading" };
  } else {
    obj = { scenario: "collectibles", product };
  }
  return obj;
}
