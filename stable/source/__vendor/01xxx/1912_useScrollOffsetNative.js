// Module ID: 1912
// Function ID: 1913
// Name: useScrollOffsetNative
// Dependencies: [19, 1894, 1902, 1668]
// Exports: useScrollOffset

// Module 1912 (useScrollOffsetNative)
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, workletEventHandler;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
let closure_5 = { code: "(function pnpm_useScrollOffsetNativeTs1(event){let[offset]=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;})" };

export function useScrollOffset(animatedRef, scrollViewOffset) {
  let event;
  let tmp5;
  let tmp6;
  _require = animatedRef;
  let sharedValue = scrollViewOffset;
  const obj = require("module_1894");
  const tmp2 = _require;
  const tmp3 = event;
  const tmp4 = closure_3;
  if (scrollViewOffset == null) {
    sharedValue = obj.useSharedValue(0);
  }
  const current = tmp4(sharedValue).current;
  const items = [closure_5, current];
  let c0;
  [tmp5, tmp6] = items;
  function pnpm_useScrollOffsetNativeTs1(contentOffset) {
    let x;
    const tmp = c0;
    if (0 === contentOffset.contentOffset.x) {
      x = contentOffset.contentOffset.y;
    } else {
      x = contentOffset.contentOffset.x;
    }
    tmp.value = x;
  }
  const items1 = [tmp6];
  pnpm_useScrollOffsetNativeTs1.__closure = items1;
  pnpm_useScrollOffsetNativeTs1.__workletHash = 13911422777369;
  pnpm_useScrollOffsetNativeTs1.__initData = tmp5;
  const tmp2Result = tmp2(tmp3[2]);
  event = tmp2Result.useEvent(pnpm_useScrollOffsetNativeTs1, closure_4);
  const items2 = [animatedRef, event];
  closure_2(() => {
    if (animatedRef) {
      return animatedRef.observe((findNodeHandleResult) => {
        let closure_0 = findNodeHandleResult;
        if (closure_0) {
          workletEventHandler = workletEventHandler.workletEventHandler;
          workletEventHandler.registerForEvents(findNodeHandleResult);
          return () => {
            workletEventHandler = event.workletEventHandler;
            workletEventHandler.unregisterFromEvents(closure_0);
          };
        } else {
          const logger = animatedRef(event[3]).logger;
          logger.warn("animatedRef is not initialized in useScrollOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.");
        }
      });
    }
  }, items2);
  return current;
}
