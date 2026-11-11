// Module ID: 8506
// Function ID: 8507
// Name: useProfileFrame
// Dependencies: [8419, 8434, 8426, 504, 2]
// Exports: default

// Module 8506 (useProfileFrame)
import ProfileFrameRecord from "ProfileFrameRecord" /* 8426 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8419 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8434 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
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
};
