// Module ID: 8253
// Function ID: 65125
// Name: useProfileFrame
// Dependencies: [6774, 6790, 6781, 566, 2]
// Exports: default

// Module 8253 (useProfileFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = outer1_2.getProduct(closure_0);
      let first;
      if (null != product) {
        first = product.items[0];
      }
      if (tmp4(first)) {
        return product.items[0];
      } else {
        const purchase = outer1_3.getPurchase(closure_0);
        let first1;
        if (null != purchase) {
          first1 = purchase.items[0];
        }
        let first2;
        if (outer1_4(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
      tmp4 = outer1_4;
    }
  });
};
