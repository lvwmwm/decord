// Module ID: 8225
// Function ID: 65001
// Name: useProfileEffect
// Dependencies: [31, 6774, 6790, 6780, 566, 6773, 2]
// Exports: default

// Module 8225 (useProfileEffect)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_4];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = outer1_3.getProduct(closure_0);
      let first;
      if (null != product) {
        first = product.items[0];
      }
      if (tmp4(first)) {
        return product.items[0];
      } else {
        const purchase = outer1_4.getPurchase(closure_0);
        let first1;
        if (null != purchase) {
          first1 = purchase.items[0];
        }
        let first2;
        if (outer1_5(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
      tmp4 = outer1_5;
    }
  });
  const dependencyMap = tmp2;
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (tmp2) {
      const result = callback(tmp2[5]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(tmp2[5]);
    }
  }, items1);
  return stateFromStores;
};
