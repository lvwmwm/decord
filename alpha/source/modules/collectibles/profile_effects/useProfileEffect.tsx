// Module ID: 8499
// Function ID: 8500
// Name: useProfileEffect
// Dependencies: [19, 7787, 7802, 7793, 504, 7786, 2]
// Exports: default

// Module 8499 (useProfileEffect)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7786 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7787 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7802 */;

const require = globalThis.__r;

require = fn;
const isProfileEffectRecord = fn(7793).isProfileEffectRecord;
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
