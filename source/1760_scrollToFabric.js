// Module ID: 1760
// Function ID: 19658
// Name: scrollToFabric
// Dependencies: [1757, 1586, 1585]

// Module 1760 (scrollToFabric)
import isJest from "isJest";
import isJest from "isJest";

let closure_3 = { code: "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}" };
let closure_4 = { code: "function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}" };
let tmp3 = (() => {
  function scrollToPaper(arg0, arg1, arg2, arg3) {
    if (globalThis._WORKLET) {
      outer1_0._scrollToPaper(arg0(), arg1, arg2, arg3);
    }
  }
  scrollToPaper.__closure = {};
  scrollToPaper.__workletHash = 10376977850779;
  scrollToPaper.__initData = closure_4;
  return scrollToPaper;
})();
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function scrollToJest() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("scrollTo() is not supported with Jest.");
    }
  } else {
    const _module2 = require("isJest");
    scrollToJest = _module2.isChromeDebugger() ? (function scrollToChromeDebugger() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    }) : (function scrollToDefault() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    });
  }
} else {
  if (isJest.isFabric()) {
    tmp3 = tmp2;
  }
  exports.scrollTo = tmp3;
}
