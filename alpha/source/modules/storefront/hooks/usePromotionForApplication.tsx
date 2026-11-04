// Module ID: 9701
// Function ID: 9702
// Name: usePromotionForApplication
// Dependencies: [9629, 504, 2]
// Exports: default

// Module 9701 (usePromotionForApplication)
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 9629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/storefront/hooks/usePromotionForApplication.tsx");

export default function usePromotionForApplication(arg0) {
  let closure_0;
  _require = arg0;
  const items = [StorefrontPromotionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => StorefrontPromotionStore.getPromotionsForApplication(closure_0));
  let first;
  if (stateFromStores != null) {
    first = stateFromStores[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};
