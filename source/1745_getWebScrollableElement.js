// Module ID: 1745
// Function ID: 19523
// Name: getWebScrollableElement
// Dependencies: []

// Module 1745 (getWebScrollableElement)
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
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3, useRef: closure_4 } = _module);
const _module1 = require(dependencyMap[1]);
let closure_5 = { code: "function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}" };
let closure_6 = { code: "function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}" };
let closure_7 = ["bottom", "body", "opacity", "accessibilityRole", "call"];

export const useScrollViewOffset = _module1.isWeb() ? function useScrollViewOffsetWeb(animatedRef) {
  const require = animatedRef;
  let obj = require(dependencyMap[2]);
  let sharedValue = obj.useSharedValue(0);
  if (null != arg1) {
    sharedValue = arg1;
  }
  const current = closure_4(sharedValue).current;
  const dependencyMap = current;
  /* worklet (recovered source) */ function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}
  obj = { animatedRef, getWebScrollableElement, offset: current };
  pnpm_useScrollViewOffsetTs1.__closure = obj;
  pnpm_useScrollViewOffsetTs1.__workletHash = 2244034762234;
  pnpm_useScrollViewOffsetTs1.__initData = closure_5;
  const items = [animatedRef, current];
  const tmp3 = tmp3(pnpm_useScrollViewOffsetTs1, items);
  const items1 = [animatedRef, tmp3];
  callback(() => {
    if (arg0) {
      return arg0.observe((arg0) => {
        if (arg0) {
          const obj = callback(obj.current);
          const listener = obj.addEventListener("scroll", closure_2);
          return () => {
            const removed = obj.removeEventListener("scroll", closure_2);
          };
        } else {
          const logger = obj(closure_1[3]).logger;
          logger.warn("animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.");
        }
      });
    }
  }, items1);
  return current;
} : function useScrollViewOffsetNative(arg0, arg1) {
  const require = arg0;
  let sharedValue = require(dependencyMap[2]).useSharedValue(0);
  if (null != arg1) {
    sharedValue = arg1;
  }
  const current = closure_4(sharedValue).current;
  const dependencyMap = current;
  const obj = require(dependencyMap[2]);
  const tmp2 = closure_4;
  /* worklet (recovered source) */ function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}
  pnpm_useScrollViewOffsetTs2.__closure = { offset: current };
  pnpm_useScrollViewOffsetTs2.__workletHash = 17316000082767;
  pnpm_useScrollViewOffsetTs2.__initData = closure_6;
  const event = require(dependencyMap[4]).useEvent(pnpm_useScrollViewOffsetTs2, closure_7);
  const items = [arg0, event];
  callback(() => {
    if (arg0) {
      return arg0.observe((arg0) => {
        if (arg0) {
          workletEventHandler.workletEventHandler.registerForEvents(arg0);
          return () => {
            workletEventHandler.workletEventHandler.unregisterFromEvents(arg0);
          };
        } else {
          const logger = arg0(closure_1[3]).logger;
          logger.warn("animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.");
        }
      });
    }
  }, items);
  return current;
};
