// Module ID: 8799
// Function ID: 8800
// Name: useProfileEffect
// Dependencies: [19, 7720, 7735, 7726, 504, 7719, 2]
// Exports: default

// Module 8799 (useProfileEffect)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7726 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7735 */;
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
