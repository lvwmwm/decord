// Module ID: 8791
// Function ID: 8792
// Name: useProfileEffect
// Dependencies: [19, 7713, 7728, 7719, 504, 7712, 2]
// Exports: default

// Module 8791 (useProfileEffect)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7719 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7713 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7728 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  let closure_0;
  let closure_1;
  _require = arg0;
  let obj = require("get initialized");
  const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
        if (isProfileEffectRecord(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
  dependencyMap = tmp2;
  const items1 = [tmp2, arg0];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const obj = CollectiblesActionCreators;
      const result = obj.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items1);
  return stateFromStores;
};
