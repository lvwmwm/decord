// Module ID: 1816
// Function ID: 1817
// Name: scrollToPaper
// Dependencies: [1813, 1642, 1641]
// Exports: scrollTo

// Module 1816 (scrollToPaper)
import react_native from "react-native" /* 1642 */;
import dispatchCommandPaper from "dispatchCommandPaper" /* 1813 */;
import module_1641_mod from "module_1641" /* 1641 */;

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
let module_1641 = module_1641_mod;
module_1641.shouldBeUseWeb();
module_1641 = module_1641_mod;
if (module_1641) {
  let scrollToJest;
  if (module_1641.isJest()) {
    scrollToJest = function scrollToJest() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    };
  } else {
    const _module2 = module_1641;
    scrollToJest = _module2.isChromeDebugger() ? (function scrollToChromeDebugger() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    }) : (function scrollToDefault() {
      const logger = react_native.logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    });
  }
  scrollToPaper = scrollToJest;
} else if (module_1641.isFabric()) {
  scrollToPaper = scrollToFabric;
}

export const scrollTo = scrollToPaper;
