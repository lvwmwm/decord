// Module ID: 1745
// Function ID: 19529
// Name: getWebScrollableElement
// Dependencies: [31, 1585, 1734, 1586, 1729]

// Module 1745 (getWebScrollableElement)
import result from "result";
import isJest from "isJest";

let closure_2;
let closure_3;
let closure_4;
function getWebScrollableElement(arg0) {
  let obj = arg0;
  let scrollableNode;
  if (null != arg0) {
    scrollableNode = obj.getScrollableNode();
  }
  if (null != scrollableNode) {
    obj = scrollableNode;
  }
  return obj;
}
({ useCallback: closure_2, useEffect: closure_3, useRef: closure_4 } = result);
let closure_5 = { code: "function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}" };
let closure_6 = { code: "function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}" };
let closure_7 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];

export const useScrollViewOffset = isJest.isWeb() ? (function useScrollViewOffsetWeb(animatedRef) {
  const _require = animatedRef;
  let obj = _require(current[2]);
  let sharedValue = obj.useSharedValue(0);
  if (null != arg1) {
    sharedValue = arg1;
  }
  current = closure_4(sharedValue).current;
  /* worklet (recovered source) */ function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}
  obj = { animatedRef, getWebScrollableElement, offset: current };
  pnpm_useScrollViewOffsetTs1.__closure = obj;
  pnpm_useScrollViewOffsetTs1.__workletHash = 2244034762234;
  pnpm_useScrollViewOffsetTs1.__initData = closure_5;
  const items = [animatedRef, current];
  let tmp3 = callback(pnpm_useScrollViewOffsetTs1, items);
  callback = tmp3;
  const items1 = [animatedRef, tmp3];
  callback2(() => {
    if (animatedRef) {
      return animatedRef.observe((arg0) => {
        if (arg0) {
          const obj = outer2_8(outer1_0.current);
          const listener = obj.addEventListener("scroll", outer1_2);
          return () => {
            const removed = obj.removeEventListener("scroll", outer2_2);
          };
        } else {
          const logger = callback(current[3]).logger;
          logger.warn("animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.");
        }
      });
    }
  }, items1);
  return current;
}) : (function useScrollViewOffsetNative(arg0, arg1) {
  const _require = arg0;
  let sharedValue = _require(current[2]).useSharedValue(0);
  if (null != arg1) {
    sharedValue = arg1;
  }
  current = closure_4(sharedValue).current;
  const obj = _require(current[2]);
  const tmp2 = closure_4;
  /* worklet (recovered source) */ function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}
  pnpm_useScrollViewOffsetTs2.__closure = { offset: current };
  pnpm_useScrollViewOffsetTs2.__workletHash = 17316000082767;
  pnpm_useScrollViewOffsetTs2.__initData = closure_6;
  const event = _require(current[4]).useEvent(pnpm_useScrollViewOffsetTs2, closure_7);
  const items = [arg0, event];
  callback2(() => {
    if (closure_0) {
      return closure_0.observe((arg0) => {
        const callback = arg0;
        if (arg0) {
          outer1_2.workletEventHandler.registerForEvents(arg0);
          return () => {
            outer2_2.workletEventHandler.unregisterFromEvents(closure_0);
          };
        } else {
          const logger = callback(current[3]).logger;
          logger.warn("animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.");
        }
      });
    }
  }, items);
  return current;
});
