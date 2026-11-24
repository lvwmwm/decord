// Module ID: 1957
// Function ID: 1958
// Name: scrollToJest
// Dependencies: [1954, 1666]
// Exports: scrollTo

// Module 1957 (scrollToJest)
import _mod1666 from "module_1666" /* 1666 */;
import dispatchCommandJest from "dispatchCommandJest" /* 1954 */;

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
if (_mod1666.IS_JEST) {
  scrollToJest = function scrollToJest() {
    const logger = _mod1666.logger;
    logger.warn("scrollTo() is not supported with Jest.");
  };
}

export const scrollTo = scrollToJest;
