// Module ID: 15060
// Function ID: 15061
// Name: HeadlessCollectiblesPurchaseRunner
// Dependencies: [19, 7609, 15061, 2]
// Exports: HeadlessCollectiblesPurchaseRunner

// Module 15060 (HeadlessCollectiblesPurchaseRunner)
import NativeCheckoutStore from "NativeCheckoutStore" /* 7609 */;
import useHandleBuyNowDefault from "useHandleBuyNow" /* 15061 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export function HeadlessCollectiblesPurchaseRunner(attempt) {
  let analyticsLocations;
  let id;
  let onBuySettled;
  let product;
  let stageCollectibleChangeForEditProfile;
  attempt = attempt.attempt;
  let handleBuyNow;
  let closure_4;
  ({ product, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = attempt);
  const tmp = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  let closure_1 = tmp;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  let closure_2 = tmp2;
  const obj = { product, analyticsLocations, orderId: id, onBuySettled, stageCollectibleChangeForEditProfile };
  id = undefined;
  let tmp3 = useHandleBuyNowDefault;
  if (tmp != null) {
    id = tmp.id;
  }
  handleBuyNow = tmp3(obj).handleBuyNow;
  closure_4 = react.useRef(0);
  const items = [attempt, handleBuyNow, tmp, tmp2];
  const effect = react.useEffect(() => {
    if (ref.current !== attempt) {
      const tmp3 = closure_2 && null == closure_1;
      if (!tmp3) {
        tmp.current = tmp2;
        handleBuyNow();
      }
    }
  }, items);
  return null;
}
