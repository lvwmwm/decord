// Module ID: 8495
// Function ID: 8496
// Name: useProfileEffect
// Dependencies: [19, 7784, 7799, 7790, 504, 7783, 2]
// Exports: default

// Module 8495 (useProfileEffect)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7783 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7784 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7799 */;

const require = globalThis.__r;

require = fn;
const isProfileEffectRecord = fn(7790).isProfileEffectRecord;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  _require = arg0;
  const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = CollectiblesCategoryStore.getProduct(tmp);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileEffectRecord(first)) {
        return product.items[0];
      } else {
        const purchase = CollectiblesPurchaseStore.getPurchase(tmp);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (tmp4(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
  dependencyMap = tmp2;
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items1);
  return stateFromStores;
};
