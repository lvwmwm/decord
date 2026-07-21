// Module ID: 1760
// Function ID: 19652
// Name: scrollToFabric
// Dependencies: [527761408, 452984832, 4009754624]

// Module 1760 (scrollToFabric)
let closure_3 = { code: "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}" };
let closure_4 = { code: "function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}" };
let tmp3 = () => {
  function scrollToPaper(arg0, arg1, arg2, arg3) {
    if (globalThis._WORKLET) {
      closure_0._scrollToPaper(arg0(), arg1, arg2, arg3);
    }
  }
  scrollToPaper.__closure = {};
  scrollToPaper.__workletHash = 10376977850779;
  scrollToPaper.__initData = closure_4;
  return scrollToPaper;
}();
const _module = require(dependencyMap[2]);
const tmp2 = () => {
  function scrollToFabric(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3];
    callback(closure_2[0]).dispatchCommand(nodeFromPublicInstance, "scrollTo", items);
  }
  scrollToFabric.__closure = { dispatchCommand: require(dependencyMap[0]).dispatchCommand };
  scrollToFabric.__workletHash = 5331784934384;
  scrollToFabric.__initData = closure_3;
  return scrollToFabric;
}();
const _module1 = require(dependencyMap[2]);
if (shouldBeUseWebResult) {
  if (_module1.isJest()) {
    function scrollToJest() {
      const logger = require(dependencyMap[1]).logger;
      logger.warn("scrollTo() is not supported with Jest.");
    }
  } else {
    const _module2 = require(dependencyMap[2]);
    scrollToJest = _module2.isChromeDebugger() ? function scrollToChromeDebugger() {
      const logger = require(dependencyMap[1]).logger;
      logger.warn("scrollTo() is not supported with Chrome Debugger.");
    } : function scrollToDefault() {
      const logger = require(dependencyMap[1]).logger;
      logger.warn("scrollTo() is not supported on this configuration.");
    };
  }
} else {
  if (_module1.isFabric()) {
    tmp3 = tmp2;
  }
  exports.scrollTo = tmp3;
}
