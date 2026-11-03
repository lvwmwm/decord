// Module ID: 1956
// Function ID: 1957
// Name: scrollToJest
// Dependencies: [1953, 1665]
// Exports: scrollTo

// Module 1956 (scrollToJest)
import _mod1665 from "module_1665" /* 1665 */;
import dispatchCommandJest from "dispatchCommandJest" /* 1953 */;

let tmp2;
let tmp3;
let items = [{ code: "(function scrollToNative_Pnpm_scrollToNativeTs1(animatedRef,x,y,animated){let[dispatchCommand]=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);})" }, dispatchCommandJest.dispatchCommand];
let c0;
[tmp2, tmp3] = items;
let scrollToJest = function scrollToNative(arg0, arg1, arg2, arg3) {
  const items = [arg1, arg2, arg3];
  _undefined(arg0, "scrollTo", items);
};
const items1 = [tmp3];
scrollToJest.__closure = items1;
scrollToJest.__workletHash = 10260957486676;
scrollToJest.__initData = tmp2;
if (_mod1665.IS_JEST) {
  scrollToJest = function scrollToJest() {
    const logger = _mod1665.logger;
    logger.warn("scrollTo() is not supported with Jest.");
  };
}

export const scrollTo = scrollToJest;
