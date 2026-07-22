// Module ID: 8247
// Function ID: 65088
// Name: useProfileFrame
// Dependencies: []
// Exports: default

// Module 8247 (useProfileFrame)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const isProfileFrameRecord = arg1(dependencyMap[2]).isProfileFrameRecord;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    if (null != arg0) {
      const product = product.getProduct(arg0);
      let first;
      if (null != product) {
        first = product.items[0];
      }
      if (tmp4(first)) {
        return product.items[0];
      } else {
        const purchase = purchase.getPurchase(arg0);
        let first1;
        if (null != purchase) {
          first1 = purchase.items[0];
        }
        let first2;
        if (closure_4(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
      const tmp4 = closure_4;
    }
  });
};
