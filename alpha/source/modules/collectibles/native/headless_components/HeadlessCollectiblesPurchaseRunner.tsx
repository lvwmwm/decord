// Module ID: 13297
// Function ID: 13298
// Name: HeadlessCollectiblesPurchaseRunner
// Dependencies: [19, 7132, 558, 576, 13298, 2]

// Module 13297 (HeadlessCollectiblesPurchaseRunner)
import react2 from "react" /* 576 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 7132 */;
import useHandleBuyNowDefault from "useHandleBuyNow" /* 13298 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeadlessCollectiblesPurchaseRunner(arg0) {
  let analyticsLocations;
  let attempt;
  let first;
  let onBuySettled;
  let product;
  let stageCollectibleChangeForEditProfile;
  let tmp6;
  const tmp = dependencyMap;
  const obj = react2;
  const cResult = obj.c(14);
  ({ product, attempt } = arg0);
  ({ analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(orderRecord) {
      return orderRecord.orderRecord;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useNativeCheckoutStore(first);
  let closure_1 = tmp5;
  const tmp4 = useNativeCheckoutStore;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(orderRequired) {
      return orderRequired.orderRequired;
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp4Result = tmp4(tmp6);
  let closure_2 = tmp4Result;
  let id;
  if (tmp5 != null) {
    id = tmp5.id;
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === onBuySettled) {
      if (cResult[4] === product) {
        if (cResult[5] === stageCollectibleChangeForEditProfile) {
          let tmp9;
          if (cResult[6] === id) {
            tmp9 = cResult[7];
          }
          const handleBuyNow = useHandleBuyNowDefault(tmp9).handleBuyNow;
          useNativeCheckoutStore = react.useRef(0);
          const obj3 = react;
          if (cResult[8] === attempt) {
            if (cResult[9] === handleBuyNow) {
              if (cResult[10] === tmp5) {
                let tmp11;
                let tmp12;
                if (cResult[11] === tmp4Result) {
                  tmp11 = cResult[12];
                  tmp12 = cResult[13];
                }
                const effect = obj3.useEffect(tmp11, tmp12);
                return null;
              }
            }
          }
          class P {
            constructor() {
              if (ref.current !== attempt) {
                const tmp3 = closure_2 && null == closure_1;
                if (!tmp3) {
                  tmp.current = tmp2;
                  handleBuyNow();
                }
              }
            }
          }
          const items = [attempt, handleBuyNow, tmp5, tmp4Result];
          cResult[8] = attempt;
          cResult[9] = handleBuyNow;
          cResult[10] = tmp5;
          cResult[11] = tmp4Result;
          cResult[12] = P;
          cResult[13] = items;
          tmp12 = items;
          tmp11 = P;
        }
      }
    }
  }
  const obj2 = { product, analyticsLocations, orderId: id, onBuySettled, stageCollectibleChangeForEditProfile };
  cResult[2] = analyticsLocations;
  cResult[3] = onBuySettled;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = id;
  cResult[7] = obj2;
  tmp9 = obj2;
}) : (function HeadlessCollectiblesPurchaseRunner(attempt) {
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
});
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = tmp2;
