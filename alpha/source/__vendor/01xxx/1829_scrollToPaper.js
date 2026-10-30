// Module ID: 1829
// Function ID: 1830
// Name: scrollToPaper
// Dependencies: [1826, 1655, 1654]
// Exports: scrollTo

// Module 1829 (scrollToPaper)
import react_native from "react-native" /* 1655 */;
import dispatchCommandPaper from "dispatchCommandPaper" /* 1826 */;
import module_1654_mod from "module_1654" /* 1654 */;

function scrollToFabric(arg0, arg1, arg2, arg3) {
  const items = [arg1, arg2, arg3];
  const obj = dispatchCommandPaper;
  obj.dispatchCommand(arg0, "scrollTo", items);
}
let obj = { dispatchCommand: dispatchCommandPaper.dispatchCommand };
scrollToFabric.__closure = obj;
scrollToFabric.__workletHash = 5331784934384;
scrollToFabric.__initData = { code: "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}" };
function scrollToPaper(fn, arg1, arg2, arg3) {
  if (globalThis._WORKLET) {
    global._scrollToPaper(fn(), arg1, arg2, arg3);
  }
}
scrollToPaper.__closure = {};
scrollToPaper.__workletHash = 10376977850779;
scrollToPaper.__initData = { code: "function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}" };
let module_1654 = module_1654_mod;
module_1654.shouldBeUseWeb();
module_1654 = module_1654_mod;
if (module_1654) {
  let scrollToJest;
  if (module_1654.isJest()) {
    scrollToJest = function scrollToJest() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    };
  } else {
    const _module2 = module_1654;
    scrollToJest = _module2.isChromeDebugger() ? (function scrollToChromeDebugger() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    }) : (function scrollToDefault() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    });
  }
  scrollToPaper = scrollToJest;
} else if (module_1654.isFabric()) {
  scrollToPaper = scrollToFabric;
}

export const scrollTo = scrollToPaper;
