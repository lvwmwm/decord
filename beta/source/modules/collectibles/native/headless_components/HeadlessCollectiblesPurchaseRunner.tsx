// Module ID: 13472
// Function ID: 13473
// Name: HeadlessCollectiblesPurchaseRunner
// Dependencies: [19, 7668, 558, 568, 13473, 2]

// Module 13472 (HeadlessCollectiblesPurchaseRunner)
import c from "c" /* 568 */;
import useHandleBuyNowDefault from "useHandleBuyNow" /* 13473 */;
import noop from "module_19" /* 19 */;

require = fn;
const useNativeCheckoutStore = fn(7668).useNativeCheckoutStore;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ product, attempt } = arg0);
  ({ analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(orderRecord) {
      return orderRecord.orderRecord;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useNativeCheckoutStore(first);
  closure_1 = tmp5;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(orderRequired) {
      return orderRequired.orderRequired;
    };
    cResult[1] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp4Result = useNativeCheckoutStore(tmp6);
  closure_2 = tmp4Result;
  let id;
  if (tmp5 != null) {
    id = tmp5.id;
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === onBuy) {
      if (cResult[4] === onBuySettled) {
        if (cResult[5] === product) {
          if (cResult[6] === stageCollectibleChangeForEditProfile) {
            if (cResult[7] === id) {
              let tmp9 = cResult[8];
            }
            const handleBuyNow = useHandleBuyNowDefault(tmp9).handleBuyNow;
            noop.useRef(0);
            if (cResult[9] === attempt) {
              if (cResult[10] === handleBuyNow) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === tmp4Result) {
                    let tmp11 = cResult[13];
                    let tmp12 = cResult[14];
                  }
                  const effect = obj3.useEffect(tmp11, tmp12);
                  return null;
                }
              }
            }
            const fn3 = function _() {
              if (ref.current !== attempt) {
                let tmp3 = closure_2;
                if (closure_2) {
                  tmp3 = null == closure_1;
                }
                if (!tmp3) {
                  tmp.current = tmp2;
                  handleBuyNow();
                }
              }
            };
            const items = [attempt, handleBuyNow, tmp5, tmp4Result];
            cResult[9] = attempt;
            cResult[10] = handleBuyNow;
            cResult[11] = tmp5;
            cResult[12] = tmp4Result;
            cResult[13] = fn3;
            cResult[14] = items;
            tmp12 = items;
            tmp11 = fn3;
            obj3 = noop;
          }
        }
      }
    }
  }
  const obj2 = { product, analyticsLocations, onBuy, orderId: id, onBuySettled, stageCollectibleChangeForEditProfile };
  cResult[2] = analyticsLocations;
  cResult[3] = onBuy;
  cResult[4] = onBuySettled;
  cResult[5] = product;
  cResult[6] = stageCollectibleChangeForEditProfile;
  cResult[7] = id;
  cResult[8] = obj2;
  tmp9 = obj2;
}) : ((attempt) => {
  attempt = attempt.attempt;
  let handleBuyNow;
  ({ product, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = attempt);
  const tmp = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_1 = tmp;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  closure_2 = tmp2;
  const obj = { product, analyticsLocations, onBuy, orderId: null, onBuySettled: null, stageCollectibleChangeForEditProfile: null };
  let id;
  if (tmp != null) {
    id = tmp.id;
  }
  obj.orderId = id;
  obj.onBuySettled = onBuySettled;
  obj.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
  handleBuyNow = useHandleBuyNowDefault(obj).handleBuyNow;
  noop.useRef(0);
  const items = [attempt, handleBuyNow, tmp, tmp2];
  const effect = noop.useEffect(() => {
    if (ref.current !== attempt) {
      let tmp3 = closure_2;
      if (closure_2) {
        tmp3 = null == closure_1;
      }
      if (!tmp3) {
        tmp.current = tmp2;
        handleBuyNow();
      }
    }
  }, items);
  return null;
});
