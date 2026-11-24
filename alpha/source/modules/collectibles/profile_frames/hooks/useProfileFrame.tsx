// Module ID: 9360
// Function ID: 9361
// Name: useProfileFrame
// Dependencies: [6185, 6203, 6192, 504, 2]
// Exports: default

// Module 9360 (useProfileFrame)
import ProfileFrameRecord from "ProfileFrameRecord" /* 6192 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6185 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6203 */;
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
