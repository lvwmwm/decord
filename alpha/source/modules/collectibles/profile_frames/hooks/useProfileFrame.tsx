// Module ID: 7894
// Function ID: 7895
// Name: useProfileFrame
// Dependencies: [7066, 7081, 7073, 558, 576, 504, 2]

// Module 7894 (useProfileFrame)
import ProfileFrameRecord from "ProfileFrameRecord" /* 7073 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore, ];
    items[1] = CollectiblesPurchaseStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      if (null != closure_0) {
        const product = CollectiblesCategoryStore.getProduct(tmp);
        let first;
        if (product != null) {
          first = product.items[0];
        }
        if (isProfileFrameRecord(first)) {
          return product.items[0];
        } else {
          const purchase = CollectiblesPurchaseStore.getPurchase(tmp);
          let first1;
          if (purchase != null) {
            first1 = purchase.items[0];
          }
          let first2;
          if (isProfileFrameRecord(first1)) {
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
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = CollectiblesCategoryStore.getProduct(tmp);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileFrameRecord(first)) {
        return product.items[0];
      } else {
        const purchase = CollectiblesPurchaseStore.getPurchase(tmp);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (isProfileFrameRecord(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
});
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default tmp2;
