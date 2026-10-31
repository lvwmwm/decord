// Module ID: 8785
// Function ID: 8786
// Name: useProfileFrame
// Dependencies: [7720, 7735, 7727, 504, 2]
// Exports: default

// Module 8785 (useProfileFrame)
import ProfileFrameRecord from "ProfileFrameRecord" /* 7727 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7735 */;
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
