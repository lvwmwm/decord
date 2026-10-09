// Module ID: 8336
// Function ID: 8337
// Name: useProfileEffect
// Dependencies: [19, 7257, 7272, 7263, 558, 576, 504, 7256, 2]

// Module 8336 (useProfileEffect)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7263 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7272 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileEffect(arg0) {
  let closure_0;
  let closure_1;
  let first;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore, ];
    items[1] = CollectiblesPurchaseStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  dependencyMap = tmp9;
  if (cResult[3] === (null != arg0 && null == stateFromStores)) {
    let tmp10;
    let tmp11;
    if (cResult[4] === arg0) {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const effect = react.useEffect(tmp10, tmp11);
    return stateFromStores;
  }
  const fn2 = function v() {
    const tmp = closure_1;
    if (tmp) {
      const obj = CollectiblesActionCreators;
      const result = obj.maybeFetchCollectiblesProduct(closure_0);
    }
  };
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  cResult[3] = null != arg0 && null == stateFromStores;
  cResult[4] = arg0;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn2;
}) : (function useProfileEffect(arg0) {
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
});
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default tmp2;
