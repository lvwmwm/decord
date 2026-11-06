// Module ID: 9656
// Function ID: 9657
// Name: usePromotionForApplication
// Dependencies: [9584, 504, 2]
// Exports: default

// Module 9656 (usePromotionForApplication)
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 9584 */;
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
